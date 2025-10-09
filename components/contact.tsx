"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:dev@abstractdata.io?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-contact" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path
                d="M25 0L50 14.43V43.3L25 57.74L0 43.3V14.43L25 0Z"
                fill="none"
                stroke="rgba(0, 217, 255, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-contact)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-8 text-glow-cyan"
          style={{ fontFamily: "var(--font-orbitron)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#00d9ff] via-[#00f0ff] to-[#00d9ff] bg-clip-text text-transparent">
            INITIATE CONTACT
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#d4af37] font-semibold">dev@abstractdata.io</span>
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto glass-morph p-10 rounded-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 border-2 border-[#00d9ff]/30 rounded-lg glow-cyan" />

          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-30 animate-scan-line" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#00d9ff] mb-2 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={`bg-black/50 border-2 ${
                  focused === "name" ? "border-[#00d9ff] glow-cyan" : "border-gray-700"
                } text-white transition-all duration-300`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#00d9ff] mb-2 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`bg-black/50 border-2 ${
                  focused === "email" ? "border-[#00d9ff] glow-cyan" : "border-gray-700"
                } text-white transition-all duration-300`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#00d9ff] mb-2 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`bg-black/50 border-2 ${
                  focused === "message" ? "border-[#00d9ff] glow-cyan" : "border-gray-700"
                } text-white resize-none transition-all duration-300`}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00d9ff] to-[#d4af37] hover:from-[#d4af37] hover:to-[#00d9ff] text-black font-bold py-6 rounded-lg glow-cyan group relative overflow-hidden transition-all duration-300"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                TRANSMIT MESSAGE
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </form>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#00d9ff] opacity-50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#00d9ff] opacity-50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#00d9ff] opacity-50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#00d9ff] opacity-50" />
        </motion.div>
      </div>
    </section>
  )
}
