import Link from "next/link";
import type { SignMeta } from "@/data/types";
import { GameBanner } from "@/components/GameBanner";

export function ComingSoon({ sign }: { sign: SignMeta }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <GameBanner sub="YOU ARE BORN IN THE YEAR OF THE" title={sign.animal.toUpperCase()} />
      <div className="text-7xl" aria-hidden>{sign.emoji}</div>
      <p className="max-w-md text-lg font-semibold text-[var(--ink)]">{sign.blurb}</p>
      <div className="bubble max-w-sm">
        This one&apos;s still being crafted — the Dragon got first dibs 🐉
      </div>
      <Link href="/sign/dragon" className="text-[var(--vermilion-dk)] font-semibold underline">
        Meet the Dragon while you wait →
      </Link>
      <Link href="/" className="btn-primary mt-2">Try another date</Link>
    </main>
  );
}
