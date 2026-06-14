"use client";

import { useState } from "react";
import { ShareButton } from "./ShareButton";

interface ShareWithFriendProps {
  slug: string;
  year?: number;
  animal: string;
}

/** Optional name field + share button — builds a /compare link encoding the sharer. */
export function ShareWithFriend({ slug, year, animal }: ShareWithFriendProps) {
  const [name, setName] = useState("");

  const params = new URLSearchParams({ a: slug });
  if (year) params.set("ay", String(year));
  const clean = name.trim().slice(0, 24);
  if (clean) params.set("an", clean);

  return (
    <div className="flex flex-col items-center gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={24}
        placeholder="Your name (optional)"
        className="w-[min(280px,80vw)] rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-2.5 text-center font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
      />
      <ShareButton
        url={`/compare?${params.toString()}`}
        text={`I'm a ${animal} on comapreme 🐉 — are we compatible?`}
        label="Compare with a friend 💞"
      />
    </div>
  );
}
