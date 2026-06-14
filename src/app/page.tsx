import { YearInput } from "@/components/YearInput";
import { ShuffleCreature } from "@/components/ShuffleCreature";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center gap-7">
      <div>
        <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[var(--vermilion)] mb-1">
          ✦ Chinese Zodiac ✦
        </p>
        <h1
          className="font-display text-6xl sm:text-7xl font-black"
          style={{
            backgroundImage: "linear-gradient(180deg,#ffe9a8,var(--gold) 55%,var(--gold-soft))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 3px 0 rgba(125,90,10,0.18)",
          }}
        >
          compareme
        </h1>
        <p className="mt-3 max-w-md text-lg font-medium text-[#5a4a2a]">
          Pick your birth year, find your Chinese zodiac — and meet the legends who share your sign.
        </p>
      </div>

      {/* floating creature, shuffling through all 12 signs */}
      <ShuffleCreature />

      <div className="w-[min(360px,90vw)] rounded-2xl border-[3px] border-[var(--gold-soft)] bg-[#fffdf6]/80 p-6 shadow-[0_6px_0_var(--gold-soft)] backdrop-blur">
        <YearInput />
      </div>
    </main>
  );
}
