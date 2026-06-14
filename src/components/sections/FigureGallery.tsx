import type { Figure } from "@/data/types";
import { Reveal } from "@/components/Reveal";

export function FigureGallery({ figures, animal }: { figures: Figure[]; animal: string }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12">
      <Reveal>
        <h2 className="font-display text-center text-3xl text-[var(--vermilion-dk)] mb-2">
          Icons born in your year
        </h2>
        <p className="text-center text-[var(--gold-edge)] mb-8 font-medium">
          Legends who share the {animal} ✦
        </p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {figures.map((f, i) => (
          <Reveal key={f.name} delay={(i % 5) * 70}>
            <div className="figure-card h-full">
              <div className="figure-avatar">{f.emoji}</div>
              <h3 className="mt-3 font-display text-lg text-[var(--ink)] leading-tight">{f.name}</h3>
              <p className="text-xs font-semibold text-[var(--gold-edge)]">
                {f.field} · {f.year}
              </p>
              <p className="mt-2 text-sm text-[#5a4a2a] leading-snug">{f.funFact}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
