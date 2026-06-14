/**
 * Monkey creature — cute Festive-Gold mascot. Front-facing, big eyes (eye-tracking via
 * data-role pupils), rounded side ears and a heart-shaped light face/muzzle. Conventions
 * shared by all creatures: 240x240 viewBox, palette-var colors, <g data-role="head"> wraps
 * the head, eyes group uses class "d-eyes" (blink), pupils carry data-role for cursor-tracking.
 */
export function MonkeySvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute monkey"
    >
      {/* long curling tail */}
      <path d="M170 198 q60 4 64 -50 q3 -30 -22 -38 q-18 -7 -28 8 q-9 13 4 22 q9 6 16 -2 q-3 14 -18 12 q-22 -3 -20 -28 q2 -28 34 -24"
        fill="none" stroke="var(--gold-edge)" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 198 q60 4 64 -50 q3 -30 -22 -38 q-18 -7 -28 8 q-9 13 4 22 q9 6 16 -2 q-3 14 -18 12 q-22 -3 -20 -28 q2 -28 34 -24"
        fill="none" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      {/* body */}
      <ellipse cx="116" cy="190" rx="56" ry="46" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="116" cy="198" rx="32" ry="30" fill="var(--belly)" />
      {/* feet */}
      <ellipse cx="92" cy="228" rx="17" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="142" cy="228" rx="17" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      {/* arms */}
      <path d="M64 168 q-22 16 -16 42" fill="none" stroke="var(--gold)" strokeWidth="13" strokeLinecap="round" />
      <circle cx="50" cy="212" r="9" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
      <path d="M168 168 q22 16 16 42" fill="none" stroke="var(--gold)" strokeWidth="13" strokeLinecap="round" />
      <circle cx="182" cy="212" r="9" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />

      {/* HEAD */}
      <g data-role="head">
        {/* rounded side ears */}
        <circle cx="58" cy="100" r="22" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <circle cx="58" cy="100" r="11" fill="var(--belly)" />
        <circle cx="174" cy="100" r="22" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <circle cx="174" cy="100" r="11" fill="var(--belly)" />

        {/* head */}
        <circle cx="116" cy="100" r="60" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* heart-shaped light face / muzzle area */}
        <path d="M116 64
                 C 92 40, 56 56, 56 86
                 C 56 118, 90 138, 116 162
                 C 142 138, 176 118, 176 86
                 C 176 56, 140 40, 116 64 Z"
          fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="3.5" strokeLinejoin="round" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M82 84 q12 -8 24 -3" /><path d="M150 84 q-12 -8 -24 -3" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="96" cy="102" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="136" cy="102" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="96" cy="106" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="136" cy="106" r="8" fill="#181818" />
          <circle cx="92" cy="100" r="3" fill="#fff" /><circle cx="132" cy="100" r="3" fill="#fff" />
        </g>

        {/* nose + mischievous grin */}
        <ellipse cx="116" cy="126" rx="6" ry="4" fill="var(--vermilion)" opacity="0.7" />
        <path d="M96 134 q20 22 40 0" fill="none" stroke="var(--gold-edge)" strokeWidth="4" strokeLinecap="round" />
        <path d="M96 134 q20 22 40 0 q-20 6 -40 0 z" fill="var(--vermilion)" opacity="0.25" />

        {/* blush */}
        <ellipse cx="76" cy="124" rx="9" ry="5" fill="var(--vermilion)" opacity="0.32" />
        <ellipse cx="156" cy="124" rx="9" ry="5" fill="var(--vermilion)" opacity="0.32" />
      </g>
    </svg>
  );
}
