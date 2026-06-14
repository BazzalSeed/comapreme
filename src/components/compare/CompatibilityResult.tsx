import Link from "next/link";
import type { Compatibility, CompatAnimation } from "@/lib/compatibility";
import { CREATURES } from "@/components/creatures";
import { GameBanner } from "@/components/GameBanner";
import { CompatibilityMeter } from "@/components/CompatibilityMeter";
import { ShareButton } from "@/components/ShareButton";

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
}

const STYLE: Record<CompatAnimation, { left: string; right: string; float: string; color: string; mirror?: boolean }> = {
  hearts: { left: "lean-l", right: "lean-r", float: "❤️", color: "var(--jade)" },
  sparks: { left: "bounce-sync", right: "bounce-sync", float: "✨", color: "var(--jade)" },
  mirror: { left: "bounce-sync", right: "bounce-sync", float: "✨", color: "var(--gold)", mirror: true },
  shrug: { left: "wobble", right: "wobble", float: "💭", color: "var(--gold-soft)" },
  clash: { left: "clash-l", right: "clash-r", float: "💥", color: "var(--vermilion)" },
};

// fixed positions so server/client render identically (no random)
const FLOATS = [
  { left: "20%", delay: "0s" }, { left: "38%", delay: "0.5s" }, { left: "50%", delay: "1s" },
  { left: "62%", delay: "0.3s" }, { left: "78%", delay: "0.8s" }, { left: "30%", delay: "1.3s" },
  { left: "70%", delay: "1.6s" },
];

export function CompatibilityResult({
  aSlug, bSlug, aLabel, bLabel, aEmoji, bEmoji, compat, shareUrl, restartUrl,
}: ResultProps) {
  const A = CREATURES[aSlug];
  const B = CREATURES[bSlug];
  const s = STYLE[compat.animation];

  return (
    <main className="flex-1 flex flex-col items-center gap-6 px-4 py-10 text-center">
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

      <div className="mt-2 flex flex-col items-center gap-3">
        <ShareButton url={shareUrl} text={`${aLabel} & ${bLabel}: ${compat.score}% — ${compat.title}! 💞 comapreme`} label="Share this result 🔗" />
        <div className="flex gap-4 text-sm font-semibold text-[var(--vermilion-dk)]">
          <Link href={restartUrl} className="underline">Compare someone else →</Link>
          <Link href="/" className="underline">Find your own sign →</Link>
        </div>
      </div>
    </main>
  );
}
