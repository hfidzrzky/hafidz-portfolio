import React from 'react';
import { DualMatrixData } from '../types';

interface JourneyDualMatrixProps {
  data: DualMatrixData;
}

export function JourneyDualMatrix({ data }: JourneyDualMatrixProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-light-border dark:bg-dark-border mb-6 max-w-3xl border border-light-border dark:border-dark-border">
      {/* Left: Academic */}
      <div className="bg-light-surface dark:bg-dark-surface p-5 md:p-6 hover:bg-slate-100 dark:hover:bg-[#151A26] transition-colors">
        <div className="font-mono text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-2">
          {data.academic.category}
        </div>
        <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base md:text-lg uppercase">
          {data.academic.title}
        </h4>
        <p className="font-mono text-[10px] text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          {data.academic.description}
        </p>
      </div>

      {/* Right: Practical */}
      <div className="bg-light-surface dark:bg-dark-surface p-5 md:p-6 hover:bg-slate-100 dark:hover:bg-[#151A26] transition-colors relative">
        {/* Plus symbol binding them */}
        <div className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-50 dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full items-center justify-center font-mono text-accent text-xs z-10">
          +
        </div>
        <div className="font-mono text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-2">
          {data.practical.category}
        </div>
        <h4 className="font-sans font-bold text-slate-900 dark:text-white text-base md:text-lg uppercase">
          {data.practical.title}
        </h4>
        <p className="font-mono text-[10px] text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
          {data.practical.description}
        </p>
      </div>
    </div>
  );
}
