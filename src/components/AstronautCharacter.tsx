import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AstronautProps {
  position: [number, number, number];
  variant: 0 | 1 | 2;
  isActive: boolean;
  floatOffset?: number;
}

export default function AstronautCharacter({ position, variant, isActive, floatOffset = 0 }: AstronautProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    // Gentle float
    groupRef.current.position.y = position[1] + 1.5 + Math.sin(t * 1.5 + floatOffset) * 0.25;
    // Slow rotation when active, slight idle wobble otherwise
    if (isActive) {
      groupRef.current.rotation.y += 0.015;
    } else {
      groupRef.current.rotation.y = Math.sin(t * 0.4 + floatOffset) * 0.15;
    }
    groupRef.current.rotation.z = Math.sin(t * 0.8 + floatOffset) * 0.03;
  });

  return (
    <group ref={groupRef} position={position}>
      {variant === 0 && <AstronautVisor />}
      {variant === 1 && <AstronautFluffy />}
      {variant === 2 && <AstronautMinimal />}

      {/* Holographic base ring */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.6, 32]} />
        <meshBasicMaterial color="#6FFF00" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Glow pillar */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.6, 8]} />
        <meshBasicMaterial color="#6FFF00" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// ─── SHARED BODY PARTS ─────────────────────────────────────────────────────

function WhiteSuitBody() {
  return (
    <>
      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.75, 1.0, 6, 16]} />
        <meshStandardMaterial color="#e8f0ff" roughness={0.55} metalness={0.1} />
      </mesh>
      {/* Control panel on chest */}
      <mesh position={[0, 0.2, 0.72]}>
        <boxGeometry args={[0.6, 0.5, 0.08]} />
        <meshStandardMaterial color="#f5f7ff" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Panel screen (dark) */}
      <mesh position={[0, 0.25, 0.77]}>
        <boxGeometry args={[0.35, 0.25, 0.01]} />
        <meshStandardMaterial color="#1a2035" emissive="#1a2035" emissiveIntensity={0.3} roughness={0.2} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.85, -0.05, 0]} rotation={[0, 0, 0.18]}>
        <capsuleGeometry args={[0.28, 0.7, 6, 12]} />
        <meshStandardMaterial color="#e8f0ff" roughness={0.55} metalness={0.1} />
      </mesh>
      {/* Left glove */}
      <mesh position={[-1.05, -0.5, 0]}>
        <sphereGeometry args={[0.28, 12, 12]} />
        <meshStandardMaterial color="#dce6ff" roughness={0.5} metalness={0.15} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.85, -0.05, 0]} rotation={[0, 0, -0.18]}>
        <capsuleGeometry args={[0.28, 0.7, 6, 12]} />
        <meshStandardMaterial color="#e8f0ff" roughness={0.55} metalness={0.1} />
      </mesh>
      {/* Right glove */}
      <mesh position={[1.05, -0.5, 0]}>
        <sphereGeometry args={[0.28, 12, 12]} />
        <meshStandardMaterial color="#dce6ff" roughness={0.5} metalness={0.15} />
      </mesh>
      {/* Left leg */}
      <mesh position={[-0.3, -1.1, 0]}>
        <capsuleGeometry args={[0.3, 0.55, 6, 12]} />
        <meshStandardMaterial color="#e8f0ff" roughness={0.55} metalness={0.1} />
      </mesh>
      {/* Left boot */}
      <mesh position={[-0.3, -1.55, 0.08]}>
        <boxGeometry args={[0.45, 0.25, 0.6]} />
        <meshStandardMaterial color="#b8c8ff" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.3, -1.1, 0]}>
        <capsuleGeometry args={[0.3, 0.55, 6, 12]} />
        <meshStandardMaterial color="#e8f0ff" roughness={0.55} metalness={0.1} />
      </mesh>
      {/* Right boot */}
      <mesh position={[0.3, -1.55, 0.08]}>
        <boxGeometry args={[0.45, 0.25, 0.6]} />
        <meshStandardMaterial color="#b8c8ff" roughness={0.4} metalness={0.2} />
      </mesh>
    </>
  );
}

// ─── VARIANT 1: ROSE VISOR ASTRONAUT ───────────────────────────────────────

function AstronautVisor() {
  return (
    <>
      {/* Helmet (large rounded shell) */}
      <mesh position={[0, 1.65, 0]}>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshStandardMaterial color="#f0f3ff" roughness={0.5} metalness={0.15} />
      </mesh>
      {/* Visor (front half-sphere, rose tinted, reflective) */}
      <mesh position={[0, 1.6, 0.25]}>
        <sphereGeometry args={[0.85, 32, 32, 0, Math.PI, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#ffb3b3"
          roughness={0.05}
          metalness={0.95}
          iridescence={1}
          iridescenceIOR={1.6}
          iridescenceThicknessRange={[0, 500]}
          clearcoat={1}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Visor glow rim */}
      <mesh position={[0, 1.65, -0.6]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.85, 0.04, 8, 48]} />
        <meshBasicMaterial color="#ff7070" transparent opacity={0.4} />
      </mesh>

      {/* Headphones / ear modules */}
      <mesh position={[-1.1, 1.7, 0]}>
        <boxGeometry args={[0.25, 0.55, 0.35]} />
        <meshStandardMaterial color="#c8d0f0" roughness={0.4} metalness={0.4} />
      </mesh>
      <mesh position={[1.1, 1.7, 0]}>
        <boxGeometry args={[0.25, 0.55, 0.35]} />
        <meshStandardMaterial color="#c8d0f0" roughness={0.4} metalness={0.4} />
      </mesh>

      {/* Closed eyes on visor (small dark slits, peaceful expression) */}
      <mesh position={[-0.25, 1.68, 0.95]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.18, 0.03, 0.04]} />
        <meshBasicMaterial color="#2a1a1a" />
      </mesh>
      <mesh position={[0.25, 1.68, 0.95]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.18, 0.03, 0.04]} />
        <meshBasicMaterial color="#2a1a1a" />
      </mesh>

      {/* Body */}
      <WhiteSuitBody />

      {/* Shoulder details */}
      <mesh position={[-0.9, 0.7, 0]}>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshStandardMaterial color="#c8d8ff" roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0.9, 0.7, 0]}>
        <sphereGeometry args={[0.22, 12, 12]} />
        <meshStandardMaterial color="#c8d8ff" roughness={0.5} metalness={0.2} />
      </mesh>
    </>
  );
}

// ─── VARIANT 2: FLUFFY / YETI HOOD ─────────────────────────────────────────

function AstronautFluffy() {
  return (
    <>
      {/* Fluffy hood (large rough textured sphere, off-white) */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[1.3, 48, 48]} />
        <meshStandardMaterial
          color="#f8f5f0"
          roughness={0.95}
          metalness={0}
          flatShading
        />
      </mesh>
      {/* Face cutout (inner darker sphere — reveals the actual face) */}
      <mesh position={[0, 1.65, 0.55]}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial color="#fbebe0" roughness={0.7} metalness={0} />
      </mesh>

      {/* Antenna */}
      <group position={[0, 2.7, 0]}>
        <mesh>
          <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
          <meshStandardMaterial color="#c8a060" roughness={0.5} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial
            color="#ffd166"
            emissive="#ffd166"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Ears (small circles on sides of hood) */}
      <mesh position={[-1.25, 1.75, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial color="#f0d0b0" roughness={0.6} metalness={0} />
      </mesh>
      <mesh position={[1.25, 1.75, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial color="#f0d0b0" roughness={0.6} metalness={0} />
      </mesh>

      {/* Face features */}
      {/* Eyes */}
      <mesh position={[-0.28, 1.72, 1.2]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#1a1020" />
      </mesh>
      <mesh position={[0.28, 1.72, 1.2]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#1a1020" />
      </mesh>
      {/* Pink cheeks */}
      <mesh position={[-0.45, 1.55, 1.1]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#ff9999" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.45, 1.55, 1.1]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshBasicMaterial color="#ff9999" transparent opacity={0.7} />
      </mesh>
      {/* Smile */}
      <mesh position={[0, 1.55, 1.18]}>
        <torusGeometry args={[0.12, 0.025, 8, 16, Math.PI]} />
        <meshBasicMaterial color="#4a2520" />
      </mesh>

      {/* Body */}
      <WhiteSuitBody />
    </>
  );
}

// ─── VARIANT 3: MINIMAL / GLOWING EYES ─────────────────────────────────────

function AstronautMinimal() {
  return (
    <>
      {/* Head (smooth egg shape) */}
      <mesh position={[0, 1.7, 0]} scale={[1, 1.1, 1]}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial color="#f5f8ff" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Glowing eyes — vertical yellow slits */}
      <mesh position={[-0.3, 1.72, 0.92]}>
        <boxGeometry args={[0.06, 0.2, 0.04]} />
        <meshBasicMaterial color="#ffd84a" />
      </mesh>
      <mesh position={[-0.3, 1.72, 0.92]}>
        <boxGeometry args={[0.15, 0.32, 0.02]} />
        <meshBasicMaterial color="#ffd84a" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.3, 1.72, 0.92]}>
        <boxGeometry args={[0.06, 0.2, 0.04]} />
        <meshBasicMaterial color="#ffd84a" />
      </mesh>
      <mesh position={[0.3, 1.72, 0.92]}>
        <boxGeometry args={[0.15, 0.32, 0.02]} />
        <meshBasicMaterial color="#ffd84a" transparent opacity={0.3} />
      </mesh>

      {/* Helmet rim ring */}
      <mesh position={[0, 1.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.02, 0.06, 8, 48]} />
        <meshStandardMaterial color="#c0c8e0" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Body */}
      <group>
        <WhiteSuitBody />
        {/* Belt buckle (orange rectangle) */}
        <mesh position={[0, -0.3, 0.72]}>
          <boxGeometry args={[0.35, 0.2, 0.08]} />
          <meshStandardMaterial
            color="#e88a2a"
            roughness={0.4}
            metalness={0.4}
            emissive="#e88a2a"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Walking pose — right leg lifted */}
      {/* We modify this by re-placing the right leg */}
    </>
  );
}
