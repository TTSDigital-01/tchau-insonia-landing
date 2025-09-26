// app/components/sections/ScrollStack.tsx
"use client";
import { useEffect, useRef, useCallback, useState } from 'react';
import Lenis from 'lenis';

export const ScrollStack = ({ children }: { children: React.ReactNode }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lenisRef = useRef<any>(null);
  const isUpdatingRef = useRef(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const setupLenis = useCallback(() => {
    if (!scrollerRef.current || isInitialized) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    lenis.on('scroll', () => {
      updateCardPositions();
    });

    lenisRef.current = lenis;
    setIsInitialized(true);
  }, [isInitialized]);

  const updateCardPositions = useCallback(() => {
    if (isUpdatingRef.current || !cardsRef.current.length) return;
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const cardTop = card.offsetTop;
      const cardHeight = card.offsetHeight;

      // Posiciones del estante: izquierda, centro, derecha
      const positions = [
        { x: -120, y: -80 }, // Izquierda — más arriba y atrás
        { x: 0, y: 0 },      // Centro — nivel visual
        { x: 120, y: 80 },   // Derecha — más abajo y adelante
      ];

      const pos = positions[index];
      const targetY = cardTop + pos.y - scrollTop;
      const scale = 1 + (1 - targetY / windowHeight) * 0.02; // Escala mínima: 1.0 → 1.02

      // Solo anima si está en el viewport
      if (cardTop < scrollTop + windowHeight && cardTop + cardHeight > scrollTop) {
        card.style.transform = `translateX(${pos.x}px) translateY(${targetY}px) scale(${Math.min(1.02, Math.max(1, scale))})`;
        card.style.opacity = '1';
      } else {
        card.style.opacity = '0.5';
      }
    });

    isUpdatingRef.current = false;
  }, []);

  useEffect(() => {
    setupLenis();

    const handleScroll = () => {
      updateCardPositions();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [setupLenis, updateCardPositions]);

  return (
    <div ref={scrollerRef} className="relative">
      {children}
    </div>
  );
};

export const ScrollStackItem = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.willChange = 'transform, opacity';
      cardRef.current.style.backfaceVisibility = 'hidden';
      cardRef.current.style.transform = 'translateZ(0)';
      cardRef.current.style.position = 'relative';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full max-w-[300px] mx-auto mb-16 p-8 bg-white rounded-2xl shadow-none border-0 ${className}`}
    >
      {children}
    </div>
  );
};