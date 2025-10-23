"use client"

export function HUDAbstractDataCard() {
  return (
    <div className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 border border-green-400/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-mono">OUR SYSTEM</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-4 font-[family-name:var(--font-orbitron)]">
            ABSTRACT DATA VEP
          </h2>
        </div>

        {/* Main card */}
        <div className="relative group">
          {/* Holographic border with green accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-cyan-500/20 to-transparent border-2 border-green-400/60 backdrop-blur-md shadow-[0_0_50px_rgba(34,197,94,0.3)]" />

          {/* Animated corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-400" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-green-400" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-green-400" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-400" />

          <div className="relative p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)]">
                  ABSTRACT DATA VEP
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-400 font-mono">EST. 2019</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400 font-mono">6 YEARS OLD</span>
                </div>
              </div>

              {/* Quality indicator */}
              <div className="flex flex-col items-end">
                <div className="text-5xl font-bold font-mono text-green-400">9.0</div>
                <div className="text-xs text-gray-400 font-mono">QUALITY</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-mono">OPTIMAL</span>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="mb-6 p-4 bg-black/40 border border-green-400/30">
              <div className="text-xs text-green-400 font-mono mb-2">TECH STACK</div>
              <div className="text-sm text-gray-300">
                Modern 2024 stack: Advanced monorepo architecture, high-performance data processing, AI-powered
                validation, cloud-native infrastructure
              </div>
            </div>

            {/* Key advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { label: "CODE QUALITY", value: "Top 5% Globally", status: "VERIFIED" },
                { label: "PROCESSING SPEED", value: "30-50x Faster", status: "MEASURED" },
                { label: "AI ACCURACY", value: "99% Match Rate", status: "VALIDATED" },
                { label: "TEST COVERAGE", value: "78% Coverage", status: "ACTIVE" },
              ].map((metric, i) => (
                <div key={i} className="p-3 bg-green-500/5 border border-green-400/20">
                  <div className="text-xs text-green-400 font-mono mb-1">{metric.label}</div>
                  <div className="text-lg font-bold text-white font-mono mb-1">{metric.value}</div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-400 rounded-full" />
                    <span className="text-green-400 text-xs font-mono">{metric.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical capabilities */}
            <div className="space-y-3">
              <div className="text-xs text-green-400 font-mono mb-3">TECHNICAL CAPABILITIES</div>
              {[
                "AI-powered 3-tier validation cascade (Rule-based → Agent Model → AI Graph)",
                "Automatic vendor format recognition across dozens of data sources",
                "High-performance data processing with modern optimization",
                "Comprehensive test coverage with CI/CD automation",
                "Cloud-native architecture with horizontal scaling",
                "Real-time processing with sub-second response times",
                "Advanced address parsing with multiple validation libraries",
                "Senior/Staff Engineer level code quality and architecture",
              ].map((capability, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0 mt-1.5" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent h-full animate-scan-slow" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-slow {
          animation: scan-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
