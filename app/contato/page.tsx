// app/contato/page.tsx — Versión 3.1
"use client";
import { WiContactoSection } from '../components/sections/WiContactoSection';
import { motion } from 'framer-motion';

export default function ContatoPage() {
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
      {/* Fondo de mano extendida — SOLO EN LA PÁGINA */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/contato-mao.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Contenido principal — SIN FONDO, SIN TÍTULO, SIN SUBTÍTULO EN EL COMPONENTE */}
      <div className="relative z-10 pt-32 pb-24 px-6">
        {/* TÍTULO ÚNICO — SOLO AQUÍ */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary text-center mb-4">
            Contato / Agende uma consulta
          </h1>
        </motion.div>
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="font-body text-lg text-base-text text-center max-w-2xl mx-auto mb-16">
            Se você já entendeu seu caso e precisa de apoio humano, estamos aqui.
          </p>
        </motion.div>

        {/* CONTENIDO ÚNICO — SOLO EN EL COMPONENTE */}
        <div className="px-6">
          <WiContactoSection />
        </div>

        {/* CTA FINAL — SOLO AQUÍ */}
        <div className="text-center mt-16">
          <p className="font-body text-lg text-base-text mb-8">
            Se ainda não está pronto para conversar, pode começar por R$ 197.
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