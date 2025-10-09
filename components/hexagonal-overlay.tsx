"use client"

export function HexagonalOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-pattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <path
              d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
              fill="none"
              stroke="rgba(0, 217, 255, 0.15)"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="hex-pattern-gold" x="50" y="43.5" width="100" height="87" patternUnits="userSpaceOnUse">
            <path
              d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
              fill="none"
              stroke="rgba(212, 175, 55, 0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" className="animate-hexagon-pulse" />
        <rect
          width="100%"
          height="100%"
          fill="url(#hex-pattern-gold)"
          className="animate-hexagon-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>
    </div>
  )
}
