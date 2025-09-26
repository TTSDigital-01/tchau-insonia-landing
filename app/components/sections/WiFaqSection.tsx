// app/components/sections/WiFaqSection.tsx — Versión 3.1 (Corregida)
"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const WiFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ CONTENIDO COMPLETO DENTRO DEL COMPONENTE — NINGÚN TÍTULO, NINGÚN SUBTÍTULO
  const faqItems = [
    {
      question: "Funciona se já tentei remédios e não funcionaram?",
      answer: "Sim, pode funcionar. E muitas vezes, é justamente para quem já tentou remédios que este programa faz mais sentido. Medicamentos podem ajudar a curto prazo, mas raramente resolvem a causa raiz da insônia. Com o tempo, seu corpo pode se acostumar, e você precisa de mais para o mesmo efeito. O Chao Insônia não nega seu uso quando necessário. Mas acreditamos que o primeiro passo deve ser entender e reeducar seu sistema do sono. Como ensinar alguém a andar novamente depois de anos com muletas. No começo, é difícil. Mas, no fim, você recupera sua autonomia."
    },
    {
      question: "É normal ter medo de deitar à noite?",
      answer: "Sim. Mais do que você imagina. E você não está exagerando. Quando a insônia se torna crônica, a cama deixa de ser um lugar de descanso. Transforma-se em um cenário de ansiedade: “Mais uma noite sem dormir? O que acontecerá amanhã se não dormir?” Isso se chama ansiedade pré-sono, e é uma das formas mais comuns de insônia psicofisiológica. A boa notícia é que pode ser revertida. Com técnicas como controle de estímulos, educação sobre o sono e acompanhamento gradual, você pode voltar a associar a cama com a calma. Não é rápido. Mas é possível."
    },
    {
      question: "Preciso falar com um médico ou posso começar sozinho?",
      answer: "Você pode começar sozinho. Muitos usuários fazem isso — e têm ótimos resultados. Nosso acesso inicial por R$ 197 foi projetado exatamente para isso: entender seu caso, receber um diagnóstico personalizado e acessar ferramentas que pode aplicar desde hoje. Mas, se sua insônia vier com: ansiedade ou depressão severa, dor crônica, apneia ou outros distúrbios do sono, ou medicamentos que afetam seu descanso, então, sim, recomendamos complementar com uma consulta médica especializada. No Chao Insônia, você pode escalar para uma consulta com o Dr. Mario Rivera ou um terapeuta parceiro quando precisar. Não é obrigatório. Mas está disponível, se decidir que precisa de mais apoio."
    },
    {
      question: "Posso usar isso se tiver ansiedade ou depressão?",
      answer: "Sim. Muitas pessoas que usam o Chao Insônia também vivem com ansiedade ou depressão. Insônia e saúde mental estão profundamente conectadas. Às vezes, a insônia piora a ansiedade. Outras vezes, a ansiedade é o que impede o sono. Nosso programa não substitui um tratamento psiquiátrico. Mas ajuda a quebrar o ciclo: menos ansiedade noturna → melhor sono → mais energia → melhor manejo emocional durante o dia. As ferramentas como mindfulness, áudios de relaxamento e educação sobre o sistema nervoso foram pensadas especialmente para quem sente que a mente não desliga. E, se está em terapia ou toma medicamentos, pode combiná-los sem problema. Só certifique-se de informar seu médico sobre qualquer mudança."
    },
    {
      question: "Quanto tempo leva para funcionar?",
      answer: "Não há uma resposta única, porque cada pessoa é diferente. Mas damos dados reais: algumas pessoas notam melhorias em 3 a 7 dias (por exemplo, adormecer mais rápido). Outras veem mudanças significativas entre 2 e 6 semanas. E algumas precisam de mais tempo, especialmente se a insônia for crônica ou vier com alta ansiedade. O importante não é a velocidade. É a direção: que cada semana você durma um pouco melhor que a anterior. E nós não deixamos você sozinho nesse processo. A plataforma o guia dia após dia, com lembretes suaves, recomendações ajustadas e conteúdo que evolui com você."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim. Sua privacidade é uma prioridade. Todos os dados que você compartilha no questionário são: criptografados (como em uma transação bancária). Armazenados em servidores seguros. Usados apenas para gerar seu diagnóstico e recomendações. Nunca compartilhados com terceiros sem seu consentimento. Este não é um chat público nem uma rede social. É um espaço privado, como uma consulta médica digital."
    },
    {
      question: "Há custos ocultos?",
      answer: "Não. O acesso inicial por R$ 197 é único, sem renovação automática. Com esse valor, você recebe: sua avaliação personalizada. Seu relatório com diagnóstico e plano. Acesso completo a vídeos, áudios e ferramentas. Se decidir avançar, pode agendar uma consulta médica ou mentoria por um custo adicional (entre R$ 150 e R$ 350), mas apenas se você escolher. Sem assinaturas forçadas. Sem cobranças surpresa. Apenas transparência."
    },
    {
      question: "O que acontece se eu não dormir melhor?",
      answer: "Nossa garantia é clara: 7 dias para experimentar. Se, após seguir o programa por uma semana, você não sentir qualquer melhora — e não for por falta de consistência — você pode solicitar reembolso total, sem perguntas. Não vendemos ilusões. Vendemos um caminho. E se o caminho não te leva ao descanso, devolvemos seu dinheiro. Mas a maioria das pessoas sente mudança antes dos 7 dias. Porque o que estamos fazendo não é um remédio. É um reentrenamento."
    }
  ];

  return (
    <section className="py-20 px-6">
      {/* ¡NADA DE TÍTULO! ¡NADA DE SUBTÍTULO! ¡SOLO EL ACORDEÓN! */}
      <div className="max-w-4xl mx-auto">
        {/* Lista de Preguntas — SIN TÍTULOS DUPLICADOS */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={openIndex === index ? "open" : "closed"}
              variants={{
                closed: { height: 0, opacity: 0.5 },
                open: { height: "auto", opacity: 1 }
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-body italic text-base-text text-lg">
                  {item.question}
                </span>
                <span className={`font-sans text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <motion.div
                className="px-8 pb-6"
                initial={false}
                animate={openIndex === index ? "open" : "closed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  closed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="font-body text-base-text leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};