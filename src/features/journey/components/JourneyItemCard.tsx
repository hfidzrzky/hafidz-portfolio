import React from 'react';
import { FadeIn } from '@/shared/ui/animations/FadeIn';
import { JourneyItem } from '../types';
import { TimelineNode } from './TimelineNode';
import { JourneyDualMatrix } from './JourneyDualMatrix';
import { JourneyEvolutionPipeline } from './JourneyEvolutionPipeline';

interface JourneyItemCardProps {
  item: JourneyItem;
  index: number;
}

export function JourneyItemCard({ item, index }: JourneyItemCardProps) {
  return (
    <FadeIn delay={index * 0.12} direction="up" className="relative flex flex-col md:flex-row mb-20 group">
      <TimelineNode />

      <div className="md:w-[130px] pl-10 md:pl-0 md:text-right md:pr-10 pt-1">
        {item.yearEnd ? (
          <>
            <span className="font-sans text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-none block group-hover:text-accent transition-colors duration-300">
              {item.year}
            </span>
            <span className="font-mono text-accent uppercase tracking-widest my-1 block">
              ↓
            </span>
            <span className="font-sans text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-none block group-hover:text-accent transition-colors duration-300">
              {item.yearEnd}
            </span>
          </>
        ) : item.periodSuffix ? (
          <>
            <span className="font-sans text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-none block group-hover:text-accent transition-colors duration-300">
              {item.year}
            </span>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">
              {item.periodSuffix}
            </span>
          </>
        ) : (
          <span className="font-sans text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors duration-300">
            {item.year}
          </span>
        )}
      </div>

      {/* Content Column */}
      <div className="mt-5 md:mt-0 pl-10 md:pl-10 flex-1">
        <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">
          {item.tag}
        </div>

        <h3 className="font-sans text-2xl md:text-3xl font-bold text-slate-900 dark:text-white uppercase mb-5 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
          {item.title}
        </h3>

        {item.quotes.length > 0 && (
          <div className="border-l border-light-border dark:border-dark-border pl-4 font-mono text-xs text-accent uppercase tracking-widest mb-4 space-y-1">
            {item.quotes.map((q) => (
              <div key={q}>{q}</div>
            ))}
          </div>
        )}

        {item.description && (
          <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-6">
            {item.description}
          </p>
        )}

        {item.dualMatrix && <JourneyDualMatrix data={item.dualMatrix} />}

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag) =>
            tag.variant === 'accent' ? (
              <span
                key={tag.label}
                className="px-2.5 py-1 border border-accent/30 bg-accent/5 text-accent font-mono text-[10px] uppercase tracking-wider font-semibold hover:border-accent hover:bg-accent/10 transition-colors duration-200"
              >
                {tag.label}
              </span>
            ) : (
              <span
                key={tag.label}
                className="px-2.5 py-1 border border-light-border dark:border-dark-border font-mono text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-wider hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors duration-200"
              >
                {tag.label}
              </span>
            )
          )}
        </div>

        {item.evolutionPipeline && (
          <JourneyEvolutionPipeline steps={item.evolutionPipeline} />
        )}
      </div>
    </FadeIn>
  );
}
