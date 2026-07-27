interface HeroHeadlineProps {
  line1: string;
  line2: string;
  tape: string;
}

export function HeroHeadline({ line1, line2, tape }: HeroHeadlineProps) {
  return (
    <h1 className="font-sans text-[30px] sm:text-[56px] md:text-[72px] lg:text-[82px] leading-[0.95] md:leading-[0.9] font-bold tracking-tight uppercase text-slate-800 dark:text-white">
      {line1}<br />
      {line2}<br />
      <span className="inline-block bg-accent text-white px-3 sm:px-4 pt-1.5 sm:pt-2 pb-1 tape-effect transform -translate-y-1">
        {tape}
      </span>
    </h1>
  )
}
