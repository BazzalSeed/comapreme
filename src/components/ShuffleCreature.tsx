"use client";

import { useEffect, useState } from "react";
import { CREATURES } from "@/components/creatures";
import { SIGNS } from "@/data/registry";

const ORDER = SIGNS.map((s) => s.slug);

/** A floating creature on the landing page that shuffles through all 12 signs. */
export function ShuffleCreature() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((p) => (p + 1) % ORDER.length), 1900);
    return () => window.clearInterval(t);
  }, []);

  const Creature = CREATURES[ORDER[i]];

  return (
    <div className="flex items-center justify-center" style={{ width: "min(300px, 76vw)", height: 200 }}>
      <div key={ORDER[i]} className="creature-pop flex w-full justify-center">
        <Creature className="d-float" />
      </div>
    </div>
  );
}
