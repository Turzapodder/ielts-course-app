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