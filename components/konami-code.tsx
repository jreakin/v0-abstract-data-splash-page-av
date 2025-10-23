"use client"

import { useEffect, useState, RefObject } from "react"

// <CHANGE> Added useKonamiCode hook export
export function useKonamiCode(callback: () => void, ref?: RefObject<HTMLElement>) {
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

        const matches = konamiCode.every((key, index) => key === newKeys[index])

        if (matches) {
          callback()
          return []
        }

        return newKeys
      })
    }

    const element = ref?.current || window
    element.addEventListener("keydown", handleKeyDown as any)
    return () => element.removeEventListener("keydown", handleKeyDown as any)
  }, [callback, ref])
}

export function KonamiCode() {
  const [showMessage, setShowMessage] = useState(false)

  // <CHANGE> Using the hook internally
  useKonamiCode(() => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 5000)
  })

  if (!showMessage) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none animate-fade-in-up">
      <div className="relative">
        {/* Massive glow effect */}
        <div className="absolute inset-0 bg-[#00D9FF]/50 blur-[100px] animate-pulse" />

        {/* Message box */}
        <div className="relative px-12 py-8 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#00D9FF] shadow-2xl animate-scale-in">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce-slow">🎉</div>
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
        </div>
      </div>
    </div>
  )
}
