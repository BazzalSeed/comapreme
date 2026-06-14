/**
 * Ox creature — cute Festive-Gold mascot. Sturdy build, broad belly-colored muzzle with
 * nostril dots, two curved horns, small side ears, a tuft of hair between the horns and
 * little hooves. Conventions shared by all creatures: 240x240 viewBox, palette-var colors,
 * <g data-role="head"> wraps the head, eyes group uses class "d-eyes" (blink), pupils
 * carry data-role for the hero's cursor-tracking.
 */
export function OxSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute ox"
    >
      {/* short tail with tuft */}
      <path d="M178 196 q40 4 40 36" fill="none" stroke="var(--gold-edge)" strokeWidth="6" strokeLinecap="round" />
      <path d="M214 224 q12 6 6 22 q-8 -2 -6 -22 z" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="3" strokeLinejoin="round" />

      {/* sturdy body */}
      <ellipse cx="120" cy="186" rx="64" ry="50" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="198" rx="36" ry="30" fill="var(--belly)" />
      {/* little hooves */}
      <rect x="80" y="220" width="24" height="18" rx="7" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
      <rect x="136" y="220" width="24" height="18" rx="7" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />

      {/* HEAD */}
      <g data-role="head">
        {/* two curved horns */}
        <path d="M84 64 q-30 -10 -38 -36 q22 6 30 22 q6 10 8 14 z" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M156 64 q30 -10 38 -36 q-22 6 -30 22 q-6 10 -8 14 z" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />

        {/* small side ears */}
        <ellipse cx="66" cy="92" rx="16" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" transform="rotate(-24 66 92)" />
        <ellipse cx="174" cy="92" rx="16" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" transform="rotate(24 174 92)" />

        {/* head */}
        <ellipse cx="120" cy="106" rx="60" ry="56" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* tuft of hair between horns */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M112 60 q-4 -14 2 -22" /><path d="M120 58 q0 -16 0 -24" /><path d="M128 60 q4 -14 -2 -22" />
        </g>

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M82 92 q12 -8 26 -2" /><path d="M158 92 q-12 -8 -26 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="98" cy="106" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="142" cy="106" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="98" cy="110" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="142" cy="110" r="8" fill="#181818" />
          <circle cx="94" cy="104" r="3" fill="#fff" /><circle cx="138" cy="104" r="3" fill="#fff" />
        </g>

        {/* broad muzzle with nostril dots */}
        <ellipse cx="120" cy="142" rx="38" ry="26" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
        <ellipse cx="106" cy="142" rx="4" ry="6" fill="var(--gold-edge)" />
        <ellipse cx="134" cy="142" rx="4" ry="6" fill="var(--gold-edge)" />
        <path d="M108 156 q12 8 24 0" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />

        {/* blush */}
        <ellipse cx="74" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="166" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
