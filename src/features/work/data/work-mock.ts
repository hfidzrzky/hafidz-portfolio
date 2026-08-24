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
      thumbnailImage: '/projects/screen-preview.webp',
      badgeText: 'Featured Product',
      category: 'Digital Product',
      timeframe: '2025 - NOW',
      title: 'Sinemus Screen (V2)',
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
        previewImage: '/projects/screen-preview.webp',
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
    {
      id: 'sinemus-screen-v3',
      thumbnailImage: '/projects/screen-v3-preview.webp',
      badgeText: 'Flagship Platform',
      category: 'Digital Product & Core Tech',
      timeframe: '2026 - PRESENT',
      title: 'Sinemus Screen (V3 Re-Engineering)',
      shortDescription:
        'Architecting the V3 evolution of Sinemus Screen. Transforming the streaming & event screening platform into a high-performance, enterprise-grade core powering Sinemus Indonesia’s ecosystem.',

      modalData: {
        subtitle: 'Flagship Ecosystem Core • Sinemus Screen V3',
        headline: 'RE-ENGINEERING THE STREAMING & EVENT SCREENING PLATFORM.',
        story: [
          'Sinemus Screen V3 represents a critical architectural shift. To support Sinemus Indonesia’s growing digital ecosystem, we transformed a legacy PHP monolithic system into a highly scalable, maintainable multi-platform architecture.',
          'As Lead Product Engineer & Core Architect, I led the system re-engineering process — decoupling the monolith into a modular NestJS backend built on Clean Architecture principles, alongside a modern Next.js frontend structured with Feature-Sliced Design (FSD).',
          'This major overhaul eliminated legacy technical debt, optimized database queries with PostgreSQL, and established a robust CI/CD pipeline for frictionless deployment.',
        ],
        demoUrl: 'https://screen.sinemus.id/',
        previewImage: '/projects/screen-v3-preview.webp',
        previewImageCaption: 'Interface preview captured from internal staging environment. UI components and state logic fully implemented; backend integration with NestJS & PostgreSQL currently in progress.',

        roleTitle: 'Lead Product Engineer & Core Architect',
        roleDescription:
          'Designing end-to-end backend architecture, CI/CD pipelines, and relational database schemas while orchestrating frontend implementation.',

        whyDescription: 'The legacy PHP monolithic system reached its limits in maintainability and scalability. Re-engineering it with Clean Architecture and Feature-Sliced Design (FSD) was necessary to establish a solid core for Sinemus’ multi-platform roadmap.',

        year: '2026 — PRESENT',
        type: 'ENTERPRISE SYSTEM & DIGITAL PRODUCT',
        status: 'ACTIVE V3 RE-ENGINEERING',

        architectureViews: [
          {
            id: 'arch-backend',
            iconName: 'database',
            title: 'NestJS & PostgreSQL Core Architecture',
          },
          {
            id: 'arch-infra',
            iconName: 'dns',
            title: 'CI/CD Pipelines & Cloud Infrastructure',
          },
          {
            id: 'arch-frontend',
            iconName: 'code',
            title: 'Next.js App Router & Tailwind CSS Frontend',
          },
        ],

        scopeGroups: [
          {
            id: 'scope-migration',
            number: '01',
            title: 'System Re-Engineering',
            tags: [
              'Legacy PHP Monolith Modernization',
              'Clean Architecture (Backend)',
              'Feature-Sliced Design / FSD (Frontend)',
              'Technical Debt Reduction',
              'Scalable System Design',
            ],
          },
          {
            id: 'scope-backend',
            number: '02',
            title: 'Core Engineering & Infra',
            tags: [
              'NestJS Modular Architecture',
              'PostgreSQL Relational Schema',
              'CI/CD Deployment Pipelines',
              'Authentication & Authorization (RBAC)',
              'Media & Streaming Pipelines',
            ],
          },
          {
            id: 'scope-frontend',
            number: '03',
            title: 'Frontend Architecture',
            tags: [
              'Next.js App Router (TypeScript)',
              'Feature-Sliced Design (FSD)',
              'Tailwind CSS UI Engineering',
              'Performance Optimization',
            ],
          },
        ],

        repoLink: '#',
        isRepoPrivate: true,
        privateNote: 'Source code & Staging environments are private enterprise property of Sinemus Indonesia.',
      },
    },
    {
      id: 'ilham-hakim-portfolio',
      thumbnailImage: '/projects/portfolio-client.webp',
      badgeText: 'Client Project',
      category: 'Motion & Web Experience',
      timeframe: '2026',
      title: 'Ilham Hakim — Visual Portfolio',
      shortDescription:
        'A bespoke, motion-driven portfolio crafted for visual creator Muhammad Ilham Hakim. Built with Next.js, TypeScript, and Framer Motion for static-first performance and fluid interactions.',

      modalData: {
        subtitle: 'Client Commission • Visual Portfolio',
        headline: 'CRAFTING A CINEMATIC DIGITAL EXPERIENCE.',

        story: [
          'Designed and engineered a custom, motion-rich digital portfolio for visual director and creator Muhammad Ilham Hakim, serving as a minimalist yet immersive showcase for his visual works.',
          'To ensure top-tier loading speeds for media-heavy content, the site was architected as a pure static web application using Next.js (SSG) and TypeScript. Framer Motion was integrated to power smooth layout transitions, scroll animations, and fluid micro-interactions.',
          'The final build bridges high-aesthetic visual storytelling with optimized web performance — delivering an uninterrupted, cinematic experience across all viewport sizes.',
        ],

        // Dikarenakan privasi client & repo private
        demoUrl: '#',
        previewImage: '/projects/portfolio-client.webp',
        previewImageCaption:
          'Static-first architecture powered by Next.js SSG with fluid Framer Motion animations.',

        roleTitle: 'Frontend & Motion Engineer',
        roleDescription:
          'Engineered the client website from scratch, translating visual art direction into a responsive, motion-engineered static web experience.',

        whyDescription:
          'To build a tailored, distraction-free digital space that amplifies visual artwork through seamless page transitions, crisp typography, and zero-latency page loads.',

        year: '2026',
        type: 'CLIENT PORTFOLIO',
        status: 'COMPLETED',

        architectureViews: [
          {
            id: 'arch-frontend',
            iconName: 'code',
            title: 'Next.js & TypeScript Static Architecture',
          },
          {
            id: 'arch-motion',
            iconName: 'terminal',
            title: 'Framer Motion & Fluid Interactions',
          },
        ],

        scopeGroups: [
          {
            id: 'scope-fe',
            number: '01',
            title: 'Frontend Engineering',
            tags: [
              'Next.js (Static Site Generation)',
              'TypeScript',
              'Tailwind CSS',
              'Responsive Layouts',
              'Performance & Asset Optimization',
            ],
          },
          {
            id: 'scope-motion',
            number: '02',
            title: 'Motion & Experience',
            tags: [
              'Framer Motion',
              'Page Transitions',
              'Micro-interactions',
              'Custom Scroll Dynamics',
            ],
          },
        ],

        repoLink: '#',
        isRepoPrivate: true,
        privateNote:
          'Private Client Repository. Source code and live access are restricted under client confidentiality.',
      },
    }
  ],
}
