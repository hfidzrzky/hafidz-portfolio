import { StoriesData } from '../types'

export const STORIES_MOCK_DATA: StoriesData = {
  header: {
    sectionTag: 'ARCHIVES & STORIES',
    badgeText: 'Documenting Progress',
    titlePart1: 'Moments That',
    titlePart2: 'Shaped',
    tapeText: 'The Journey.',
    description:
      'A curated collection of places, people, events, and experiences. Documenting the reality of building robust software architectures and mastering engineering principles.',
    recordedEventsCount: '02+',
    currentYear: '26',
  },
  archives: [
    {
      year: 2026,
      badgeText: 'LATEST ARCHIVES',
      stories: [
        {
          id: 'story-01',
          category: 'EVENT · LEARNING',
          title: ['Dicoding', 'Developer', 'Conference'],
          description:
            'A day spent learning beyond the screen, meeting new perspectives, and seeing the broader world of software engineering in a professional environment. It provided invaluable insights into industry-standard practices and networking opportunities with seasoned developers.',
          imageUrl:
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
          imageAlt: 'Dicoding Developer Conference',
          meta: {
            locationOrRole: 'Bandung, ID',
            date: 'APR 2026',
            iconType: 'location',
          },
        },
        {
          id: 'story-02',
          category: 'PROJECT · ARCHITECTURE',
          title: ['Sinemus', 'Platform', 'Architecture'],
          description:
            'Leading the engineering architecture for Sinemus — an integrated film streaming and screening platform. Spearheaded the frontend design systems, clean global service layer, and real-time data streaming flows for production readiness.',
          imageUrl:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
          imageAlt: 'Sinemus Architecture Project',
          meta: {
            locationOrRole: 'Tech Lead Role',
            date: 'MAY 2026',
            iconType: 'terminal',
          },
        },
      ],
    },
  ],
}
