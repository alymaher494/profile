"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/**
 * The Digital Core — "Engineering Nucleus".
 * A precise geometric core (icosahedron) wrapped in a structural wireframe,
 * plotted on orthogonal axes with an orbiting ring. Controlled, slow motion.
 * This is the ORIGIN of the visual system: axes + coordinates + radial
 * relationships are later extracted into the 2D UI, never copied.
 */
function Nucleus({ reduced, scrollProgress = 0 }: { reduced: boolean; scrollProgress?: number }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (reduced) return;
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x += delta * 0.05;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.03;
      const scrollScale = 1 + scrollProgress * 0.3;
      group.current.scale.setScalar(pulse * scrollScale);
    }
    const ringSpeed = 0.3 + scrollProgress * 2.5;
    if (ring.current) ring.current.rotation.z += delta * ringSpeed;
    if (inner.current) inner.current.rotation.y -= delta * 0.32;
  });

  const coreOpacity = Math.max(0, 1 - scrollProgress * 2);
  const gridOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.4) / 0.6));

  return (
    <group ref={group}>
      {/* Dark mass gives the core weight */}
      <mesh visible={coreOpacity > 0.01}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#0a0d0f" transparent opacity={coreOpacity} />
        <Edges threshold={1} color="#c8ff40" transparent opacity={coreOpacity} />
      </mesh>

      {/* Inner counter-rotating wireframe — depth without noise */}
      <group ref={inner} scale={0.62} visible={coreOpacity > 0.01}>
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#0a0d0f" wireframe transparent opacity={0.5 * coreOpacity} />
        </mesh>
      </group>

      {/* Orbiting structural ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.85, 0.006, 8, 120]} />
        <meshBasicMaterial color="#c8ff40" transparent opacity={0.35} />
      </mesh>

      {/* Orthogonal axes — extracted later into the 2D coordinate system */}
      <Line points={[[-2.6, 0, 0], [2.6, 0, 0]]} color="#e7e9e4" lineWidth={0.7} transparent opacity={0.18} />
      <Line points={[[0, -2.6, 0], [0, 2.6, 0]]} color="#e7e9e4" lineWidth={0.7} transparent opacity={0.18} />
      <Line points={[[0, 0, -2.6], [0, 0, 2.6]]} color="#c8ff40" lineWidth={0.7} transparent opacity={0.22} />

      {/* Scroll-driven grid overlay — fades in as user scrolls */}
      <group visible={gridOpacity > 0.01}>
        {Array.from({ length: 17 }).map((_, i) => (
          <Line
            key={`grid-v-${i}`}
            points={[[-8 + i * 1, -6, 0], [-8 + i * 1, 6, 0]]}
            color="#1c2940"
            lineWidth={0.6}
            transparent
            opacity={0.35 * gridOpacity}
          />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <Line
            key={`grid-h-${i}`}
            points={[[-8, -6 + i * 1, 0], [8, -6 + i * 1, 0]]}
            color="#1c2940"
            lineWidth={0.6}
            transparent
            opacity={0.35 * gridOpacity}
          />
        ))}
      </group>
    </group>
  );
}

export default function CoreScene({ reduced, scrollProgress = 0 }: { reduced: boolean; scrollProgress?: number }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Nucleus reduced={reduced} scrollProgress={scrollProgress} />
    </Canvas>
  );
}
