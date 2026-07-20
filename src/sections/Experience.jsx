/*import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/timeline';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-base-surface/40">
      <div className="section-shell">
        <SectionHeading index={4} label="Experience" title="Where I've worked" />

        <div className="mt-14 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-base-border" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.company} direction="up" delay={i * 0.08}>
                <div className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-base border-2 border-accent flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role} <span className="text-accent">· {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-faint whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-ink-faint mb-4">{job.location}</p>

                  <ul className="space-y-2">
                    {job.points.map((point, pi) => (
                      <li key={pi} className="flex gap-3 text-ink-muted text-sm sm:text-base leading-relaxed">
                        <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
*/