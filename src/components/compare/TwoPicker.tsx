"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";
import { GameBanner } from "@/components/GameBanner";
import { YearField, isValidYear } from "@/components/YearField";

export function TwoPicker() {
  const router = useRouter();
  const [ya, setYa] = useState("");
  const [yb, setYb] = useState("");
  const [error, setError] = useState("");

  function go() {
    if (!isValidYear(ya) || !isValidYear(yb)) {
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
        <YearField value={ya} onChange={(v) => { setYa(v); setError(""); }} label="First birth year" />
        <span className="font-display text-2xl text-[var(--vermilion)]">×</span>
        <YearField value={yb} onChange={(v) => { setYb(v); setError(""); }} label="Second birth year" />
        <button type="submit" className="btn-primary w-full text-lg">Compare 💞</button>
        {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
      </form>
    </main>
  );
}
