// app/page.tsx (Versión 13.0 - Prueba de Botones) POR EDU
//forzar deploy en vercel

import { FinalCTASection } from "./components/sections/FinalCTASection";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { ScienceBackedSection } from "./components/sections/ScienceBackedSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { ValuePropositionSection } from "./components/sections/ValuePropositionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ScienceBackedSection />
      <FinalCTASection />
    </>
  );
}
// FIRMADO: EDU