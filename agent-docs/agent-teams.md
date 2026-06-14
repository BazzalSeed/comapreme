# Agent Teams — Reference

A project reference for coordinating multiple Claude Code sessions as a **team**. One
session is the **lead** (the one you started); it spawns **teammates** that each run in
their own context window and can message each other directly.

> Distilled from the official docs: <https://code.claude.com/docs/en/agent-teams>
> Agent teams are **experimental** and disabled by default.

---

## 1. Prerequisites

- **Claude Code v2.1.32 or later** — check with `claude --version`.
- The experimental flag enabled (done in this repo — see below).
- For split-pane display: **tmux** or **iTerm2 + the `it2` CLI**. Otherwise teams run
  in-process in your single terminal (works everywhere).

## 2. How this repo is configured

Agent teams are enabled for everyone working in this repo via `.claude/settings.json`
(committed, team-wide):

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

That env flag is the **only** project-level setting needed. Everything else about a team
(its roster, task list, state) is created at runtime and is **not** stored in the repo —
see [§6 Storage](#6-storage--what-not-to-commit).

### Per-developer setting (optional, NOT in the repo)

Display mode is a personal preference because it depends on your terminal. Set it in your
**user** settings (`~/.claude/settings.json`), not in the project:

```json
{
  "teammateMode": "auto"
}
```

- `"auto"` (default) — split panes if you're in tmux or iTerm2, in-process otherwise.
- `"tmux"` — force split panes (auto-detects tmux vs iTerm2).
- `"in-process"` — everyone in your main terminal; cycle with **Shift+Down**.

One-off override: `claude --teammate-mode in-process`.

The default **teammate model** (used when your prompt doesn't name one) is set in
`/config` → *Default teammate model*. Pick *Default (leader's model)* to have teammates
follow the lead's current `/model`. Teammates do **not** inherit the lead's `/model`
otherwise.

## 3. Starting a team

There's no command — you ask in natural language. Describe the task **and** the team
structure:

```
Create an agent team to review the current branch. Spawn three reviewers:
- one using the security-reviewer agent type
- one using the perf-reviewer agent type
- one using the test-reviewer agent type
Have each review independently and report findings. Wait for all three before synthesizing.
```

The lead creates a shared task list, spawns the teammates, coordinates, and tries to clean
up when done. You stay in control — Claude won't create a team without your go-ahead.

## 4. Reusable teammate roles (this repo's `.claude/agents/`)

Define a role **once** as a [subagent](https://code.claude.com/docs/en/sub-agents) and
reuse it both as a delegated subagent and as a team teammate. Reference it by name when
spawning:

```
Spawn a teammate using the security-reviewer agent type to audit src/auth/.
```

This repo ships these starter roles in `.claude/agents/`:

| Agent type          | Purpose                                                        |
| ------------------- | ------------------------------------------------------------- |
| `security-reviewer` | Vulnerabilities: auth, injection, secrets, access control     |
| `perf-reviewer`     | Performance: complexity, N+1, allocations, blocking I/O       |
| `test-reviewer`     | Test coverage gaps and assertion quality                      |
| `researcher`        | Focused investigation across code + external docs             |

When a subagent definition runs as a teammate:

- Its `tools` allowlist and `model` are honored.
- Its body is **appended** to the teammate's system prompt (it does not replace it).
- Team tools (`SendMessage`, task management) are **always** available, even if `tools`
  restricts everything else.
- ⚠️ `skills` and `mcpServers` frontmatter fields are **ignored** for teammates — they
  load skills/MCP from your project + user settings like a normal session instead.

To add a role, drop a new `name.md` in `.claude/agents/` with frontmatter
(`name`, `description`, `tools`, `model`) and an instruction body. See the existing files
as templates.

## 5. Controlling the team

- **Talk to a teammate directly** — *in-process:* Shift+Down to cycle, type to message,
  Enter to view their session, Esc to interrupt, Ctrl+T toggles the task list.
  *Split-pane:* click into their pane.
- **Tasks** — shared list with states pending / in-progress / completed, plus
  dependencies (a task unblocks automatically when its prerequisites finish). The lead
  assigns tasks or teammates self-claim the next unblocked one. File locking prevents
  double-claims.
- **Require plan approval** — "Spawn an architect teammate to refactor X. Require plan
  approval before they make changes." The teammate stays in read-only plan mode until the
  lead approves. Steer the lead's judgment with criteria ("only approve plans with test
  coverage").
- **Shut down a teammate** — "Ask the researcher teammate to shut down." It can approve or
  reject with a reason.
- **Clean up** — "Clean up the team." **Always via the lead**, never a teammate. Cleanup
  fails if any teammate is still running, so shut them down first.

## 6. Storage — what NOT to commit

Created and managed automatically at runtime; removed on cleanup or session end:

- Team config: `~/.claude/teams/{team-name}/config.json` (holds session IDs, tmux pane
  IDs — **don't hand-edit or pre-author**; it's overwritten on every state update)
- Task list: `~/.claude/tasks/{team-name}/`

There is **no** project-level team config. A file like `.claude/teams/teams.json` in the
repo is **not** recognized — Claude treats it as an ordinary file. Reusable roles go in
`.claude/agents/` (§4); that's the only team-related thing you commit.

## 7. Quality-gate hooks (optional)

Enforce rules at team lifecycle points via `.claude/settings.json` hooks. Exit code 2
sends feedback / blocks:

| Hook            | Fires when…                          | Exit 2 effect                          |
| --------------- | ------------------------------------ | -------------------------------------- |
| `TeammateIdle`  | a teammate is about to go idle       | sends feedback, keeps it working       |
| `TaskCreated`   | a task is being created              | prevents creation, sends feedback      |
| `TaskCompleted` | a task is being marked complete      | prevents completion, sends feedback    |

Example — block marking a task complete unless tests pass:

```json
{
  "hooks": {
    "TaskCompleted": [
      {
        "hooks": [
          { "type": "command", "command": "npm test --silent || exit 2" }
        ]
      }
    ]
  }
}
```

## 8. Subagents vs agent teams — which to use

| | Subagents | Agent teams |
| --- | --- | --- |
| Communication | report back to main agent only | message each other directly |
| Coordination | main agent manages all work | shared task list, self-coordination |
| Best for | focused tasks, only the result matters | work needing discussion & collaboration |
| Token cost | lower (summarized back) | **higher** (each teammate is a full session) |

Use **teams** for research, parallel review, competing-hypothesis debugging, and
cross-layer features where workers benefit from talking. Use **subagents** (or a single
session) for sequential work, same-file edits, or quick focused lookups.

## 9. Best practices

- **3–5 teammates** for most work; ~5–6 tasks each. Three focused teammates beat five
  scattered ones.
- **Give context in the spawn prompt** — teammates load CLAUDE.md/MCP/skills but **not**
  the lead's conversation history. Put task specifics in the prompt.
- **Avoid file conflicts** — give each teammate a distinct set of files; two editing the
  same file overwrite each other.
- **Name teammates** in your spawn instruction so you can reference them later.
- **Wait for teammates** — if the lead starts doing the work itself: "Wait for your
  teammates to complete their tasks before proceeding."
- **Start with research/review** (no parallel writes) to learn the workflow.
- **Pre-approve common operations** in permission settings — teammate permission prompts
  bubble up to the lead and create friction.
- **Monitor and steer**; don't let a team run unattended for long.

## 10. Known limitations

- **No session resumption** for in-process teammates — `/resume` and `/rewind` don't
  restore them; tell the lead to spawn new ones.
- **Task status can lag** — teammates sometimes don't mark tasks complete, blocking
  dependents; nudge them or update status manually.
- **Shutdown can be slow** — a teammate finishes its current tool call first.
- **One team at a time** per lead; clean up before creating another.
- **No nested teams** — only the lead manages the team; teammates can't spawn teammates.
- **Lead is fixed** for the team's lifetime; you can't promote a teammate.
- **Permissions set at spawn** — all teammates inherit the lead's permission mode
  (including `--dangerously-skip-permissions`). Change individual modes after spawning.
- **Split panes** need tmux or iTerm2 — not supported in VS Code's integrated terminal,
  Windows Terminal, or Ghostty (those fall back to in-process).
- **Token usage scales linearly** with teammate count — see the cost guidance in the docs.

## 11. Quick examples

**Parallel code review of a PR:**
```
Create an agent team to review PR #142. Spawn three reviewers using the
security-reviewer, perf-reviewer, and test-reviewer agent types. Have each review
and report findings; wait for all three, then synthesize.
```

**Competing-hypothesis debugging:**
```
Users report the app exits after one message instead of staying connected. Spawn 5
researcher teammates to investigate different hypotheses. Have them message each other
to disprove each other's theories, like a scientific debate. Update a findings doc with
the consensus.
```

**Parallel feature work (separate files per teammate):**
```
Create a team with 3 teammates to build the export feature: one owns the API route,
one owns the serializer, one owns the tests. Keep them on separate files. Use Sonnet
for each.
```
