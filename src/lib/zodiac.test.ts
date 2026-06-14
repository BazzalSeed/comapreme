import { describe, it, expect } from "vitest";
import { getZodiac, getZodiacByYear } from "./zodiac";

describe("getZodiacByYear", () => {
  it("maps years to animal + element without boundary correction", () => {
    expect(getZodiacByYear(2024)).toMatchObject({ animal: "Dragon", element: "Wood", slug: "dragon" });
    expect(getZodiacByYear(2012)).toMatchObject({ animal: "Dragon", element: "Water" });
    expect(getZodiacByYear(2020)).toMatchObject({ animal: "Rat", element: "Metal" });
    expect(getZodiacByYear(2022)).toMatchObject({ animal: "Tiger", element: "Water" });
    expect(getZodiacByYear(2025).elementAnimal).toBe("Wood Snake");
  });
});

describe("getZodiac — animal by year (mid-year, no boundary ambiguity)", () => {
  it("identifies Dragon years", () => {
    expect(getZodiac("2024-06-01").animal).toBe("Dragon");
    expect(getZodiac("2012-06-01").animal).toBe("Dragon");
    expect(getZodiac("2000-06-01").animal).toBe("Dragon");
    expect(getZodiac("1988-06-01").animal).toBe("Dragon");
    expect(getZodiac("1976-06-01").animal).toBe("Dragon");
    expect(getZodiac("1964-06-01").animal).toBe("Dragon");
    expect(getZodiac("1940-06-01").animal).toBe("Dragon");
  });

  it("identifies other anchor animals", () => {
    expect(getZodiac("2020-06-01").animal).toBe("Rat");
    expect(getZodiac("2026-06-01").animal).toBe("Horse");
    expect(getZodiac("2025-06-01").animal).toBe("Snake");
    expect(getZodiac("2023-06-01").animal).toBe("Rabbit");
  });

  it("uses a lowercase slug", () => {
    expect(getZodiac("2024-06-01").slug).toBe("dragon");
    expect(getZodiac("2026-06-01").slug).toBe("horse");
  });
});

describe("getZodiac — element cycle", () => {
  it("derives the element of Dragon years (2-year cycle)", () => {
    expect(getZodiac("2024-06-01").element).toBe("Wood");
    expect(getZodiac("2012-06-01").element).toBe("Water");
    expect(getZodiac("2000-06-01").element).toBe("Metal");
    expect(getZodiac("1988-06-01").element).toBe("Earth");
    expect(getZodiac("1976-06-01").element).toBe("Fire");
    expect(getZodiac("1964-06-01").element).toBe("Wood");
  });

  it("builds the element+animal label", () => {
    expect(getZodiac("2024-06-01").elementAnimal).toBe("Wood Dragon");
    expect(getZodiac("2020-06-01").elementAnimal).toBe("Metal Rat");
  });
});

describe("getZodiac — Chinese New Year boundary correction", () => {
  it("born ON Chinese New Year belongs to the new animal year", () => {
    // CNY 2024 = Feb 10 -> Dragon begins
    const r = getZodiac("2024-02-10");
    expect(r.animal).toBe("Dragon");
    expect(r.year).toBe(2024);
  });

  it("born the day BEFORE Chinese New Year belongs to the previous animal year", () => {
    // 2024-02-09 is before CNY (Feb 10) -> still Rabbit (2023)
    const r = getZodiac("2024-02-09");
    expect(r.animal).toBe("Rabbit");
    expect(r.year).toBe(2023);
  });

  it("early-January births roll back to the previous animal", () => {
    // CNY 2020 = Jan 25 -> Jan 1 2020 is still 2019 = Pig
    const r = getZodiac("2020-01-01");
    expect(r.animal).toBe("Pig");
    expect(r.year).toBe(2019);
    expect(r.elementAnimal).toBe("Earth Pig");
  });

  it("a January Dragon-year birth before CNY is NOT a Dragon", () => {
    // CNY 2012 = Jan 23 -> 2012-01-10 is still 2011 = Rabbit
    expect(getZodiac("2012-01-10").animal).toBe("Rabbit");
    // ...but after CNY it is a Dragon
    expect(getZodiac("2012-01-23").animal).toBe("Dragon");
  });
});

describe("getZodiac — input flexibility", () => {
  it("accepts a Date object", () => {
    expect(getZodiac(new Date(2024, 5, 1)).animal).toBe("Dragon");
  });
  it("exposes the gregorian year separately from the zodiac year", () => {
    const r = getZodiac("2024-02-09");
    expect(r.gregorianYear).toBe(2024);
    expect(r.year).toBe(2023);
  });
});
