import { Sparkles, Target, MessagesSquare, Compass } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { aboutCopy, strengths } from '../data/profile';

const icons = [Target, Sparkles, MessagesSquare, Compass];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading index={1} label="About" title="A little about how I work" />

        <div className="mt-14 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-5">
            {aboutCopy.paragraphs.map((p, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <p className="text-ink-muted leading-relaxed text-base sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {strengths.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={s.title} direction="up" delay={i * 0.08} className="h-full">
                  <div className="glass card-hover rounded-2xl p-6 h-full flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
