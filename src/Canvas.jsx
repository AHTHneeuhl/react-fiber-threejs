/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import {
  AccumulativeShadows,
  Center,
  OrbitControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <ambientLight intensity={0.5} />
      <Center>
        <Shirt />
        <Backdrop />
      </Center>
      <OrbitControls />
    </Canvas>
  );
};

export default App;
