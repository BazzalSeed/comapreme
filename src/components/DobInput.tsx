"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getZodiac } from "@/lib/zodiac";

export function DobInput() {
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return setError("Pick your birth date first 🐣");
    if (Number.isNaN(new Date(dob).getTime())) return setError("Hmm, that date looks off.");
    if (dob > today) return setError("Time traveler? Pick a date in the past ⏳");
    if (Number(dob.slice(0, 4)) < 1900) return setError("Let's keep it to 1900 or later.");
    setError("");
    setLoading(true);
    const { slug } = getZodiac(dob);
    router.push(`/sign/${slug}?dob=${dob}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-3 w-full">
      <label className="sr-only" htmlFor="dob">Your date of birth</label>
      <input
        id="dob"
        type="date"
        max={today}
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
          setError("");
        }}
        className="w-full rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 text-center text-lg font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
      />
      <button type="submit" className="btn-primary w-full text-lg" disabled={loading}>
        {loading ? "Summoning…" : "Reveal my sign 🐉"}
      </button>
      {error && <p className="text-sm font-semibold text-[var(--vermilion-dk)]">{error}</p>}
    </form>
  );
}
