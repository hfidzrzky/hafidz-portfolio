'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const origConsoleError = console.error
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Encountered a script tag')
    ) {
      return
    }
    origConsoleError.apply(console, args)
  }
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}