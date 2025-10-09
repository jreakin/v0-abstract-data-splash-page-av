"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Globe, Brain } from "lucide-react"
import { DataStreamBackground } from "./data-stream-background"

export function TheFuture() {
  const futureCapabilities = [
    {
      icon: Brain,
      title: "Quantum-Ready Architecture",
      description:
        "Building systems designed for quantum computing integration before it's mainstream. While others scramble to adapt, we'll already be there.",
    },
    {
      icon: Cpu,
      title: "Advanced AI Integration",
      description:
        "Next-generation LLM orchestration and autonomous agent systems. We're not just using AI—we're architecting the future of intelligent automation. Our AI-powered diagnostics and self-healing systems are already operational.",
    },
    {
      icon: Globe,
      title: "Edge-First Computing",
      description:
        "Distributed systems optimized for edge deployment and real-time processing. While they're still figuring out cloud deployment, we're already beyond it.",
    },
    {
      icon: Zap,
      title: "Neural Interface Ready",
      description:
        "Preparing for brain-computer interfaces and spatial computing platforms. Building for interfaces that don't exist yet—because they will. Our Vision Pro and AR development is already live.",
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
      <DataStreamBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] via-[#00d9ff] to-[#d4af37] bg-clip-text text-transparent text-glow-gold"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            BUILT FOR 2030
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not solving today's problems. We're building tomorrow's solutions—on platforms that don't even exist
            yet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {futureCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="glass-morph p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Holographic shimmer on hover */}
              <div className="absolute inset-0 holographic animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Glowing border */}
              <div className="absolute inset-0 border border-[#00d9ff] opacity-0 group-hover:opacity-50 rounded-lg glow-cyan transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30">
                  <capability.icon className="w-8 h-8 text-[#00d9ff]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#d4af37]" style={{ fontFamily: "var(--font-orbitron)" }}>
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
