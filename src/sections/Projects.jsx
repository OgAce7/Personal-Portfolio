import { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const techs = useMemo(() => {
    const all = new Set();
    projects.forEach(p => p.tech.forEach(t => all.add(t)));
    return ['All', ...Array.from(all)];
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            index={3}
            label="Projects"
            title="Things I've built"
            description="A mix of production systems and side projects. Each one taught me something I still use."
          />

          <div className="flex flex-wrap gap-2 lg:max-w-md">
            {techs.slice(0, 7).map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`font-mono text-xs uppercase tracking-wide px-3 py-2 rounded-lg border transition-all duration-300 ${
                  filter === t
                    ? 'bg-accent text-base border-accent font-semibold'
                    : 'text-ink-muted border-base-border hover:border-accent/50 hover:text-ink'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-ink-muted font-mono text-sm">
            No projects tagged with "{filter}" yet.
          </p>
        )}
      </div>
    </section>
  );
}
