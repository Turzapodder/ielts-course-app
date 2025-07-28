import { CarouselItem } from './carousel';

// Types for Hero Section component
export interface Instructor {
  name: string;
  designation: string;
  image: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  instructor?: Instructor;
  courseDetails?: string[];
  carouselItems?: CarouselItem[];
}