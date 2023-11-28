import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls autoRotate={true} />
        <mesh>
          {/* 빛 추가 , 기본 값 1 */}
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.5} />
          {/* 박스 추가 */}
          <boxGeometry args={[1, 1, 1]} />
          {/* 색상 추가 */}
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
