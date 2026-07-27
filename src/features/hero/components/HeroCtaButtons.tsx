import { ArrowRight } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { CtaButton } from '../types'

interface HeroCtaButtonsProps {
  buttons: CtaButton[];
}

export function HeroCtaButtons({ buttons }: HeroCtaButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          href={btn.href}
          variant={btn.variant ?? 'primary'}
        >
          {btn.showArrow && <ArrowRight className="w-4 h-4" />}
          {btn.label}
        </Button>
      ))}
    </div>
  )
}
