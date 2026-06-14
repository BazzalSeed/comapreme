"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

export function YearInput() {
  const router = useRouter();
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!year) return;
    setLoading(true);
    const { slug } = getZodiacByYear(Number(year));
    router.push(`/sign/${slug}?year=${year}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-3 w-full">
      <label className="sr-only" htmlFor="year">Your birth year</label>
      <select
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-full appearance-none rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 text-center text-lg font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
      >
        <option value="" disabled>Pick your birth year</option>
        {YEARS.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <button type="submit" className="btn-primary w-full text-lg" disabled={!year || loading}>
        {loading ? "Summoning…" : "Reveal my sign 🐉"}
      </button>
    </form>
  );
}
