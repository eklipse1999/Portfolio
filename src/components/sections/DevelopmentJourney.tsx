interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isActive?: boolean;
}

const events: TimelineEvent[] = [
  {
    year: '2023',
    title: 'Started Computer Science',
    description: 'Enrolled at Kumasi Technical University to study Computer Science — the beginning of a focused journey in software engineering.',
    icon: '🎓',
    color: '#3B82F6',
    isActive: false,
  },
  {
    year: '2024',
    title: 'Built Multiple Projects',
    description: 'Developed multiple academic and personal software projects, mastering React, PHP, MySQL, and modern frontend frameworks.',
    icon: '⚡',
    color: '#8B5CF6',
    isActive: false,
  },
  {
    year: '2025',
    title: 'Real-World Platforms',
    description: 'Developed Committed By Faith — a production-grade faith-based platform, along with other real-world software solutions.',
    icon: '🚀',
    color: '#10B981',
    isActive: true,
  },
  {
    year: '2026',
    title: 'Advanced Engineering & AI',
    description: 'Expanding into advanced frontend engineering, scalable system design, and integrating AI capabilities into modern web platforms.',
    icon: '🤖',
    color: '#F59E0B',
    isActive: false,
  },
];

export default function DevelopmentJourney() {
  return (
    <section id="journey" className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.2) 20%, rgba(139,92,246,0.2) 80%, transparent)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">Timeline</p>
          <h2 className="section-title text-white">
            Development <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            From curious student to engineer — the milestones that shaped who I am today.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, transparent, #3B82F6 20%, #8B5CF6 80%, transparent)',
              opacity: 0.4,
            }}
          />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`reveal relative flex gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                  <div
                    className={`glass tilt-card rounded-2xl p-7 inline-block w-full md:max-w-sm ${
                      event.isActive ? '' : ''
                    }`}
                    style={{
                      border: `1px solid ${event.color}25`,
                      background: event.isActive
                        ? `linear-gradient(135deg, ${event.color}10, rgba(255,255,255,0.03))`
                        : undefined,
                    }}
                  >
                    {event.isActive && (
                      <div
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3 text-xs font-mono"
                        style={{
                          background: `${event.color}20`,
                          color: event.color,
                          border: `1px solid ${event.color}30`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Current
                      </div>
                    )}
                    <div className="text-4xl font-black font-mono mb-2" style={{ color: event.color }}>
                      {event.year}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                    <p className="text-soft-gray text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                    style={{
                      background: `${event.color}20`,
                      border: `2px solid ${event.color}`,
                      boxShadow: `0 0 20px ${event.color}40`,
                    }}
                  >
                    {event.icon}
                  </div>
                </div>

                {/* Empty side for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
