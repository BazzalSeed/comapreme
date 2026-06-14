import type { SignContent } from "../types";

/**
 * Dog content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Dog year. Dog years:
 * 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018.
 */
export const dog: SignContent = {
  slug: "dog",
  animal: "Dog",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Loyal to the bone, honest to a fault, and worrying about you right now.",
  jokes: [
    "You're a DOG — the friend who always replies to texts 🐶",
    "I'd take a bullet for you. I'd also bark at a leaf. Balance.",
    "Honest? Brutally. You asked, so here it is.",
    "I'm not anxious, I'm just… aware of every possible outcome 😬",
    "Fairness is my whole personality, frankly ⚖️",
    "Trust me — I literally cannot lie to you 🐾",
    "Loyalty level: I remember everyone who was ever kind to me.",
  ],
  excited: [
    "you came back!! 🐕",
    "i KNEW you were one of the good ones",
    "tell me everything 👀",
    "i've been guarding this spot for you 🐾",
    "best friends? best friends. ✅",
  ],
  vibe: "RIDE-OR-DIE",

  figures: [
    { name: "Freddie Mercury", year: 1946, field: "Music", emoji: "🎤",
      funFact: "Wrote 'Bohemian Rhapsody' and refused to explain what its lyrics actually mean." },
    { name: "Dolly Parton", year: 1946, field: "Music", emoji: "🎸",
      funFact: "Has said she wrote 'Jolene' and 'I Will Always Love You' on the very same day." },
    { name: "Cher", year: 1946, field: "Music & film", emoji: "🎶",
      funFact: "Is the only artist to have a Billboard number-one single in six different decades." },
    { name: "Madonna", year: 1958, field: "Music", emoji: "🎙️",
      funFact: "Holds the record as the best-selling female recording artist of all time." },
    { name: "Michael Jackson", year: 1958, field: "Music", emoji: "🕺",
      funFact: "Co-owned the publishing rights to most of the Beatles' catalog for years." },
    { name: "Prince", year: 1958, field: "Music", emoji: "🎸",
      funFact: "Played nearly every instrument himself on his debut album." },
    { name: "Mariah Carey", year: 1970, field: "Music", emoji: "🎄",
      funFact: "'All I Want for Christmas Is You' finally hit number one 25 years after its release." },
    { name: "Uma Thurman", year: 1970, field: "Film", emoji: "🎬",
      funFact: "Was named after a Hindu goddess by her Buddhist-scholar father." },
    { name: "Steven Spielberg", year: 1946, field: "Film", emoji: "🎬",
      funFact: "Was rejected from the USC film school more than once before becoming a record-breaking director." },
    { name: "Justin Bieber", year: 1994, field: "Music", emoji: "🎵",
      funFact: "Was discovered as a kid through homemade videos posted on YouTube." },
  ],

  traits: [
    { label: "Loyalty", value: 5, blurb: "Once you're in, you're family forever." },
    { label: "Honesty", value: 5, blurb: "Cannot tell a white lie to save a life." },
    { label: "Fairness", value: 5, blurb: "Keeps a mental scoreboard of who deserves what." },
    { label: "Protectiveness", value: 4, blurb: "Will fight anyone who wrongs their people." },
    { label: "Anxiety", value: 4, blurb: "Already rehearsing tomorrow's worst case." },
    { label: "Chill", value: 2, blurb: "Relaxation is a skill they're still installing." },
  ],

  lore: [
    { title: "The Faithful Guardian", emoji: "🛡️",
      body: "The Dog is the zodiac's most trusted friend — fiercely loyal, protective, and the one you want guarding your secrets and your gate." },
    { title: "An Honest Heart", emoji: "💛",
      body: "Dogs are prized for their sincerity and strong sense of justice; they'll always tell you the truth, even when a comforting lie would be easier." },
    { title: "The Eleventh Sign", emoji: "🐕",
      body: "Eleventh in the Great Race, the Dog stopped for a quick bath in the river — because even on the biggest day, a good wash comes first." },
    { title: "Born Worriers", emoji: "🌧️",
      body: "Behind the bravery is an anxious streak: Dogs care so deeply about doing right by everyone that they can't help fretting over it." },
  ],
};
