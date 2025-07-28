import React from 'react';
import Image from 'next/image';
import { InstructorProfileProps } from '@/types/instructorProfile';
import { ChevronRight } from 'lucide-react';

const InstructorProfile: React.FC<InstructorProfileProps> = ({
  name,
  profileUrl,
  qualifications,
  ieltsScore,
  image,
  className = ''
}) => {
  return (
    <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">কোর্স ইন্সট্রাক্টর</h2>
          <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center gap-4">
        {/* Instructor Image */}
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden border-2 border-gray-200">
            <Image
              src={image}
              alt={name}
              width={73}
              height={73}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Instructor Details */}
        <div className="flex-1 ml-4">
          <div className="flex items-center gap-2">
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-green-500">{name}</h3>
            </a>
            <ChevronRight />
          </div>
          
          {/* Qualifications */}
          <div className="space-y-1">
            {qualifications.map((qualification, index) => (
              <p key={index} className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: qualification }}>
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