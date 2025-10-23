"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Gauge, Target, Zap, Clock } from "lucide-react"
import { useEffect, useRef } from "react"

export function PerformanceMetrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const xTransform0 = useTransform(mouseX, [-50, 50], [0, 0])
  const yTransform0 = useTransform(mouseY, [-50, 50], [0, 0])
  const xTransform1 = useTransform(mouseX, [-50, 50], [-3, 3])
  const yTransform1 = useTransform(mouseY, [-50, 50], [-2, 2])
  const xTransform2 = useTransform(mouseX, [-50, 50], [-6, 6])
  const yTransform2 = useTransform(mouseY, [-50, 50], [-4, 4])
  const xTransform3 = useTransform(mouseX, [-50, 50], [-9, 9])
  const yTransform3 = useTransform(mouseY, [-50, 50], [-6, 6])

  const transforms = [
    { x: xTransform0, y: yTransform0 },
    { x: xTransform1, y: yTransform1 },
    { x: xTransform2, y: yTransform2 },
    { x: xTransform3, y: yTransform3 },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const metrics = [
    {
      icon: Target,
      label: "Data Accuracy",
      ours: "99.7%",
      theirs: "68-85%",
      advantage: "+14-31 points",
      color: "#00d9ff",
    },
    {
      icon: Clock,
      label: "Processing Speed",
      ours: "6 minutes",
      theirs: "3-5 hours",
      advantage: "30-50x faster",
      color: "#d4af37",
    },
    {
      icon: Zap,
      label: "API Response Time",
      ours: "< 100ms",
      theirs: "2-5 seconds",
      advantage: "20-50x faster",
      color: "#00d9ff",
    },
    {
      icon: Gauge,
      label: "Test Coverage",
      ours: "78%",
      theirs: "25-40%",
      advantage: "+38-53 points",
      color: "#d4af37",
    },
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-[#00d9ff] to-transparent"
            style={{
              left: `${(i * 100) / 30}%`,
              bottom: 0,
            }}
            animate={{
              height: [20, 60 + Math.random() * 100, 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
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
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">The Numbers </span>
            <span className="text-[#00d9ff]">Don't Lie</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-proven performance metrics from enterprise-scale deployments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 40,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                x: transforms[index].x,
                y: transforms[index].y,
              }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#00d9ff]/50 transition-colors shadow-2xl"
            >
              <motion.div whileHover={{ scale: 1.2, rotateZ: 10 }} transition={{ duration: 0.3 }}>
                <metric.icon className="w-8 h-8 mb-4" style={{ color: metric.color }} />
              </motion.div>
              <h3 className="text-sm text-gray-400 mb-4">{metric.label}</h3>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Us</div>
                  <div className="text-2xl font-bold" style={{ color: metric.color }}>
                    {metric.ours}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Them</div>
                  <div className="text-xl font-bold text-[#8b2635] line-through">{metric.theirs}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2a2a2a]">
                <div className="text-sm font-bold text-[#d4af37]">{metric.advantage}</div>
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
          <div className="inline-block bg-gradient-to-r from-[#00d9ff]/10 to-[#d4af37]/10 border border-[#00d9ff]/30 rounded-lg p-8 max-w-3xl">
            <p className="text-lg text-gray-300 mb-2">
              <span className="text-[#00d9ff] font-bold">99.7% data accuracy</span> compared to industry average of
              70-85%
            </p>
            <p className="text-sm text-gray-400">Validated across millions of production records</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
