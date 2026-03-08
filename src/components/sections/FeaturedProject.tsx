const features = [
  { icon: '💝', text: 'Faith compatibility matching' },
  { icon: '🔐', text: 'Secure authentication system' },
  { icon: '📱', text: 'Modern responsive UI' },
  { icon: '🏗️', text: 'Scalable architecture' },
];

const techStack = [
  'Next.js',
  'API Integration',
  'Authentication',
  'Database System',
];

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">Featured Work</p>
          <h2 className="section-title text-white">
            Flagship <span className="gradient-text">Project</span>
          </h2>
        </div>

        <div className="glass rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(59,130,246,0.15)' }}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Project Info */}
            <div className="p-10 lg:p-16 flex flex-col justify-center reveal-left">
              {/* Project label */}
              <div className="inline-flex items-center gap-2 glass-blue rounded-full px-4 py-1.5 mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-xs font-mono uppercase tracking-wider">Featured Project</span>
              </div>

              <h3 className="text-4xl font-black text-white mb-3">
                Committed <span className="gradient-text">By Faith</span>
              </h3>

              <div className="text-soft-gray text-sm font-mono mb-6">
                faith-based dating platform · 2025
              </div>

              <p className="text-soft-gray text-base leading-relaxed mb-8">
                A faith-based dating platform designed to connect believers through shared spiritual values and compatibility.
                Built with modern architecture and a focus on meaningful connections.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2">
                    <span className="text-lg">{f.icon}</span>
                    <span className="text-soft-gray text-sm">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Platform</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://github.com/eklipse1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right: Project Mockup */}
            <div className="relative flex items-center justify-center p-10 reveal-right bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              {/* Browser mockup */}
              <div
                className="w-full max-w-md rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.1)',
                }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4 bg-white/5 rounded px-3 py-1">
                    <span className="text-soft-gray text-xs font-mono">committed-by-faith.app</span>
                  </div>
                </div>

                {/* App preview */}
                <div className="p-6 space-y-4">
                  {/* Hero area */}
                  <div className="rounded-xl p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))' }}>
                    <div className="text-3xl mb-2">✝️</div>
                    <h4 className="text-white font-bold text-lg">Committed By Faith</h4>
                    <p className="text-soft-gray text-sm">Connecting believers worldwide</p>
                  </div>

                  {/* Profile cards preview */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Sarah K.', faith: 'Catholic', match: '94%' },
                      { name: 'Grace M.', faith: 'Baptist', match: '88%' },
                  ].map((profile) => (
                    <div
                      key={profile.name}
                      className="rounded-xl p-3"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mb-2" />
                      <div className="text-white text-xs font-semibold">{profile.name}</div>
                      <div className="text-soft-gray text-xs">{profile.faith}</div>
                      <div className="text-green-400 text-xs font-mono mt-1">{profile.match} match</div>
                    </div>
                  ))}
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {['Faith Match', 'Secure Auth', 'Chat', 'Profiles'].map((tag) => (
                      <span key={tag} className="tech-tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-green-400 text-xs font-mono">✓ Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
