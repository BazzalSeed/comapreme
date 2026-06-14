import type { SignContent } from "../types";

/**
 * Ox content — hand-authored and fact-checked.
 *
 * Every figure's `year` is an Ox year. Ox years: 1925, 1937, 1949, 1961,
 * 1973, 1985, 1997, 2009, 2021.
 */
export const ox: SignContent = {
  slug: "ox",
  animal: "Ox",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Quietly carrying the entire group project since the dawn of farming.",
  jokes: [
    "You're an OX — dependable, patient, and unstoppable 🐂",
    "I don't rush. The work just eventually surrenders.",
    "Stubborn? I prefer 'correct and unwilling to discuss it.'",
    "Slow and steady wins. Also I'm extremely strong, so. 💪",
    "While you brainstorm, I've already finished it 🛠️",
    "I carried the Rat across the whole river and got robbed at the finish. Still bitter.",
    "Need it done right? You need me. No notes.",
  ],
  excited: [
    "oh! a visitor 🐂",
    "you can lean on me 💪",
    "i'll get this done for us ✨",
    "steady now, friend 🌾",
    "i don't say much but i mean it",
  ],
  vibe: "UNSHAKABLE",

  figures: [
    { name: "Margaret Thatcher", year: 1925, field: "Politics", emoji: "🏛️",
      funFact: "Trained as a research chemist and helped develop soft-serve ice cream emulsifiers before politics." },
    { name: "Malcolm X", year: 1925, field: "Activism", emoji: "✊",
      funFact: "Taught himself by copying out an entire dictionary by hand while in prison." },
    { name: "Jack Nicholson", year: 1937, field: "Film", emoji: "🎬",
      funFact: "Was raised believing his grandmother was his mother; he learned the truth from a journalist." },
    { name: "Morgan Freeman", year: 1937, field: "Film", emoji: "🎙️",
      funFact: "Served in the US Air Force as a radar technician before becoming an actor." },
    { name: "Meryl Streep", year: 1949, field: "Film", emoji: "🎭",
      funFact: "Holds the record for the most Academy Award acting nominations in history." },
    { name: "Richard Gere", year: 1949, field: "Film", emoji: "🕴️",
      funFact: "Turned down a gymnastics scholarship to pursue acting." },
    { name: "Princess Diana", year: 1961, field: "Royalty & humanitarian", emoji: "👑",
      funFact: "Trained seriously as a ballet dancer but was considered too tall for a professional company." },
    { name: "Barack Obama", year: 1961, field: "Politics", emoji: "🇺🇸",
      funFact: "Was the first US president born in Hawaii and collects Spider-Man and Conan comics." },
    { name: "George Clooney", year: 1961, field: "Film", emoji: "🍸",
      funFact: "Once pranked Brad Pitt by altering a personalized license-plate request as a gag." },
    { name: "Cristiano Ronaldo", year: 1985, field: "Football", emoji: "⚽",
      funFact: "Reportedly doesn't drink alcohol after seeing how it affected his father." },
  ],

  traits: [
    { label: "Dependability", value: 5, blurb: "Said they'd be there. Was there. Early." },
    { label: "Work Ethic", value: 5, blurb: "Outlasts the deadline, the doubters, and the coffee." },
    { label: "Patience", value: 5, blurb: "Will wait out a mountain if that's what it takes." },
    { label: "Determination", value: 5, blurb: "'No' just means 'not yet, watch this.'" },
    { label: "Stubbornness", value: 5, blurb: "Mind = made up = cement." },
    { label: "Flexibility", value: 2, blurb: "Plans change? The Ox does not." },
  ],

  lore: [
    { title: "Generous Rival of the Rat", emoji: "🐀",
      body: "The Ox was about to win the Great Race when the Rat — riding on its back — sprang off at the last second. The Ox took second place with quiet grace." },
    { title: "Backbone of the Harvest", emoji: "🌾",
      body: "For millennia the ox plowed China's fields, making it a revered symbol of diligence, prosperity, and the rewards of honest labor." },
    { title: "Strength Without Show", emoji: "💪",
      body: "The Ox embodies steady power that never needs to boast — reliable, grounded, and trusted to carry the heaviest loads." },
    { title: "Keeper of the Deep Night", emoji: "🌌",
      body: "The Ox rules the hours of 1am to 3am, when the diligent work on quietly while the world sleeps." },
  ],
};
