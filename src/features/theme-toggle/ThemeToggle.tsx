'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-light-border dark:border-dark-border hover:bg-slate-200 dark:hover:bg-dark-surface transition-all duration-300 flex items-center justify-center text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 active:scale-95 z-50 relative"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}