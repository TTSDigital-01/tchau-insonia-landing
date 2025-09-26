// app/componentes/sections/WiHeroSections.tsx

"use client"; // 👈 ¡Esta línea es la clave!

import { useEffect } from 'react';

export const WiHeroSection = () => {
  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play().catch((error) => {
        console.warn('No se pudo reproducir el video:', error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/images/Video1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="font-sans text-4xl md:text-6xl font-bold leading-tight mb-6">
          Recupera teu sono, recupera tua vida. 
        </h1>
        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto text-secondary">
          Dormir melhor é o primeiro passo para viver melhor. Vamos começar hoje mesmo.
        </p>
      </div>
    </section>
  );
};