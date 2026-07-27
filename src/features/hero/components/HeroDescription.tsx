interface HeroDescriptionProps {
  description: string;
}

export function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-[400px] leading-relaxed border-l-2 border-accent pl-4">
      {description}
    </p>
  )
}
