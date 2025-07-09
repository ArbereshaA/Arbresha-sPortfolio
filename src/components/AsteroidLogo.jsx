import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Decal, Float } from "@react-three/drei";

export default function AsteroidLogo({ texturePath, position }) {
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={2}>
      <mesh position={position} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
          wireframe={false}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={texture}
          flatShading
          transparent
        />
      </mesh>
    </Float>
  );
}
