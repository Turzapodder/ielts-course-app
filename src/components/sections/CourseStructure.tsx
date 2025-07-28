import React from 'react';
import Image from 'next/image';
import { CourseFeature, CourseFeaturesProps } from '@/types/courseStructure';



const FeatureCard: React.FC<{ feature: CourseFeature }> = ({ feature }) => {
  return (
    <div className="flex flex-row items-start gap-3 m-1">
      <div>
        <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out animate-fade-in opacity-100">
          <Image
            src={feature.iconUrl}
            alt={feature.iconAlt}
            width={36}
            height={36}
            className="object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-lg font-medium leading-[26px] text-white">
          {feature.title}
        </h3>
        <p className="text-sm font-normal leading-[22px] text-gray-400">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const CourseFeatures: React.FC<CourseFeaturesProps> = ({ 
  title = "কোর্সটি যেভাবে সাজানো হয়েছে",
  features
}) => {
  return (
    <section id="features" className="w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          {title}
        </h2>
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-md border bg-gray-900 p-6 md:grid-cols-2 md:gap-8">
          {features?.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
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
    </section>
  );
};

export default CourseFeatures;