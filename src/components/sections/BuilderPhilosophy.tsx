const philosophies = [
  {
    icon: '🎨',
    title: 'Design Matters',
    description: 'Great software should feel intuitive and visually appealing. Aesthetics and function must work in harmony.',
    color: '#3B82F6',
    delay: '0s',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'Fast applications provide better user experiences. Every millisecond counts in the real world.',
    color: '#8B5CF6',
    delay: '0.1s',
  },
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    description: 'Readable and scalable code improves maintainability. Write code for humans, not just machines.',
    color: '#10B981',
    delay: '0.2s',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Technology evolves constantly, so I constantly learn and adapt. Stagnation is the enemy of growth.',
    color: '#F59E0B',
    delay: '0.3s',
  },
];

export default function BuilderPhilosophy() {
  return (
    <section id="philosophy" className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="section-header reveal">
          <p className="section-label">Philosophy</p>
          <h2 className="section-title text-white">
            My Approach to{' '}
            <span className="gradient-text">Building Software</span>
          </h2>
          <p className="section-subtitle">
            The core principles that guide every line of code I write and every product I build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, i) => (
            <div
              key={item.title}
              className="glass tilt-card rounded-2xl p-7 group relative overflow-hidden"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                animationDelay: item.delay,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${item.color}15 0%, transparent 60%)`,
                }}
              />

              {/* Number */}
              <div
                className="text-7xl font-black absolute top-4 right-4 opacity-5 font-mono select-none"
                style={{ color: item.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                {item.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-soft-gray text-sm leading-relaxed">{item.description}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${item.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
