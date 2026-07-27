import { WorkData } from '../types'

export const workMockData: WorkData = {
  header: {
    badge: 'SELECTED WORK',
    headline: {
      line1: 'Things',
      tape: "I've Built.",
    },
    description: [
      'I learn by building real things.',
      'From crafting interfaces to exploring backend systems and infrastructure, I learn best when an idea has to become something that actually works.',
    ],
  },
  projects: [
    {
      id: 'sinemus-screen',
      thumbnailImage: '/projects/screen-preview.png',
      badgeText: 'Featured Product',
      category: 'Digital Product',
      timeframe: '2025 - NOW',
      title: 'Sinemus Screen',
      shortDescription:
        'An end-to-end digital ecosystem for Muslim cinema. Spanning fullstack application architecture, secure video streaming pipelines, and robust database systems.',
      modalData: {
        subtitle: 'Featured Project • Sinemus Screen',
        headline: 'BUILDING A DIGITAL HOME FOR MUSLIM CINEMA.',
        story: [
          'Sinemus is a growing digital ecosystem for Muslim cinema — built from the ground up across product, engineering, and infrastructure.',
          'What started as a vision evolved into a comprehensive engineering challenge. Through this project, I manage the complete product lifecycle: from user interface logic and database architecture to authentication flows, video delivery systems, and deployment infrastructure.',
          'It has become one of the most substantial learning grounds in my journey as an engineer, combining modern web stacks with rigorous system design.',
        ],
        demoUrl: 'https://screen.sinemus.id/',
        previewImage: '/projects/screen-preview.png',
        roleTitle: 'Product Engineer',
        roleDescription:
          'Working across product and engineering to turn ideas into a working digital experience.',
        whyDescription:
          'I wanted to explore how technology could help Muslim filmmakers, creators, and audiences connect through a digital platform built around their stories.',
        year: '2025 — NOW',
        type: 'DIGITAL PRODUCT',
        status: 'BUILDING',
        architectureViews: [
          {
            id: 'arch-db',
            iconName: 'database',
            title: 'Backend & DB Schema',
          },
          {
            id: 'arch-infra',
            iconName: 'dns',
            title: 'Infra & Pipeline',
          },
        ],
        scopeGroups: [
          {
            id: 'scope-product',
            number: '01',
            title: 'Product',
            tags: [
              'Product thinking',
              'User experience',
              'Feature development',
            ],
          },
          {
            id: 'scope-eng',
            number: '02',
            title: 'Engineering',
            tags: [
              'Frontend',
              'Backend',
              'Database',
              'Authentication',
              'Payments',
            ],
          },
          {
            id: 'scope-sys',
            number: '03',
            title: 'Systems',
            tags: [
              'Video delivery',
              'Infrastructure',
              'Analytics',
              'SEO',
              'Deployment',
            ],
          },
        ],
        repoLink: '#',
        isRepoPrivate: true,
      },
    },
  ],
}
