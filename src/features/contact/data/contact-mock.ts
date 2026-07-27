import { ContactData } from '../types'

export const CONTACT_DATA: ContactData = {
  header: {
    sectionTag: 'CONTACT',
    headlineLine1: 'Have An Idea?',
    headlineLine2: "Let's Build It.",
    quoteText:
      "Whether it's a project, a collaboration, or just an interesting problem to solve, I'm always open to a good conversation.",
    ctaText: 'Start a Conversation',
    ctaHref: '#contact-area',
  },
  info: {
    title: 'Get In Touch',
    emailLabel: 'Prefer Email?',
    email: 'hello@yourdomain.com',
    socialTitle: 'Or Find Me Elsewhere',
    socialLinks: [
      {
        name: 'GITHUB',
        url: 'https://github.com/hfidzrzky',
        platform: 'github',
      },
      {
        name: 'LINKEDIN',
        url: 'https://linkedin.com/in/hfidzrzky',
        platform: 'linkedin',
      },
      {
        name: 'INSTAGRAM',
        url: 'https://instagram.com/hfidzrzky_',
        platform: 'instagram',
      },
    ],
    availabilityLabel: 'Currently Open To',
    availabilityText: 'Projects \u00B7 Collaboration \u00B7 Conversations',
  },
  subjectOptions: [
    { value: 'project', label: 'Project' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'internship', label: 'Internship / Opportunity' },
    { value: 'hello', label: 'Just saying hello' },
    { value: 'other', label: 'Other' },
  ],
}
