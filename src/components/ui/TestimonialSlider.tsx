'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Play } from 'lucide-react';

import { TestimonialSliderProps, TestimonialCardProps } from '@/utils/types';

// Utility function to extract YouTube video ID
const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

// TestimonialCard Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  onVideoPlay, 
  isPlaying 
}) => {
  const { name, avatar, result, videoUrl, thumbnail } = testimonial;
  const videoId = extractYouTubeId(videoUrl);


  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-full md:w-80 lg:w-96">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-10">
        <Quote className="w-8 h-8 text-red-500 fill-current" />
      </div>

      {/* Video Thumbnail */}
      <div className="relative p-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
          {isPlaying && videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${name} testimonial video`}
              loading="lazy"
            />
          ) : (
            <div 
              className="relative w-full h-full cursor-pointer group" 
              onClick={onVideoPlay}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onVideoPlay();
                }
              }}
              aria-label={`Play testimonial video for ${name}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={`${name} testimonial thumbnail`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                <div className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
            <Image
              src={avatar}
              alt={`${name} avatar`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
              {name}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm truncate">
              {result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main TestimonialSlider Component
const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  title = "Students opinion",
  showArrows = true,
  className = ""
}) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    // Calculate one card width including gap (card width + gap)
    const cardWidth = 384 + 24; // lg:w-96 (384px) + gap-6 (24px)
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    if (direction === 'left') {
      scrollContainerRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: 'smooth'
      });
    } else {
      scrollContainerRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleVideoPlay = (testimonialId: string) => {
    setPlayingVideo(testimonialId);
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 py-8 ${className}`}>
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        {title}
      </h2>

      {/* Slider Container */}
      <div className="relative group">
        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4 pt-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="snap-start">
              <TestimonialCard
                testimonial={testimonial}
                onVideoPlay={() => handleVideoPlay(testimonial.id)}
                isPlaying={playingVideo === testimonial.id}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && testimonials.length > 1 && (
          <>
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 z-10 opacity-0 group-hover:opacity-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </>
        )}
      </div>


      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;