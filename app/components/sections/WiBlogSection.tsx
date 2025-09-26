// app/components/sections/WiBlogSection.tsx — Versión 3.1
"use client";
import { motion } from 'framer-motion';

export const WiBlogSection = () => {
  const blogItems = [
    {
      title: "Por que acordo às 3h e não consigo voltar a dormir?",
      subtitle: "A ciência por trás do despertar noturno e como reeducar seu sistema nervoso.",
    },
    {
      title: "Melatonina: sim ou não? O que você precisa saber antes de tomar",
      subtitle: "Por que a melatonina pode ajudar — e por que pode estar piorando sua insônia.",
    },
    {
      title: "Mindfulness para dormir: guia prática para iniciantes",
      subtitle: "Como observar seus pensamentos sem lutar contra eles — e dormir melhor.",
    },
    {
      title: "5 erros comuns que empeoran o insônia (e como evitá-los)",
      subtitle: "O que você faz antes de dormir pode estar sabotando seu descanso sem que saiba.",
    },
  ];

  return (
    <section className="py-20 px-6">
      {/* NINGÚN FONDO — EL FONDO ESTÁ EN LA PÁGINA */}
      <div className="max-w-5xl mx-auto">
        {/* NINGÚN TÍTULO — ESTÁ EN LA PÁGINA */}
        {/* NINGÚN SUBTÍTULO — ESTÁ EN LA PÁGINA */}
        
        {/* SOLO LOS ARTÍCULOS — LO ÚNICO QUE LE CORRESPONDE AL COMPONENTE */}
        <div className="flex flex-col items-center space-y-8">
          {blogItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full max-w-3xl"
            >
              <h3 className="font-body italic text-xl text-primary mb-2">
                {item.title}
              </h3>
              <p className="font-body text-base-text text-secondary-text">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* NINGÚN CTA — ESTÁ EN LA PÁGINA */}
      </div>
    </section>
  );
};