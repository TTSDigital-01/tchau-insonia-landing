// pp/components/sections/FinalCTASection.tsx (Versión 1.0)

import { FaCheckCircle } from 'react-icons/fa';
import { Button } from '../ui/Button'; // Importamos nuestro componente de botón

export const FinalCTASection = () => {
  return (
    <section id="contact" className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-secondary">
          Pronto para dar um “tchau” à insônia?
        </h2>
        <p className="font-body text-lg text-base-text mt-4">
          Inscreva-se agora por apenas R$ 197 e comece hoje mesmo.
        </p>

        {/* Lista de Beneficios Rápidos */}
        <ul className="mt-8 space-y-3 inline-block text-left">
          <li className="flex items-center">
            <FaCheckCircle className="text-accent text-lg mr-3" />
            <span className="font-body text-base-text">Diagnóstico primário personalizado </span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-accent text-lg mr-3" />
            <span className="font-body text-base-text">Plano de tratamento baseado em ciência</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-accent text-lg mr-3" />
            <span className="font-body text-base-text">Acesso imediato ao programa</span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-accent text-lg mr-3" />
            <span className="font-body text-base-text">Suporte desde o primeiro minuto</span>
          </li>
        </ul>

        {/* Botón de Inscripción Final */}
        <div className="mt-10">
          <Button size="lg" variant="primary" asChild>
            <a href="/checkout">
              Inscreva-se e comece agora!
            </a>
          </Button>
          <p className="text-sm text-secondary-text mt-3">
            Pago seguro. Com 7 dias de garantia para eventual cancelamento. 
          </p>
        </div>

      </div>
    </section>
  );
};
// FIRMADO: EDU