// ─────────────────────────────────────────────────────────
// EDIT ME: This is your single source of truth for personal info.
// ─────────────────────────────────────────────────────────
export const profile = {
  name: 'John Doe',
  role: 'Software Engineer',
  tagline: 'I build fast, reliable software and the systems behind it.',
  location: 'Remote / Bengaluru, IN',
  email: 'your@email.com',
  phone: '+1 (555) 012-3456',
  resumeUrl: '/resume.pdf',
  availability: 'Open to new opportunities',
  socials: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'mailto:your@email.com'
  }
};

export const aboutCopy = {
  heading: 'About',
  paragraphs: [
    "I'm a software engineer who enjoys turning ambiguous problems into systems that are simple to reason about. My background spans backend infrastructure, distributed systems, and building the interfaces that sit on top of them.",
    "Over the last few years I've worked across the stack — from designing APIs that hold up under load, to shipping the frontend that makes them usable. I care most about the parts of engineering people don't see: clean data models, sane error handling, and code a teammate can understand at 2am."
  ]
};

export const strengths = [
  {
    title: 'System design',
    description: 'Designing services that scale predictably and fail gracefully under real load.'
  },
  {
    title: 'Product sense',
    description: 'Shipping features that solve the actual problem, not just the ticket.'
  },
  {
    title: 'Clear communication',
    description: 'Writing docs and PRs that save the next engineer time, including future me.'
  },
  {
    title: 'Ownership',
    description: 'Taking things from a rough idea through production, and staying with them.'
  }
];
