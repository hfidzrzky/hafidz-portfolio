export interface DualMatrixCard {
  category: string;
  title: string;
  description: string;
}

export interface DualMatrixData {
  academic: DualMatrixCard;
  practical: DualMatrixCard;
}

export interface JourneyTag {
  label: string;
  variant?: 'default' | 'accent';
}

export interface JourneyItem {
  id: string;
  year: string;
  yearEnd?: string;
  periodSuffix?: string;
  tag: string;
  title: string;
  quotes: string[];
  description?: string;
  tags: JourneyTag[];
  dualMatrix?: DualMatrixData;
  evolutionPipeline?: string[];
}

export interface JourneyHeaderData {
  badgeText: string;
  titleMain: string;
  titleTape: string;
  description: string;
}

export interface JourneyData {
  header: JourneyHeaderData;
  items: JourneyItem[];
  endStatus: string;
}
