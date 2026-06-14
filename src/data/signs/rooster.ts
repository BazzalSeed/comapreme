import type { SignContent } from "../types";

/**
 * Rooster content — hand-authored and fact-checked.
 *
 * Every figure's `year` is a Rooster year. Rooster years used here:
 * 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017.
 */
export const rooster: SignContent = {
  slug: "rooster",
  animal: "Rooster",
  bannerSub: "YOU ARE BORN IN THE YEAR OF THE",
  tagline: "Sharp eyes, sharper outfits, and up before your alarm.",
  jokes: [
    "You're a ROOSTER — punctual, polished, and PROUD 🐓",
    "I noticed that tiny detail. I notice ALL the details 👀",
    "Early bird? Darling, I AM the morning 🌅",
    "Honest to a fault — and the fault is yours, not mine 😌",
    "Did it perfectly the first time. Will do it again anyway.",
    "I don't show off, I just happen to be correct ✨",
    "Cock-a-doodle-do your taxes, they're due 🐔",
  ],
  excited: [
    "good morning, new friend! 🌅",
    "ooh I like your style 🐓",
    "you noticed me? I noticed YOU first 👀",
    "let's do this RIGHT ✨",
    "stand up straight, you look amazing 💛",
  ],
  vibe: "POLISHED",

  figures: [
    { name: "Quincy Jones", year: 1933, field: "Music production", emoji: "🎹",
      funFact: "Produced Michael Jackson's 'Thriller', the best-selling album of all time." },
    { name: "Bob Marley", year: 1945, field: "Music", emoji: "🎸",
      funFact: "Helped bring reggae to the world stage and was buried with his guitar." },
    { name: "Eric Clapton", year: 1945, field: "Music", emoji: "🎸",
      funFact: "Is the only three-time inductee into the Rock and Roll Hall of Fame." },
    { name: "Goldie Hawn", year: 1945, field: "Film", emoji: "🎬",
      funFact: "Won an Oscar early in her career for 'Cactus Flower'." },
    { name: "Cate Blanchett", year: 1969, field: "Film", emoji: "🎭",
      funFact: "Has won Academy Awards for both a lead and a supporting role." },
    { name: "Jennifer Aniston", year: 1969, field: "Television & film", emoji: "📺",
      funFact: "Her 'Rachel' haircut became one of the most requested salon styles of the '90s." },
    { name: "Matthew McConaughey", year: 1969, field: "Film", emoji: "🎥",
      funFact: "His 'alright, alright, alright' was improvised in his very first film role." },
    { name: "Beyoncé", year: 1981, field: "Music", emoji: "🎤",
      funFact: "Is the most-awarded artist in Grammy history." },
    { name: "Britney Spears", year: 1981, field: "Music", emoji: "🎙️",
      funFact: "Also got her start on 'The Mickey Mouse Club' as a child performer." },
  ],

  traits: [
    { label: "Observance", value: 5, blurb: "Spots the typo from across the room." },
    { label: "Confidence", value: 5, blurb: "Struts in like the catwalk owes it money." },
    { label: "Diligence", value: 5, blurb: "Will redo it until it's flawless." },
    { label: "Honesty", value: 4, blurb: "Tells the truth, even the awkward bits." },
    { label: "Style", value: 5, blurb: "Never met an outfit it couldn't elevate." },
    { label: "Flexibility", value: 2, blurb: "'My way' has a five-star review." },
  ],

  lore: [
    { title: "Herald of Dawn", emoji: "🌅",
      body: "The Rooster's crow drives away darkness and welcomes the sun — a natural symbol of punctuality and fresh starts." },
    { title: "The Five Virtues", emoji: "🐓",
      body: "Old Chinese texts credit the rooster with five virtues — civility, courage, kindness, reliability, and the wisdom of its crow." },
    { title: "Guardian Against Evil", emoji: "🛡️",
      body: "Roosters were seen as protectors, their crowing scaring off bad spirits — which is why images of them once guarded doorways." },
    { title: "Proud Perfectionist", emoji: "✨",
      body: "Confident, observant, and impeccably groomed, the Rooster takes real pride in doing everything precisely right." },
  ],
};
