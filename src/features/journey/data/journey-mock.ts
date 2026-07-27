import { JourneyData } from '../types';

export const journeyMockData: JourneyData = {
  header: {
    badgeText: 'THE JOURNEY',
    titleMain: "WHERE I'VE BEEN.\nWHERE I'M",
    titleTape: 'GOING.',
    description:
      "My journey into software engineering hasn't been linear. I started by exploring different layers of technology, then began building real products and gradually discovered the areas I want to understand more deeply. This is not just a timeline of what I've learned. It's a record of how my direction has evolved.",
  },
  items: [
    {
      id: 'journey-01',
      year: '2025',
      tag: '[ EXPLORATION ]',
      title: 'Started Exploring It',
      quotes: ['> Starting from the surface.'],
      description:
        'Started learning software engineering and exploring how digital products are built. This was the beginning of my journey into technology. I started with the fundamentals, built my first projects, and gradually became curious about what happens beyond the interface.',
      tags: [
        { label: 'HTML / CSS / JS' },
        { label: 'Frontend Dev' },
        { label: 'First Projects' },
      ],
    },
    {
      id: 'journey-02',
      year: '2025',
      periodSuffix: 'Present',
      tag: '[ FOUNDATION ]',
      title: 'Informatics Engineering',
      quotes: ['> Learning in class.', '> Building outside it.'],
      dualMatrix: {
        academic: {
          category: 'Academic Foundation',
          title: 'University of Tech Bandung',
          description:
            'Learning software engineering through structured academic education and theoretical fundamentals.',
        },
        practical: {
          category: 'Practical Exploration',
          title: 'Independent Learning',
          description:
            'Applying what I learn, building real products, and experimenting beyond the classroom scope.',
        },
      },
      tags: [
        { label: 'Backend' },
        { label: 'Databases' },
        { label: 'Security' },
        { label: 'CI/CD & DevOps' },
      ],
    },
    {
      id: 'journey-03',
      year: '2026',
      tag: '[ BUILDING ]',
      title: 'Building In The Real World',
      quotes: ['> From learning technologies', '> To building something real.'],
      description:
        'Building Sinemus and learning what it takes to turn ideas into working digital products. This experience exposed me to more than writing code—it became an opportunity to understand product decisions, software development, infrastructure, and the realities of building something people can actually use.',
      tags: [
        { label: 'Product Eng' },
        { label: 'Software Dev' },
        { label: 'Real-world Systems' },
      ],
    },
    {
      id: 'journey-04',
      year: '2026',
      yearEnd: '2027',
      tag: '[ DIRECTION ]',
      title: 'Finding My Direction',
      quotes: ['> I explored broadly.', "> Now I'm starting to go deeper."],
      description:
        "Moving deeper into the systems behind the products I build. After exploring different areas of software engineering, I'm beginning to understand where my curiosity naturally leads. I'm moving beyond individual features and becoming more interested in how applications, services, and infrastructure work together.",
      tags: [
        { label: 'Backend Eng' },
        { label: 'System Design' },
        { label: 'DevOps & Infra' },
      ],
    },
    {
      id: 'journey-05',
      year: '2027+',
      tag: '[ DEPTH ]',
      title: 'Going Deeper',
      quotes: ['> Less exploration.', '> More depth.'],
      description:
        'This is the next chapter of my journey. Not about knowing more technologies, but about understanding the systems I choose to work with more deeply. Strengthening fundamentals, understanding architecture, and building better, more reliable software.',
      tags: [
        { label: 'Fundamentals', variant: 'accent' },
        { label: 'System Architecture', variant: 'accent' },
        { label: 'Reliable Systems', variant: 'accent' },
      ],
      evolutionPipeline: ['EXPLORE', 'BUILD', 'UNDERSTAND', 'FOCUS', 'GO DEEPER'],
    },
  ],
  endStatus: '→ STILL IN PROGRESS_',
};
