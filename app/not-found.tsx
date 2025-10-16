"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"

export default function NotFound() {
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
      sudo: "Nice try. You don't have root access to fix this URL.",
      exit: "You can't exit. You're trapped in the 404 dimension forever.",
      clear: "This isn't a real terminal. But we appreciate your optimism.",
    }

    const response = responses[command] || `Command not found: ${command}. Type 'help' for available commands.`
    setTimeout(() => {
      setTerminalLines((prev) => [...prev, response])
    }, 100)

    setUserInput("")
  }

  const handleEngineeringClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "/#engineering"
  }

  const handleRedButton = () => {
    setTerminalMinimized(false)
    setTerminalMaximized(false)
    setTerminalLines((prev) => [
      ...prev,
      "",
      "> Attempted to close terminal...",
      "ERROR: You can't escape the 404 dimension that easily.",
    ])
  }

  const handleYellowButton = () => {
    const newMinimized = !terminalMinimized
    setTerminalMinimized(newMinimized)
    setTerminalMaximized(false)

    if (newMinimized) {
      setTerminalLines((prev) => [...prev, "", "> Terminal minimized. (Not really, this isn't a real OS)"])
    } else {
      setTerminalLines((prev) => [...prev, "", "> Terminal restored."])
    }
  }

  const handleGreenButton = () => {
    const newMaximized = !terminalMaximized
    setTerminalMaximized(newMaximized)
    setTerminalMinimized(false)

    if (newMaximized) {
      setTerminalLines((prev) => [...prev, "", "> Terminal maximized. Still can't find your page though."])
    } else {
      setTerminalLines((prev) => [...prev, "", "> Terminal restored. Your page is still missing."])
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      {terminalMaximized && (
        <>
          <div className="fixed inset-0 bg-black/95 z-[100] backdrop-blur-sm" onClick={handleGreenButton} />
          <div className="fixed inset-8 z-[110] border border-cyan-500/30 bg-black/95 p-6 font-mono text-left text-sm backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.2)] flex flex-col">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/20">
              <div className="flex gap-1.5">
                <button
                  onClick={handleRedButton}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                  title="Close (just kidding)"
                />
                <button
                  onClick={handleYellowButton}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    terminalMinimized
                      ? "bg-yellow-500 ring-2 ring-yellow-400/50"
                      : "bg-yellow-500/80 hover:bg-yellow-500"
                  }`}
                  title="Minimize"
                />
                <button
                  onClick={handleGreenButton}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    terminalMaximized ? "bg-green-500 ring-2 ring-green-400/50" : "bg-green-500/80 hover:bg-green-500"
                  }`}
                  title="Maximize"
                />
              </div>
              <div className="text-cyan-400/60 text-xs">system-diagnostics.sh</div>
            </div>

            <div
              className="space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent flex-1"
              ref={terminalOutputRef}
            >
              {terminalLines.filter(Boolean).map((line, index) => (
                <div
                  key={index}
                  className={`terminal-line ${
                    line?.startsWith("ERROR") || line?.includes("does not exist")
                      ? "text-red-400"
                      : line?.startsWith("$")
                        ? "text-green-400"
                        : line?.startsWith("DIAGNOSIS") ||
                            line?.startsWith("SUGGESTION") ||
                            line?.startsWith("Did you mean")
                          ? "text-yellow-400"
                          : line?.includes("[█")
                            ? "text-cyan-400"
                            : line?.startsWith("  at ")
                              ? "text-gray-500 text-xs"
                              : line?.startsWith(">")
                                ? "text-purple-400 italic"
                                : "text-gray-400"
                  }`}
                >
                  {line}
                </div>
              ))}
              {inputEnabled && (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
                </div>
              )}
            </div>

            {inputEnabled && (
              <form onSubmit={handleCommand} className="mt-4 pt-4 border-t border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono text-sm"
                    placeholder="Type 'help' for commands..."
                    autoComplete="off"
                  />
                </div>
              </form>
            )}
          </div>
        </>
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="radar-pulse" />
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="broken-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 L30 50 M70 50 L100 50 M50 0 L50 30 M50 70 L50 100"
                stroke="currentColor"
                strokeWidth="1"
                className="text-cyan-500/30"
              />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-red-500/50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#broken-circuit)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 fade-in-404 max-w-4xl w-full">
        <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono fade-in-stagger-1">
          Time wasted here: {timeWasted}s
        </div>

        <div className="mb-8">
          <h1
            className="text-[12rem] md:text-[16rem] font-bold leading-none glitch-404 cursor-pointer select-none transition-transform hover:scale-105"
            data-text="404"
            onClick={handle404Click}
            title="Click me if you're bored"
          >
            404
          </h1>
        </div>

        <div className="mb-6 fade-in-stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono tracking-wider text-cyan-400">
            SYSTEM ANOMALY DETECTED
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{errorMessage}</p>
        </div>

        <div className="mb-6 fade-in-stagger-2">
          <div className="text-sm text-yellow-400 font-mono">
            Probability you meant to come here: {probability.toFixed(3)}%
          </div>
        </div>

        <div className="mb-12 fade-in-stagger-2">
          {!terminalMaximized && (
            <div
              className={`border border-cyan-500/30 bg-black/80 p-6 font-mono text-left text-sm backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 max-w-3xl mx-auto ${
                terminalMinimized ? "max-h-16 overflow-hidden" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/20">
                <div className="flex gap-1.5">
                  <button
                    onClick={handleRedButton}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                    title="Close (just kidding)"
                  />
                  <button
                    onClick={handleYellowButton}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      terminalMinimized
                        ? "bg-yellow-500 ring-2 ring-yellow-400/50"
                        : "bg-yellow-500/80 hover:bg-yellow-500"
                    }`}
                    title="Minimize"
                  />
                  <button
                    onClick={handleGreenButton}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      terminalMaximized ? "bg-green-500 ring-2 ring-green-400/50" : "bg-green-500/80 hover:bg-green-500"
                    }`}
                    title="Maximize"
                  />
                </div>
                <div className="text-cyan-400/60 text-xs">system-diagnostics.sh</div>
              </div>

              {!terminalMinimized && (
                <>
                  <div
                    className="space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent max-h-[400px]"
                    ref={terminalOutputRef}
                  >
                    {terminalLines.filter(Boolean).map((line, index) => (
                      <div
                        key={index}
                        className={`terminal-line ${
                          line?.startsWith("ERROR") || line?.includes("does not exist")
                            ? "text-red-400"
                            : line?.startsWith("$")
                              ? "text-green-400"
                              : line?.startsWith("DIAGNOSIS") ||
                                  line?.startsWith("SUGGESTION") ||
                                  line?.startsWith("Did you mean")
                                ? "text-yellow-400"
                                : line?.includes("[█")
                                  ? "text-cyan-400"
                                  : line?.startsWith("  at ")
                                    ? "text-gray-500 text-xs"
                                    : line?.startsWith(">")
                                      ? "text-purple-400 italic"
                                      : "text-gray-400"
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                    {inputEnabled && (
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">$</span>
                        <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
                      </div>
                    )}
                  </div>

                  {inputEnabled && (
                    <form onSubmit={handleCommand} className="mt-4 pt-4 border-t border-cyan-500/20">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">$</span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono text-sm"
                          placeholder="Type 'help' for commands..."
                          autoComplete="off"
                        />
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 fade-in-stagger-3">
          <Link
            href="/"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105"
          >
            Return to Reality
          </Link>
          <a
            href="/#engineering"
            className="px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-bold uppercase tracking-wider transition-all duration-300 inline-block text-center"
          >
            View Actual Engineering
          </a>
          <button
            onClick={() => setShowBugReport(true)}
            className="px-8 py-4 border-2 border-red-500/50 hover:bg-red-500/10 text-red-400 font-bold uppercase tracking-wider transition-all duration-300"
          >
            Report Bug
          </button>
        </div>

        {showBugReport && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 fade-in-404"
            onClick={() => setShowBugReport(false)}
          >
            <div className="bg-black border-2 border-cyan-500 p-8 max-w-md mx-4 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">BUG REPORT</h3>
              <p className="text-gray-300 mb-4">Bug detected: User attempted to access non-existent page.</p>
              <p className="text-yellow-400 mb-6">Status: Working as intended. This is a feature, not a bug.</p>
              <button
                onClick={() => setShowBugReport(false)}
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider transition-all duration-300"
              >
                Close Report
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 text-xs text-gray-600 fade-in-stagger-5">
          Even our error pages are better engineered than most dashboards.
        </div>
      </div>
    </div>
  )
}
