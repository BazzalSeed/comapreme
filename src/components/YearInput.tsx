"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

export function YearInput() {
  const router = useRouter();
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function go() {
    if (loading) return;
    if (!year) {
      setError("Pick your birth year first 🐣");
      return;
    }
    setError("");
    setLoading(true);
    const { slug } = getZodiacByYear(Number(year));
    router.push(`/sign/${slug}?year=${year}`);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        go();
      }}
      className="flex flex-col items-center gap-3 w-full"
    >
      <label className="sr-only" htmlFor="year">Your birth year</label>
      <div className="relative w-full">
        <select
          id="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setError("");
          }}
          className="w-full appearance-none rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 pr-10 text-center text-lg font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
        >
          <option value="" disabled>Pick your birth year</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[var(--gold-edge)]">▾</span>
      </div>
      <button type="submit" className="btn-primary w-full text-lg" disabled={loading}>
        {loading ? "Summoning…" : "Reveal my sign 🐉"}
      </button>
      {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
    </form>
  );
}
