"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export function ImmersiveHero() {
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]"
    >
      {/* 3D Grid Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: y1,
          x: mousePosition.x,
          rotateX: mousePosition.y * 0.1,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="3d-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0, 217, 255, 0.3)" strokeWidth="1" />
              </pattern>
              <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d4af37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#3d-grid)" />
          </svg>
        </div>
      </motion.div>

      {/* Floating Data Points */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: y2 }}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#d4af37" : "#8b2635",
              boxShadow: `0 0 20px ${i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#d4af37" : "#8b2635"}`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center" style={{ opacity }}>
        <motion.div
          className="max-w-6xl mx-auto space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Title with 3D Effect */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-orbitron)",
              transform: `translateZ(${mousePosition.x * 2}px) rotateY(${mousePosition.x * 0.5}deg)`,
              transformStyle: "preserve-3d",
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#00d9ff] animate-gradient-x">
              Why We're Better
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive, fact-based analysis of Abstract Data's platform versus Republican campaign technology.
            <br />
            <span className="text-[#00d9ff] font-semibold">Every claim is cited. Every comparison is documented.</span>
          </motion.p>

          {/* Key Stats in 3D Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "9/10", label: "Our Code Quality", color: "#00d9ff" },
              { value: "5.8/10", label: "GOP Average", color: "#8b2635" },
              { value: "99%", label: "Validation Accuracy", color: "#d4af37" },
              { value: "10+", label: "Platforms Analyzed", color: "#00d9ff" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                whileHover={{ scale: 1.05, z: 50 }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${i * 10}px)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 to-[#d4af37]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative glass-morph p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      color: stat.color,
                      textShadow: `0 0 20px ${stat.color}`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-[#00d9ff] rounded-full mx-auto flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-1.5 h-3 bg-[#00d9ff] rounded-full mt-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">Scroll to explore the analysis</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  )
}
