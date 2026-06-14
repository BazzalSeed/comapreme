import type { SignContent } from "../types";

/**
 * Tiger content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Tiger year. Tiger years: 1926, 1938, 1950, 1962,
 * 1974, 1986, 1998, 2010, 2022.
 */
export const tiger: SignContent = {
  slug: "tiger",
  animal: "Tiger",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Walks in like the room was waiting for them — because it was.",
  jokes: [
    "You're a TIGER — brave, bold, and built to win 🐅",
    "Second-guessing? Never heard of her.",
    "I don't pick fights. I pick victories 🏆",
    "Impulsive? I call it 'decisive at high speed' 💨",
    "Confidence isn't a flex, it's my baseline 😎",
    "Lead, follow, or get out of my stripes.",
    "I'll leap first and figure out the landing mid-air.",
  ],
  excited: [
    "RAWR hello!! 🐅",
    "ooh you've got guts, i like it ✨",
    "let's go ON AN ADVENTURE",
    "i'd absolutely fight for you 💪",
    "keep up if you can 💨",
  ],
  vibe: "FEARLESS",

  figures: [
    { name: "Marilyn Monroe", year: 1926, field: "Film", emoji: "🎬",
      funFact: "Owned more than 400 books and was a devoted reader despite her glamour-icon image." },
    { name: "Queen Elizabeth II", year: 1926, field: "Royalty", emoji: "👑",
      funFact: "Trained as a mechanic and military truck driver during World War II." },
    { name: "Miles Davis", year: 1926, field: "Music", emoji: "🎺",
      funFact: "Reinvented jazz several times over and painted abstract art later in life." },
    { name: "Stevie Wonder", year: 1950, field: "Music", emoji: "🎹",
      funFact: "Signed to Motown at age 11 and topped the charts as 'Little Stevie Wonder'." },
    { name: "Tom Cruise", year: 1962, field: "Film", emoji: "🎞️",
      funFact: "Performs many of his own stunts, including hanging off the outside of a flying plane." },
    { name: "Demi Moore", year: 1962, field: "Film", emoji: "🎭",
      funFact: "Was once the highest-paid actress in Hollywood in the mid-1990s." },
    { name: "Leonardo DiCaprio", year: 1974, field: "Film", emoji: "🌍",
      funFact: "Has an environmental foundation and a flower species named in his honor." },
    { name: "Penélope Cruz", year: 1974, field: "Film", emoji: "🌹",
      funFact: "Was the first Spanish actress to win an Academy Award." },
    { name: "Usain Bolt", year: 1986, field: "Athletics", emoji: "⚡",
      funFact: "Still holds the 100m and 200m world records and dreamed of playing pro cricket." },
    { name: "Lady Gaga", year: 1986, field: "Music & film", emoji: "🎤",
      funFact: "Taught herself piano by ear at age four." },
  ],

  traits: [
    { label: "Bravery", value: 5, blurb: "Fear takes one look and leaves the room." },
    { label: "Confidence", value: 5, blurb: "Self-doubt was not invited." },
    { label: "Charisma", value: 5, blurb: "Magnetic — people just follow." },
    { label: "Competitiveness", value: 5, blurb: "Will race you for literally anything." },
    { label: "Impulsiveness", value: 4, blurb: "Leaps first, reads the fine print never." },
    { label: "Caution", value: 2, blurb: "'Plan B' is for people who doubt Plan A." },
  ],

  lore: [
    { title: "King of the Beasts", emoji: "🐅",
      body: "In Chinese culture the tiger — not the lion — is the king of all animals, its forehead markings said to spell the character 王, meaning 'king'." },
    { title: "Guardian Against Evil", emoji: "🛡️",
      body: "Tigers are believed to ward off demons and disaster, which is why children wear tiger-shaped hats and shoes for protection." },
    { title: "Fire and Courage", emoji: "🔥",
      body: "The Tiger embodies raw bravery and unstoppable drive — bold to a fault, a natural leader who charges where others hesitate." },
    { title: "Ruler of the Waking Dawn", emoji: "🌄",
      body: "The Tiger governs the hours of 3am to 5am, when its energy is fiercest and the night surrenders to the coming day." },
  ],
};
