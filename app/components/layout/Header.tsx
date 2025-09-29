// app/components/layout/Header.tsx — Versión 6 (Menú móvil desplegable desde arriba)
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

      {/* Menú móvil desplegable desde arriba — FONDO NEGRO COMPLETO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {currentLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: currentLinks.indexOf(link) * 0.03 }}
                >
                  <Link
                    href={link.href}
                    className="block text-white font-body text-xl font-semibold py-2 hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 text-white/80 hover:text-white text-sm font-body"
                >
                  Cerrar menú
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};