"use client"

import { motion } from "framer-motion"
import { TrendingDown, DollarSign } from "lucide-react"

export function CostComparison() {
  const costs = [
    { name: "Enterprise Legacy Platform A", cost: "$50-100k/yr", multiplier: "5-10x" },
    { name: "Enterprise Legacy Platform B", cost: "$30-75k/yr", multiplier: "3-7.5x" },
    { name: "Mid-Market Solution", cost: "$20-40k/yr", multiplier: "2-4x" },
    { name: "Modern SaaS Alternative", cost: "$15-25k/yr", multiplier: "1.5-2.5x" },
    { name: "Abstract Data Platform", cost: "$10k/yr", multiplier: "1.0x" },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
            <DollarSign className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-mono">Total Cost of Ownership</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Enterprise Quality at </span>
            <span className="text-[#d4af37]">Startup Prices</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Better software shouldn't cost more. It should cost less.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {costs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                item.name === "Abstract Data Platform"
                  ? "bg-gradient-to-r from-[#00d9ff]/20 to-transparent border-[#00d9ff]/50"
                  : "bg-gradient-to-r from-[#1a1a1a] to-transparent border-[#2a2a2a]"
              } border rounded-lg p-6`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-400">Annual licensing & operational costs</p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-3xl font-bold ${
                      item.name === "Abstract Data Platform" ? "text-[#00d9ff]" : "text-gray-300"
                    }`}
                  >
                    {item.cost}
                  </div>
                  <div
                    className={`text-sm ${item.name === "Abstract Data Platform" ? "text-[#d4af37]" : "text-[#8b2635]"}`}
                  >
                    {item.multiplier} {item.name !== "Abstract Data Platform" && "more expensive"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#d4af37]/10 to-[#00d9ff]/10 border border-[#d4af37]/30 rounded-lg p-8 max-w-3xl">
            <TrendingDown className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <p className="text-2xl font-bold text-white mb-2">80% Cost Reduction</p>
            <p className="text-gray-300 mb-4">Compared to legacy enterprise platforms</p>
            <p className="text-sm text-gray-400">Modern architecture eliminates expensive infrastructure overhead</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
