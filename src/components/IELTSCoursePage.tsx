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
        <HeroSection 
          title={data.title}
          description={data.description}
          instructor={data.instructors?.[0]}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <VideoTrailer media={data.media} />
              <CourseStructure sections={data.sections} />
              <LearningObjectives sections={data.sections} />
              <CourseDetails sections={data.sections} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <InstructorSection instructors={data.instructors} />
                <CTASection 
                  ctaText={data.cta_text}
                  price={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}