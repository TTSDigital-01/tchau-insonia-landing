// app/metodo/page.tsx — Versión 3.2 (segura, sin cambios estructurales)
"use client";
import { WiMetodoSection } from '../components/sections/WiMetodoSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MetodoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Fondo animado abstracto */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/metodo-flow.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            zIndex: 1,
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="pt-20 pb-16 px-6 text-center">
          <h1 className="font-sans text-4xl md:text-6xl font-bold text-primary mb-6">
            Nosso método
          </h1>
          <p className="font-body text-lg md:text-xl text-base-text max-w-3xl mx-auto leading-relaxed">
            Un enfoque integrativo: ciência, tecnologia e acompanhamento
          </p>
        </div>
        <div className="px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <WiMetodoSection />
          </motion.div>
        </div>
        {/* CTA FINAL — CORREGIDO: envuelto en div con z-20 y cursor-pointer */}
        <div className="py-12 px-6 text-center">
          <p className="font-body text-lg text-base-text mb-8">
            Se você gostaria de aprender sobre os princípios científicos que sustentam nosso método, visite:
          </p>
          <div className="relative z-20">
            <Link 
              href="/ciencia"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              A Ciência por Trás do Nosso Método
            </Link>
          </div>
        </div>
      </div>
    </div> 
  );
}