'use client';

import React from 'react';
import { useJourney } from '../hooks/use-journey';
import { JourneyHeader } from './JourneyHeader';
import { JourneyTimeline } from './JourneyTimeline';

export function JourneyContent() {
  const data = useJourney();

  return (
    <div className="w-full pl-0 md:pl-16">
      <JourneyHeader data={data.header} />
      <JourneyTimeline items={data.items} endStatus={data.endStatus} />
    </div>
  );
}
