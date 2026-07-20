/*import { Award } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/timeline';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36 bg-base-surface/40">
      <div className="section-shell">
        <SectionHeading index={6} label="Achievements" title="Recognition along the way" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.06}>
              <div className="glass card-hover rounded-2xl p-6 h-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award size={18} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs text-ink-faint">{item.year}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
*/