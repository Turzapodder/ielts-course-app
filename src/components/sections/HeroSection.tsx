// components/sections/HeroSection.tsx
import React, { forwardRef } from "react"; // Keep forwardRef for the root section
import Image from "next/image";

import Carousel from '../ui/Carousel';
import CTASection from "../ui/CTASection";

import { HeroSectionProps } from '@/utils/types';

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  // Accept floatingSectionRef as a prop
  ({ title, description, courseDetails, carouselItems, floatingSectionRef }, ref) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const finalCarouselItems = carouselItems;
    const finalCourseDetails = courseDetails || [];

    return (
      <section ref={ref} className="hero-section text-white min-h-[300px] md:min-h-[300px] ">
        <div className="container relative flex flex-col gap-4 md:gap-12 pb-6 md:py-10 min-h-[300px]">
          {/* Mobile/Tablet Carousel - Only visible on small screens */}
          <div className="order-1 lg:hidden w-full mb-4">
            <div className="rounded-lg shadow-lg overflow-hidden bg-transparent text-gray-800 lg:bg-white">
              <Carousel
                items={finalCarouselItems || []}
                showThumbnails={true}
                aspectRatio="aspect-video"
              />
            </div>
          </div>

          {/* Course Title and Description */}
          <div className="course-title-section order-2 md:order-1 flex flex-col justify-center flex-1 md:max-w-[100%] lg:max-w-[calc(100%_-_448px)]">
            <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
              {title}
            </h1>
            <div className="mb-2">
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                  <Image
                    className="md:w-[130px] w-[100px]"
                    src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                    alt={""}
                    width={100}
                    height={20}
                  />
                </span>
                <span className="inline-block text-sm md:text-base">
                  (81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </button>
            </div>
            <div>
              <div className="text-gray-400 overflow-hidden h-auto [mask-image:none] ">
                <div>
                  <p className="tenms__paragraph" dir="ltr">
                    <span
                      className="whitespace-pre-wrap text-[#A3A3A3]"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Carousel and Price Summary - This is the "floating" section within HeroSection */}
          <div
            ref={floatingSectionRef}
            className="flaoting-section hidden lg:block order-3 md:order-2 flex-shrink-0 w-full md:max-w-[330px] lg:max-w-[400px] absolute right-0 md:top-[50px]"
          >
            <div className="shadow-lg overflow-hidden bg-white text-gray-800">
              <Carousel
                items={finalCarouselItems || []}
                showThumbnails={true}
                aspectRatio="aspect-video"
              />
              <CTASection
                courseDetails={finalCourseDetails}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;