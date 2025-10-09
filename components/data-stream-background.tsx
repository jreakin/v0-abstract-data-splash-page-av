"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function DataStreamBackground() {
  const [streams, setStreams] = useState<Array<{ id: number; left: string; delay: number }>>([])

  useEffect(() => {
    const newStreams = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${10 + i * 12}%`,
      delay: Math.random() * 2,
    }))
    setStreams(newStreams)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 w-px h-full"
          style={{ left: stream.left }}
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: stream.delay,
            ease: "linear",
          }}
        >
          <div className="flex flex-col gap-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="text-[#00d9ff] text-xs font-mono opacity-60"
                style={{
                  textShadow: "0 0 5px rgba(0, 217, 255, 0.8)",
                }}
              >
                {Math.random().toString(36).substring(2, 6)}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
