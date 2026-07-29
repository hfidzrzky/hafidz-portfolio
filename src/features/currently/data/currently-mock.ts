import { CurrentlyData } from '../types'

export const currentlyMockData: CurrentlyData = {
  header: {
    badge: 'CURRENTLY',
    headline: {
      line1: "I'm currently",
      line2: 'exploring',
      line3: 'what happens',
      tape: 'Behind the Interface.',
    },
    description:
      'The deeper I go, the more I realize that building software is less about writing code and more about understanding how systems behave.',
    terminalTitle: 'system_query.sh',
    questions: [
      {
        id: 'q1',
        text: 'What happens after the button is clicked?',
      },
      {
        id: 'q2',
        text: 'Where does the data go?',
      },
      {
        id: 'q3',
        text: 'What happens when things fail?',
      },
      {
        id: 'q4',
        text: 'How does a product stay secure & reliable?',
      },
    ],
  },
  focusCards: [
    {
      id: 'focus-sinemus',
      category: 'BUILDING',
      iconName: 'architecture',
      statusLabel: 'IN PROGRESS',
      statusType: 'in-progress',
      title: 'SINEMUS SCREEN & ECOSYSTEM',
      description:
        'Leading the product engineering for Sinemus Screen (streaming & event screening) while laying the scalable technical foundation powering Sinemus Indonesia\'s multi-platform roadmap.',
    },
    {
      id: 'focus-backend',
      category: 'EXPLORING',
      iconName: 'api',
      statusLabel: 'EXPLORING',
      statusType: 'exploring',
      title: 'BACKEND ENGINEERING',
      description:
        'Going deeper into APIs, application architecture, databases, authentication, and the logic that powers digital products.',
    },
    {
      id: 'focus-systems',
      category: 'LEARNING',
      iconName: 'dns',
      statusLabel: 'LEARNING',
      statusType: 'learning',
      title: 'SYSTEMS & INFRASTRUCTURE',
      description:
        'Trying to understand what happens beyond the application, deployment, servers, networks, performance, security, and the systems that keep software running.',
    },
  ],
}
