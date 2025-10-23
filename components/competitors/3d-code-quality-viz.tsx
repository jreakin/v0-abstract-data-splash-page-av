"use client"

import { useState } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function QualityBar({
  position,
  height,
  color,
  label,
  value,
}: {
  position: [number, number, number]
  height: number
  color: string
  label: string
  value: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = hovered ? 1.1 : 1
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1)
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        position={[0, height / 2, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.8, height, 0.8]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      <Html position={[0, height + 0.5, 0]} center>
        <div className="text-center pointer-events-none">
          <div className="text-cyan-400 font-bold text-sm whitespace-nowrap">{value}</div>
          <div className="text-gray-400 text-xs whitespace-nowrap">{label}</div>
        </div>
      </Html>
    </group>
  )
}

export function CodeQuality3DViz() {
  return (
    <div className="w-full h-[500px] bg-black/20 rounded-lg border border-cyan-500/20">
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00d9ff" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#d4af37" />

        {/* Abstract Data bars */}
        <QualityBar position={[-3, 0, 0]} height={4.5} color="#00d9ff" label="Code Quality" value="Top 5%" />
        <QualityBar position={[-1.5, 0, 0]} height={3.9} color="#00d9ff" label="Test Coverage" value="78%" />
        <QualityBar position={[0, 0, 0]} height={4.0} color="#00d9ff" label="CI/CD Maturity" value="Level 4" />

        {/* Competitor bars */}
        <QualityBar position={[1.5, 0, 0]} height={1.2} color="#ef4444" label="Competitors" value="Bottom 50%" />
        <QualityBar position={[3, 0, 0]} height={0.8} color="#ef4444" label="Test Coverage" value="<10%" />

        <gridHelper args={[10, 10, "#00d9ff", "#1a1a1a"]} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
