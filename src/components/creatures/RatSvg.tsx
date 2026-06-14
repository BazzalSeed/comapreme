/**
 * Rat creature — cute Festive-Gold mascot. Front-facing, big round ears with vermilion
 * inner, pointy snout, prominent whiskers, two little front paws and a long curly tail.
 * Conventions shared by all creatures: 240x240 viewBox, palette-var colors,
 * <g data-role="head"> wraps the head, eyes group uses class "d-eyes" (blink), pupils
 * carry data-role for the hero's cursor-tracking.
 */
export function RatSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute rat"
    >
      {/* long thin curly tail */}
      <path
        d="M170 200 q44 14 56 -16 q10 -26 -14 -38 q16 14 6 32 q-12 22 -50 12 z"
        fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round"
      />

      {/* body */}
      <ellipse cx="120" cy="186" rx="56" ry="48" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="198" rx="32" ry="30" fill="var(--belly)" />
      {/* little front paws */}
      <ellipse cx="100" cy="226" rx="12" ry="9" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
      <ellipse cx="140" cy="226" rx="12" ry="9" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />

      {/* HEAD */}
      <g data-role="head">
        {/* two big round ears */}
        <circle cx="80" cy="62" r="26" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <circle cx="160" cy="62" r="26" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <circle cx="80" cy="62" r="14" fill="var(--vermilion)" opacity="0.85" />
        <circle cx="160" cy="62" r="14" fill="var(--vermilion)" opacity="0.85" />

        {/* head */}
        <circle cx="120" cy="104" r="58" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M84 90 q12 -8 24 -2" /><path d="M156 90 q-12 -8 -24 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="98" cy="104" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="142" cy="104" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="98" cy="108" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="142" cy="108" r="8" fill="#181818" />
          <circle cx="94" cy="102" r="3" fill="#fff" /><circle cx="138" cy="102" r="3" fill="#fff" />
        </g>

        {/* pointy little snout */}
        <path d="M104 132 q16 -10 32 0 q-2 26 -16 30 q-14 -4 -16 -30 z" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />
        {/* nose tip */}
        <path d="M114 156 q6 8 12 0 q-3 8 -6 8 q-3 0 -6 -8 z" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="2" />

        {/* prominent whiskers */}
        <g stroke="var(--gold-edge)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <path d="M104 142 q-28 -4 -46 -14" /><path d="M104 150 q-28 2 -48 0" /><path d="M104 158 q-26 8 -44 14" />
          <path d="M136 142 q28 -4 46 -14" /><path d="M136 150 q28 2 48 0" /><path d="M136 158 q26 8 44 14" />
        </g>

        {/* blush */}
        <ellipse cx="76" cy="124" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="164" cy="124" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
