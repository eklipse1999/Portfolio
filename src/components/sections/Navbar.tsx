import { useState, useEffect } from 'react';
import logoImg from '../../../assets/aigc/images/logo.png';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,15,25,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* ── NAV BAR ROW ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-12 sm:h-14 md:h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Go to Home"
          >
            {/* Mobile: gradient "E" pill */}
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center font-black text-white text-xs md:hidden"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            >
              E
            </div>
            {/* Desktop: logo image + wordmark */}
            <div className="hidden md:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/20">
                <img
                  src={logoImg}
                  alt="Eklipse logo"
                  className="w-full h-full object-cover object-top scale-[1.35]"
                />
              </div>
              <span className="text-white font-bold text-sm">
                Eklipse<span className="text-blue-400">.</span>
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link transition-all duration-200 text-sm ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="h-px mt-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </button>
            ))}
          </div>

          {/* Right side: Hire Me (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2">
            {/* Hire Me — desktop only */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary hidden md:inline-flex"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem' }}
            >
              <span>Hire Me</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-soft-gray hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              <div className="w-4 h-3.5 flex flex-col justify-between">
                <span
                  className="block h-0.5 bg-current transition-all duration-300 origin-center"
                  style={{ transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
                />
                <span
                  className="block h-0.5 bg-current transition-all duration-300"
                  style={{ opacity: mobileOpen ? 0 : 1 }}
                />
                <span
                  className="block h-0.5 bg-current transition-all duration-300 origin-center"
                  style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden absolute top-full left-0 right-0 px-3 pb-3 pt-1.5"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(11,15,25,0.97)',
            }}
          >
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              }}
            >
              <div className="px-2 py-2 space-y-0.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg transition-all duration-200 text-sm font-semibold ${
                      activeSection === item.id
                        ? 'text-blue-300 bg-blue-500/15'
                        : 'text-soft-gray hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-1.5 pb-0.5 px-1">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary w-full justify-center"
                    style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                  >
                    <span>Hire Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}