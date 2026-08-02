import { ReactNode, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  className?: string;
}

export function Button({
  children,
  className,
  variant = 'primary',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "font-mono text-[10px] md:text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 px-5 py-2.5 cursor-pointer"
  
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    outline: "bg-transparent border border-light-border dark:border-dark-border hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-white",
  }

  const combinedClassName = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
