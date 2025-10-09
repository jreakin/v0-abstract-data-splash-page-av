"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CodeRain() {
  const [columns, setColumns] = useState<Array<{ id: number; left: string; delay: number; chars: string[] }>>([])

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()=/\\|@#$%^&*".split("")
    const columnCount = typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 20

    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      id: i,
      left: `${(i / columnCount) * 100}%`,
      delay: Math.random() * 3,
      chars: Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]),
    }))
    setColumns(newColumns)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 flex flex-col gap-1"
          style={{ left: column.left }}
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: column.delay,
            ease: "linear",
          }}
        >
          {column.chars.map((char, i) => (
            <div
              key={i}
              className="text-[#00d9ff] text-xs font-mono"
              style={{
                textShadow: "0 0 8px rgba(0, 217, 255, 0.8)",
                opacity: 1 - i * 0.05,
              }}
            >
              {char}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
