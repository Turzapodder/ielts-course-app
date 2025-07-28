import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'image' | 'button' | 'custom';
  lines?: number;
  height?: string;
  width?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  variant = 'text',
  lines = 3,
  height = 'h-4',
  width = 'w-full'
}) => {
  const baseClasses = 'bg-gray-200 animate-pulse rounded';

  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`${baseClasses} ${height} ${
                  index === lines - 1 ? 'w-3/4' : width
                }`}
              />
            ))}
          </div>
        );
      
      case 'card':
        return (
          <div className={`${baseClasses} p-6 space-y-4 ${className}`}>
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded w-5/6" />
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className={`${baseClasses} aspect-video ${width} ${className}`} />
        );
      
      case 'button':
        return (
          <div className={`${baseClasses} h-10 w-24 ${className}`} />
        );
      
      case 'custom':
        return (
          <div className={`${baseClasses} ${height} ${width} ${className}`} />
        );
      
      default:
        return (
          <div className={`${baseClasses} ${height} ${width} ${className}`} />
        );
    }
  };

  return renderSkeleton();
};

export default LoadingSkeleton;