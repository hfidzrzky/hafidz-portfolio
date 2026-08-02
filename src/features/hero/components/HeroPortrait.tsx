'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { HeroPortraitData } from '../types'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

interface HeroPortraitProps {
  portrait: HeroPortraitData
}

export function HeroPortrait({ portrait }: HeroPortraitProps) {
  return (
    <>
      {/* Background Geometric Shape Card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
          whileInView={{ opacity: 0.8, scale: 1, rotate: -3 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: MOTION_DURATIONS.hero,
            ease: MOTION_EASINGS.smooth,
          }}
          className="w-62.5 sm:w-72.5 md:w-[320px] h-82.5 sm:h-92.5 md:h-100 bg-linear-to-tr from-dark-bg via-accent/15 to-[#1E3A8A]/25 backdrop-blur-md sm:backdrop-blur-3xl rounded-2xl border border-white/5 mt-4 shadow-xl transform-gpu"
        />
      </div>

      {/* Main Portrait */}
      <div className="relative z-10 w-full max-w-95 sm:max-w-105 md:max-w-115 h-full flex justify-center mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: MOTION_DURATIONS.hero,
            ease: MOTION_EASINGS.smooth,
            delay: 0.15,
          }}
          className="relative h-full flex items-end justify-center w-[320px] sm:w-95 md:w-100 transform-gpu"
        >
          <Image
            src={portrait.image}
            alt="Muhammad Hafidz"
            width={420}
            height={575}
            priority
            className="-translate-y-10 w-full h-auto object-contain object-bottom drop-shadow-xl brightness-95 contrast-110 transition-transform duration-500"
            style={{
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, black 5%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 5%)',
            }}
          />
        </motion.div>
      </div>
    </>
  )
}
