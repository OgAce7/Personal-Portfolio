import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon} from '../components/BrandIcons';
import { profile } from '../data/profile';

const socialLinks = [
  { icon: GithubIcon, href: profile.socials.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: profile.socials.email, label: 'Email' }
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-base-border py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
          <span className="text-ink">{profile.name}</span>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
          <span>·</span>
          <span>Built with React &amp; Tailwind</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink-faint hover:text-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/50 transition-all"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
