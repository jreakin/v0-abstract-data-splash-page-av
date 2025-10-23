"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface Platform {
  name: string
  founded: number
  codeQuality: number
  techStack: string
  aiCapability: "none" | "basic" | "advanced"
  security: "poor" | "fair" | "good" | "excellent"
  documentation: "none" | "limited" | "good" | "excellent"
  openSource: boolean
  modernStack: boolean
  description: string
}

const platforms: Platform[] = [
  {
    name: "Abstract Data VEP",
    founded: 2019,
    codeQuality: 9,
    techStack: "2024 (Modern)",
    aiCapability: "advanced",
    security: "excellent",
    documentation: "excellent",
    openSource: true,
    modernStack: true,
    description: "Modern data engineering platform with AI-powered validation and field mapping",
  },
  {
    name: "GOP Data Center",
    founded: 1999,
    codeQuality: 3,
    techStack: "1999 (Legacy)",
    aiCapability: "none",
    security: "fair",
    documentation: "limited",
    openSource: false,
    modernStack: false,
    description: "25-year-old VoterVault platform with outdated technology and 2+ year old data",
  },
  {
    name: "L2 Data",
    founded: 1974,
    codeQuality: 7,
    techStack: "2012 (Aging)",
    aiCapability: "basic",
    security: "good",
    documentation: "good",
    openSource: false,
    modernStack: false,
    description: "Industry standard with 213M records but batch updates only 3-8x/year",
  },
  {
    name: "i360",
    founded: 2010,
    codeQuality: 8,
    techStack: "2015 (Dated)",
    aiCapability: "advanced",
    security: "good",
    documentation: "limited",
    openSource: false,
    modernStack: false,
    description: "Koch-funded platform with sophisticated ML but proprietary and expensive",
  },
  {
    name: "Campaign Nucleus",
    founded: 2023,
    codeQuality: 5,
    techStack: "2020 (Mixed)",
    aiCapability: "basic",
    security: "fair",
    documentation: "limited",
    openSource: false,
    modernStack: false,
    description: "Brad Parscale's platform with AI marketing hype but limited technical substance",
  },
  {
    name: "Aristotle",
    founded: 1983,
    codeQuality: 7,
    techStack: "2005 (Legacy)",
    aiCapability: "none",
    security: "excellent",
    documentation: "good",
    openSource: false,
    modernStack: false,
    description: "40+ years old with good API docs but outdated C# .NET foundation",
  },
  {
    name: "Campaign Sidekick",
    founded: 2015,
    codeQuality: 2,
    techStack: "2015 (Outdated)",
    aiCapability: "none",
    security: "poor",
    documentation: "none",
    openSource: false,
    modernStack: false,
    description: "Catastrophic security breach in 2020 exposed credentials in public Git repository",
  },
  {
    name: "NationBuilder",
    founded: 2009,
    codeQuality: 6,
    techStack: "2009 (Ruby)",
    aiCapability: "none",
    security: "fair",
    documentation: "good",
    openSource: false,
    modernStack: false,
    description: "Ruby on Rails platform with privacy violations and outdated architecture",
  },
]

export function PlatformComparisonMatrix() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const getQualityColor = (quality: number) => {
    if (quality >= 8) return "#00d9ff"
    if (quality >= 6) return "#d4af37"
    if (quality >= 4) return "#ff9500"
    return "#8b2635"
  }

  const getAIBadge = (capability: Platform["aiCapability"]) => {
    switch (capability) {
      case "advanced":
        return <CheckCircle2 className="w-5 h-5 text-[#00d9ff]" />
      case "basic":
        return <AlertCircle className="w-5 h-5 text-[#d4af37]" />
      default:
        return <XCircle className="w-5 h-5 text-[#8b2635]" />
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#d4af37]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Platform Comparison Matrix
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive analysis of Abstract Data versus major Republican campaign platforms.
            <br />
            <span className="text-[#00d9ff]">Click any platform for detailed information.</span>
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, z: 50 }}
              onClick={() => setSelectedPlatform(platform)}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at center, ${getQualityColor(platform.codeQuality)}40, transparent)`,
                }}
              />

              {/* Card */}
              <div className="relative glass-morph p-6 rounded-lg border border-white/10 group-hover:border-white/30 transition-all h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-500">Founded {platform.founded}</p>
                  </div>
                  <div
                    className="text-3xl font-bold"
                    style={{
                      color: getQualityColor(platform.codeQuality),
                      textShadow: `0 0 10px ${getQualityColor(platform.codeQuality)}`,
                    }}
                  >
                    {platform.codeQuality}/10
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Tech Stack</span>
                  <p className="text-sm text-gray-300 mt-1">{platform.techStack}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    {getAIBadge(platform.aiCapability)}
                    <span className="text-xs text-gray-400">AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.modernStack ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00d9ff]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#8b2635]" />
                    )}
                    <span className="text-xs text-gray-400">Modern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.openSource ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00d9ff]" />
                    ) : (
                      <XCircle className="w-5 h-5 text-[#8b2635]" />
                    )}
                    <span className="text-xs text-gray-400">Open</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {platform.security === "excellent" || platform.security === "good" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00d9ff]" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-[#d4af37]" />
                    )}
                    <span className="text-xs text-gray-400">Security</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 line-clamp-3">{platform.description}</p>

                {/* Click Indicator */}
                <div className="mt-4 text-xs text-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedPlatform && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPlatform(null)}
          >
            <motion.div
              className="glass-morph p-8 rounded-lg max-w-2xl w-full border border-white/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3
                className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#d4af37]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {selectedPlatform.name}
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Founded:</strong> {selectedPlatform.founded}
                </p>
                <p>
                  <strong>Code Quality:</strong> {selectedPlatform.codeQuality}/10
                </p>
                <p>
                  <strong>Tech Stack:</strong> {selectedPlatform.techStack}
                </p>
                <p>
                  <strong>AI Capability:</strong> {selectedPlatform.aiCapability}
                </p>
                <p>
                  <strong>Security:</strong> {selectedPlatform.security}
                </p>
                <p>
                  <strong>Documentation:</strong> {selectedPlatform.documentation}
                </p>
                <p className="pt-4">{selectedPlatform.description}</p>
              </div>
              <button
                className="mt-6 px-6 py-2 bg-[#00d9ff] text-black font-semibold rounded hover:bg-[#00b8d4] transition-colors"
                onClick={() => setSelectedPlatform(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
