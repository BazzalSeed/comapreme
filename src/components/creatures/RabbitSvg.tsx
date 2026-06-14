/**
 * Rabbit creature — cute Festive-Gold mascot. Two tall upright ears with vermilion inner,
 * round fluffy body, tiny triangular nose, small buck teeth, whiskers, a round cotton tail
 * and big gentle eyes. Conventions shared by all creatures: 240x240 viewBox, palette-var
 * colors, <g data-role="head"> wraps the head, eyes group uses class "d-eyes" (blink),
 * pupils carry data-role for the hero's cursor-tracking.
 */
export function RabbitSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute rabbit"
    >
      {/* round cotton tail */}
      <circle cx="176" cy="206" r="16" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />

      {/* round fluffy body */}
      <ellipse cx="120" cy="190" rx="54" ry="46" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="200" rx="32" ry="28" fill="var(--belly)" />
      {/* little feet */}
      <ellipse cx="98" cy="228" rx="16" ry="10" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
      <ellipse cx="142" cy="228" rx="16" ry="10" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />

      {/* HEAD */}
      <g data-role="head">
        {/* two tall upright ears */}
        <path d="M98 70 q-12 -56 4 -68 q18 8 16 64 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M142 70 q12 -56 -4 -68 q-18 8 -16 64 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M102 62 q-6 -42 4 -52 q9 8 8 48 z" fill="var(--vermilion)" opacity="0.85" />
        <path d="M138 62 q6 -42 -4 -52 q-9 8 -8 48 z" fill="var(--vermilion)" opacity="0.85" />

        {/* head */}
        <circle cx="120" cy="110" r="58" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M84 96 q12 -8 24 -2" /><path d="M156 96 q-12 -8 -24 -2" />
        </g>

        {/* big gentle eyes */}
        <g className="d-eyes">
          <ellipse cx="98" cy="110" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="142" cy="110" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="98" cy="114" r="9" fill="#181818" />
          <circle data-role="pupil-right" cx="142" cy="114" r="9" fill="#181818" />
          <circle cx="94" cy="108" r="3.2" fill="#fff" /><circle cx="138" cy="108" r="3.2" fill="#fff" />
        </g>

        {/* tiny triangular nose */}
        <path d="M114 138 h12 l-6 8 z" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="2" strokeLinejoin="round" />
        {/* mouth + small buck teeth */}
        <path d="M120 146 v6 M120 152 q-8 8 -16 4 M120 152 q8 8 16 4" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />
        <rect x="114" y="152" width="12" height="11" rx="2" fill="#fff" stroke="var(--gold-edge)" strokeWidth="2.5" />
        <path d="M120 152 v11" stroke="var(--gold-edge)" strokeWidth="2" />

        {/* whiskers */}
        <g stroke="var(--gold-edge)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <path d="M104 144 q-26 -2 -42 -10" /><path d="M104 150 q-26 4 -44 4" />
          <path d="M136 144 q26 -2 42 -10" /><path d="M136 150 q26 4 44 4" />
        </g>

        {/* blush */}
        <ellipse cx="76" cy="130" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="164" cy="130" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
