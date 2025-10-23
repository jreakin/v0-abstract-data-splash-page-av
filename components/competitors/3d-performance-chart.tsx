"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

function PerformanceBar({
  position,
  height,
  width,
  depth,
  color,
  label,
  value,
  sublabel,
}: {
  position: [number, number, number]
  height: number
  width: number
  depth: number
  color: string
  label: string
  value: string
  sublabel: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      const targetY = hovered ? 0.2 : 0
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, height / 2 + targetY, 0.1)
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
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.2}
        />
      </mesh>
      <Html position={[0, height + 0.8, 0]} center>
        <div className="text-center pointer-events-none">
          <div
            className={`font-bold text-lg whitespace-nowrap ${color === "#00d9ff" ? "text-cyan-400" : "text-red-400"}`}
          >
            {value}
          </div>
          <div className="text-gray-300 text-sm whitespace-nowrap">{label}</div>
          <div className="text-gray-500 text-xs whitespace-nowrap">{sublabel}</div>
        </div>
      </Html>
    </group>
  )
}

export function Performance3DChart() {
  return (
    <div className="w-full h-[500px] bg-black/20 rounded-lg border border-cyan-500/20">
      <Canvas camera={{ position: [0, 4, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00d9ff" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#d4af37" />

        {/* Processing Speed */}
        <PerformanceBar
          position={[-4, 0, 0]}
          height={4.5}
          width={1.2}
          depth={1.2}
          color="#00d9ff"
          label="Abstract Data"
          value="<1 sec"
          sublabel="Processing Speed"
        />
        <PerformanceBar
          position={[-2, 0, 0]}
          height={0.9}
          width={1.2}
          depth={1.2}
          color="#ef4444"
          label="Competitors"
          value="30-50 sec"
          sublabel="30-50x slower"
        />

        {/* Data Accuracy */}
        <PerformanceBar
          position={[0.5, 0, 0]}
          height={4.8}
          width={1.2}
          depth={1.2}
          color="#00d9ff"
          label="Abstract Data"
          value="96.3%"
          sublabel="Data Accuracy"
        />
        <PerformanceBar
          position={[2.5, 0, 0]}
          height={3.6}
          width={1.2}
          depth={1.2}
          color="#ef4444"
          label="Competitors"
          value="75-85%"
          sublabel="11-21% worse"
        />

        <gridHelper args={[12, 12, "#00d9ff", "#1a1a1a"]} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
