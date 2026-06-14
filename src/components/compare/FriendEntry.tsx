"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";
import { CREATURES } from "@/components/creatures";
import { GameBanner } from "@/components/GameBanner";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

interface FriendEntryProps {
  aSlug: string;
  aAnimal: string;
  aEmoji: string;
  aYear?: number;
  aName?: string;
  /** e.g. "Water Dragon" when the year is known. */
  aElementAnimal?: string;
}

export function FriendEntry({ aSlug, aAnimal, aEmoji, aYear, aName, aElementAnimal }: FriendEntryProps) {
  const router = useRouter();
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Sharer = CREATURES[aSlug];
  const sharerName = aName || "Your friend";
  const sharerSign = aElementAnimal || aAnimal;

  function go() {
    if (loading) return;
    if (!year) {
      setError("Pick your birth year first 🐣");
      return;
    }
    setLoading(true);
    const z = getZodiacByYear(Number(year));
    const params = new URLSearchParams({ a: aSlug });
    if (aYear) params.set("ay", String(aYear));
    if (aName) params.set("an", aName);
    params.set("b", z.slug);
    params.set("by", String(year));
    const cn = name.trim().slice(0, 24);
    if (cn) params.set("bn", cn);
    router.push(`/compare?${params.toString()}`);
  }

  return (
    <main className="flex-1 flex flex-col items-center gap-6 px-4 py-10 text-center">
      <GameBanner sub="YOUR FRIEND IS A" title={aAnimal.toUpperCase()} emblem={aEmoji} />
      <div style={{ width: "min(260px, 70vw)" }} className="d-float">
        {Sharer ? <Sharer /> : <span className="text-7xl">{aEmoji}</span>}
      </div>
      <p className="max-w-md text-lg font-semibold text-[var(--ink)]">
        {sharerName} is a <span className="text-[var(--vermilion-dk)]">{sharerSign}</span> {aEmoji}
        <br />Are you two compatible? 💞
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); go(); }}
        className="flex w-[min(360px,90vw)] flex-col items-center gap-3 rounded-2xl border-[3px] border-[var(--gold-soft)] bg-[#fffdf6]/80 p-6 shadow-[0_6px_0_var(--gold-soft)]"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
          placeholder="Your name (optional)"
          className="w-full rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-2.5 text-center font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
        />
        <div className="relative w-full">
          <select
            value={year}
            onChange={(e) => { setYear(e.target.value); setError(""); }}
            aria-label="Your birth year"
            className="w-full appearance-none rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 pr-10 text-center text-lg font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
          >
            <option value="" disabled>Pick your birth year</option>
            {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[var(--gold-edge)]">▾</span>
        </div>
        <button type="submit" className="btn-primary w-full text-lg" disabled={loading}>
          {loading ? "Summoning…" : "Reveal our compatibility 💞"}
        </button>
        {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
      </form>
    </main>
  );
}
