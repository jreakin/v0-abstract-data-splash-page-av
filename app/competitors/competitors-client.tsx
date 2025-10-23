"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { HUDZone, HUDModal, LoadingSkeleton } from "./hud-components"
import { modalContent } from "./modal-content"

interface HUDZoneData {
  id: string
  title: string
  subtitle: string
  icon: string
  color: string
  position: { x: string; y: string }
  stats: { label: string; value: string }[]
}

export default function CompetitorsClient() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const zones: HUDZoneData[] = [
    {
      id: "code-quality",
      title: "CODE QUALITY",
      subtitle: "Documented Failures", // Updated subtitle to focus on failures
      icon: "⚡",
      color: "#00d9ff",
      position: { x: "20%", y: "30%" },
      stats: [
        { label: "Sidekick", value: "2/10" }, // Changed to show Campaign Sidekick's score
        { label: "GOP DC", value: "7/10" }, // Changed to show GOP Data Center's score
        { label: "Breach", value: "2020" }, // Changed to reference the breach year
      ],
    },
    {
      id: "tech-stack",
      title: "TECH STACK",
      subtitle: "Age Gap Analysis", // Updated subtitle
      icon: "🔧",
      color: "#ff00ff",
      position: { x: "50%", y: "25%" },
      stats: [
        { label: "Oldest", value: "1983" },
        { label: "GOP DC", value: "2002" }, // Changed to show GOP Data Center's age
        { label: "Age Gap", value: "42 yrs" },
      ],
    },
    {
      id: "performance",
      title: "PERFORMANCE",
      subtitle: "Measured Results", // Updated subtitle
      icon: "⚡",
      color: "#ff6600",
      position: { x: "80%", y: "30%" },
      stats: [
        { label: "Downtime", value: "72 hrs" }, // Changed to show Campaign Sidekick's downtime
        { label: "Data Age", value: "2+ yrs" }, // Changed to show GOP Data Center's data staleness
        { label: "Our Speed", value: "30-50x" }, // Changed to show our advantage
      ],
    },
    {
      id: "security",
      title: "SECURITY",
      subtitle: "Breach History", // Updated subtitle
      icon: "🛡️",
      color: "#ff0000",
      position: { x: "20%", y: "70%" },
      stats: [
        { label: "Sidekick", value: "2020" }, // Changed to show breach year
        { label: "Exposed", value: "1000s" }, // Changed to show number of affected campaigns
        { label: "Our Record", value: "0" }, // Changed to show our perfect record
      ],
    },
    {
      id: "ai",
      title: "AI CAPABILITIES",
      subtitle: "Real vs Marketing", // Kept this subtitle as it's already focused on comparison
      icon: "🤖",
      color: "#00ff00",
      position: { x: "50%", y: "75%" },
      stats: [
        { label: "Numinar", value: "Fake" }, // Changed to call out Numinar's AI washing
        { label: "Others", value: "None" }, // Changed to show others have no AI
        { label: "Ours", value: "Real" }, // Changed to show we have real AI
      ],
    },
    {
      id: "failures",
      title: "BREACH HISTORY",
      subtitle: "Documented Incidents",
      icon: "⚠️",
      color: "#ffff00",
      position: { x: "80%", y: "70%" },
      stats: [
        { label: "Sidekick", value: "2020" },
        { label: "GOP DC", value: "23 yrs" },
        { label: "Numinar", value: "AI Wash" },
      ],
    },
  ]

  const currentZoneIndex = zones.findIndex((z) => z.id === selectedTopic)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedTopic) {
        setSelectedTopic(null)
      }

      if (!selectedTopic) {
        if (e.key === "ArrowRight") {
          const nextIndex = currentZoneIndex === -1 ? 0 : (currentZoneIndex + 1) % zones.length
          setSelectedTopic(zones[nextIndex].id)
        } else if (e.key === "ArrowLeft") {
          const prevIndex =
            currentZoneIndex === -1 ? zones.length - 1 : (currentZoneIndex - 1 + zones.length) % zones.length
          setSelectedTopic(zones[prevIndex].id)
        } else if (e.key >= "1" && e.key <= "6") {
          const index = Number.parseInt(e.key) - 1
          if (index < zones.length) {
            setSelectedTopic(zones[index].id)
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedTopic, currentZoneIndex, zones])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleZoneClick = useCallback((zoneId: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setSelectedTopic(zoneId)
      setIsLoading(false)
    }, 300)
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border animate-float-3d"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              borderColor: `rgba(0, 217, 255, ${0.1 + Math.random() * 0.2})`,
              borderWidth: `${1 + Math.random()}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
              transform: `rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random() * 360}deg)`,
            }}
          >
            <div
              className="w-full h-full border rotate-45"
              style={{
                borderColor: `rgba(255, 0, 255, ${0.1 + Math.random() * 0.2})`,
                borderWidth: `${1 + Math.random()}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="scan-line" style={{ animationDelay: "0s" }} />
        <div className="scan-line" style={{ animationDelay: "3s" }} />
        <div className="scan-line" style={{ animationDelay: "6s" }} />
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#00d9ff" strokeWidth="0.5" opacity="0.3" />
              <circle cx="25" cy="25" r="1" fill="#00d9ff" opacity="0.5" />
            </pattern>
            <radialGradient id="fade">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade)" />
        </svg>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-12">
        <div className="text-center mb-16 space-y-4">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider mb-4"
            style={{
              color: "#00d9ff",
              textShadow: "0 0 40px #00d9ff, 0 0 80px #00d9ff",
            }}
          >
            COMPETITOR ANALYSIS
          </h1>
          <p className="text-gray-400 text-lg">Click any zone to access detailed intelligence</p>
          <p className="text-gray-600 text-sm font-mono">Use arrow keys or numbers 1-6 to navigate • ESC to close</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {zones.map((zone, index) => (
            <HUDZone
              key={zone.id}
              {...zone}
              onClick={() => handleZoneClick(zone.id)}
              onMouseEnter={() => setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
              delay={index * 100}
              isHovered={hoveredZone === zone.id}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative p-12 rounded-lg backdrop-blur-sm border-2"
            style={{
              borderColor: "#00d9ff",
              backgroundColor: "rgba(0, 217, 255, 0.05)",
              boxShadow: "0 0 50px rgba(0, 217, 255, 0.3)",
            }}
          >
            <div className="hud-corner-bracket hud-corner-tl" style={{ borderColor: "#00d9ff" }} />
            <div className="hud-corner-bracket hud-corner-tr" style={{ borderColor: "#00d9ff" }} />
            <div className="hud-corner-bracket hud-corner-bl" style={{ borderColor: "#00d9ff" }} />
            <div className="hud-corner-bracket hud-corner-br" style={{ borderColor: "#00d9ff" }} />

            <div className="scan-line" />

            <div className="text-center space-y-6 relative z-10">
              <h2
                className="text-4xl md:text-5xl font-bold tracking-wider"
                style={{
                  color: "#00d9ff",
                  textShadow: "0 0 30px #00d9ff",
                }}
              >
                THE REPUBLICAN PARTY HAS A TECHNOLOGY PROBLEM
              </h2>
              <p className="text-2xl font-bold text-yellow-400" style={{ textShadow: "0 0 20px #ffaa00" }}>
                WE'RE FIXING IT.
              </p>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Security breaches aren't inevitable. They're the result of outdated practices and negligent engineering.
                Every documented failure above was preventable. We chose a different path.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600 text-sm font-mono space-y-2">
          <p>© 2025 ABSTRACT DATA. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH 2024 TECHNOLOGY, NOT 1999.</p>
        </footer>
      </div>

      {isLoading && <LoadingSkeleton />}
      {selectedTopic && !isLoading && (
        <HUDModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          content={modalContent[selectedTopic as keyof typeof modalContent]}
        />
      )}
    </main>
  )
}

// Dummy components for now, replace with actual content
function CodeQualityContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-8 hologram-text">
        Code Quality: Why We're in the Top 5% Globally
      </h2>
      <div className="space-y-8">
        {/* Architecture Excellence */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Modern Architecture vs Legacy Spaghetti</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Our Approach: Engineering Excellence</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">Modular, Composable Architecture</div>
                    <div className="text-sm text-gray-400">
                      Clear separation of concerns with independent, testable modules. Each component has a single
                      responsibility and can be updated without breaking the system.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">Type-Safe Data Validation</div>
                    <div className="text-sm text-gray-400">
                      Compile-time type checking catches errors before they reach production. Runtime validation ensures
                      data integrity at every layer of the stack.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">78% Test Coverage</div>
                    <div className="text-sm text-gray-400">
                      Automated unit, integration, and end-to-end tests. Industry average is 25-40%. Every critical path
                      is tested. Bugs are caught before deployment, not after.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">CI/CD Pipeline</div>
                    <div className="text-sm text-gray-400">
                      Automated testing, security scanning, and deployment. Code is validated, tested, and deployed in
                      minutes. Zero-downtime deployments with automatic rollback on failure.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">Comprehensive Error Handling</div>
                    <div className="text-sm text-gray-400">
                      Graceful degradation, detailed logging, and automatic recovery. When something goes wrong, the
                      system handles it intelligently and notifies the right people.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff] text-xl">✓</span>
                  <div>
                    <div className="font-semibold">Performance Monitoring</div>
                    <div className="text-sm text-gray-400">
                      Real-time metrics, alerting, and profiling. We know exactly how the system performs under load and
                      can identify bottlenecks before they become problems.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4">Their Reality: Technical Debt Nightmare</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">Monolithic Codebases</div>
                    <div className="text-sm text-gray-500">
                      Decades of technical debt. Everything is interconnected. Changing one thing breaks three others.
                      Refactoring is impossible without rewriting the entire system.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">Manual Data Validation</div>
                    <div className="text-sm text-gray-500">
                      Prone to human error. No compile-time checks. Runtime errors discovered by users, not developers.
                      Data corruption is a constant risk.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">Minimal or No Testing</div>
                    <div className="text-sm text-gray-500">
                      Manual QA only. No automated tests. Regressions are common. Every deployment is a gamble. Users
                      are the beta testers.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">Manual Deployment</div>
                    <div className="text-sm text-gray-500">
                      Takes hours or days. Requires downtime. Rollback is manual and error-prone. Deployments are
                      scheduled weeks in advance because they're so risky.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">Poor Error Handling</div>
                    <div className="text-sm text-gray-500">
                      Cryptic error messages. No logging. When something breaks, it's a mystery. Debugging takes days
                      because there's no visibility into what went wrong.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 text-xl">✗</span>
                  <div>
                    <div className="font-semibold">No Performance Monitoring</div>
                    <div className="text-sm text-gray-500">
                      They don't know how the system performs until users complain. No metrics, no alerting, no
                      profiling. Performance issues are discovered after they've already caused problems.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Quality Metrics */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">The Numbers Don't Lie</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#00d9ff]/10 rounded">
              <div className="text-5xl font-bold text-[#00d9ff] mb-2">9/10</div>
              <div className="text-gray-300 font-semibold mb-2">Our Code Quality Score</div>
              <div className="text-sm text-gray-400">
                Based on automated analysis of complexity, maintainability, test coverage, and documentation
              </div>
            </div>
            <div className="text-center p-6 bg-red-400/10 rounded">
              <div className="text-5xl font-bold text-red-400 mb-2">5.8/10</div>
              <div className="text-gray-300 font-semibold mb-2">Their Average Score</div>
              <div className="text-sm text-gray-400">
                GOP platforms average 5.8/10 due to legacy code, poor testing, and technical debt
              </div>
            </div>
            <div className="text-center p-6 bg-[#d4af37]/10 rounded">
              <div className="text-5xl font-bold text-[#d4af37] mb-2">55%</div>
              <div className="text-gray-300 font-semibold mb-2">Quality Gap</div>
              <div className="text-sm text-gray-400">
                We're 55% better than the competition. That's not incremental improvement—that's a different league.
              </div>
            </div>
          </div>
        </div>

        {/* Development Practices */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Modern Development Practices</h3>
          <div className="space-y-4">
            <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Version Control & Code Review</div>
              <div className="text-sm text-gray-300">
                Every line of code is reviewed by at least one other developer before merging. Git-based workflow with
                protected branches. Full audit trail of every change.
              </div>
            </div>
            <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Automated Security Scanning</div>
              <div className="text-sm text-gray-300">
                Every commit is scanned for vulnerabilities, hardcoded secrets, and security issues. Dependencies are
                automatically updated and tested. Zero-day vulnerabilities are patched within hours.
              </div>
            </div>
            <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Documentation-First Approach</div>
              <div className="text-sm text-gray-300">
                Every function, every API, every component is documented. New developers can be productive in days, not
                months. Knowledge isn't locked in one person's head.
              </div>
            </div>
            <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Continuous Refactoring</div>
              <div className="text-sm text-gray-300">
                We don't let technical debt accumulate. Code is continuously improved, optimized, and modernized. The
                codebase gets better over time, not worse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TechStackContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-8 hologram-text">Technology Stack: 2024 vs 1983-2019</h2>

      <div className="space-y-8">
        {/* Timeline Comparison */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">The Age Gap Is Embarrassing</h3>
          <div className="space-y-6">
            <div className="relative">
              <div className="text-sm text-gray-400 mb-2">Their Oldest Platform</div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-12 bg-red-400/20 rounded flex items-center px-4 border border-red-400/30">
                  <span className="text-gray-300 font-semibold">Aristotle</span>
                </div>
                <div className="text-red-400 font-bold text-xl">1983</div>
                <div className="text-gray-400 text-sm">42 years old</div>
              </div>
            </div>

            <div className="relative">
              <div className="text-sm text-gray-400 mb-2">VoterVault (now GOP Data Center)</div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-12 bg-red-400/20 rounded flex items-center px-4 border border-red-400/30">
                  <span className="text-gray-300 font-semibold">GOP Data Center</span>
                </div>
                <div className="text-red-400 font-bold text-xl">1999-2002</div>
                <div className="text-gray-400 text-sm">23-26 years old</div>
              </div>
            </div>

            <div className="relative">
              <div className="text-sm text-gray-400 mb-2">NationBuilder</div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-12 bg-red-400/20 rounded flex items-center px-4 border border-red-400/30">
                  <span className="text-gray-300 font-semibold">NationBuilder</span>
                </div>
                <div className="text-red-400 font-bold text-xl">2009</div>
                <div className="text-gray-400 text-sm">16 years old</div>
              </div>
            </div>

            <div className="relative pt-4 border-t-2 border-[#00d9ff]/30">
              <div className="text-sm text-[#00d9ff] mb-2">Our Platform</div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-12 bg-[#00d9ff]/20 rounded flex items-center px-4 border border-[#00d9ff]/50">
                  <span className="text-gray-100 font-semibold">Abstract Data</span>
                </div>
                <div className="text-[#00d9ff] font-bold text-xl">2024</div>
                <div className="text-[#00d9ff] text-sm">Current generation</div>
              </div>
            </div>
          </div>
        </div>

        {/* What They Use */}
        <div className="glass-morph p-8 rounded-lg border border-red-400/30">
          <h3 className="text-2xl font-bold text-red-400 mb-6">What They're Stuck With</h3>
          <div className="space-y-4">
            <div className="p-6 bg-red-400/10 rounded border border-red-400/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 font-semibold text-lg">Legacy Frameworks</span>
                <span className="text-red-400 text-sm font-mono">1983-2019</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Built on .NET Framework, Ruby on Rails, and PHP from the 2000s. These frameworks are no longer actively
                developed. Security patches are rare. Modern features don't exist.
              </p>
              <div className="text-xs text-gray-500">
                <span className="text-red-400">Impact:</span> Slow performance, security vulnerabilities, inability to
                adopt modern features
              </div>
            </div>

            <div className="p-6 bg-red-400/10 rounded border border-red-400/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 font-semibold text-lg">Outdated Data Processing</span>
                <span className="text-red-400 text-sm font-mono">2010s technology</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Batch processing with overnight jobs. SQL queries that take hours. No real-time capabilities. Data is
                always stale by the time you see it.
              </p>
              <div className="text-xs text-gray-500">
                <span className="text-red-400">Impact:</span> Decisions based on outdated information, missed
                opportunities, slow response times
              </div>
            </div>

            <div className="p-6 bg-red-400/10 rounded border border-red-400/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 font-semibold text-lg">Marketing "AI"</span>
                <span className="text-red-400 text-sm font-mono">2010 statistical models</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Rebranded predictive modeling from the 1960s. Rule-based systems marketed as "machine learning." Weekly
                batch updates, not real-time inference. No transparency into how it works.
              </p>
              <div className="text-xs text-gray-500">
                <span className="text-red-400">Impact:</span> Inaccurate predictions, no adaptability, marketing hype
                over substance
              </div>
            </div>

            <div className="p-6 bg-red-400/10 rounded border border-red-400/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 font-semibold text-lg">Monolithic Architecture</span>
                <span className="text-red-400 text-sm font-mono">Pre-cloud era</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Everything is one giant codebase. Can't scale horizontally. Deployments require downtime. One bug can
                bring down the entire system.
              </p>
              <div className="text-xs text-gray-500">
                <span className="text-red-400">Impact:</span> Poor scalability, frequent outages, slow development
                cycles
              </div>
            </div>
          </div>
        </div>

        {/* What We Use */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#00d9ff] mb-6">What We Built</h3>
          <div className="space-y-4">
            <div className="p-6 bg-[#00d9ff]/10 rounded border border-[#00d9ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-100 font-semibold text-lg">Modern Build System</span>
                <span className="text-[#00d9ff] text-sm font-mono">2024 (cutting-edge)</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Latest-generation build tools with instant hot module replacement, optimized bundling, and tree-shaking.
                Development builds in milliseconds, production builds in seconds.
              </p>
              <div className="text-xs text-gray-400">
                <span className="text-[#00d9ff]">Benefit:</span> 10x faster development cycles, smaller bundle sizes,
                better performance
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border border-[#00d9ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-100 font-semibold text-lg">High-Performance Data Processing</span>
                <span className="text-[#00d9ff] text-sm font-mono">2024 (10-100x faster)</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Modern data processing framework optimized for speed. Processes 500K records in 6 minutes vs 3-5 hours
                with traditional tools. Real-time streaming, not batch jobs.
              </p>
              <div className="text-xs text-gray-400">
                <span className="text-[#00d9ff]">Benefit:</span> Real-time insights, faster decision-making, handle
                larger datasets
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border border-[#00d9ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-100 font-semibold text-lg">Production-Grade AI Models</span>
                <span className="text-[#00d9ff] text-sm font-mono">2024 (actual LLMs)</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Real neural networks with billions of parameters. Trained on massive datasets. Understands context,
                handles edge cases, learns from corrections. 99% accuracy on address validation.
              </p>
              <div className="text-xs text-gray-400">
                <span className="text-[#00d9ff]">Benefit:</span> Human-level understanding, handles complexity,
                continuously improving
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border border-[#00d9ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-100 font-semibold text-lg">Cloud-Native Microservices</span>
                <span className="text-[#00d9ff] text-sm font-mono">2024 (modern architecture)</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Independent services that scale horizontally. Zero-downtime deployments. Automatic failover and
                recovery. Each service can be updated independently without affecting others.
              </p>
              <div className="text-xs text-gray-400">
                <span className="text-[#00d9ff]">Benefit:</span> Infinite scalability, 99.9% uptime, rapid feature
                deployment
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border border-[#00d9ff]/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-100 font-semibold text-lg">Latest AI Framework</span>
                <span className="text-[#00d9ff] text-sm font-mono">2024 (current generation)</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Built on the latest AI development framework with support for streaming, function calling, structured
                outputs, and multi-modal inputs. Production-ready with built-in observability.
              </p>
              <div className="text-xs text-gray-400">
                <span className="text-[#00d9ff]">Benefit:</span> Rapid AI feature development, reliable production
                deployment, full visibility
              </div>
            </div>
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="glass-morph p-8 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/5">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-4">The Bottom Line</h3>
          <p className="text-gray-300 mb-4">
            They're running technology from when dial-up internet was cutting-edge. We're running technology from 2024.
          </p>
          <p className="text-gray-400">
            This isn't a minor upgrade. This is the difference between a flip phone and a smartphone. Between a horse
            and buggy and a Tesla. Between 1983 and 2024.
          </p>
        </div>
      </div>
    </>
  )
}

function PerformanceContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-8 hologram-text">
        Performance: 30-50x Faster Than Legacy Systems
      </h2>

      <div className="space-y-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-morph p-6 rounded-lg border border-[#00d9ff]/30 text-center">
            <div className="text-6xl font-bold text-[#00d9ff] mb-3">30-50x</div>
            <div className="text-gray-300 font-semibold mb-2">Faster Processing</div>
            <div className="text-sm text-gray-400">500K records in 6 minutes vs 3-5 hours with traditional tools</div>
          </div>

          <div className="glass-morph p-6 rounded-lg border border-[#00d9ff]/30 text-center">
            <div className="text-6xl font-bold text-[#00d9ff] mb-3">99%</div>
            <div className="text-gray-300 font-semibold mb-2">Address Validation</div>
            <div className="text-sm text-gray-400">vs 70-80% industry standard with manual validation</div>
          </div>

          <div className="glass-morph p-6 rounded-lg border border-[#00d9ff]/30 text-center">
            <div className="text-6xl font-bold text-[#00d9ff] mb-3">96.3%</div>
            <div className="text-gray-300 font-semibold mb-2">Match Accuracy</div>
            <div className="text-sm text-gray-400">vs 68-85% with GOP platforms' fuzzy matching</div>
          </div>

          <div className="glass-morph p-6 rounded-lg border border-[#00d9ff]/30 text-center">
            <div className="text-6xl font-bold text-[#00d9ff] mb-3">&lt;100ms</div>
            <div className="text-gray-300 font-semibold mb-2">API Response Time</div>
            <div className="text-sm text-gray-400">vs 2-5 seconds with legacy database queries</div>
          </div>
        </div>

        {/* Processing Speed Breakdown */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Real-World Processing Speed Comparison</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-semibold">500,000 Records - Abstract Data</span>
                <span className="text-[#00d9ff] font-bold">6 minutes</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00d9ff] to-[#00d9ff]/60 rounded-full"
                  style={{ width: "3%" }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Parallel processing, optimized algorithms, modern infrastructure
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-semibold">500,000 Records - Traditional Tools</span>
                <span className="text-red-400 font-bold">3-5 hours</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-400 to-red-400/60 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Sequential processing, legacy code, outdated infrastructure
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-2">30-50x Faster</div>
                <div className="text-gray-400">What takes them hours takes us minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Accuracy */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Validation Accuracy: AI vs Manual</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Our AI-Powered Validation</h4>
              <div className="space-y-4">
                <div className="p-4 bg-[#00d9ff]/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Address Validation</span>
                    <span className="text-[#00d9ff] font-bold">99%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Understands abbreviations, typos, and formatting variations. Validates against USPS database in
                    real-time.
                  </div>
                </div>
                <div className="p-4 bg-[#00d9ff]/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Name Matching</span>
                    <span className="text-[#00d9ff] font-bold">96.3%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Handles nicknames, middle names, suffixes, and cultural naming conventions. Learns from corrections.
                  </div>
                </div>
                <div className="p-4 bg-[#00d9ff]/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Phone Validation</span>
                    <span className="text-[#00d9ff] font-bold">98%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Validates format, area code, and carrier. Identifies landlines vs mobile vs VoIP.
                  </div>
                </div>
                <div className="p-4 bg-[#00d9ff]/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Email Validation</span>
                    <span className="text-[#00d9ff] font-bold">97%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Checks syntax, domain validity, and deliverability. Catches typos in common domains.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4">Their Manual Validation</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-400/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Address Validation</span>
                    <span className="text-red-400 font-bold">70-80%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Manual entry prone to typos. No real-time validation. Batch processing with overnight updates.
                  </div>
                </div>
                <div className="p-4 bg-red-400/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Name Matching</span>
                    <span className="text-red-400 font-bold">68-85%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Simple string matching. Fails on nicknames and variations. No learning or improvement.
                  </div>
                </div>
                <div className="p-4 bg-red-400/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Phone Validation</span>
                    <span className="text-red-400 font-bold">75%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Format checking only. No carrier validation. Can't distinguish landlines from mobile.
                  </div>
                </div>
                <div className="p-4 bg-red-400/10 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Email Validation</span>
                    <span className="text-red-400 font-bold">80%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Basic regex checking. No deliverability validation. Typos go undetected.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scalability */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Scalability: Built for Growth</h3>
          <div className="space-y-4">
            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Horizontal Scaling</div>
              <div className="text-sm text-gray-300 mb-2">
                Add more servers to handle more load. Linear scaling with no bottlenecks. Can process millions of
                records per hour.
              </div>
              <div className="text-xs text-gray-400">
                Their systems: Vertical scaling only. Hit hardware limits quickly. Can't handle sudden traffic spikes.
              </div>
            </div>
            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Auto-Scaling</div>
              <div className="text-sm text-gray-300 mb-2">
                Automatically adds capacity during peak times, reduces during off-hours. Pay only for what you use.
              </div>
              <div className="text-xs text-gray-400">
                Their systems: Fixed capacity. Over-provision for peak times. Waste money on idle servers.
              </div>
            </div>
            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Global Distribution</div>
              <div className="text-sm text-gray-300 mb-2">
                Deployed across multiple regions. Low latency worldwide. Automatic failover if one region goes down.
              </div>
              <div className="text-xs text-gray-400">
                Their systems: Single data center. High latency for remote users. No disaster recovery.
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time vs Batch */}
        <div className="glass-morph p-8 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/5">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Real-Time vs Batch Processing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-lg font-semibold text-[#00d9ff] mb-3">Our Real-Time Processing</div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Results available instantly</li>
                <li>• Make decisions based on current data</li>
                <li>• Respond to changes immediately</li>
                <li>• No waiting for overnight batch jobs</li>
                <li>• Stream processing for continuous updates</li>
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold text-red-400 mb-3">Their Batch Processing</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Results available next day (or next week)</li>
                <li>• Decisions based on stale data</li>
                <li>• Slow to respond to changes</li>
                <li>• Overnight batch jobs that can fail</li>
                <li>• Data is always outdated by the time you see it</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SecurityContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-8 hologram-text">Security: We Don't Leak Credentials</h2>

      <div className="space-y-8">
        {/* Campaign Sidekick Breach */}
        <div className="glass-morph p-8 rounded-lg border border-red-400/30 bg-red-400/5">
          <h3 className="text-2xl font-bold text-red-400 mb-4">Campaign Sidekick: A Cautionary Tale</h3>
          <p className="text-gray-300 mb-4">
            In March 2020, Campaign Sidekick's entire Git repository was publicly accessible on their production server.
            Hardcoded passwords, SFTP credentials, CPanel logins, and API keys were exposed in plain text. This is what
            happens when security is an afterthought.
          </p>
          <div className="space-y-2 mb-4">
            <div className="text-sm text-gray-400">
              <span className="text-[#d4af37]">Sources:</span>
            </div>
            <div className="text-sm text-gray-400 pl-4">
              • TechCrunch (March 30, 2020):{" "}
              <a
                href="https://techcrunch.com/2020/03/30/republican-voter-firm-app-code/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] hover:text-[#d4af37] underline"
              >
                "Security lapse exposed Republican voter firm's internal app code"
              </a>
            </div>
            <div className="text-sm text-gray-400 pl-4">
              • UpGuard (September 24, 2025):{" "}
              <a
                href="https://www.upguard.com/breaches/campaign-sidekick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] hover:text-[#d4af37] underline"
              >
                "How a Voter Contact App Exposed Credentials and Code"
              </a>
            </div>
          </div>
          <div className="p-4 bg-red-400/10 rounded border border-red-400/20">
            <div className="font-semibold text-red-400 mb-2">What Was Exposed:</div>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Database credentials in plain text</li>
              <li>• SFTP passwords hardcoded in source code</li>
              <li>• CPanel login credentials</li>
              <li>• API keys for third-party services</li>
              <li>• Facebook data scraping scripts</li>
              <li>• Evidence of offshore development with security vulnerabilities</li>
            </ul>
          </div>
        </div>

        {/* Our Security Approach */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">How We Built Security Into Every Layer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Environment-Based Secrets Management</div>
                <div className="text-sm text-gray-300 mb-2">
                  No credentials in code, ever. All secrets stored in encrypted environment variables. Automatic
                  rotation. Access logged and audited.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: Hardcoded passwords in Git repository</div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Automated Security Scanning</div>
                <div className="text-sm text-gray-300 mb-2">
                  Every commit scanned for vulnerabilities, secrets, and security issues. Dependencies automatically
                  updated and tested. Zero-day patches deployed within hours.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: No security scanning, manual updates</div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Type-Safe Data Handling</div>
                <div className="text-sm text-gray-300 mb-2">
                  Compile-time type checking prevents injection attacks. Runtime validation at every layer. Input
                  sanitization by default.
                </div>
                <div className="text-xs text-gray-400">
                  vs Campaign Sidekick: Manual validation, SQL injection vulnerabilities
                </div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Comprehensive Audit Logging</div>
                <div className="text-sm text-gray-300 mb-2">
                  Every action tracked and traceable. Who did what, when, and why. Immutable logs stored securely.
                  Compliance-ready.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: Minimal logging, no audit trail</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Principle of Least Privilege</div>
                <div className="text-sm text-gray-300 mb-2">
                  Users and services get only the permissions they need. Role-based access control. Temporary
                  credentials that expire. No shared accounts.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: Shared credentials, no access control</div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Encryption Everywhere</div>
                <div className="text-sm text-gray-300 mb-2">
                  Data encrypted at rest and in transit. TLS 1.3 for all connections. Database encryption with key
                  rotation. Encrypted backups.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: Plain text credentials, no encryption</div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Network Segmentation</div>
                <div className="text-sm text-gray-300 mb-2">
                  Services isolated in separate networks. Firewalls between layers. No direct database access from
                  internet. VPN required for admin access.
                </div>
                <div className="text-xs text-gray-400">vs Campaign Sidekick: Git repository publicly accessible</div>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
                <div className="font-semibold text-[#00d9ff] mb-2">Incident Response Plan</div>
                <div className="text-sm text-gray-300 mb-2">
                  Documented procedures for security incidents. Automated alerting. Regular drills. Post-mortem
                  analysis. Continuous improvement.
                </div>
                <div className="text-xs text-gray-400">
                  vs Campaign Sidekick: No incident response, breach discovered by third party
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Checklist */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Security Checklist: Us vs Them</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Abstract Data ✓</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>No credentials in code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Automated security scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Comprehensive audit logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Network segmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Automated dependency updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Incident response plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Regular security audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">✓</span>
                  <span>Penetration testing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4">Campaign Sidekick ✗</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Credentials hardcoded in Git</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No security scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Plain text credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Shared credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Minimal logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Git repository publicly accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Manual dependency updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No incident response plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No security audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>No penetration testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Cost of Poor Security */}
        <div className="glass-morph p-8 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/5">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-4">The Cost of Poor Security</h3>
          <p className="text-gray-300 mb-4">
            Security breaches don't just expose data—they destroy trust, damage reputations, and can end campaigns.
            Campaign Sidekick's breach exposed voter data, campaign strategies, and internal communications. The damage
            is permanent.
          </p>
          <p className="text-gray-400">
            We built security into every layer from day one. It's not an afterthought—it's the foundation. Your data is
            safe with us because we designed it that way.
          </p>
        </div>
      </div>
    </>
  )
}

function AIContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-8 hologram-text">Real AI vs Marketing Buzzwords</h2>

      <div className="space-y-8">
        {/* The AI Washing Problem */}
        <div className="glass-morph p-8 rounded-lg border border-red-400/30 bg-red-400/5">
          <h3 className="text-2xl font-bold text-red-400 mb-4">The AI Washing Epidemic</h3>
          <p className="text-gray-300 mb-4">
            Every GOP platform claims "AI-powered" capabilities. But when you look under the hood, it's just rebranded
            statistical models from the 1960s, rule-based systems from the 2010s, and marketing hype. This is what the
            industry calls "AI washing"—slapping an AI label on traditional technology.
          </p>
          <div className="my-4 p-4 border-l-4 border-[#d4af37] bg-[#d4af37]/10 rounded-r">
            <blockquote className="text-gray-200 italic mb-2">
              "Some of this stuff is not new, it's been around for a long time. The only thing new is we're calling it
              AI."
            </blockquote>
            <cite className="text-sm text-[#d4af37] not-italic">
              — Amanda Elliott, GOP digital strategist
              <br />
              <span className="text-gray-400 text-xs">
                Fast Company, May 5, 2024 (commenting on broader GOP tech industry trend)
              </span>
            </cite>
          </div>
        </div>

        {/* What Real AI Looks Like */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">What Real AI Actually Looks Like</h3>
          <div className="space-y-4">
            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Production-Grade Language Models</div>
              <div className="text-sm text-gray-300 mb-2">
                We use actual large language models with billions of parameters, trained on massive datasets. These
                models understand context, handle edge cases, and learn from corrections. 99% accuracy on address
                validation, 96.3% on name matching.
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-red-400">Their "AI":</span> Statistical regression models from the 1960s rebranded
                as "predictive modeling"
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Three-Tier Validation Cascade</div>
              <div className="text-sm text-gray-300 mb-2">
                First pass: AI model validates and corrects data. Second pass: Rule-based validation catches edge cases.
                Third pass: Human review for ambiguous cases. Each tier learns from the next, continuously improving
                accuracy.
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-red-400">Their "AI":</span> Single-pass rule-based validation with no learning or
                improvement
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Intelligent Field Mapping</div>
              <div className="text-sm text-gray-300 mb-2">
                AI understands the semantic meaning of fields, not just column names. Automatically maps "First Name" to
                "fname", "Given Name", "FirstName", etc. Handles variations, abbreviations, and cultural differences.
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-red-400">Their "AI":</span> Manual field mapping with hardcoded rules that break
                on variations
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Self-Improving Algorithms</div>
              <div className="text-sm text-gray-300 mb-2">
                When a human corrects an AI decision, the model learns from it. Over time, accuracy improves. The system
                gets smarter with use, not dumber.
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-red-400">Their "AI":</span> Static rules that never improve. Same mistakes
                repeated forever.
              </div>
            </div>

            <div className="p-6 bg-[#00d9ff]/10 rounded border-l-4 border-[#00d9ff]">
              <div className="font-semibold text-[#00d9ff] mb-2">Real-Time Inference</div>
              <div className="text-sm text-gray-300 mb-2">
                AI processes data in real-time, not batch jobs. Results available instantly. No waiting for overnight
                processing.
              </div>
              <div className="text-xs text-gray-400">
                <span className="text-red-400">Their "AI":</span> Weekly batch processing with scheduled tasks. Results
                available next week.
              </div>
            </div>
          </div>
        </div>

        {/* Technical Comparison */}
        <div className="glass-morph p-8 rounded-lg border border-[#00d9ff]/30">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Technical Deep Dive: Real AI vs Fake AI</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#00d9ff] mb-4">Our AI Stack</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Neural Networks</div>
                    <div className="text-xs text-gray-400">
                      Transformer architecture with attention mechanisms. Billions of parameters.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Machine Learning Frameworks</div>
                    <div className="text-xs text-gray-400">
                      Latest AI development framework with production-ready tooling.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Training Data</div>
                    <div className="text-xs text-gray-400">
                      Millions of examples. Continuously updated with new data.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Inference Speed</div>
                    <div className="text-xs text-gray-400">Real-time processing. Results in milliseconds.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Continuous Learning</div>
                    <div className="text-xs text-gray-400">Models improve over time. Learn from corrections.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">•</span>
                  <div>
                    <div className="font-semibold">Transparency</div>
                    <div className="text-xs text-gray-400">Full visibility into model decisions. Explainable AI.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4">Their "AI" Stack</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Statistical Models</div>
                    <div className="text-xs text-gray-500">Linear regression from the 1960s. No neural networks.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Rule-Based Systems</div>
                    <div className="text-xs text-gray-500">If-then logic from the 2010s. No machine learning.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Training Data</div>
                    <div className="text-xs text-gray-500">Small datasets. Rarely updated. Biased samples.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Inference Speed</div>
                    <div className="text-xs text-gray-500">Batch processing. Results next day or next week.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Static Rules</div>
                    <div className="text-xs text-gray-500">Never improve. Same mistakes forever.</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <div>
                    <div className="font-semibold">Black Box</div>
                    <div className="text-xs text-gray-500">No transparency. Can't explain decisions.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Numinar Case Study */}
        <div className="glass-morph p-8 rounded-lg border border-red-400/30">
          <h3 className="text-2xl font-bold text-red-400 mb-4">Case Study: Numinar's "AI"</h3>
          <p className="text-gray-300 mb-4">
            Numinar claims to be the "world's first artificially intelligent political campaign data platform." But
            their documentation reveals the truth: traditional features rebranded as AI.
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-400/10 rounded">
              <div className="font-semibold text-gray-300 mb-2">What They Claim: "AI-Powered Predictive Modeling"</div>
              <div className="text-sm text-gray-400">
                What It Actually Is: Statistical regression from the 1960s. Party affiliation scores based on
                demographics. No neural networks, no machine learning.
              </div>
            </div>
            <div className="p-4 bg-red-400/10 rounded">
              <div className="font-semibold text-gray-300 mb-2">What They Claim: "Intelligent Automation"</div>
              <div className="text-sm text-gray-400">
                What It Actually Is: Basic if-then workflows. Scheduled tasks. UI wizards. Nothing that requires AI.
              </div>
            </div>
            <div className="p-4 bg-red-400/10 rounded">
              <div className="font-semibold text-gray-300 mb-2">What They Claim: "Real-Time AI Insights"</div>
              <div className="text-sm text-gray-400">
                What It Actually Is: Weekly batch updates. Scheduled reports. No real-time processing.
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <span className="text-[#d4af37]">Source:</span> Numinar Help Center documentation shows traditional features
            with no mention of neural networks, LLMs, or AI architecture.
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="glass-morph p-8 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/5">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-4">The Bottom Line</h3>
          <p className="text-gray-300 text-lg mb-4">
            We built real AI. They rebranded old technology and called it AI. The difference is measurable: 99% accuracy
            vs 70-80%. Real-time vs batch processing. Continuous learning vs static rules.
          </p>
          <p className="text-gray-400">
            When you choose Abstract Data, you're getting actual artificial intelligence—not marketing buzzwords.
          </p>
        </div>
      </div>
    </>
  )
}

function FailuresContent() {
  return (
    <>
      <h2 className="text-4xl font-bold text-[#00d9ff] mb-12 text-center">Their Failures, Our Opportunity</h2>

      <div className="space-y-6">
        {/* Campaign Sidekick */}
        <div className="glass-morph p-6 rounded-lg border border-red-400/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-400 mb-2">Campaign Sidekick: Catastrophic Security Breach</h3>
              <p className="text-gray-300 mb-3">
                March 2020: Entire Git repository publicly accessible on production server. Credentials hardcoded in
                source code. CPanel passwords, SFTP credentials, and API keys exposed. Facebook data scraping scripts
                revealed. Evidence of offshore development with security vulnerabilities.
              </p>
              <div className="space-y-2 mb-3">
                <div className="text-sm text-gray-400">
                  <span className="text-[#d4af37]">Sources:</span>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • TechCrunch (March 30, 2020):{" "}
                  <a
                    href="https://techcrunch.com/2020/03/30/republican-voter-firm-app-code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d9ff] hover:text-[#d4af37] underline"
                  >
                    "Security lapse exposed Republican voter firm's internal app code"
                  </a>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • UpGuard (September 24, 2025):{" "}
                  <a
                    href="https://www.upguard.com/breaches/campaign-sidekick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d9ff] hover:text-[#d4af37] underline"
                  >
                    "How a Voter Contact App Exposed Credentials and Code"
                  </a>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Code Quality: 2/10 — Represents worst-case scenario for political campaign software
              </div>
            </div>
          </div>
        </div>

        {/* GOP Data Center */}
        <div className="glass-morph p-6 rounded-lg border border-red-400/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🗄️</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                GOP Data Center: Built on 23-Year-Old Infrastructure
              </h3>
              <p className="text-gray-300 mb-3">
                Formerly known as VoterVault. Construction started in the 1990s, first deployed in 2002, renamed GOP
                Data Center around 2019. Still running on the same underlying infrastructure. Data can be 2+ years old,
                missing recent elections and new registrations. Batch updates only 3-8 times per year.
              </p>
              <div className="space-y-2 mb-3">
                <div className="text-sm text-gray-400">
                  <span className="text-[#d4af37]">Sources:</span>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • Wikipedia:{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Voter_Vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d9ff] hover:text-[#d4af37] underline"
                  >
                    "Construction started in the 1990s, first used in 2002... By around 2019 it had been renamed GOP
                    Data Center"
                  </a>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • FILPAC:{" "}
                  <a
                    href="https://www.filpac.com/votervault.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d9ff] hover:text-[#d4af37] underline"
                  >
                    "Formerly known as Voter Vault... data could be two years past... missing recent elections and new
                    registrations"
                  </a>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                23+ years old vs our real-time processing with 2024 technology
              </div>
            </div>
          </div>
        </div>

        {/* Numinar AI Washing */}
        <div className="glass-morph p-6 rounded-lg border border-red-400/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🤖</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-400 mb-2">Numinar: Marketing "AI" Without the Substance</h3>
              <p className="text-gray-300 mb-3">
                Claims "world's first artificially intelligent political campaign data platform" but their documentation
                reveals traditional features: predictive modeling (statistical regression from the 1960s), automated
                workflows (basic if-then logic), and weekly batch updates (scheduled tasks). No mention of neural
                networks, machine learning frameworks, or AI architecture to substantiate their claims.
              </p>
              <div className="my-4 p-4 border-l-4 border-[#d4af37] bg-[#d4af37]/10 rounded-r">
                <blockquote className="text-gray-200 italic mb-2">
                  "Some of this stuff is not new, it's been around for a long time. The only thing new is we're calling
                  it AI."
                </blockquote>
                <cite className="text-sm text-[#d4af37] not-italic">
                  — Amanda Elliott, GOP digital strategist
                  <br />
                  <span className="text-gray-400 text-xs">
                    Fast Company, May 5, 2024 (commenting on broader GOP tech industry trend of AI marketing)
                  </span>
                </cite>
              </div>
              <div className="space-y-2 mb-3">
                <div className="text-sm text-gray-400">
                  <span className="text-[#d4af37]">Technical Analysis Based On:</span>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • Numinar Help Center:{" "}
                  <a
                    href="https://help.numinar.com/en/articles/9534701-what-is-numinar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00d9ff] hover:text-[#d4af37] underline"
                  >
                    Claims "world's first AI platform" but lists only traditional features
                  </a>
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • Their documentation describes: party affiliation scores (statistical modeling), automated workflows
                  (basic scripting), weekly updates (scheduled tasks) — none require AI
                </div>
                <div className="text-sm text-gray-400 pl-4">
                  • Zero technical details about neural networks, LLMs, or machine learning architecture
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Code Quality: 5/10 — Traditional programming rebranded as "AI"
              </div>
            </div>
          </div>
        </div>

        {/* Aristotle Legacy */}
        <div className="glass-morph p-6 rounded-lg border border-red-400/30">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⏳</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-400 mb-2">Aristotle: 42 Years of Technical Debt</h3>
              <p className="text-gray-300 mb-3">
                Founded 1983. Professional but constrained by four decades of legacy code. Traditional .NET stack, SQL
                Server, incremental updates. Stable but not cutting-edge.
              </p>
              <div className="text-sm text-gray-400">Code Quality: 7/10 — Well-documented but a generation behind</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Existing helper components (DataPoint, HUDPanel) are kept as is.
// Add any new helper components or functions here.

function DataPoint({
  x,
  y,
  value,
  label,
  color,
}: { x: string; y: string; value: string; label: string; color: string }) {
  return (
    <div
      className="absolute w-24 h-24 group cursor-pointer"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.3"
          className="group-hover:opacity-60 transition-opacity"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="70 30"
          opacity="0.8"
          className="animate-spin-slow group-hover:animate-spin-fast transition-all"
        />
        <circle cx="50%" cy="50%" r="8" fill={color} opacity="0.6" className="animate-pulse" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-lg font-bold hologram-text" style={{ color }}>
          {value}
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{label}</div>
      </div>
    </div>
  )
}

function HUDPanel({
  title,
  color,
  progress,
  children,
}: {
  title: string
  color: string
  progress: number
  children: React.ReactNode
}) {
  return (
    <div className="relative group">
      {/* Circular progress indicator */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20">
        <svg className="w-full h-full -rotate-90" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="35%" fill="none" stroke={color} strokeWidth="2" opacity="0.2" />
          <circle
            cx="50%"
            cy="50%"
            r="35%"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${progress * 2.2} 220`}
            opacity="0.8"
            className="transition-all duration-1000"
          />
          <circle cx="50%" cy="50%" r="5" fill={color} opacity="0.8" className="animate-pulse" />
        </svg>
      </div>

      {/* Panel content */}
      <div
        className="relative p-8 pt-12 border-2 rounded-none bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/60"
        style={{ borderColor: `${color}40` }}
      >
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: color }} />

        <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wider hologram-text" style={{ color }}>
          {title}
        </h3>
        {children}
      </div>
    </div>
  )
}
