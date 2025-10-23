"use client"

import type React from "react"
import { ConsoleMessages } from "@/components/console-messages"
import { KonamiCode } from "@/components/konami-code"
import { LoadingScreen } from "@/components/loading-screen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <ConsoleMessages />
      <KonamiCode />
      <div className="animate-fade-in-delayed">{children}</div>
    </>
  )
}
