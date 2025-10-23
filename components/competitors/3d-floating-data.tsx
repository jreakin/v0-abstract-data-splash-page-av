"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text3D, OrbitControls, Environment } from "@react-three/drei"
import type * as THREE from "three"

function FloatingMetric({
  position,
  text,
  value,
  color,
}: { position: [number, number, number]; text: string; value: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 2, 0.2]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        <Text3D font="/fonts/Geist_Bold.json" size={0.3} height={0.1} position={[-0.8, 0.3, 0.15]}>
          {value}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
        <Text3D font="/fonts/Geist_Regular.json" size={0.12} height={0.05} position={[-0.8, -0.2, 0.15]}>
          {text}
          <meshStandardMaterial color="#cccccc" />
        </Text3D>
      </group>
    </Float>
  )
}

export function ThreeDFloatingData() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <FloatingMetric position={[-3, 2, 0]} text="Code Quality" value="9/10" color="#00d9ff" />
        <FloatingMetric position={[3, 2, 0]} text="GOP Average" value="5.8/10" color="#8b2635" />
        <FloatingMetric position={[-3, -1, 0]} text="Validation" value="99%" color="#d4af37" />
        <FloatingMetric position={[3, -1, 0]} text="Competitors" value="70%" color="#666666" />

        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
