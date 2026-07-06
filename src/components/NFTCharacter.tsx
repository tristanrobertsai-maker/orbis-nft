import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NFTCharacter({ position, isActive }: { position: [number, number, number]; isActive: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.2 + position[0]) * 0.15;
      // Slow rotation when active
      if (isActive) {
        groupRef.current.rotation.y += 0.008;
      }
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Alien character silhouette (placeholder - stylized humanoid) */}
      {/* Head */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial
          color="#1a0a2e"
          emissive="#b724ff"
          emissiveIntensity={isActive ? 0.8 : 0.3}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]}>
        <capsuleGeometry args={[0.6, 1.2, 8, 16]} />
        <meshStandardMaterial
          color="#2a0845"
          emissive="#6FFF00"
          emissiveIntensity={isActive ? 0.6 : 0.2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.9, 1.2, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.2, 1, 4, 8]} />
        <meshStandardMaterial
          color="#2a0845"
          emissive="#b724ff"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
      <mesh position={[0.9, 1.2, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.2, 1, 4, 8]} />
        <meshStandardMaterial
          color="#2a0845"
          emissive="#b724ff"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.35, 0, 0]}>
        <capsuleGeometry args={[0.2, 1, 4, 8]} />
        <meshStandardMaterial
          color="#1a0a2e"
          emissive="#6FFF00"
          emissiveIntensity={0.3}
          roughness={0.5}
          metalness={0.7}
        />
      </mesh>
      <mesh position={[0.35, 0, 0]}>
        <capsuleGeometry args={[0.2, 1, 4, 8]} />
        <meshStandardMaterial
          color="#1a0a2e"
          emissive="#6FFF00"
          emissiveIntensity={0.3}
          roughness={0.5}
          metalness={0.7}
        />
      </mesh>

      {/* Holographic base */}
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 32]} />
        <meshBasicMaterial color="#6FFF00" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// NFTCharacter
