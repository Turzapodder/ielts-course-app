import { CarouselItem } from './carousel';

// Types for Course Summary component
export interface CourseSummaryProps {
  carouselItems: CarouselItem[];
  price: number;
  originalPrice?: number;
  discount?: string;
  ctaText: string;
  courseDetails: string[];
  onEnroll: () => void;
}