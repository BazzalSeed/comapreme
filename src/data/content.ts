import type { SignContent } from "./types";
import { rat } from "./signs/rat";
import { ox } from "./signs/ox";
import { tiger } from "./signs/tiger";
import { rabbit } from "./signs/rabbit";
import { dragon } from "./signs/dragon";
import { snake } from "./signs/snake";
import { horse } from "./signs/horse";
import { goat } from "./signs/goat";
import { monkey } from "./signs/monkey";
import { rooster } from "./signs/rooster";
import { dog } from "./signs/dog";
import { pig } from "./signs/pig";

const CONTENT: Record<string, SignContent> = {
  rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, pig,
};

export function getSignContent(slug: string): SignContent | undefined {
  return CONTENT[slug];
}
