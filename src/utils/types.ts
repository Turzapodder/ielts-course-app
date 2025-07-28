import React, { RefObject } from 'react';

// ============================================================================
// ACCORDION TYPES
// ============================================================================

// Interface for each item's content
export interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

// Interface for the overall Accordion component
export interface UniversalAccordionProps {
  type: "single" | "multiple";
  items: AccordionItemProps[];
  className?: string;
  collapsible?: boolean;
  maxItems?: number;
}

// ============================================================================
// CAROUSEL TYPES
// ============================================================================

// Types for Carousel component
export interface CarouselItem {
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  alt: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  showThumbnails?: boolean;
  aspectRatio?: string;
}

// ============================================================================
// CONDITIONAL BANNER TYPES
// ============================================================================

// Types for Conditional Banner component
export interface ConditionalBannerProps {
  desktopImage: string;
  mobileImage: string;
  alt: string;
  className?: string;
}

// ============================================================================
// COURSE EXCLUSIVE TYPES
// ============================================================================

// Types for Course Exclusive Features component
export interface FeaturePoint {
  id: string;
  text: string;
}

export interface ExclusiveFeature {
  id: string;
  title: string;
  points: FeaturePoint[];
  imageUrl: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface CourseExclusiveFeaturesProps {
  title?: string;
  features?: ExclusiveFeature[];
  className?: string;
}

// ============================================================================
// COURSE OUTCOME TYPES
// ============================================================================

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

// ============================================================================
// COURSE STRUCTURE TYPES
// ============================================================================

// Types for Course Structure component
export interface CourseFeature {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
}

export interface CourseFeaturesProps {
  title?: string;
  features?: CourseFeature[];
}

// ============================================================================
// COURSE SUMMARY TYPES
// ============================================================================

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

// ============================================================================
// CTA SECTION TYPES
// ============================================================================

// Types for CTA Section component
export interface CTASectionProps {
  courseDetails: string[];
}

// ============================================================================
// DROPDOWN TYPES
// ============================================================================

// Types for dropdown functionality
export interface DropdownItem {
  icon?: React.ReactNode;
  text: string;
  link: string;
}

export interface NavDropdownData {
  [key: string]: DropdownItem[];
}

export interface DropdownProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  className?: string;
}

// ============================================================================
// GROUP JOIN ENGAGEMENT TYPES
// ============================================================================

// Types for Group Join Engagement component
export interface GroupJoinEngagementData {
  id: string;
  backgroundImageUrl?: string;
  backgroundColor?: string;
  iconUrl?: string;
  iconHeight?: number;
  title: string;
  description?: string;
  bulletPoints?: string[];
  buttonText?: string;
  thumbnailUrl: string;
  thumbnailHeight?: number;
  variant?: "default" | "book";
  onButtonClick?: () => void;
}

export interface GroupJoinEngagementProps {
  data?: GroupJoinEngagementData;
  className?: string;
}

// ============================================================================
// HERO SECTION TYPES
// ============================================================================

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
  floatingSectionRef?: RefObject<HTMLDivElement>;
}

// ============================================================================
// INSTRUCTOR PROFILE TYPES
// ============================================================================

// Types for Instructor Profile component
export interface InstructorProfileProps {
  name: string;
  profileUrl: string;
  qualifications: string[];
  ieltsScore: string;
  image: string;
  className?: string;
}

// ============================================================================
// INSTRUCTOR SECTION TYPES
// ============================================================================

// Types for Instructor Section component
// Note: This reuses the Instructor interface from Hero Section
export interface InstructorSectionProps {
  instructors: Instructor[];
}

// ============================================================================
// LEARNING OBJECTIVES TYPES
// ============================================================================

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

// ============================================================================
// TESTIMONIAL TYPES
// ============================================================================

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