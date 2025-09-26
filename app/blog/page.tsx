// app/blog/page.tsx — Versión actualizada (sin fondo, subtítulo corregido)
"use client";
import { WiBlogSection } from '../components/sections/WiBlogSection';
import { motion } from 'framer-motion';

export default function BlogPage() {
  // Animación de deslizamiento para el título y subtítulo
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const subtitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Contenido principal — SIN FONDO DE MADERA */}
      <div className="relative z-10 pt-32 pb-24 px-6">
        {/* Título único de la página */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary text-center mb-4">
            Blog / Centro de recursos
          </h1>
        </motion.div>
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-body text-lg text-base-text text-center max-w-2xl mx-auto mt-4">
            Aqui, você não encontrará frases vazias como “5 dicas para dormir melhor”. Encontrará respostas profundas, claras e úteis a perguntas que milhares de pessoas fazem todos os dias.
          </p>
        </motion.div>

        {/* Contenido del componente — solo los artículos */}
        <div className="px-6">
          <WiBlogSection />
        </div>

        {/* CTA final — mantenido tal cual */}
        <div className="text-center mt-16">
          <p className="font-body text-lg text-base-text mb-8">
            ¿Listo para entender tu insomnio desde la ciencia?
          </p>
          <a
            href="/landing"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
          >
            Comience ahora por R$ 197 →
          </a>
        </div>
      </div>
    </div>
  );
}