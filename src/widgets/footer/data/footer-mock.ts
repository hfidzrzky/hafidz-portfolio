export interface FooterNavLink {
  label: string
  path: string
}

export interface FooterSocialLink {
  name: string
  url: string
  platform: 'github' | 'linkedin' | 'instagram'
}

export interface FooterCtaData {
  statusBadge: string
  headlineLine1: string
  headlineLine2: string
  description: string
  ctaText: string
  ctaHref: string
}

export interface FooterData {
  cta: FooterCtaData
  quickLinks: FooterNavLink[]
  socialLinks: FooterSocialLink[]
  copyright: string
  tagline: string
}

export const FOOTER_DATA: FooterData = {
  cta: {
    statusBadge: 'Available for New Opportunities',
    headlineLine1: "Let's Build Something",
    headlineLine2: 'Exceptional Together.',
    description:
      'Have a project in mind, an architectural query, or just want to connect? My inbox is always open.',
    ctaText: 'Start a Conversation',
    ctaHref: '#contact',
  },
  quickLinks: [
    { label: 'About', path: '#about' },
    { label: 'Work', path: '#work' },
    { label: 'Lab', path: '#lab' },
    { label: 'Stories', path: '#stories' },
    { label: 'Certificates', path: '#certificates' },
    { label: 'Contact', path: '#contact' },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/hfidzrzky',
      platform: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hfidzrzky',
      platform: 'linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/hfidzrzky_',
      platform: 'instagram',
    },
  ],
  copyright: '© 2026 Muhammad Hafidz. All rights reserved.',
  tagline: 'Still learning. Still building.',
}
