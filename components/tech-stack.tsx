"use client"

import { motion } from "framer-motion"
import { Code2, Database, Smartphone, Cpu, Layers, Glasses, Brain, Cloud, Activity } from "lucide-react"
import Image from "next/image"
import { CodeRain } from "./code-rain"

const technologies = [
  {
    name: "React & Next.js",
    icon: Code2,
    color: "#61dafb",
    description:
      "Building lightning-fast, server-rendered applications with cutting-edge React Server Components and streaming SSR for unmatched performance.",
    image: "/images/frontend-engineering.jpg",
  },
  {
    name: "TypeScript",
    icon: Layers,
    color: "#3178c6",
    description:
      "Type-safe architecture at scale. Eliminating runtime errors before they happen with advanced type systems and compile-time guarantees. The foundation of our top 5% code quality and self-healing systems.",
    image: "/images/backend-architecture.jpg",
  },
  {
    name: "Python",
    icon: Cpu,
    color: "#3776ab",
    description:
      "High-performance data processing pipelines. Processing millions of records with intelligent algorithms, fuzzy matching, and automated quality control. Powering our 5M+ records per hour throughput.",
    image: "/images/database-design.jpg",
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    color: "#ff6b6b",
    description:
      "PyTorch, TensorFlow, and LLM integration for intelligent data processing. Fuzzy matching algorithms, automated validation, and pattern recognition that operates at superhuman accuracy. Powers our AI-driven self-diagnostics and 96.3% match rates.",
    image: "/images/ai-ml-integration.jpg",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "#336791",
    description:
      "Enterprise-grade data architecture. Complex queries, ACID compliance, and massive-scale data operations with sub-second response times.",
    image: "/images/cloud-infrastructure.jpg",
  },
  {
    name: "Swift & SwiftUI",
    icon: Smartphone,
    color: "#f05138",
    description:
      "Native iOS development for Vision Pro and iPhone. Building next-generation spatial computing experiences with native performance. We're already building for 2030's platforms.",
    image: "/images/mobile-development.jpg",
  },
  {
    name: "AR/Mixed Reality",
    icon: Glasses,
    color: "#00d9ff",
    description:
      "Spatial computing and immersive interfaces. ARKit, RealityKit, and Vision Pro development for the future of human-computer interaction. Building for interfaces that don't exist yet—because they will.",
    image: "/images/devops-automation.jpg",
  },
  {
    name: "Snowflake",
    icon: Cloud,
    color: "#29b5e8",
    description:
      "Cloud data warehousing at planetary scale. Processing petabytes with zero-copy cloning, time travel, and instant elasticity. Enterprise data architecture that makes competitors' solutions look like spreadsheets.",
    image: "/images/cloud-infrastructure.jpg",
  },
  {
    name: "OpenTelemetry",
    icon: Activity,
    color: "#e92063",
    description:
      "Industry-standard observability framework. Distributed tracing, metrics, and logs across the entire stack. Real-time insights into system performance that catch issues before users notice them.",
    image: "/images/database-design.jpg",
  },
]

export function TechStack() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(#d4af37 1px, transparent 1px),
            linear-gradient(90deg, #d4af37 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating connection lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 15}%`}
              y1="0%"
              x2={`${20 + i * 15}%`}
              y2="100%"
              stroke="#00d9ff"
              strokeWidth="1"
              strokeDasharray="5,10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <CodeRain />

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
            TECHNOLOGY MASTERY
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-xl mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building with the most advanced tools across the entire stack
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden group cursor-pointer rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
                </div>

                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 20px ${tech.color}40, 0 0 20px ${tech.color}40`,
                  }}
                />

                <div className="relative z-10 p-8 space-y-4">
                  {/* Icon with hexagonal background */}
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 hexagon-bg opacity-20" style={{ backgroundColor: tech.color }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-8 h-8" style={{ color: tech.color }} />
                    </div>
                    {/* Corner accents */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#00d9ff]" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
                  </div>

                  {/* Technology name */}
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm">{tech.description}</p>
                </div>

                {/* Connection nodes */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00d9ff] rounded-full animate-glow-pulse z-20" />
                <div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-[#d4af37] rounded-full animate-glow-pulse z-20"
                  style={{ animationDelay: "1s" }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Orbital decoration */}
        <motion.div
          className="mt-20 flex justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg width="150" height="150" viewBox="0 0 150 150" className="opacity-20">
            <circle cx="75" cy="75" r="60" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="75" cy="75" r="40" fill="none" stroke="#00d9ff" strokeWidth="1" />
            <circle cx="75" cy="15" r="4" fill="#00d9ff" />
            <circle cx="135" cy="75" r="4" fill="#d4af37" />
            <circle cx="75" cy="135" r="4" fill="#00d9ff" />
            <circle cx="15" cy="75" r="4" fill="#d4af37" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
