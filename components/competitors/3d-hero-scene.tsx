"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, MeshTransmissionMaterial } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function FloatingCube({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  )
}

function DataSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.5}
          anisotropy={1}
          distortion={0.3}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#00d9ff"
        />
      </mesh>
    </Float>
  )
}

export function Hero3DScene() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4af37" />

        <FloatingCube position={[-3, 2, 0]} color="#00d9ff" scale={0.8} />
        <FloatingCube position={[3, -1, -2]} color="#d4af37" scale={0.6} />
        <FloatingCube position={[2, 2, -1]} color="#00d9ff" scale={0.5} />
        <DataSphere position={[0, 0, 0]} />
        <FloatingCube position={[-2, -2, -3]} color="#d4af37" scale={0.7} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
