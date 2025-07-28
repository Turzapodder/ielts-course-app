import React from 'react';
import { CTASectionProps } from '@/utils/types';

const CTASection: React.FC<CTASectionProps> = ({
  courseDetails,
}) => {

  return (
    <div className="p-4 price-summary">
      {/* Price Section */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl font-bold text-gray-900">৳ 1000</span>
          <span className="text-lg text-gray-500 line-through">৳ 1500</span>
          <div className="c-Tukmu inline-block"><p className="card-price">৳ 500</p></div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => console.log('Enroll button clicked')}
        className="w-full bg-green-600 hover:bg-green-700 border-b-4 border-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4 cursor-pointer"
      >
        কোর্সটি কিনুন
      </button>

      {/* Course Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">এই কোর্সে যা থাকছে</h3>
        <ul className="space-y-2">
          {courseDetails.map((detail, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                {/* Different icons for different types of content */}
                {detail.includes('কোর্স') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {detail.includes('সময়') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {detail.includes('ভিডিও') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
                {detail.includes('রিভিশন') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {detail.includes('লেকচার') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {detail.includes('সাপোর্ট') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {detail.includes('নোটস') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {!detail.includes('কোর্স') && !detail.includes('সময়') && !detail.includes('ভিডিও') && !detail.includes('রিভিশন') && !detail.includes('লেকচার') && !detail.includes('সাপোর্ট') && !detail.includes('নোটস') && (
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CTASection;
