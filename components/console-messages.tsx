"use client"

import { useEffect } from "react"

export function ConsoleMessages() {
  useEffect(() => {
    const logo = `
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║     █████╗ ██████╗ ███████╗████████╗██████╗  █████╗  ██████╗████████╗                            ║
║    ██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝                            ║
║    ███████║██████╔╝███████╗   ██║   ██████╔╝███████║██║        ██║                               ║
║    ██╔══██║██╔══██╗╚════██║   ██║   ██╔══██╗██╔══██║██║        ██║                               ║
║    ██║  ██║██████╔╝███████║   ██║   ██║  ██║██║  ██║╚██████╗   ██║                               ║
║    ╚═╝  ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝                               ║
║                                                                                                  ║
║                   ██████╗  █████╗ ████████╗ █████╗                                               ║
║                   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗                                              ║
║                   ██║  ██║███████║   ██║   ███████║                                              ║
║                   ██║  ██║██╔══██║   ██║   ██╔══██║                                              ║
║                   ██████╔╝██║  ██║   ██║   ██║  ██║                                              ║
║                   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝                                              ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
    `

    console.log("%c" + logo, "color: #00D9FF; font-family: monospace;")

    console.log(
      "%c🔍 Inspecting the code? Nice. At least someone on your team knows how to use DevTools.",
      "color: #D4AF37; font-size: 14px; font-weight: bold; padding: 10px 0;",
    )

    console.log(
      "%c🐛 Looking for bugs? Good luck! We're not amateurs.",
      "color: #00D9FF; font-size: 14px; font-weight: bold; padding: 10px 0;",
    )

    console.log(
      "%c💡 If you're reading this, you're already more technical than Parscale's crap and Targeted Victory -- combined.",
      "color: #D4AF37; font-size: 14px; font-weight: bold; padding: 10px 0;",
    )
  }, [])

  return null
}
