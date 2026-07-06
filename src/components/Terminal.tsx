import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AlienTerrain from './AlienTerrain';
import AlienStructures from './AlienStructures';
import Hotspot from './Hotspot';
import NFTCharacter from './NFTCharacter';
import HUDOverlay from './HUDOverlay';

interface TerminalProps {
  onExit: () => void;
}

export default function Terminal({ onExit }: TerminalProps) {
  const [activeNFT, setActiveNFT] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const nftData = [
    { name: 'ENTITY ALPHA', score: '8.7/10', position: [-20, 2, -10] as [number, number, number] },
    { name: 'ENTITY BETA', score: '9.0/10', position: [0, 2, 0] as [number, number, number] },
    { name: 'ENTITY GAMMA', score: '8.2/10', position: [20, 2, -10] as [number, number, number] },
  ];

  const handleHotspotClick = (id: number) => {
    setActiveNFT(id);
  };

  const handleBackToOverview = () => {
    setActiveNFT(null);
  };

  // Fake loading progress
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to explore (simple camera state)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollProgress(prev => {
        const next = Math.max(0, Math.min(1, prev + e.deltaY * 0.001));
        return next;
      });
    };
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
      return () => canvas.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-40">
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-[60]">
          <div className="text-center">
            <div className="text-neon text-xl font-grotesk tracking-[0.3em] mb-8 opacity-90" style={{animation: 'pulse 1.5s ease-in-out infinite'}}>
              ▸ INITIALIZING TERMINAL
            </div>
            <div className="text-cream/40 text-xs tracking-[0.2em] mb-8">
              LOADING ALIEN WORLD DATA
            </div>
            <div className="w-64 h-[2px] bg-white/10 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-neon" style={{animation: 'loading-bar 1.5s ease-in-out forwards', width: '100%'}} />
            </div>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 30, 70], fov: 50, near: 0.1, far: 500 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#010828']} />
        <fog attach="fog" args={['#010828', 50, 150]} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 5]} intensity={0.6} />
        <pointLight position={[-20, 10, -10]} intensity={0.8} color="#b724ff" />
        <pointLight position={[20, 10, 10]} intensity={0.8} color="#6FFF00" />

        <Suspense fallback={null}>
          <Stars radius={150} depth={60} count={3000} factor={4} saturation={0.5} fade speed={1} />
        </Suspense>

        <AlienTerrain size={80} segments={60} />
        <AlienStructures />

        {nftData.map((nft, idx) => (
          <group key={idx}>
            <NFTCharacter position={nft.position} isActive={activeNFT === idx} />
            <Hotspot
              position={[nft.position[0], nft.position[1] + 4, nft.position[2]]}
              nftId={idx}
              onClick={handleHotspotClick}
              isActive={activeNFT === idx}
            />
          </group>
        ))}

        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          enablePan={false}
          minDistance={15}
          maxDistance={100}
          maxPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* HUD Overlay */}
      <HUDOverlay
        activeNFT={activeNFT}
        onExit={onExit}
        onBackToOverview={handleBackToOverview}
        scrollProgress={scrollProgress}
      />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[55] opacity-[0.04]">
        <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(0deg, rgba(111,255,0,0.3) 0px, transparent 1px, transparent 3px)'}} />
      </div>
    </div>
  );
}