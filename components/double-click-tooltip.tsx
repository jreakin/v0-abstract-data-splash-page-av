"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DoubleClickTooltipProps {
  children: React.ReactNode
  tooltip: string
}

export function DoubleClickTooltip({ children, tooltip }: DoubleClickTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleDoubleClick = () => {
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 5000)
  }

  return (
    <span className="relative inline-block">
      <span
        onDoubleClick={handleDoubleClick}
        className="cursor-pointer hover:text-[#00D9FF] transition-colors duration-200"
        title="Double-click for definition"
      >
        {children}
      </span>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 pointer-events-none"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00D9FF]/30 blur-xl rounded-lg" />

              {/* Tooltip content */}
              <div className="relative px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#00D9FF]/50 shadow-2xl min-w-[300px]">
                <p className="text-sm text-gray-300 leading-relaxed">{tooltip}</p>

                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#1A1A1A] border-l border-t border-[#00D9FF]/50" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
