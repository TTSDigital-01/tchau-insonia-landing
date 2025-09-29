// app/blog/por-que-acordo-as-3h/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPorQueAcordoAs3h() {
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
            Por que acordo às 3h e não consigo voltar a dormir?
          </h1>
          <p className="font-body text-lg text-base-text mb-12">
            Se você já se viu acordado no escuro, olhando o relógio marcar 3h da manhã, com a mente acelerada e o corpo cansado, saiba que não está sozinho — e, principalmente, não está “quebrado”.
          </p>
        </motion.div>

        <article className="prose prose-lg max-w-none font-body text-base-text">
          <p>
            Esse tipo de despertar noturno é um dos relatos mais comuns entre quem sofre de insônia crônica, especialmente do tipo psicofisiológica. E, embora pareça misterioso, tem uma explicação fisiológica clara — e, melhor ainda, soluções reais.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            O que acontece às 3h da manhã?
          </h2>
          <p>
            Por volta das 2h–4h, seu corpo entra em uma transição natural do ciclo do sono. Nesse momento:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Você está saindo dos ciclos mais profundos (sono NREM) e entrando em fases mais leves, com maior presença de sono REM.</li>
            <li>Seus níveis de cortisol (o hormônio do estresse) começam a subir suavemente, preparando seu corpo para o despertar matinal.</li>
            <li>A temperatura corporal atinge seu ponto mais baixo.</li>
            <li>A produção de melatonina já está diminuindo.</li>
          </ul>
          <p>
            Em uma pessoa com sono saudável, essa transição passa despercebida. Mas se seu sistema nervoso está em estado de hipervigilância — comum em quem vive estresse crônico, ansiedade ou já desenvolveu medo do próprio insônia —, esse pequeno “abalo” no sono vira um sinal de alerta.
          </p>
          <p>
            Seu cérebro interpreta: “Algo está errado. Preciso ficar acordado.” E, pronto: você está de olhos abertos, pensando no trabalho, nas contas, no que disse ontem… ou simplesmente na frustração de não conseguir dormir.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Por que não consigo voltar a dormir?
          </h2>
          <p>
            Aqui entra o ciclo vicioso do insônia psicofisiológica:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Você acorda.</li>
            <li>Fica ansioso por não estar dormindo.</li>
            <li>Essa ansiedade ativa ainda mais o sistema nervoso.</li>
            <li>Quanto mais tenta “forçar” o sono, mais distante ele fica.</li>
          </ol>
          <p>
            É como tentar apagar um incêndio com gasolina. Querer dormir demais impede que você durma.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            O que fazer na prática?
          </h2>
          <p>
            Não se trata de “relaxar mais” — você já ouviu isso mil vezes. Trata-se de reeducar seu sistema nervoso para entender que a noite é segura. Algumas estratégias com base em CBT-I (<Link href="/ciencia" className="text-accent hover:underline">Terapia Cognitivo-Comportamental para Insônia</Link>):
          </p>
          <ul className="list-none space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-accent mr-2">✅</span>
              <span><strong>Não olhe para o relógio.</strong> Ver a hora alimenta a ansiedade. Vire o relógio ou use um despertador analógico.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✅</span>
              <span><strong>Se passarem 20 minutos acordado, levante-se.</strong> Vá para outra sala, com pouca luz, e faça algo calmo (ler um livro físico, ouvir um áudio suave). Só volte à cama quando sentir sono verdadeiro.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✅</span>
              <span><strong>Pratique “mindfulness passivo” na cama.</strong> Em vez de lutar contra os pensamentos, observe-os como nuvens passando. Respire suavemente e concentre-se nas sensações do corpo: o peso nas pernas, o contato com o lençol, o ritmo da respiração.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✅</span>
              <span><strong>Evite “compensar” o sono perdido.</strong> Dormir mais tarde ou cochilar no dia seguinte desregula ainda mais seu ritmo circadiano.</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-accent pl-6 italic text-primary my-8 font-serif">
            Seu corpo sabe dormir. Ele só precisa de um ambiente seguro — físico e mental — para se render ao descanso. E isso se constrói com paciência, consistência e compreensão.
          </blockquote>

          <div className="bg-gray-50 p-6 rounded-xl mt-12">
            <p className="font-body text-base-text mb-4">
              Se esse artigo fez sentido para você, talvez seja hora de entender seu próprio tipo de insônia.
            </p>
            <p className="font-body text-base-text mb-6">
              Comece com uma avaliação personalizada por R$ 197 e receba um plano baseado em ciência, não em achismos.
            </p>
            <Link
              href="/landing"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Conheça o método TCHAU INSÔNIA →
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