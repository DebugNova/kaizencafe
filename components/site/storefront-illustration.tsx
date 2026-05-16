// Hand-drawn line illustration of the Kaizen storefront — modeled after the reference sketch.
export function StorefrontIllustration({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 500 340"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="draw-on-load">
        {/* ── TOP CORNICE / OVERHANG ─────────────────────────────── */}
        <line x1="22" y1="42" x2="478" y2="42" />
        <line x1="22" y1="42" x2="22" y2="52" />
        <line x1="478" y1="42" x2="478" y2="52" />
        <line x1="22" y1="52" x2="32" y2="52" />
        <line x1="468" y1="52" x2="478" y2="52" />
        <line x1="32" y1="52" x2="32" y2="60" />
        <line x1="468" y1="52" x2="468" y2="60" />
        <line x1="32" y1="60" x2="468" y2="60" />

        {/* ── HEADER BAND (sign area, full width) ────────────────── */}
        <line x1="32" y1="60" x2="32" y2="82" />
        <line x1="468" y1="60" x2="468" y2="82" />
        <line x1="32" y1="82" x2="468" y2="82" />

        {/* ── MAIN FACADE OUTER WALLS ────────────────────────────── */}
        <line x1="32" y1="82" x2="32" y2="288" />
        <line x1="468" y1="82" x2="468" y2="288" />

        {/* ── DIVIDER BETWEEN CAFE & DOOR SECTIONS ───────────────── */}
        <line x1="350" y1="82" x2="350" y2="288" />

        {/* ╔══ LEFT (CAFE) SECTION ══════════════════════════════╗ */}

        {/* inner top trim line under sign band */}
        <line x1="44" y1="92" x2="338" y2="92" />

        {/* awning top rail */}
        <line x1="44" y1="104" x2="340" y2="104" />
        <line x1="44" y1="104" x2="44" y2="130" />
        <line x1="340" y1="104" x2="340" y2="130" />

        {/* awning vertical stripes */}
        <line x1="70" y1="104" x2="70" y2="130" />
        <line x1="96" y1="104" x2="96" y2="130" />
        <line x1="122" y1="104" x2="122" y2="130" />
        <line x1="148" y1="104" x2="148" y2="130" />
        <line x1="174" y1="104" x2="174" y2="130" />
        <line x1="200" y1="104" x2="200" y2="130" />
        <line x1="226" y1="104" x2="226" y2="130" />
        <line x1="252" y1="104" x2="252" y2="130" />
        <line x1="278" y1="104" x2="278" y2="130" />
        <line x1="304" y1="104" x2="304" y2="130" />

        {/* scalloped bottom edge of awning */}
        <path
          d="M 44 130
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0
             q 13 16 26 0"
        />

        {/* ── 3 PENDANT TULIP LIGHTS ──────────────────────────── */}
        {/* light 1 */}
        <line x1="120" y1="130" x2="120" y2="150" />
        <path d="M 110 150 q -1 11 10 18 q 11 -7 10 -18 q -10 -4 -20 0 Z" />
        <line x1="116" y1="153" x2="116" y2="165" />
        <line x1="124" y1="153" x2="124" y2="165" />
        <line x1="120" y1="168" x2="120" y2="173" />

        {/* light 2 (center) */}
        <line x1="192" y1="130" x2="192" y2="154" />
        <path d="M 182 154 q -1 11 10 18 q 11 -7 10 -18 q -10 -4 -20 0 Z" />
        <line x1="188" y1="157" x2="188" y2="169" />
        <line x1="196" y1="157" x2="196" y2="169" />
        <line x1="192" y1="172" x2="192" y2="177" />

        {/* light 3 */}
        <line x1="264" y1="130" x2="264" y2="150" />
        <path d="M 254 150 q -1 11 10 18 q 11 -7 10 -18 q -10 -4 -20 0 Z" />
        <line x1="260" y1="153" x2="260" y2="165" />
        <line x1="268" y1="153" x2="268" y2="165" />
        <line x1="264" y1="168" x2="264" y2="173" />

        {/* ── DISPLAY WINDOW + COUNTER ────────────────────────── */}
        <rect x="46" y="192" width="290" height="70" />

        {/* shelf line where items sit */}
        <line x1="46" y1="222" x2="336" y2="222" />

        {/* 3 dessert / cake stands on display */}
        {/* item 1 */}
        <path d="M 95 222 q 0 -13 14 -13 q 14 0 14 13" />
        <line x1="88" y1="222" x2="130" y2="222" />
        <circle cx="109" cy="207" r="1.6" />

        {/* item 2 */}
        <path d="M 184 222 q 0 -13 14 -13 q 14 0 14 13" />
        <line x1="177" y1="222" x2="219" y2="222" />
        <circle cx="198" cy="207" r="1.6" />

        {/* item 3 */}
        <path d="M 273 222 q 0 -13 14 -13 q 14 0 14 13" />
        <line x1="266" y1="222" x2="308" y2="222" />
        <circle cx="287" cy="207" r="1.6" />

        {/* lower window sill / inner frame */}
        <line x1="46" y1="262" x2="336" y2="262" />

        {/* ╔══ RIGHT (DOOR) SECTION ═════════════════════════════╗ */}

        {/* door inner frame */}
        <rect x="362" y="96" width="94" height="192" />

        {/* upper transom window */}
        <line x1="362" y1="138" x2="456" y2="138" />
        <line x1="368" y1="100" x2="368" y2="138" />
        <line x1="450" y1="100" x2="450" y2="138" />

        {/* door panel inner outline */}
        <line x1="368" y1="138" x2="368" y2="284" />
        <line x1="450" y1="138" x2="450" y2="284" />

        {/* doorknob */}
        <circle cx="376" cy="210" r="2.6" />

        {/* ── BASE / PLATFORM ─────────────────────────────────── */}
        <line x1="16" y1="288" x2="484" y2="288" />
        <line x1="16" y1="288" x2="16" y2="300" />
        <line x1="484" y1="288" x2="484" y2="300" />
        <line x1="16" y1="300" x2="484" y2="300" />

        {/* inner step ledge */}
        <line x1="26" y1="306" x2="474" y2="306" />
        <line x1="26" y1="300" x2="26" y2="306" />
        <line x1="474" y1="300" x2="474" y2="306" />
      </g>

      {/* Twinkling filaments inside the pendant lights */}
      <g fill="oklch(0.85 0.13 80)" stroke="none">
        <circle cx="120" cy="161" r="1.8" className="twinkle" style={{ animationDelay: "0s" }} />
        <circle cx="192" cy="165" r="1.8" className="twinkle" style={{ animationDelay: "0.7s" }} />
        <circle cx="264" cy="161" r="1.8" className="twinkle" style={{ animationDelay: "1.4s" }} />
      </g>
    </svg>
  )
}
