// Types for Course Outcome component
export interface LearningOutcome {
  id: string;
  text: string;
}

export interface LearningOutcomesProps {
  title?: string;
  outcomes: LearningOutcome[];
  className?: string;
  checkColor?: string;
  textColor?: string;
  variant?: 'default' | 'card' | 'simple';
  backgroundColor?: string;
  showCards?: boolean;
}