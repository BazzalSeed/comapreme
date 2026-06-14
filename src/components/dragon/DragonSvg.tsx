interface DragonSvgProps {
  className?: string;
}

/**
 * Authentic serpentine Chinese dragon (Festive Gold), drawn per the design system:
 * flowing body, vermilion mane fins, stag antlers, catfish whiskers, four clawed legs,
 * flaming pearl — plus cute big eyes. Colors come from CSS variables so future signs
 * can re-skin by overriding tokens on a parent.
 *
 * Interactive parts are marked with data-role for DragonHero to drive (no global ids).
 */
export function DragonSvg({ className }: DragonSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 460 250"
      style={{ width: "100%", height: "auto", overflow: "visible", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A friendly Chinese dragon chasing a flaming pearl"
    >
      {/* flaming pearl */}
      <g className="d-pearl">
        <circle cx="52" cy="120" r="28" fill="var(--jade)" opacity="0.22" />
        <circle cx="52" cy="120" r="16" fill="var(--jade)" />
        <circle cx="46" cy="114" r="5" fill="#fff" opacity="0.85" />
      </g>

      {/* body: outline + fill + belly highlight */}
      <path
        d="M150 140 C200 88,255 100,288 142 C312 173,350 176,374 146 C392 124,408 132,418 152"
        fill="none" stroke="var(--gold-edge)" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M150 140 C200 88,255 100,288 142 C312 173,350 176,374 146 C392 124,408 132,418 152"
        fill="none" stroke="var(--gold)" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M150 146 C200 96,255 108,286 146"
        fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity="0.22"
      />

      {/* mane fins */}
      <g fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="2">
        <path d="M190 104 q-7 -22 6 -30 q9 12 9 28 z" />
        <path d="M222 98 q-5 -24 8 -32 q9 14 7 30 z" />
        <path d="M256 104 q-3 -24 11 -30 q7 14 3 30 z" />
        <path d="M300 150 q-6 -22 8 -28 q8 14 4 30 z" />
        <path d="M338 168 q-4 -22 10 -27 q7 14 2 29 z" />
        <path d="M372 150 q-5 -22 9 -27 q7 13 3 28 z" />
      </g>

      {/* legs + claws */}
      <g fill="none" stroke="var(--gold)" strokeWidth="11" strokeLinecap="round">
        <path d="M250 156 q-6 28 -20 40" />
        <path d="M356 172 q6 24 20 34" />
      </g>
      <g fill="none" stroke="var(--gold-edge)" strokeWidth="4" strokeLinecap="round">
        <path d="M230 196 l-9 9 m9 -9 l-1 13 m1 -13 l10 6" />
        <path d="M376 206 l-9 8 m9 -8 l1 13 m-1 -13 l11 5" />
      </g>

      {/* tail flame */}
      <path
        d="M418 152 q22 -14 30 -38 q0 22 -10 38 q18 -6 28 -22 q-6 26 -28 34 z"
        fill="var(--vermilion)" stroke="var(--gold-edge)" strokeWidth="3" strokeLinejoin="round"
      />

      {/* head */}
      <g data-role="head">
        {/* antlers */}
        <g fill="none" stroke="var(--jade)" strokeWidth="5" strokeLinecap="round">
          <path d="M104 104 q-10 -30 2 -46 q5 12 13 15 m-13 -15 q-2 -14 -12 -18" />
          <path d="M134 102 q8 -30 -4 -46 q-5 12 -13 15 m13 -15 q2 -14 12 -18" />
        </g>
        <ellipse cx="118" cy="138" rx="48" ry="41" fill="var(--gold)" stroke="var(--gold-edge)" strokeWidth="5" />
        <ellipse cx="80" cy="150" rx="26" ry="20" fill="var(--belly)" stroke="var(--gold-edge)" strokeWidth="4" />
        <circle cx="66" cy="146" r="3.2" fill="var(--gold-edge)" />
        <path d="M62 160 q14 10 30 4" fill="none" stroke="var(--gold-edge)" strokeWidth="3" strokeLinecap="round" />
        {/* whiskers */}
        <path className="d-whisk" d="M64 144 q-44 -8 -60 -34 q-6 -10 -20 -12" fill="none" stroke="var(--vermilion)" strokeWidth="4" strokeLinecap="round" />
        <path className="d-whisk2" d="M66 158 q-44 12 -66 4" fill="none" stroke="var(--vermilion)" strokeWidth="4" strokeLinecap="round" />
        {/* eyes */}
        <g className="d-eyes">
          <ellipse cx="108" cy="124" rx="15" ry="17" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <ellipse cx="136" cy="122" rx="13" ry="15" fill="#fff" stroke="var(--gold-edge)" strokeWidth="3.5" />
          <circle data-role="pupil-left" cx="106" cy="127" r="6.5" fill="#181818" />
          <circle data-role="pupil-right" cx="134" cy="125" r="6" fill="#181818" />
          <circle cx="103" cy="123" r="2.2" fill="#fff" />
          <circle cx="131" cy="121" r="2" fill="#fff" />
        </g>
        <ellipse cx="92" cy="150" rx="9" ry="5" fill="var(--vermilion)" opacity="0.35" />
      </g>
    </svg>
  );
}
