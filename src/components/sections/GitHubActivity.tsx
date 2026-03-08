import { useMemo } from 'react';

function generateContribData(): number[][] {
  const weeks = 26;
  const days = 7;
  const data: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(1);
      else if (rand < 0.75) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

const repos = [
  { name: 'committed-by-faith', desc: 'Faith-based dating platform', lang: 'TypeScript', stars: 4, commits: 142 },
  { name: 'realtime-chat-app', desc: 'Live messaging with WebSocket', lang: 'JavaScript', stars: 3, commits: 67 },
  { name: 'inventory-system', desc: 'Full-stack inventory management', lang: 'PHP', stars: 2, commits: 48 },
  { name: 'ui-animation-lab', desc: 'CSS & JS animation experiments', lang: 'CSS', stars: 6, commits: 38 },
];

const langColors: Record<string, string> = {
  TypeScript: '#3B82F6',
  JavaScript: '#F7DF1E',
  PHP: '#777BB4',
  CSS: '#F97316',
};

export default function GitHubActivity() {
  const contribData = useMemo(() => generateContribData(), []);

  return (
    <section id="github" className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="section-header reveal">
          <p className="section-label">Open Source</p>
          <h2 className="section-title text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            Building in public — consistent commits, constant progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <div className="glass rounded-3xl p-8 reveal-left" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Contribution Graph</h3>
              <span className="text-soft-gray text-sm font-mono">Last 6 months</span>
            </div>

            {/* Graph */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-max">
                {contribData.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-1">
                    {week.map((level, di) => (
                      <div
                        key={di}
                        className={`w-3 h-3 rounded-sm contrib-${level} transition-transform duration-150 hover:scale-125 cursor-pointer`}
                        title={`${level > 0 ? `${level} contribution${level > 1 ? 's' : ''}` : 'No contributions'}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-soft-gray text-xs">Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} className={`w-3 h-3 rounded-sm contrib-${l}`} />
              ))}
              <span className="text-soft-gray text-xs">More</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
              {[
                { label: 'Total Commits', value: '295+' },
                { label: 'Repositories', value: '12+' },
                { label: 'Active Streak', value: '28d' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black gradient-text">{s.value}</div>
                  <div className="text-soft-gray text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Repos */}
          <div className="space-y-4 reveal-right">
            <h3 className="text-white font-bold text-lg mb-6">Recent Repositories</h3>
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/eklipse1999/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass tilt-card rounded-2xl p-5 flex items-start justify-between group cursor-pointer block"
                style={{ border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none' }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-soft-gray" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="text-blue-300 font-mono text-sm font-medium group-hover:text-blue-200 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <p className="text-soft-gray text-sm mb-3">{repo.desc}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: langColors[repo.lang] || '#888' }}
                      />
                      <span className="text-soft-gray text-xs">{repo.lang}</span>
                    </div>
                    <div className="flex items-center gap-1 text-soft-gray text-xs">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279-6.064-5.828 8.332-1.151z" />
                      </svg>
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1 text-soft-gray text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      {repo.commits} commits
                    </div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-soft-gray group-hover:text-blue-400 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
