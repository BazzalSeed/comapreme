import type { SignContent } from "../types";

/**
 * Monkey content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Monkey year. Monkey years used here:
 * 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016.
 */
export const monkey: SignContent = {
  slug: "monkey",
  animal: "Monkey",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Clever, quick, and three jokes ahead of everyone in the room.",
  jokes: [
    "You're a MONKEY — the zodiac's certified genius goblin 🐒",
    "I solved the problem AND caused two new ones. Efficient!",
    "Bored? Never met her. I'll find trouble 😏",
    "Smartest in the room and I WILL prove it 🍌",
    "Plan A failed, but I've got Plans B through Z 🧠",
    "I'm not mischievous, I'm 'experimentally curious' 🐵",
    "Watch this — okay don't watch, just trust me ✨",
  ],
  excited: [
    "ooh ooh a friend!! 🐒",
    "wanna see a trick? 🍌",
    "you're FUN, I can tell 😏",
    "let's cause some good chaos ✨",
    "quick, think of a riddle! 🧠",
  ],
  vibe: "MISCHIEVOUS",

  figures: [
    { name: "Elizabeth Taylor", year: 1932, field: "Film", emoji: "💎",
      funFact: "Was one of the first stars to be paid a million dollars for a single film, for 'Cleopatra'." },
    { name: "Johnny Cash", year: 1932, field: "Music", emoji: "🎸",
      funFact: "Recorded a legendary live album inside California's Folsom State Prison." },
    { name: "Diana Ross", year: 1944, field: "Music", emoji: "🎤",
      funFact: "Led The Supremes to a dozen No. 1 hits before going solo." },
    { name: "Tom Hanks", year: 1956, field: "Film", emoji: "🎬",
      funFact: "Won back-to-back Best Actor Oscars for 'Philadelphia' and 'Forrest Gump'." },
    { name: "Will Smith", year: 1968, field: "Film & music", emoji: "🎤",
      funFact: "Won a Grammy as a rapper before he ever starred on television." },
    { name: "Celine Dion", year: 1968, field: "Music", emoji: "🎵",
      funFact: "Was the youngest of fourteen children in her Quebec family." },
    { name: "Daniel Craig", year: 1968, field: "Film", emoji: "🍸",
      funFact: "Played James Bond five times, the same number of films as Sean Connery." },
    { name: "Christina Aguilera", year: 1980, field: "Music", emoji: "🎙️",
      funFact: "Got her start singing on 'The Mickey Mouse Club' as a kid." },
    { name: "Selena Gomez", year: 1992, field: "Music & film", emoji: "🌟",
      funFact: "Began acting as a child on 'Barney & Friends' alongside Demi Lovato." },
  ],

  traits: [
    { label: "Cleverness", value: 5, blurb: "Already solved it while you read the question." },
    { label: "Wit", value: 5, blurb: "Comebacks fully loaded at all times." },
    { label: "Curiosity", value: 5, blurb: "Will absolutely push that button." },
    { label: "Mischief", value: 4, blurb: "Chaos, but the charming kind." },
    { label: "Energy", value: 4, blurb: "Powered by snacks and pure curiosity." },
    { label: "Patience", value: 2, blurb: "The waiting room is a personal nemesis." },
  ],

  lore: [
    { title: "The Clever One", emoji: "🐒",
      body: "The Monkey is the zodiac's trickster genius — quick-witted, inventive, and never short on a plan (or a prank)." },
    { title: "The Monkey King", emoji: "👑",
      body: "Legend's most famous Monkey is Sun Wukong, who outsmarted gods and demons alike — the original lovable troublemaker." },
    { title: "Endlessly Curious", emoji: "🔍",
      body: "Monkeys are born explorers and problem-solvers, happiest when there's a puzzle to crack or a button to press." },
    { title: "Social Spark", emoji: "✨",
      body: "Charming and playful, the Monkey lights up any gathering — though that cleverness can tip into a bit of mischief." },
  ],
};
