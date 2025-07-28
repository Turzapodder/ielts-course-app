// Types for Testimonial Slider component
export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  result: string;
  videoUrl: string;
  thumbnail?: string;
}

export interface TestimonialSliderProps {
  testimonials: Testimonial[];
  title?: string;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  onVideoPlay: () => void;
  isPlaying: boolean;
}