import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function AlienStructures() {
  return (
    <group>
      {/* Central Monolith */}
      <mesh position={[0, 6, 0]}>
        <boxGeometry args={[3, 12, 3]} />
        <meshStandardMaterial
          color="#1a0a2e"
          emissive="#6FFF00"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Crystal Spire 1 */}
      <mesh position={[-15, 4, -10]} rotation={[0, 0.3, 0]}>
        <coneGeometry args={[2, 8, 6]} />
        <meshStandardMaterial
          color="#3d0f5e"
          emissive="#6FFF00"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.95}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Crystal Spire 2 */}
      <mesh position={[18, 5, -8]} rotation={[0, -0.5, 0.1]}>
        <coneGeometry args={[1.5, 10, 5]} />
        <meshStandardMaterial
          color="#2a0845"
          emissive="#6FFF00"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.95}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Alien Platform / Podium */}
      <mesh position={[-20, -1, 8]}>
        <cylinderGeometry args={[4, 5, 2, 8]} />
        <meshStandardMaterial
          color="#3d0f5e"
          emissive="#6FFF00"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Floating Orb 1 */}
      <FloatingOrb position={[-25, 8, 5]} color="#6FFF00" />
      
      {/* Floating Orb 2 */}
      <FloatingOrb position={[22, 10, -15]} color="#b724ff" />

      {/* Ground Details - Small rocks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 25 + Math.sin(i * 1.7) * 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={i} position={[x, -0.5, z]}>
            <dodecahedronGeometry args={[0.5 + Math.random() * 0.8, 0]} />
            <meshStandardMaterial
              color="#1a0a2e"
              roughness={0.9}
              metalness={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.5 + position[0]) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}
