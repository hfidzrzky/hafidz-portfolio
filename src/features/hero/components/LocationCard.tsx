import { MoveUpRight } from 'lucide-react'
import { LocationCardData } from '../types'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons'

interface LocationCardProps {
  data: LocationCardData;
}

export function LocationCard({ data }: LocationCardProps) {
  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border p-3 md:p-4 rounded-md shadow-2xl hover-glow transition-[border-color,box-shadow,background-color] duration-300 cursor-default flex flex-col gap-2">
      <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> {data.label}
      </div>
      <div className="font-mono text-xs md:text-sm text-slate-800 dark:text-slate-300">
        {data.city}<br />{data.country}
      </div>
      
      <div className="w-full h-[1px] bg-light-border dark:bg-dark-border my-0.5" />

      <div className="flex items-center justify-between mt-0.5">
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          {data.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="hover:text-accent hover:scale-110 transition-all duration-200"
            >
              {social.platform === 'github' && <GithubIcon className="w-4 h-4 fill-current" />}
              {social.platform === 'linkedin' && <LinkedinIcon className="w-4 h-4 fill-current" />}
              {social.platform === 'instagram' && <InstagramIcon className="w-4 h-4 fill-current" />}
            </a>
          ))}
        </div>
        <MoveUpRight className="translate-x-3 w-3.5 h-3.5 text-accent" />
      </div>
    </div>
  )
}
