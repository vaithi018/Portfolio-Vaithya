"use client";

import { useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

export default function MinimalBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    // Hack to fix 'engine.checkVersion is not a function' mismatch
    if (typeof engine.checkVersion !== 'function') {
      engine.checkVersion = () => true;
    }
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-[#0a0a0a]">
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* 2. Minimalist Star Particles */}
      <div className="absolute inset-0">
        <Particles
          id="minimal-particles"
          // @ts-ignore: Wrapper version typescript mismatch
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
              },
              modes: {
                bubble: { distance: 200, size: 4, duration: 2, opacity: 0.8 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                direction: "top",
                outModes: { default: "out" },
                random: true,
                speed: 0.3,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: {
                value: 0.3,
                animation: { enable: true, speed: 0.5, sync: false, minimumValue: 0.1 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      
      {/* 3. Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
