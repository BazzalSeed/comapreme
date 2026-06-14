import { getSignBySlug } from "@/data/registry";
import { getZodiacByYear } from "@/lib/zodiac";
import { getCompatibility } from "@/lib/compatibility";
import { FriendEntry } from "@/components/compare/FriendEntry";
import { CompatibilityResult } from "@/components/compare/CompatibilityResult";
import { TwoPicker } from "@/components/compare/TwoPicker";

const CURRENT_YEAR = new Date().getFullYear();

function parseYear(v: string | string[] | undefined): number | undefined {
  if (typeof v !== "string" || !/^\d{4}$/.test(v)) return undefined;
  const n = Number(v);
  return n >= 1900 && n <= CURRENT_YEAR ? n : undefined;
}
function parseName(v: string | string[] | undefined): string | undefined {
  if (typeof v !== "string") return undefined;
  const clean = v.replace(/[<>]/g, "").trim().slice(0, 24);
  return clean || undefined;
}
function parseSlug(v: string | string[] | undefined): string | undefined {
  return typeof v === "string" ? v.toLowerCase() : undefined;
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ComparePage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const aSign = getSignBySlug(parseSlug(sp.a) ?? "");
  const bSign = getSignBySlug(parseSlug(sp.b) ?? "");
  const ay = parseYear(sp.ay);
  const by = parseYear(sp.by);
  const an = parseName(sp.an);
  const bn = parseName(sp.bn);

  // Full result
  if (aSign && bSign) {
    const compat = getCompatibility(aSign.slug, bSign.slug);
    const aLabel = an || aSign.animal;
    const bLabel = bn || bSign.animal;

    const shareParams = new URLSearchParams({ a: aSign.slug, b: bSign.slug });
    if (ay) shareParams.set("ay", String(ay));
    if (by) shareParams.set("by", String(by));
    if (an) shareParams.set("an", an);
    if (bn) shareParams.set("bn", bn);

    const restart = new URLSearchParams({ a: aSign.slug });
    if (ay) restart.set("ay", String(ay));
    if (an) restart.set("an", an);

    return (
      <CompatibilityResult
        aSlug={aSign.slug}
        bSlug={bSign.slug}
        aLabel={aLabel}
        bLabel={bLabel}
        aEmoji={aSign.emoji}
        bEmoji={bSign.emoji}
        compat={compat}
        shareUrl={`/compare?${shareParams.toString()}`}
        restartUrl={`/compare?${restart.toString()}`}
        ownSignUrl={by ? `/sign/${bSign.slug}?year=${by}` : `/sign/${bSign.slug}`}
      />
    );
  }

  // Friend entry (sharer known, friend hasn't picked yet)
  if (aSign) {
    return (
      <FriendEntry
        aSlug={aSign.slug}
        aAnimal={aSign.animal}
        aEmoji={aSign.emoji}
        aYear={ay}
        aName={an}
        aElementAnimal={ay ? getZodiacByYear(ay).elementAnimal : undefined}
      />
    );
  }

  // Bare fallback
  return <TwoPicker />;
}
