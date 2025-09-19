// app/components/layout/Header.tsx (Versión 1.10)

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm w-full shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" aria-label="Página de inicio de Chao Insomnio">
          <Image
            src="/images/logo_final.svg"
            alt="Logo de Chao Insomnio"
            width={180}
            height={50}
            className="h-auto"
            priority // Prioriza la carga del logo
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body text-base-text">
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            Como funciona
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">
            Testemunhos
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
};
// FIRMADO: EDU