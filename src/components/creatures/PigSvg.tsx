/**
 * Pig creature — cute Festive-Gold mascot. Front-facing, big eyes (eye-tracking via
 * data-role pupils), big round snout with two nostril dots, two floppy triangular ears,
 * plump round body, tiny trotters, curly tail. Conventions shared by all creatures:
 * 240x240 viewBox, palette-var colors, <g data-role="head"> wraps the head, eyes group uses
 * class "d-eyes" (blink), pupils carry data-role for the hero's cursor-tracking.
 */
export function PigSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute pig"
    >
      {/* curly tail */}
      <path d="M178 192 q26 4 26 -14 q0 -14 -14 -14 q-10 0 -10 10 q0 8 8 8 q6 0 6 -6"
        fill="none" stroke="var(--gold-edge)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      {/* plump body */}
      <ellipse cx="120" cy="188" rx="62" ry="48" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="198" rx="34" ry="30" fill="var(--belly)" />
      {/* tiny trotters */}
      <ellipse cx="90" cy="228" rx="15" ry="10" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="150" cy="228" rx="15" ry="10" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <g stroke="var(--gold-edge)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M90 232 v-5" /><path d="M150 232 v-5" />
      </g>

      {/* HEAD */}
      <g data-role="head">
        {/* floppy triangular ears */}
        <path d="M76 58 q-20 -30 -28 -8 q-6 18 10 34 q12 10 24 0 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M164 58 q20 -30 28 -8 q6 18 -10 34 q-12 10 -24 0 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M70 56 q-14 -18 -20 -4 q-4 12 6 24 z" fill="var(--vermilion)" opacity="0.25" />
        <path d="M170 56 q14 -18 20 -4 q4 12 -6 24 z" fill="var(--vermilion)" opacity="0.25" />

        {/* head */}
        <ellipse cx="120" cy="108" rx="62" ry="56" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M84 86 q12 -8 26 -2" /><path d="M156 86 q-12 -8 -26 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="98" cy="100" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="142" cy="100" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="98" cy="104" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="142" cy="104" r="8" fill="#181818" />
          <circle cx="94" cy="98" r="3" fill="#fff" /><circle cx="138" cy="98" r="3" fill="#fff" />
        </g>

        {/* big round snout */}
        <ellipse cx="120" cy="138" rx="30" ry="24" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
        {/* nostril dots */}
        <ellipse cx="110" cy="138" rx="5" ry="7" fill="#181818" />
        <ellipse cx="130" cy="138" rx="5" ry="7" fill="#181818" />
        {/* content smile */}
        <path d="M104 162 q16 12 32 0" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />

        {/* blush */}
        <ellipse cx="74" cy="126" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="166" cy="126" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
