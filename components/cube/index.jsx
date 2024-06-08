"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styles from "./style.css";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
export default function index() {
  return (
    <div className="h-screen ml-10">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);
  const options = {
    damping: 20,
  };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientX / innerHeight;
    mouse.x.set(x * 2);
    mouse.y.set(y * 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mouseMove", manageMouseMove);
  }, []);

  useFrame((state, delta) => {
    // mesh.current.rotation.x += delta * 0.25;
    // mesh.current.rotation.y += delta * 0.25;
    // mesh.current.rotation.z += delta * 0.25;
  });

  const texture_1 = useLoader(TextureLoader, "/assets/1.png");
  const texture_2 = useLoader(TextureLoader, "/assets/2.png");
  const texture_3 = useLoader(TextureLoader, "/assets/3.png");
  const texture_4 = useLoader(TextureLoader, "/assets/4.png");
  const texture_5 = useLoader(TextureLoader, "/assets/5.png");
  const texture_6 = useLoader(TextureLoader, "/assets/6.png");
  return (
    <motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y}>
      <boxGeometry args={[3.25, 3.25, 3.25]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}
