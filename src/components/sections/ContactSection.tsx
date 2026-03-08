import { useState, useRef } from 'react';

const collaborationOptions = [
  {
    icon: '💼',
    title: 'Freelance Projects',
    description: 'Need a custom web application or landing page? Let\'s work together.',
    color: '#3B82F6',
  },
  {
    icon: '🚀',
    title: 'Startup Collaboration',
    description: 'Building something great? I\'d love to contribute as a frontend engineer.',
    color: '#8B5CF6',
  },
  {
    icon: '🎓',
    title: 'Internship Opportunities',
    description: 'Looking for a motivated CS student? I bring skills and hunger to learn.',
    color: '#10B981',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.04) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-header reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title text-white">
            Let's Build Something{' '}
            <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="section-subtitle">
            Whether it's a project, collaboration, or just a conversation — I'm always open to connecting.
          </p>
        </div>

        {/* Collaboration Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 reveal">
          {collaborationOptions.map((opt) => (
            <div
              key={opt.title}
              className="glass tilt-card rounded-2xl p-7 text-center group"
              style={{ border: `1px solid ${opt.color}20` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${opt.color}18`, border: `1px solid ${opt.color}30` }}
              >
                {opt.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{opt.title}</h3>
              <p className="text-soft-gray text-sm leading-relaxed">{opt.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 reveal-left" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="text-white font-bold text-xl mb-2">Send a Message</h3>
            <p className="text-soft-gray text-sm mb-8">I typically respond within 24 hours.</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                <p className="text-soft-gray">Thanks for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-soft-gray text-sm mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Emmanuel Owusu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    style={focused === 'name' ? { borderColor: 'rgba(59,130,246,0.5)', boxShadow: '0 0 20px rgba(59,130,246,0.1)' } : {}}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-soft-gray text-sm mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    style={focused === 'email' ? { borderColor: 'rgba(59,130,246,0.5)', boxShadow: '0 0 20px rgba(59,130,246,0.1)' } : {}}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-soft-gray text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    className="input-field"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    style={{
                      resize: 'vertical',
                      ...(focused === 'message' ? { borderColor: 'rgba(59,130,246,0.5)', boxShadow: '0 0 20px rgba(59,130,246,0.1)' } : {}),
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                  {isSubmitting && (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Info */}
          <div className="reveal-right space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Direct Contact</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                    label: 'GitHub',
                    value: 'github.com/eklipse1999',
                    href: 'https://github.com/eklipse1999',
                    color: '#ffffff',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/owusu-emmanuel',
                    href: 'https://www.linkedin.com/in/owusu-emmanuel',
                    color: '#0A66C2',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'eklipse1999@gmail.com',
                    href: 'mailto:eklipse1999@gmail.com',
                    color: '#3B82F6',
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-blue-500/30 transition-all duration-300 block"
                    style={{ border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${contact.color}15`, color: contact.color }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-soft-gray text-xs mb-0.5">{contact.label}</div>
                      <div className="text-white text-sm font-medium">{contact.value}</div>
                    </div>
                    <svg className="w-4 h-4 text-soft-gray group-hover:text-blue-400 transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass-blue rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-soft-gray text-sm leading-relaxed">
                Currently open to freelance projects, internship opportunities, and startup collaborations.
                Based in Kumasi, Ghana — open to remote work worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
