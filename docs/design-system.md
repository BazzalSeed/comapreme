# compareme — Design System

The single source of truth for the look, feel, and motion of compareme. Every screen and
every future zodiac sign must follow this. **Playful but authentic** is the north star:
genuinely correct Chinese iconography, delivered with charm and humor — never generic.

---

## 1. Brand voice & tone

- **Playful, cheeky, a little chaotic.** Speech-bubble jokes, game-y stat labels, emoji used
  with intent. Think mobile-game energy, not corporate astrology app.
- **Authentic underneath the fun.** The dragon is anatomically a *Chinese* dragon; lore is
  real; figures are verified. The humor rides on top of correct substance.
- Copy is short, confident, funny. Example lines: "You're a DRAGON — obviously the main
  character 😎", "I breathe fire AND vibes 🔥".

## 2. Color palette (Festive Gold)

The locked palette. Use the CSS variable names in code; never hardcode hex elsewhere.

| Token            | Hex        | Use |
| ---------------- | ---------- | --- |
| `--gold`         | `#e6b23c`  | Primary — dragon body, banners, buttons, accents |
| `--gold-edge`    | `#9c6a16`  | Outlines, bevels, shadows on gold |
| `--gold-soft`    | `#c98e22`  | Mid gold for gradients, chip borders |
| `--belly`        | `#fbe9bf`  | Light gold — dragon belly/snout, soft fills |
| `--vermilion`    | `#d6342b`  | Mane fins, banners, whiskers, accents (luck) |
| `--vermilion-dk` | `#b3241c`  | Banner gradient bottom, deep red |
| `--jade`         | `#1f9e8c`  | Secondary accent — antlers, pearl, highlights (growth) |
| `--ink`          | `#181818`  | Text, eyes, outlines, comic-style borders |
| `--cream`        | `#fdf6e6`  | Background base (top of radial) |
| `--cream-deep`   | `#ecdcb8`  | Background base (bottom of radial) |

**Background:** `radial-gradient(circle at 50% 115%, var(--cream) 0%, #f4ead2 70%, var(--cream-deep) 100%)`.

**Element accent colors** (for the personalized "Your Dragon Year" + future use), from the
Chinese five elements:

| Element | Token            | Hex       |
| ------- | ---------------- | --------- |
| Wood    | `--el-wood`      | `#4f9d5d` |
| Fire    | `--el-fire`      | `#e0533b` |
| Earth   | `--el-earth`     | `#c79a4b` |
| Metal   | `--el-metal`     | `#b9b9c2` |
| Water   | `--el-water`     | `#3a7ca5` |

## 3. Typography

- **Display / titles:** a bold serif (Georgia stack as the safe default, or a self-hosted
  display serif). Heavy weight, slight letter-spacing, used for banner titles ("DRAGON")
  with a dark text-shadow for the carved game look.
- **UI / copy / chips / jokes:** a rounded-friendly sans (Trebuchet MS stack default).
  Bold for chips and speech bubbles.
- **Comic borders:** speech bubbles use a 3px `--ink` border + `3px 3px 0 var(--ink)` hard
  shadow (sticker/comic style).

## 4. The Dragon (anatomy rules — non-negotiable)

A **Chinese** dragon, not western. Always:

- **Long serpentine body** (a flowing "noodle"), drawn as a smooth wavy stroked path with a
  `--gold-edge` outline under a `--gold` body and a faint white belly highlight.
- **Mane fins** (`--vermilion`) as flame-like spikes along the back.
- **Stag antlers** (`--jade`), branched, on the head.
- **Long catfish whiskers** (`--vermilion`) trailing from the snout, gently swaying.
- **Four legs** with simple 3-claw feet. **No bat wings. Ever.**
- **A flaming pearl** (`--jade`) it faces/chases, gently pulsing.
- **Cute overlay:** big white eyes with `--ink` pupils + sparkle, light blush. Charm without
  losing the authentic silhouette.

Reference SVG lives in the build at `src/components/dragon/DragonSvg.tsx`.

## 5. Components

- **Game banner:** ornate plaque — red gradient (`--vermilion`→`--vermilion-dk`) inner panel,
  4px `--gold` top/bottom borders, `龍` emblem end-caps on gold, carved serif title.
  *(Known fix from concept: remove the stray center divider pseudo-element.)*
- **Stat chips:** rounded pills, `--belly`→`--gold-soft` gradient, `--gold-soft` border,
  `--gold-edge` bottom shadow, bold small caps. Used for element/fortune/vibe.
- **Speech bubble:** white, comic border + hard shadow, downward tail, cycling copy.
- **Figure cards:** game-card style — gold border, cream fill, portrait area, name + fun
  fact revealed on hover/tap.
- **Trait bars:** game-stat rows — label + segmented bar (▰▰▰▰▱) in `--gold`/`--vermilion`.
- **Primary button:** gold gradient, `--gold-edge` border + 3px bottom shadow, white bold text.

## 6. Motion & interaction principles

- **Always alive:** the dragon idles with a slow float (translateY + tiny rotate); whiskers
  sway; eyes blink (~every 4.5s); pearl pulses.
- **Reactive:** pupils + head follow the cursor; hovering the dragon makes it "perk up"
  (scale ~1.06) and say something; clicking → jump + 🔥 fire puff + a new joke.
- **Scroll reveals:** sections fade/slide in on scroll (IntersectionObserver), staggered.
- **Respect `prefers-reduced-motion`:** disable float/parallax, keep content static.
- Keep it snappy and a little bouncy — easing like `ease-in-out`, short durations.

## 7. Implementation notes

- Tokens live as CSS custom properties in global styles; Tailwind utilities for layout.
- Interactivity is **pure React + CSS** (refs, pointer events, CSS keyframes,
  IntersectionObserver) — **no 3D engine, no external 3D assets** (decided: pure JS/SVG/CSS
  for reliability and uniqueness). The GLB/Three.js route is parked, not deleted.
- Distinctiveness bar: this should not look like a default template. Lean into the
  game-banner framing, the sticker/comic speech bubble, the carved gold type, and the living
  dragon.
