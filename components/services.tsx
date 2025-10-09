"use client"

import { Code2, Database, Brain, Zap, Shield, Gauge, Smartphone, Glasses } from "lucide-react"
import { motion } from "framer-motion"
import { TextDecode } from "@/components/text-decode"
import { ParallaxDepth } from "@/components/parallax-depth"
import { useState, useEffect } from "react"

const services = [
  {
    icon: Code2,
    title: "CUSTOM DEVELOPMENT",
    description: "Enterprise-grade systems built for scale and performance",
    details: "Bespoke solutions engineered to your exact specifications",
    gradient: "from-[#d4af37] to-[#ffd700]",
    tiltX: 5,
    tiltY: 5,
    glowColor: "#d4af37",
  },
  {
    icon: Database,
    title: "DATA ENGINEERING",
    description: "Advanced pipelines processing millions of records at 5M+ per hour",
    details: "Intelligent architectures with 96.3% accuracy and 98.5% automation",
    gradient: "from-[#00d9ff] to-[#00f0ff]",
    tiltX: -5,
    tiltY: 5,
    glowColor: "#00d9ff",
  },
  {
    icon: Smartphone,
    title: "SWIFT & iOS DEVELOPMENT",
    description: "Native performance for next-generation mobile platforms",
    details: "Building for 2030's devices with Vision Pro and spatial computing",
    gradient: "from-[#d4af37] to-[#00d9ff]",
    tiltX: 5,
    tiltY: -5,
    glowColor: "#00d9ff",
  },
  {
    icon: Glasses,
    title: "AR/MIXED REALITY",
    description: "Spatial computing and immersive interface development",
    details: "Future-proof solutions for Vision Pro and emerging platforms",
    gradient: "from-[#00d9ff] to-[#8b2635]",
    tiltX: -5,
    tiltY: -5,
    glowColor: "#8b2635",
  },
  {
    icon: Brain,
    title: "AI INTEGRATION",
    description: "Sophisticated automation reducing manual work by 98.5%",
    details: "Machine learning systems with self-healing capabilities and 26.6x ROI",
    gradient: "from-[#8b2635] to-[#d4af37]",
    tiltX: 8,
    tiltY: 3,
    glowColor: "#d4af37",
  },
  {
    icon: Zap,
    title: "PERFORMANCE OPTIMIZATION",
    description: "10-50x faster than traditional approaches",
    details: "Process 5M records per hour with 100M+ record capacity",
    gradient: "from-[#ffd700] to-[#00d9ff]",
    tiltX: -8,
    tiltY: 3,
    glowColor: "#ffd700",
  },
  {
    icon: Shield,
    title: "QUALITY ASSURANCE",
    description: "Multi-stage validation with 78% test coverage ensuring data integrity",
    details: "Automated quality control with AI-powered anomaly detection",
    gradient: "from-[#00d9ff] to-[#8b2635]",
    tiltX: 3,
    tiltY: 8,
    glowColor: "#00d9ff",
  },
  {
    icon: Gauge,
    title: "CONTINUOUS IMPROVEMENT",
    description: "53% cost reduction through iterative optimization",
    details: "Self-maintaining systems that get better and more efficient over time",
    gradient: "from-[#d4af37] to-[#8b2635]",
    tiltX: -3,
    tiltY: 8,
    glowColor: "#8b2635",
  },
]

export function Services() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section
      className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden"
      style={{ containerType: "inline-size" }}
    >
      <ParallaxDepth variant="geometric" intensity={0.8} />

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-grid" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path
                d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
                fill="none"
                stroke="rgba(212, 175, 55, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-glow-gold px-4"
          style={{ fontFamily: "var(--font-orbitron)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#d4af37] bg-clip-text text-transparent">
            <TextDecode text="CAPABILITIES" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-visible">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-morph p-8 rounded-lg relative group hover:scale-105 transition-all duration-300 cursor-pointer container-responsive"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={
                isMobile
                  ? { scale: 1.02 }
                  : {
                      y: -10,
                      rotateX: service.tiltY,
                      rotateY: service.tiltX,
                      scale: 1.02,
                    }
              }
              style={{
                willChange: "transform",
                perspective: 1000,
                overflow: "visible",
                containerType: "inline-size",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity rounded-lg blur-2xl"
                style={{
                  background: `radial-gradient(circle at center, ${service.glowColor}, transparent)`,
                  transform: "scale(1.2)",
                }}
              />

              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity rounded-lg`}
              />

              <div className="absolute inset-0 holographic animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

              <svg
                className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"
                viewBox="0 0 100 100"
              >
                <motion.path
                  d="M 0 50 L 30 50 L 30 20 L 60 20"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <defs>
                  <linearGradient id={`gradient-${index}`}>
                    <stop offset="0%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#00d9ff" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 hexagon bg-gradient-to-br ${service.gradient} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 hexagon bg-black/50 backdrop-blur-sm" />
                    <service.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-3 text-center tracking-wider px-2"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-2 text-sm font-medium">
                  {service.description}
                </p>
                <p className="text-gray-500 text-center leading-relaxed text-xs">{service.details}</p>
              </div>

              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37] opacity-50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37] opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
