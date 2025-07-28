'use client';

import React from 'react';
import Carousel, { CarouselItem } from '../ui/Carousel';
import PriceSummary from './CTASection';

interface CourseSummaryProps {
  carouselItems: CarouselItem[];
  price: number;
  originalPrice?: number;
  discount?: string;
  ctaText: string;
  courseDetails: string[];
  onEnroll: () => void;
}

const CourseSummary: React.FC<CourseSummaryProps> = ({
  carouselItems,
  price,
  originalPrice,
  discount,
  ctaText,
  courseDetails,
  onEnroll
}) => {

  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-sm mx-auto">
      {/* Carousel Section */}
      <Carousel
        items={carouselItems}
        showThumbnails={true}
        aspectRatio="aspect-video"
      />

      {/* Price Section */}
      <PriceSummary
        price={price}
        originalPrice={originalPrice}
        discount={discount}
        ctaText={ctaText}
        courseDetails={courseDetails}
        onEnroll={onEnroll}
      />
    </div>
  );
};

export default CourseSummary;