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
