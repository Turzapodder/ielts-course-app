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