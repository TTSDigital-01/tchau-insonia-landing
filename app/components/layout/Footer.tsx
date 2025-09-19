// app/components/layout/Footer.tsx (Versión 1.0)

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna del Logo y Misión */}
          <div className="md:col-span-1">
            <h3 className="font-sans text-2xl font-bold">TCHAU INSÔNIA</h3>
            <p className="font-body text-secondary mt-2 text-sm">
              Recupera teu sono, recupera tua vida.
            </p>
          </div>

          {/* Columna de Enlaces */}
          <div className="md:col-span-1">
            <h4 className="font-sans font-bold">Navegação</h4>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>
                <Link href="#how-it-works" className="text-secondary hover:text-white transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-secondary hover:text-white transition-colors">
                  Testemunhos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Legal */}
          <div className="md:col-span-1">
            <h4 className="font-sans font-bold">Jurídico</h4>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>
                <Link href="/privacy-policy" className="text-secondary hover:text-white transition-colors">
                  Aviso de privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-secondary hover:text-white transition-colors">
                  Termos e Condições
                </Link>
              </li>
               <li>
                <Link href="/guarantee" className="text-secondary hover:text-white transition-colors">
                  Garantia
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria y Derechos de Autor */}
        <div className="mt-10 pt-8 border-t border-blue-800 text-center">
          <p className="font-body text-sm text-secondary">
            © {new Date().getFullYear()} TCHAU INSÔNIA. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
// FIRMADO: EDU