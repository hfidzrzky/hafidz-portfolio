import Link from 'next/link'
import Image from 'next/image'

export function NavLogo() {
  return (
    <Link href="#hero" className="flex items-center gap-4 group">
      <div className="relative flex items-center justify-start w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/favicon.ico"
          alt="MyPortfolio Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="font-mono text-sm sm:text-base font-bold tracking-widest text-slate-900 dark:text-white group-hover:text-accent transition-colors">
        MyPortfolio.
      </span>
    </Link>
  )
}
