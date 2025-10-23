"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

export default function Custom404Page() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [timeWasted, setTimeWasted] = useState(0)
  const [probability, setProbability] = useState(100)
  const [clickCount, setClickCount] = useState(0)
  const [showBugReport, setShowBugReport] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [inputEnabled, setInputEnabled] = useState(false)
  const [terminalMinimized, setTerminalMinimized] = useState(false)
  const [terminalMaximized, setTerminalMaximized] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalOutputRef = useRef<HTMLDivElement>(null)

  const errorVariations = [
    "You've accessed a non-existent endpoint. Our systems are bulletproof—this URL, however, is not.",
    "404: The only thing we can't engineer is a page that was never built.",
    "Error: Page not found. Unlike our uptime, which is always found.",
    "This URL leads nowhere. Kind of like Brad's optimization strategies.",
    "Lost? Our navigation works perfectly. Can't say the same for yours.",
    "Page missing. Our fault for not building it. Your fault for finding it.",
    "This endpoint doesn't exist. Much like reasonable timelines from other agencies.",
  ]
  const [errorMessage] = useState(() => errorVariations[Math.floor(Math.random() * errorVariations.length)])

  const terminalOutput = [
    "$ locate /requested-page",
    "ERROR 404: Resource not found",
    "$ diagnose --verbose --deep-scan",
    "Scanning primary database... [████████████████████] 100%",
    "Checking backup servers... [████████████████████] 100%",
    "Consulting the void... [████████████████████] 100%",
    "Analyzing quantum fluctuations... [████████████████████] 100%",
    "Asking Parscale if he broke it... [████░░░░░░░░░░░░░░░░] TIMEOUT",
    "Checking with Axiom... [████████████████████] 100%",
    "Response: Yeah, they break everything because they're awful at everything.",
    "",
    "DIAGNOSIS: Page does not exist. Unlike our engineering standards.",
    "",
    "$ stack-trace --show-all",
    "  at NonExistentPage.render() [universe.js:404]",
    "  at UserNavigation.fail() [browser.js:1]",
    "  at Reality.check() [existence.js:undefined]",
    "  at Brad.writeCode() [legacy-system.js:💩]",
    "",
    "$ suggest-alternative --smart",
    "SUGGESTION: Try a URL that actually exists.",
    "Did you mean: /home ? /services ? /contact ?",
    "Or literally any other valid page?",
    "",
    "$ calculate-probability",
    "Probability you meant to come here: 0.003%",
    "Probability this was user error: 99.997%",
    "",
    "$ return-home --recommended",
    "Type 'help' for available commands...",
  ]

  useEffect(() => {
    if (!mounted) return
    const timer = setInterval(() => {
      setTimeWasted((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setProbability((prev) => Math.max(0.001, prev * 0.95))
    }, 500)
    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < terminalOutput.length) {
        setTerminalLines((prev) => [...prev, terminalOutput[currentLine]])
        currentLine++
      } else {
        clearInterval(interval)
        setInputEnabled(true)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight
    }
  }, [terminalLines])

  const handle404Click = () => {
    setClickCount((prev) => prev + 1)
    const messages = [
      "Clicking won't make the page appear.",
      "Still 404. Nice try though.",
      "You're persistent. We respect that.",
      "The page is still missing. Unlike our attention to detail.",
      "At this point you're just wasting time. (See counter above)",
    ]
    const message = messages[Math.min(clickCount, messages.length - 1)]
    setTerminalLines((prev) => [...prev, "", `> ${message}`])
  }

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    const command = userInput.toLowerCase().trim()
    setTerminalLines((prev) => [...prev, "", `$ ${userInput}`])

    const responses: Record<string, string> = {
      help: "Available commands: help, home, status, blame, insult, coffee",
      home: "Redirecting to home... Just kidding. Use the buttons below.",
      status: "System Status: Perfect. Your navigation skills: Not so much.",
      blame: "Analyzing... Conclusion: 99.7% user error, 0.3% cosmic rays.",
      insult: "We don't insult users. We just state facts about their URLs.",
      coffee: "Error: Coffee machine is working better than your navigation.",
      brad: "Brad is currently unavailable. His code, however, is permanently broken.",
      sudo: "Nice try. You don't have root access to reality.",
    }

    const response = responses[command] || `Command not found: ${command}. Type 'help' for available commands.`
    setTerminalLines((prev) => [...prev, response])
    setUserInput("")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 font-mono">
      {/* Time Wasted Counter */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 text-right z-50">
        <div className="text-xs md:text-sm text-gray-500">Time wasted here:</div>
        <div className="text-xl md:text-2xl text-[#00f0ff] font-bold">{timeWasted}s</div>
      </div>

      <div className="max-w-6xl mx-auto pt-12 md:pt-20">
        {/* 404 Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-6xl md:text-9xl font-bold text-[#00f0ff] mb-4 cursor-pointer select-none transition-all hover:scale-105"
            style={{
              textShadow: "0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 60px #00f0ff",
              animation: "glitch 3s infinite",
            }}
            onClick={handle404Click}
          >
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-[#00f0ff] mb-4 tracking-wider">SYSTEM ANOMALY DETECTED</h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">{errorMessage}</p>
        </div>

        {/* Probability Indicator */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-lg text-[#ffd700]">
            Probability you meant to come here:{" "}
            <span className="font-bold">{probability < 1 ? probability.toFixed(3) : probability.toFixed(2)}%</span>
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className={`bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#00f0ff]/30 shadow-2xl mb-8 transition-all ${
            terminalMinimized ? "h-12" : terminalMaximized ? "h-[80vh]" : "h-auto"
          }`}
        >
          {/* Terminal Header */}
          <div className="bg-[#0f0f0f] px-4 py-2 flex items-center justify-between border-b border-[#00f0ff]/20">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBugReport(true)}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                aria-label="Close"
              />
              <button
                onClick={() => setTerminalMinimized(!terminalMinimized)}
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                aria-label="Minimize"
              />
              <button
                onClick={() => setTerminalMaximized(!terminalMaximized)}
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                aria-label="Maximize"
              />
            </div>
            <div className="text-xs md:text-sm text-gray-400">system-diagnostics.sh</div>
            <div className="w-16" />
          </div>

          {/* Terminal Content */}
          {!terminalMinimized && (
            <div className="p-4 md:p-6">
              <div
                ref={terminalOutputRef}
                className={`space-y-1 text-xs md:text-sm overflow-y-auto ${
                  terminalMaximized ? "max-h-[calc(80vh-8rem)]" : "max-h-96"
                }`}
              >
                {terminalLines
                  .filter((line) => line !== undefined)
                  .map((line, i) => (
                    <div
                      key={i}
                      className={`${
                        line?.startsWith("$")
                          ? "text-[#00f0ff]"
                          : line?.startsWith("ERROR") || line?.includes("TIMEOUT")
                            ? "text-red-400"
                            : line?.startsWith(">")
                              ? "text-yellow-400"
                              : line?.includes("100%")
                                ? "text-green-400"
                                : "text-gray-300"
                      }`}
                    >
                      {line}
                    </div>
                  ))}
              </div>

              {/* Command Input */}
              {inputEnabled && (
                <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
                  <span className="text-[#00f0ff]">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white text-xs md:text-sm"
                    placeholder="Type 'help' for commands..."
                    autoFocus
                  />
                </form>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <Link
            href="/"
            className="w-full md:w-auto px-6 md:px-8 py-3 bg-[#00f0ff] hover:bg-[#00d9ff] text-black font-bold rounded-md transition-all transform hover:scale-105 text-center"
          >
            RETURN TO REALITY
          </Link>
          <Link
            href="/competitors"
            className="w-full md:w-auto px-6 md:px-8 py-3 border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black font-bold rounded-md transition-all transform hover:scale-105 text-center"
          >
            VIEW ACTUAL ENGINEERING
          </Link>
          <button
            onClick={() => setShowBugReport(true)}
            className="w-full md:w-auto px-6 md:px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-md transition-all transform hover:scale-105"
          >
            REPORT BUG
          </button>
        </div>
      </div>

      {/* Bug Report Modal */}
      {showBugReport && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] border border-[#00f0ff]/30 rounded-lg p-6 md:p-8 max-w-md w-full">
            <h3 className="text-xl md:text-2xl font-bold text-[#00f0ff] mb-4">Report a Bug</h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Found a bug? That's impossible. Our code is perfect. But if you insist...
            </p>
            <div className="space-y-4">
              <a
                href="mailto:support@abstractdata.io?subject=Bug Report: 404 Page"
                className="block w-full px-6 py-3 bg-[#00f0ff] hover:bg-[#00d9ff] text-black font-bold rounded-md transition-all text-center"
              >
                Email Support
              </a>
              <button
                onClick={() => setShowBugReport(false)}
                className="block w-full px-6 py-3 border-2 border-gray-600 text-gray-400 hover:bg-gray-800 font-bold rounded-md transition-all"
              >
                Never Mind
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
