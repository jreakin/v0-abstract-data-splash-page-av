"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { KonamiCode } from "@/components/konami-code"

export default function NotFound() {
  const [timeWasted, setTimeWasted] = useState(0)
  const [probability, setProbability] = useState(73.5)
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeWasted((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const probTimer = setInterval(() => {
      setProbability((prev) => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 2)))
    }, 2000)
    return () => clearInterval(probTimer)
  }, [])

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 100)
    }, 3000)
    return () => clearInterval(glitchTimer)
  }, [])

  return (
    <>
      <KonamiCode />
      <div className="relative min-h-screen bg-black text-white p-8 font-mono overflow-hidden">
        {/* Time Wasted Counter */}
        <div className="absolute top-8 right-8 text-right">
          <div className="text-sm text-gray-500">Time wasted here:</div>
          <div className="text-2xl text-[#00D9FF] font-bold">{timeWasted}s</div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto pt-20 space-y-8">
          {/* 404 Header with Glitch Effect */}
          <div className="text-center space-y-4">
            <h1
              className={`text-9xl font-bold text-[#00D9FF] select-none cursor-pointer transition-all ${
                glitchActive ? "animate-pulse scale-105" : ""
              }`}
              style={{
                textShadow: glitchActive
                  ? "0 0 10px #00D9FF, 0 0 20px #00D9FF, 2px 2px 0 #ff0000, -2px -2px 0 #00ff00"
                  : "0 0 10px #00D9FF",
              }}
            >
              404
            </h1>
            <h2 className="text-3xl font-bold text-[#00D9FF] tracking-wider">SYSTEM ANOMALY DETECTED</h2>
            <p className="text-xl text-gray-400">
              This URL leads nowhere. Kind of like Brad's optimization strategies.
            </p>
          </div>

          {/* Probability Indicator */}
          <div className="text-center">
            <p className="text-lg text-yellow-400">
              Probability you meant to come here: <span className="font-bold">{probability.toFixed(2)}%</span>
            </p>
          </div>

          {/* Terminal Window */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 ml-4">system-diagnostics.sh</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-3 text-sm">
              <div className="text-red-400">ERROR 404: Resource not found</div>
              <div className="text-[#00D9FF]">$ diagnose --verbose --deep-scan</div>
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Scanning primary database...</span>
                  <span className="text-green-400">[████████████] 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Checking backup servers...</span>
                  <span className="text-green-400">[████████████] 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Consulting the void...</span>
                  <span className="text-green-400">[████████████] 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Analyzing quantum fluctuations...</span>
                  <span className="text-green-400">[████████████] 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Asking Parscale if he broke it...</span>
                  <span className="text-red-400">[████] TIMEOUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Checking with Axiom...</span>
                  <span className="text-green-400">[████████████] 100%</span>
                </div>
              </div>
              <div className="mt-4 text-yellow-400">
                &gt; Yeah, they break everything because they're awful at everything.
              </div>
              <div className="mt-4 text-[#00D9FF] font-bold">
                DIAGNOSIS: Page does not exist. Unlike our engineering standards.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-8">
            <Link
              href="/"
              className="px-8 py-3 bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-bold rounded-md transition-all transform hover:scale-105"
            >
              RETURN TO REALITY
            </Link>
            <Link
              href="/competitors"
              className="px-8 py-3 border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black font-bold rounded-md transition-all transform hover:scale-105"
            >
              VIEW ACTUAL ENGINEERING
            </Link>
            <a
              href="mailto:support@abstractdata.io"
              className="px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-md transition-all transform hover:scale-105"
            >
              REPORT BUG
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
