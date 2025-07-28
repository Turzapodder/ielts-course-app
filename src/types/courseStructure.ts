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