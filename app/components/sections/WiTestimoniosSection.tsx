// app/components/sections/WiTestimoniosSection.tsx (Versión 9 - Solución Definitiva)
"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  image?: string;
  name?: string;
  city?: string;
  quote: string;
  paragraphs: string[]; // Ahora es obligatorio y siempre un array
}

const WiTestimoniosSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Histórias reais de pessoas como você",
      city: "Estas são jornadas reais de quem recuperou o sono — sem remédios, com ciência e apoio humano.",
      quote: "Leia as histórias abaixo",
      paragraphs: [""]
    },
    {
      image: "/images/testemunho-mulher.png",
      name: "Luciana, 38",
      city: "Rio de Janeiro",
      quote: "",
      paragraphs: [
        'Durante mais de dois anos, Luciana acordava religiosamente às 3h da manhã. Não importava o quanto se esforçasse para dormir cedo, evitar telas ou tomar chás calmantes — seu corpo parecia ter um alarme interno que disparava naquele horário exato. Com o tempo, a ansiedade noturna se instalou: ela começava a temer a hora de deitar, porque sabia que passaria horas com os olhos abertos, revivendo preocupações do trabalho, da maternidade e do futuro. Dormir deixou de ser descanso; tornou-se uma batalha silenciosa que esgotava seu corpo e sua mente antes mesmo do dia começar.',
        'Foi por acaso que Luciana encontrou o Chao Insônia. Cansada de depender de remédios que só a deixavam grogue no dia seguinte, resolveu buscar algo diferente. O que a surpreendeu foi a abordagem: em vez de prometer uma “cura mágica”, o programa a convidou a entender sua insônia. Ao responder o questionário, sentiu como se estivesse conversando com um médico atento — alguém que não a julgava, mas a guiava com clareza. As primeiras semanas foram de reeducação: aprender a separar a cama da vigília, ajustar sua rotina diurna e observar seus pensamentos sem lutar contra eles. Não foi fácil, mas, pela primeira vez, ela sentia que tinha um plano real, não apenas paliativos.',
        'Hoje, Luciana dorme com uma tranquilidade que quase esquecera. Não é perfeito todos os dias, mas quando acorda no meio da noite, já sabe o que fazer — e, mais importante, não entra em pânico. Recuperou a energia para brincar com seus filhos, voltou a ter foco no trabalho e, acima de tudo, reconquistou a sensação de que merece descansar. “Não foi um milagre”, diz ela. “Foi ciência, paciência e um pouco de coragem para mudar hábitos antigos. E isso valeu cada minuto.”'
      ]
    },
    {
      image: "/images/testemunho-homem.png",
      name: "Andrés, 34",
      city: "São Paulo",
      quote: "",
      paragraphs: [
        'Andrés sempre se orgulhou de ser produtivo. Mas, aos 32 anos, começou a notar que, por mais que trabalhasse duro, seu desempenho caía. A causa? Noites mal dormidas. Ele adormecia tarde, acordava várias vezes e, ao levantar, sentia-se como se tivesse corrido uma maratona. Tentou de tudo: melatonina, apps de meditação, até consultas com neurologistas que receitavam ansiolíticos. Nada resolvia de fato. Com o tempo, passou a associar a cama à frustração. Chegou a ponto de dormir no sofá, na esperança de “enganar” seu cérebro. Mas a insônia persistia, e com ela, a sensação de estar perdendo o controle da próprio vida.',
        'Investir R$ 197 no Chao Insônia foi, para Andrés, um último recurso — feito sem grandes expectativas. O que o surpreendeu foi a personalização. Em poucos dias, recebeu um diagnóstico claro: sua insônia era psicofisiológica, alimentada por hábitos inconscientes e medo do próprio sono. O programa não exigiu que ele “parasse de pensar” — algo impossível —, mas ensinou técnicas práticas para reeducar seu sistema nervoso. Começou com pequenos passos: sair da cama quando não conseguia dormir, manter horários fixos mesmo nos fins de semana e substituir o celular por áudios guiados. Pela primeira vez, sentiu que tinha ferramentas reais, não apenas conselhos genéricos.',
        'Em menos de duas semanas, Andrés já notava mudanças. Adormecia mais rápido, acordava menos e, quando acordava, conseguia voltar a dormir com calma. Hoje, dorme como nunca antes na vida adulta — profundo, contínuo e reparador. “Me sinto curado”, diz ele. “Não no sentido de que nunca mais terei uma noite ruim, mas no sentido de que sei lidar com isso. E isso me devolveu a confiança para seguir sozinho.” Ele ainda mantém alguns hábitos do programa, mas já não depende deles. A insônia não define mais seus dias.'
      ]
    },
    {
      image: "/images/testemunho-idoso.png",
      name: "Ricardo, 62",
      city: "Buenos Aires",
      quote: "",
      paragraphs: [
        'Ricardo passou mais de uma década tomando medicamentos para dormir. Aos 50 anos, começou com comprimidos leves; aos 60, já precisava de doses mais fortes para conseguir algumas horas de sono superficial. Acordava cansado, com a boca seca e a cabeça embaçada. Pior: tinha medo de parar, porque acreditava que, sem os remédios, não conseguiria dormir de jeito nenhum. Sua vida se tornou uma rotina entre farmácias e consultórios, sempre com a sensação de que estava apenas adiando o problema. Aos 62, sentia que seu corpo envelhecia mais rápido — e que o sono, algo tão natural, havia se tornado uma dependência química.',
        'Foi seu neto quem lhe mostrou o Chao Insônia. “Vô, isso é medicina de verdade”, disse ele. Ricardo, cético mas desesperado, decidiu tentar. O que o tocou foi a abordagem respeitosa com sua idade e seu histórico. O programa não exigiu que ele parasse os remédios de uma vez — orientou uma redução gradual, combinada com técnicas não farmacológicas. Aprendeu sobre higiene do sono adaptada à terceira idade, fez exercícios respiratórios suaves e redescobriu o valor de uma rotina tranquila à noite. Pela primeira vez em anos, sentiu que estava cuidando de si mesmo, não apenas abafando os sintomas.',
        'Hoje, Ricardo não toma mais nenhum medicamento para dormir. Dorme como “um bebê”, nas palavras dele — com profundidade, sem interrupções e com a sensação de que seu corpo finalmente descansa. Acorda com energia para cuidar do jardim, ler seus livros e brincar com os netos. “Abandonei os remédios, mas não a esperança”, diz. “E descobri que, mesmo na minha idade, é possível recomeçar.” Sua história virou inspiração na família — e prova de que nunca é tarde para recuperar o sono, e com ele, a qualidade de vida.'
      ]
    },
  ];

  // ✅ CORRECCIÓN CLAVE: Limpia los espacios no separables (U+00A0) y los caracteres invisibles (U+200B)
  const cleanParagraphs = testimonials.map(t => ({
    ...t,
    paragraphs: t.paragraphs.map(p =>
      p
        .replace(/\u00A0/g, ' ')  // Reemplaza espacios no separables por espacios normales
        .replace(/\u200B/g, '')   // Elimina caracteres invisibles (si aún quedan)
    )
  }));

  const currentTestimonial = cleanParagraphs[currentTestimonialIndex];

  const goToNextTestimonial = () => {
    if (currentTestimonialIndex < cleanParagraphs.length - 1) {
      setCurrentTestimonialIndex(prev => prev + 1);
      setCurrentParagraphIndex(0);
      setCurrentText("");
      setIsWriting(false);
      setIsComplete(false);
    }
  };

  const writeParagraph = () => {
    if (isWriting || isComplete) return;

    const paragraph = currentTestimonial.paragraphs[currentParagraphIndex];

    if (!paragraph || typeof paragraph !== 'string' || paragraph.length === 0) {
      if (currentParagraphIndex < currentTestimonial.paragraphs.length - 1) {
        setTimeout(() => {
          setCurrentParagraphIndex(prev => prev + 1);
        }, 1500);
      } else {
        setIsComplete(true);
      }
      return;
    }

    setIsWriting(true);
    setCurrentText("");
    let index = 0;

    const interval = setInterval(() => {
      if (index < paragraph.length) {
        const char = paragraph[index];
        // ✅ Solo concatena si es un carácter visible y no es un carácter de control
        if (char !== '\u200B' && char !== '\uFEFF') {
          setCurrentText(prev => prev + char);
        }
        index++;
      } else {
        clearInterval(interval);
        setIsWriting(false);

        if (currentParagraphIndex === currentTestimonial.paragraphs.length - 1) {
          setIsComplete(true);
        } else {
          setTimeout(() => {
            setCurrentParagraphIndex(prev => prev + 1);
          }, 1500);
        }
      }
    }, 30);
  };

  useEffect(() => {
    if (currentTestimonialIndex > 0) {
      writeParagraph();
    }
  }, [currentTestimonialIndex, currentParagraphIndex]);

  useEffect(() => {
    if (isComplete && !isPaused) {
      const timer = setTimeout(() => {
        goToNextTestimonial();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, isPaused]);

  const handleUserInteraction = () => {
    setIsPaused(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/wood-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonialIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {currentTestimonial.image && (
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-md">
                    <img
                      src={currentTestimonial.image}
                      alt={`${currentTestimonial.name || "Testemunho"}`}
                      className="w-full h-full object-cover"
                      width={192}
                      height={192}
                    />
                  </div>
                </div>
              )}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                <h3 className={`font-sans text-xl md:text-2xl font-bold text-primary ${currentTestimonial.image ? '' : 'text-2xl md:text-3xl mb-4'}`}>
                  {currentTestimonial.name}
                </h3>
                {currentTestimonial.city && (
                  <p className="font-body text-sm md:text-base text-gray-600 mb-4">
                    {currentTestimonial.city}
                  </p>
                )}
                <div className="font-body text-base md:text-lg text-gray-800 text-justify mt-4">
                  {currentTestimonialIndex === 0 ? (
                    <p>&ldquo;{currentTestimonial.quote}&rdquo;</p>
                  ) : (
                    <p>&ldquo;{currentText}&rdquo;</p>
                  )}
                  {currentTestimonialIndex > 0 && isWriting && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 flex flex-col items-center gap-2">
        {currentTestimonialIndex > 1 && (
          <button
            onClick={() => {
              handleUserInteraction();
              setCurrentTestimonialIndex(prev => prev - 1);
              setCurrentParagraphIndex(0);
              setCurrentText("");
              setIsWriting(false);
              setIsComplete(false);
            }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-primary hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Testimonio anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        <div className="flex flex-col gap-1">
          {cleanParagraphs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (index === 0 && currentTestimonialIndex > 0) return;
                handleUserInteraction();
                setCurrentTestimonialIndex(index);
                setCurrentParagraphIndex(0);
                setCurrentText("");
                setIsWriting(false);
                setIsComplete(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTestimonialIndex
                  ? 'bg-primary scale-125'
                  : 'bg-gray-300/70 hover:bg-gray-400'
              }`}
              aria-label={`Ir a testimonio ${index + 1}`}
              disabled={index === 0 && currentTestimonialIndex > 0}
            />
          ))}
        </div>
        {currentTestimonialIndex < cleanParagraphs.length - 1 && (
          <button
            onClick={() => {
              handleUserInteraction();
              goToNextTestimonial();
            }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-primary hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Próximo testimonio"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export { WiTestimoniosSection };