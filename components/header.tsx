"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-morph border-b border-[#d4af37]/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 glow-gold rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
            <Image
              src="/abstract-data-logo.png"
              alt="Abstract Data"
              width={48}
              height={48}
              className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform"
            />
          </div>
          <span
            className="font-bold text-[#d4af37] text-xl tracking-wider hidden sm:block"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            ABSTRACT DATA
          </span>
        </Link>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-gradient-to-r from-[#8b2635] to-[#d4af37] hover:from-[#d4af37] hover:to-[#8b2635] text-white font-bold px-6 py-2 rounded-lg glow-gold transition-all duration-300 relative overflow-hidden group"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <Link href="#contact" className="relative z-10">
              CONTACT
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
