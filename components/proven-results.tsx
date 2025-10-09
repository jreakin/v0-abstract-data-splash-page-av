"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { EnergyField } from "./energy-field"

const achievements = [
  {
    title: "Extreme Processing Speed",
    description: "5M+ records per hour processing capacity",
    impact: "What takes competitors weeks, we complete in hours",
  },
  {
    title: "Massive Time Savings",
    description: "3,990 hours of manual labor eliminated",
    impact: "98.5% reduction in human processing time",
  },
  {
    title: "Cost Transformation",
    description: "53% cost reduction over 4 years",
    impact: "Continuous optimization delivering compounding savings",
  },
  {
    title: "Exceptional Accuracy",
    description: "96.3% match rate with fuzzy logic algorithms",
    impact: "Industry-leading precision in data processing",
  },
  {
    title: "Proven Scale",
    description: "100M+ record processing capability",
    impact: "Battle-tested systems built for enterprise-scale operations",
  },
  {
    title: "Outstanding ROI",
    description: "26.6x monthly return on investment",
    impact: "Systems that pay for themselves many times over",
  },
]

const scanAnimations = [
  {
    // Box 0: Left to right, electric blue
    gradient: "bg-gradient-to-r from-[#00d9ff]/0 via-[#00d9ff]/20 to-[#00d9ff]/0",
    animate: { x: ["-100%", "100%"] },
    duration: 3,
  },
  {
    // Box 1: Right to left, gold
    gradient: "bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0",
    animate: { x: ["100%", "-100%"] },
    duration: 3.5,
  },
  {
    // Box 2: Top to bottom, electric blue
    gradient: "bg-gradient-to-b from-[#00d9ff]/0 via-[#00d9ff]/20 to-[#00d9ff]/0",
    animate: { y: ["-100%", "100%"] },
    duration: 2.8,
  },
  {
    // Box 3: Bottom to top, gold
    gradient: "bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0",
    animate: { y: ["100%", "-100%"] },
    duration: 3.2,
  },
  {
    // Box 4: Left to right, purple-blue mix
    gradient: "bg-gradient-to-r from-[#8b5cf6]/0 via-[#00d9ff]/20 to-[#8b5cf6]/0",
    animate: { x: ["-100%", "100%"] },
    duration: 2.5,
  },
  {
    // Box 5: Right to left, electric blue
    gradient: "bg-gradient-to-r from-[#00d9ff]/0 via-[#00d9ff]/25 to-[#00d9ff]/0",
    animate: { x: ["100%", "-100%"] },
    duration: 3.8,
  },
]

export function ProvenResults() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      <EnergyField />

      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 0 100 L 50 100 L 50 50 L 100 50" stroke="#d4af37" strokeWidth="2" fill="none" />
              <path d="M 100 50 L 150 50 L 150 100 L 200 100" stroke="#00d9ff" strokeWidth="2" fill="none" />
              <circle cx="50" cy="100" r="4" fill="#d4af37" />
              <circle cx="50" cy="50" r="4" fill="#d4af37" />
              <circle cx="100" cy="50" r="4" fill="#00d9ff" />
              <circle cx="150" cy="50" r="4" fill="#00d9ff" />
              <circle cx="150" cy="100" r="4" fill="#00d9ff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

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
              PROVEN RESULTS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real systems. Real data. Real impact. Our track record speaks for itself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="glass-morph p-8 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={`absolute inset-0 ${scanAnimations[index].gradient} rounded-lg`}
                animate={scanAnimations[index].animate}
                transition={{
                  duration: scanAnimations[index].duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 flex gap-4">
                {/* Check icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d9ff] to-[#d4af37] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-white mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-[#00d9ff] font-semibold mb-2 text-lg">{achievement.description}</p>
                  <p className="text-gray-400 leading-relaxed text-sm">{achievement.impact}</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37] opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="text-center mt-20 glass-morph p-8 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl text-gray-300 leading-relaxed mb-4">
            <span className="text-[#d4af37] font-bold">Relentless innovation.</span>{" "}
            <span className="text-[#00d9ff] font-bold">Millions</span> of records processed.{" "}
            <span className="text-[#ffd700] font-bold">Measurable</span> excellence at every step.
          </p>
          <p className="text-lg text-gray-500" style={{ fontFamily: "var(--font-orbitron)" }}>
            THIS IS WHAT EXCELLENCE LOOKS LIKE.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
