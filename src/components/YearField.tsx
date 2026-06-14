"use client";

import { getZodiacByYear } from "@/lib/zodiac";
import { getSignBySlug } from "@/data/registry";

const CURRENT_YEAR = new Date().getFullYear();

export function isValidYear(v: string): boolean {
  return /^\d{4}$/.test(v) && Number(v) >= 1900 && Number(v) <= CURRENT_YEAR;
}

interface YearFieldProps {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  /** Show the live "you're a …" sign preview under the field. */
  preview?: boolean;
}

/** Typed 4-digit birth-year field with an instant zodiac preview. */
export function YearField({ value, onChange, label = "Your birth year", preview = true }: YearFieldProps) {
  const valid = isValidYear(value);
  const z = valid ? getZodiacByYear(Number(value)) : null;
  const sign = z ? getSignBySlug(z.slug) : null;

  return (
    <div className="w-full">
      <input
        type="text"
        inputMode="numeric"
        pattern="\d*"
        maxLength={4}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 4))}
        placeholder="YYYY"
        aria-label={label}
        className="w-full rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-3 text-center text-2xl font-bold tracking-[0.35em] text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none placeholder:tracking-[0.35em] placeholder:text-[#c9b48a] focus:border-[var(--vermilion)]"
      />
      {preview && z && sign && (
        <div className="creature-pop mt-2 flex items-center justify-center gap-2 text-base font-bold text-[var(--vermilion-dk)]">
          <span className="text-2xl">{sign.emoji}</span> You&apos;re a {z.elementAnimal}!
        </div>
      )}
    </div>
  );
}
