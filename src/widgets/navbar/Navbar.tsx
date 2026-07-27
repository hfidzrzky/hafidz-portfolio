import { NavLogo } from './components/NavLogo'
import { NavLinks } from './components/NavLinks'
import { NavActions } from './components/NavActions'
import { MobileMenu } from './components/MobileMenu'

export function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-light-bg/80 dark:bg-dark-bg/80 border-b border-light-border dark:border-dark-border transition-colors duration-300 h-16 flex items-center">
      <nav className="flex justify-between items-center w-full max-w-[1400px] mx-auto px-6">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation Links */}
        <NavLinks className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest" />

        {/* Desktop Actions (Theme Toggle & CTA Button) */}
        <NavActions />

        {/* Mobile Hamburger Menu & Drawer */}
        <MobileMenu />
      </nav>
    </header>
  )
}