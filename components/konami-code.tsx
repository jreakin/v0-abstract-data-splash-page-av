"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function KonamiCode() {
  const [showMessage, setShowMessage] = useState(false)
  const [keys, setKeys] = useState<string[]>([])

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-10)

        // Check if the last 10 keys match the Konami code
        const matches = konamiCode.every((key, index) => key === newKeys[index])

        if (matches) {
          setShowMessage(true)
          setTimeout(() => setShowMessage(false), 5000)
          return []
        }

        return newKeys
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          <div className="relative">
            {/* Massive glow effect */}
            <div className="absolute inset-0 bg-[#00D9FF]/50 blur-[100px] animate-pulse" />

            {/* Message box */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative px-12 py-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#00D9FF] shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl font-bold text-[#00D9FF] mb-4 font-orbitron">Achievement Unlocked!</h3>
                <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                  Congrats! You just did something 99.8% of GOP 'engineers' couldn't figure out.
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
