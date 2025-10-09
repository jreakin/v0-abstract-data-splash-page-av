"use client"

import { motion } from "framer-motion"
import { Code2, Shield, Zap, Award } from "lucide-react"
import { InteractiveParticles } from "@/components/interactive-particles"
import { GlitchEffect } from "@/components/glitch-effect"
import { DoubleClickTooltip } from "@/components/double-click-tooltip"
import { ParallaxDepth } from "@/components/parallax-depth"

export function EngineeringExcellence() {
  const qualities = [
    {
      icon: Code2,
      title: "Top 5% Code Quality",
      description:
        "Independent analysis ranks our codebase in the top 5% nationally. Clean, maintainable architecture—not the spaghetti mess others try to hide. This quality enables our Level 4 self-maintaining systems.",
    },
    {
      icon: Shield,
      title: "78% Test Coverage",
      description:
        "Exceptional for any industry. We build production-grade systems with enterprise-level quality assurance. Others skip testing entirely. Our comprehensive testing enables self-healing and autonomous operations.",
    },
    {
      icon: Zap,
      title: "Enterprise-Grade Architecture",
      description:
        "Microservices patterns used at Fortune 500 tech companies. Senior/staff-level engineering that would command $250K-400K at elite firms. This architecture powers our 5M+ records per hour processing capability.",
    },
    {
      icon: Award,
      title: "Actually Built By Us",
      description:
        "Every line of code is ours. No white-labeled software pretending to be custom. No rebranded tools from vendors. Real engineering.",
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />

      <ParallaxDepth variant="circuit" intensity={1} />

      <InteractiveParticles />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="h-full w-full animate-scan"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00D9FF 2px, #00D9FF 4px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <DoubleClickTooltip tooltip="Real Engineering: (noun) What happens when you actually know what you're doing">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] text-transparent bg-clip-text">
                Real Engineering.
              </span>
            </DoubleClickTooltip>
            <br />
            <GlitchEffect>
              <span className="text-white">Not White-Labeled Garbage.</span>
            </GlitchEffect>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While other GOP "engineers" rebrand vendor software and slap their logo on it, we're building
            production-grade systems from scratch. The difference?
            <span className="text-[#00D9FF] font-semibold"> We actually know what we're doing.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card background with glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/80 to-[#0A0A0A]/80 backdrop-blur-xl rounded-2xl border border-[#D4AF37]/20" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 to-[#00D9FF]/20 blur-xl" />
              </div>

              {/* Hexagonal corner accent */}
              <div className="absolute -top-2 -right-2 w-12 h-12 opacity-50">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="none" stroke="#D4AF37" strokeWidth="2" />
                </svg>
              </div>

              <div className="relative p-8">
                {/* Icon with glow */}
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-[#00D9FF]/30 blur-xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#00D9FF]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                    <quality.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white font-orbitron">{quality.title}</h3>
                <p className="text-gray-300 leading-relaxed">{quality.description}</p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-[#00D9FF]/50 animate-pulse-slow" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#00D9FF]/20 blur-2xl" />
            <div className="relative px-8 py-6 rounded-2xl border border-[#D4AF37]/30 bg-[#1A1A1A]/50 backdrop-blur-xl">
              <p className="text-2xl font-bold text-white font-orbitron mb-2">Continuous Innovation & Excellence</p>
              <p className="text-lg text-gray-300">
                While they're still debugging their white-labeled mess, we're shipping features.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
