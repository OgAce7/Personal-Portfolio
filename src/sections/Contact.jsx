import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

const socialLinks = [
  { icon: GithubIcon, href: profile.socials.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: TwitterIcon, href: profile.socials.twitter, label: 'Twitter' },
  { icon: Mail, href: profile.socials.email, label: 'Email' }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // EDIT ME: wire this up to your form backend of choice (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <SectionHeading
          index={7}
          label="Contact"
          title="Let's build something"
          description="Have a role, a project, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="glass rounded-2xl p-7 h-full flex flex-col justify-between gap-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Direct contact</h3>
                <a
                  href={profile.socials.email}
                  className="text-accent font-mono text-sm break-all hover:underline"
                >
                  {profile.email}
                </a>
                <p className="text-ink-muted text-sm mt-4">{profile.location}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
                  Find me elsewhere
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
                  <CheckCircle2 size={40} className="text-accent" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">Message sent</h3>
                    <p className="text-ink-muted text-sm mt-1">Thanks for reaching out — I'll reply soon.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-base-elevated border border-base-border rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent/60 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-base-elevated border border-base-border rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent/60 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about the role or project..."
                      className="w-full bg-base-elevated border border-base-border rounded-xl px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent/60 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Send message <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
