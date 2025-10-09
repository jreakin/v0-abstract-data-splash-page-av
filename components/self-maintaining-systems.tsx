"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Activity } from "lucide-react"

export function SelfMaintainingSystems() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Autonomous Diagnostics",
      description:
        "Not just monitoring—true artificial intelligence that detects anomalies, diagnoses root causes, and generates comprehensive diagnostic reports with zero human input. This is what Fortune 500 companies dream about.",
    },
    {
      icon: Zap,
      title: "Zero-Touch Operations at Scale",
      description:
        "Automatic dependency management, intelligent lockfile synchronization, version conflict resolution, and deployment orchestration. Completely autonomous. Most DevOps teams can't achieve this with 10 engineers.",
    },
    {
      icon: Shield,
      title: "Self-Healing Production Systems",
      description:
        "Advanced recovery algorithms that don't just restart services—they analyze failure patterns, implement fixes, and evolve the system to prevent recurrence. This is Level 4 CI/CD maturity. Most companies never get past Level 2.",
    },
    {
      icon: Activity,
      title: "Predictive Intelligence Layer",
      description:
        "24/7 monitoring across every workflow, every process, every integration. Machine learning models predict failures before they happen. Issues are resolved before they become problems.",
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #00D9FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 217, 255, 0.3)",
                "0 0 40px rgba(0, 217, 255, 0.5)",
                "0 0 20px rgba(0, 217, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono">
              LEVEL 4 CI/CD MATURITY • AUTONOMOUS OPERATIONS
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Orbitron']">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Systems That Maintain Themselves
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            This isn't automation. This is{" "}
            <span className="text-cyan-400 font-bold">artificial intelligence running your entire DevOps pipeline</span>
            . While competitors are still manually deploying code and investigating failures, our systems{" "}
            <span className="text-cyan-400 font-bold">diagnose themselves, heal themselves, and evolve themselves</span>
            .
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Level 4 CI/CD maturity. Most Fortune 500 companies are stuck at Level 1-2. We're operating in a different
            dimension entirely.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />

              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-cyan-500/20 rounded-lg p-8 backdrop-blur-sm group-hover:border-cyan-500/40 transition-all duration-300">
                {/* Hexagonal icon background */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white font-['Orbitron']">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* The difference section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-xl" />

          <div className="relative bg-gradient-to-br from-[#1A1A1A]/80 to-[#0A0A0A]/80 border border-cyan-500/30 rounded-lg p-12 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Traditional approach */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-400 font-['Orbitron']">Everyone Else</h3>
                <ul className="space-y-4">
                  {[
                    "Manual dependency updates (hours wasted)",
                    "Engineers investigate every failure",
                    "Documentation always outdated",
                    "Reactive firefighting mode",
                    "Constant human babysitting required",
                    "Downtime measured in hours",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-400"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Abstract Data approach */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-['Orbitron']">Abstract Data</h3>
                <ul className="space-y-4">
                  {[
                    "AI auto-updates everything (zero touch)",
                    "Systems diagnose and fix themselves",
                    "Self-documenting, always current",
                    "Predictive healing before failures occur",
                    "Humans only alerted for strategic decisions",
                    "Downtime measured in milliseconds",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-cyan-500/20 text-center"
            >
              <p className="text-3xl text-cyan-400 font-bold font-['Orbitron'] mb-3">
                This Is What The Future Looks Like
              </p>
              <p className="text-xl text-gray-300 mb-2">
                A DevOps engineer in code. Monitoring, detecting, diagnosing, fixing, documenting, and evolving—all
                without human intervention.
              </p>
              <p className="text-lg text-gray-400">
                They're still manually deploying. We're already three generations ahead.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
