
import React from 'react';
import { Check } from 'lucide-react';
import { LearningOutcome, LearningOutcomesProps } from '@/types/courseOutcome';

// Main LearningOutcomes Component
const LearningOutcomes: React.FC<LearningOutcomesProps> = ({
  title = "What you will learn by doing the course",
  outcomes,
  className = "",
  checkColor = "text-blue-500",
  textColor = "text-gray-600",
  variant = 'default',
  backgroundColor = "bg-white",
}) => {
  if (!outcomes.length) {
    return null;
  }

  // Dynamic classes based on variant
  const isCard = variant === 'card';
  const isSimple = variant === 'simple';

  const containerClasses = isCard 
    ? `w-full ${backgroundColor} ${className}`
    : `w-full ${isSimple ? 'max-w-3xl' : 'max-w-4xl'} mx-auto ${isSimple ? 'py-6' : 'py-8'} ${className}`;

  const titleClasses = isCard
    ? "text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center"
    : isSimple
    ? "text-lg md:text-xl font-medium text-gray-800 mb-4"
    : "text-xl md:text-2xl font-semibold text-gray-800 mb-6";

  const gridClasses = isSimple
    ? "grid grid-cols-1 gap-3"
    : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6";


  return (
    <div className={containerClasses}>
      <div className='max-w-4xl mx-auto'>
        {/* Title */}
        {title && (
          <h2 className={titleClasses}>
            {title}
          </h2>
        )}

        {/* Learning Outcomes Grid */}
        <div className={`${gridClasses} rounded-md md:border pt-2 md:p-6`}>
          {outcomes.map((outcome) => (
            <div key={outcome.id} className="flex items-start gap-3">
              <div className='flex items-start gap-3'>
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <Check className={`w-4 h-4 ${checkColor}`} />
                </div>
                
                {/* Text Content */}
                <p className={`text-sm md:text-base leading-relaxed ${textColor}`}>
                  {outcome.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningOutcomes;