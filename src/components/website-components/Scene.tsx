'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

function Fog() {
  const { size, viewport } = useThree();
  const fogRef = useRef<any>();
  const mouse = useRef(new Vector3());

  useFrame((state) => {
    const target = new Vector3(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    );
    mouse.current.lerp(target, 0.02);

    if (fogRef.current) {
      fogRef.current.position.copy(mouse.current);
      fogRef.current.scale.setScalar(
        1 + (Math.sin(state.clock.elapsedTime * 0.5) * 0.2)
      );
    }
  });

  return (
    <group>
      <pointLight ref={fogRef} intensity={200} color="white" distance={size.width / 2} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambient_light intensity={0.5} />
      <Fog />
    </Canvas>
  );
}
