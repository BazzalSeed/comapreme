"use client";

import { useEffect, useRef, useState } from "react";
import { GameBanner } from "@/components/GameBanner";
import { StatChip } from "@/components/StatChip";

export interface Chip {
  label: string;
  color?: string;
}

interface SignHeroProps {
  bannerSub: string;
  bannerTitle: string;
  chips: Chip[];
  jokes: string[];
  excited: string[];
  /** The hero character (bespoke SVG for Dragon, big emoji otherwise). */
  character: React.ReactNode;
  /** Emoji that puffs out on click. */
  puff: string;
  /** Banner end-cap emblem. */
  emblem?: string;
}

export function SignHero({ bannerSub, bannerTitle, chips, jokes, excited, character, puff, emblem }: SignHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const jokeIdx = useRef(0);
  const [bubble, setBubble] = useState(jokes[0] ?? "");

  useEffect(() => {
    const hero = heroRef.current;
    const holder = holderRef.current;
    if (!hero || !holder) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // present only for the bespoke dragon SVG; null-safe for emoji characters
    const pupils = [
      holder.querySelector<SVGGraphicsElement>("[data-role=pupil-left]"),
      holder.querySelector<SVGGraphicsElement>("[data-role=pupil-right]"),
    ];
    const head = holder.querySelector<SVGGraphicsElement>("[data-role=head]");

    function say(text: string) {
      const el = bubbleRef.current;
      if (!el) return setBubble(text);
      el.style.opacity = "0";
      window.setTimeout(() => {
        setBubble(text);
        el.style.opacity = "1";
      }, 170);
    }
    function nextJoke() {
      jokeIdx.current = (jokeIdx.current + 1) % jokes.length;
      say(jokes[jokeIdx.current]);
    }

    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      for (const p of pupils) {
        if (!p) continue;
        const r = p.getBoundingClientRect();
        const a = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2));
        p.setAttribute("transform", `translate(${Math.cos(a) * 5} ${Math.sin(a) * 5})`);
      }
      if (head) {
        const r = head.getBoundingClientRect();
        const tilt = Math.max(-9, Math.min(9, (e.clientX - (r.left + r.width / 2)) / 26));
        // rotate around the head's own bbox center so any creature works
        const bb = head.getBBox();
        head.setAttribute("transform", `rotate(${tilt} ${bb.x + bb.width / 2} ${bb.y + bb.height / 2})`);
      }
    };

    const onEnter = () => {
      if (!reduce) holder.classList.add("excited");
      say(excited[Math.floor(Math.random() * excited.length)] ?? jokes[jokeIdx.current]);
    };
    const onLeave = () => holder.classList.remove("excited");

    const onClick = (e: MouseEvent) => {
      if (!reduce) {
        holder.classList.remove("jump");
        void holder.offsetWidth;
        holder.classList.add("jump");
        const el = document.createElement("div");
        el.className = "fire-puff";
        el.textContent = puff;
        const r = hero.getBoundingClientRect();
        el.style.left = `${e.clientX - r.left - 16}px`;
        el.style.top = `${e.clientY - r.top - 16}px`;
        hero.appendChild(el);
        window.setTimeout(() => el.remove(), 1000);
      }
      nextJoke();
    };

    hero.addEventListener("pointermove", onMove);
    holder.addEventListener("pointerenter", onEnter);
    holder.addEventListener("pointerleave", onLeave);
    hero.addEventListener("click", onClick);
    const interval = window.setInterval(nextJoke, 3800);

    return () => {
      hero.removeEventListener("pointermove", onMove);
      holder.removeEventListener("pointerenter", onEnter);
      holder.removeEventListener("pointerleave", onLeave);
      hero.removeEventListener("click", onClick);
      window.clearInterval(interval);
    };
  }, [jokes, excited, puff]);

  return (
    <div ref={heroRef} className="relative flex flex-col items-center gap-5 px-4 pt-10 pb-6 select-none cursor-pointer">
      <GameBanner sub={bannerSub} title={bannerTitle} emblem={emblem} />

      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <StatChip key={c.label} color={c.color}>{c.label}</StatChip>
        ))}
      </div>

      <div ref={bubbleRef} className="bubble max-w-[90vw] text-center text-sm sm:text-base">
        {bubble}
      </div>

      <div ref={holderRef} className="d-holder flex items-center justify-center" style={{ width: "min(560px, 86vw)" }}>
        {character}
      </div>

      <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#bba87f]">psst — hover me, click me ✨</p>
    </div>
  );
}
