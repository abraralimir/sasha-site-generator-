'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ShaderMaterial, Vector2 } from 'three';
// @ts-ignore
import fragmentShader from './fog.glsl';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function Fog() {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    u_time: { value: 0.0 },
    u_mouse: { value: new Vector2(0.5, 0.5) },
    u_resolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  const handleMouseMove = (event:any) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_mouse.value.x = event.clientX / window.innerWidth;
      materialRef.current.uniforms.u_mouse.value.y = 1.0 - event.clientY / window.innerHeight;
    }
  };

  const handleResize = () => {
    if (materialRef.current) {
        materialRef.current.uniforms.u_resolution.value.x = window.innerWidth;
        materialRef.current.uniforms.u_resolution.value.y = window.innerHeight;
    }
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
  
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
      <Fog />
    </Canvas>
  );
}
