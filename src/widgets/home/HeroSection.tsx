import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { HeroContent, HeroVisual, useHero } from '@/features/hero'

export function HeroSection() {
  const { data } = useHero()

  if (!data) return null

  return (
    <SectionContainer id="hero" variant="hero">
      <SectionIndicator
        number={data.sectionNumber}
        showTopLine={true}
        bottomLineFull={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
        <HeroContent data={data} />
        <HeroVisual portrait={data.portrait} cards={data.cards} />
      </div>
    </SectionContainer>
  )
}
