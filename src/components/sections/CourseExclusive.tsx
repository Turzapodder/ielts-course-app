import React from 'react';
import Image from 'next/image';

// TypeScript interfaces
interface FeaturePoint {
  id: string;
  text: string;
}

interface ExclusiveFeature {
  id: string;
  title: string;
  points: FeaturePoint[];
  imageUrl: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

interface CourseExclusiveFeaturesProps {
  title?: string;
  features?: ExclusiveFeature[];
  className?: string;
}

// Check icon component
const CheckIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="19" 
    height="15" 
    fill="none" 
    viewBox="0 0 19 15"
    className="flex-shrink-0"
  >
    <path 
      fill="#6294F8" 
      stroke="#6294F8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="0.893" 
      d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
    />
  </svg>
);

// Mock data
const mockFeatures: ExclusiveFeature[] = [
  {
    id: '1',
    title: 'ভিডিও লেকচার',
    points: [
      {
        id: '1-1',
        text: 'IELTS Academic ও General Training নিয়ে আলোচনা'
      },
      {
        id: '1-2',
        text: 'Reading, Writing, Listening ও Speaking এর Overview & Format'
      },
      {
        id: '1-3',
        text: 'প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি'
      },
      {
        id: '1-4',
        text: 'ভিডিওর সাথে প্র্যাকটিসের সুযোগ'
      }
    ],
    imageUrl: 'https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png',
    imageAlt: 'ভিডিও লেকচার',
    imageWidth: 250,
    imageHeight: 200
  },
  {
    id: '2',
    title: 'Reading ও Listening Mock Tests',
    points: [
      {
        id: '2-1',
        text: '10 Reading & 10 Listening Mock Tests'
      },
      {
        id: '2-2',
        text: 'Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স'
      },
      {
        id: '2-3',
        text: 'উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট'
      },
      {
        id: '2-4',
        text: 'যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট'
      }
    ],
    imageUrl: 'https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png',
    imageAlt: 'Reading ও Listening Mock Tests',
    imageWidth: 250,
    imageHeight: 200
  }
];

const FeatureItem: React.FC<{ feature: ExclusiveFeature }> = ({ feature }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
      {/* Content Section */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium leading-[30px] text-gray-900 md:text-base">
          {feature.title}
        </h3>
        
        <div className="flex flex-col gap-3">
          {feature.points.map((point) => (
            <div key={point.id} className="flex flex-row items-center gap-5">
              <CheckIcon />
              <p className="text-sm font-normal leading-6 text-gray-600 md:text-base">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-auto">
        <div className="mb-4 mx-auto max-w-[350px] opacity-0 transition-opacity duration-300 ease-in-out animate-fade-in opacity-100">
          <Image
            src={feature.imageUrl}
            alt={feature.imageAlt}
            width={feature.imageWidth || 250}
            height={feature.imageHeight || 200}
            className="object-contain rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

const CourseExclusiveFeatures: React.FC<CourseExclusiveFeaturesProps> = ({ 
  title = "কোর্স এক্সক্লুসিভ ফিচার",
  features = mockFeatures,
  className = ""
}) => {
  return (
    <div className={className}>
      <div id="feature_explanations">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-xl font-semibold leading-[30px] text-black">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
            {features.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CourseExclusiveFeatures;

// Export types for use in other components
export type { 
  FeaturePoint, 
  ExclusiveFeature, 
  CourseExclusiveFeaturesProps 
};