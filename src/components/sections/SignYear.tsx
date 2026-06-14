import Link from "next/link";
import type { Element } from "@/lib/zodiac";
import { ELEMENT_EMOJI, ELEMENT_COLOR, ELEMENT_BLURBS } from "@/lib/elements";
import { Reveal } from "@/components/Reveal";

interface SignYearProps {
  animal: string;
  element?: Element;
  year?: number;
  elementAnimal?: string;
}

export function SignYear({ animal, element, year, elementAnimal }: SignYearProps) {
  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-14">
      <Reveal>
        <h2 className="font-display text-center text-3xl text-[var(--vermilion-dk)] mb-8">
          Your {animal.toLowerCase()}
        </h2>
        {element ? (
          <div
            className="rounded-2xl border-[3px] bg-[#fffdf6] p-8 text-center"
            style={{ borderColor: ELEMENT_COLOR[element], boxShadow: `0 5px 0 ${ELEMENT_COLOR[element]}` }}
          >
            <div className="text-5xl mb-2">{ELEMENT_EMOJI[element]}</div>
            <p className="font-display text-3xl" style={{ color: ELEMENT_COLOR[element] }}>
              You&apos;re a {elementAnimal}
            </p>
            {year && (
              <p className="mt-1 font-semibold text-[var(--gold-edge)]">born in the year {year}</p>
            )}
            <p className="mt-4 text-[#5a4a2a]">{ELEMENT_BLURBS[element]}</p>
          </div>
        ) : (
          <div className="rounded-2xl border-[3px] border-[var(--gold-soft)] bg-[#fffdf6] p-8 text-center shadow-[0_5px_0_var(--gold-soft)]">
            <p className="text-[#5a4a2a]">
              Want your exact element — Wood, Fire, Earth, Metal, or Water?
            </p>
            <Link href="/" className="btn-primary mt-4 inline-block">
              Enter your birth year →
            </Link>
          </div>
        )}
      </Reveal>
    </section>
  );
}
