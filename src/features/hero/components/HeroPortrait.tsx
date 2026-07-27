'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { HeroPortraitData } from '../types'

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
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-[250px] sm:w-[290px] md:w-[320px] h-[330px] sm:h-[370px] md:h-[400px] bg-gradient-to-tr from-dark-bg via-accent/15 to-[#1E3A8A]/25 backdrop-blur-md sm:backdrop-blur-3xl rounded-2xl border border-white/5 mt-4 shadow-xl transform-gpu"
        />
      </div>

      {/* Main Portrait */}
      <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px] h-full flex justify-center mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative h-full flex items-end justify-center w-[320px] sm:w-[380px] md:w-[400px] transform-gpu"
        >
          <Image
            src={portrait.image}
            alt="Muhammad Hafidz"
            width={420}
            height={575}
            priority
            className="-translate-y-10 w-full h-auto object-contain object-bottom drop-shadow-xl brightness-95 contrast-110 transition-all duration-500"
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