import { HeroSection } from '@/widgets/home/HeroSection'
import { AboutSection } from '@/widgets/home/AboutSection'
import { CurrentlySection } from '@/widgets/home/CurrentlySection'
import { WorkSection } from '@/widgets/home/WorkSection'
import { LabSection } from '@/widgets/home/LabSection'
import { StoriesSection } from '@/widgets/home/StoriesSection'

export default function HomePage() {
  return (
    <main className="w-full items-center">
      <HeroSection />
      <AboutSection />
      <CurrentlySection />
      <WorkSection />
      <LabSection />
      <StoriesSection />
    </main>
  )
}



