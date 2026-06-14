import type { SignContent } from "../types";

/**
 * Dragon content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Dragon year (verified by `registry.test.ts` via the
 * CNY-corrected `getZodiac`). Dragon years: 1904, 1928, 1940, 1952, 1964, 1976,
 * 1988, 2000, 2012, 2024.
 */
export const dragon: SignContent = {
  slug: "dragon",
  animal: "Dragon",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "The only mythical creature in the zodiac. Born in fire and fortune.",
  jokes: [
    "You're a DRAGON — obviously the main character 😎",
    "Charismatic, ambitious, a little dramatic. Sound right?",
    "Bruce Lee was a Dragon. No pressure 🐲",
    "I breathe fire AND vibes 🔥",
    "Lucky? Darling, I AM the luck ✨",
    "Born to show off, frankly.",
    "Rawr means 'you have excellent taste' in dragon.",
  ],
  excited: [
    "OOH hi friend! 👀",
    "you have GREAT energy ✨",
    "do that again, do that again",
    "i like you 🐲",
    "careful, I'm flammable 🔥",
  ],
  vibe: "UNBOTHERED",

  figures: [
    { name: "Bruce Lee", year: 1940, field: "Martial arts & film", emoji: "🥋",
      funFact: "Choreographed his own legendary fight scenes — and was a 1958 Hong Kong cha-cha dance champion." },
    { name: "John Lennon", year: 1940, field: "Music", emoji: "🎸",
      funFact: "Reportedly wrote 'Imagine' in one morning at a single sitting on his piano." },
    { name: "Salvador Dalí", year: 1904, field: "Surrealist art", emoji: "🎨",
      funFact: "Kept a pet ocelot named Babou that he brought to fancy restaurants." },
    { name: "Maya Angelou", year: 1928, field: "Poet & author", emoji: "📖",
      funFact: "Became San Francisco's first Black female streetcar conductor — at sixteen." },
    { name: "Pelé", year: 1940, field: "Football", emoji: "⚽",
      funFact: "Scored over 1,000 career goals and won three World Cups." },
    { name: "Al Pacino", year: 1940, field: "Film", emoji: "🎬",
      funFact: "Was considered for Han Solo in Star Wars — and passed on it." },
    { name: "Keanu Reeves", year: 1964, field: "Film", emoji: "🕶️",
      funFact: "Quietly gives away large portions of his movie earnings to crew and charity." },
    { name: "Courteney Cox", year: 1964, field: "Television", emoji: "📺",
      funFact: "Said to be the first person to say the word 'period' in a US TV ad (1985)." },
    { name: "Rihanna", year: 1988, field: "Music & business", emoji: "🎤",
      funFact: "Built Fenty into a beauty empire and became a billionaire before turning 35." },
    { name: "Adele", year: 1988, field: "Music", emoji: "🎶",
      funFact: "Got discovered after a friend posted her demo on MySpace." },
  ],

  traits: [
    { label: "Charisma", value: 5, blurb: "Walks in, owns the room. Every time." },
    { label: "Ambition", value: 5, blurb: "'Good enough' is not in the vocabulary." },
    { label: "Confidence", value: 5, blurb: "Doubt? Never met her." },
    { label: "Luck", value: 5, blurb: "Falls into fortune, somehow." },
    { label: "Drama", value: 4, blurb: "An entrance must be made." },
    { label: "Patience", value: 2, blurb: "Loading bars are a personal insult." },
  ],

  lore: [
    { title: "The Flaming Pearl", emoji: "🔮",
      body: "Dragons forever chase a glowing pearl — wisdom, prosperity, and the moon itself. The original main-character quest." },
    { title: "The Nine Resemblances", emoji: "🐲",
      body: "A Chinese dragon is a remix of nine animals: stag antlers, camel head, snake neck, carp scales, eagle claws, tiger paws… one creature, maximum flex." },
    { title: "Imperial Power", emoji: "👑",
      body: "Only the emperor could wear the five-clawed dragon. Everyone else got four claws and a stern reminder to know their place." },
    { title: "Master of Water", emoji: "🌊",
      body: "Dragons command rivers, seas, and storms. Want rain for the harvest? You ask very, very nicely." },
  ],
};
