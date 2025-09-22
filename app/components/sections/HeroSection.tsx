/**
 * @version 7.0
 * @author "M (Experto 5 - BIZ-PLAN-PRO)"
 * @date 2025-08-26
 * @description Implementa un degradado seguro. La sección ahora detecta si WebGL no es compatible y muestra un fondo de imagen estático como respaldo, asegurando que el contenido sea siempre visible.
 */
// RUTA: app/components/sections/HeroSection.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { FaLock } from "react-icons/fa";
import dynamic from 'next/dynamic';
import clsx from 'clsx'; // Importamos clsx para manejar clases condicionales

// Carga dinámica del componente GalaxyBackground
const GalaxyBackground = dynamic(
  () => import('../ui/GalaxyBackground').then(mod => mod.default),
  { ssr: false }
);

export const HeroSection = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <div
        className={clsx(
          "absolute inset-0 z-0 bg-gradient-to-r from-primary via-slate-900 to-slate-900 animate-gradient",
          // Clases para el fondo de respaldo
          "bg-cover bg-center",
          {
            // Esta clase solo se aplica si WebGL no es compatible
            'bg-stars-pattern': !webGLSupported
          }
        )}
        style={{ backgroundSize: '400% 400%' }}
      />

      {/* Renderizado condicional del fondo Galaxy */}
      {webGLSupported && (
        <GalaxyBackground
          onWebGLUnsupported={() => setWebGLSupported(false)}
        />
      )}

      <div 
        className="absolute inset-0 z-20 opacity-[0.03]"
        style={{ backgroundImage: `url('/noise.png')`, backgroundRepeat: 'repeat' }}
      />
      
      <motion.div
        className="relative z-30 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-sans text-4xl md:text-6xl font-bold text-white leading-tight"
          variants={itemVariants}
        >
          Recupera teu sono, recupera tua vida
        </motion.h1>
        
        <motion.p
          className="font-body text-lg md:text-xl text-secondary max-w-2xl mx-auto mt-6"
          variants={itemVariants}
        >
          Um bom sono é o primeiro passo para viver bem.  Ingressa ao programa médico digital mais completo para recuperar teu sono. Sem medicamentos. Baseado em ciência. Desde o conforto da tua casa.
        </motion.p>

        <motion.div 
          className="mt-10" 
          variants={itemVariants}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
        >
          <Button size="lg" asChild className="shadow-2xl shadow-accent/20 w-full md:w-auto">
            <a href="/checkout">
              <FaLock className="mr-2 h-5 w-5" />
              Subscrição promocional por apenas R$ 197  Acesso imediato!
            </a>
          </Button>
        </motion.div>
        
      </motion.div>
    </section>
  );
};