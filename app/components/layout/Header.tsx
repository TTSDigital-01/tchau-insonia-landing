// app/components/layout/Header.tsx — Versión Actualizada
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname(); // Detecta la ruta actual
  const isLanding = pathname === '/landing'; // Si estamos en /landing, es true

  return (
    <header className="bg-background/80 backdrop-blur-sm w-full shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" aria-label="Página de inicio de Tchau Insônia">
          <Image
            src="/images/logo_final.svg"
            alt="Logo de Tchau Insônia"
            width={180}
            height={50}
            className="h-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body text-base-text">
          {isLanding ? (
            // ✅ HEADER PARA LANDING — MANTIENE EL ORIGINAL
            <>
              <Link href="#how-it-works" className="hover:text-primary transition-colors">
                Como funciona
              </Link>
              <Link href="#testimonials" className="hover:text-primary transition-colors">
                Testemunhos
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contato
              </Link>
            </>
          ) : (
            // ✅ HEADER PARA WEB INSTITUCIONAL — NUEVO ORDEN Y NUEVOS ENLACES
            <>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/insomnio" className="hover:text-primary transition-colors">
                O que é insônia
              </Link>
              <Link href="/metodo" className="hover:text-primary transition-colors">
                Nosso método
              </Link>
              <Link href="/ciencia" className="hover:text-primary transition-colors">
                Ciência
              </Link>
              <Link href="/sobre" className="hover:text-primary transition-colors">
                Sobre nós
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/testemunhos" className="hover:text-primary transition-colors">
                Testemunhos
              </Link>
              <Link href="/faq" className="hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contato" className="hover:text-primary transition-colors">
                Contato
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};