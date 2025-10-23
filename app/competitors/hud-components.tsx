"use client"

interface HUDZoneProps {
  title: string
  subtitle: string
  icon: string
  color: string
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  delay: number
  stats: { label: string; value: string }[]
  isHovered: boolean
}

export function HUDZone({
  title,
  subtitle,
  icon,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
  delay,
  stats,
  isHovered,
}: HUDZoneProps) {
  return (
    <div
      className="relative group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative p-8 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105"
        style={{
          borderColor: color,
          backgroundColor: `${color}10`,
          boxShadow: isHovered ? `0 0 30px ${color}80` : `0 0 15px ${color}40`,
        }}
      >
        <div className="hud-corner-bracket hud-corner-tl" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-tr" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-bl" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-br" style={{ borderColor: color }} />

        <div className="absolute top-4 right-4">
          <svg width="40" height="40" className="animate-spin-slow">
            <circle cx="20" cy="20" r="18" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="30 80"
              opacity="0.8"
            />
            <circle cx="20" cy="20" r="3" fill={color} opacity="0.8" />
          </svg>
        </div>

        <div className="text-center relative z-10">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold mb-2 tracking-wider" style={{ color, textShadow: `0 0 20px ${color}` }}>
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-mono">{subtitle}</p>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center items-center animate-fade-in z-20">
            <div className="text-center space-y-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between items-center gap-8">
                  <span className="text-gray-400 text-sm font-mono">{stat.label}:</span>
                  <span className="font-bold text-lg" style={{ color, textShadow: `0 0 10px ${color}` }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-500 font-mono">Click to view details</div>
          </div>
        )}
      </div>
    </div>
  )
}

interface HUDModalProps {
  topic: string
  onClose: () => void
  content: {
    title: string
    sections: Array<{
      heading: string
      content: string
    }>
  }
}

export function HUDModal({ topic, onClose, content }: HUDModalProps) {
  const getColorForTopic = (topic: string) => {
    const colors: Record<string, string> = {
      "code-quality": "#00d9ff",
      "tech-stack": "#ff00ff",
      performance: "#ff6600",
      security: "#ff0000",
      ai: "#00ff00",
      failures: "#ffff00",
    }
    return colors[topic] || "#00d9ff"
  }

  const color = getColorForTopic(topic)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border-2 rounded-lg animate-slide-in-up"
        style={{ borderColor: color, boxShadow: `0 0 50px ${color}80` }}
      >
        <div className="hud-corner-bracket hud-corner-tl" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-tr" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-bl" style={{ borderColor: color }} />
        <div className="hud-corner-bracket hud-corner-br" style={{ borderColor: color }} />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-110 hover:rotate-90 group"
          style={{
            borderColor: color,
            backgroundColor: `${color}20`,
            boxShadow: `0 0 20px ${color}60`,
          }}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300">
            <path d="M18 6L6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <h2
                className="text-3xl md:text-4xl font-bold tracking-wider"
                style={{ color, textShadow: `0 0 30px ${color}` }}
              >
                {content.title}
              </h2>
            </div>
            <div
              className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
              style={{ color }}
            />
          </div>

          <div className="space-y-8">
            {content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">{section.heading}</h3>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line font-mono text-sm md:text-base">
                  {section.content}
                </div>
                {idx < content.sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
          style={{ color }}
        />
      </div>
    </div>
  )
}

export function LoadingSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-4xl h-[600px] bg-black/95 border-2 border-cyan-500 rounded-lg p-12">
        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-cyan-500/20 rounded w-3/4" />
          <div className="h-px bg-cyan-500/30" />
          <div className="space-y-4">
            <div className="h-4 bg-cyan-500/20 rounded w-full" />
            <div className="h-4 bg-cyan-500/20 rounded w-5/6" />
            <div className="h-4 bg-cyan-500/20 rounded w-4/6" />
          </div>
        </div>
      </div>
    </div>
  )
}
