"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedGrid } from "./animated-grid"

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Hero() {
  const { scrollY } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 150])
  const y2 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -100])
  const opacity = useTransform(scrollY, [0, 300], [1, isMobile ? 1 : 0])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <AnimatedGrid />

      <motion.div className="absolute inset-0 opacity-30" style={{ y: y1, willChange: "transform" }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path
                d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
                fill="none"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="0.5"
                className="animate-hexagon-pulse"
              />
            </pattern>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b2635" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />

          {/* Animated circuit paths */}
          <motion.path
            d="M 100 100 L 300 100 L 300 300 L 500 300"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.path
            d="M 1000 200 L 800 200 L 800 400 L 600 400"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: y2, willChange: "transform" }}
      >
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: "transform, opacity",
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
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity, willChange: "opacity" }}
      >
        <motion.div
          className="max-w-5xl mx-auto space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-glow-cyan tracking-wide"
            style={{ fontFamily: "var(--font-orbitron)" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-[#00d9ff]">NEXT-GENERATION DATA ENGINEERING</span>
          </motion.p>

          {/* Stats HUD */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: 98.5, suffix: "%", label: "PROCESSING TIME REDUCTION" },
              { value: 96.3, suffix: "%", label: "DATA MATCH ACCURACY" },
              { value: 26.6, suffix: "x", label: "RETURN ON INVESTMENT" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-morph p-6 rounded-lg glow-cyan relative overflow-hidden group hover:scale-105 transition-transform"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 holographic animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#00d9ff] mb-2"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400 tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
