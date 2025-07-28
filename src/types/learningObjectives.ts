// Types for Learning Objectives component
export interface Section {
  type: string;
  title: string;
  content: string;
  items?: string[];
}

export interface LearningObjectivesProps {
  sections: Section[];
}