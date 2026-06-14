/**
 * Dog creature — cute Festive-Gold mascot. Front-facing, big eyes (eye-tracking via
 * data-role pupils), two floppy ears, friendly muzzle with dark nose and little tongue,
 * round body, four little paws, wagging tail. Conventions shared by all creatures:
 * 240x240 viewBox, palette-var colors, <g data-role="head"> wraps the head, eyes group uses
 * class "d-eyes" (blink), pupils carry data-role for the hero's cursor-tracking.
 */
export function DogSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute dog"
    >
      {/* wagging tail */}
      <path d="M176 196 q44 -2 50 -40 q4 -22 -14 -30 q10 12 4 30 q-8 26 -40 24 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />

      {/* body */}
      <ellipse cx="120" cy="190" rx="58" ry="46" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="200" rx="32" ry="28" fill="var(--belly)" />
      {/* legs / paws */}
      <ellipse cx="88" cy="226" rx="17" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="152" cy="226" rx="17" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <g stroke="var(--gold-edge)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M84 230 v-6 M92 230 v-6" /><path d="M148 230 v-6 M156 230 v-6" />
      </g>

      {/* HEAD */}
      <g data-role="head">
        {/* floppy ears */}
        <path d="M70 88 q-34 -22 -38 14 q-3 30 22 36 q14 4 22 -8 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M170 88 q34 -22 38 14 q3 30 -22 36 q-14 4 -22 -8 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M58 96 q-22 -10 -22 18 q0 20 14 24 z" fill="var(--vermilion)" opacity="0.25" />
        <path d="M182 96 q22 -10 22 18 q0 20 -14 24 z" fill="var(--vermilion)" opacity="0.25" />

        {/* head */}
        <circle cx="120" cy="104" r="60" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M82 88 q12 -8 26 -2" /><path d="M158 88 q-12 -8 -26 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="97" cy="102" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="143" cy="102" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="97" cy="106" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="143" cy="106" r="8" fill="#181818" />
          <circle cx="93" cy="100" r="3" fill="#fff" /><circle cx="139" cy="100" r="3" fill="#fff" />
        </g>

        {/* muzzle */}
        <ellipse cx="120" cy="138" rx="32" ry="24" fill="var(--belly)" />
        {/* nose */}
        <ellipse cx="120" cy="130" rx="11" ry="8" fill="#181818" />
        <ellipse cx="116" cy="127" r="2.5" rx="3" ry="2" fill="#fff" opacity="0.7" />
        {/* mouth */}
        <path d="M120 138 v8 M120 146 q-9 8 -18 4 M120 146 q9 8 18 4"
          fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />
        {/* happy tongue */}
        <path d="M114 150 q6 16 12 0 q0 12 -6 14 q-6 -2 -6 -14 z"
          fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="2" strokeLinejoin="round" />

        {/* blush */}
        <ellipse cx="76" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="164" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
