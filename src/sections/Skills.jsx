import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-base-surface/40">
      <div className="section-shell">
        <SectionHeading
          index={2}
          label="Skills"
          title="Tools I reach for"
          description="A working set, not an exhaustive one — the things I use often enough to have strong opinions about."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {skillCategories.map((group, gi) => (
            <Reveal key={group.category} direction="up" delay={gi * 0.08}>
              <div className="glass card-hover rounded-2xl p-6 sm:p-7 h-full">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-5">
                  {group.items.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-ink">{skill.name}</span>
                        <span className="font-mono text-xs text-ink-faint">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-base-elevated overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.9, delay: si * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
