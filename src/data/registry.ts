import type { SignMeta } from "./types";

/**
 * The 12 Chinese zodiac signs in canonical order. `hasContent` marks which signs
 * have a full rich experience (phase 1: Dragon only). Slugs match `getZodiac().slug`.
 */
export const SIGNS: SignMeta[] = [
  { animal: "Rat", slug: "rat", emoji: "🐀", hasContent: false, blurb: "Quick-witted, resourceful, charming." },
  { animal: "Ox", slug: "ox", emoji: "🐂", hasContent: false, blurb: "Dependable, strong, methodical." },
  { animal: "Tiger", slug: "tiger", emoji: "🐅", hasContent: false, blurb: "Brave, competitive, magnetic." },
  { animal: "Rabbit", slug: "rabbit", emoji: "🐇", hasContent: false, blurb: "Gentle, elegant, lucky." },
  { animal: "Dragon", slug: "dragon", emoji: "🐉", hasContent: true, blurb: "Charismatic, ambitious, unstoppable." },
  { animal: "Snake", slug: "snake", emoji: "🐍", hasContent: false, blurb: "Wise, enigmatic, intuitive." },
  { animal: "Horse", slug: "horse", emoji: "🐎", hasContent: false, blurb: "Free-spirited, energetic, bold." },
  { animal: "Goat", slug: "goat", emoji: "🐐", hasContent: false, blurb: "Creative, gentle, kind." },
  { animal: "Monkey", slug: "monkey", emoji: "🐒", hasContent: false, blurb: "Clever, playful, inventive." },
  { animal: "Rooster", slug: "rooster", emoji: "🐓", hasContent: false, blurb: "Observant, confident, hardworking." },
  { animal: "Dog", slug: "dog", emoji: "🐕", hasContent: false, blurb: "Loyal, honest, protective." },
  { animal: "Pig", slug: "pig", emoji: "🐖", hasContent: false, blurb: "Generous, easygoing, sincere." },
];

export function getSignBySlug(slug: string): SignMeta | undefined {
  return SIGNS.find((s) => s.slug === slug);
}
