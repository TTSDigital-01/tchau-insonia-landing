// app/components/layout/Header.tsx — Versión 5 (Menú móvil con fondo negro y texto blanco)
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const pathname = usePathname();
  const isLanding = pathname === '/landing';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll en background cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Definir enlaces según el contexto
  const institutionalLinks = [
    { href: '/', label: 'Início' },
    { href: '/insomnio', label: 'O que é insônia' },
    { href: '/metodo', label: 'Nosso método' },
    { href: '/ciencia', label: 'Ciência' },
    { href: '/sobre', label: 'Sobre nós' },
    { href: '/blog', label: 'Blog' },
    { href: '/testemunhos', label: 'Testemunhos' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contato', label: 'Contato' },
  ];

  const landingLinks = [
    { href: '#how-it-works', label: 'Como funciona' },
    { href: '#testimonials', label: 'Testemunhos' },
    { href: '#contact', label: 'Contato' },
  ];

  const currentLinks = isLanding ? landingLinks : institutionalLinks;

  return (
    <header className="bg-background/80 backdrop-blur-sm w-full shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
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

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-8 font-body text-base-text">
          {currentLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa para mobile */}
        <button
          className="md:hidden text-base-text focus:outline-none focus:ring-2 focus:ring-primary rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </nav>

      {/* Menú móvil overlay — FONDO NEGRO, TEXTO BLANCO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-primary z-40" // ✅ Fondo negro (#1B2A49)
          >
            <div className="flex flex-col items-center justify-start pt-20 px-6 h-full">
              <div className="w-full max-w-md space-y-6">
                {currentLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: currentLinks.indexOf(link) * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-center font-body text-xl text-white font-semibold hover:text-accent transition-colors py-3 border-b border-blue-800/30"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              {/* Botón de cierre explícito — visible y accesible */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-12 px-6 py-3 bg-white/10 text-white rounded-lg font-body text-sm hover:bg-white/20 transition-colors"
                aria-label="Cerrar menú"
              >
                Cerrar menú
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};