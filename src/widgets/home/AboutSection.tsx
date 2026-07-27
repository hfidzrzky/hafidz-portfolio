import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { AboutContent, useAbout } from '@/features/about'

export function AboutSection() {
  const { data } = useAbout()

  if (!data) return null

  return (
    <SectionContainer id="about" variant="default">
      <SectionIndicator number="02" showTopLine={true} bottomLineFull={true} />
      <AboutContent data={data} />
    </SectionContainer>
  )
}
