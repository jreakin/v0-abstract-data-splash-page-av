"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function EnergyField() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pulsing energy waves */}
      {[...Array(isMobile ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            width: "100px",
            height: "100px",
            borderColor: i % 2 === 0 ? "#00d9ff40" : "#d4af3740",
          }}
          animate={{
            width: ["100px", "800px"],
            height: ["100px", "800px"],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating energy particles */}
      {!isMobile &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#00d9ff" : i % 3 === 1 ? "#d4af37" : "#ffd700",
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
    </div>
  )
}
