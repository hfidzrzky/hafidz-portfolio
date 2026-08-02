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
      <div className="absolute left-3.75 md:left-40 top-3 bottom-10 w-px bg-light-border dark:bg-dark-border" />

      {items.map((item, index) => (
        <JourneyItemCard key={item.id} item={item} index={index} />
      ))}

      <JourneyEndNode statusText={endStatus} />
    </div>
  );
}
