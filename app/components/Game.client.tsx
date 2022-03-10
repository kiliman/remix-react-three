import {
  Icosahedron,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";

const NUM = 3;
interface Positions {
  id: string;
  position: [number, number, number];
}

export default function PerspectiveCameraScene() {
  const positions = useMemo(() => {
    const pos: Positions[] = [];
    const half = (NUM - 1) / 2;

    for (let x = 0; x < NUM; x++) {
      for (let y = 0; y < NUM; y++) {
        pos.push({
          id: `${x}-${y}`,
          position: [(x - half) * 4, (y - half) * 4, 0],
        });
      }
    }

    return pos;
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#121212" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <group position={[0, 0, -10]}>
          {positions.map(({ id, position }) => (
            <Icosahedron key={id} position={position} args={[1, 1]}>
              <meshBasicMaterial attach="material" color="white" wireframe />
            </Icosahedron>
          ))}
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export function xGame() {
  return (
    <Canvas>
      {/* comment out next line (PerspectiveCamera element) and things will run */}
      {/* <PerspectiveCamera makeDefault /> */}
      <fog attach="fog" color="black" near={0} far={15} />
      <ambientLight color="#505050" />
      <spotLight
        position={[2, 3, 3]}
        angle={Math.PI / 5}
        penumbra={0.2}
        castShadow={true}
        color="white"
      />
      <directionalLight
        position={[0, 3, 0]}
        castShadow={true}
        color="#55505a"
      />
      <mesh>
        <boxGeometry args={[20, 20, 1, 1, 1, 1]} />
        <meshPhongMaterial color="#a0adaf" shininess={150} />
      </mesh>
    </Canvas>
  );
}
