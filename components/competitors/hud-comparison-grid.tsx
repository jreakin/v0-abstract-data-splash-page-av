"use client"

import { HUDPlatformCard } from "./hud-platform-card"

const platforms = [
  {
    name: "L2 Data",
    quality: 6.5,
    founded: 2007,
    stack: "Legacy PHP/MySQL (2004-2012 era)",
    issues: [
      "Outdated PHP codebase with minimal modern practices",
      "Monolithic architecture difficult to maintain",
      "Limited API capabilities and integration options",
      "Slow query performance on large datasets",
    ],
    advantages: ["Extensive historical data coverage", "Established relationships with data vendors"],
  },
  {
    name: "WinRed",
    quality: 5.5,
    founded: 2019,
    stack: "Ruby on Rails (2010s patterns)",
    issues: [
      "Payment processing issues and delays reported",
      "Limited customization options for campaigns",
      "High transaction fees compared to alternatives",
      "Vendor lock-in with limited export capabilities",
    ],
    advantages: ["Official RNC partnership", "Large donor network"],
  },
  {
    name: "Campaign Nucleus",
    quality: 5.0,
    founded: 2016,
    stack: "Mixed legacy stack",
    issues: [
      "Poor user experience and outdated interface",
      "Limited mobile optimization",
      "Slow performance with large contact lists",
      "Minimal automation capabilities",
      "Expensive pricing for small campaigns",
    ],
  },
  {
    name: "Aristotle",
    quality: 6.0,
    founded: 1983,
    stack: "Legacy systems (1980s-2000s)",
    issues: [
      "42-year-old codebase with accumulated technical debt",
      "Outdated data models and schemas",
      "Limited real-time capabilities",
      "Complex pricing structure",
      "Steep learning curve for new users",
    ],
    advantages: ["Decades of political data", "Compliance expertise"],
  },
  {
    name: "Campaign Sidekick",
    quality: 3.5,
    founded: 2018,
    stack: "Node.js with security issues",
    issues: [
      "CATASTROPHIC: Exposed entire Git repository publicly",
      "Leaked API keys, database credentials, and voter data",
      "Poor security practices throughout codebase",
      "Minimal testing and quality assurance",
      "Unreliable uptime and frequent outages",
    ],
  },
  {
    name: "DataTrust",
    quality: 6.5,
    founded: 2011,
    stack: "Enterprise Java (2000s patterns)",
    issues: [
      "Complex enterprise architecture with high overhead",
      "Slow deployment cycles",
      "Limited modern API features",
      "Expensive licensing and support costs",
    ],
    advantages: ["RNC official data repository", "Comprehensive voter file"],
  },
  {
    name: "GOP Data Center",
    quality: 5.5,
    founded: 2011,
    stack: "VoterVault (legacy .NET)",
    issues: [
      "Outdated .NET Framework (pre-.NET Core)",
      "Windows-only deployment limitations",
      "Slow query performance",
      "Limited cloud-native capabilities",
      "Expensive infrastructure requirements",
    ],
  },
  {
    name: "i360",
    quality: 6.0,
    founded: 2013,
    stack: "Mixed enterprise stack",
    issues: [
      "Koch Industries backing creates perception issues",
      "Expensive pricing tiers",
      "Limited customization options",
      "Slow data refresh cycles",
      "Complex integration requirements",
    ],
    advantages: ["Strong analytics capabilities", "Large data warehouse"],
  },
  {
    name: "Vottiv",
    quality: 5.0,
    founded: 2019,
    stack: "Modern but poorly implemented",
    issues: [
      "Buggy interface with frequent crashes",
      "Poor mobile experience",
      "Limited feature set compared to competitors",
      "Inconsistent data quality",
      "Minimal documentation and support",
    ],
  },
  {
    name: "NationBuilder",
    quality: 6.5,
    founded: 2009,
    stack: "Ruby on Rails (2010s)",
    issues: [
      "Not GOP-specific, generic political platform",
      "Limited voter file integration",
      "Expensive for advanced features",
      "Slow performance with large databases",
    ],
    advantages: ["Good website builder", "Active community"],
  },
]

export function HUDComparisonGrid() {
  const avgQuality = platforms.reduce((sum, p) => sum + p.quality, 0) / platforms.length

  return (
    <div className="relative py-24 px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-mono">COMPETITIVE ANALYSIS</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-4 font-[family-name:var(--font-orbitron)]">
            PLATFORM ASSESSMENT
          </h2>

          <p className="text-xl text-gray-400 mb-8">Comprehensive technical evaluation of GOP campaign technology</p>

          {/* Average quality indicator */}
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-black/40 border border-cyan-400/30 backdrop-blur-sm">
            <span className="text-gray-400 font-mono text-sm">AVERAGE COMPETITOR QUALITY:</span>
            <span className="text-3xl font-bold text-yellow-400 font-mono">{avgQuality.toFixed(1)}/10</span>
            <span className="text-gray-600">vs</span>
            <span className="text-3xl font-bold text-green-400 font-mono">9.0/10</span>
            <span className="text-gray-400 font-mono text-sm">ABSTRACT DATA</span>
          </div>
        </div>

        {/* Platform grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, i) => (
            <HUDPlatformCard key={i} platform={platform} />
          ))}
        </div>
      </div>
    </div>
  )
}
