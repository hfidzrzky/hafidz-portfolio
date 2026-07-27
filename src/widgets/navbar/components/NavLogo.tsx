import Link from 'next/link'

export function NavLogo() {
  return (
    <Link href="#hero" className="flex items-center gap-2 group">
      <div className="flex items-center text-accent font-bold text-2xl tracking-tighter">
        <span className="mr-1">|</span>H<span className="ml-1">|</span>
      </div>
      <span className="font-bold tracking-widest uppercase text-sm ml-2 text-slate-900 dark:text-white">
        Hafidz
      </span>
    </Link>
  )
}
