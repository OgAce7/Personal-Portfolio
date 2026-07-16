import Reveal from './Reveal';

/**
 * Consistent section header: monospace "sec.0X — label" eyebrow,
 * a large display heading, and an optional supporting line.
 */
export default function SectionHeading({ index, label, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} gap-4 max-w-2xl`}>
      <Reveal direction="up">
        <span className="eyebrow">
          <span className="text-ink-faint">sec.{String(index).padStart(2, '0')}</span>
          <span className="w-1 h-1 rounded-full bg-accent/60" />
          {label}
        </span>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.14}>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
