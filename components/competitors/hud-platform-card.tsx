"use client"

import { useState } from "react"
import { CheckCircle2, XCircle } from "lucide-react"

interface Platform {
  name: string
  quality: number
  founded: number
  stack: string
  issues: string[]
  advantages?: string[]
}

export function HUDPlatformCard({ platform }: { platform: Platform }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const age = 2025 - platform.founded
  const qualityColor = platform.quality >= 8 ? "green" : platform.quality >= 6 ? "yellow" : "red"

  return (
    <div className="relative group cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      {/* Holographic border */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-400/40 backdrop-blur-md transform transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]" />

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 font-[family-name:var(--font-orbitron)]">
              {platform.name}
            </h3>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400 font-mono">EST. {platform.founded}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 font-mono">{age} YEARS OLD</span>
            </div>
          </div>

          {/* Quality indicator */}
          <div className="flex flex-col items-end">
            <div
              className={`text-3xl font-bold font-mono ${
                qualityColor === "green"
                  ? "text-green-400"
                  : qualityColor === "yellow"
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {platform.quality.toFixed(1)}
            </div>
            <div className="text-xs text-gray-400 font-mono">QUALITY</div>
          </div>
        </div>

        {/* Tech stack bar */}
        <div className="mb-4 p-3 bg-black/40 border border-cyan-400/20">
          <div className="text-xs text-cyan-400 font-mono mb-1">TECH STACK</div>
          <div className="text-sm text-gray-300">{platform.stack}</div>
        </div>

        {/* Issues */}
        <div className="space-y-2">
          <div className="text-xs text-red-400 font-mono mb-2">CRITICAL ISSUES</div>
          {platform.issues.slice(0, isExpanded ? undefined : 3).map((issue, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{issue}</span>
            </div>
          ))}
        </div>

        {/* Advantages if any */}
        {platform.advantages && platform.advantages.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="text-xs text-green-400 font-mono mb-2">STRENGTHS</div>
            {platform.advantages.slice(0, isExpanded ? undefined : 2).map((adv, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{adv}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expand indicator */}
        <div className="mt-4 text-center">
          <span className="text-xs text-cyan-400 font-mono">{isExpanded ? "▲ COLLAPSE" : "▼ EXPAND ANALYSIS"}</span>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-full animate-scan-slow" />
      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan-slow {
          animation: scan-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
