import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import AsteroidLogo from "./AsteroidLogo";
import CanvasLoader from "./CanvasLoader";

export default function LogoAsteroidsScene({ icons = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!icons.length) return <div>No icons to display</div>;

  if (isMobile) {
    // ✅ Simple vertical stack on mobile (NO Canvas)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          padding: "20px",
        }}
      >
        {icons.map((icon, i) => (
          <Canvas
            key={i}
            style={{ width: "150px", height: "150px" }}
            camera={{ position: [0, 0, 7], fov: 45 }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <AsteroidLogo texturePath={icon} position={[0, 0, 0]} />
              <Preload all />
            </Suspense>
          </Canvas>
        ))}
      </div>
    );
  }

  // ✅ 3D grid layout on desktop
  const columns = 4;
  const spacing = 8;

  const positions = icons.map((_, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;

    const xOffset = ((columns - 1) * spacing) / 2;
    const rowCount = Math.ceil(icons.length / columns);
    const yOffset = ((rowCount - 1) * spacing) / 2;

    const x = col * spacing - xOffset;
    const y = yOffset - row * spacing;
    return [x, y, 0];
  });

  return (
    <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
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
