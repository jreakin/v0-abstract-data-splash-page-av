"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Node {
  id: number
  x: number
  y: number
  label: string
}

interface Connection {
  from: number
  to: number
}

export function NetworkGraph() {
  const [nodes] = useState<Node[]>([
    { id: 0, x: 50, y: 10, label: "Client" },
    { id: 1, x: 20, y: 30, label: "API Gateway" },
    { id: 2, x: 80, y: 30, label: "Load Balancer" },
    { id: 3, x: 15, y: 55, label: "Auth Service" },
    { id: 4, x: 50, y: 55, label: "Core Engine" },
    { id: 5, x: 85, y: 55, label: "ML Pipeline" },
    { id: 6, x: 30, y: 80, label: "Database" },
    { id: 7, x: 70, y: 80, label: "Cache Layer" },
  ])

  const [connections] = useState<Connection[]>([
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 5, to: 7 },
  ])

  return (
    <div className="relative w-full h-[500px] glass-morph rounded-lg border border-[#00d9ff]/30 p-8">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => {
          const fromNode = nodes[conn.from]
          const toNode = nodes[conn.to]
          return (
            <motion.line
              key={i}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="#00d9ff"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          )
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-[#00d9ff]/20 border-2 border-[#00d9ff] flex items-center justify-center backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-[#00d9ff] animate-glow-pulse" />
            </div>
          </motion.div>
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#00d9ff] font-mono">
            {node.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
