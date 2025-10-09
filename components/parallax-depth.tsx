"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxDepthProps {
  variant?: "geometric" | "circuit" | "minimal"
  intensity?: number
}

export function ParallaxDepth({ variant = "geometric", intensity = 1 }: ParallaxDepthProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Different speeds for different layers (parallax effect)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100 * intensity])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200 * intensity])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300 * intensity])

  // Disable on mobile for performance
  if (isMobile) return null

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === "geometric" && (
        <>
          {/* Background layer - slowest */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#D4AF37]/30 rotate-45 rounded-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-[#00D9FF]/30 -rotate-12 rounded-3xl" />
          </motion.div>

          {/* Middle layer - medium speed */}
          <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 border-2 border-[#D4AF37]/40 rotate-12">
              <div className="absolute inset-4 border border-[#00D9FF]/40 rotate-45" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-48 h-48 border-2 border-[#00D9FF]/40 -rotate-45">
              <div className="absolute inset-4 border border-[#D4AF37]/40 -rotate-12" />
            </div>
          </motion.div>

          {/* Foreground layer - fastest */}
          <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-30">
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,5 90,30 90,70 50,95 10,70 10,30"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
            <svg className="absolute top-1/4 right-1/4 w-24 h-24" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#00D9FF" strokeWidth="2" opacity="0.6" />
            </svg>
          </motion.div>
        </>
      )}

      {variant === "circuit" && (
        <>
          {/* Background layer */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
              <circle cx="50" cy="50" r="5" fill="#D4AF37" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Middle layer */}
          <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-20">
            <svg className="absolute top-1/4 left-1/4 w-64 h-64" viewBox="0 0 100 100">
              <path
                d="M 10 50 L 40 50 L 40 20 L 70 20 L 70 80 L 90 80"
                stroke="#00D9FF"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <circle cx="40" cy="50" r="3" fill="#00D9FF" />
              <circle cx="40" cy="20" r="3" fill="#00D9FF" />
              <circle cx="70" cy="20" r="3" fill="#00D9FF" />
            </svg>
          </motion.div>

          {/* Foreground layer */}
          <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-30">
            <svg className="absolute bottom-1/3 right-1/3 w-48 h-48" viewBox="0 0 100 100">
              <path d="M 20 80 L 50 80 L 50 50 L 80 50" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.8" />
              <circle cx="50" cy="80" r="4" fill="#D4AF37" />
              <circle cx="50" cy="50" r="4" fill="#D4AF37" />
            </svg>
          </motion.div>
        </>
      )}

      {variant === "minimal" && (
        <>
          {/* Background layer */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <div className="absolute bottom-1/4 right-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent" />
          </motion.div>

          {/* Middle layer */}
          <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#00D9FF] to-transparent" />
          </motion.div>

          {/* Foreground layer */}
          <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4AF37] blur-sm" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#00D9FF] blur-sm" />
          </motion.div>
        </>
      )}
    </div>
  )
}
