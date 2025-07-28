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