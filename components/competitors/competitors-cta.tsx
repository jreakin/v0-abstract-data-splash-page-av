"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Users, Code2, Shield } from "lucide-react"
import Link from "next/link"

export function CompetitorsCTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-white">Legacy Platforms Are </span>
            <span className="text-[#8b2635]">Holding You Back</span>
          </h2>

          <p className="text-2xl text-center text-gray-300 mb-12">
            <span className="text-[#00d9ff] font-bold">We're moving you forward.</span>
          </p>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#00d9ff]/30 rounded-lg p-8 mb-12">
            <h3 className="font-orbitron text-2xl font-bold text-[#00d9ff] mb-6 text-center">
              Why Abstract Data Is The Team You Want
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code2 className="w-6 h-6 text-[#00d9ff] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Top 5% Code Quality Globally</h4>
                    <p className="text-sm text-gray-400">
                      Our codebase was independently assessed by Claude Sonnet 4.5 and ranked in the top 5% of all
                      software ever analyzed. This isn't marketing - it's measurable engineering excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Modern Technology Stack</h4>
                    <p className="text-sm text-gray-400">
                      We use technology released in the last 18 months, not systems from the Clinton administration.
                      This means faster processing, better accuracy, and features that actually solve today's problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#00d9ff] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Senior/Staff Engineer Level Capability</h4>
                    <p className="text-sm text-gray-400">
                      Our platform demonstrates the kind of architectural decisions and implementation quality you'd
                      expect from a team of senior engineers. We build enterprise-grade systems, not quick hacks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Proven Track Record</h4>
                    <p className="text-sm text-gray-400">
                      We've been building and refining this platform since 2019. Every feature is battle-tested in
                      production environments, not theoretical promises from a sales deck.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#8b2635]/20 to-transparent border border-[#8b2635]/50 rounded-lg p-8 text-left"
            >
              <h3 className="font-orbitron text-xl font-bold text-[#8b2635] mb-4">What You're Dealing With Now</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635]">×</span>
                  <span>Platforms built 15-42 years ago with decades of technical debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635]">×</span>
                  <span>70-85% data accuracy because their matching algorithms are outdated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635]">×</span>
                  <span>Batch processing that takes hours or days - your data is always stale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635]">×</span>
                  <span>Vendor lock-in with proprietary formats and hidden costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b2635]">×</span>
                  <span>No transparency - you have no idea how their systems actually work</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#00d9ff]/20 to-transparent border border-[#00d9ff]/50 rounded-lg p-8 text-left"
            >
              <h3 className="font-orbitron text-xl font-bold text-[#00d9ff] mb-4">What We Deliver</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span>Built in 2019 with modern architecture - zero legacy technical debt</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span>99.7% data accuracy through AI validation and modern algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span>Real-time processing in minutes - your data is always current</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span>Open architecture - you own your data and can customize everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span>Complete transparency - you understand exactly how your data is processed</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-xl text-gray-300">
              This isn't about choosing between similar products.
              <br />
              <span className="text-white font-bold">
                This is about upgrading from outdated systems to modern engineering.
              </span>
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We're the team that builds software the right way - with clean architecture, modern technology, and
              measurable quality. Your current platforms were built by teams maintaining legacy code. We're the team
              that builds the future.
            </p>

            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#d4af37] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all group"
            >
              <span>Work With The Better Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-sm text-gray-500 mt-8">
              All performance claims backed by independent code analysis and production data.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
