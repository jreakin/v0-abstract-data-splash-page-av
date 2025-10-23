"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Shield, ShieldAlert, Lock, Unlock } from "lucide-react"
import { useEffect, useRef } from "react"

export function SecurityBreach() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 25)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 25)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="py-24 relative bg-gradient-to-b from-[#0a0a0a] to-[#8b2635]/5 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <ShieldAlert className="w-6 h-6 text-[#8b2635]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            x: useTransform(mouseX, [-50, 50], [-10, 10]),
            y: useTransform(mouseY, [-50, 50], [-10, 10]),
          }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b2635]/20 border border-[#8b2635]/50 mb-6">
            <ShieldAlert className="w-4 h-4 text-[#8b2635]" />
            <span className="text-sm text-[#8b2635] font-mono">Security Track Record</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Campaign Sidekick: A </span>
            <span className="text-[#8b2635]">Master Class</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In how <span className="text-[#8b2635] font-bold">NOT</span> to build political software
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* The Breach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              z: 30,
              transition: { duration: 0.3 },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="bg-gradient-to-br from-[#8b2635]/20 to-transparent border-2 border-[#8b2635]/50 rounded-lg p-8 mb-8 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <Unlock className="w-8 h-8 text-[#8b2635] flex-shrink-0" />
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-[#8b2635] mb-2">March 2020: The Breach</h3>
                <p className="text-gray-300 mb-4">
                  The entire Git repository was publicly accessible via misconfigured .git directory on production
                  website.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#0a0a0a]/50 border border-[#8b2635]/30 rounded p-4">
                <h4 className="font-bold text-[#8b2635] mb-3">What Was Exposed:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>CPanel passwords hardcoded in source code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>SFTP credentials for third-party platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>Complete commit history since November 2016</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>Facebook data scraping scripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>Evidence of offshore development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0a0a0a]/50 border border-[#8b2635]/30 rounded p-4">
                <h4 className="font-bold text-[#8b2635] mb-3">Security Failures:</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>Credentials in Git</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>.git exposed on production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>No code review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>No security scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8b2635]">×</span>
                    <span>No secrets management</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Our Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              rotateX: -2,
              z: 30,
              transition: { duration: 0.3 },
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="bg-gradient-to-br from-[#00d9ff]/10 to-transparent border border-[#00d9ff]/30 rounded-lg p-8 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-[#00d9ff] flex-shrink-0" />
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-[#00d9ff] mb-2">Our Security Standards</h3>
                <p className="text-gray-300 mb-4">Professional-grade security practices. Zero public breaches.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Supabase authentication with row-level security",
                "Environment variables for all secrets",
                "No credentials in version control",
                "TLS 1.3 encryption in transit",
                "Encrypted at rest (all sensitive data)",
                "Audit logging on every data access",
                "Role-based permissions",
                "Git best practices enforced",
                "Pre-commit hooks for security",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
