import { describe, it, expect } from "vitest";
import { SIGNS, getSignBySlug } from "./registry";
import { getSignContent } from "./content";
import { ANIMALS, getZodiac } from "@/lib/zodiac";

describe("registry", () => {
  it("has all 12 animals exactly once, with matching slugs", () => {
    expect(SIGNS).toHaveLength(12);
    const animals = SIGNS.map((s) => s.animal).sort();
    expect(animals).toEqual([...ANIMALS].sort());
    for (const s of SIGNS) {
      expect(s.slug).toBe(s.animal.toLowerCase());
    }
  });

  it("marks only Dragon as having content (phase 1)", () => {
    const withContent = SIGNS.filter((s) => s.hasContent).map((s) => s.slug);
    expect(withContent).toEqual(["dragon"]);
  });

  it("looks up by slug", () => {
    expect(getSignBySlug("dragon")?.animal).toBe("Dragon");
    expect(getSignBySlug("nope")).toBeUndefined();
  });
});

describe("Dragon content", () => {
  const content = getSignContent("dragon")!;

  it("exists", () => {
    expect(content).toBeDefined();
    expect(content.animal).toBe("Dragon");
  });

  it("only lists figures actually born in a Dragon year", () => {
    for (const fig of content.figures) {
      // mid-year date avoids CNY-boundary ambiguity; checks the year itself is a Dragon year
      const z = getZodiac(`${fig.year}-06-15`);
      expect(z.animal, `${fig.name} (${fig.year}) should be a Dragon year`).toBe("Dragon");
    }
  });

  it("element years map to Dragon + the right element", () => {
    for (const info of content.elements) {
      for (const year of info.years) {
        const z = getZodiac(`${year}-06-15`);
        expect(z.animal, `${year} should be Dragon`).toBe("Dragon");
        expect(z.element, `${year} should be ${info.element}`).toBe(info.element);
      }
    }
  });

  it("has the content the result page needs", () => {
    expect(content.figures.length).toBeGreaterThanOrEqual(8);
    expect(content.traits.length).toBeGreaterThanOrEqual(4);
    expect(content.lore.length).toBeGreaterThanOrEqual(3);
    expect(content.elements).toHaveLength(5);
    expect(content.jokes.length).toBeGreaterThanOrEqual(4);
  });
});
