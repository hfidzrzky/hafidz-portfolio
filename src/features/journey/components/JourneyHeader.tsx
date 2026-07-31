import React from 'react';
import { Badge } from '@/shared/ui/Badge';
import { TapeText } from '@/shared/ui/TapeText';
import { FadeIn } from '@/shared/ui/animations/FadeIn';
import { JourneyHeaderData } from '../types';

interface JourneyHeaderProps {
  data: JourneyHeaderData;
}

export function JourneyHeader({ data }: JourneyHeaderProps) {
  return (
    <FadeIn delay={0.1} direction="up" className="mb-24 flex flex-col justify-start">
      <Badge className="mb-4 self-start">
        {data.badgeText}
      </Badge>

      <h2 className="font-sans text-[42px] md:text-[56px] font-bold tracking-tight uppercase leading-none mb-6 text-slate-900 dark:text-white">
        WHERE I&apos;VE BEEN.<br />
        WHERE I&apos;M{' '}
        <TapeText className="px-4 pt-2 pb-1 transform -translate-y-1 mt-2 md:mt-0">
          {data.titleTape}
        </TapeText>
      </h2>

      <div className="border-l-2 border-accent pl-5 max-w-2xl relative">
        <span className="absolute left-[-1.35rem] top-0 text-accent font-mono text-xl">
          &gt;
        </span>
        <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {data.description}
        </p>
      </div>
    </FadeIn>
  );
}
