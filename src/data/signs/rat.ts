import type { SignContent } from "../types";

/**
 * Rat content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Rat year. Rat years: 1924, 1936, 1948, 1960,
 * 1972, 1984, 1996, 2008, 2020.
 */
export const rat: SignContent = {
  slug: "rat",
  animal: "Rat",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "First across the finish line and never once apologized for it.",
  jokes: [
    "You're a RAT — clever, charming, and three steps ahead 🐀",
    "I won the zodiac race by hitching a ride on the Ox. Work smarter 😏",
    "Resourceful? I once made a five-course meal out of a single coupon.",
    "Quick-witted AND thrifty — I'm basically a discount genius 💰",
    "Yes I'm small. Yes I'm running this whole operation.",
    "I network like it's a competitive sport 🤝",
    "Trust me, I've already thought of the backup plan for the backup plan.",
  ],
  excited: [
    "oh oh oh a NEW friend! 👀",
    "you smell like opportunity ✨",
    "let's scheme together 🐀",
    "i saved a snack just for you 🧀",
    "quick, what's the plan??",
  ],
  vibe: "RESOURCEFUL",

  figures: [
    { name: "Marlon Brando", year: 1924, field: "Film", emoji: "🎬",
      funFact: "Declined his Godfather Oscar in protest of Hollywood's portrayal of Native Americans." },
    { name: "Jimmy Carter", year: 1924, field: "Politics", emoji: "🥜",
      funFact: "Ran his family peanut farm before becoming US president, then won a Nobel Peace Prize." },
    { name: "Burt Reynolds", year: 1936, field: "Film", emoji: "🥸",
      funFact: "Was a college football star before an injury redirected him toward acting." },
    { name: "Prince Charles III", year: 1948, field: "Royalty", emoji: "👑",
      funFact: "Runs an organic farm and once recorded a Welsh-language single for charity." },
    { name: "Olivia Newton-John", year: 1948, field: "Music & film", emoji: "🎤",
      funFact: "Won her first big break on a UK TV talent show as a teenager." },
    { name: "Antonio Banderas", year: 1960, field: "Film", emoji: "🗡️",
      funFact: "Got his Hollywood start despite barely speaking English, learning lines phonetically." },
    { name: "Diego Maradona", year: 1960, field: "Football", emoji: "⚽",
      funFact: "Scored the 'Hand of God' and 'Goal of the Century' minutes apart in one 1986 match." },
    { name: "Eminem", year: 1972, field: "Music", emoji: "🎤",
      funFact: "Holds the record for most words in a hit single — over 1,500 in 'Rap God'." },
    { name: "Cameron Diaz", year: 1972, field: "Film", emoji: "🎞️",
      funFact: "Worked as a fashion model in Japan and Australia before her breakout in 'The Mask'." },
    { name: "Scarlett Johansson", year: 1984, field: "Film", emoji: "🕷️",
      funFact: "Released a covers album of Tom Waits songs in 2008." },
  ],

  traits: [
    { label: "Cleverness", value: 5, blurb: "Already solved the puzzle while you read the rules." },
    { label: "Resourcefulness", value: 5, blurb: "Can turn lint and a paperclip into a startup." },
    { label: "Charm", value: 4, blurb: "Could talk a cat into a partnership." },
    { label: "Thrift", value: 5, blurb: "Saves the receipt, knows the exchange rate, never overpays." },
    { label: "Adaptability", value: 4, blurb: "Drops you somewhere new, thrives by Tuesday." },
    { label: "Patience", value: 2, blurb: "Why wait when you can outsmart the wait?" },
  ],

  lore: [
    { title: "Winner of the Great Race", emoji: "🏁",
      body: "The Rat rode the diligent Ox across the river, then leapt ahead at the finish to claim first place. Cunning beats brawn — that's why it leads the zodiac." },
    { title: "Symbol of Abundance", emoji: "💰",
      body: "In Chinese folklore the Rat hoards grain and signals plentiful harvests, making it a quiet emblem of wealth and good fortune." },
    { title: "Spirit of Beginnings", emoji: "🌱",
      body: "As the first sign, the Rat opens every twelve-year cycle — associated with fresh starts, new ventures, and clever first moves." },
    { title: "Creature of the Midnight Hour", emoji: "🌙",
      body: "The Rat governs the hours of 11pm to 1am, when yin turns to yang — a time of secret schemes and new energy stirring." },
  ],
};
