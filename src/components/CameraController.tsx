import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface CameraControllerProps {
  activeNFT: number | null;
  onScrollProgress: (progress: number) => void;
}

interface CameraState {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export default function CameraController({ activeNFT, onScrollProgress }: CameraControllerProps) {
  const { camera, gl } = useThree();
  const scrollRef = useRef(0);
  const targetPosRef = useRef(new THREE.Vector3(0, 35, 80));
  const targetLookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  // NFT character positions
  const nftPositions = useRef<CameraState[]>([
    // Overview camera (bird's eye)
    { position: new THREE.Vector3(0, 35, 80), target: new THREE.Vector3(0, 0, 0) },
    // NFT 1 - Close-up
    { position: new THREE.Vector3(-22, 6, -14), target: new THREE.Vector3(-20, 2, -10) },
    // NFT 2 - Close-up
    { position: new THREE.Vector3(5, 5, 0), target: new THREE.Vector3(0, 2, 0) },
    // NFT 3 - Close-up
    { position: new THREE.Vector3(22, 6, -14), target: new THREE.Vector3(20, 2, -10) },
  ]);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      scrollRef.current = Math.max(0, Math.min(scrollRef.current + e.deltaY * 0.0005, 1));
      onScrollProgress(scrollRef.current);
    };

    gl.domElement.addEventListener('wheel', handleScroll, { passive: false });
    return () => gl.domElement.removeEventListener('wheel', handleScroll);
  }, [gl, onScrollProgress]);

  useEffect(() => {
    // When NFT is clicked, animate camera to that position
    if (activeNFT !== null && nftPositions.current[activeNFT]) {
      targetPosRef.current.copy(nftPositions.current[activeNFT].position);
      targetLookAtRef.current.copy(nftPositions.current[activeNFT].target);
    } else {
      // Return to overview
      targetPosRef.current.copy(nftPositions.current[0].position);
      targetLookAtRef.current.copy(nftPositions.current[0].target);
    }
  }, [activeNFT]);

  useFrame(() => {
    // Smooth camera interpolation
    camera.position.lerp(targetPosRef.current, 0.03);
    
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.add(camera.position);
    currentLookAt.lerp(targetLookAtRef.current, 0.03);
    camera.lookAt(currentLookAt);
  });

  return null;
}