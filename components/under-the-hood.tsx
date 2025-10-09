"use client"

import { motion } from "framer-motion"
import { Code2, Sparkles, Target, Workflow } from "lucide-react"

export function UnderTheHood() {
  const technicalDetails = [
    {
      icon: Workflow,
      title: "Multi-Stage Processing Pipeline",
      description:
        "Sophisticated data flow with intelligent routing, parallel processing, and automated quality gates at every stage. This architecture enables our 5M+ records per hour throughput and 100M+ record capacity.",
      metrics: ["10-50x faster", "96.3% accuracy", "Zero data loss"],
    },
    {
      icon: Sparkles,
      title: "Advanced Fuzzy Matching",
      description:
        "Proprietary algorithms combining Levenshtein distance, phonetic matching, and ML-based similarity scoring for superhuman accuracy. Powered by PyTorch and TensorFlow for continuous improvement.",
      metrics: ["Sub-millisecond", "Context-aware", "Self-improving"],
    },
    {
      icon: Target,
      title: "Automated Quality Control",
      description:
        "AI-powered validation systems with real-time anomaly detection, automated error correction, and continuous monitoring. Part of our Level 4 self-maintaining infrastructure that achieves 98.5% automation.",
      metrics: ["98.5% automation", "Real-time alerts", "Self-healing"],
    },
    {
      icon: Code2,
      title: "Production-Grade Code",
      description:
        "Top 5% code quality nationally. Clean architecture, comprehensive testing, and continuous integration with zero-downtime deployments. This quality enables our self-healing systems and autonomous operations.",
      metrics: ["78% test coverage", "Enterprise-grade", "Battle-tested"],
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[#00d9ff] text-glow-cyan"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            UNDER THE HOOD
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The algorithmic sophistication and engineering excellence that powers everything we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technicalDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="glass-morph p-8 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-[#00d9ff] opacity-0 group-hover:opacity-50 rounded-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                    "0 0 40px rgba(0, 217, 255, 0.5)",
                    "0 0 20px rgba(0, 217, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30">
                  <detail.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#d4af37]" style={{ fontFamily: "var(--font-orbitron)" }}>
                  {detail.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 text-[#00d9ff]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
