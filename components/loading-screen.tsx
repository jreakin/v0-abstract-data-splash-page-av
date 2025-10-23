"use client"

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

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] h-[100dvh] w-[100dvw] overflow-hidden backdrop-blur-xl flex items-center justify-center animate-fade-out"
      style={{ animationDelay: "1s", animationFillMode: "forwards" }}
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
          <path
            d="M 0 200 L 200 200 L 200 400 L 400 400 L 400 600"
            stroke="url(#circuit-load-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animate-circuit-flow"
          />
          <path
            d="M 1920 200 L 1720 200 L 1720 400 L 1520 400 L 1520 600"
            stroke="url(#circuit-load-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animate-circuit-flow"
            style={{ animationDelay: "0.3s" }}
          />
          <path
            d="M 960 0 L 960 300 L 1200 300 L 1200 600"
            stroke="url(#circuit-load-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="animate-circuit-flow"
            style={{ animationDelay: "0.6s" }}
          />
        </svg>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00d9ff] rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 glow-gold rounded-full blur-3xl opacity-50" />
          <Image
            src="/abstract-data-logo.png"
            alt="Abstract Data"
            width={200}
            height={200}
            className="w-48 h-48 relative z-10 animate-glow-pulse"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div
            className="text-2xl font-bold text-[#00d9ff] tracking-wider"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            INITIALIZING SYSTEMS
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-black/50 rounded-full overflow-hidden border border-[#00d9ff]/30 mx-auto">
            <div
              className="h-full bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-[#00d9ff] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress percentage */}
          <div className="text-sm text-gray-400 font-mono">{progress}%</div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#00d9ff] opacity-50 animate-scale-in" />
      <div
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#d4af37] opacity-50 animate-scale-in"
        style={{ animationDelay: "0.1s" }}
      />
      <div
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#d4af37] opacity-50 animate-scale-in"
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#00d9ff] opacity-50 animate-scale-in"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  )
}
