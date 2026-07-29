import { LabData } from '../types'

export const LAB_MOCK_DATA: LabData = {
  header: {
    badgeText: 'THE LAB',
    titlePrefix: 'What ',
    tapeText: 'I Work',
    titleSuffix: ' With.',
    manifesto:
      "A growing collection of technologies, tools, and systems I've used, explored, and learned throughout my journey. I don't believe in knowing everything. I'm more interested in understanding how different layers of technology connect — from the interface users interact with to the systems running behind it.",
    legend: [
      { label: 'Used In Projects', status: 'used' },
      { label: 'Actively Learning', status: 'learning' },
      { label: 'Exploring', status: 'exploring' },
    ],
  },
  stackLayers: [
    {
      id: 'layer-frontend',
      layerNumber: '01',
      title: 'Frontend',
      subtitle: 'Building the interface',
      technologies: [
        { name: 'HTML', status: 'used' },
        { name: 'CSS', status: 'used' },
        { name: 'JavaScript', status: 'used' },
        { name: 'TypeScript', status: 'used' },
        { name: 'React', status: 'used' },
        { name: 'Next.js', status: 'used' },
        { name: 'Tailwind CSS', status: 'used' },
        { name: 'Bootstrap', status: 'used' },
      ],
      focus: 'Building interfaces that are functional, maintainable, and thoughtful.',
    },
    {
      id: 'layer-backend',
      layerNumber: '02',
      title: 'Backend',
      subtitle: 'Behind the interface',
      technologies: [
        { name: 'NestJS', status: 'learning' },
        { name: 'PHP', status: 'used' },
        { name: 'Python', status: 'exploring' },
      ],
      concepts: ['REST APIs', 'Auth', 'Architecture'],
      focus: 'Understanding how applications work beyond what users see.',
    },
    {
      id: 'layer-data',
      layerNumber: '03',
      title: 'Data',
      subtitle: 'Where information lives',
      technologies: [
        { name: 'MySQL', status: 'used' },
        { name: 'PostgreSQL', status: 'learning' },
      ],
      concepts: ['Relational DBs', 'Data Modeling', 'Querying'],
      focus: 'Understanding how data is structured, accessed, and connected.',
    },
    {
      id: 'layer-infrastructure',
      layerNumber: '04',
      title: 'Infrastructure',
      subtitle: 'Running software in reality',
      technologies: [
        { name: 'Docker', status: 'exploring' },
        { name: 'VPS', status: 'exploring' },
        { name: 'CI/CD', status: 'used' },
        { name: 'Vercel', status: 'used' },
        { name: 'GitHub Actions', status: 'used' },
        { name: 'CloudFlare', status: 'used' },
      ],
      focus: 'Understanding what happens after code leaves development.',
    },
    {
      id: 'layer-tools',
      layerNumber: '05',
      title: 'Tools',
      subtitle: 'The tools I build with',
      technologies: [
        { name: 'Git', status: 'used' },
        { name: 'GitHub', status: 'used' },
        { name: 'VS Code', status: 'used' },
      ],
      focus: 'Using the right tools to move from idea → implementation.',
    },
    {
      id: 'layer-philosophy',
      layerNumber: '06',
      title: 'Philosophy',
      subtitle: '',
      technologies: [],
      focus: '',
      isPhilosophy: true,
      philosophyTitle: 'The Stack is a Moving Landscape',
      philosophyText:
        "The goal isn't to collect technologies. The goal is to understand the systems they help me build.\n\nSome are tools I use. Some are tools I'm learning. Some are questions I'm still exploring.",
    },
  ],
  nextLayer: {
    windowTitle: 'system_monitor.exe',
    badgeText: 'The Next Layer',
    titleLine1: 'Currently',
    titleLine2: 'Exploring',
    description: 'Moving deeper into the systems behind the applications I build.',
    topics: [
      {
        id: 'topic-1',
        title: 'Backend Architecture',
        description: 'Structuring and modularizing backend systems as applications grow.',
      },
      {
        id: 'topic-2',
        title: 'System Design',
        description: 'Thinking about systems beyond individual features and components.',
      },
      {
        id: 'topic-3',
        title: 'DevOps & Infra',
        description: 'Connecting development, automation, and reliable software delivery.',
      },
      {
        id: 'topic-4',
        title: 'Distributed Systems',
        description: 'How systems communicate and scale across multiple services.',
      },
    ],
  },
  aiWorkflow: {
    badgeText: 'ENGINEERING WORKFLOW',
    title: 'AI-Assisted Development',
    description:
      'I use AI as part of my engineering workflow to explore ideas, accelerate iteration, and challenge my thinking — while keeping the responsibility to understand, verify, and own the final result.',
    steps: [
      { id: 'step-1', label: 'EXPLORE' },
      { id: 'step-2', label: 'BUILD' },
      { id: 'step-3', label: 'VERIFY', isHighlighted: true },
      { id: 'step-4', label: 'UNDERSTAND', isHighlighted: true },
      { id: 'step-5', label: 'SHIP', isBold: true },
    ],
  },
  closing: {
    statement: 'The stack will keep changing. So will I.',
    subtitle: 'Still exploring. Still learning. Still building.',
    ctaText: 'View My Journey',
    ctaTargetId: 'journey',
  },
}
