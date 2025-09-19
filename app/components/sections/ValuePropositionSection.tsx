// app/components/sections/ValuePropositionSection.tsx (Versión 1.0 - Final)

import Image from 'next/image';
import { FaClipboardList, FaFlask, FaUserMd, FaArrowRight } from 'react-icons/fa';

const BenefitCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
    <Icon className="text-accent text-4xl mb-4" />
    <h3 className="font-sans font-bold text-lg text-primary">{title}</h3>
    <p className="font-body text-base-text mt-3">{children}</p>
  </div>
);

export const ValuePropositionSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* --- INICIO DE LA SECCIÓN MODIFICADA --- */}
        {/* 1. Nuevo div contenedor para agrupar el título y las tarjetas */}
        <div className="mb-16"> 
          <h2 className="font-sans text-3xl font-bold text-secondary text-center max-w-4xl mx-auto">
            Um programa médico digital, não um app a mais
          </h2>

          {/* 2. Añadimos un margen superior a la grilla para separarla del título */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard icon={FaClipboardList} title="Estrategias Fundamentadas em Ciência">
              Tenha acesso a conhecimento validado cientificamente para enfrentar a insônia conhecendo o inimigo.
            </BenefitCard>
            <BenefitCard icon={FaFlask} title="Processo com Acompanhamento Médico">
              O programa é desenvolivido e supervisionado por uma gabaritada equipe médica.
            </BenefitCard>
            <BenefitCard icon={FaUserMd} title="Diagnóstico e Tratamento">
              Respondendo os questionários do programa recebera relatórios comentando cada resposta. No final terá seu 
            </BenefitCard>
            <BenefitCard icon={FaArrowRight} title="Acesso a Mentoria Progressiva ">
              Tchau insônia lhe permite acesso facilitado a uma mentoria ou acompanhamento personalizado e contínuo até superar totalmente o problema.
            </BenefitCard>
          </div>
        </div>
        {/* --- FIN DE LA SECCIÓN MODIFICADA --- */}

        {/* La imagen ahora está fuera del grupo y se beneficiará del margen inferior del div anterior */}
        <div className="mt-12 mb-16">
          <Image
            src="/images/HERO1.jpg" // Asegúrate que la imagen correcta es HERO1.jpg y no PROPVALOR3.png
            alt="Pantalla del programa CHAO INSOMNIO mostrando un informe médico personalizado"
            width={1024}
            height={576}
            className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  );
};
// FIRMADO: EDU```

