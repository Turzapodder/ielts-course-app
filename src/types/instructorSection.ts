// Types for Instructor Section component
export interface Instructor {
  name: string;
  designation: string;
  image: string;
}

export interface InstructorSectionProps {
  instructors: Instructor[];
}