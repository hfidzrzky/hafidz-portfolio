import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import { Navbar } from '@/widgets/navbar/Navbar'
import { Footer } from '@/widgets/footer/Footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#080B12' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const siteUrl = 'https://muhammadhafidz-portfolio.vercel.app'
const ogImageUrl = `${siteUrl}/images/hafidz-img.png`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muhammad Hafidz - Software Engineering In Progress',
    template: '%s | Muhammad Hafidz',
  },
  description:
    'Software Engineer & Informatics Student exploring systems by building real products, breaking things, and understanding what happens behind the interface.',
  keywords: [
    'Muhammad Hafidz',
    'Hafidz',
    'Software Engineer',
    'Full Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Bandung',
    'Indonesia',
  ],
  authors: [{ name: 'Muhammad Hafidz', url: 'https://github.com/hfidzrzky' }],
  creator: 'Muhammad Hafidz',
  publisher: 'Muhammad Hafidz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Muhammad Hafidz - Software Engineering In Progress',
    description:
      'Exploring software engineering by building real products, breaking things, and understanding the systems behind them.',
    siteName: 'Muhammad Hafidz Portfolio',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Muhammad Hafidz - Software Engineering In Progress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hafidz - Software Engineering In Progress',
    description:
      'Exploring software engineering by building real products, breaking things, and understanding the systems behind them.',
    creator: '@hfidzrzky_',
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-light-bg text-slate-900 dark:bg-dark-bg dark:text-white min-h-screen selection:bg-accent selection:text-white transition-colors duration-300 overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
