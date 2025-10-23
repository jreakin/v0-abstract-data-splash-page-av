"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Zap, TrendingUp } from "lucide-react"

export function CompetitorsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b2635]/10 border border-[#8b2635]/30 mb-8"
          >
            <AlertTriangle className="w-4 h-4 text-[#8b2635]" />
            <span className="text-sm text-[#8b2635] font-mono">Legacy Platforms Are Holding GOP Campaigns Back</span>
          </motion.div>

          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white">We're Not Just </span>
            <span className="text-[#00d9ff]">Better</span>
          </h1>

          <h2 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            <span className="text-white">We're </span>
            <span className="text-[#00d9ff] text-glow-cyan">Lightyears Ahead</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance leading-relaxed font-inter">
            GOP campaigns are stuck with platforms built when Bill Clinton was president. We're fixing that with
            technology released in the last 18 months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border border-[#00d9ff]/20 rounded-lg p-6 hover:border-[#00d9ff]/40 transition-colors"
            >
              <Zap className="w-8 h-8 text-[#00d9ff] mb-3 mx-auto" />
              <div className="text-4xl font-bold text-[#00d9ff] mb-2 font-orbitron">30-50x</div>
              <div className="text-sm text-gray-400 font-inter">Faster Processing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#0a0a0a] border border-[#00d9ff]/20 rounded-lg p-6 hover:border-[#00d9ff]/40 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-[#00d9ff] mb-3 mx-auto" />
              <div className="text-4xl font-bold text-[#00d9ff] mb-2 font-orbitron">96.3%</div>
              <div className="text-sm text-gray-400 font-inter">Match Accuracy</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#0a0a0a] border border-[#00d9ff]/20 rounded-lg p-6 hover:border-[#00d9ff]/40 transition-colors"
            >
              <div className="text-4xl font-bold text-[#00d9ff] mb-2 font-orbitron">Top 5%</div>
              <div className="text-sm text-gray-400 font-inter">Code Quality Globally</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
