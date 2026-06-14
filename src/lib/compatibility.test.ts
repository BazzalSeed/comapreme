import { describe, it, expect } from "vitest";
import { getCompatibility } from "./compatibility";
import { ANIMALS } from "./zodiac";

const slugs = ANIMALS.map((a) => a.toLowerCase());

describe("getCompatibility — tiers", () => {
  it("secret-friend pairs are Soulmates", () => {
    expect(getCompatibility("rat", "ox").tier).toBe("soulmates");
    expect(getCompatibility("dragon", "rooster").tier).toBe("soulmates");
    expect(getCompatibility("horse", "goat").tier).toBe("soulmates");
  });

  it("same trine group is a Dream Team", () => {
    expect(getCompatibility("rat", "dragon").tier).toBe("dreamTeam");
    expect(getCompatibility("tiger", "horse").tier).toBe("dreamTeam");
    expect(getCompatibility("rabbit", "pig").tier).toBe("dreamTeam");
  });

  it("same sign is Two of a Kind", () => {
    expect(getCompatibility("dragon", "dragon").tier).toBe("twoOfAKind");
  });

  it("opposite signs Clash", () => {
    expect(getCompatibility("rat", "horse").tier).toBe("clash");
    expect(getCompatibility("dragon", "dog").tier).toBe("clash");
    expect(getCompatibility("snake", "pig").tier).toBe("clash");
  });

  it("everything else is Complicated", () => {
    expect(getCompatibility("rat", "tiger").tier).toBe("complicated");
    expect(getCompatibility("ox", "tiger").tier).toBe("complicated");
  });
});

describe("getCompatibility — score + symmetry", () => {
  it("is order-independent (same tier and score both ways)", () => {
    for (const a of slugs) {
      for (const b of slugs) {
        const ab = getCompatibility(a, b);
        const ba = getCompatibility(b, a);
        expect(ba.tier).toBe(ab.tier);
        expect(ba.score).toBe(ab.score);
      }
    }
  });

  it("scores sit in the expected band per tier and 0..100", () => {
    const bands: Record<string, [number, number]> = {
      soulmates: [92, 99], dreamTeam: [84, 95], twoOfAKind: [70, 85],
      complicated: [45, 70], clash: [8, 32],
    };
    for (const a of slugs) {
      for (const b of slugs) {
        const c = getCompatibility(a, b);
        expect(c.score).toBeGreaterThanOrEqual(0);
        expect(c.score).toBeLessThanOrEqual(100);
        const [lo, hi] = bands[c.tier];
        expect(c.score, `${a}+${b} (${c.tier})`).toBeGreaterThanOrEqual(lo);
        expect(c.score, `${a}+${b} (${c.tier})`).toBeLessThanOrEqual(hi);
      }
    }
  });

  it("every one of the 144 pairs returns a valid tier + verdict + animation", () => {
    const tiers = new Set(["soulmates", "dreamTeam", "twoOfAKind", "complicated", "clash"]);
    const anims = new Set(["hearts", "sparks", "mirror", "shrug", "clash"]);
    let count = 0;
    for (const a of slugs) {
      for (const b of slugs) {
        const c = getCompatibility(a, b);
        expect(tiers.has(c.tier)).toBe(true);
        expect(anims.has(c.animation)).toBe(true);
        expect(c.title.length).toBeGreaterThan(0);
        expect(c.blurb.length).toBeGreaterThan(0);
        count++;
      }
    }
    expect(count).toBe(144);
  });

  it("throws on unknown signs", () => {
    expect(() => getCompatibility("dragon", "wyvern")).toThrow();
  });
});
