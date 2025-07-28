import React from "react";
import Image from "next/image";
import { GroupJoinEngagementData, GroupJoinEngagementProps } from '@/types/groupJoinEngagement';

// Mock data for default variant
const mockData: GroupJoinEngagementData = {
  id: "1",
  backgroundImageUrl:
    "https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png",
  iconUrl:
    "https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png",
  iconHeight: 40,
  title: "IELTS Confirm 7+ Score (Guideline)",
  description:
    "IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।",
  buttonText: "ফ্রি PDF Download করুন",
  thumbnailUrl:
    "https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg",
  thumbnailHeight: 200,
  variant: "default",
  onButtonClick: () => {
    console.log("Download button clicked");
  },
};

// Mock data for book variant
const mockBookData: GroupJoinEngagementData = {
  id: "2",
  backgroundColor:
    "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
  title: "ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)",
  bulletPoints: [
    "360 পৃষ্ঠা",
    "প্রিমিয়াম হার্ডকপি",
    "ফ্রি ডেলিভারি",
    "4 কম্পোনেন্টের মধ্যে সামঞ্জস্যে ডেলিভারি",
  ],
  thumbnailUrl: "/book-thumbnail.jpg", // You would replace this with actual book image
  thumbnailHeight: 200,
  variant: "book",
  onButtonClick: () => {
    console.log("Book order button clicked");
  },
};

const GroupJoinEngagement: React.FC<GroupJoinEngagementProps> = ({
  data = mockData,
  className = "",
}) => {
  const handleButtonClick = () => {
    if (data.onButtonClick) {
      data.onButtonClick();
    }
  };

  const isBookVariant = data.variant === "book";

  // Background style based on available props
  const backgroundStyle = {
    ...(data.backgroundImageUrl && {
      backgroundImage: `url(${data.backgroundImageUrl})`,
    }),
    ...(data.backgroundColor &&
      !data.backgroundImageUrl && {
        background: data.backgroundColor,
      }),
    // Default fallback for book variant if no background is provided
    ...(!data.backgroundImageUrl &&
      !data.backgroundColor &&
      isBookVariant && {
        background:
          "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
      }),
  };

  return (
    <div className={className}>
      <div id="group_join_engagement">
        <div
          className={`flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12 ${
            isBookVariant ? "" : "bg-cover bg-center bg-no-repeat"
          }`}
          style={backgroundStyle}
        >
          {/* Content Section */}
          <div
            className={isBookVariant ? "w-full md:w-3/5" : "w-full md:w-1/2"}
          >

            {/* Icon for default variant */}
            {!isBookVariant && data.iconUrl && (
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
              {data.title}
            </h2>

            {/* Description for default variant */}
            {!isBookVariant && data.description && (
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
            {data.buttonText && (
              <button
                onClick={handleButtonClick}
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {data.buttonText}
              </button>
            )}
          </div>

          {/* Thumbnail Section */}
          <div
            className={`items-center hidden md:flex ${
              isBookVariant ? "w-2/5 justify-end" : "w-1/2"
            }`}
          >
            <Image
              src={data.thumbnailUrl}
              alt="Course thumbnail"
              width={isBookVariant ? 120 : 300}
              height={data.thumbnailHeight || 200}
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
export { mockData, mockBookData };
