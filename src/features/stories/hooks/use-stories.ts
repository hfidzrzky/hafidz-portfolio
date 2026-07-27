import { STORIES_MOCK_DATA } from '../data/stories-mock'
import { StoriesData } from '../types'

export function useStories(): StoriesData {
  return STORIES_MOCK_DATA
}
