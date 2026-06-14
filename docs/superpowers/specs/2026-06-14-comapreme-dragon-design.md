# comapreme — Phase 1 (Dragon vertical slice) — Design Spec

**Date:** 2026-06-14
**Status:** Approved (brainstorm complete) — autonomous overnight build authorized
**Design system:** see [`docs/design-system.md`](../../design-system.md)

## 1. What this is

A playful web app where you enter your date of birth, learn your **Chinese zodiac sign**,
and meet the legends who share it plus fun facts. Phase 1 is a **vertical slice**: nail one
sign — the **Dragon** — end to end with a standout, unique style. The full DOB→sign flow
works for everyone; the other 11 signs show a graceful "coming soon."

## 2. Goals & non-goals

**Goals**
- Correct DOB → Chinese zodiac (sign + element) with accurate lunar-new-year boundary.
- A distinctive, charming Dragon result page: serpentine Festive-Gold dragon, game banner,
  silly interactivity, figures + traits + lore + personalized year.
- Runs locally (`npm run dev`), tests pass, no external paid services.

**Non-goals (phase 1)**
- Rich content for the other 11 signs (stubbed "coming soon").
- Accounts, persistence, sharing backends, analytics.
- 3D engine / external 3D assets (parked).

## 3. Tech stack

- **Next.js (App Router) + TypeScript**, React.
- **Tailwind** for layout + **CSS custom properties** for the locked design tokens.
- Interactivity: **pure React + CSS** (refs, pointer events, keyframes, IntersectionObserver).
  No GSAP/Three.js (chosen for reliability + zero asset deps; can add later).
- **Vitest** for unit tests (zodiac engine is the correctness-critical piece).

## 4. Architecture (data-driven registry)

All 12 signs live in a typed registry. The result page is a template that renders rich
content where present and a "coming soon" card otherwise. Only the Dragon has full content +
the bespoke interactive hero. Clean seams so adding signs later = data + assets only.

```
src/
  app/
    page.tsx                 # Landing + DOB entry  (route: /)
    sign/[slug]/page.tsx     # Result page          (route: /sign/dragon, etc.)
    layout.tsx, globals.css  # tokens + base styles
  lib/
    zodiac.ts                # getZodiac(date) -> { sign, slug, year, element }  (pure)
    zodiac.test.ts           # Vitest unit tests (boundary cases)
    cny.ts                   # Chinese New Year boundary dates lookup
  data/
    registry.ts              # 12 signs: name, slug, animal, years, hasContent
    signs/dragon.ts          # curated Dragon content (figures, traits, lore, elements)
  components/
    DobInput.tsx             # date entry + validation
    dragon/DragonSvg.tsx     # the serpentine dragon SVG (design-system anatomy)
    dragon/DragonHero.tsx    # interactive hero: banner + chips + dragon + bubble + JS
    GameBanner.tsx, StatChip.tsx, SpeechBubble.tsx
    FigureGallery.tsx, TraitBars.tsx, LorePanel.tsx, DragonYear.tsx
    ComingSoon.tsx, Reveal.tsx (IntersectionObserver wrapper)
```

## 5. Core logic — `getZodiac(date)`

- **Animal** from the year, **but corrected for the Chinese New Year boundary**: anyone born
  before that lunar year's CNY date belongs to the *previous* animal year. A small lookup
  table (`cny.ts`) of CNY dates covers a practical range (~1900–2044); outside it, fall back
  to an approximation and flag low confidence (documented).
- **Element** (Wood/Fire/Earth/Metal/Water) from the (CNY-corrected) year: element cycles
  every 2 years; `elementIndex = floor(((year - 4) % 10) / 2)`.
- Returns `{ animal, slug, year, element, elementAnimal }` e.g. "Wood Dragon".
- **Pure, deterministic, fully unit-tested.** Test cases: known birthdays, both sides of a
  CNY boundary (e.g. early-Feb births), each element of the cycle, Dragon years
  (…1976, 1988, 2000, 2012, 2024).

## 6. Screens

### Landing (`/`)
- comapreme logo + tagline ("Discover your Chinese zodiac — and the legends who share your
  sign."), a friendly DOB input + "Reveal my sign 🐉" button, a peeking idle dragon.
- Validation: empty / invalid / future dates → friendly inline message.
- Submit → compute sign → route to `/sign/[slug]`.

### Result (`/sign/[slug]`)
Dragon (full) sections, in order:
1. **Hero** — game banner ("YEAR OF THE DRAGON") + stat chips (element/fortune/vibe) +
   interactive serpentine dragon (eyes follow, hover perks up, click = jump + fire + jokes) +
   cycling speech bubble.
2. **Icons born in your year** — ~8–10 verified Dragon-year figures, game cards, fun fact on
   hover/tap. Portraits = illustrated/emoji placeholders (no licensing risk).
3. **Dragon traits** — game-stat bars (Charisma/Ambition/Drama…) with playful copy.
4. **Dragon lore** — short illustrated panel: flaming pearl, nine resemblances, imperial
   symbolism. Scroll-revealed.
5. **Your dragon year** — personalized element + year ("You're a Wood Dragon"), element-styled,
   from the entered DOB (passed via query param or re-derived).
6. **Footer / hook** — "Check a friend's sign →"; quiet phase-2 hook (compare yourself to the icons).

Non-Dragon slug → `ComingSoon` (sign name + "we're crafting it"). Unknown slug → 404 → home.

## 7. Content (Dragon, curated & verified)

Hand-authored static data in `data/signs/dragon.ts`:
- **Figures:** real people born in Dragon years (verified against the CNY-corrected rule),
  each with name, birth year, one fun fact. (e.g. Bruce Lee 1940, John Lennon 1940,
  Salvador Dalí 1904, Rihanna 1988, etc. — verified at build.)
- **Traits:** Dragon personality set with playful stat values.
- **Lore:** 2–3 short bites (pearl, nine resemblances, imperial power).
- **Elements:** the 5 Dragon-year/element pairings table for the personalized section.

## 8. Error handling & edge cases

- DOB validation (empty, malformed, future, pre-1900) handled in the input with friendly copy.
- `prefers-reduced-motion` respected (disable float/parallax/auto-motion).
- Interactivity is progressive: with JS off / SSR, content still renders; eye-tracking etc.
  are enhancements.
- Unknown sign slug → Next `notFound()`.

## 9. Testing & verification

- **Vitest unit tests** for `getZodiac` / `cny` (the correctness core) — must pass.
- Build must succeed (`npm run build`) and `npm run dev` must serve the flow.
- Manual visual pass is implied (animation/interaction not unit-tested).
- A morning summary documents what was built, test results, and how to run it.

## 10. Open items / future

- Banner center-divider fix (noted in design system).
- Phase 2: the other 11 signs (data + assets), "compare me" feature (the app's namesake),
  optional deploy to Vercel, richer figure portraits, optional GSAP/3D revisit.
