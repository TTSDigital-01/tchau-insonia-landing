// app/insomnio/page.tsx — Versión 6 CORREGIDA Y FUNCIONAL
"use client";
import { WiSobreInsomnioSection } from '../components/sections/WiSobreInsomnioSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InsomnioPage() {
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const subtitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } },
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="relative z-10 pt-32 pb-24 px-6">
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            O que é a insônia? (E o que não é)
          </h1>
        </motion.div>
        <motion.div variants={subtitleVariants} initial="hidden" animate="visible">
          <p className="font-body text-lg text-base-text text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            A insônia não é apenas “não conseguir dormir”. É um distúrbio do sono que afeta sua capacidade de adormecer, manter o sono ou descansar profundamente, mesmo quando você tem a oportunidade de fazê-lo. Não é sinal de fraqueza. Não é preguiça. Não é algo que se resolve com “pensar em coisas boas”. É uma condição real, comum e, acima de tudo: tratável.
          </p>
        </motion.div>

        <div className="px-6">
          <WiSobreInsomnioSection />
        </div>

        {/* CTA FINAL — CORREGIDO CON ENVOLTURA DE SEGURIDAD */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mt-16 relative z-20">
            <p className="font-body text-lg text-base-text mb-8">
              Se quiser entender como identificamos seu tipo de insônia e le oferecemos um plano realista, continue aqui:
            </p>
            <Link
              href="/metodo"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Conheça nosso método →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}