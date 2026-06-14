import type { Animal, Element } from "@/lib/zodiac";

/** Lightweight metadata for every sign (drives routing + "coming soon"). */
export interface SignMeta {
  animal: Animal;
  slug: string;
  emoji: string;
  /** Whether full rich content exists yet (phase 1: only Dragon). */
  hasContent: boolean;
  /** One-line teaser for the coming-soon card. */
  blurb: string;
}

/** A famous person born in a year of this sign. */
export interface Figure {
  name: string;
  /** Gregorian birth year (a year of this sign). */
  year: number;
  /** Field they're known for. */
  field: string;
  /** Representative emoji (portrait stand-in — no licensing risk). */
  emoji: string;
  /** A genuinely fun fact. */
  funFact: string;
}

/** A personality stat, rendered as a game-style bar (value 1–5). */
export interface Trait {
  label: string;
  value: 1 | 2 | 3 | 4 | 5;
  blurb: string;
}

/** A short bite of mythology/lore. */
export interface LoreBite {
  title: string;
  body: string;
  emoji: string;
}

/** Info for one element-variant of the sign (for the personalized section). */
export interface ElementInfo {
  element: Element;
  years: number[];
  blurb: string;
}

/** Full rich content for a sign with `hasContent: true`. */
export interface SignContent {
  slug: string;
  animal: Animal;
  /** Banner sub-line, e.g. "YOU ARE BORN IN THE YEAR OF THE". */
  bannerSub: string;
  tagline: string;
  /** Cycling speech-bubble jokes. */
  jokes: string[];
  /** Lines shown when the dragon is hovered (perks up). */
  excited: string[];
  /** Static vibe chip label. */
  vibe: string;
  figures: Figure[];
  traits: Trait[];
  lore: LoreBite[];
}
