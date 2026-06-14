"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiacByYear } from "@/lib/zodiac";
import { YearField, isValidYear } from "@/components/YearField";

const CURRENT_YEAR = new Date().getFullYear();

export function YearInput() {
  const router = useRouter();
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const valid = isValidYear(year);
  const animal = valid ? getZodiacByYear(Number(year)).animal : null;

  function go() {
    if (loading) return;
    if (!isValidYear(year)) {
      if (!year) setError("Pick your birth year first 🐣");
      else if (/^\d{4}$/.test(year) && Number(year) > CURRENT_YEAR) setError("That year hasn't happened yet 🔮");
      else setError("Enter a 4-digit year from 1900 onward 🐣");
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
      <YearField value={year} onChange={(v) => { setYear(v); setError(""); }} />
      <button type="submit" className="btn-primary w-full text-lg" disabled={loading}>
        {loading ? "Summoning…" : valid && animal ? `Reveal your ${animal} 🐉` : "Reveal my sign 🐉"}
      </button>
      {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
    </form>
  );
}
