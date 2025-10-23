"use client"

export function HUDHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,217,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-cyan-400/50" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-400/50" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Targeting reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
          <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-ping" />
          <div className="absolute inset-4 border border-cyan-400/50 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-400/30" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-400/30" />
        </div>

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-mono">SYSTEM ANALYSIS ACTIVE</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">PLATFORM</span>
          <br />
          <span className="text-white">COMPARISON</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Deep technical analysis of GOP campaign technology platforms
        </p>

        {/* HUD stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "CODE QUALITY", value: "9.0/10", status: "OPTIMAL" },
            { label: "PLATFORMS ANALYZED", value: "10+", status: "COMPLETE" },
            { label: "TECH SUPERIORITY", value: "96.3%", status: "VERIFIED" },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              {/* Holographic panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-400/30 backdrop-blur-sm transform transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400" />

              <div className="relative p-6">
                <div className="text-cyan-400 text-xs font-mono mb-2">{stat.label}</div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">{stat.value}</div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">{stat.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
