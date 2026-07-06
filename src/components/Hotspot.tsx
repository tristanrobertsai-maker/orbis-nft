import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

interface HotspotProps {
  position: [number, number, number];
  nftId: number;
  name: string;
  score: string;
  onClick: (id: number) => void;
  isActive: boolean;
}

export default function Hotspot({ position, nftId, name, score, onClick, isActive }: HotspotProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.008;
      ringRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.2;
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.05;
      ringRef.current.scale.set(scale, scale, 1);
    }
  });

  const emissiveColor = isActive ? '#6FFF00' : (hovered ? '#b724ff' : '#6FFF00');
  const emissiveIntensity = isActive ? 1.5 : (hovered ? 1 : 0.6);

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick(nftId);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Holographic Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.08, 8, 64]} />
        <meshStandardMaterial
          color="#6FFF00"
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner hologram orb */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial
          color="#6FFF00"
          emissive="#6FFF00"
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={0.9}
          wireframe
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 3.5, 0]}
        fontSize={0.6}
        color="#EFF4FF"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.ttf"
      >
        {name.toUpperCase()}
      </Text>

      {/* Score Label */}
      <Text
        position={[0, -0.5, 1.3]}
        fontSize={0.35}
        color="#EFF4FF"
        anchorX="center"
        anchorY="middle"
        font="monospace"
      >
        {score}
      </Text>

      {/* Vertical beam */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshBasicMaterial color="#6FFF00" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}
