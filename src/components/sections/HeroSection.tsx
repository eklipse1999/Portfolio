import { useEffect, useRef } from 'react';
import { useParticles } from '../../hooks/useParticles';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import portraitImg from '../../assets/emmanuel-owusu-frontend-developer.jpg';

const TYPING_WORDS = ['React', 'Next.js', 'JavaScript', 'UI Engineering'];

export default function HeroSection() {
  const typingText = useTypingEffect({ words: TYPING_WORDS, speed: 90, deleteSpeed: 60, pause: 2000 });
  const portraitRef = useRef<HTMLDivElement>(null);

  useParticles('particles-canvas');

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = portrait.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / rect.height) * -15;
      const rotateY = ((e.clientX - centerX) / rect.width) * 15;
      portrait.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      portrait.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    portrait.addEventListener('mousemove', handleMouseMove);
    portrait.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      portrait.removeEventListener('mousemove', handleMouseMove);
      portrait.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden pt-12 sm:pt-14 md:pt-16 min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0B0F19 0%, #0d1530 50%, #0B0F19 100%)' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div
            className="reveal"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-blue rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-blue-300 font-mono">Available for opportunities</span>
            </div>

            {/* Main headline */}
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 sm:mb-6 tracking-tight">
              <span className="text-white">Emmanuel</span>
              <br />
              <span className="gradient-text">Owusu</span>
              <br />
              <span className="text-white text-[1.8rem] sm:text-4xl lg:text-5xl font-bold mt-1.5 sm:mt-2 block">
                Frontend Engineer
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-soft-gray text-[0.95rem] sm:text-lg leading-relaxed mb-5 sm:mb-8 max-w-xl">
              I design and engineer modern digital experiences focused on{' '}
              <span className="text-blue-300">performance</span>,{' '}
              <span className="text-purple-300">usability</span>, and{' '}
              <span className="text-blue-300">beautiful interfaces</span>.
            </p>

            {/* Typing Effect */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-10">
              <span className="text-soft-gray text-xs sm:text-sm font-mono">&lt;tech&gt;</span>
              <div className="glass-blue rounded-lg px-3 sm:px-4 py-2 min-w-[145px] sm:min-w-[180px]">
                <span className="text-electric-blue font-mono text-sm sm:text-lg font-semibold typing-cursor">
                  {typingText}
                </span>
              </div>
              <span className="text-soft-gray text-xs sm:text-sm font-mono">&lt;/tech&gt;</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-12">
              <button
                className="btn-primary w-full sm:w-auto justify-center"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="btn-outline w-full sm:w-auto justify-center"
                onClick={() => scrollToSection('contact')}
              >
                <span>Contact Me</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="text-soft-gray text-xs sm:text-sm">Find me on</span>
              <a
                href="https://github.com/eklipse1999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/owusu-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-gray hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:eklipse1999@gmail.com"
                className="text-soft-gray hover:text-purple-400 transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT — Portrait */}
          <div className="flex justify-center lg:justify-end reveal">
            <div
              ref={portraitRef}
              className="portrait-wrapper w-full max-w-[260px] sm:max-w-[360px]"
              style={{ transition: 'transform 0.3s ease' }}
            >
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-3xl portrait-glow -z-10" style={{ transform: 'scale(1.08)' }} />

              {/* Gradient border wrapper */}
              <div className="gradient-border">
                <div className="relative overflow-hidden rounded-2xl w-full aspect-[6/7]">
                  {/* Dark gradient overlay at bottom */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(11,15,25,0.8) 0%, rgba(11,15,25,0.2) 40%, transparent 70%)',
                    }}
                  />

                  {/* Portrait Image */}
                  <img
                    src={portraitImg}
                    alt="Emmanuel Owusu - Eklipse"
                    className="w-full h-full object-cover"
                    style={{ animationDelay: '0.5s' }}
                    loading="eager"
                    onError={(e) => {
                      // Fallback to a generated avatar on error
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center';
                      fallback.style.cssText = 'background: linear-gradient(135deg, #0f1530, #1a1040);';
                      fallback.innerHTML = `<div style="text-align:center">
                        <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#3B82F6,#8B5CF6);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:3rem;font-weight:800;color:white">E</div>
                        <div style="color:#60A5FA;font-family:monospace;font-size:1.1rem;font-weight:600">Emmanuel Owusu</div>
                        <div style="color:#94A3B8;font-size:0.85rem;margin-top:4px">@Eklipse</div>
                      </div>`;
                      parent.appendChild(fallback);
                    }}
                  />

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    <div className="text-white font-bold text-lg">Emmanuel Owusu</div>
                    <div className="text-blue-300 text-sm font-mono">@Eklipse · Frontend Engineer</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="hidden sm:flex absolute -top-4 -right-4 glass-blue rounded-xl px-3 py-2 items-center gap-2 z-30 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-blue-300 text-xs font-mono">⚡ Building</span>
              </div>
              <div
                className="hidden sm:flex absolute -bottom-4 -left-4 glass-purple rounded-xl px-3 py-2 items-center gap-2 z-30 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-purple-300 text-xs font-mono">🎓 KsTU CS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-soft-gray text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}