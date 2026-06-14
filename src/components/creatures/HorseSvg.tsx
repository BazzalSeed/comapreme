/**
 * Horse creature — cute Festive-Gold mascot. Spirited and friendly: long muzzle, two ears,
 * a flowing vermilion mane along the neck and crown, slim legs with hooves, and a flowing
 * vermilion tail. Conventions shared by all creatures: 240x240 viewBox, palette-var colors,
 * <g data-role="head"> wraps the head, eyes group uses class "d-eyes" (blink), pupils carry
 * data-role for cursor-tracking.
 */
export function HorseSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute horse"
    >
      {/* flowing tail */}
      <path d="M170 168 q44 4 50 -40 q-2 -26 -22 -32 q14 14 8 34 q-6 26 -40 26 z"
        fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />
      <g stroke="var(--gold-edge)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5">
        <path d="M196 102 q14 8 16 30" /><path d="M188 100 q8 10 8 30" />
      </g>

      {/* body */}
      <ellipse cx="118" cy="170" rx="58" ry="44" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
      <ellipse cx="116" cy="184" rx="32" ry="24" fill="var(--belly)" opacity="0.9" />

      {/* legs + hooves */}
      <g fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round">
        <rect x="80" y="196" width="14" height="34" rx="6" />
        <rect x="104" y="200" width="14" height="32" rx="6" />
        <rect x="134" y="196" width="14" height="34" rx="6" />
      </g>
      <g fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round">
        <rect x="79" y="224" width="16" height="9" rx="3" />
        <rect x="103" y="226" width="16" height="9" rx="3" />
        <rect x="133" y="224" width="16" height="9" rx="3" />
      </g>

      {/* neck mane (flows down the back of the neck) */}
      <path d="M150 78 q26 8 22 60 q-4 18 -18 22 q12 -22 4 -44 q-6 -22 -24 -28 z"
        fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />

      {/* HEAD (tilted right, long muzzle to lower-left) */}
      <g data-role="head">
        {/* ears */}
        <path d="M92 50 q-12 -34 8 -42 q18 8 12 40 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M138 50 q12 -34 -8 -42 q-18 8 -12 40 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M95 44 q-6 -20 4 -26 q9 6 6 24 z" fill="var(--vermilion)" opacity="0.8" />
        <path d="M135 44 q6 -20 -4 -26 q-9 6 -6 24 z" fill="var(--vermilion)" opacity="0.8" />

        {/* crown forelock mane */}
        <path d="M104 30 q16 -16 26 0 q-6 16 -13 18 q-7 -2 -13 -18 z"
          fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="3" strokeLinejoin="round" />

        {/* head + long muzzle */}
        <ellipse cx="116" cy="78" rx="46" ry="42" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <path d="M88 96 q-30 18 -28 46 q2 16 20 16 q22 0 34 -28 q8 -22 -6 -34 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />

        {/* muzzle tip */}
        <ellipse cx="74" cy="142" rx="20" ry="15" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
        <circle cx="64" cy="140" r="2.4" fill="var(--gold-edge)" /><circle cx="78" cy="146" r="2.4" fill="var(--gold-edge)" />
        <path d="M62 150 q12 8 24 2" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M90 62 q12 -7 24 -2" /><path d="M150 64 q-12 -7 -24 -2" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="102" cy="76" rx="15" ry="17" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="140" cy="78" rx="13" ry="15" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="102" cy="80" r="7" fill="#181818" />
          <circle data-role="pupil-right" cx="140" cy="82" r="6.5" fill="#181818" />
          <circle cx="98" cy="74" r="2.6" fill="#fff" /><circle cx="136" cy="76" r="2.4" fill="#fff" />
        </g>

        {/* blush */}
        <ellipse cx="92" cy="100" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="150" cy="100" rx="8" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
