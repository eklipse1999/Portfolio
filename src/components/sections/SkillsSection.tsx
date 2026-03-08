interface Skill {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

const skillCategories = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5', icon: '🧱', color: '#E34F26', bgColor: 'rgba(227,79,38,0.12)' },
      { name: 'CSS3', icon: '🎨', color: '#1572B6', bgColor: 'rgba(21,114,182,0.12)' },
      { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', bgColor: 'rgba(247,223,30,0.12)' },
      { name: 'React', icon: '⚛️', color: '#61DAFB', bgColor: 'rgba(97,218,251,0.12)' },
      { name: 'Next.js', icon: '▲', color: '#ffffff', bgColor: 'rgba(255,255,255,0.08)' },
    ],
  },
  {
    label: 'Backend',
    icon: '🛠',
    skills: [
      { name: 'PHP', icon: '🐘', color: '#777BB4', bgColor: 'rgba(119,123,180,0.12)' },
      { name: 'MySQL', icon: '🗄️', color: '#4479A1', bgColor: 'rgba(68,121,161,0.12)' },
      { name: 'API Dev', icon: '🔗', color: '#10B981', bgColor: 'rgba(16,185,129,0.12)' },
    ],
  },
  {
    label: 'Tools',
    icon: '⚙️',
    skills: [
      { name: 'Git', icon: '🔀', color: '#F05032', bgColor: 'rgba(240,80,50,0.12)' },
      { name: 'VS Code', icon: '💻', color: '#007ACC', bgColor: 'rgba(0,122,204,0.12)' },
      { name: 'Figma', icon: '🖌️', color: '#F24E1E', bgColor: 'rgba(242,78,30,0.12)' },
    ],
  },
];

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div
      className="skill-icon flex flex-col items-center gap-2 p-4 rounded-2xl cursor-default"
      style={{
        background: skill.bgColor,
        border: `1px solid ${skill.color}22`,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${skill.color}44, 0 0 40px ${skill.color}22`;
        (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}22`;
      }}
    >
      <span className="text-3xl">{skill.icon}</span>
      <span className="text-sm font-medium text-white/80 text-center">{skill.name}</span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 lg:px-12">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">Tech Arsenal</p>
          <h2 className="section-title text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use to craft high-quality digital experiences.
          </p>
        </div>

        <div className="space-y-12 reveal">
          {skillCategories.map((category) => (
            <div key={category.label}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-semibold text-lg">{category.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-16 glass rounded-3xl p-8 reveal" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <h3 className="text-white font-bold text-xl mb-8">Core Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'React & Next.js', level: 85, color: '#3B82F6' },
              { skill: 'JavaScript / TypeScript', level: 82, color: '#F7DF1E' },
              { skill: 'HTML & CSS', level: 92, color: '#E34F26' },
              { skill: 'UI / UX Design', level: 78, color: '#8B5CF6' },
              { skill: 'PHP & MySQL', level: 70, color: '#777BB4' },
              { skill: 'Git & Version Control', level: 80, color: '#F05032' },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-white/80 text-sm font-medium">{item.skill}</span>
                  <span className="text-soft-gray text-sm font-mono">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${item.level}%`,
                      background: `linear-gradient(to right, ${item.color}88, ${item.color})`,
                      boxShadow: `0 0 8px ${item.color}66`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
