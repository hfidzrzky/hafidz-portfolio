import React from 'react';
import { cn } from '@/shared/lib/utils';

interface TimelineNodeProps {
  className?: string;
}

export function TimelineNode({ className }: TimelineNodeProps) {
  return (
    <div
      className={cn(
        'absolute left-3.75 md:left-40 top-2.5 w-2 h-2 -translate-x-1/2 rounded-full bg-slate-50 dark:bg-dark-bg border border-accent group-hover:scale-150 group-hover:bg-accent transition-all duration-300 z-10',
        className
      )}
    />
  );
}
