"use client"

import { motion, useMotionValue } from "framer-motion"
import { Calendar, AlertCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export function TechStackTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 30)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 30)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const competitors = [
    { name: "GOP Data Center (VoterVault)", year: 1999, age: 26, color: "#8b2635" },
    { name: "Aristotle", year: 1983, age: 42, color: "#8b2635" },
    { name: "NationBuilder", year: 2009, age: 16, color: "#8b2635" },
    { name: "Numinar", year: 2010, age: 15, color: "#8b2635" },
    { name: "i360 (Koch Network)", year: 2010, age: 15, color: "#8b2635" },
    { name: "Abstract Data VEP", year: 2019, age: 6, color: "#00d9ff" },
  ]

  return (
    <section
      ref={containerRef}
      className="py-24 relative bg-gradient-to-b from-transparent to-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-[#d4af37]/30 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-mono">Technology Age Comparison</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">If Your Campaign Tech Can </span>
            <span className="text-[#8b2635]">Buy Beer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            It's time for an upgrade. Most GOP platforms are older than the iPhone.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {competitors.map((competitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                z: 20,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                transform: `translateZ(${(42 - competitor.age) * 2}px)`,
              }}
              className={`relative bg-gradient-to-r ${
                competitor.name === "Abstract Data VEP"
                  ? "from-[#00d9ff]/20 to-transparent border-[#00d9ff]/50"
                  : "from-[#8b2635]/10 to-transparent border-[#8b2635]/30"
              } border rounded-lg p-6 shadow-2xl`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {competitor.name !== "Abstract Data VEP" && <AlertCircle className="w-5 h-5 text-[#8b2635]" />}
                  <div>
                    <h3 className="font-bold text-lg text-white">{competitor.name}</h3>
                    <p className="text-sm text-gray-400">Founded {competitor.year}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`text-3xl font-bold ${
                      competitor.name === "Abstract Data VEP" ? "text-[#00d9ff]" : "text-[#8b2635]"
                    }`}
                  >
                    {competitor.age} {competitor.age === 1 ? "year" : "years"}
                  </div>
                  <div className="text-sm text-gray-400">old</div>
                </div>
              </div>

              {/* Age bar */}
              <div className="mt-4 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(competitor.age / 42) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: competitor.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-[#d4af37]">Fun fact:</span> The iPhone was released in 2007. Most GOP platforms
            predate it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
