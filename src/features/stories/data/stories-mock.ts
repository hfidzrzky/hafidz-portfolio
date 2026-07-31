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
    recordedEventsCount: '01',
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
          imageUrl: '/stories/ddc-1.jpeg',
          images: [
            '/stories/ddc-1.jpeg',
            '/stories/ddc-2.jpeg',
            '/stories/ddc-3.jpeg',
            '/stories/ddc-4.jpeg',
            '/stories/ddc-5.jpeg',
          ],
          imageAlt: 'Dicoding Developer Conference Event Photos',
          meta: {
            locationOrRole: 'Hotel Hilton Bandung',
            date: '25 APR 2025',
            iconType: 'location',
          },
        },
      ],
    },
  ],
}
