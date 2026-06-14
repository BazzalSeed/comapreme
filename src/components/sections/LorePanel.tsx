import type { LoreBite } from "@/data/types";
import { Reveal } from "@/components/Reveal";

export function LorePanel({ lore, animal, emoji }: { lore: LoreBite[]; animal: string; emoji: string }) {
  return (
    <section className="w-full bg-[#1a1410] py-14">
      <div className="mx-auto w-full max-w-4xl px-4">
        <Reveal>
          <h2 className="font-display text-center text-3xl text-[var(--gold)] mb-2">{animal} lore</h2>
          <p className="text-center text-[#cbb98e] mb-8 font-medium">
            What it actually means to be a {animal} {emoji}
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {lore.map((bite, i) => (
            <Reveal key={bite.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border-2 border-[var(--gold-edge)] bg-[#241a12] p-5">
                <div className="text-3xl mb-2">{bite.emoji}</div>
                <h3 className="font-display text-xl text-[var(--gold)] mb-1">{bite.title}</h3>
                <p className="text-sm text-[#e8dcc4] leading-relaxed">{bite.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
