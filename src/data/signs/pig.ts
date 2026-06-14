import type { SignContent } from "../types";

/**
 * Pig content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Pig year. Pig years:
 * 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019.
 */
export const pig: SignContent = {
  slug: "pig",
  animal: "Pig",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Big-hearted, easygoing, and absolutely here for the snacks.",
  jokes: [
    "You're a PIG — the kindest soul at the party 🐷",
    "Generous to a fault. The fault being I gave away my last fry.",
    "Optimist? I assume everything works out. It usually does ✨",
    "Treat yourself? Honey, I treat myself daily 🍰",
    "Easygoing is my brand — stress me out and I'll just… nap.",
    "Sincere to the core. What you see is what you get 💛",
    "Life's short. Order dessert first 🧁",
  ],
  excited: [
    "ooh a NEW friend! 🐷",
    "you hungry? i have snacks 🍪",
    "everything's gonna be great, i can feel it ✨",
    "let's be cozy together 🛋️",
    "i already adore you 💕",
  ],
  vibe: "WHOLESOME",

  figures: [
    { name: "Luciano Pavarotti", year: 1935, field: "Opera", emoji: "🎶",
      funFact: "Helped popularize opera worldwide as one of the famed Three Tenors." },
    { name: "Woody Allen", year: 1935, field: "Film", emoji: "🎬",
      funFact: "Wrote jokes for newspaper columnists as a teenager before ever acting." },
    { name: "Arnold Schwarzenegger", year: 1947, field: "Bodybuilding, film & politics", emoji: "💪",
      funFact: "Won Mr. Olympia seven times before becoming a movie star and a governor." },
    { name: "Elton John", year: 1947, field: "Music", emoji: "🎹",
      funFact: "Was born Reginald Dwight and learned to play piano almost entirely by ear as a child." },
    { name: "Hillary Clinton", year: 1947, field: "Politics", emoji: "🏛️",
      funFact: "Was the first First Lady of the United States to win elected office herself." },
    { name: "Stephen King", year: 1947, field: "Author", emoji: "📚",
      funFact: "Sold his first novel 'Carrie' after fishing the discarded manuscript out of the trash." },
    { name: "Magic Johnson", year: 1959, field: "Basketball", emoji: "🏀",
      funFact: "Earned his nickname 'Magic' as a teenager for his dazzling court vision." },
    { name: "Winona Ryder", year: 1971, field: "Film", emoji: "🎬",
      funFact: "Took her stage surname from a Mitch Ryder album that was playing when she picked it." },
    { name: "Ewan McGregor", year: 1971, field: "Film", emoji: "🎥",
      funFact: "Rode a motorcycle around the world for a documentary series with a close friend." },
    { name: "Mila Kunis", year: 1983, field: "Film & TV", emoji: "🎤",
      funFact: "Has voiced Meg Griffin on Family Guy since she was a teenager." },
  ],

  traits: [
    { label: "Generosity", value: 5, blurb: "Would give you the last slice without thinking." },
    { label: "Sincerity", value: 5, blurb: "Zero hidden agendas, all warm intentions." },
    { label: "Optimism", value: 5, blurb: "Always sure it'll turn out fine — and it does." },
    { label: "Easygoing", value: 5, blurb: "Drama bounces right off this one." },
    { label: "Indulgence", value: 4, blurb: "Treat first, regret later (maybe)." },
    { label: "Discipline", value: 2, blurb: "Willpower folds the moment cake appears." },
  ],

  lore: [
    { title: "Last But Beloved", emoji: "🏁",
      body: "The Pig came twelfth and final in the Great Race — it stopped to eat and nap along the way, and honestly, no regrets." },
    { title: "Wealth & Abundance", emoji: "💰",
      body: "In Chinese culture the Pig symbolizes prosperity, plenty, and good fortune; chubby pig figures are charms for a rich, comfortable life." },
    { title: "A Heart of Gold", emoji: "💛",
      body: "Pigs are seen as sincere, generous, and trusting — they assume the best in everyone and give freely without keeping score." },
    { title: "The Comfort Lover", emoji: "🛋️",
      body: "Easygoing and a little indulgent, the Pig adores life's pleasures: good food, good company, and a very well-earned rest." },
  ],
};
