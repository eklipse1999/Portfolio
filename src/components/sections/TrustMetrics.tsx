import { useRef, useEffect } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  icon: string;
}

function StatCard({ value, suffix, label, description, delay, icon }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(() => {
            const startTime = performance.now();
            const update = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / 2000, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              if (numRef.current) {
                numRef.current.textContent = Math.round(value * eased).toString();
              }
              if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );
    if (numRef.current) observer.observe(numRef.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      className="glass tilt-card rounded-2xl p-8 text-center group hover:border-blue-500/30 transition-all duration-300"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div className="stat-number mb-1">
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-white font-semibold text-lg mb-2">{label}</div>
      <div className="text-soft-gray text-sm leading-relaxed">{description}</div>
    </div>
  );
}

const stats: StatProps[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Projects Built',
    description: 'From academic assignments to real-world platforms',
    delay: 0,
    icon: '🚀',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Technologies Used',
    description: 'Full-stack tools and modern frameworks mastered',
    delay: 200,
    icon: '⚡',
  },
  {
    value: 3,
    suffix: '+',
    label: 'Live Platforms',
    description: 'Production-grade applications actively running',
    delay: 400,
    icon: '🌍',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Students Mentored',
    description: 'Helping peers navigate tech and programming',
    delay: 600,
    icon: '🎓',
  },
];

export default function TrustMetrics() {
  return (
    <section id="metrics" className="relative py-24 px-6 lg:px-12">
      {/* Glowing top border */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="glow-divider" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">By The Numbers</p>
          <h2 className="section-title text-white">
            Building with <span className="gradient-text">Purpose</span>
          </h2>
          <p className="section-subtitle">
            Every project is a step toward mastery — here's a snapshot of the journey so far.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
