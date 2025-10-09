"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Cpu, Award } from "lucide-react"
import { EnergyField } from "./energy-field"

const advantages = [
  {
    icon: TrendingUp,
    title: "PROVEN EFFICIENCY",
    stat: "98.5%",
    description: "Reduction in processing time compared to manual methods",
  },
  {
    icon: Target,
    title: "PRECISION ENGINEERING",
    stat: "96.3%",
    description: "Data matching accuracy through advanced algorithms",
  },
  {
    icon: Cpu,
    title: "EXTREME PERFORMANCE",
    stat: "10-50x",
    description: "Faster than traditional approaches across all metrics",
  },
  {
    icon: Award,
    title: "EXCEPTIONAL ROI",
    stat: "26.6x",
    description: "Return on investment delivered to our clients",
  },
]

export function OurAdvantage() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Energy field effect */}
      <EnergyField />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-glow-gold"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#d4af37] bg-clip-text text-transparent">
              THE ABSTRACT DATA ADVANTAGE
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don't just build software. We engineer competitive advantages that transform operations and deliver
            measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="glass-morph p-8 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 border-2 border-[#00d9ff] rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur-sm" />

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#d4af37] flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm" />
                  <advantage.icon className="w-8 h-8 text-white relative z-10" />
                </div>
              </div>

              {/* Stat */}
              <motion.div
                className="text-5xl font-bold text-center mb-4"
                style={{ fontFamily: "var(--font-orbitron)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
              >
                <span className="bg-gradient-to-r from-[#00d9ff] to-[#ffd700] bg-clip-text text-transparent">
                  {advantage.stat}
                </span>
              </motion.div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-white mb-3 text-center tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center leading-relaxed text-sm">{advantage.description}</p>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00d9ff] opacity-50" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00d9ff] opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl text-gray-300 font-medium" style={{ fontFamily: "var(--font-orbitron)" }}>
            <span className="text-[#00d9ff]">PRECISION.</span> <span className="text-[#d4af37]">PERFORMANCE.</span>{" "}
            <span className="text-[#ffd700]">RESULTS.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
