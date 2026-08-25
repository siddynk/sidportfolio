"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useMemo, Suspense } from "react"
import * as THREE from "three"

function Sphere() {
  const mesh = useRef<THREE.Mesh>(null)
  const points = useRef<THREE.Points>(null)
  const { pointer } = useThree()

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.1, 6), [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.08
      mesh.current.rotation.x += delta * 0.03
      // ease toward pointer
      mesh.current.rotation.y += (pointer.x * 0.4 - mesh.current.rotation.y * 0) * 0
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        pointer.y * 0.3,
        0.02,
      )
      const scale = 1 + Math.sin(t * 0.6) * 0.02
      mesh.current.scale.setScalar(scale)
    }
    if (points.current) {
      points.current.rotation.y -= delta * 0.05
      points.current.rotation.x += delta * 0.02
    }
  })

  return (
    <group>
      <mesh ref={mesh} geometry={geometry}>
        <meshBasicMaterial color="#8a8a8a" wireframe transparent opacity={0.35} />
      </mesh>
      <points ref={points} geometry={geometry}>
        <pointsMaterial color="#ffffff" size={0.02} transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  )
}

export function WireframeSphere() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  )
}
