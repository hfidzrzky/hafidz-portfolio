import Link from 'next/link'
import { MAIN_NAVIGATION } from '@/shared/constants/navigation'

interface NavLinksProps {
  onItemClick?: () => void;
  className?: string;
}

export function NavLinks({ onItemClick, className }: NavLinksProps) {
  return (
    <nav className={className}>
      {MAIN_NAVIGATION.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          onClick={onItemClick}
          className="relative py-1 text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-white transition-colors duration-200 group inline-block"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out pointer-events-none" />
        </Link>
      ))}
    </nav>
  )
}
