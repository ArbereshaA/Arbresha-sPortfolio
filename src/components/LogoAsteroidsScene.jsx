import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import AsteroidLogo from "./AsteroidLogo";
import CanvasLoader from "./CanvasLoader";

export default function LogoAsteroidsScene({ icons = [] }) {
  if (!icons.length) return <div>No icons to display</div>;

  const columns = 4; // Number of asteroids per row
  const spacing = 8; // Space between asteroids (tweak as needed)

  // Calculate positions in a grid layout
  const positions = icons.map((_, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;

    // Calculate offsets so grid is centered around origin
    const xOffset = ((columns - 1) * spacing) / 2;
    const rowCount = Math.ceil(icons.length / columns);
    const yOffset = ((rowCount - 1) * spacing) / 2;

    // Position X and Y (Z is zero, on flat plane)
    const x = col * spacing - xOffset;
    const y = yOffset - row * spacing;
    return [x, y, 0];
  });

  return (
    <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          {icons.map((icon, i) => (
            <AsteroidLogo key={i} texturePath={icon} position={positions[i]} />
          ))}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
