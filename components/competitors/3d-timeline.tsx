"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html, Line } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function TimelineNode({
  position,
  year,
  name,
  age,
  isModern,
}: {
  position: [number, number, number]
  year: number
  name: string
  age: number
  isModern: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      const targetScale = hovered ? 1.3 : 1
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1))
    }
  })

  const color = isModern ? "#00d9ff" : age > 30 ? "#ef4444" : age > 20 ? "#f59e0b" : "#fbbf24"

  return (
    <group position={position}>
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
        />
      </mesh>
      <Html position={[0, 0.8, 0]} center>
        <div className="text-center pointer-events-none">
          <div className={`font-bold text-sm whitespace-nowrap ${isModern ? "text-cyan-400" : "text-red-400"}`}>
            {name}
          </div>
          <div className="text-gray-400 text-xs">
            {year} ({age} years old)
          </div>
        </div>
      </Html>
    </group>
  )
}

export function Timeline3D() {
  const competitors = [
    { year: 1983, name: "GOP Data Center", age: 42, isModern: false },
    { year: 1999, name: "Aristotle", age: 26, isModern: false },
    { year: 2003, name: "NGP VAN", age: 22, isModern: false },
    { year: 2011, name: "NationBuilder", age: 14, isModern: false },
    { year: 2012, name: "i360", age: 13, isModern: false },
    { year: 2019, name: "Abstract Data", age: 6, isModern: true },
  ]

  const points = competitors.map((_, i) => {
    const x = (i - 2.5) * 2
    return new THREE.Vector3(x, 0, 0)
  })

  return (
    <div className="w-full h-[400px] bg-black/20 rounded-lg border border-cyan-500/20">
      <Canvas camera={{ position: [0, 3, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 5]} intensity={1} color="#00d9ff" />

        <Line points={points} color="#00d9ff" lineWidth={2} opacity={0.3} transparent />

        {competitors.map((comp, i) => (
          <TimelineNode
            key={comp.name}
            position={[(i - 2.5) * 2, 0, 0]}
            year={comp.year}
            name={comp.name}
            age={comp.age}
            isModern={comp.isModern}
          />
        ))}

        <gridHelper args={[15, 15, "#00d9ff", "#1a1a1a"]} position={[0, -1, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
