'use client';

import React from 'react';
import { SectionContainer } from '@/shared/ui/SectionContainer';
import { SectionIndicator } from '@/shared/ui/SectionIndicator';
import { JourneyContent } from '@/features/journey';

export function JourneySection() {
  return (
    <SectionContainer id="journey" variant="default">
      <SectionIndicator number="07" showTopLine={true} bottomLineFull={true} />
      <JourneyContent />
    </SectionContainer>
  );
}
