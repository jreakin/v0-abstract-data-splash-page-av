"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])
  const rafRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const now = Date.now()
    if (now - lastUpdateRef.current < 16) return // Throttle to 60fps

    lastUpdateRef.current = now
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    setTrail((prev) => {
      const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: now }]
      return newTrail.slice(-5)
    })
  }, [])

  useEffect(() => {
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updateMousePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateMousePosition])

  if (!isVisible) return null

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#00d9ff]"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-screen"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="relative w-5 h-5">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#00d9ff] opacity-60 animate-ping" />
          {/* Inner dot */}
          <div className="absolute inset-2 rounded-full bg-[#00d9ff] shadow-[0_0_20px_#00d9ff]" />
        </div>
      </motion.div>
    </>
  )
}
