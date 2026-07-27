import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import { Navbar } from '@/widgets/navbar/Navbar' 
import './globals.css'

// 1. Inisialisasi Font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

// 2. SEO & Metadata Global
export const metadata: Metadata = {
  title: 'Muhammad Hafidz | Software Engineer',
  description: 'Portfolio of Muhammad Hafidz, exploring software engineering by building real products and breaking things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-light-bg text-slate-900 dark:bg-dark-bg dark:text-white min-h-screen selection:bg-accent selection:text-white transition-colors duration-300 overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
