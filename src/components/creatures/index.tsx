import type { ComponentType } from "react";
import { DragonSvg } from "@/components/dragon/DragonSvg";
import { RatSvg } from "./RatSvg";
import { OxSvg } from "./OxSvg";
import { TigerSvg } from "./TigerSvg";
import { RabbitSvg } from "./RabbitSvg";
import { SnakeSvg } from "./SnakeSvg";
import { HorseSvg } from "./HorseSvg";
import { GoatSvg } from "./GoatSvg";
import { MonkeySvg } from "./MonkeySvg";
import { RoosterSvg } from "./RoosterSvg";
import { DogSvg } from "./DogSvg";
import { PigSvg } from "./PigSvg";

/** slug → bespoke animated creature component. */
export const CREATURES: Record<string, ComponentType<{ className?: string }>> = {
  rat: RatSvg,
  ox: OxSvg,
  tiger: TigerSvg,
  rabbit: RabbitSvg,
  dragon: DragonSvg,
  snake: SnakeSvg,
  horse: HorseSvg,
  goat: GoatSvg,
  monkey: MonkeySvg,
  rooster: RoosterSvg,
  dog: DogSvg,
  pig: PigSvg,
};
