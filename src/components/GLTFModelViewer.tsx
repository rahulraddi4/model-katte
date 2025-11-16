"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useGLTF,
  Center,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Center>
      <primitive ref={meshRef} object={scene.clone()} scale={1} />
    </Center>
  );
}

function LoadingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime();
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#9333ea" wireframe />
    </mesh>
  );
}

interface GLTFModelViewerProps {
  modelPath: string;
  className?: string;
}

export default function GLTFModelViewer({
  modelPath,
  className = "",
}: GLTFModelViewerProps) {
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 rounded-2xl overflow-hidden shadow-2xl border border-purple-200 ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={2}
          maxDistance={10}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <Suspense fallback={<LoadingBox />}>
          <Model url={modelPath} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      {/* Label */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-xs text-gray-600 font-medium">
          Interactive 3D Preview
        </p>
        <p className="text-xs text-gray-400">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}

// Preload models
useGLTF.preload("/models/damaged-helmet.glb");
useGLTF.preload("/models/duck.glb");
useGLTF.preload("/models/avocado.glb");
useGLTF.preload("/models/lantern.glb");
useGLTF.preload("/models/boombox.glb");
