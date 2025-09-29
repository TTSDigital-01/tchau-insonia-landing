// app/blog/melatonina-sim-ou-nao/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogMelatoninaSimOuNao() {
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
            Melatonina: sim ou não? O que você precisa saber antes de tomar
          </h1>
          <p className="font-body text-lg text-base-text mb-12">
            A melatonina virou quase um santo remédio para quem não consegue dormir. Vendida sem receita, vendida como “natural”, prometida como solução mágica… mas a realidade é mais complexa.
          </p>
        </motion.div>

        <article className="prose prose-lg max-w-none font-body text-base-text">
          <p>
            Antes de tomar (ou continuar tomando), é essencial entender: para quem ela funciona — e para quem pode estar piorando sua insônia.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            O que é a melatonina, de verdade?
          </h2>
          <p>
            A melatonina é um hormônio produzido pela glândula pineal a partir da serotonina. Sua principal função não é “fazer você dormir”, mas sinalizar ao corpo que é noite — ou seja, regular o ritmo circadiano.
          </p>
          <p>
            Ela começa a subir por volta das 21h, atinge o pico entre 2h e 4h, e cai ao amanhecer. É como o “GPS biológico” do seu sono.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Quando a melatonina ajuda?
          </h2>
          <p>
            Ela é eficaz em casos específicos:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Desfase horário (jet lag): ajuda a reajustar o relógio interno.</li>
            <li>Trabalho noturno: para quem precisa dormir de dia.</li>
            <li>Distúrbios do ritmo circadiano: como a síndrome de fase atrasada do sono.</li>
            <li>Adultos mais velhos: cuja produção natural de melatonina diminui com a idade.</li>
          </ul>
          <p>
            Nesses casos, doses baixas (0,3 mg a 1 mg), tomadas 1–2 horas antes do horário desejado para dormir, podem ser úteis.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            Quando a melatonina NÃO resolve (e pode atrapalhar)?
          </h2>
          <p>
            Se seu problema é insônia crônica por ansiedade, hiperatividade mental ou hábitos arraigados, a melatonina não ataca a causa raiz.
          </p>
          <p>
            Pior: com o uso prolongado, seu corpo pode:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Reduzir ainda mais sua produção natural.</li>
            <li>Criar dependência psicológica (“não durmo sem ela”).</li>
            <li>Desregular ainda mais seu ritmo circadiano.</li>
          </ul>
          <p>
            Muitos usuários relatam: “No começo funcionava, agora nem sinto mais efeito.” Isso acontece porque a melatonina não ensina seu cérebro a dormir — apenas força um sinal químico temporário.
          </p>

          <h2 className="font-sans text-2xl font-bold text-primary mt-10 mb-4">
            O que fazer então?
          </h2>
          <p>
            Se você já usa melatonina:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li><strong>Não pare de forma abrupta.</strong></li>
            <li><strong>Avalie seu tipo de insônia:</strong> é por ansiedade? Por condicionamento? Por hábitos?</li>
            <li><strong>Trabalhe as causas reais:</strong> higiene do sono, reeducação cognitiva, gestão do estresse.</li>
            <li><strong>Se necessário, reduza o uso gradualmente,</strong> com orientação.</li>
          </ol>

          <blockquote className="border-l-4 border-accent pl-6 italic text-primary my-8 font-serif">
            A boa notícia? A maioria das insônias crônicas não precisa de melatonina — precisa de um plano personalizado que reensine seu corpo a confiar no sono.
          </blockquote>

          <div className="bg-gray-50 p-6 rounded-xl mt-12">
            <p className="font-body text-base-text mb-4">
              Quer saber se a melatonina é indicada para o seu caso — ou se há uma solução mais eficaz?
            </p>
            <p className="font-body text-base-text mb-6">
              Faça uma avaliação completa por R$ 197 e receba orientações baseadas em seu perfil único.
            </p>
            <Link
              href="/landing"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
              Descubra seu caminho para dormir melhor →
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