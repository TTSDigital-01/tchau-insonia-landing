// app/ciencia/page.tsx — Versión 3.1 (CORREGIDA: enlace funciona + imagen se renderiza)
"use client";
import { motion } from 'framer-motion';
import { WiCienciaSection } from '../components/sections/WiCienciaSection';
import Link from 'next/link';

export default function CienciaPage() {
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Fondo abstracto de flujo — IGUAL QUE EN /METODO, /INSOMNIO, /SOBRE */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/metodo-flow.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Contenido principal */}
      <div className="relative z-10">
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
        {/* ✅ IMPORTANTE: mantener el contenedor px-6 para que WiCienciaSection se renderice correctamente */}
        <div className="px-6">
          <WiCienciaSection />
        </div>
        {/* CTA FINAL — CORREGIDO: envuelto en div con z-20 y cursor-pointer */}
        <div className="py-20 px-6 text-center">
          <p className="font-sans text-lg text-base-text mb-8">
            Se você quiser conhecer o profissional por trás do nosso programa, visite:
          </p>
          <div className="relative z-20">
            <Link
              href="/sobre"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Sobre nós →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}