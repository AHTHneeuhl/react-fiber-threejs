/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      <meshNormalMaterial />
    </mesh>
  );
}

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <Center>
        <Shirt />
      </Center>
      <OrbitControls />
    </Canvas>
  );
};

export default App;
