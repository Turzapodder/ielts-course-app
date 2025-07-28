"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";

import { CarouselProps } from '@/utils/types';

const Carousel: React.FC<CarouselProps> = ({
  items,
  className = "",
  showThumbnails = true,
  aspectRatio = "aspect-video",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Memoized navigation functions for better performance
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsPlaying(false);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsPlaying(false);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  }, []);

  // Memoized current item for performance
  const currentItem = useMemo(() => items[currentIndex], [items, currentIndex]);

  // Preload adjacent images for better UX
  const preloadIndexes = useMemo(() => {
    const prev = (currentIndex - 1 + items.length) % items.length;
    const next = (currentIndex + 1) % items.length;
    return [prev, next];
  }, [currentIndex, items.length]);


  if (!items || items.length === 0) {
    return (
      <div
        className={`${aspectRatio} bg-transparent lg:bg-gray-100 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500">No content available</span>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Main Carousel */}
      <div className="relative">
        {/* Main Content */}
        <div className={`relative ${aspectRatio}  bg-transparent lg:bg-gray-100 p-1`}>
          {currentItem?.type === "video" ? (
            <div className="relative w-full h-full">
              {!isPlaying ? (
                <>
                  <Image
                    src={currentItem.thumbnail || currentItem.src}
                    alt={currentItem.alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0} // Priority for first image
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green ml-1"
                        fill="green"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src={currentItem.src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={currentItem.alt}
                />
              )}
            </div>
          ) : (
            <Image
              src={currentItem?.src || ""}
              alt={currentItem?.alt || ""}
              fill
              className="object-cover"
              priority={currentIndex === 0} // Priority for first image
              loading={currentIndex === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          )}
          
          {/* Preload adjacent images for better UX */}
          {preloadIndexes.map((index) => (
            <link
              key={`preload-${index}`}
              rel="preload"
              as="image"
              href={items[index]?.src}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {showThumbnails && items.length > 1 && (
        <div className="flex gap-2 p-3  bg-transparent lg:bg-gray-100 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors cursor-pointer ${
                index === currentIndex
                  ? "!border-green-500"
                  : "border-gray-200"
              }`}
              aria-label={`View ${item.alt}`}
            >
              <Image
                src={item.thumbnail || item.src}
                alt={item.alt}
                width={64}
                height={48}
                className="w-full h-full object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
