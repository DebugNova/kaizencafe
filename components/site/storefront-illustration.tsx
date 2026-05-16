// Delicate line-drawing of a cafe storefront, inspired by the Kaizen poster.
export function StorefrontIllustration({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* ground line */}
      <line x1="20" y1="240" x2="380" y2="240" />

      {/* main facade */}
      <rect x="60" y="80" width="280" height="160" />

      {/* awning base */}
      <line x1="55" y1="80" x2="345" y2="80" />
      {/* scalloped awning */}
      <path d="M70 80 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0 q15 22 30 0" />
      <line x1="60" y1="80" x2="60" y2="105" />
      <line x1="340" y1="80" x2="340" y2="105" />

      {/* sign band */}
      <line x1="60" y1="115" x2="340" y2="115" />

      {/* hanging lights */}
      <line x1="120" y1="115" x2="120" y2="135" />
      <line x1="170" y1="115" x2="170" y2="140" />
      <line x1="220" y1="115" x2="220" y2="135" />
      <line x1="270" y1="115" x2="270" y2="140" />
      <path d="M115 135 q5 -8 10 0 q-2 8 -10 0" />
      <path d="M165 140 q5 -8 10 0 q-2 8 -10 0" />
      <path d="M215 135 q5 -8 10 0 q-2 8 -10 0" />
      <path d="M265 140 q5 -8 10 0 q-2 8 -10 0" />

      {/* counter */}
      <rect x="80" y="160" width="180" height="55" />
      <line x1="80" y1="175" x2="260" y2="175" />
      {/* stools */}
      <line x1="105" y1="215" x2="105" y2="235" />
      <line x1="100" y1="215" x2="110" y2="215" />
      <line x1="155" y1="215" x2="155" y2="235" />
      <line x1="150" y1="215" x2="160" y2="215" />
      <line x1="205" y1="215" x2="205" y2="235" />
      <line x1="200" y1="215" x2="210" y2="215" />

      {/* door */}
      <rect x="280" y="140" width="50" height="100" />
      <circle cx="320" cy="190" r="1.5" />

      {/* plant */}
      <path d="M40 240 q2 -20 8 -28 q-12 6 -10 18" />
      <path d="M48 240 q-1 -22 6 -30 q4 12 -2 22" />
    </svg>
  )
}
