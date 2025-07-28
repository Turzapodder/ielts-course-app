import React from 'react';
import Image from 'next/image';

interface InstructorProfileProps {
  name: string;
  qualifications: string[];
  ieltsScore: string;
  image: string;
  className?: string;
}

const InstructorProfile: React.FC<InstructorProfileProps> = ({
  name,
  qualifications,
  ieltsScore,
  image,
  className = ''
}) => {
  return (
    <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">কোর্স ইন্সট্রাক্টর</h2>
          <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        {/* Instructor Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src={image}
              alt={name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Instructor Details */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <svg 
              className="w-4 h-4 text-gray-400" 
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
          </div>
          
          {/* Qualifications */}
          <div className="space-y-1 mb-3">
            {qualifications.map((qualification, index) => (
              <p key={index} className="text-sm text-gray-600">
                {qualification}
              </p>
            ))}
          </div>
          
          {/* IELTS Score */}
          <div className="text-sm text-gray-600">
            <span className="font-medium">IELTS:</span> {ieltsScore}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default InstructorProfile;