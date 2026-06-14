import Link from "next/link";
import { notFound } from "next/navigation";
import { getSignBySlug } from "@/data/registry";
import { getSignContent } from "@/data/content";
import { getZodiacByYear } from "@/lib/zodiac";
import { ELEMENT_EMOJI, ELEMENT_COLOR } from "@/lib/elements";
import { SignHero, type Chip } from "@/components/SignHero";
import { DragonSvg } from "@/components/dragon/DragonSvg";
import { FigureGallery } from "@/components/sections/FigureGallery";
import { TraitBars } from "@/components/sections/TraitBars";
import { LorePanel } from "@/components/sections/LorePanel";
import { SignYear } from "@/components/sections/SignYear";
import { ComingSoon } from "@/components/sections/ComingSoon";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ year?: string }>;
}

export default async function SignPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { year } = await searchParams;

  const sign = getSignBySlug(slug);
  if (!sign) notFound();

  const content = getSignContent(slug);
  if (!sign.hasContent || !content) {
    return <ComingSoon sign={sign} />;
  }

  // personalize from the entered year, if it maps to this sign
  const yearNum = year ? parseInt(year, 10) : NaN;
  const z = !Number.isNaN(yearNum) ? getZodiacByYear(yearNum) : null;
  const personal = z && z.slug === slug ? z : null;

  const isDragon = slug === "dragon";
  const character = isDragon ? (
    <DragonSvg className="d-float" />
  ) : (
    <span className="d-float" style={{ fontSize: "clamp(5rem, 24vw, 12rem)", lineHeight: 1 }} aria-hidden>
      {sign.emoji}
    </span>
  );

  const chips: Chip[] = [
    personal
      ? { label: `${ELEMENT_EMOJI[personal.element]} ${personal.elementAnimal.toUpperCase()}`, color: ELEMENT_COLOR[personal.element] }
      : { label: `${sign.emoji} ${sign.animal.toUpperCase()}` },
    { label: "FORTUNE ★★★★★" },
    { label: `VIBE: ${content.vibe}` },
  ];

  return (
    <main className="flex-1">
      <SignHero
        bannerSub={content.bannerSub}
        bannerTitle={content.animal.toUpperCase()}
        chips={chips}
        jokes={content.jokes}
        excited={content.excited}
        character={character}
        puff={isDragon ? "🔥" : sign.emoji}
        emblem={isDragon ? "龍" : sign.emoji}
      />

      <FigureGallery figures={content.figures} animal={content.animal} />
      <TraitBars traits={content.traits} animal={content.animal} />
      <LorePanel lore={content.lore} animal={content.animal} emoji={sign.emoji} />
      <SignYear
        animal={content.animal}
        element={personal?.element}
        year={personal?.year}
        elementAnimal={personal?.elementAnimal}
      />

      <footer className="mx-auto w-full max-w-2xl px-4 pb-16 text-center">
        <Link href="/" className="btn-primary inline-block">
          Check another sign →
        </Link>
        <p className="mt-6 text-xs text-[var(--gold-edge)]">
          comapreme · one day, see how you stack up against the legends who share your sign.
        </p>
      </footer>
    </main>
  );
}
