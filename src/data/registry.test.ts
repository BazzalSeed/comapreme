import { describe, it, expect } from "vitest";
import { SIGNS, getSignBySlug } from "./registry";
import { getSignContent } from "./content";
import { ANIMALS, getZodiacByYear } from "@/lib/zodiac";

describe("registry", () => {
  it("has all 12 animals exactly once, with matching slugs", () => {
    expect(SIGNS).toHaveLength(12);
    expect(SIGNS.map((s) => s.animal).sort()).toEqual([...ANIMALS].sort());
    for (const s of SIGNS) {
      expect(s.slug).toBe(s.animal.toLowerCase());
    }
  });

  it("looks up by slug", () => {
    expect(getSignBySlug("dragon")?.animal).toBe("Dragon");
    expect(getSignBySlug("nope")).toBeUndefined();
  });

  it("every sign marked hasContent actually has content", () => {
    for (const s of SIGNS.filter((x) => x.hasContent)) {
      expect(getSignContent(s.slug), `${s.slug} should have content`).toBeDefined();
    }
  });
});

describe("sign content integrity", () => {
  const withContent = SIGNS.filter((s) => s.hasContent);

  it("at least the Dragon has content", () => {
    expect(withContent.some((s) => s.slug === "dragon")).toBe(true);
  });

  for (const s of withContent) {
    describe(`${s.animal}`, () => {
      const content = getSignContent(s.slug)!;

      it("matches its sign", () => {
        expect(content.animal).toBe(s.animal);
        expect(content.slug).toBe(s.slug);
      });

      it("only lists figures actually born in a year of this sign", () => {
        for (const fig of content.figures) {
          expect(
            getZodiacByYear(fig.year).animal,
            `${fig.name} (${fig.year}) should be a ${s.animal} year`,
          ).toBe(s.animal);
        }
      });

      it("has enough content for the result page", () => {
        expect(content.figures.length).toBeGreaterThanOrEqual(6);
        expect(content.traits.length).toBeGreaterThanOrEqual(4);
        expect(content.lore.length).toBeGreaterThanOrEqual(3);
        expect(content.jokes.length).toBeGreaterThanOrEqual(4);
        expect(content.excited.length).toBeGreaterThanOrEqual(3);
        expect(content.vibe.length).toBeGreaterThan(0);
      });
    });
  }
});
