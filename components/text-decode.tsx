"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface TextDecodeProps {
  text: string
  className?: string
  delay?: number
}

export function TextDecode({ text, className = "", delay = 0 }: TextDecodeProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isDecoding, setIsDecoding] = useState(false)
  const [hasDecoded, setHasDecoded] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"

  useEffect(() => {
    const element = ref.current
    if (!element || hasDecoded) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasDecoded) {
            setIsDecoding(true)
            setHasDecoded(true)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasDecoded])

  useEffect(() => {
    if (!isDecoding) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join(""),
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsDecoding(false)
      }

      iteration += 1 / 3
    }, 30)

    return () => clearInterval(interval)
  }, [text, isDecoding])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      {displayText}
      {isDecoding && (
        <motion.span
          className="inline-block w-1 h-full bg-[#00d9ff] ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
    </motion.span>
  )
}
