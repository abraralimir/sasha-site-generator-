'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.children.length > 0) {
      return;
    }

    const currentRef = containerRef.current;

    // --- Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.03);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 10, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // --- Objects ---
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({ color: 0x222222 })
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(4, 4, 4),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1,
      })
    );
    cube.position.y = 2;
    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(10, 20, 10);
    scene.add(light);

    // --- Postprocessing ---
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const FogNoiseShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        fogColor: { value: new THREE.Color(0xffffff) },
        density: { value: 0.03 },
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
          float n = noise(vUv * 6.0 + vec2(time*0.05, time*0.03));
          float fogAmount = smoothstep(0.3, 1.0, n) * density * 2.0;
          vec3 finalColor = mix(base.rgb, fogColor, fogAmount);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    };

    const fogNoisePass = new ShaderPass(FogNoiseShader);
    composer.addPass(fogNoisePass);

    // --- Animation state ---
    const fogColors = [0xffffff, 0x87ceeb, 0xff69b4, 0xff0000, 0x00ff99];
    let colorIndex = 0;
    let nextIndex = 1;
    let transitionTime = 2000; // 2 sec
    let elapsed = 0;

    const clock = new THREE.Clock();
    let animationFrameId: number;

    // --- Animate ---
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      elapsed += delta * 1000;
      const time = clock.elapsedTime;

      if (elapsed >= transitionTime) {
        elapsed = 0;
        colorIndex = nextIndex;
        nextIndex = (nextIndex + 1) % fogColors.length;
      }

      let t = elapsed / transitionTime;
      let current = new THREE.Color(fogColors[colorIndex]);
      let target = new THREE.Color(fogColors[nextIndex]);
      let blended = current.clone().lerp(target, t);

      // apply colors
      if (scene.fog) {
          scene.fog.color.copy(blended);
      }
      renderer.setClearColor(blended);
      (cube.material as THREE.MeshStandardMaterial).emissive.copy(blended);
      fogNoisePass.uniforms.fogColor.value.copy(blended);

      // breathing fog density
      let breathing = Math.sin(time * 1.5) * 0.015 + 0.03;
      if (scene.fog) {
        (scene.fog as THREE.FogExp2).density = breathing;
      }
      fogNoisePass.uniforms.density.value = breathing;

      cube.rotation.y += 0.005;
      fogNoisePass.uniforms.time.value = time;

      composer.render();
    }

    animate();

    // --- Resize handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      currentRef.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className='absolute inset-0 z-0' />;
}
