import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import TagChip from './TagChip';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full transition-colors duration-500 hover:border-accent/40"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] bg-base-elevated overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-base-elevated via-base-surface to-base-elevated">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Project preview
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {project.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide bg-accent text-base px-2.5 py-1 rounded-full font-semibold">
            <Star size={11} fill="currentColor" /> Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <TagChip key={t}>{t}</TagChip>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            <GithubIcon size={16} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
