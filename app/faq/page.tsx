// app/faq/page.tsx — Versión 3
"use client";
import { WiFaqSection } from '../components/sections/WiFaqSection';
import { motion } from 'framer-motion';

export default function FaqPage() {
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
      {/* Contenido principal */}
      <div className="relative z-10 pt-32 pb-24 px-6">
        {/* Título y subtítulo — SIN FONDO DE PAPEL */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary text-center mb-4">
            Perguntas frequentes
          </h1>
        </motion.div>
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-body text-lg text-base-text text-center max-w-2xl mx-auto mb-16">
            Se suas dúvidas ainda não foram respondidas, provavelmente outras pessoas também as têm. Aqui estão as respostas.
          </p>
        </motion.div>

        {/* Contenido del componente — TODO EL CONTENIDO ESTÁ AQUÍ */}
        <div className="px-6">
          <WiFaqSection />
        </div>

        {/* CTA final — MANTENIDO EN LA PÁGINA, COMO ESPECIFICADO */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="font-body text-lg text-base-text mb-8">
            Se ainda tem dúvidas, ou se quer saber como começar, você pode:
          </p>
          <a
            href="/landing"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
          >
            Comece agora por R$ 197 →
          </a>
        </div>
      </div>
    </div>
  );
}