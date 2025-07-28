import React from 'react';
import Image from 'next/image';

// TypeScript interfaces
interface GroupJoinEngagementData {
  id: string;
  backgroundImageUrl: string;
  iconUrl: string;
  iconHeight?: number;
  title: string;
  description: string;
  buttonText: string;
  thumbnailUrl: string;
  thumbnailHeight?: number;
  onButtonClick?: () => void;
}

interface GroupJoinEngagementProps {
  data?: GroupJoinEngagementData;
  className?: string;
}

// Mock data
const mockData: GroupJoinEngagementData = {
  id: '1',
  backgroundImageUrl: 'https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png',
  iconUrl: 'https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png',
  iconHeight: 40,
  title: 'IELTS Confirm 7+ Score (Guideline)',
  description: 'IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।',
  buttonText: 'ফ্রি PDF Download করুন',
  thumbnailUrl: 'https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg',
  thumbnailHeight: 200,
  onButtonClick: () => {
    console.log('Download button clicked');
  }
};

const GroupJoinEngagement: React.FC<GroupJoinEngagementProps> = ({ 
  data = mockData,
  className = ""
}) => {
  const handleButtonClick = () => {
    if (data.onButtonClick) {
      data.onButtonClick();
    }
  };

  return (
    <div className={className}>
      <div id="group_join_engagement">
        <div 
          className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data.backgroundImageUrl})`
          }}
        >
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <Image
                src={data.iconUrl}
                alt="Course icon"
                width={190}
                height={data.iconHeight || 40}
                className="object-contain"
                style={{ height: `${data.iconHeight || 40}px` }}
              />
            </div>
            
            <h2 
              className="text-xl font-semibold text-white"
            >
              {data.title}
            </h2>
            
            <p 
              className="mt-2 text-base text-gray-100"
            >
              {data.description}
            </p>
            
            <button 
              onClick={handleButtonClick}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {data.buttonText}
            </button>
          </div>
          
          {/* Thumbnail Section - Hidden on mobile */}
          <div className="items-center hidden w-1/2 md:flex">
            <Image
              src={data.thumbnailUrl}
              alt="Course thumbnail"
              width={300}
              height={data.thumbnailHeight || 200}
              className="object-contain rounded-lg"
              style={{ height: `${data.thumbnailHeight || 200}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupJoinEngagement;

// Export types for use in other components
export type { GroupJoinEngagementData, GroupJoinEngagementProps };