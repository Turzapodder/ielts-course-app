'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchProductData } from '@/store/features/product/productSlice';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import InstructorSection from './sections/InstructorSection';
import CourseStructure from './sections/CourseStructure';
import LearningObjectives from './sections/LearningObjectives';
import CourseDetails from './sections/CourseDetails';
import VideoTrailer from './sections/VideoTrailer';
import CTASection from './sections/CTASection';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';
import Footer from './sections/Footer';
import ConditionalBanner from './ui/ConditionalBanner';
import InstructorProfile from './sections/InstructorProfile';
import CourseFeatures from './sections/CourseStructure';
import GroupJoinEngagement from './sections/GroupJoinEngagementData';
import CourseExclusiveFeatures from './sections/CourseExclusive';


export default function IELTSCoursePage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data) {
    return <ErrorMessage message="No course data available" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Conditional Banner */}
        <ConditionalBanner
          desktopImage="/dasktop_banner.jpg"
          mobileImage="/mobile_banner.jpg"
          alt="IELTS Course Banner"
        />
        <HeroSection
          title={data.title}
          description={data.description}
          instructor={data.instructors?.[0]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            
            <div className="lg:col-span-2 space-y-8">
              <InstructorProfile
                name="Munzereen Shahid"
                qualifications={[
                  "MSc (English), University of Oxford (UK);",
                  "BA, MA (English), University of Dhaka;"
                ]}
                ieltsScore="8.5"
                image="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
              />
              <CourseFeatures />
              <GroupJoinEngagement />
              <LearningObjectives sections={data.sections} />
              <CourseExclusiveFeatures />
              <CourseDetails sections={data.sections} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <InstructorSection instructors={data.instructors} />
                {/* <CTASection
                    price={price}
                    originalPrice={originalPrice}
                    discount={discount}
                    ctaText={ctaText}
                    courseDetails={courseDetails}
                    onEnroll={onEnroll}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}