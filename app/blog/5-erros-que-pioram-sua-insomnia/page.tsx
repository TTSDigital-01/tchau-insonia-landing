// app/blog/5-erros-que-pioram-sua-insomnia/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blog5ErrosQuePioramSuaInsomnia() {
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="relative z-10 pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary mb-6">
            5 erros que pioram sua insônia — e como corrigi-los com base na ciência do sono
          </h1>
          <p className="font-body text-lg text-base-text mb-12">
            Muitas pessoas fazem tudo “certo” — evitam café, tomam banho quente, usam pijama confortável — e ainda assim não dormem. Por quê?
          </p>
        </motion.div>

        <article className="prose prose-lg max-w-none font-body text-base-text">
          <p>
            Porque alguns erros invisíveis sabotam o sono sem que você perceba. Veja os 5 mais comuns — e como corrigi-los com ciência.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Erro 1: “Vou me deitar mais cedo para compensar”
          </h2>
          <p className="flex items-start mb-6">
            <span className="text-accent mr-2">❌</span>
            <span><strong>Problema:</strong> Se você não tem sono, ficar na cama acordado ensina seu cérebro a associar a cama com vigília e frustração.</span>
          </p>
          <p className="flex items-start mb-8">
            <span className="text-accent mr-2">✅</span>
            <span><strong>Solução:</strong> Vá para a cama só quando sentir sono verdadeiro. Melhor dormir 6 horas bem do que 8 horas rolando.</span>
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Erro 2: Olhar o relógio no meio da noite
          </h2>
          <p className="flex items-start mb-6">
            <span className="text-accent mr-2">❌</span>
            <span><strong>Problema:</strong> ativa a ansiedade: “Só faltam 3 horas para acordar… não vou aguentar!”</span>
          </p>
          <p className="flex items-start mb-8">
            <span className="text-accent mr-2">✅</span>
            <span><strong>Solução:</strong> Vire o relógio. Use um despertador analógico. A noite é para descansar, não para fazer contas.</span>
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Erro 3: Usar o celular na cama para “relaxar”
          </h2>
          <p className="flex items-start mb-6">
            <span className="text-accent mr-2">❌</span>
            <span><strong>Problema:</strong> A luz azul inibe a melatonina. Além disso, redes sociais e notícias ativam seu cérebro.</span>
          </p>
          <p className="flex items-start mb-8">
            <span className="text-accent mr-2">✅</span>
            <span><strong>Solução:</strong> Pare de usar telas 1h antes de dormir. Substitua por áudios suaves, leitura impressa ou meditação.</span>
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Erro 4: Forçar o sono
          </h2>
          <p className="flex items-start mb-6">
            <span className="text-accent mr-2">❌</span>
            <span><strong>Problema:</strong> Quanto mais você tenta dormir, mais seu sistema nervoso entra em modo de alerta.</span>
          </p>
          <p className="flex items-start mb-8">
            <span className="text-accent mr-2">✅</span>
            <span><strong>Solução:</strong> Aceite que o sono é um processo de rendição, não de esforço. Se não dormir em 20 minutos, levante-se e faça algo calmo.</span>
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Erro 5: Evitar falar sobre seu insônia
          </h2>
          <p className="flex items-start mb-6">
            <span className="text-accent mr-2">❌</span>
            <span><strong>Problema:</strong> Guardar tudo gera carga emocional silenciosa.</span>
          </p>
          <p className="flex items-start mb-8">
            <span className="text-accent mr-2">✅</span>
            <span><strong>Solução:</strong> Compartilhe com alguém de confiança. Ou busque um espaço seguro, como o <Link href="/" className="text-accent hover:underline">TCHAU INSÔNIA</Link>, onde você é ouvido sem julgamento.</span>
          </p>

          <blockquote className="border-l-4 border-accent pl-6 italic text-primary my-8 font-serif">
            Esses ajustes parecem pequenos, mas têm impacto profundo.  
            E o melhor: você não precisa fazer tudo de uma vez. Comece por um — e observe a diferença.
          </blockquote>

          <div className="bg-gray-50 p-6 rounded-xl mt-12">
            <p className="font-body text-base-text mb-4">
              Quer um plano personalizado que identifique seus erros específicos e ofereça soluções reais?
            </p>
            <p className="font-body text-base-text mb-6">
              Por R$ 197, você recebe um diagnóstico completo e um guia passo a passo baseado em sua realidade.
            </p>
            <Link
              href="/landing"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Entenda sua insônia de verdade →
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="font-body text-base-text">
              <Link href="/blog" className="text-accent hover:underline">← Voltar ao blog</Link>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}