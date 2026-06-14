# compareme — Share + Compatibility Compare — Design Spec

**Date:** 2026-06-14
**Branch:** `feat/share-compare`
**Status:** Approved (user delegated decisions; build e2e)

## Goal

Two pre-launch social features: (1) share your sign with a friend, (2) the friend compares
their sign against yours for a funny compatibility verdict with animations. Local-only,
no backend — everything rides in the URL.

## Flow

1. **Share** — on a sign result page, a "Share with a friend" button. Uses `navigator.share`
   when available, else copies the link + shows a toast. Link encodes the sharer:
   `/compare?a=<slug>&ay=<year?>&an=<name?>`.
2. **Friend entry** — opening `/compare?a=dragon&ay=2012&an=Alex` shows "Alex is a Water
   Dragon 🐉 — are you compatible?" with a year picker (+ optional name). On submit →
   `/compare?a=dragon&ay=2012&an=Alex&b=<slug>&by=<year>&bn=<name?>`.
3. **Result** — both creatures react with a tier-specific funny animation, an animated
   compatibility meter, a verdict (title + blurb + score), and share-back / try-again CTAs.
4. **Bare `/compare`** (no `a`) — fallback: two year pickers to compare any two signs.

## Compatibility logic (`lib/compatibility.ts`, pure + tested)

Animals indexed 0–11 (Rat..Pig, same order as `ANIMALS`). Tiers, in resolution priority:

1. **Soulmates** — secret-friend pair: `(a + b) % 12 === 1`. Score 92–99.
2. **Two of a Kind** — same sign: `a === b`. Score 70–85.
3. **Dream Team** — same trine: `a % 4 === b % 4` (and a≠b). Score 84–95.
4. **Cosmic Clash** — opposite: `Math.abs(a - b) === 6`. Score 8–32.
5. **It's Complicated** — everything else. Score 45–70.

Score gets deterministic jitter from the pair (no randomness — stable per pair, order-independent).
Each tier → `{ key, title, blurb, emoji, animation }` where `animation ∈ {hearts, sparks, mirror, shrug, clash}`.

`getCompatibility(slugA, slugB) → { tier, score, title, blurb, emoji, animation }`.

## Components / files

- `src/lib/compatibility.ts` + `compatibility.test.ts` — matrix, tiers, score, verdicts.
- `src/app/compare/page.tsx` — reads query (`a, ay, an, b, by, bn`); routes to entry/result/fallback.
- `src/components/compare/FriendEntry.tsx` — "X is a <sign>" + year picker + optional name.
- `src/components/compare/CompatibilityResult.tsx` — two creatures + meter + animation + verdict + CTAs.
- `src/components/compare/TwoPicker.tsx` — bare fallback (two year selects).
- `src/components/ShareButton.tsx` — Web Share + clipboard fallback + toast.
- `src/components/CompatibilityMeter.tsx` — animated 0–100 bar in the design system.
- Sign result page (`sign/[slug]/page.tsx`): add Share + "Compare with a friend" CTAs.
- New CSS keyframes in globals for the funny animations (hearts float, clash shake/bonk).

## Reuse / consistency

Uses existing `getZodiacByYear`, `CREATURES`, `SIGNS`, design tokens, `GameBanner`/`StatChip`/
`Reveal`, and the same Festive-Gold style. Year picker reuses the YearInput pattern.

## Edge cases

- Missing/invalid query params → graceful fallback (bare compare or friendly prompt).
- Names sanitized/length-capped; absent names → "You" / "Your friend" or the sign name.
- `prefers-reduced-motion` respected (meter snaps, no shake/float).
- Clipboard/share unavailable → manual copy field.

## Testing

- Unit tests for `getCompatibility`: every tier (soulmate, trine, same, clash, neutral),
  order-independence, score ranges, all 144 pairs return a valid tier.
- Browser verification of share copy, friend entry, and each animation tier.

## Out of scope

Accounts, server persistence, real-time, saving past comparisons.
