import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';
import { useActiveSection } from '../hooks/useActiveSection';
import { profile } from '../data/profile';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const scrolled = useScrolled(16);
  const activeId = useActiveSection(links.map(l => l.id));
  const [open, setOpen] = useState(false);

  const scrollTo = id => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 sm:h-20">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors"
        >
          {profile.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </button>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wide">
          {links.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg transition-colors duration-300 ${
                  activeId === link.id
                    ? 'text-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-accent transition-colors"
          >
            Resume <ArrowUpRight size={14} />
          </a>
          <button onClick={() => scrollTo('contact')} className="btn-primary !py-2.5 !px-4 text-sm">
            Let's talk
          </button>
        </div>

        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass border-t border-base-border overflow-hidden"
          >
            <ul className="section-shell py-4 flex flex-col gap-1 font-mono text-sm uppercase tracking-wide">
              {links.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                      activeId === link.id ? 'text-accent bg-base-elevated' : 'text-ink-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="btn-primary w-full justify-center"
                >
                  Let's talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
