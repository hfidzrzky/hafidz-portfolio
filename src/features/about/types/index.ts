export interface AboutHeaderData {
  badge: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    tape: string;
  };
  personalNote: string[];
  systemStatus: string;
}

export interface LearningStep {
  number: string;
  title: string;
  description: string;
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface AboutClosingData {
  title: string;
  description: string[];
}

export interface AboutData {
  header: AboutHeaderData;
  learningSection: {
    number: string;
    title: string;
    steps: LearningStep[];
  };
  principlesSection: {
    number: string;
    title: string;
    principles: EngineeringPrinciple[];
  };
  closing: AboutClosingData;
}
