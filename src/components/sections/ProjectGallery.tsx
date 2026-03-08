import { useRef, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  gradient: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time Chat App',
    description: 'A fully featured chat application with live messaging, user presence, and room management.',
    tags: ['React', 'WebSocket', 'Node.js', 'CSS'],
    icon: '💬',
    gradient: 'from-blue-500/15 to-cyan-500/10',
    github: 'https://github.com/eklipse1999',
    demo: '#',
  },
  {
    id: 2,
    title: 'Inventory Management',
    description: 'A comprehensive inventory system with real-time tracking, reporting, and database integration.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    icon: '📦',
    gradient: 'from-purple-500/15 to-pink-500/10',
    github: 'https://github.com/eklipse1999',
    demo: '#',
  },
  {
    id: 3,
    title: 'AI Concept Project',
    description: 'An experimental AI-powered interface exploring smart recommendations and NLP interactions.',
    tags: ['React', 'OpenAI API', 'Next.js', 'TypeScript'],
    icon: '🤖',
    gradient: 'from-green-500/15 to-teal-500/10',
    github: 'https://github.com/eklipse1999',
    demo: '#',
  },
  {
    id: 4,
    title: 'UI Animation Lab',
    description: 'A collection of creative UI animations, micro-interactions, and experimental CSS effects.',
    tags: ['CSS', 'Framer Motion', 'GSAP', 'React'],
    icon: '✨',
    gradient: 'from-orange-500/15 to-yellow-500/10',
    github: 'https://github.com/eklipse1999',
    demo: '#',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - cy) / rect.height) * -10;
    const rotateY = ((e.clientX - cx) / rect.width) * 10;
    cardRef.current!.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    cardRef.current!.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  return (
    <div
      ref={cardRef}
      className={`glass tilt-card rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br ${project.gradient}`}
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.3s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card header: visual mockup */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: 'rgba(0,0,0,0.3)' }}
      >
        {/* Icon */}
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
          {project.icon}
        </div>

        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Corner accent */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-soft-gray text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-soft-gray hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="text-white/10">|</span>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <section id="projects" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">My Work</p>
          <h2 className="section-title text-white">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of projects built with passion, precision, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/eklipse1999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
