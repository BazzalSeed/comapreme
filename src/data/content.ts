import type { SignContent } from "./types";
import { dragon } from "./signs/dragon";

/** Rich content by slug. Phase 1: Dragon only. */
const CONTENT: Record<string, SignContent> = {
  dragon,
};

export function getSignContent(slug: string): SignContent | undefined {
  return CONTENT[slug];
}
