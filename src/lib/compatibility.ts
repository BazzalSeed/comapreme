import { ANIMALS } from "./zodiac";

export type CompatTier = "soulmates" | "dreamTeam" | "twoOfAKind" | "complicated" | "clash";
export type CompatAnimation = "hearts" | "sparks" | "mirror" | "shrug" | "clash";

export interface Compatibility {
  tier: CompatTier;
  title: string;
  blurb: string;
  emoji: string;
  animation: CompatAnimation;
  /** 0–100. */
  score: number;
  slugA: string;
  slugB: string;
}

function indexOfSlug(slug: string): number {
  return ANIMALS.findIndex((a) => a.toLowerCase() === slug.toLowerCase());
}
function animalOf(slug: string): string {
  const i = indexOfSlug(slug);
  return i >= 0 ? ANIMALS[i] : slug;
}

const TIERS: Record<CompatTier, { title: string; emoji: string; animation: CompatAnimation; range: [number, number] }> = {
  soulmates: { title: "Soulmates", emoji: "💞", animation: "hearts", range: [92, 99] },
  dreamTeam: { title: "Dream Team", emoji: "⚡", animation: "sparks", range: [84, 95] },
  twoOfAKind: { title: "Two of a Kind", emoji: "👯", animation: "mirror", range: [70, 85] },
  complicated: { title: "It's… Complicated", emoji: "🤔", animation: "shrug", range: [45, 70] },
  clash: { title: "Cosmic Clash", emoji: "💥", animation: "clash", range: [8, 32] },
};

function resolveTier(a: number, b: number): CompatTier {
  if ((a + b) % 12 === 1) return "soulmates"; // secret friends (Liu He)
  if (a === b) return "twoOfAKind";
  if (a % 4 === b % 4) return "dreamTeam"; // same trine (San He)
  if (Math.abs(a - b) === 6) return "clash"; // opposites
  return "complicated";
}

function scoreFor(tier: CompatTier, a: number, b: number): number {
  const [lo, hi] = TIERS[tier].range;
  const key = a < b ? a * 12 + b : b * 12 + a; // order-independent
  return lo + ((key * 37) % (hi - lo + 1));
}

function blurbFor(tier: CompatTier, slugA: string, slugB: string): string {
  const A = animalOf(slugA);
  const B = animalOf(slugB);
  switch (tier) {
    case "soulmates":
      return `${A} and ${B} are secret-friend soulmates — the zodiac literally pairs you two up. Cosmic besties, no notes.`;
    case "dreamTeam":
      return `${A} and ${B} share a power trine. Same wavelength, instant teamwork — you finish each other's schemes.`;
    case "twoOfAKind":
      return `Two ${A}s. You *get* each other perfectly… which also means you'll fight over the same spotlight. Iconic chaos.`;
    case "clash":
      return `${A} vs ${B}: polar opposites. Maximum drama, maximum sparks. It's a clash — but honestly kind of thrilling.`;
    default:
      return `${A} and ${B}: no fireworks, no fistfights. A slow-burn 'it depends on the day' situationship. Could be cute!`;
  }
}

/** Chinese-zodiac compatibility between two signs (by slug). Pure + order-independent. */
export function getCompatibility(slugA: string, slugB: string): Compatibility {
  const a = indexOfSlug(slugA);
  const b = indexOfSlug(slugB);
  if (a < 0 || b < 0) throw new Error(`Unknown sign(s): "${slugA}" / "${slugB}"`);
  const tier = resolveTier(a, b);
  const t = TIERS[tier];
  return {
    tier,
    title: t.title,
    blurb: blurbFor(tier, slugA, slugB),
    emoji: t.emoji,
    animation: t.animation,
    score: scoreFor(tier, a, b),
    slugA: slugA.toLowerCase(),
    slugB: slugB.toLowerCase(),
  };
}
