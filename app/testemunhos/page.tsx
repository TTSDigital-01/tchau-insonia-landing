// app/testemunhos/page.tsx
"use client";

import { motion } from 'framer-motion';
import { WiTestimoniosSection } from '../components/sections/WiTestimoniosSection';

export default function TestemunhosPage() {
  // Animación de deslizamiento para el título y subtítulo
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sección de título y subtítulo */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-sans text-4xl md:text-5xl font-bold text-primary mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Testemunhos Reais
          </motion.h1>
          <motion.p
            className="font-body text-xl text-base-text mb-10 max-w-3xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Histórias de superação, transformação e renovação. Conheça pessoas que, assim como você, venceram a insônia.
          </motion.p>
        </div>
      </section>

      {/* Sección del nuevo componente de testimonios */}
      {/* Este componente ahora ocupa h-screen como está definido internamente */}
      <WiTestimoniosSection />

      {/* Sección del CTA final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            // Opcional: Si se quiere que el CTA aparezca cuando entre en la vista, usar `whileInView` y `viewport`
            // animate="visible"
            animate="visible" // O `whileInView` si se prefiere
            // viewport={{ once: true }} // Si se usa `whileInView`
          >
            <a
              href="/landing"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Comece agora →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}