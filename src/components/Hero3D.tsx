"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Hero3D.module.css';

const NeuralCube = () => {
    const groupRef = useRef<any>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.1;
            groupRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Outer Tech Cube Frame */}
            <Box args={[2.5, 2.5, 2.5]}>
                <meshBasicMaterial color="#4B0082" wireframe transparent opacity={0.3} />
            </Box>

            {/* Inner Glowing Core - The "Fusion" */}
            <Sphere args={[0.8, 64, 64]}>
                <MeshDistortMaterial
                    color="#00FFFF"
                    attach="material"
                    distort={0.6}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#00FFFF"
                    emissiveIntensity={0.5}
                />
            </Sphere>

            {/* Floating Sensory Nodes (Abstract Eye/Ear/Hand) */}
            <group rotation={[0.5, 0.5, 0]}>
                <Box args={[0.2, 0.2, 0.2]} position={[1.5, 0, 0]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
                <Box args={[0.2, 0.2, 0.2]} position={[-1.5, 0, 0]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
                <Box args={[0.2, 0.2, 0.2]} position={[0, 1.5, 0]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
                <Box args={[0.2, 0.2, 0.2]} position={[0, -1.5, 0]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
                <Box args={[0.2, 0.2, 0.2]} position={[0, 0, 1.5]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
                <Box args={[0.2, 0.2, 0.2]} position={[0, 0, -1.5]}>
                    <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1} />
                </Box>
            </group>

            {/* Connecting Lines (Neural Network) */}
            {/* In a real implementation, we'd draw lines between nodes, 
            but using a secondary wireframe box allows for a 'network' feel cheaply */}
            <Box args={[1.8, 1.8, 1.8]} rotation={[0.4, 0.4, 0]}>
                <meshBasicMaterial color="#AAA" wireframe transparent opacity={0.1} />
            </Box>
        </group>
    );
};

export const Hero3D = () => {
    return (
        <div className={styles.canvasContainer}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFFF" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#4B0082" />

                <NeuralCube />

                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};
