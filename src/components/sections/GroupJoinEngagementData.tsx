import React from "react";
import Image from "next/image";
import { GroupJoinEngagementProps } from '@/utils/types';

const GroupJoinEngagement: React.FC<GroupJoinEngagementProps> = ({
  data,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (data?.cta.clicked_url) {
      window.open(data.cta.clicked_url, '_blank');
    }
  };

  // Background style base;
  return (
    <div className={className}>
      <div id="group_join_engagement">
        <div
          className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${data?.background?.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Content Section */}
          <div
            className="w-full md:w-3/5w-full md:w-1/2"
          >

            {/* Icon for default variant */}
            {data?.top_left_icon_img && (
              <div className="mb-4">
                <Image
                  src={data.top_left_icon_img}
                  alt="Course icon"
                  width={190}
                  height={40}
                  className="object-contain"
                  style={{ height: `${40}px` }}
                />
              </div>
            )}

            <h2
              className="font-semibold text-white text-lg md:text-xl mb-4 text-xl"
            >
              {data?.title}
            </h2>

            {/* Bullet points for book variant */}
            { data?.description && (
              <ul className="mt-2 text-base text-gray-100">
                {data.description}
              </ul>
            )}

            {/* Button */}
              <button
                onClick={handleButtonClick}
                className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2  focus:ring-offset-2 cursor:pointer"
              >
                {data?.cta.text}
              </button>
          </div>

          {/* Thumbnail Section */}
          <div
            className="items-center hidden w-1/2 md:flex"
          >
            <Image
              src={data?.thumbnail || ''}
              alt="Course thumbnail"
              width={ 120 }
              height={200}
              className="object-cover rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupJoinEngagement;

// Export types for use in other components
export type { GroupJoinEngagementProps };
