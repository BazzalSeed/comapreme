import Link from "next/link";
import { notFound } from "next/navigation";
import { getSignBySlug } from "@/data/registry";
import { getSignContent } from "@/data/content";
import { getZodiac } from "@/lib/zodiac";
import { ELEMENT_EMOJI, ELEMENT_COLOR } from "@/lib/elements";
import { DragonHero, type Chip } from "@/components/dragon/DragonHero";
import { FigureGallery } from "@/components/sections/FigureGallery";
import { TraitBars } from "@/components/sections/TraitBars";
import { LorePanel } from "@/components/sections/LorePanel";
import { DragonYear } from "@/components/sections/DragonYear";
import { ComingSoon } from "@/components/sections/ComingSoon";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dob?: string }>;
}

export default async function SignPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { dob } = await searchParams;

  const sign = getSignBySlug(slug);
  if (!sign) notFound();

  if (!sign.hasContent) {
    return <ComingSoon sign={sign} />;
  }

  const content = getSignContent(slug)!;

  // personalize from the entered DOB, but only if it actually maps to this sign
  const z = dob ? getZodiac(dob) : null;
  const personal = z && z.slug === slug ? z : null;

  const chips: Chip[] = [
    personal
      ? { label: `${ELEMENT_EMOJI[personal.element]} ${personal.elementAnimal.toUpperCase()}`, color: ELEMENT_COLOR[personal.element] }
      : { label: "🐉 DRAGON" },
    { label: "FORTUNE ★★★★★" },
    { label: `VIBE: ${content.vibe}` },
  ];

  return (
    <main className="flex-1">
      <DragonHero
        bannerSub={content.bannerSub}
        bannerTitle={content.animal.toUpperCase()}
        chips={chips}
        jokes={content.jokes}
        excited={content.excited}
      />

      <FigureGallery figures={content.figures} />
      <TraitBars traits={content.traits} />
      <LorePanel lore={content.lore} />
      <DragonYear
        element={personal?.element}
        year={personal?.year}
        elementAnimal={personal?.elementAnimal}
        elements={content.elements}
      />

      <footer className="mx-auto w-full max-w-2xl px-4 pb-16 text-center">
        <Link href="/" className="btn-primary inline-block">
          Check a friend&apos;s sign →
        </Link>
        <p className="mt-6 text-xs text-[var(--gold-edge)]">
          comapreme · more signs coming soon — and one day, see how you stack up against the legends.
        </p>
      </footer>
    </main>
  );
}
