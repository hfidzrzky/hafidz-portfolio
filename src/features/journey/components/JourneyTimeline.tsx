import React from 'react';
import { JourneyItem } from '../types';
import { JourneyItemCard } from './JourneyItemCard';
import { JourneyEndNode } from './JourneyEndNode';

interface JourneyTimelineProps {
  items: JourneyItem[];
  endStatus: string;
}

export function JourneyTimeline({ items, endStatus }: JourneyTimelineProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Vertical Axis Line */}
      <div className="absolute left-[15px] md:left-[160px] top-3 bottom-10 w-[1px] bg-light-border dark:bg-dark-border" />

      {/* Timeline Items */}
      {items.map((item, index) => (
        <JourneyItemCard key={item.id} item={item} index={index} />
      ))}

      {/* Ending Open Node */}
      <JourneyEndNode statusText={endStatus} />
    </div>
  );
}
