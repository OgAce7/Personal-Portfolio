import { motion } from 'framer-motion';
import { FileText, ArrowDown } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import SideRays from '../components/reactbits/SideRays';
import { profile } from '../data/profile';

const headline = 'I design and build software that holds up in production.';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 }
  }
};

const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Signature background: ReactBits SideRays, amber glow from top-right */}
      <div className="absolute inset-0 z-0">
        <SideRays
          speed={2.2}
          rayColor1="#EAB308"
          rayColor2="#3F4657"
          intensity={1.6}
          spread={2.2}
          origin="top-right"
          tilt={-4}
          saturation={1.3}
          blend={0.62}
          falloff={1.7}
          opacity={0.9}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-grain opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="section-shell relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-8 glass rounded-full px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink max-w-4xl text-balance"
        >
          {headline.split(' ').map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.28em]">
              {w === 'production.' ? <span className="text-accent">{w}</span> : w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-ink-muted max-w-xl leading-relaxed"
        >
          {profile.tagline} Currently focused on Machine Learning and AI. Always interested in learning and exploring new tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <GithubIcon size={18} /> View GitHub
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FileText size={18} /> Resume
          </a>
        </motion.div>

        {/* Terminal-style status line — signature detail tying hero to developer subject matter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-14 glass rounded-xl px-5 py-3 max-w-md font-mono text-xs sm:text-sm text-ink-muted"
        >
          <span className="text-accent">➜</span> ~/{profile.name.toLowerCase().replace(' ', '-')} git:(main){' '}
          <span className="text-ink">whoami</span>
          <br />
          {profile.role} · {profile.location}
          <span className="inline-block w-2 h-4 bg-accent/80 ml-1 align-middle animate-blink" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
