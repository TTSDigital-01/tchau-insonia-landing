// app/components/sections/WiIntroSection.tsx
import Link from 'next/link';

export const WiIntroSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título principal */}
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-primary mb-8">
          Bem-vindo. Se você quer entender bem sua insônia e como podemos ajudar, está no lugar certo.
        </h1>

        {/* Parágrafos */}
        <p className="font-body text-lg text-base-text mb-8 leading-relaxed">
          Sabemos o que é dar voltas na cama noite após noite. O que é acordar cansado, mesmo depois de horas sob as cobertas. E o quanto é frustrante tentar de tudo… e nada parecer funcionar.
        </p>

        <p className="font-body text-lg text-base-text mb-8 leading-relaxed">
          No Chao Insônia, não vendemos soluções mágicas. Oferecemos um caminho claro, baseado em ciência, empatia e tecnologia, para ajudá-lo a recuperar um sono reparador — sem depender de remédios.
        </p>

        <p className="font-body text-lg text-base-text mb-12 leading-relaxed">
          Este site é para quem já ouviu frases como “dormir mais cedo” ou “tomar melatonina” e percebeu que isso não resolve. Aqui, você encontrará respostas reais, informações confiáveis e um método comprovado que já acompanha milhares de pessoas na América Latina.
        </p>

        {/* Lista de secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-sans font-bold text-primary mb-3">Conheça nosso método</h3>
            <p className="font-body text-base-text">Como funciona nossa abordagem integrativa, passo a passo</p>
            <Link href="/metodo" className="mt-4 inline-block text-accent font-body hover:underline">Saiba mais →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-sans font-bold text-primary mb-3">Entenda a insônia</h3>
            <p className="font-body text-base-text">O que é, o que não é e por que isso está acontecendo com você</p>
            <Link href="/insomnio" className="mt-4 inline-block text-accent font-body hover:underline">Saiba mais →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-sans font-bold text-primary mb-3">Histórias reais</h3>
            <p className="font-body text-base-text">Pessoas como você que conseguiram dormir melhor</p>
            <Link href="/testemunhos" className="mt-4 inline-block text-accent font-body hover:underline">Saiba mais →</Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-sans font-bold text-primary mb-3">Blog e recursos</h3>
            <p className="font-body text-base-text">Artigos práticos sobre hábitos, ansiedade, mindfulness e muito mais</p>
            <Link href="/blog" className="mt-4 inline-block text-accent font-body hover:underline">Saiba mais →</Link>
          </div>
        </div>

        {/* Cierre */}
        <p className="font-body text-lg text-base-text mb-8 leading-relaxed">
          Seu descanso não é um luxo. É um direito. E recuperá-lo é possível.
        </p>

        <Link
          href="/landing"
          className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          Inscreva-se por R$ 197 e comece hoje
        </Link>
      </div>
    </section>
  );
};