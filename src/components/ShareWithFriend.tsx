"use client";

import { useState } from "react";
import { ShareButton } from "./ShareButton";

interface ShareWithFriendProps {
  slug: string;
  year?: number;
  animal: string;
}

/** Required name + share button — builds a /compare link encoding the sharer. */
export function ShareWithFriend({ slug, year, animal }: ShareWithFriendProps) {
  const [name, setName] = useState("");
  const clean = name.trim().slice(0, 24);
  const ready = clean.length > 0;

  const params = new URLSearchParams({ a: slug });
  if (year) params.set("ay", String(year));
  if (ready) params.set("an", clean);

  return (
    <div className="flex w-[min(380px,90vw)] flex-col items-center gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={24}
        placeholder="Your name"
        aria-label="Your name"
        className="w-full rounded-xl border-[3px] border-[var(--ink)] bg-white px-4 py-2.5 text-center font-semibold text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] outline-none focus:border-[var(--vermilion)]"
      />
      <ShareButton
        url={`/compare?${params.toString()}`}
        text={`I'm a ${animal} on compareme 🐉 — are we compatible?`}
        label="Compare with a friend 💞"
        className="btn-primary w-full text-lg"
        disabled={!ready}
      />
      {!ready && (
        <p className="text-xs font-medium text-[var(--gold-edge)]">
          Add your name so your friend knows who&apos;s asking 👀
        </p>
      )}
    </div>
  );
}
