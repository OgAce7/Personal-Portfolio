/*import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/timeline';

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading index={5} label="Education" title="Academic background" />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} direction="up" delay={i * 0.08}>
              <div className="glass card-hover rounded-2xl p-6 sm:p-7 h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{edu.degree}</h3>
                  <p className="text-accent text-sm font-medium mt-1">{edu.institution}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">{edu.period}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{edu.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
*/