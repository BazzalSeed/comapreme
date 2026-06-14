# comapreme — build summary (2026-06-14)

> **Update (after first review):** Now **all 12 signs are fully built** — each with its own
> bespoke animated vector creature (eye-tracking + blink), curated figures, traits, lore, and
> personalized element. Input simplified to **year-only**. Landing shows a **floating creature
> that shuffles through all 12 signs**. (Sections below predate this; the Dragon notes now
> apply to every sign.)

---


Good morning ☀️ Here's what got built while you slept, and how to run it.

## TL;DR

The **Dragon vertical slice is done and working** — local only, all tests passing, clean
production build. Enter any birth date → get your correct Chinese zodiac sign → the Dragon
gets the full, distinctive experience; the other 11 signs show a graceful "coming soon."

```bash
npm install      # if you haven't since the scaffold
npm run dev      # http://localhost:3000
npm test         # 18 unit tests (zodiac engine + data verification)
npm run build    # clean production build
```

## What works (verified in a real browser)

- **Landing** (`/`): Cinzel gold "comapreme" title, a peeking serpentine dragon, the DOB
  input with friendly validation (empty / future / pre-1900). → `docs/screenshots/landing.png`
- **Zodiac accuracy**: `getZodiac` corrects for the **Chinese New Year boundary** (someone
  born early-Feb gets the *right* animal, not a naive year guess) and derives the element
  (Wood/Fire/Earth/Metal/Water). 18 passing unit tests pin this, incl. boundary cases.
- **Dragon result** (`/sign/dragon`): the locked style —
  - Game banner ("YEAR OF THE DRAGON") + stat chips (your element / fortune / vibe)
  - Interactive serpentine dragon: **eyes follow your cursor, head tilts, hover = perks up,
    click = jump + 🔥 + a new joke**, auto-cycling speech bubble
  - **Icons born in your year**: 10 verified Dragon-year legends + fun facts
  - **Dragon traits**: game-stat bars (Charisma 5 … Patience 2)
  - **Dragon lore**: flaming pearl, nine resemblances, imperial power, master of water
  - **Your dragon**: personalized to your DOB — e.g. "You're a Water Dragon, born in 2012"
    (element-colored). → `docs/screenshots/dragon-result.png`, `traits-view.png`, `lore-year-view.png`
- **Coming soon** (e.g. `/sign/horse`): banner + emoji + "the Dragon got first dibs 🐉".
  → `docs/screenshots/coming-soon.png`
- **End-to-end**: typed a DOB, hit Reveal, routed to the right sign + personalization. ✅
- **Accessibility/robustness**: `prefers-reduced-motion` respected; reveal-on-scroll has a
  fallback so content can't get stuck hidden; no console errors.

## Stack & key decisions

- **Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript**; **Vitest** for tests.
- Fonts: **Cinzel** (carved imperial titles) + **Fredoka** (playful body) — chosen for a
  distinctive, non-generic look.
- The dragon + all interactivity are **pure React + SVG + CSS** — no 3D engine, no external
  3D assets (we parked the GLB/Three.js route together; this is reliable, unique, and zero
  licensing risk). The earlier GLB import is still possible later.
- **Data-driven registry**: all 12 signs are typed entries; only Dragon has rich content.
  Adding the other signs later = data + (optional) art, no architecture changes.

## How it's organized

- `src/lib/zodiac.ts` + `cny.ts` — the engine (CNY-corrected). `src/lib/zodiac.test.ts`.
- `src/data/registry.ts`, `src/data/signs/dragon.ts`, `src/data/content.ts` — content
  (figures fact-checked + verified to be Dragon years by `registry.test.ts`).
- `src/components/dragon/` — `DragonSvg`, `DragonHero` (the interactive star).
- `src/components/sections/` — FigureGallery, TraitBars, LorePanel, DragonYear, ComingSoon.
- `docs/design-system.md`, `docs/superpowers/specs/…`, `docs/superpowers/plans/…`.

Built in 7 committed milestones on branch **`feat/dragon-vertical-slice`** (each milestone
is its own commit, so history reads cleanly).

## Known gaps / honest notes

- **Other 11 signs**: intentionally "coming soon" (this was a vertical slice).
- **CNY table** covers 1924–2044; outside that it approximates (flagged in code).
- **Figure portraits** are emoji avatars (no licensing risk). Real illustrated portraits
  are a nice phase-2 upgrade.
- The dragon art is the approved concept fidelity — it can be refined further (it's all
  editable SVG in `DragonSvg.tsx`).
- 2 moderate npm advisories from the scaffold (transitive); not addressed to avoid
  `--force` breaking changes overnight.

## Suggested next steps

1. Look at the screenshots / run `npm run dev` and play with the dragon.
2. If you still want the generated **GLB dragon**, drop it in and we swap `DragonSvg` for an
   R3F scene behind the same layout.
3. Mass-produce the other 11 signs (data + content), reusing every component.
4. Build the namesake **"compare me"** feature — compare yourself to the icons who share
   your sign.
5. Deploy to Vercel when you're ready (currently local-only by request).
