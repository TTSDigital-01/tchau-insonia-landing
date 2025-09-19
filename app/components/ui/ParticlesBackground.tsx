// app/components/ui/ParticlesBackground.tsx (Versión 1.2)

"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import type { Engine, ISourceOptions } from "tsparticles-engine"; // 1. Importar ISourceOptions

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // 2. Aplicar el tipo explícito a nuestro objeto de opciones
  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 60,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#AAB8E8",
      },
      links: {
        enable: false,
      },
      move: {
        direction: "none", // TypeScript ahora entiende que "none" es un valor válido
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: 0.4,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-10"
    />
  );
};
// FIRMADO: EDU