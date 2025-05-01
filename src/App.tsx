import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{
          position: [10000, 10000, 10000],
          rotation: [-0.5, 0, 0],
          far: 100000,
        }}
      >
        <color attach="background" args={["#000"]} />
        <ambientLight color={"#fff"} intensity={5} />
        <axesHelper args={[20000]} />
        <OrbitControls />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[100, 100, 100]} />
          <meshStandardMaterial color={"#f00"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
