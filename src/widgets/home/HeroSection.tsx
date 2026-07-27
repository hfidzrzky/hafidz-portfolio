import { SectionContainer } from '@/shared/ui/SectionContainer'
import { HeroContent, HeroVisual, useHero } from '@/features/hero'

export function HeroSection() {
  const { data } = useHero()

  if (!data) return null

  return (
    <SectionContainer variant="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
        <HeroContent data={data} />
        <HeroVisual portrait={data.portrait} cards={data.cards} />
      </div>
    </SectionContainer>
  )
}
