import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default ThreeScene;