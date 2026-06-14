/**
 * Snake creature — cute Festive-Gold mascot. A coiled serpentine body (smooth stacked
 * S-coil, like a friendly cobra at rest) with the head resting on top. Conventions shared by
 * all creatures: 240x240 viewBox, palette-var colors, <g data-role="head"> wraps the head,
 * eyes group uses class "d-eyes" (blink), pupils carry data-role for cursor-tracking.
 */
export function SnakeSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute snake"
    >
      {/* coiled body — stacked S-coil, bottom loop widest */}
      <path
        d="M120 232 q-78 0 -78 -40 q0 -36 78 -36 q78 0 78 36 q0 40 -78 40 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round"
      />
      {/* middle coil loop */}
      <path
        d="M120 168 q-62 0 -62 -32 q0 -30 62 -30 q62 0 62 30 q0 32 -62 32 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round"
      />
      {/* belly highlights on the coils */}
      <ellipse cx="120" cy="208" rx="46" ry="14" fill="var(--belly)" opacity="0.85" />
      <ellipse cx="120" cy="150" rx="36" ry="11" fill="var(--belly)" opacity="0.85" />

      {/* scale hints — soft chevrons along the coils */}
      <g stroke="var(--vermilion)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
        <path d="M96 198 l10 8 l10 -8" /><path d="M124 198 l10 8 l10 -8" />
        <path d="M104 142 l8 6 l8 -6" /><path d="M128 142 l8 6 l8 -6" />
      </g>

      {/* rising neck connecting coil to head */}
      <path
        d="M104 110 q-6 -26 16 -26 q22 0 16 26 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round"
      />

      {/* HEAD */}
      <g data-role="head">
        {/* cobra hood */}
        <path d="M84 70 q-22 -8 -16 22 q4 18 24 16 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M156 70 q22 -8 16 22 q-4 18 -24 16 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />

        {/* head */}
        <ellipse cx="120" cy="74" rx="50" ry="44" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* hood scale hints */}
        <g stroke="var(--vermilion)" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.5">
          <path d="M78 80 q-8 4 -8 12" /><path d="M162 80 q8 4 8 12" />
        </g>

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M86 62 q12 -7 24 -1" /><path d="M154 62 q-12 -7 -24 -1" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="101" cy="74" rx="15" ry="17" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="139" cy="74" rx="15" ry="17" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="101" cy="78" r="7" fill="#181818" />
          <circle data-role="pupil-right" cx="139" cy="78" r="7" fill="#181818" />
          <circle cx="97" cy="72" r="2.6" fill="#fff" /><circle cx="135" cy="72" r="2.6" fill="#fff" />
        </g>

        {/* snout + nostrils */}
        <ellipse cx="120" cy="102" rx="20" ry="13" fill="var(--belly)" />
        <circle cx="113" cy="100" r="1.8" fill="var(--gold-edge)" /><circle cx="127" cy="100" r="1.8" fill="var(--gold-edge)" />

        {/* forked tongue */}
        <path d="M120 112 q0 14 0 20 m0 0 l-6 8 m6 -8 l6 8"
          fill="none" stroke="var(--vermilion)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* blush */}
        <ellipse cx="80" cy="92" rx="8" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="160" cy="92" rx="8" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
