/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import {
  AccumulativeShadows,
  Center,
  Environment,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function Shirt(props) {
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload("/shirt_baked_collapsed.glb");

function Backdrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <ambientLight intensity={0.5} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
      <CameraRig>
        <Center>
          <Shirt />
          <Backdrop />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default App;
