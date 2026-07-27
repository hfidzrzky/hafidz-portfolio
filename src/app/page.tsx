import { HeroSection } from '@/widgets/home/HeroSection'
import { AboutSection } from '@/widgets/home/AboutSection'

export default function HomePage() {
  return (
    <main className="w-full items-center">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
