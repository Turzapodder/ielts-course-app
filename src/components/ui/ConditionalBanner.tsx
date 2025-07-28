'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface ConditionalBannerProps {
  desktopImage: string;
  mobileImage: string;
  alt: string;
  className?: string;
}

const ConditionalBanner: React.FC<ConditionalBannerProps> = ({
  desktopImage,
  mobileImage,
  alt,
  className = ''
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const bannerParam = searchParams.get('banner');
    if (bannerParam === 'false') {
      setIsVisible(false);
    }
  }, [searchParams]);

  const handleClose = () => {
    setIsVisible(false);
    
    // Update URL with banner=false parameter
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('banner', 'false');
    const search = current.toString();
    const query = search ? `?${search}` : '';
    
    router.push(`${window.location.pathname}${query}`, { scroll: false });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-1 right-4 z-20 p-2 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Close banner"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image
          src={desktopImage}
          alt={alt}
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <Image
          src={mobileImage}
          alt={alt}
          width={768}
          height={300}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default ConditionalBanner;