"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-[#d4af37]/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.p
          className="text-gray-500 tracking-widest uppercase text-sm"
          style={{ fontFamily: "var(--font-orbitron)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Copyright © 2025 <span className="text-[#d4af37]">ABSTRACT DATA</span>
        </motion.p>
      </div>
    </footer>
  )
}
