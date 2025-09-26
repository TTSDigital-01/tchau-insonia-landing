// app/components/sections/WiSobreNosotrosSection.tsx
"use client";

import { motion } from 'framer-motion';

export const WiSobreNosotrosSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      {/* Fondo de habitación cálida */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/sobre-fondo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Imagen del Dr. Rivera */}
          <div className="lg:w-1/3 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100"
            >
              <img
                src="/images/Dr-Mario.jpg"
                alt="Dr. Mario Rivera, médico especialista en trastornos del sueño, en su entorno personal"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Carta de texto */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-primary mb-8">
              Quem somos: mais que uma plataforma, um propósito
            </h2>

            <p className="font-body text-lg text-base-text leading-relaxed mb-6">
              O Chao Insônia não nasceu em uma startup de tecnologia.  
              Nasceu no consultório de um médico que, por mais de quatro décadas, ouviu milhares de pessoas dizerem a mesma coisa:
            </p>

            <blockquote className="font-body italic text-xl text-primary mb-8 border-l-4 border-accent pl-6">
              “Doutor, já tentei de tudo. Por que ainda não consigo dormir?”
            </blockquote>

            <p className="font-body text-lg text-base-text leading-relaxed mb-8">
              Percebemos algo: a insônia não é apenas um problema de saúde.  
              É um problema de acesso. De informação confiável. E de acompanhamento humano.
            </p>

            <p className="font-body text-lg text-base-text leading-relaxed mb-8">
              Por isso, criamos esta plataforma: para levar conhecimento médico, ferramentas práticas e apoio emocional a quem precisa, independentemente de onde more ou quanto possa pagar.
            </p>

            <p className="font-body text-lg text-base-text leading-relaxed mb-8">
              Não monetizamos sua insônia.  
              Queremos que você durma bem.  
              Que recupere sua energia.  
              Que volte a aproveitar seus dias.
            </p>

            <p className="font-body text-lg text-base-text leading-relaxed">
              Porque dormir melhor é o primeiro passo para viver melhor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};