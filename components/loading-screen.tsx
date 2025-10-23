"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] h-[100dvh] w-[100dvw] overflow-hidden backdrop-blur-xl flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/95" />

          {/* Circuit background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circuit-load-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b2635" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Animated circuit paths */}
              <motion.path
                d="M 0 200 L 200 200 L 200 400 L 400 400 L 400 600"
                stroke="url(#circuit-load-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000, pathLength: 0 }}
                animate={{
                  strokeDashoffset: 0,
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M 1920 200 L 1720 200 L 1720 400 L 1520 400 L 1520 600"
                stroke="url(#circuit-load-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000, pathLength: 0 }}
                animate={{
                  strokeDashoffset: 0,
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M 960 0 L 960 300 L 1200 300 L 1200 600"
                stroke="url(#circuit-load-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000, pathLength: 0 }}
                animate={{
                  strokeDashoffset: 0,
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 glow-gold rounded-full blur-3xl opacity-50"
                animate={
                  progress === 100
                    ? {
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }
                    : {}
                }
                transition={progress === 100 ? { duration: 0.6 } : {}}
              />
              <Image
                src="/abstract-data-logo.png"
                alt="Abstract Data"
                width={200}
                height={200}
                className="w-48 h-48 relative z-10 animate-glow-pulse"
                priority
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="text-2xl font-bold text-[#00d9ff] tracking-wider"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                INITIALIZING SYSTEMS
              </div>

              {/* Progress bar */}
              <div className="w-64 h-2 bg-black/50 rounded-full overflow-hidden border border-[#00d9ff]/30 mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#00d9ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Progress percentage */}
              <div className="text-sm text-gray-400 font-mono">{progress}%</div>
            </motion.div>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#00d9ff]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#00d9ff]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
