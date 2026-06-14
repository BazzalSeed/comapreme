import Link from "next/link";
import type { Compatibility, CompatAnimation } from "@/lib/compatibility";
import { getRelations } from "@/lib/compatibility";
import { CREATURES } from "@/components/creatures";
import { SIGNS } from "@/data/registry";
import { GameBanner } from "@/components/GameBanner";
import { CompatibilityMeter } from "@/components/CompatibilityMeter";
import { ShareButton } from "@/components/ShareButton";
import { Reveal } from "@/components/Reveal";

interface ResultProps {
  aSlug: string;
  bSlug: string;
  aLabel: string;
  bLabel: string;
  aEmoji: string;
  bEmoji: string;
  compat: Compatibility;
  shareUrl: string;
  restartUrl: string;
  ownSignUrl: string;
}

const STYLE: Record<CompatAnimation, { left: string; right: string; float: string; color: string; mirror?: boolean }> = {
  hearts: { left: "lean-l", right: "lean-r", float: "❤️", color: "var(--jade)" },
  sparks: { left: "bounce-sync", right: "bounce-sync", float: "✨", color: "var(--jade)" },
  mirror: { left: "bounce-sync", right: "bounce-sync", float: "✨", color: "var(--gold)", mirror: true },
  shrug: { left: "wobble", right: "wobble", float: "💭", color: "var(--gold-soft)" },
  clash: { left: "clash-l", right: "clash-r", float: "💥", color: "var(--vermilion)" },
};

const FLOATS = [
  { left: "20%", delay: "0s" }, { left: "38%", delay: "0.5s" }, { left: "50%", delay: "1s" },
  { left: "62%", delay: "0.3s" }, { left: "78%", delay: "0.8s" }, { left: "30%", delay: "1.3s" },
  { left: "70%", delay: "1.6s" },
];

const META = Object.fromEntries(SIGNS.map((s) => [s.slug, s])) as Record<string, (typeof SIGNS)[number]>;

function SignChips({ slugs }: { slugs: string[] }) {
  return (
    <span className="inline-flex flex-wrap justify-center gap-1.5">
      {slugs.map((sl) => (
        <Link
          key={sl}
          href={`/sign/${sl}`}
          className="inline-flex items-center gap-1 rounded-full border-2 border-[var(--gold-soft)] bg-[#fffdf6] px-2.5 py-0.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--vermilion)]"
        >
          <span aria-hidden>{META[sl]?.emoji}</span>
          {META[sl]?.animal}
        </Link>
      ))}
    </span>
  );
}

function DetailCard({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="h-full rounded-2xl border-2 border-[var(--gold-soft)] bg-[#fffdf6] p-5 text-left shadow-[0_3px_0_var(--gold-soft)]">
      <h3 className="font-display text-xl text-[var(--vermilion-dk)]">{emoji} {title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#5a4a2a]">{body}</p>
    </div>
  );
}

export function CompatibilityResult({
  aSlug, bSlug, aLabel, bLabel, aEmoji, bEmoji, compat, shareUrl, restartUrl, ownSignUrl,
}: ResultProps) {
  const A = CREATURES[aSlug];
  const B = CREATURES[bSlug];
  const s = STYLE[compat.animation];
  const relA = getRelations(aSlug);
  const relB = getRelations(bSlug);
  const aName = META[aSlug]?.animal ?? aSlug;
  const bName = META[bSlug]?.animal ?? bSlug;

  return (
    <main className="flex-1 flex flex-col items-center gap-7 px-4 py-10 text-center">
      <GameBanner sub="COMPATIBILITY" title={compat.title.toUpperCase()} emblem={compat.emoji} titleSize="clamp(1.5rem, 6vw, 2.8rem)" />

      <p className="text-lg font-semibold text-[var(--ink)]">
        {aLabel} {aEmoji} <span className="text-[var(--vermilion)]">&times;</span> {bLabel} {bEmoji}
      </p>

      {/* creatures + floating emoji */}
      <div className="relative flex w-full max-w-2xl items-end justify-center gap-1 sm:gap-4" style={{ minHeight: 220 }}>
        <div className="pointer-events-none absolute inset-0 z-10">
          {FLOATS.map((f, i) => (
            <span key={i} className="float-emoji text-2xl" style={{ left: f.left, bottom: "30%", animationDelay: f.delay }}>
              {s.float}
            </span>
          ))}
        </div>
        <div className={s.left} style={{ width: "min(190px, 40vw)" }}>
          {A ? <A /> : <span className="text-7xl">{aEmoji}</span>}
        </div>
        <div className={s.right} style={{ width: "min(190px, 40vw)", transform: s.mirror ? "scaleX(-1)" : undefined }}>
          {B ? <B /> : <span className="text-7xl">{bEmoji}</span>}
        </div>
      </div>

      <div className="text-5xl">{compat.emoji}</div>
      <CompatibilityMeter score={compat.score} color={s.color} />
      <p className="max-w-md text-[#5a4a2a]">{compat.blurb}</p>

      {/* rich detail */}
      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        <Reveal><DetailCard emoji="👯" title="As friends" body={compat.asFriends} /></Reveal>
        <Reveal delay={80}><DetailCard emoji="💘" title="As lovers" body={compat.asLovers} /></Reveal>
        <Reveal delay={160}><DetailCard emoji="⚠️" title="Watch out for" body={compat.watchOut} /></Reveal>
      </div>

      {/* per-sign matches */}
      <div className="flex w-full max-w-2xl flex-col gap-4">
        {[{ name: aName, emoji: aEmoji, rel: relA }, { name: bName, emoji: bEmoji, rel: relB }].map((x) => (
          <div key={x.name} className="rounded-2xl border-2 border-[var(--gold-soft)] bg-[#fffdf6]/70 p-4">
            <p className="mb-2 font-display text-lg text-[var(--ink)]">{x.emoji} {x.name}</p>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--jade)]">Clicks with</p>
            <SignChips slugs={x.rel.best} />
            <p className="mb-1 mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--vermilion)]">Clashes with</p>
            <SignChips slugs={x.rel.avoid} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col items-center gap-3">
        <ShareButton url={shareUrl} text={`${aLabel} & ${bLabel}: ${compat.score}% — ${compat.title}! 💞 compareme`} label="Share this result 🔗" />
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-[var(--vermilion-dk)]">
          <Link href={restartUrl} className="underline">Compare someone else →</Link>
          <Link href={ownSignUrl} className="underline">See your own sign →</Link>
        </div>
      </div>
    </main>
  );
}
