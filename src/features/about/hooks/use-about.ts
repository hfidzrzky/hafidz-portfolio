import { aboutMockData } from '../data/about-mock'

export function useAbout() {
  return {
    data: aboutMockData,
    isLoading: false,
  }
}
