'use client';

import * as React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, ShaderPass } from '@react-three/postprocessing';
import * as THREE from 'three';

const FogNoiseShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    fogColor: { value: new THREE.Color(0xffffff) },
    density: { value: 0.03 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec3 fogColor;
    uniform float density;
    varying vec2 vUv;

    // Simple 2D noise (value noise approximation)
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);

      // Animate noise
      float n = noise(vUv * 6.0 + vec2(time*0.05, time*0.03));

      // Fog overlay (volumetric effect)
      float fogAmount = smoothstep(0.3, 1.0, n) * density * 2.0;

      vec3 finalColor = mix(base.rgb, fogColor, fogAmount);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

const fogColors = [
  new THREE.Color(0xffffff), // white
  new THREE.Color(0x87ceeb), // blue
  new THREE.Color(0xff69b4), // pink
  new THREE.Color(0xff0000), // red
  new THREE.Color(0x00ff99), // teal
];

function SceneContent() {
  const cubeRef = React.useRef<THREE.Mesh>(null!);
  const composerRef = React.useRef<any>(null!);
  const sceneRef = React.useRef<THREE.Scene>(null!);
  
  let colorIndex = 0;
  let nextIndex = 1;
  const transitionTime = 2000; // 2 sec
  let elapsed = 0;

  useFrame((state, delta) => {
    const { clock, scene } = state;
    elapsed += delta * 1000;
    const time = clock.elapsedTime;
    
    if (elapsed >= transitionTime) {
      elapsed = 0;
      colorIndex = nextIndex;
      nextIndex = (nextIndex + 1) % fogColors.length;
    }

    const t = elapsed / transitionTime;
    const current = fogColors[colorIndex];
    const target = fogColors[nextIndex];
    const blended = current.clone().lerp(target, t);

    if (scene.fog) {
        scene.fog.color.copy(blended);
    }
    state.gl.setClearColor(blended);
    
    if (cubeRef.current) {
        (cubeRef.current.material as THREE.MeshStandardMaterial).emissive.copy(blended);
        cubeRef.current.rotation.y += 0.005;
    }

    const shaderPass = composerRef.current?.passes[1];
    if (shaderPass) {
        shaderPass.uniforms.fogColor.value.copy(blended);

        const baseDensity = 0.03;
        const breathing = (Math.sin(time * 1.5) * 0.015 + 0.02);
        
        if(scene.fog) {
            (scene.fog as THREE.FogExp2).density = breathing;
        }
        shaderPass.uniforms.density.value = breathing;
        shaderPass.uniforms.time.value = time;
    }
  });

  return (
    <>
      <fogExp2 ref={sceneRef} attach="fog" args={[0xffffff, 0.03]} />
      <OrbitControls />

      <directionalLight color={0xffffff} intensity={1.0} position={[10, 20, 10]} />
      
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color={0x222222} />
      </mesh>

      <mesh ref={cubeRef} position-y={2}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color={0xffffff} emissive={0xffffff} emissiveIntensity={1} />
      </mesh>

      <EffectComposer ref={composerRef}>
        <ShaderPass args={[FogNoiseShader]} />
      </EffectComposer>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ fov: 60, position: [0, 10, 30] }}>
      <SceneContent />
    </Canvas>
  );
}
