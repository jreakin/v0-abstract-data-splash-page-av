"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Capabilities" },
  { id: "advantage", label: "Our Advantage" },
  { id: "engineering", label: "Engineering" },
  { id: "results", label: "Results" },
  { id: "competition", label: "Competition" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "architecture", label: "Architecture" },
  { id: "under-hood", label: "Under the Hood" },
  { id: "self-maintaining", label: "Self-Maintaining" },
  { id: "future", label: "Built for 2030" },
]

export function HudNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* Progress bar */}
      <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00d9ff]/30 to-transparent">
        <motion.div
          className="w-full bg-gradient-to-b from-[#00d9ff] to-[#d4af37]"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Section nodes */}
      <div className="relative flex flex-col items-center gap-6 py-4">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id
          const isHovered = hoveredSection === section.id

          return (
            <div key={section.id} className="relative">
              {/* Node */}
              <motion.button
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className="relative w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? "linear-gradient(135deg, #00d9ff, #d4af37)" : "rgba(255, 255, 255, 0.3)",
                  boxShadow: isActive ? "0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)" : "none",
                }}
                whileHover={{ scale: 1.5 }}
                animate={{
                  scale: isActive ? 1.3 : 1,
                }}
              >
                {/* Pulse effect for active section */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#00d9ff]"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.8, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Scanline effect */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-white to-transparent opacity-50"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                )}
              </motion.button>

              {/* Label on hover */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  >
                    <div className="glass-morph px-4 py-2 rounded-lg border border-[#00d9ff]/30 backdrop-blur-md">
                      <div className="absolute inset-0 holographic-enhanced rounded-lg" />
                      <span
                        className="relative text-sm font-medium text-[#00d9ff]"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {section.label}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Separator */}
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-2" />

        {/* Client Portal Button */}
        <div className="relative">
          <motion.a
            href="https://books.zohosecure.com/portal/abstractdatallc/signin"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredSection("portal")}
            onMouseLeave={() => setHoveredSection(null)}
            className="relative w-3 h-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #d4af37, #ffd700)",
              boxShadow: "0 0 15px rgba(212, 175, 55, 0.6)",
            }}
            whileHover={{ scale: 1.5 }}
          >
            <ExternalLink className="w-2 h-2 text-[#0a0a0a]" />

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#d4af37]"
              animate={{
                scale: [1, 2, 2],
                opacity: [0.8, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          </motion.a>

          {/* Portal label on hover */}
          <AnimatePresence>
            {hoveredSection === "portal" && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
              >
                <div className="glass-morph px-4 py-2 rounded-lg border border-[#d4af37]/30 backdrop-blur-md">
                  <div className="absolute inset-0 holographic-enhanced rounded-lg" />
                  <span
                    className="relative text-sm font-medium text-[#d4af37]"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    Client Portal
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
