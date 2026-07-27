'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { MAIN_NAVIGATION, CONTACT_LINK } from '@/shared/constants/navigation'
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  // Close menu automatically on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle />

      <button
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        className="p-2 rounded-md border border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200 hover:border-accent transition-colors flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Slide-over Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[64px] bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-light-border dark:border-dark-border p-6 shadow-2xl transition-all duration-300 flex flex-col gap-6 z-50">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase tracking-widest text-slate-600 dark:text-slate-300">
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                onClick={closeMenu}
                className="relative py-2 border-b border-light-border/50 dark:border-dark-border/50 hover:text-accent dark:hover:text-white transition-colors group flex items-center justify-between"
              >
                <span>{item.label}</span>
                {/* GPU-Accelerated Smooth Accent Blue Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
              </Link>
            ))}
          </nav>

          <Link
            href={CONTACT_LINK.path}
            onClick={closeMenu}
            className="flex items-center justify-center gap-3 border border-accent bg-accent/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-accent font-semibold hover:bg-accent hover:text-white transition-all text-center"
          >
            {CONTACT_LINK.label}
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          </Link>
        </div>
      )}
    </div>
  )
}
