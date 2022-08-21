import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


const Cube = () => {
    const meshRef = useRef(null);

    useFrame(() => {
        if(!meshRef.current) {
            return;
        }

        // meshRef.current.rotation.x += 0.01;
        // meshRef.current.rotation.y += 0.01;
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color='#ff0000' />
        </mesh>
    )
}


export default function CubeTest() {
  return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube/>
    </Canvas>
  )
}
 