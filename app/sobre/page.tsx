// app/sobre/page.tsx
"use client";

import { WiSobreNosotrosSection } from '../components/sections/WiSobreNosotrosSection';

export default function SobrePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Fondo suave de habitación */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/images/sobre-fondo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 pt-32 pb-24 px-6">
        {/* Título único */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-sans text-3xl md:text-5xl font-bold text-primary">
            Sobre nós / A equipe
          </h1>
          <p className="font-body text-lg text-base-text max-w-2xl mx-auto mt-4">
            Conheça o médico que criou o programa e a equipe que o mantém vivo.
          </p>
        </div>

        {/* Contenido del componente */}
        <div className="px-6">
          <WiSobreNosotrosSection />
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <p className="font-body text-lg text-base-text mb-8">
            Se você quiser ver como este método mudou a vida de pessoas como você, visite:
          </p>
          <a
            href="/testemunhos"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-sans font-bold text-lg shadow-md hover:shadow-lg transition-all"
          >
            Testemunhos →
          </a>
        </div>
      </div>
    </div>
  );
}