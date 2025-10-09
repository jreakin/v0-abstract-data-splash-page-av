"use client"

import { motion } from "framer-motion"
import { Database, Cpu, Cloud, Zap, Shield } from "lucide-react"

export function ArchitectureDiagram() {
  const layers = [
    {
      title: "Presentation Layer",
      icon: Cloud,
      items: ["Next.js 15", "React Server Components", "SwiftUI", "AR/VR Interfaces"],
    },
    {
      title: "Application Layer",
      icon: Cpu,
      items: ["Microservices Architecture", "Event-Driven Systems", "Real-time Processing", "AI Orchestration"],
    },
    {
      title: "Intelligence Layer",
      icon: Zap,
      items: ["LLM Integration", "Fuzzy Matching Algorithms", "ML Pipelines", "Automated Quality Control"],
    },
    {
      title: "Data Layer",
      icon: Database,
      items: ["PostgreSQL", "Redis Cache", "Vector Databases", "Multi-stage Processing"],
    },
    {
      title: "Infrastructure Layer",
      icon: Shield,
      items: ["Edge Computing", "Distributed Systems", "Auto-scaling", "Zero-downtime Deployment"],
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#00d9ff] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SYSTEM ARCHITECTURE
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div className="glass-morph p-6 rounded-lg border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 group-hover:glow-cyan transition-all">
                    <layer.icon className="w-6 h-6 text-[#00d9ff]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#d4af37]" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {layer.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
                  {layer.items.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm text-gray-400 bg-[#0a0a0a]/50 px-3 py-2 rounded border border-[#d4af37]/20"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection line to next layer */}
              {index < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    className="w-px h-8 bg-gradient-to-b from-[#00d9ff] to-[#d4af37]"
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
