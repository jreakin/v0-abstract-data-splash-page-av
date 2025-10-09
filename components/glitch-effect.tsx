"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlitchEffectProps {
  children: ReactNode
  className?: string
  triggerOnHover?: boolean
}

export function GlitchEffect({ children, className = "", triggerOnHover = true }: GlitchEffectProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={
        triggerOnHover
          ? {
              textShadow: [
                "0 0 0 transparent",
                "2px 2px 0 #00d9ff, -2px -2px 0 #d4af37",
                "0 0 0 transparent",
                "-2px 2px 0 #00d9ff, 2px -2px 0 #d4af37",
                "0 0 0 transparent",
              ],
              transition: { duration: 0.3, times: [0, 0.25, 0.5, 0.75, 1] },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
