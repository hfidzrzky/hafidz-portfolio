import { heroMockData } from "../data/hero-mock";

export function useHero() {
  return {
    data: heroMockData,
    isLoading: false,
  };
}