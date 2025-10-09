"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function CompetitionComparison() {
  const comparisons = [
    {
      category: "Processing Speed",
      them: "Manual, weeks of work",
      us: "10-50x faster, minutes not days",
    },
    {
      category: "Data Accuracy",
      them: "Error-prone, ~70-80%",
      us: "96.3% match accuracy",
    },
    {
      category: "Cost Efficiency",
      them: "High labor costs, no optimization",
      us: "53% cost reduction achieved",
    },
    {
      category: "Return on Investment",
      them: "Minimal, break-even at best",
      us: "26.6x monthly ROI",
    },
    {
      category: "Automation Level",
      them: "Mostly manual processes",
      us: "98.5% reduction in manual work",
    },
    {
      category: "Technology Stack",
      them: "Excel wizards pretending to be engineers",
      us: "Next-gen platforms (Swift, AR/MR, AI/ML)",
    },
    {
      category: "Cloud Infrastructure",
      them: "Still figuring out basic deployment",
      us: "Edge computing & distributed systems",
    },
    {
      category: "Code Quality",
      them: "White-labeled vendor software",
      us: "Top 5% code quality, written in-house",
    },
    {
      category: "Architecture",
      them: "Monolithic legacy systems",
      us: "Enterprise-grade microservices",
    },
    {
      category: "Innovation Cycle",
      them: "Stuck maintaining 2-year-old bugs",
      us: "Building for platforms that don't exist yet",
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-transparent bg-clip-text">
              Other GOP Engineers?
            </span>
            <br />
            <span className="text-white">Not Even in Our Rearview Mirror</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            While they're still trying to fix yesterday's problems that they created 2 years ago, we're building
            tomorrow's solutions. The gap isn't closing—it's widening.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="max-w-6xl mx-auto">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-4"
          >
            <div className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Metric</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 border border-red-900/50">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-red-400 font-semibold">Traditional Solutions</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-950/30 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                <Check className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Abstract Data</span>
              </div>
            </div>
          </motion.div>

          {/* Comparison rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-3 gap-4 mb-3"
            >
              {/* Category */}
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-[#00D9FF] rounded-full" />
                  <span className="text-white font-semibold pl-4">{item.category}</span>
                </div>
              </div>

              {/* Them */}
              <div className="flex items-center justify-center">
                <div className="w-full px-4 py-3 rounded-lg bg-red-950/20 border border-red-900/30 backdrop-blur-sm">
                  <p className="text-red-300/80 text-sm text-center">{item.them}</p>
                </div>
              </div>

              {/* Us */}
              <div className="flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-cyan-950/20 border border-cyan-500/50 backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="text-cyan-300 text-sm font-semibold text-center relative z-10">{item.us}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
