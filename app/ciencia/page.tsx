// app/ciencia/page.tsx
"use client";
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { WiCienciaSection } from '../components/sections/WiCienciaSection';

export default function CienciaPage() {
  // Animación de deslizamiento del título y subtítulo — con tipografía correcta
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Fondo sutil para profundidad — BLANCO Puro, SIN TEXTURA */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/images/ciencia-diario.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      {/* Contenido principal */}
      <div className="relative z-10">
        {/* TÍTULO Y SUBTÍTULO — USANDO LA TIPOGRAFÍA DE LA WEB INSTITUCIONAL */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="pt-32 pb-16 px-6 text-center"
        >
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Não é magia. É medicina do sono, atualizada.
          </h1>
          <p className="font-sans text-lg md:text-xl text-base-text max-w-4xl mx-auto leading-relaxed">
            Em um mundo cheio de soluções rápidas para a insônia — remédios, suplementos, apps que prometem milagres — pode parecer difícil acreditar que algo realmente funcione.
          </p>
        </motion.div>

        {/* IMAGEN INTERACTIVA — EN EL COMPONENTE WiCienciaSection.tsx, A LA DERECHA, CON SOMBRAS SUAVES */}
        <div className="px-6">
          <WiCienciaSection />
        </div>

        {/* CTA FINAL — SUAVE, COMO UNA INVITACIÓN */}
        <div className="py-20 px-6 text-center">
          <p className="font-sans text-lg text-base-text mb-8">
            Se você quiser conhecer o profissional por trás do nosso programa, visite:
          </p>
          <a
            href="/sobre"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all border border-accent/30"
          >
            Sobre nós →
          </a>
        </div>
      </div>
    </div>
  );
}