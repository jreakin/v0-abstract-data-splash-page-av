"use client"

import { motion } from "framer-motion"
import { Database, Cpu, Cloud, Zap, Shield } from "lucide-react"
import { TextDecode } from "@/components/text-decode"
import { GlitchEffect } from "@/components/glitch-effect"
import { CodeRain } from "./code-rain"

export function ArchitectureDiagram() {
  const layers = [
    {
      title: "Presentation Layer",
      icon: Cloud,
      items: ["Next.js 15", "React Server Components", "SwiftUI", "AR/VR Interfaces"],
      borderColor: "#00d9ff",
      glowColor: "#00d9ff",
      bgGradient: "from-[#00d9ff]/5 to-[#00d9ff]/10",
    },
    {
      title: "Application Layer",
      icon: Cpu,
      items: ["Microservices Architecture", "Event-Driven Systems", "Real-time Processing", "AI Orchestration"],
      borderColor: "#d4af37",
      glowColor: "#d4af37",
      bgGradient: "from-[#d4af37]/5 to-[#d4af37]/10",
    },
    {
      title: "Intelligence Layer",
      icon: Zap,
      items: ["LLM Integration", "Fuzzy Matching Algorithms", "ML Pipelines", "Automated Quality Control"],
      borderColor: "#8b2635",
      glowColor: "#8b2635",
      bgGradient: "from-[#8b2635]/5 to-[#8b2635]/10",
    },
    {
      title: "Data Layer",
      icon: Database,
      items: ["PostgreSQL", "Redis Cache", "Vector Databases", "Multi-stage Processing"],
      borderColor: "#00f0ff",
      glowColor: "#00f0ff",
      bgGradient: "from-[#00f0ff]/5 to-[#00f0ff]/10",
    },
    {
      title: "Infrastructure Layer",
      icon: Shield,
      items: ["Edge Computing", "Distributed Systems", "Auto-scaling", "Zero-downtime Deployment"],
      borderColor: "#ffd700",
      glowColor: "#ffd700",
      bgGradient: "from-[#ffd700]/5 to-[#ffd700]/10",
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      <CodeRain />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlitchEffect>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#00d9ff] bg-clip-text text-transparent px-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <TextDecode text="SYSTEM ARCHITECTURE" />
            </h2>
          </GlitchEffect>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Enterprise-grade, multi-tier architecture designed for scale, performance, and reliability.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`glass-morph p-6 rounded-lg border transition-all group bg-gradient-to-br ${layer.bgGradient}`}
                style={{
                  borderColor: layer.borderColor,
                  borderWidth: "1px",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 30px ${layer.glowColor}40`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="p-3 rounded-lg border"
                    style={{
                      backgroundColor: `${layer.borderColor}10`,
                      borderColor: `${layer.borderColor}30`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 20px ${layer.glowColor}60`,
                    }}
                  >
                    <layer.icon className="w-6 h-6" style={{ color: layer.borderColor }} />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      color: layer.borderColor,
                    }}
                  >
                    {layer.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
                  {layer.items.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-400 bg-[#0a0a0a]/50 px-3 py-2 rounded border"
                      style={{
                        borderColor: `${layer.borderColor}20`,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {index < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    className="w-px h-8 bg-gradient-to-b"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, ${layer.borderColor}, ${layers[index + 1].borderColor})`,
                    }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
