// app/components/sections/HowItWorksSection.tsx (Versión 2.3)

"use client";

import { motion } from 'framer-motion';

const Step = ({ number, title, children }: { number: string, title: string, children: string }) => {
  // --- INICIO DE LA SECCIÓN MODIFICADA ---
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    // Eliminamos 'ease: "easeOut"' para cumplir con la definición de tipos
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  // --- FIN DE LA SECCIÓN MODIFICADA ---

  return (
    <motion.div 
      className="flex items-start md:flex-col md:items-center md:text-center"
      variants={stepVariants}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-sans font-bold text-xl mr-6 md:mr-0">
        {number}
      </div>
      <div className="mt-1 md:mt-4">
        <h3 className="font-sans font-bold text-lg text-primary">{title}</h3>
        <p className="font-body text-base-text mt-1">{children}</p>
      </div>
    </motion.div>
  );
};

export const HowItWorksSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans text-3xl font-bold text-secondary text-center">
          Teu caminh]o para um bom sono
        </h2>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-x-8 relative
                          after:hidden md:after:block after:absolute after:top-6 after:left-0 after:w-full 
                          after:h-0.5 after:bg-secondary after:-z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          
          <Step number="1" title="Subscrição por apenas R$ 197,oo  ">
            Acesso imediato ao programa, sem contratos nem compromissos de longo prazo. Sem renovações automáticas. Sem surpresas.
          </Step>
          <Step number="2" title="Siga o passo a passo">
            Estude os subtemas na sequência estabelecida e conheça o inimigo que está enfrentando. Entenda tudo o que precisa saber sobre a insônia.    
          </Step>
          <Step number="3" title="Responda os Questionários apresentados">
            São perguntas em linguagem simples e respostas de múltipla escolha, preparados por médicos e fundamentados em ciência.
          </Step>
          <Step number="4" title="Saiba qual é o seu Diagnóstico e qual o Tratamento ">
            Receba o seu diagnóstico primário e um plano terapêutico integrativo. Com vídeos, áudios e textos lhe enzinaremos como aplicar corretamente as técnicas de tratamento propostas.
          </Step>
          <Step number="5" title="Durma Bem e seja Feliz">
            Tenha um bom sono, tranquilo e suficientemente reparador. Disfrute sua vida plenamente.
          </Step>

        </motion.div>
      </div>
    </section>
  );
};
// FIRMADO: EDU