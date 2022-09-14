import { Suspense, useRef } from "react";
import { Box } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  BallCollider,
  InstancedRigidBodies,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { Vector3 } from "three";
import styled from "styled-components";

const InstancedSpheres = ({ radius = 1, segments = 24 }) => {
  const ref = useRef();
  const { viewport } = useThree();
  const count = viewport.width < 30 ? 100 : 165;

  return (
    <InstancedRigidBodies
      ref={ref}
      colliders="ball"
      positions={Array.from({ length: count }, () => [
        2 - Math.random() * 4,
        2 - Math.random() * 4,
        2 - Math.random() * 4,
      ])}
    >
      <instancedMesh
        castShadow
        receiveShadow
        args={[null, null, count]}
        position={[0, 0, -10]}
      >
        <sphereBufferGeometry args={[radius, segments, segments]} />
        <meshLambertMaterial color="#007326" />
      </instancedMesh>
    </InstancedRigidBodies>
  );
};

const Border = (props) => {
  return (
    <RigidBody colliders="cuboid" type="fixed">
      <Box args={[100, 100, 10]} {...props} material={false} visible={true} />
    </RigidBody>
  );
};

const Borders = () => {
  // This can cause a re-render whenever viewport changes size
  const { viewport } = useThree();
  return (
    <>
      {/* Top */}
      <Border
        position={[0, 9 + viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Bottom */}
      <Border
        position={[0, -9 - viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Left */}
      <Border
        position={[-15 - viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />

      {/* Right */}
      <Border
        position={[15 + viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {/* Back */}
      <Border position={[0, 0, -3]} rotation={[0, 0, 0]} />

      {/* Front */}
      <Border position={[0, 0, 20]} rotation={[0, -Math.PI, 0]} />
    </>
  );
};

const Mouse = () => {
  const ref = useRef();

  // This can cause a re-render whenever viewport changes size
  const { viewport } = useThree();

  useFrame((state) =>
    ref.current?.setTranslation(
      new Vector3(
        (state.mouse.x * viewport.width) / 1.5,
        (state.mouse.y * viewport.height) / 1.5,
        2
      )
    )
  );

  return (
    <RigidBody ref={ref} colliders={false} type="kinematicPosition">
      <BallCollider args={[3]} />
    </RigidBody>
  );
};

export const BallPit = () => {
  return (
    <BallPitWrapper>
      <Canvas
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 50, near: 15, far: 400 }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          intensity={4}
          position={[50, 50, 25]}
          shadow-mapSize={[512, 512]}
          shadow-camera-left={-15}
          shadow-camera-right={15}
          shadow-camera-top={10}
          shadow-camera-bottom={-20}
        />

        <Suspense>
          <Physics gravity={[0, -50, 0]}>
            <group position={[0, 0, -10]}>
              <Mouse />
              <Borders />

              <InstancedSpheres radius={2} />
            </group>
          </Physics>
        </Suspense>
      </Canvas>
    </BallPitWrapper>
  );
};

const BallPitWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export default BallPit;
