import Link from 'next/link'
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle'
import { CONTACT_LINK } from '@/shared/constants/navigation'

export function NavActions() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <ThemeToggle />

      <Link
        href={CONTACT_LINK.path}
        className="flex items-center gap-3 border border-light-border dark:border-dark-border px-5 py-2 hover:border-accent dark:hover:border-accent transition-all group font-mono text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200"
      >
        {CONTACT_LINK.label}
        <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:animate-ping" />
      </Link>
    </div>
  )
}
