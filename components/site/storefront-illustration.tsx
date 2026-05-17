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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="geometricPrecision"
    >
      <g className="draw-on-load">
        {/* ── TOP CORNICE / ROOF OVERHANG ─────────────────────────── */}
        <path d="M 18 42 H 482 V 54 H 470 V 62 H 30 V 54 H 18 Z" />
        {/* tiny ticks underneath the cornice */}
        <line x1="60" y1="58" x2="60" y2="62" />
        <line x1="120" y1="58" x2="120" y2="62" />
        <line x1="180" y1="58" x2="180" y2="62" />
        <line x1="240" y1="58" x2="240" y2="62" />
        <line x1="300" y1="58" x2="300" y2="62" />
        <line x1="360" y1="58" x2="360" y2="62" />
        <line x1="420" y1="58" x2="420" y2="62" />

        {/* ── SIGN BAND (full width) ──────────────────────────────── */}
        <path d="M 30 62 V 84 H 470 V 62" />
        <line x1="30" y1="84" x2="470" y2="84" />

        {/* ── FACADE OUTER WALLS + DIVIDER ────────────────────────── */}
        <line x1="30" y1="84" x2="30" y2="290" />
        <line x1="470" y1="84" x2="470" y2="290" />
        <line x1="352" y1="84" x2="352" y2="290" />

        {/* ╔══ LEFT (CAFE) SECTION ════════════════════════════════╗ */}

        {/* inner trim line below sign band */}
        <line x1="42" y1="94" x2="340" y2="94" />

        {/* awning header rail + side walls */}
        <path d="M 42 132 V 104 H 342 V 132" />

        {/* awning vertical stripes */}
        <line x1="68" y1="104" x2="68" y2="132" />
        <line x1="94" y1="104" x2="94" y2="132" />
        <line x1="120" y1="104" x2="120" y2="132" />
        <line x1="146" y1="104" x2="146" y2="132" />
        <line x1="172" y1="104" x2="172" y2="132" />
        <line x1="198" y1="104" x2="198" y2="132" />
        <line x1="224" y1="104" x2="224" y2="132" />
        <line x1="250" y1="104" x2="250" y2="132" />
        <line x1="276" y1="104" x2="276" y2="132" />
        <line x1="302" y1="104" x2="302" y2="132" />
        <line x1="318" y1="104" x2="318" y2="132" />

        {/* scalloped bottom edge of awning — deep rounded drips */}
        <path
          d="M 42 132
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0
             a 12.5 12.5 0 0 0 25 0 a 12.5 12.5 0 0 0 25 0"
        />

        {/* ── 3 TULIP PENDANT LIGHTS ──────────────────────────────── */}
        {/* pendant 1 */}
        <line x1="120" y1="132" x2="120" y2="150" />
        <circle cx="120" cy="151" r="1.4" />
        <path
          d="M 108 154
             C 108 168 112 176 120 178
             C 128 176 132 168 132 154
             C 128 152 112 152 108 154 Z"
        />
        <path d="M 112 162 Q 120 165 128 162" />
        <path d="M 114 170 Q 120 173 126 170" />
        <line x1="120" y1="178" x2="120" y2="182" />

        {/* pendant 2 (center, slightly lower) */}
        <line x1="192" y1="132" x2="192" y2="154" />
        <circle cx="192" cy="155" r="1.4" />
        <path
          d="M 180 158
             C 180 172 184 180 192 182
             C 200 180 204 172 204 158
             C 200 156 184 156 180 158 Z"
        />
        <path d="M 184 166 Q 192 169 200 166" />
        <path d="M 186 174 Q 192 177 198 174" />
        <line x1="192" y1="182" x2="192" y2="186" />

        {/* pendant 3 */}
        <line x1="264" y1="132" x2="264" y2="150" />
        <circle cx="264" cy="151" r="1.4" />
        <path
          d="M 252 154
             C 252 168 256 176 264 178
             C 272 176 276 168 276 154
             C 272 152 256 152 252 154 Z"
        />
        <path d="M 256 162 Q 264 165 272 162" />
        <path d="M 258 170 Q 264 173 270 170" />
        <line x1="264" y1="178" x2="264" y2="182" />

        {/* ── DISPLAY WINDOW + COUNTER ───────────────────────────── */}
        <rect x="44" y="194" width="296" height="72" />

        {/* counter shelf line where items sit */}
        <line x1="44" y1="226" x2="340" y2="226" />

        {/* ── 3 CAKE-DOME DISPLAY ITEMS ──────────────────────────── */}
        {/* item 1 */}
        <path d="M 90 226 C 90 210 130 210 130 226" />
        <line x1="84" y1="226" x2="136" y2="226" />
        <line x1="110" y1="208" x2="110" y2="203" />
        <circle cx="110" cy="201" r="1.8" />
        <line x1="98" y1="226" x2="98" y2="232" />
        <line x1="122" y1="226" x2="122" y2="232" />

        {/* item 2 (center) */}
        <path d="M 178 226 C 178 210 218 210 218 226" />
        <line x1="172" y1="226" x2="224" y2="226" />
        <line x1="198" y1="208" x2="198" y2="203" />
        <circle cx="198" cy="201" r="1.8" />
        <line x1="186" y1="226" x2="186" y2="232" />
        <line x1="210" y1="226" x2="210" y2="232" />

        {/* item 3 */}
        <path d="M 266 226 C 266 210 306 210 306 226" />
        <line x1="260" y1="226" x2="312" y2="226" />
        <line x1="286" y1="208" x2="286" y2="203" />
        <circle cx="286" cy="201" r="1.8" />
        <line x1="274" y1="226" x2="274" y2="232" />
        <line x1="298" y1="226" x2="298" y2="232" />

        {/* lower window sill */}
        <line x1="44" y1="266" x2="340" y2="266" />
        {/* lower panel below window (counter face) */}
        <line x1="44" y1="278" x2="340" y2="278" />

        {/* ╔══ RIGHT (DOOR) SECTION ═══════════════════════════════╗ */}

        {/* door inner frame */}
        <rect x="364" y="98" width="94" height="190" />

        {/* upper transom window */}
        <line x1="364" y1="140" x2="458" y2="140" />
        <line x1="370" y1="102" x2="370" y2="140" />
        <line x1="452" y1="102" x2="452" y2="140" />

        {/* door inner stiles */}
        <line x1="370" y1="140" x2="370" y2="284" />
        <line x1="452" y1="140" x2="452" y2="284" />

        {/* ── UMBRELLA on door (clearly visible) ─────────────────── */}
        {/* canopy — dome with scalloped underside */}
        <path d="M 396 168 C 396 154 426 154 426 168" />
        <path d="M 396 168 q 5 6 10 0 q 5 6 10 0 q 5 6 10 0" />
        {/* small knob at top of canopy */}
        <circle cx="411" cy="153" r="1.2" />
        {/* shaft */}
        <line x1="411" y1="168" x2="411" y2="200" />
        {/* J-hook handle */}
        <path d="M 411 200 q 0 5 -5 5 q -4 0 -4 -4" />

        {/* doorknob */}
        <circle cx="376" cy="220" r="2.6" />

        {/* ── BASE / FOUNDATION + STEP ────────────────────────────── */}
        <path d="M 14 290 H 486 V 302 H 14 Z" />
        <path d="M 24 302 V 308 H 476 V 302" />
        {/* foundation brick lines */}
        <line x1="100" y1="290" x2="100" y2="302" />
        <line x1="200" y1="290" x2="200" y2="302" />
        <line x1="300" y1="290" x2="300" y2="302" />
        <line x1="400" y1="290" x2="400" y2="302" />
      </g>

      {/* Twinkling filaments inside the pendant lights */}
      <g fill="oklch(0.85 0.13 80)" stroke="none">
        <circle cx="120" cy="167" r="1.6" className="twinkle" style={{ animationDelay: "0s" }} />
        <circle cx="192" cy="171" r="1.6" className="twinkle" style={{ animationDelay: "0.7s" }} />
        <circle cx="264" cy="167" r="1.6" className="twinkle" style={{ animationDelay: "1.4s" }} />
      </g>
    </svg>
  )
}
