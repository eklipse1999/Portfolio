import { useCustomCursor } from '../hooks/useCustomCursor';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import TrustMetrics from './sections/TrustMetrics';
import FeaturedProject from './sections/FeaturedProject';
import ProjectGallery from './sections/ProjectGallery';
import SkillsSection from './sections/SkillsSection';
import BuilderPhilosophy from './sections/BuilderPhilosophy';
import DevelopmentJourney from './sections/DevelopmentJourney';
import GitHubActivity from './sections/GitHubActivity';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function Portfolio() {
  // For debugging - can be commented out if custom cursor causes issues
  const { dotRef, ringRef } = useCustomCursor();
  useScrollReveal();

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />

      {/* Particles canvas */}
      <canvas id="particles-canvas" />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <TrustMetrics />
        <FeaturedProject />
        <ProjectGallery />
        <SkillsSection />
        <BuilderPhilosophy />
        <DevelopmentJourney />
        <GitHubActivity />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
