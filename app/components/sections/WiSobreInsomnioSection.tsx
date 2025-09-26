// app/components/sections/WiSobreInsomnioSection.tsx — Versión 3.1
import Link from 'next/link';

export const WiSobreInsomnioSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Bloque 1: Definición — SIN TÍTULO, SIN ESTILO DE PÁGINA */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="font-sans text-2xl font-bold text-primary mb-4">
            O que é a insônia? (E o que não é)
          </h2>
          <p className="font-body text-base-text leading-relaxed">
            A insônia não é apenas “não conseguir dormir”. É um distúrbio do sono que afeta sua capacidade de adormecer, manter o sono ou descansar profundamente, mesmo quando você tem a oportunidade de fazê-lo. Não é sinal de fraqueza. Não é preguiça. Não é algo que se resolve com “pensar em coisas boas”. É uma condição real, comum e, acima de tudo: tratável.
          </p>
        </div>

        {/* Bloque 2: Tipos de insônia */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="font-sans text-2xl font-bold text-primary mb-4">
            Tipos de insônia: nem todos são iguais
          </h2>
          <p className="font-body text-base-text leading-relaxed mb-4">
            Não existe apenas um tipo de insônia. Há vários, e conhecer o seu é o primeiro passo para superá-lo.
          </p>
          <h3 className="font-sans text-xl font-bold text-primary mt-4 mb-2">Insônia ocasional ou aguda</h3>
          <p className="font-body text-base-text leading-relaxed mb-4">
            Dura dias ou semanas. Costuma estar ligada ao estresse, viagens ou mudanças emocionais. É normal. Todos vivenciamos isso em algum momento.
          </p>
          <h3 className="font-sans text-xl font-bold text-primary mt-4 mb-2">Insônia crônica</h3>
          <p className="font-body text-base-text leading-relaxed mb-4">
            Ocorre pelo menos 3 noites por semana durante mais de 3 meses. Pode ter causas físicas, emocionais ou hábitos arraigados. Requer uma abordagem mais profunda, mas sim, tem solução.
          </p>
          <h3 className="font-sans text-xl font-bold text-primary mt-4 mb-2">Insônia psicofisiológica</h3>
          <p className="font-body text-base-text leading-relaxed">
            A mais comum entre quem já tentou de tudo. Seu corpo aprendeu a associar a cama à vigília, à ansiedade ou ao esforço para dormir. É como um “mau hábito” do sistema nervoso. Mas, assim como qualquer hábito, pode ser reeducado.
          </p>
        </div>

        {/* Bloque 3: Causas comuns */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="font-sans text-2xl font-bold text-primary mb-4">
            Por que isso está acontecendo comigo?
          </h2>
          <p className="font-body text-base-text leading-relaxed mb-4">
            A insônia raramente tem uma única causa. É uma combinação de fatores que se reforçam entre si:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="font-body text-base-text"><strong>Estresse e ansiedade:</strong> A mente não desconecta, mesmo quando o corpo está cansado.</li>
            <li className="font-body text-base-text"><strong>Hábitos de sono desregulados:</strong> Deitar tarde, usar o celular na cama, dormir sestas longas.</li>
            <li className="font-body text-base-text"><strong>Condições médicas ou medicamentos:</strong> Problemas hormonais, dor crônica, antidepressivos, etc.</li>
            <li className="font-body text-base-text"><strong>Idade:</strong> Com os anos, o sono tende a ser mais leve, mas o insomnio não é parte normal do envelhecimento.</li>
            <li className="font-body text-base-text"><strong>Medo do insônia:</strong> Sim, existe. É quando você começa a temer a hora de deitar porque “já sei que não vou dormir”.</li>
          </ul>
        </div>

        {/* Bloque 4: Quando buscar ajuda */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="font-sans text-2xl font-bold text-primary mb-4">
            Quando procurar ajuda?
          </h2>
          <p className="font-body text-base-text leading-relaxed mb-4">
            Você não precisa esperar estar exausto por meses para agir. Estes são momentos-chave para intervenir:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="font-body text-base-text"><strong>Quando já tem mais de 4 semanas dormindo mal na maioria das noites.</strong></li>
            <li className="font-body text-base-text"><strong>Se evita deitar por medo de não dormir.</strong></li>
            <li className="font-body text-base-text"><strong>Se já toma remédios ou suplementos e já não funcionam como antes.</strong></li>
            <li className="font-body text-base-text"><strong>Se seu rendimento diário, seu humor ou seus relacionamentos estão sendo afetados.</strong></li>
          </ul>
          <p className="font-body text-base-text leading-relaxed">
            Procurar ajuda não é fracasso. É um ato de autocuidado. E muitas vezes, o que falta não é força de vontade, mas sim uma orientação clara e personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};