import type { Element } from "./zodiac";

export const ELEMENT_EMOJI: Record<Element, string> = {
  Wood: "🌳",
  Fire: "🔥",
  Earth: "⛰️",
  Metal: "⚙️",
  Water: "🌊",
};

export const ELEMENT_COLOR: Record<Element, string> = {
  Wood: "var(--el-wood)",
  Fire: "var(--el-fire)",
  Earth: "var(--el-earth)",
  Metal: "var(--el-metal)",
  Water: "var(--el-water)",
};

/** Shared element personality blurbs (apply across all signs). */
export const ELEMENT_BLURBS: Record<Element, string> = {
  Wood: "Warm-hearted, collaborative, and full of fresh ideas.",
  Fire: "Intense, passionate, and impossible to ignore.",
  Earth: "Grounded, fair, and quietly powerful.",
  Metal: "Bold, decisive, and frankly unstoppable.",
  Water: "Calm, clever, and effortlessly diplomatic.",
};
