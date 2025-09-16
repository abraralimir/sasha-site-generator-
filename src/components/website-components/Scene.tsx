'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import type { WebsiteComponent } from '@/lib/types';

export default function Scene(props: WebsiteComponent) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || containerRef.current.children.length > 0) {
      return;
    }

    const currentRef = containerRef.current;

    // --- Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    currentRef.appendChild(renderer.domElement);

    // --- Postprocessing ---
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const FogNoiseShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0 },
        fogColor: { value: new THREE.Color(0xffffff) },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 fogColor;
        uniform vec2 resolution;
        varying vec2 vUv;

        // 2D Random
        float random (in vec2 st) {
            return fract(sin(dot(st.xy,
                                 vec2(12.9898,78.233)))
                         * 43758.5453123);
        }

        // 2D Noise based on Morgan McGuire @morgan3d
        // https://www.shadertoy.com/view/4dS3Wd
        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            // Four corners in 2D of a tile
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        #define OCTAVES 6
        float fbm (in vec2 st) {
            // Initial values
            float value = 0.0;
            float amplitude = .5;
            float frequency = 0.;
            //
            // Loop of octaves
            for (int i = 0; i < OCTAVES; i++) {
                value += amplitude * noise(st);
                st *= 2.;
                amplitude *= .5;
            }
            return value;
        }


        void main() {
            vec2 st = vUv;
            st.x *= resolution.x / resolution.y; // aspect ratio correction
            
            vec2 q = vec2(0.);
            q.x = fbm( st + 0.00*time);
            q.y = fbm( st + vec2(1.0));

            vec2 r = vec2(0.);
            r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*time );
            r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*time);

            float f = fbm(st+r);

            vec3 color = mix(fogColor,
                             vec3(0.0),
                             clamp((f*f)*4.0,0.0,1.0));

            color = mix(color,
                        fogColor,
                        clamp(length(q),0.0,1.0));

            color = mix(color,
                        fogColor,
                        clamp(length(r.x),0.0,1.0));

            gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color, 1.);
        }
      `,
    };

    const fogNoisePass = new ShaderPass(FogNoiseShader);
    composer.addPass(fogNoisePass);

    // --- Animation state ---
    const fogColors = [0xffffff, 0x87ceeb, 0xff69b4, 0xff0000, 0x00ff99];
    let colorIndex = 0;
    let nextIndex = 1;
    let transitionTime = 4000; // 4 sec
    let elapsed = 0;

    const clock = new THREE.Clock();
    let animationFrameId: number;

    // --- Animate ---
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      elapsed += delta * 1000;
      const time = clock.getElapsedTime();

      if (elapsed >= transitionTime) {
        elapsed = 0;
        colorIndex = nextIndex;
        nextIndex = (nextIndex + 1) % fogColors.length;
      }

      let t = elapsed / transitionTime;
      let current = new THREE.Color(fogColors[colorIndex]);
      let target = new THREE.Color(fogColors[nextIndex]);
      let blended = current.clone().lerp(target, t);
      
      fogNoisePass.uniforms.fogColor.value.copy(blended);
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
      fogNoisePass.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className='absolute inset-0 z-0 h-screen' />;
}
