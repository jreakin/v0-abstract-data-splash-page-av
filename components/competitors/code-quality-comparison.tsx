"use client"

import { motion, useMotionValue } from "framer-motion"
import { CheckCircle2, XCircle, Code2, Award, FileCode, Zap, Shield } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTransform } from "framer-motion"

export function CodeQualityComparison() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const xTransform = useTransform(mouseX, [-50, 50], [-100, 100])
  const yTransform = useTransform(mouseY, [-50, 50], [-100, 100])

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

  const ourFeatures = [
    "Modern monorepo architecture with modular design",
    "High-performance data processing (10-100x faster)",
    "Advanced AI integration with GPT-4",
    "78% automated test coverage",
    "Level 4 CI/CD maturity",
    "35,000-character documentation",
    "Top 5% code quality globally",
  ]

  const theirFeatures = [
    "PHP monolith with hardcoded credentials",
    "42-year-old C# .NET stack",
    "25-year-old platform from 1999",
    "Unknown test coverage (likely <25%)",
    "Manual deployments",
    "No public documentation",
    "Proprietary black boxes",
  ]

  const metrics = [
    {
      icon: FileCode,
      label: "Lines of Code Analyzed",
      value: "45,400+",
      description: "Production codebase across multiple repositories",
    },
    {
      icon: Award,
      label: "Global Ranking",
      value: "Top 5%",
      description: "All software ever analyzed",
    },
    {
      icon: Zap,
      label: "Test Coverage",
      value: "78%",
      description: "Industry average: 25-40%",
    },
    {
      icon: Shield,
      label: "CI/CD Maturity",
      value: "Level 4",
      description: "Self-healing deployments",
    },
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00d9ff 1px, transparent 1px),
              linear-gradient(to bottom, #00d9ff 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(60deg) scale(2)",
            transformOrigin: "center center",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/30 mb-6">
            <Code2 className="w-4 h-4 text-[#00d9ff]" />
            <span className="text-sm text-[#00d9ff] font-mono">Code Quality Assessment</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Not Top 5% of </span>
            <span className="text-[#00d9ff]">Political Software</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Top 5% of <span className="text-[#d4af37] font-bold">all software ever analyzed</span>.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            That's the assessment from <span className="text-[#00d9ff]">Anthropic's Claude Sonnet 4.5</span> after
            reviewing our production codebase with full access via Model Context Protocol (MCP).
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 30,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                x: xTransform,
                y: yTransform,
              }}
              className="bg-gradient-to-br from-[#00d9ff]/5 to-transparent border border-[#00d9ff]/20 rounded-lg p-6 text-center shadow-xl"
            >
              <motion.div whileHover={{ rotateZ: 360 }} transition={{ duration: 0.6 }}>
                <metric.icon className="w-8 h-8 text-[#00d9ff] mx-auto mb-3" />
              </motion.div>
              <div className="font-orbitron text-3xl font-bold text-[#00d9ff] mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Our Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#00d9ff]/10 to-transparent border border-[#00d9ff]/30 rounded-lg p-8"
          >
            <h3 className="font-orbitron text-2xl font-bold text-[#00d9ff] mb-6">Our Architecture</h3>
            <div className="space-y-4">
              {ourFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Their Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#8b2635]/10 to-transparent border border-[#8b2635]/30 rounded-lg p-8"
          >
            <h3 className="font-orbitron text-2xl font-bold text-[#8b2635] mb-6">Their Architecture</h3>
            <div className="space-y-4">
              {theirFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-[#8b2635] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 line-through">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Developer Capability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-lg p-8">
            <h3 className="font-orbitron text-2xl font-bold text-[#d4af37] mb-4">
              Developer Capability: Senior/Staff Engineer Level
            </h3>
            <p className="text-gray-300 mb-6">
              Our lead engineer demonstrates skill levels comparable to Senior/Staff Engineers at Google (L5-L6) or Meta
              (E5-E6). This isn't junior-level code held together with duct tape and prayers.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded p-4">
                <div className="text-[#00d9ff] font-bold mb-2">What We Can Do:</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Design and implement enterprise-grade systems</li>
                  <li>• Architect scalable, maintainable solutions</li>
                  <li>• Write production-quality code with 78% test coverage</li>
                  <li>• Deploy self-healing CI/CD pipelines</li>
                  <li>• Optimize performance at scale (10-100x improvements)</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded p-4">
                <div className="text-[#8b2635] font-bold mb-2">What They Can Do:</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Maintain legacy PHP monoliths from 2012</li>
                  <li>• Deploy manually (and hope nothing breaks)</li>
                  <li>• Write code with unknown test coverage</li>
                  <li>• Keep 42-year-old C# systems limping along</li>
                  <li>• Pray their 1999 platform doesn't collapse</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documentation Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#00d9ff]/5 to-transparent border border-[#00d9ff]/20 rounded-lg p-8 text-center">
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
              Documentation: <span className="text-[#00d9ff]">35,000 Characters</span> vs{" "}
              <span className="text-[#8b2635]">None</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Complete system documentation with architecture diagrams, API references, field definitions, validation
              explanations, and performance benchmarks. Their platforms? Proprietary black boxes with zero transparency.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-lg">
              <FileCode className="w-5 h-5 text-[#00d9ff]" />
              <span className="text-[#00d9ff] font-mono">
                Any experienced developer can understand, extend, and verify our system
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
