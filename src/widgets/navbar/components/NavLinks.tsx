'use client'

import Link from 'next/link'
import { MAIN_NAVIGATION } from '@/shared/constants/navigation'

interface NavLinksProps {
  onItemClick?: () => void
  className?: string
}

export function NavLinks({ onItemClick, className }: NavLinksProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onItemClick) onItemClick()

    if (path.startsWith('#')) {
      const targetId = path.replace(/^#/, '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', path)
      }
    }
  }

  return (
    <nav className={className}>
      {MAIN_NAVIGATION.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          onClick={(e) => handleNavClick(e, item.path)}
          className="relative py-1 text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors duration-200 group inline-block"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
        </Link>
      ))}
    </nav>
  )
}

