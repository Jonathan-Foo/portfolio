import React, {useState, useEffect} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Physics, usePlane, useSphere } from "@react-three/cannon"
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing"
import styled from 'styled-components';
import { clamp } from "lodash-es"; 
import pingSound from "../assets/POP.mp3"

const color = {
  ball: "#007326",
  fog: "#009c94",
  bg: "#a8ffaa"
}

const sphere = {
  radius: 1.5
}

function throttle(cb, delay = 200) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}



export default function BallPit({ audio }) {
  
  const ping = new Audio(pingSound);
  const collisionSound= throttle((e) => {
    // console.log(e.contact.impactVelocity);
    if(!audio) return;
    if(e.contact.impactVelocity > 5) {
      ping.currentTime = 0
      ping.volume = clamp(e.contact.impactVelocity/ 20, 0, 1)
      ping.play();
    }
  })

  
  return (
    <BallPitWrapper >
      <Canvas shadows gl={{ stencil: false, antialias: false }} camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}>     
        <fog attach="fog" args={[color.fog, 25, 35]} />
        {/* <color attach="background" args={[color.bg]} /> */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <directionalLight
          castShadow
          intensity={4}
          position={[50, 50, 25]}
          shadow-mapSize={[256, 256]}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics gravity={[0, -50, 0]} defaultContactMaterial={{ restitution: 0.5 }}>
          <group position={[0, 0, -10]}>
            <Mouse />
            <Borders />
            <InstancedSpheres collisionSound={collisionSound} />
          </group>
        </Physics>
        <EffectComposer>
          <SSAO radius={0.4} intensity={20} luminanceInfluence={0.1} color="red" />
          <Bloom intensity={0.25} kernelSize={3} luminanceThreshold={0.} luminanceSmoothing={0.0} />
        </EffectComposer>
        
      </Canvas>
    </BallPitWrapper>
  )
}

function InstancedSpheres({ count = 200, collisionSound }) {
  const { viewport } = useThree()
  const [ref] = useSphere((index) => ({ mass: 100, position: [4 - Math.random() * 8, viewport.height, 0, 0], args: [sphere.radius], onCollide: (e) => collisionSound(e)}))
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, count]}>
      <sphereBufferGeometry args={[sphere.radius, 32, 32]} />
      <meshLambertMaterial color={color.ball}/>
    </instancedMesh>
  )
}

function Borders() {
  const { viewport } = useThree()
  return (
    <>
      <Plane position={[0, -viewport.height * 0.55, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[-viewport.width / 2 - 1, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[viewport.width / 2 + 1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  )
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props } ))
  return null
}

function Mouse() {
  const [mouseSize, setMouseSize] = useState(4)

  const { viewport } = useThree()
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [mouseSize] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 7))
}


const BallPitWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`