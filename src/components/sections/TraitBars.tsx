import type { Trait } from "@/data/types";
import { Reveal } from "@/components/Reveal";

function Bar({ value }: { value: number }) {
  return (
    <span className="stat-track" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`stat-seg${n <= value ? " on" : ""}`} />
      ))}
    </span>
  );
}

export function TraitBars({ traits }: { traits: Trait[] }) {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-12">
      <Reveal>
        <h2 className="font-display text-center text-3xl text-[var(--vermilion-dk)] mb-8">
          Dragon traits
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {traits.map((t, i) => (
          <Reveal key={t.label} delay={i * 60}>
            <div className="flex flex-col gap-1 rounded-xl border-2 border-[var(--gold-soft)] bg-[#fffdf6] p-4 shadow-[0_3px_0_var(--gold-soft)]">
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-lg text-[var(--ink)]">{t.label}</span>
                <Bar value={t.value} />
              </div>
              <p className="text-sm text-[#5a4a2a]">{t.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
