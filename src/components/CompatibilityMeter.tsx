"use client";

import { useEffect, useState } from "react";

export function CompatibilityMeter({ score, color }: { score: number; color: string }) {
  const [w, setW] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setW(score), reduce ? 0 : 150);
    return () => window.clearTimeout(t);
  }, [score]);

  return (
    <div className="w-[min(420px,88vw)]">
      <div className="h-7 w-full overflow-hidden rounded-full border-[3px] border-[var(--ink)] bg-white shadow-[2px_2px_0_var(--ink)]">
        <div
          className="h-full rounded-full transition-[width] duration-[1100ms] ease-out"
          style={{ width: `${w}%`, background: color }}
        />
      </div>
      <div className="mt-2 text-center font-display text-3xl" style={{ color }}>
        {score}%
      </div>
    </div>
  );
}
