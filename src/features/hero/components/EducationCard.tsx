import Image from 'next/image'
import { EducationInfo } from '../types'

interface EducationCardProps {
  education: EducationInfo;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="mt-4 inline-flex items-center justify-between gap-4 px-5 py-3 border border-light-border dark:border-dark-border bg-light-surface/40 dark:bg-dark-surface/40 backdrop-blur-md hover:border-accent/40 transition-[border-color,box-shadow,background-color] duration-300 group max-w-full sm:max-w-auto">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
          <Image
            src={education.logo}
            alt={education.institution}
            width={40}
            height={40}
            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="font-mono text-[11px] md:text-[12px] text-slate-600 dark:text-slate-400 uppercase tracking-wide leading-tight">
          <span>{education.status}</span>
          <div className="text-slate-800 dark:text-slate-200 font-semibold tracking-wider mt-0.5">
            {education.institution}
          </div>
        </div>
      </div>

      {/* Blue Pulsing Dot Circle Container */}
      <div className="w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/15 border border-accent/20 flex items-center justify-center relative flex-shrink-0 ml-2">
        <span className="animate-ping absolute inline-flex h-3.5 w-3.5 rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
      </div>
    </div>
  )
}
