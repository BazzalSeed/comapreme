import type { SignContent } from "../types";

/**
 * Goat content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Goat year. Goat years used here:
 * 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015.
 */
export const goat: SignContent = {
  slug: "goat",
  animal: "Goat",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Soft heart, big imagination, and excellent taste in everything.",
  jokes: [
    "You're a GOAT — yes, the actual G.O.A.T. 🐐",
    "Gentle? Yes. Pushover? Try me. (Okay, maybe a little.)",
    "I'll decide where to eat… eventually… probably… 🤔",
    "Artistic, dreamy, allergic to conflict ✨",
    "My love language is making the room prettier 🎨",
    "I cried at the commercial. It was a GOOD commercial.",
    "Free spirit on the outside, soft blanket on the inside 🧶",
  ],
  excited: [
    "ooh a new friend! 🐐",
    "you have such gentle energy ✨",
    "let's make something pretty 🎨",
    "i picked YOU, see, decisions are easy 💕",
    "stay a while? please? 🌸",
  ],
  vibe: "DREAMY",

  figures: [
    { name: "Mick Jagger", year: 1943, field: "Music", emoji: "🎤",
      funFact: "Briefly studied at the London School of Economics before The Rolling Stones took off." },
    { name: "Robert De Niro", year: 1943, field: "Film", emoji: "🎬",
      funFact: "Gained around 60 pounds to play the older Jake LaMotta in 'Raging Bull'." },
    { name: "Steve Jobs", year: 1955, field: "Technology", emoji: "💻",
      funFact: "Audited a calligraphy class in college that later inspired the Mac's typography." },
    { name: "Bruce Willis", year: 1955, field: "Film", emoji: "🎥",
      funFact: "Worked as a bartender in New York City before his acting breakthrough." },
    { name: "Whoopi Goldberg", year: 1955, field: "Film & television", emoji: "🌟",
      funFact: "Is one of the few people to win an Emmy, Grammy, Oscar, and Tony." },
    { name: "Nicole Kidman", year: 1967, field: "Film", emoji: "🎞️",
      funFact: "Was offered the role of Galadriel in 'The Lord of the Rings' but turned it down." },
    { name: "Julia Roberts", year: 1967, field: "Film", emoji: "💫",
      funFact: "Her famous laugh in 'Pretty Woman' jewelry-box scene was a genuine, unscripted reaction." },
    { name: "Norah Jones", year: 1979, field: "Music", emoji: "🎹",
      funFact: "Her debut album 'Come Away with Me' swept five Grammys in a single night." },
    { name: "Ed Sheeran", year: 1991, field: "Music", emoji: "🎸",
      funFact: "Famously slept on couches and even outside while busking his way up in London." },
  ],

  traits: [
    { label: "Creativity", value: 5, blurb: "Sees art in absolutely everything." },
    { label: "Compassion", value: 5, blurb: "Will adopt every stray feeling in the room." },
    { label: "Gentleness", value: 5, blurb: "Soft-spoken, soft-hearted, soft blankets." },
    { label: "Imagination", value: 4, blurb: "Already daydreaming about the daydream." },
    { label: "Decisiveness", value: 2, blurb: "Menu paralysis is a documented condition." },
    { label: "Calm", value: 4, blurb: "Conflict? No thank you, I'll be over here." },
  ],

  lore: [
    { title: "The Gentle Soul", emoji: "🐐",
      body: "The Goat is the zodiac's tender heart — kind, calm, and quietly artistic. It would rather make peace than make a point." },
    { title: "Born for Beauty", emoji: "🎨",
      body: "Goats are the creative dreamers of the cycle, drawn to art, music, and anything that makes the world a little softer." },
    { title: "The Lucky Eighth", emoji: "🍀",
      body: "Eighth in the zodiac, the Goat is linked to peace and good fortune — an old saying calls those born in its year blessed with calm and comfort." },
    { title: "Follower of the Herd", emoji: "🌾",
      body: "Goats thrive in gentle company and dislike going it alone — happiest grazing among friends who keep the drama low." },
  ],
};
