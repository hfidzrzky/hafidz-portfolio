import React from 'react';
import { FadeIn } from '@/shared/ui/animations/FadeIn';

interface JourneyEndNodeProps {
  statusText: string;
}

export function JourneyEndNode({ statusText }: JourneyEndNodeProps) {
  return (
    <FadeIn delay={0.3} direction="up" className="relative flex flex-col md:flex-row mt-12 group">
      {/* Fading line below last node */}
      <div className="absolute left-[15px] md:left-[160px] top-[-30px] h-16 w-[1px] bg-gradient-to-b from-light-border dark:from-dark-border to-transparent -translate-x-1/2" />

      {/* Pulsing End Node */}
      <div className="absolute left-[15px] md:left-[160px] top-4 w-2 h-2 -translate-x-1/2 flex justify-center items-center">
        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-accent opacity-50" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </div>

      <div className="md:w-[130px]" />

      <div className="pl-10 md:pl-10 flex-1 pt-2.5">
        <div className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase font-semibold">
          {statusText}
        </div>
      </div>
    </FadeIn>
  );
}
