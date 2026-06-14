/**
 * Tiger creature — cute Festive-Gold mascot. Front-facing, big eyes (eye-tracking via
 * data-role pupils), classic 王 ("king") forehead mark. Conventions shared by all creatures:
 * 240x240 viewBox, palette-var colors, <g data-role="head"> wraps the head, eyes group uses
 * class "d-eyes" (blink), pupils carry data-role for the hero's cursor-tracking.
 */
export function TigerSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute tiger"
    >
      {/* tail */}
      <path d="M168 196 q58 6 56 -52 q-2 -24 -22 -28 q14 10 12 30 q-2 34 -46 34 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />
      <g stroke="var(--vermilion)" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M205 120 q10 4 12 12" /><path d="M210 138 q10 2 13 9" />
      </g>

      {/* body */}
      <ellipse cx="120" cy="190" rx="60" ry="46" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="120" cy="200" rx="34" ry="28" fill="var(--belly)" />
      <ellipse cx="94" cy="226" rx="18" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="146" cy="226" rx="18" ry="11" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      {/* body stripes */}
      <g stroke="var(--vermilion)" strokeWidth="5" strokeLinecap="round">
        <path d="M70 178 q-6 12 -2 26" /><path d="M170 178 q6 12 2 26" />
      </g>

      {/* HEAD */}
      <g data-role="head">
        {/* ears */}
        <path d="M80 60 q-16 -34 6 -46 q26 6 26 40 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M160 60 q16 -34 -6 -46 q-26 6 -26 40 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M82 50 q-8 -18 4 -26 q12 4 12 22 z" fill="var(--vermilion)" opacity="0.85" />
        <path d="M158 50 q8 -18 -4 -26 q-12 4 -12 22 z" fill="var(--vermilion)" opacity="0.85" />

        {/* head */}
        <circle cx="120" cy="104" r="62" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* side stripes */}
        <g stroke="var(--vermilion)" strokeWidth="5" strokeLinecap="round">
          <path d="M64 92 q-10 6 -12 16" /><path d="M62 110 q-12 4 -14 14" />
          <path d="M176 92 q10 6 12 16" /><path d="M178 110 q12 4 14 14" />
        </g>

        {/* 王 king mark */}
        <g stroke="var(--vermilion)" strokeWidth="4" strokeLinecap="round">
          <path d="M110 62 h20" /><path d="M110 72 h20" /><path d="M108 82 h24" /><path d="M120 62 v20" />
        </g>

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M82 92 q12 -8 26 -2" /><path d="M158 92 q-12 -8 -26 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="97" cy="106" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="143" cy="106" rx="17" ry="19" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="97" cy="110" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="143" cy="110" r="8" fill="#181818" />
          <circle cx="93" cy="104" r="3" fill="#fff" /><circle cx="139" cy="104" r="3" fill="#fff" />
        </g>

        {/* snout */}
        <ellipse cx="120" cy="138" rx="30" ry="22" fill="var(--belly)" />
        <path d="M110 132 q10 8 20 0 q-4 10 -10 10 q-6 0 -10 -10 z" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="2" />
        <path d="M120 148 q-8 8 -18 4 M120 148 q8 8 18 4" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />
        {/* whiskers */}
        <g stroke="var(--gold-edge)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <path d="M92 140 q-26 -2 -40 -10" /><path d="M92 148 q-26 4 -42 2" />
          <path d="M148 140 q26 -2 40 -10" /><path d="M148 148 q26 4 42 2" />
        </g>
        {/* blush */}
        <ellipse cx="74" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="166" cy="128" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
