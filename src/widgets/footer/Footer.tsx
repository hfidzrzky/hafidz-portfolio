'use client'

import React from 'react'
import { FOOTER_DATA } from './data/footer-mock'
import { FooterCta } from './components/FooterCta'
import { FooterNav } from './components/FooterNav'
import { FooterBottom } from './components/FooterBottom'

export function Footer() {
  return (
    <footer className="w-full bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border/60 mt-auto pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-100 h-75 bg-accent/5 dark:bg-accent/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-350 mx-auto px-6 md:pl-16">
        <FooterCta data={FOOTER_DATA.cta} />
        <FooterNav
          quickLinks={FOOTER_DATA.quickLinks}
          socialLinks={FOOTER_DATA.socialLinks}
        />
        <FooterBottom
          copyright={FOOTER_DATA.copyright}
          tagline={FOOTER_DATA.tagline}
        />
      </div>
    </footer>
  )
}
