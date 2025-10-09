"use client"

export function CircuitBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.03]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="50" x2="80" y2="50" stroke="#D4AF37" strokeWidth="2" />
            <line x1="120" y1="50" x2="200" y2="50" stroke="#D4AF37" strokeWidth="2" />
            <line x1="0" y1="150" x2="60" y2="150" stroke="#D4AF37" strokeWidth="2" />
            <line x1="140" y1="150" x2="200" y2="150" stroke="#D4AF37" strokeWidth="2" />

            {/* Vertical lines */}
            <line x1="50" y1="0" x2="50" y2="80" stroke="#D4AF37" strokeWidth="2" />
            <line x1="50" y1="120" x2="50" y2="200" stroke="#D4AF37" strokeWidth="2" />
            <line x1="150" y1="0" x2="150" y2="60" stroke="#D4AF37" strokeWidth="2" />
            <line x1="150" y1="140" x2="150" y2="200" stroke="#D4AF37" strokeWidth="2" />

            {/* Diagonal connections */}
            <line x1="80" y1="50" x2="100" y2="30" stroke="#D4AF37" strokeWidth="2" />
            <line x1="100" y1="30" x2="120" y2="50" stroke="#D4AF37" strokeWidth="2" />

            {/* Connection points */}
            <circle cx="50" cy="50" r="4" fill="#8B2635" />
            <circle cx="150" cy="50" r="4" fill="#8B2635" />
            <circle cx="50" cy="150" r="4" fill="#8B2635" />
            <circle cx="150" cy="150" r="4" fill="#8B2635" />
            <circle cx="100" cy="30" r="3" fill="#D4AF37" />
            <circle cx="100" cy="170" r="3" fill="#D4AF37" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  )
}
