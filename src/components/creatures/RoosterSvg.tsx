/**
 * Rooster creature — cute Festive-Gold mascot. Front-facing bird, big eyes (eye-tracking via
 * data-role pupils), red comb on top, wattle under a short triangular beak, plump feathered
 * body and a tall colorful tail plume. Conventions shared by all creatures: 240x240 viewBox,
 * palette-var colors, <g data-role="head"> wraps the head, eyes group uses class "d-eyes"
 * (blink), pupils carry data-role for cursor-tracking.
 */
export function RoosterSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute rooster"
    >
      {/* tall colorful tail plume (behind body) */}
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M168 192 q56 -2 72 -68 q-30 30 -54 26" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="4" />
        <path d="M168 196 q48 8 56 -52 q-26 24 -46 22" fill="var(--jade)" stroke="var(--gold-edge)" strokeWidth="4" />
        <path d="M168 200 q40 14 40 -34 q-22 18 -38 16" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="4" />
      </g>

      {/* plump feathered body */}
      <ellipse cx="116" cy="186" rx="58" ry="50" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="110" cy="196" rx="32" ry="34" fill="var(--belly)" />
      {/* wing scallop */}
      <path d="M150 168 q22 6 24 30 q-12 -10 -26 -8 q-10 -12 2 -22 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />
      <g stroke="var(--vermilion)" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.7">
        <path d="M152 176 q12 2 16 16" /><path d="M148 186 q12 2 16 16" />
      </g>

      {/* legs + feet */}
      <g stroke="var(--gold-edge)" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M100 230 v8" /><path d="M134 230 v8" />
        <path d="M100 238 l-8 6 m8 -6 l0 8 m0 -8 l8 6" />
        <path d="M134 238 l-8 6 m8 -6 l0 8 m0 -8 l8 6" />
      </g>

      {/* HEAD */}
      <g data-role="head">
        {/* red comb on top */}
        <path d="M96 56 q-2 -22 14 -22 q4 -16 18 -10 q8 -14 20 -2 q10 -6 12 10 q14 0 8 22 q-18 -10 -36 -8 q-22 -2 -36 8 z"
          fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />

        {/* head */}
        <circle cx="116" cy="98" r="52" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M86 84 q12 -8 24 -3" /><path d="M146 84 q-12 -8 -24 -3" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="98" cy="98" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="134" cy="98" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="98" cy="102" r="8" fill="#181818" />
          <circle data-role="pupil-right" cx="134" cy="102" r="8" fill="#181818" />
          <circle cx="94" cy="96" r="3" fill="#fff" /><circle cx="130" cy="96" r="3" fill="#fff" />
        </g>

        {/* short triangular beak */}
        <path d="M104 124 h24 l-12 18 z" fill="var(--gold-edge)" stroke="var(--gold-edge)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M104 124 h24" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />

        {/* wattle under the beak */}
        <path d="M108 142 q-6 18 8 24 q14 -6 8 -24 q-8 6 -16 0 z" fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />

        {/* blush */}
        <ellipse cx="78" cy="116" rx="9" ry="5" fill="var(--vermilion)" opacity="0.32" />
        <ellipse cx="154" cy="116" rx="9" ry="5" fill="var(--vermilion)" opacity="0.32" />
      </g>
    </svg>
  );
}
