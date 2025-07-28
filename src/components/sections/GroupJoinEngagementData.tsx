import React from "react";
import Image from "next/image";
import { GroupJoinEngagementData, GroupJoinEngagementProps } from '@/utils/types';

const GroupJoinEngagement: React.FC<GroupJoinEngagementProps> = ({
  data,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (data?.onButtonClick) {
      data.onButtonClick();
    }
  };

  const isBookVariant = data?.variant === "book";

  // Background style based on available props

  return (
    <div className={className}>
      <div id="group_join_engagement">
        <div
          className={`flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 ${
            isBookVariant ? "" : "bg-cover bg-center bg-no-repeat"
          }`}
          style={{
            backgroundImage: `url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Content Section */}
          <div
            className={isBookVariant ? "w-full md:w-3/5" : "w-full md:w-1/2"}
          >

            {/* Icon for default variant */}
            {!isBookVariant && data?.iconUrl && (
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
            )}

            <h2
              className={`font-semibold text-white ${
                isBookVariant ? "text-lg md:text-xl mb-4" : "text-xl"
              }`}
            >
              {data?.title}
            </h2>

            {/* Description for default variant */}
            {!isBookVariant && data?.description && (
              <p className="mt-2 text-base text-gray-100">{data.description}</p>
            )}

            {/* Bullet points for book variant */}
            {isBookVariant && data.bulletPoints && (
              <ul className="space-y-2">
                {data.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center text-white">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Button */}
              <button
                onClick={handleButtonClick}
                className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                ফ্রি PDF Download করুন
              </button>
          </div>

          {/* Thumbnail Section */}
          <div
            className={`items-center hidden md:flex ${
              isBookVariant ? "w-2/5 justify-end" : "w-1/2"
            }`}
          >
            <Image
              src={data?.thumbnailUrl || ''}
              alt="Course thumbnail"
              width={isBookVariant ? 120 : 300}
              height={data?.thumbnailHeight || 200}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupJoinEngagement;

// Export types and mock data for use in other components
export type { GroupJoinEngagementData, GroupJoinEngagementProps };
