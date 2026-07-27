import { currentlyMockData } from '../data/currently-mock'
import { CurrentlyData } from '../types'

export function useCurrently(): { data: CurrentlyData } {
  return {
    data: currentlyMockData,
  }
}
