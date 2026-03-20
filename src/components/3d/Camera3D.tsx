import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PresentationControls, Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const StylizedCamera = () => {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.15;
    group.current.position.y = Math.sin(t / 1.5) * 0.1;
  });

  return (
    <group ref={group} scale={1.2}>
      {/* Body Front Case */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.7]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Body Texture/Grip Area */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[2.25, 1.2, 0.72]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>

      {/* Top Controls Part */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1, 0.3, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Lens Barrel */}
      <group position={[0, 0, 0.5]}>
        {/* outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.4, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
        </mesh>
        {/* inner barrel */}
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.5, 32]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.1} />
        </mesh>
        {/* lens glass */}
        <mesh position={[0, 0, 0.36]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.02, 32]} />
          <meshStandardMaterial color="#222" metalness={1} roughness={0} envMapIntensity={2} />
        </mesh>
      </group>

      {/* Viewfinder */}
      <mesh position={[0.7, 0.7, 0.2]}>
        <boxGeometry args={[0.3, 0.2, 0.2]} />
        <meshStandardMaterial color="#222" metalness={0.9} />
      </mesh>

      {/* Gold Shutter Button */}
      <group position={[-0.7, 0.85, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
        </mesh>
      </group>

      {/* Bottom Trim */}
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[2.2, 0.1, 0.75]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
};

const Camera3D: React.FC = () => {
  return (
    <>
      {/* Lighting for "Perfect" look */}
      <Environment preset="studio" />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4af37" />
      <spotLight
        position={[0, 5, 2]}
        intensity={2}
        angle={0.5}
        penumbra={1}
        castShadow
      />

      <PresentationControls
        global
        snap
        speed={2}
        damping={10}
        rotation={[0.1, 0.4, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <StylizedCamera />
        </Float>
      </PresentationControls>

      {/* Floating abstract decorative elements */}
      <Float speed={4} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-3, 2, -3]}>
          <torusKnotGeometry args={[0.3, 0.08, 128, 32]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2.5, -1.5, -4]}>
          <sphereGeometry args={[0.5, 64, 64]} />
          <MeshDistortMaterial color="#d4af37" speed={4} distort={0.5} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={0.5}>
        <mesh position={[0, 4, -5]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Ground shadows for depth */}
      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4.5}
      />
    </>
  );
};

export default Camera3D;
