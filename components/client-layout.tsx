"use client"

import type React from "react"
import { ConsoleMessages } from "@/components/console-messages"
import { KonamiCode } from "@/components/konami-code"
import { LoadingScreen } from "@/components/loading-screen"
import { motion } from "framer-motion"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <ConsoleMessages />
      <KonamiCode />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  )
}
