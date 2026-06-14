# comapreme — Phase 1 Implementation Plan (overnight build)

**Spec:** [`../specs/2026-06-14-comapreme-dragon-design.md`](../specs/2026-06-14-comapreme-dragon-design.md)
**Mode:** autonomous, sequential, local-only. Commit after each milestone.

## Milestones

### M1 — Scaffold & tooling
- Next.js (App Router, TS, Tailwind, src dir, `@/*` alias) into the existing repo
  (stash `.claude` / `.superpowers`, scaffold, restore, merge `.gitignore`).
- Add Vitest + config + `test` script.
- Verify: `npm run build` clean, `npm run test` runs.
- **Commit.**

### M2 — Zodiac engine (TDD)
- `lib/cny.ts` (Chinese New Year boundary table) + `lib/zodiac.ts` (`getZodiac`).
- `lib/zodiac.test.ts` first (red), then implement (green): boundary births, element cycle,
  Dragon years, known birthdays.
- Verify: all tests pass.
- **Commit.**

### M3 — Data layer
- `data/registry.ts` (12 signs) + `data/signs/dragon.ts` (figures verified against the
  CNY-corrected rule, traits, lore, element table).
- Quick test that every Dragon figure's birth year actually maps to Dragon.
- **Commit.**

### M4 — Design tokens & primitives
- `globals.css` with all design-system CSS variables + base background + reduced-motion.
- Primitives: `GameBanner`, `StatChip`, `SpeechBubble`, `Reveal`, primary button styles.
- **Commit.**

### M5 — The dragon
- `dragon/DragonSvg.tsx` (anatomy per design system) + `dragon/DragonHero.tsx`
  (banner + chips + dragon + bubble + eye-tracking/hover/click/jokes, reduced-motion aware).
- **Commit.**

### M6 — Pages & sections
- Landing `/` with `DobInput` + validation + reveal → route.
- `sign/[slug]/page.tsx`: Dragon → Hero + `FigureGallery` + `TraitBars` + `LorePanel` +
  `DragonYear` + footer; others → `ComingSoon`; unknown → `notFound()`.
- Pass DOB through (query param) for the personalized section.
- **Commit.**

### M7 — Polish & verify
- Distinctiveness pass (carved type, sticker bubbles, living dragon, staggered reveals),
  responsive check, reduced-motion check.
- `npm run test` ✅, `npm run build` ✅, `npm run dev` serves the full flow.
- Write morning summary (`docs/OVERNIGHT-SUMMARY.md`): what shipped, test/build output,
  how to run, known gaps, next steps.
- **Final commit.**

## Risks & mitigations
- **Scaffold conflicts with existing dirs** → stash/restore approach above.
- **Tailwind v4 config drift** → use create-next-app defaults; keep tokens in CSS vars.
- **CNY table scope** → cover 1900–2044; document fallback outside range.
- **Time/scope** → sections are independent; if time-constrained, hero + figures + zodiac
  engine are the must-haves; traits/lore/year degrade gracefully. Commit per milestone so
  progress is never lost.
