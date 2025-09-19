// app/components/sections/ScienceBackedSection.tsx

import { FaCheckCircle } from 'react-icons/fa';

export const ScienceBackedSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-sans text-3xl font-bold text-secondary text-center">
          Não e mágica. É ciência!
        </h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <ul className="space-y-4">
            
            <li className="flex items-start">
              <FaCheckCircle className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
              <span className="font-body text-lg text-base-text">
                Baseado em <strong>princípios cientificamente comprovados.</strong>Usando amplo arsenal terapêutico integrativo, sem medicamentos. 
              </span>
            </li>

            <li className="flex items-start">
              <FaCheckCircle className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
              <span className="font-body text-lg text-base-text">
                Desenvolvido pelo  <strong>Dr. Mario Rivera, </strong> médico em exercício há 40 anos, <strong>com apoio de equipe gabaritada.</strong>.
              </span>
            </li>

            <li className="flex items-start">
              <FaCheckCircle className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
              <span className="font-body text-lg text-base-text">
                Método <strong>aprovado internacionalmente </strong> por médicos de várias especialidades.
              </span>
            </li>

            <li className="flex items-start">
              <FaCheckCircle className="text-accent text-xl mt-1 mr-4 flex-shrink-0" />
              <span className="font-body text-lg text-base-text">
                Confiável 100%.  <strong>O programa mantem-se em atualização constante</strong>.
              </span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};
// FIRMADO: EDU