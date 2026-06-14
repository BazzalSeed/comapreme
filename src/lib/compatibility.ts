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
  /** Rich detail. */
  asFriends: string;
  asLovers: string;
  watchOut: string;
  slugA: string;
  slugB: string;
}

export interface Relations {
  /** Best matches (secret friend + trine), as slugs. */
  best: string[];
  /** Signs to be wary of (the clash), as slugs. */
  avoid: string[];
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

const COPY: Record<CompatTier, { blurb: (A: string, B: string) => string; friends: (A: string, B: string) => string; lovers: (A: string, B: string) => string; watch: (A: string, B: string) => string }> = {
  soulmates: {
    blurb: (A, B) => `${A} and ${B} are secret-friend soulmates — the zodiac literally pairs you two up. Cosmic besties, no notes.`,
    friends: (A, B) => `${A} and ${B} are the friends who finish each other's sentences. Effortless loyalty, instant shorthand, zero drama — the duo everyone else is quietly jealous of.`,
    lovers: (A, B) => `Romantically this is the gold standard. ${A} and ${B} bring out each other's best: deep trust, easy passion, and a partnership that simply works.`,
    watch: () => `It's *so* easy together you might coast. Keep surprising each other — comfort is lovely, but don't let it tip into autopilot.`,
  },
  dreamTeam: {
    blurb: (A, B) => `${A} and ${B} share a power trine — same wavelength, instant teamwork. You finish each other's schemes.`,
    friends: (A, B) => `As friends, ${A} and ${B} are a powerhouse: you hype each other up, scheme together, and somehow always end up co-running the group chat.`,
    lovers: (A, B) => `As lovers, ${A} and ${B} share big dreams and matching energy — serious power-couple potential. Just remember to slow down and actually date.`,
    watch: (A, B) => `Two big personalities chasing big goals can forget to check in. Don't let ambition crowd out the soft stuff, ${A} and ${B}.`,
  },
  twoOfAKind: {
    blurb: (A) => `Two ${A}s. You *get* each other perfectly… which also means you'll fight over the same spotlight. Iconic chaos.`,
    friends: (A) => `Two ${A}s as friends means uncanny understanding and a shared sense of humor — plus the occasional standoff when you both want the last word.`,
    lovers: (A) => `Two ${A}s in love is intense and intuitive — you read each other completely. The risk: two identical egos competing for the spotlight.`,
    watch: (A) => `You mirror each other's flaws as well as strengths. When two ${A}s dig in, nobody backs down — pick your battles.`,
  },
  complicated: {
    blurb: (A, B) => `${A} and ${B}: no fireworks, no fistfights. A slow-burn 'it depends on the day' situationship. Could be cute!`,
    friends: (A, B) => `${A} and ${B} make an easy, low-stakes friendship — different rhythms, but you balance each other out once you find the groove.`,
    lovers: (A, B) => `In love, ${A} and ${B} take patience. The spark is subtle and slow-burning, but with genuine effort it can grow into something warm and steady.`,
    watch: () => `Left on autopilot this can drift into 'meh.' It needs intention — plan things, ask questions, keep showing up.`,
  },
  clash: {
    blurb: (A, B) => `${A} vs ${B}: polar opposites. Maximum drama, maximum sparks. It's a clash — but honestly kind of thrilling.`,
    friends: (A, B) => `${A} and ${B} friendships run hot and cold — you'll bicker like siblings. But the ones that survive the sparks end up weirdly unbreakable.`,
    lovers: (A, B) => `As lovers, ${A} and ${B} are fireworks: magnetic attraction, maximum drama. Thrilling — but it takes real maturity to keep the heat from becoming friction.`,
    watch: (A, B) => `${A} and ${B} push each other's buttons *fast*. Cool off before reacting, and whatever you do — don't keep score.`,
  },
};

/** Best matches (secret friend + trine) and signs to watch (clash) for a sign. */
export function getRelations(slug: string): Relations {
  const i = indexOfSlug(slug);
  if (i < 0) throw new Error(`Unknown sign: "${slug}"`);
  const best: string[] = [];
  const avoid: string[] = [];
  for (let j = 0; j < 12; j++) {
    if (j === i) continue;
    if ((i + j) % 12 === 1 || i % 4 === j % 4) best.push(ANIMALS[j].toLowerCase());
    if (Math.abs(i - j) === 6) avoid.push(ANIMALS[j].toLowerCase());
  }
  return { best, avoid };
}

/** Chinese-zodiac compatibility between two signs (by slug). Pure + order-independent. */
export function getCompatibility(slugA: string, slugB: string): Compatibility {
  const a = indexOfSlug(slugA);
  const b = indexOfSlug(slugB);
  if (a < 0 || b < 0) throw new Error(`Unknown sign(s): "${slugA}" / "${slugB}"`);
  const tier = resolveTier(a, b);
  const t = TIERS[tier];
  const c = COPY[tier];
  const A = animalOf(slugA);
  const B = animalOf(slugB);
  return {
    tier,
    title: t.title,
    blurb: c.blurb(A, B),
    emoji: t.emoji,
    animation: t.animation,
    score: scoreFor(tier, a, b),
    asFriends: c.friends(A, B),
    asLovers: c.lovers(A, B),
    watchOut: c.watch(A, B),
    slugA: slugA.toLowerCase(),
    slugB: slugB.toLowerCase(),
  };
}
