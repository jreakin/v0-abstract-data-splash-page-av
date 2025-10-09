"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedGrid() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Perspective grid */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <motion.div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg)",
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Horizontal lines */}
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${(i / (isMobile ? 10 : 20)) * 100}%`,
                background: `linear-gradient(90deg, transparent, #00d9ff40, transparent)`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${(i / (isMobile ? 10 : 20)) * 100}%`,
                background: `linear-gradient(180deg, transparent, #d4af3740, transparent)`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1 + 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Glowing intersection points */}
      {!isMobile &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={`point-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#00d9ff" : "#d4af37",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "#00d9ff" : "#d4af37"}`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
    </div>
  )
}
