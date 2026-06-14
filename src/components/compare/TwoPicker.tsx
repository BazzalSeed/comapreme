"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";
import { GameBanner } from "@/components/GameBanner";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

function YearSelect({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="w-full appearance-none rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 pr-10 text-center text-lg font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
      >
        <option value="" disabled>{label}</option>
        {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
      </select>
      <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[var(--gold-edge)]">▾</span>
    </div>
  );
}

export function TwoPicker() {
  const router = useRouter();
  const [ya, setYa] = useState("");
  const [yb, setYb] = useState("");
  const [error, setError] = useState("");

  function go() {
    if (!ya || !yb) {
      setError("Pick both birth years 🐣");
      return;
    }
    const za = getZodiacByYear(Number(ya));
    const zb = getZodiacByYear(Number(yb));
    const p = new URLSearchParams({ a: za.slug, ay: ya, b: zb.slug, by: yb });
    router.push(`/compare?${p.toString()}`);
  }

  return (
    <main className="flex-1 flex flex-col items-center gap-6 px-4 py-12 text-center">
      <GameBanner sub="ARE YOU TWO" title="COMPATIBLE?" emblem="💞" titleSize="clamp(1.6rem,7vw,3rem)" />
      <p className="max-w-md font-medium text-[#5a4a2a]">Pick two birth years and find out how the signs get along.</p>
      <form
        onSubmit={(e) => { e.preventDefault(); go(); }}
        className="flex w-[min(360px,90vw)] flex-col items-center gap-3 rounded-2xl border-[3px] border-[var(--gold-soft)] bg-[#fffdf6]/80 p-6 shadow-[0_6px_0_var(--gold-soft)]"
      >
        <YearSelect value={ya} onChange={(v) => { setYa(v); setError(""); }} label="First birth year" />
        <span className="font-display text-2xl text-[var(--vermilion)]">×</span>
        <YearSelect value={yb} onChange={(v) => { setYb(v); setError(""); }} label="Second birth year" />
        <button type="submit" className="btn-primary w-full text-lg">Compare 💞</button>
        {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
      </form>
    </main>
  );
}
