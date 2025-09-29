// app/blog/mindfulness-para-dormir/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogMindfulnessParaDormir() {
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
            Mindfulness para dormir: guia prática para iniciantes
          </h1>
          <p className="font-body text-lg text-base-text mb-12">
            Mindfulness não é “pensar em coisas boas”. Não é “esvaziar a mente” (isso é impossível). E, definitivamente, não é mais uma tarefa a cumprir antes de dormir.
          </p>
        </motion.div>

        <article className="prose prose-lg max-w-none font-body text-base-text">
          <p>
            Mindfulness é mudar sua relação com os pensamentos — especialmente aqueles que surgem na cama, quando tudo que você quer é descansar.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Por que funciona para o sono?
          </h2>
          <p>
            Quem sofre de insônia costuma ter um padrão:  
            <span className="italic">“Estou cansado, mas minha mente não para.”</span>
          </p>
          <p>
            O mindfulness interrompe esse ciclo não combatendo os pensamentos, mas observando-os sem julgamento. É como assistir a um filme, em vez de viver a cena.
          </p>
          <p>
            Estudos mostram que a prática regular:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Reduz a atividade da amígdala (centro do medo).</li>
            <li>Fortalece o córtex pré-frontal (controle emocional).</li>
            <li>Diminui os níveis de cortisol.</li>
            <li>Aumenta a sensação de segurança interna — essencial para o sono.</li>
          </ul>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Como praticar, mesmo sendo iniciante?
          </h2>
          <p>
            Você não precisa de travesseiro especial, posição de lótus ou 30 minutos livres. Comece com 3–5 minutos na cama, assim:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-8">
            <li><strong>Deite-se de costas</strong>, com as mãos ao lado do corpo.</li>
            <li><strong>Feche os olhos</strong> e respire naturalmente.</li>
            <li><strong>Concentre-se na respiração:</strong> sinta o ar entrando pelas narinas, o abdômen subindo e descendo.</li>
            <li><strong>Quando surgir um pensamento</strong> (e surgirá!), não lute. Apenas diga mentalmente: “Isso é um pensamento” — e volte suavemente à respiração.</li>
            <li><strong>Repita quantas vezes for necessário.</strong> Cada retorno é um exercício de calma.</li>
          </ol>
          <p>
            Com o tempo, seu cérebro aprende: “Ah, pensamentos à noite não são perigosos. Posso deixá-los passar.”
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Dica essencial
          </h2>
          <p>
            Pratique todos os dias, mesmo nos dias que dormir bem. Assim, quando a ansiedade noturna voltar, você já terá o “músculo da calma” treinado.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 italic text-primary my-8 font-serif">
            Se você quer um guia passo a passo com áudios guiados e rotinas adaptadas ao seu tipo de insônia, o programa TCHAU INSÔNIA inclui exercícios de mindfulness validados clinicamente.
          </blockquote>

          <div className="bg-gray-50 p-6 rounded-xl mt-12">
            <p className="font-body text-base-text mb-4">
              Quer começar com um plano personalizado que inclui mindfulness, higiene do sono e reeducação cognitiva?
            </p>
            <p className="font-body text-base-text mb-6">
              Por R$ 197, você recebe acesso imediato a todas as ferramentas e orientações baseadas em seu perfil único.
            </p>
            <Link
              href="/landing"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Comece sua jornada com R$ 197 →
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