import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import AlienTerrain from './AlienTerrain';
import AlienStructures from './AlienStructures';
import Hotspot from './Hotspot';
import NFTCharacter from './NFTCharacter';
import CameraController from './CameraController';
import HUDOverlay from './HUDOverlay';

interface TerminalProps {
  onExit: () => void;
}

export default function Terminal({ onExit }: TerminalProps) {
  const [activeNFT, setActiveNFT] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // NFT data
  const nftData = [
    { name: 'Entity Alpha', score: '8.7/10', position: [-20, 2, -10] as [number, number, number] },
    { name: 'Entity Beta', score: '9.0/10', position: [0, 2, 0] as [number, number, number] },
    { name: 'Entity Gamma', score: '8.2/10', position: [20, 2, -10] as [number, number, number] },
  ];

  const handleHotspotClick = (id: number) => {
    setActiveNFT(id);
  };

  const handleBackToOverview = () => {
    setActiveNFT(null);
  };

  return (
    <div className="fixed inset-0 bg-background z-40">
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="text-center">
            <div className="text-neon font-grotesk text-6xl mb-4 animate-pulse">
              INITIALIZING TERMINAL
            </div>
            <div className="text-cream/60 text-sm tracking-widest">
              LOADING ALIEN WORLD...
            </div>
            <div className="mt-8 w-48 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden">
              <div className="h-full bg-neon animate-loading-bar" />
            </div>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 35, 80], fov: 60 }}
        onCreated={() => setTimeout(() => setLoading(false), 2000)}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#010828']} />
        <fog attach="fog" args={['#010828', 60, 120]} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 20, 5]} intensity={0.5} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#b724ff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6FFF00" />

        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0.5} fade speed={1} />
          
          <AlienTerrain size={80} segments={120} />
          <AlienStructures />

          {/* NFT Characters with Hotspots */}
          {nftData.map((nft, idx) => (
            <group key={idx}>
              <NFTCharacter position={nft.position} isActive={activeNFT === idx} />
              <Hotspot
                position={[nft.position[0], nft.position[1] + 4, nft.position[2]]}
                nftId={idx}
                name={nft.name}
                score={nft.score}
                onClick={handleHotspotClick}
                isActive={activeNFT === idx}
              />
            </group>
          ))}

          <CameraController 
            activeNFT={activeNFT} 
            onScrollProgress={setScrollProgress} 
          />
        </Suspense>
      </Canvas>

      {/* HUD Overlay */}
      <HUDOverlay
        activeNFT={activeNFT}
        onExit={onExit}
        onBackToOverview={handleBackToOverview}
        scrollProgress={scrollProgress}
      />

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent animate-scanline" />
      </div>
    </div>
  );
}