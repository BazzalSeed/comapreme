import type { SignMeta } from "./types";

/**
 * The 12 Chinese zodiac signs in canonical order. `hasContent` marks which signs
 * have a full rich experience (phase 1: Dragon only). Slugs match `getZodiac().slug`.
 */
export const SIGNS: SignMeta[] = [
  { animal: "Rat", slug: "rat", emoji: "🐀", hasContent: true, blurb: "Quick-witted, resourceful, charming." },
  { animal: "Ox", slug: "ox", emoji: "🐂", hasContent: true, blurb: "Dependable, strong, methodical." },
  { animal: "Tiger", slug: "tiger", emoji: "🐅", hasContent: true, blurb: "Brave, competitive, magnetic." },
  { animal: "Rabbit", slug: "rabbit", emoji: "🐇", hasContent: true, blurb: "Gentle, elegant, lucky." },
  { animal: "Dragon", slug: "dragon", emoji: "🐉", hasContent: true, blurb: "Charismatic, ambitious, unstoppable." },
  { animal: "Snake", slug: "snake", emoji: "🐍", hasContent: true, blurb: "Wise, enigmatic, intuitive." },
  { animal: "Horse", slug: "horse", emoji: "🐎", hasContent: true, blurb: "Free-spirited, energetic, bold." },
  { animal: "Goat", slug: "goat", emoji: "🐐", hasContent: true, blurb: "Creative, gentle, kind." },
  { animal: "Monkey", slug: "monkey", emoji: "🐒", hasContent: true, blurb: "Clever, playful, inventive." },
  { animal: "Rooster", slug: "rooster", emoji: "🐓", hasContent: true, blurb: "Observant, confident, hardworking." },
  { animal: "Dog", slug: "dog", emoji: "🐕", hasContent: true, blurb: "Loyal, honest, protective." },
  { animal: "Pig", slug: "pig", emoji: "🐖", hasContent: true, blurb: "Generous, easygoing, sincere." },
];

export function getSignBySlug(slug: string): SignMeta | undefined {
  return SIGNS.find((s) => s.slug === slug);
}
