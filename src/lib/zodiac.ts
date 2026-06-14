import { getCnyBoundary } from "./cny";

/**
 * The 12 Chinese zodiac animals, indexed so that ((year - 4) mod 12) selects the
 * animal of that (CNY-corrected) year. Year 2024 -> Dragon, 2020 -> Rat, etc.
 */
export const ANIMALS = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig",
] as const;

export type Animal = (typeof ANIMALS)[number];

/** The five elements, indexed by floor(((year - 4) mod 10) / 2). 2024 -> Wood. */
export const ELEMENTS = ["Wood", "Fire", "Earth", "Metal", "Water"] as const;
export type Element = (typeof ELEMENTS)[number];

export interface ZodiacResult {
  /** The zodiac animal (CNY-corrected). */
  animal: Animal;
  /** Lowercase slug, e.g. "dragon". */
  slug: string;
  /** The zodiac year the person belongs to (may differ from the Gregorian year for early births). */
  year: number;
  /** The Gregorian calendar year of the birth date. */
  gregorianYear: number;
  /** The element of the zodiac year. */
  element: Element;
  /** Combined label, e.g. "Wood Dragon". */
  elementAnimal: string;
  /** True if the CNY boundary used was an approximation (date outside the known table). */
  approximate: boolean;
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

interface YMD {
  y: number;
  m: number; // 1-12
  d: number;
}

function toYMD(input: Date | string): YMD {
  if (input instanceof Date) {
    return { y: input.getFullYear(), m: input.getMonth() + 1, d: input.getDate() };
  }
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(input.trim());
  if (!match) throw new Error(`Invalid date string: "${input}". Expected YYYY-MM-DD.`);
  return { y: Number(match[1]), m: Number(match[2]), d: Number(match[3]) };
}

/**
 * Compute the Chinese zodiac for a birth date, correcting for the Chinese New Year
 * boundary (the zodiac year starts at CNY, not Jan 1).
 *
 * @param input a Date or a "YYYY-MM-DD" string
 */
export function getZodiac(input: Date | string): ZodiacResult {
  const { y, m, d } = toYMD(input);

  const cny = getCnyBoundary(y);
  const beforeCny = m < cny.month || (m === cny.month && d < cny.day);
  const year = beforeCny ? y - 1 : y;

  const animal = ANIMALS[mod(year - 4, 12)];
  const element = ELEMENTS[Math.floor(mod(year - 4, 10) / 2)];

  return {
    animal,
    slug: animal.toLowerCase(),
    year,
    gregorianYear: y,
    element,
    elementAnimal: `${element} ${animal}`,
    approximate: cny.approximate,
  };
}

/**
 * Compute the Chinese zodiac directly from a birth YEAR (no Chinese New Year
 * boundary correction — the year IS the zodiac year). Used by the year-only input.
 */
export function getZodiacByYear(year: number): ZodiacResult {
  const animal = ANIMALS[mod(year - 4, 12)];
  const element = ELEMENTS[Math.floor(mod(year - 4, 10) / 2)];
  return {
    animal,
    slug: animal.toLowerCase(),
    year,
    gregorianYear: year,
    element,
    elementAnimal: `${element} ${animal}`,
    approximate: false,
  };
}
