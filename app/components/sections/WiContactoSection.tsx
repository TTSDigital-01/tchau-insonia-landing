// app/components/sections/WiContactoSection.tsx — Versión 3.1
"use client";
import { motion } from 'framer-motion';

export const WiContactoSection = () => {
  return (
    <section className="py-20 px-6">
      {/* NINGÚN FONDO — ESTÁ EN LA PÁGINA */}
      {/* NINGÚN TÍTULO — ESTÁ EN LA PÁGINA */}
      {/* NINGÚN SUBTÍTULO — ESTÁ EN LA PÁGINA */}
      
      {/* CONTENIDO ÚNICO DEL COMPONENTE — SOLO ESTO */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-body text-lg text-base-text leading-relaxed mb-6">
            Sabemos que tomar a decisão de buscar ajuda nem sempre é fácil.  
            Às vezes leva semanas. Às vezes, meses.  
            Mas, quando chega o momento, queremos estar aqui — com opções claras, sem armadilhas ou surpresas.
          </p>
          <p className="font-body text-lg text-base-text leading-relaxed mb-8">
            No Chao Insônia, você pode avançar no seu ritmo.  
            E, quando sentir que precisa de mais do que um plano digital, temos formas de apoio adicionais.
          </p>
          <p className="font-body text-lg text-base-text leading-relaxed mb-8">
            Não somos um chatbot automatizado.  
            É uma mensagem direta para nossa equipe de atendimento humano.
          </p>
        </div>

        {/* Botón de WhatsApp — ÚNICO Y SOLO EN EL COMPONENTE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <a
            href="https://wa.me/5511999999999?text=Olá,%20vim%20do%20site%20institucional%20do%20Chao%20Ins%C3%B4nia"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-sans font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Escreva-nos pelo WhatsApp
          </a>
        </motion.div>

        <p className="font-body text-sm text-secondary-text mt-8">
          Responderemos em até 24 horas.
        </p>
      </div>
    </section>
  );
};