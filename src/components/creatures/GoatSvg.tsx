/**
 * Goat creature — cute Festive-Gold mascot. Sweet and a touch quirky: two curved horns,
 * floppy ears, a gentle muzzle, a little chin beard, a round fluffy body and small hooves.
 * Conventions shared by all creatures: 240x240 viewBox, palette-var colors, <g data-role="head">
 * wraps the head, eyes group uses class "d-eyes" (blink), pupils carry data-role for
 * cursor-tracking.
 */
export function GoatSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      style={{ width: "min(420px, 80%)", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A cute goat"
    >
      {/* short tail */}
      <path d="M176 188 q22 -2 22 -20 q-2 -12 -14 -12 q8 6 6 16 q-2 12 -16 12 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />

      {/* round fluffy body — scalloped wool edge */}
      <path
        d="M120 224
           q-22 4 -34 -8 q-16 2 -22 -14 q-14 -4 -8 -22 q-10 -14 6 -24
           q-2 -18 18 -20 q8 -14 26 -10 q14 -10 30 -2 q18 -6 26 10
           q20 0 18 22 q14 12 2 26 q6 18 -12 22 q-8 16 -26 12 q-16 8 -32 0 z"
        fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round"
      />
      <ellipse cx="120" cy="192" rx="34" ry="26" fill="var(--belly)" opacity="0.85" />

      {/* small hooves */}
      <g fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round">
        <rect x="92" y="222" width="16" height="14" rx="5" />
        <rect x="132" y="222" width="16" height="14" rx="5" />
      </g>

      {/* HEAD */}
      <g data-role="head">
        {/* curved horns */}
        <path d="M92 46 q-14 -22 -34 -24 q-12 0 -10 12 q2 8 12 8 q-6 -10 4 -12 q14 -2 20 18 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M148 46 q14 -22 34 -24 q12 0 10 12 q-2 8 -12 8 q6 -10 -4 -12 q-14 -2 -20 18 z"
          fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        {/* horn ridges */}
        <g stroke="var(--gold-edge)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6">
          <path d="M78 40 q-8 -6 -14 -8" /><path d="M70 50 q-8 -4 -12 -8" />
          <path d="M162 40 q8 -6 14 -8" /><path d="M170 50 q8 -4 12 -8" />
        </g>

        {/* floppy ears */}
        <path d="M70 78 q-34 -2 -40 22 q22 8 40 -6 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M170 78 q34 -2 40 22 q-22 8 -40 -6 z" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" strokeLinejoin="round" />
        <path d="M64 84 q-22 0 -28 16 q14 4 28 -6 z" fill="var(--vermilion)" opacity="0.75" />
        <path d="M176 84 q22 0 28 16 q-14 4 -28 -6 z" fill="var(--vermilion)" opacity="0.75" />

        {/* head */}
        <ellipse cx="120" cy="92" rx="52" ry="46" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />

        {/* brows */}
        <g stroke="var(--gold-edge)" strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M84 80 q12 -7 24 -1" /><path d="M156 80 q-12 -7 -24 -1" />
        </g>

        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="100" cy="92" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="140" cy="92" rx="16" ry="18" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="100" cy="96" r="7.5" fill="#181818" />
          <circle data-role="pupil-right" cx="140" cy="96" r="7.5" fill="#181818" />
          <circle cx="96" cy="90" r="2.8" fill="#fff" /><circle cx="136" cy="90" r="2.8" fill="#fff" />
        </g>

        {/* muzzle */}
        <ellipse cx="120" cy="120" rx="26" ry="20" fill="var(--belly)" />
        <circle cx="112" cy="116" r="2.2" fill="var(--gold-edge)" /><circle cx="128" cy="116" r="2.2" fill="var(--gold-edge)" />
        <path d="M120 122 v6 M120 128 q-7 6 -14 3 M120 128 q7 6 14 3"
          fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* chin beard */}
        <path d="M108 138 q12 26 24 0 q-2 22 -12 30 q-10 -8 -12 -30 z"
          fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" strokeLinejoin="round" />

        {/* blush */}
        <ellipse cx="80" cy="110" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
        <ellipse cx="160" cy="110" rx="9" ry="5" fill="var(--vermilion)" opacity="0.3" />
      </g>
    </svg>
  );
}
