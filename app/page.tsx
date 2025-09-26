// app/page.tsx — Versión actualizada (sin WiSobreInsomnioSection)
import { WiHeroSection } from './components/sections/WiHeroSection';
import { WiIntroSection } from './components/sections/WiIntroSection';

export default function HomePage() {
  return (
    <>
      <WiHeroSection />
      <WiIntroSection />
    </>
  );
}