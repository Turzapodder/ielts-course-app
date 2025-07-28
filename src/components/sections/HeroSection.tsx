import Image from "next/image";
import CourseSummary from './CourseSummary';
import { CarouselItem } from '../ui/Carousel';

interface Instructor {
  name: string;
  designation: string;
  image: string;
}

interface HeroSectionProps {
  title: string;
  description: string;
  instructor?: Instructor;
}

export default function HeroSection({
  title,
  description,
  instructor,
}: HeroSectionProps) {
  const carouselItems: CarouselItem[] = [
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: '/dasktop_banner.jpg',
      alt: 'IELTS Course Preview Video'
    },
    {
      type: 'image',
      src: '/mobile_banner.jpg',
      alt: 'Course Overview'
    },
    {
      type: 'image',
      src: '/bg-gradient.jpeg',
      alt: 'Course Materials'
    }
  ];

  const courseDetails = [
    'কোর্স করেছেন ৩০০৬+ জন',
    'সময় লাগবে ৫০ ঘন্টা',
    '৫৪টি ভিডিও',
    '১০টি রিভিশন এবং ১০টি নিউজলেটার মক টেস্ট',
    '৩৮টি লেকচার শিট',
    '২৫টি ভিডিও লেকচার',
    '১টি ফ্রি হ্যান্ডনোট বই',
    'ফেসবুক সাপোর্ট গ্রুপ',
    'কোর্সের নোয়াল আজীবন'
  ];

  const handleEnroll = () => {
    // Handle enrollment logic
    console.log('Enrolling in course...');
  };

  return (
    <section className=" hero-section text-white min-h-[300px] md:min-h-[300px]">
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
            IELTS Course by Munzereen Shahid
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
                  <span className="whitespace-pre-wrap text-[#A3A3A3]">
                    Academic IELTS এবং General Training IELTS- এর কমপ্লিট
                    প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর
                    গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই
                    জয়েন করুন আমাদের IELTS Course-এ।{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Summary Component */}
        <div className="order-2 md:order-2 flex-shrink-0 w-full md:w-[348px] lg:w-[448px]  absolute right-0 md:top-[50px] md:absolute">
          <CourseSummary
            carouselItems={carouselItems}
            price={3850}
            originalPrice={5000}
            discount="১১৫০ টাকা ছাড়"
            ctaText="কোর্সটি কিনুন"
            courseDetails={courseDetails}
            onEnroll={handleEnroll}
          />
        </div>
      </div>
    </section>
  );
}
