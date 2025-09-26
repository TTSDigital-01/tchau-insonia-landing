// app/components/sections/TestimonialSection.tsx
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({
  imageSrc,
  quote,
  name,
  details
}: {
  imageSrc: string;
  quote: string;
  name: string;
  details: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
    <Image
      src={imageSrc}
      alt={`Foto de ${name}`}
      width={80}
      height={80}
      className="w-20 h-20 rounded-full object-cover mb-4"
    />
    <FaQuoteLeft className="text-secondary text-2xl mb-4" />
    {/* --- INICIO DE LA LÍNEA MODIFICADA --- */}
    <p className="font-body italic text-base-text mb-4">&quot;{quote}&quot;</p>
    {/* --- FIN DE LA LÍNEA MODIFICADA --- */}
    <p className="font-sans font-bold text-primary">{name}</p>
    <p className="font-body text-sm text-secondary-text">{details}</p>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans text-3xl font-bold text-secondary text-center">
          Um pequeno investimento que termina em belas noites bem dormidas
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            imageSrc="/images/1TESTIMONIO7.png"
            name="Andrés, 34"
            details="Bogotá"
            quote="Investi apenas R$ 197 sem muitas expectativas e em poucos dias já tinha meu diagnóstico e o plano de tratamento. Em menos de 2 semanas já dormia melhor e hoje me sinto curado, confiante para prosseguir sem ajuda."
          />
          <TestimonialCard
            imageSrc="/images/2TESTIMONIO7.png"
            name="Lucía, 38"
            details="Río do Janeiro"
            quote="Com este programa consegui entender que a minha insônia era psicofisiológica e com tratamento indicado consegui superá-la muito rápido. Obrigada Tchau insônia! ."
          />
          <TestimonialCard
            imageSrc="/images/3TESTIMONIO6.png"
            name="Ricardo, 62"
            details="Buenos Aires"
            quote="Após vários anos tomando medicamentos para mal conseguir dormir, resolvi seguir com disciplina o passo a passo deste programa que é muito didático e fácil de aplicar, hoje durmo como bebê e abandonei os medicamentos."
          />
        </div>
      </div>
    </section>
  );
};
// FIRMADO: EDU