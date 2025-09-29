// app/components/sections/WiMetodoSection.tsx — Versión 4.1 (con efecto hover + animación de entrada preservada)
import Image from 'next/image';
import { motion } from 'framer-motion';

export const WiMetodoSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      {/* Fondo abstracto de flujo — DETRÁS de los pilares */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/images/metodo-flow.png')`,
        }}
      ></div>
      {/* Contenido principal — ENCIMA del fondo */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cuatro pilares — CON ANIMACIÓN DE ENTRADA Y EFECTO HOVER */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Pilar 1: Conhecimento sobre o tema */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100
                          hover:shadow-md hover:-translate-y-0.5 
                          transition-all duration-200 ease-out">
            <h3 className="font-sans text-xl font-bold text-primary mb-4">
              Conhecimento sobre o tema
            </h3>
            <p className="font-body text-base-text leading-relaxed">
              Primeiro, te ajudamos a entender o que está acontecendo.  
              Seu problema é por estresse, hábitos ou medo da própria insônia?  
              Está ligado à sua idade, medicamentos ou ansiedade?  
              Quais mitos sobre o sono podem estar piorando seu caso?  
              Oferecemos acesso a conteúdo médico confiável, explicado com clareza, sem jargões técnicos.  
              Porque entender sua insônia é o primeiro passo para superá-la.
            </p>
          </div>
          {/* Pilar 2: Avaliação de cada caso */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100
                          hover:shadow-md hover:-translate-y-0.5 
                          transition-all duration-200 ease-out">
            <h3 className="font-sans text-xl font-bold text-primary mb-4">
              Avaliação de cada caso
            </h3>
            <p className="font-body text-base-text leading-relaxed">
              É aqui que a tecnologia entra a serviço da sua saúde.  
              Você responde um questionário conversacional (como conversar com um médico).  
              Usamos suas respostas para identificar seu tipo de insônia.  
              Aplicamos ferramentas validadas internacionalmente:  
              → Índice de Epworth (sonolência diurna)  
              → Diário do sono  
              → Escalas de ansiedade e estresse  
              No final, você recebe um relatório personalizado com seu diagnóstico provável e as causas subjacentes.  
              Não é automatizado. É guiado por IA, validado por médicos.
            </p>
          </div>
          {/* Pilar 3: Orientação terapêutica */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100
                          hover:shadow-md hover:-translate-y-0.5 
                          transition-all duration-200 ease-out">
            <h3 className="font-sans text-xl font-bold text-primary mb-4">
              Orientação terapêutica
            </h3>
            <p className="font-body text-base-text leading-relaxed">
              Uma vez entendido seu caso, oferecemos um plano claro.  
              Baseado na Terapia Cognitivo-Comportamental para a Insônia (TCC-I), o tratamento não farmacológico mais eficaz segundo a ciência.  
              Seu plano inclui:  
              - Técnicas para reeducar sua relação com a cama.  
              - Rotinas de higiene do sono adaptadas à sua rotina.  
              - Exercícios de mindfulness e relaxamento guiado.  
              - Estratégias para gerenciar a ansiedade noturna.  
              Tudo explicado passo a passo, com vídeos, áudios e textos fáceis de seguir.
            </p>
          </div>
          {/* Pilar 4: Acompanhamento contínuo */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100
                          hover:shadow-md hover:-translate-y-0.5 
                          transition-all duration-200 ease-out">
            <h3 className="font-sans text-xl font-bold text-primary mb-4">
              Acompanhamento contínuo
            </h3>
            <p className="font-body text-base-text leading-relaxed">
              Sabemos que mudar hábitos leva tempo.  
              A plataforma te guia dia a dia, com lembretes suaves e recomendações progressivas.  
              Você pode avançar no seu ritmo: alguns veem melhorias em dias, outros precisam de semanas.  
              Se precisar de mais apoio, pode escalar para uma consulta médica direta ou mentoria personalizada com especialistas parceiros.  
              Você não está sozinho neste processo.
            </p>
          </div>
        </motion.div>
        {/* Cierre emocional (dentro del componente, como parte del contenido) */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-2xl font-bold text-primary mb-6">
            Como o Chao Insônia te guia?
          </h2>
          <p className="font-body text-lg text-base-text max-w-3xl mx-auto leading-relaxed mb-8">
            Imagine um assistente que:  
            - Te escuta com atenção.  
            - Não te julga.  
            - Responde com conhecimento médico.  
            - E te acompanha com paciência.  
            Isso é o que nossa plataforma faz: combina a precisão da ciência com a calorosidade de um acompanhante humano.
          </p>
          <p className="font-body text-base-text text-secondary-text mb-8">
            A inteligência artificial processa suas respostas, mas o design do programa, os conteúdos e as recomendações vêm do Dr. Mario Rivera, com mais de 40 anos de experiência em distúrbios do sono.
          </p>
        </div>
      </div>
    </section>
  );
};