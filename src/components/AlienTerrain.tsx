import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Simple pseudo-random noise function
function hash(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function noise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  const u = smoothstep(xf);
  const v = smoothstep(yf);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

function fbm(x: number, y: number): number {
  let val = 0;
  let amp = 0.5;
  for (let i = 0; i < 4; i++) {
    val += amp * noise(x, y);
    x *= 2.0;
    y *= 2.0;
    amp *= 0.5;
  }
  return val;
}

export default function AlienTerrain({ size = 80, segments = 120 }: { size?: number; segments?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    const pos = geo.attributes.position;
    const colors: number[] = [];

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const n = fbm(x * 0.08, y * 0.08);

      // Height variation: mostly flat plateau in middle, hills at edges
      const dx = x / (size * 0.5);
      const dy = y / (size * 0.5);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const plateau = Math.max(0, 1 - Math.pow(dist / 0.7, 3));

      const h = (n - 0.5) * 4 + plateau * 2.5;
      pos.setZ(i, h);

      // Color: deep purple/blue with neon highlights
      const r = 0.05 + n * 0.15;
      const g = 0.02 + n * 0.08 + (plateau > 0.9 ? 0.15 : 0);
      const b = 0.3 + n * 0.2;
      colors.push(r, g, b);
    }

    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, [size, segments]);

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <meshStandardMaterial
        vertexColors
        roughness={0.85}
        metalness={0.2}
        flatShading
      />
    </mesh>
  );
}
