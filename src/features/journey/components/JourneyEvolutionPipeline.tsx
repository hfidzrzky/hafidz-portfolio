import React from 'react';

interface JourneyEvolutionPipelineProps {
  steps: string[];
}

export function JourneyEvolutionPipeline({ steps }: JourneyEvolutionPipelineProps) {
  return (
    <div className="bg-slate-100 dark:bg-[#0B0F19] border border-light-border dark:border-dark-border p-5 md:p-6 mt-8 max-w-2xl">
      <div className="font-mono text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-4">
        Journey Evolution
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <React.Fragment key={step}>
              <span
                className={
                  isLast
                    ? 'text-accent font-bold font-mono text-[10px] uppercase tracking-wider'
                    : 'text-slate-900 dark:text-white font-mono text-[10px] uppercase tracking-wider'
                }
              >
                {step}
              </span>
              {!isLast && (
                <>
                  <span className="hidden sm:inline text-accent/50 font-mono text-[10px]">
                    &gt;
                  </span>
                  <span className="sm:hidden text-accent/50 font-mono text-[10px] leading-none ml-2">
                    ↓
                  </span>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
