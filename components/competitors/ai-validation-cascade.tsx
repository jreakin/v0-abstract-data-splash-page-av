"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Brain, Zap, Cpu, CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function AIValidationCascade() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const tiers = [
    {
      tier: "Tier 1",
      name: "Rule-Based Engine",
      speed: "0.001 seconds",
      coverage: "70%",
      cost: "$0",
      icon: Zap,
      color: "#00d9ff",
      details: [
        "Advanced address parsing with multiple validation libraries",
        "Comprehensive ZIP code database for fuzzy matching",
        "Lightning-fast rule engine",
        "Handles standard address formats",
      ],
    },
    {
      tier: "Tier 2",
      name: "Local Agent Model",
      speed: "0.1 seconds",
      coverage: "+20% (90% cumulative)",
      cost: "$0.0001 per address",
      icon: Cpu,
      color: "#d4af37",
      details: [
        "Handles ambiguous cases rule engine can't parse",
        "Context-aware address interpretation",
        "Abbreviation expansion and correction",
        "Cost-optimized local model for volume processing",
      ],
    },
    {
      tier: "Tier 3",
      name: "AI Graph (Complex Cases)",
      speed: "1 second",
      coverage: "+9% (99% cumulative)",
      cost: "$0.001 per address",
      icon: Brain,
      color: "#00d9ff",
      details: [
        "Deep reasoning for hardest 10% of addresses",
        "Multi-step validation logic with graph-based workflows",
        "Confidence scoring on every decision",
        "Handles edge cases competitors can't process",
      ],
    },
  ]

  return (
    <section
      ref={containerRef}
      className="py-24 relative bg-gradient-to-b from-[#0a0a0a] to-transparent overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{
            x: useTransform(mouseX, [-50, 50], [-10, 10]),
            y: useTransform(mouseY, [-50, 50], [-10, 10]),
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 mb-6">
            <Brain className="w-4 h-4 text-[#00d9ff]" />
            <span className="text-sm text-[#00d9ff] font-mono">Real AI, Not Marketing Claims</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">The 3-Tier AI Validation </span>
            <span className="text-[#00d9ff]">Cascade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everyone claims to use AI. We actually do. Here's exactly how our system works.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 50,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#00d9ff]/50 transition-colors shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${tier.color}20`,
                    border: `1px solid ${tier.color}40`,
                    transform: "translateZ(20px)",
                  }}
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                >
                  <tier.icon className="w-8 h-8" style={{ color: tier.color }} />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-gray-500">{tier.tier}</span>
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Speed</div>
                      <div className="text-lg font-bold" style={{ color: tier.color }}>
                        {tier.speed}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Coverage</div>
                      <div className="text-lg font-bold" style={{ color: tier.color }}>
                        {tier.coverage}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Cost</div>
                      <div className="text-lg font-bold" style={{ color: tier.color }}>
                        {tier.cost}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {tier.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: tier.color }} />
                        <span className="text-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-[#8b2635]/10 to-transparent border border-[#8b2635]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">How Their "AI" Works</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="text-[#8b2635] font-bold">Numinar's "World's First AI Platform":</span>
                <ul className="mt-2 ml-6 space-y-1 text-sm">
                  <li>• Statistical regression models for party affiliation (Strong GOP, Lean GOP, etc.)</li>
                  <li>• Automated email templates with name merge fields</li>
                  <li>• Weekly batch processing (not real-time, definitely not intelligent)</li>
                </ul>
              </div>
              <div>
                <span className="text-[#8b2635] font-bold">Campaign Nucleus's "AI-Powered Platform":</span>
                <p className="mt-2 text-sm italic">
                  GOP digital strategist Amanda Elliott: "Some of this stuff is not new, it's been around for a long
                  time. The only thing new is we're calling it AI."
                </p>
              </div>
              <div className="pt-4 border-t border-[#2a2a2a]">
                <p className="text-[#d4af37] font-bold">The Difference:</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <span className="text-[#8b2635]">Theirs:</span> Rebranded automation from 2010
                  </li>
                  <li>
                    <span className="text-[#00d9ff]">Ours:</span> Modern AI framework with local agent models and
                    graph-based workflows
                  </li>
                  <li>
                    <span className="text-[#8b2635]">Theirs:</span> Marketing claims with no technical documentation
                  </li>
                  <li>
                    <span className="text-[#00d9ff]">Ours:</span> 35,000-character system documentation, open
                    architecture, confidence scoring on every AI decision
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
