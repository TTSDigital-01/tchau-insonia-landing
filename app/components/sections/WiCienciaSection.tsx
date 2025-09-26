// app/components/sections/WiCienciaSection.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const WiCienciaSection = () => {
  const textItems = [
    "Não é magia. É medicina do sono, atualizada.",
    "Em um mundo cheio de soluções rápidas para a insônia — remédios, suplementos, apps que prometem milagres — pode parecer difícil acreditar que algo realmente funcione.",
    "No Chao Insônia, não vendemos magia. Vendemos método.",
    "Este programa não nasceu em uma startup de tecnologia. Nasceu no consultório de um médico com mais de 40 anos ajudando pessoas a dormir melhor.",
    "E tudo o que fazemos está alinhado com o que a ciência sabe hoje sobre o sono.",
    "Baseado na Terapia Cognitivo-Comportamental para a Insônia (TCC-I), validado pelo Dr. Mario Rivera, atualizado com as últimas pesquisas em neurociência.",
    "Não negamos o uso de medicamentos. Mas acreditamos que o primeiro passo deve ser entender e reeducar seu sistema do sono.",
    "Como ensinar alguém a andar novamente depois de anos com muletas.",
    "No começo custa. Mas no fim, você recupera sua autonomia."
  ];

  return (
    <section className="py-20 px-6 bg-background">
      {/* Fondo limpio — SIN TEXTURAS */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* TEXTO — A LA IZQUIERDA, APARECIENDO AL SCROLL */}
        <div className="lg:w-1/2 lg:pr-16">
          {textItems.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="font-serif text-lg text-base-text leading-relaxed mb-6"
              style={{
                fontFamily: 'Georgia, serif', // Tipografía de carta médica
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* IMAGEN — A LA DERECHA, FIJA, SIN MOVIMIENTO */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative max-w-md">
            <Image
              src="/images/ciencia-diario.png"
              alt="Escritório do Dr. Mario Rivera: diário aberto, tablet com gráfico de sono, caneta e xícara de chá. Iluminação natural. Ambiente profissional e tranquilo."
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl border-4 border-gray-200 object-contain"
              priority
            />
            {/* Efecto de luz suave sobre la imagen — solo en la parte superior */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};