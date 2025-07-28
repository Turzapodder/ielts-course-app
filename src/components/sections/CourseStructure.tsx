import React from 'react';
import Image from 'next/image';

// TypeScript interfaces
interface CourseFeature {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
}

interface CourseFeaturesProps {
  title?: string;
  features?: CourseFeature[];
}

// Mock data
const mockFeatures: CourseFeature[] = [
  {
    id: '1',
    title: '৫০+ ভিডিও লেকচার',
    description: 'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
    iconUrl: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png',
    iconAlt: '৫০+ ভিডিও লেকচার'
  },
  {
    id: '2',
    title: '৩৮টি লেকচার শিট',
    description: 'Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary',
    iconUrl: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png',
    iconAlt: '৩৮টি লেকচার শিট'
  },
  {
    id: '3',
    title: 'রিডিং এন্ড লিসিনিং মক টেস্ট',
    description: '10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই',
    iconUrl: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png',
    iconAlt: 'রিডিং এন্ড লিসিনিং মক টেস্ট'
  },
  {
    id: '4',
    title: 'ডাউট সল্ভিং লাইভ ক্লাস',
    description: 'সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ',
    iconUrl: 'https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png',
    iconAlt: 'ডাউত সল্ভিং লাইভ ক্লাস'
  }
];

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
  features = mockFeatures 
}) => {
  return (
    <section id="features" className="w-full">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          {title}
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-gray-900 p-6 md:grid-cols-2 md:gap-8">
          {features.map((feature) => (
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