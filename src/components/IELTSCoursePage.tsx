"use client";

import { useRef, useState, useEffect } from "react";
import { FAQ, Checklist, useGetCourseDataQuery, getInstructors, getTestimonials, getFeatures, getGroupJoinEngagement, getPointers, getAboutInfo, getSectionName, getFeatureExplanations } from "@/store/api/courseApi";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import { useLanguage } from '@/contexts/LanguageContext';

import LoadingSpinner from "./ui/LoadingSpinner";
import ErrorMessage from "./ui/ErrorMessage";
import Footer from "./sections/Footer";
import ConditionalBanner from "./ui/ConditionalBanner";
import InstructorProfile from "./sections/InstructorProfile";
import CourseFeatures from "./sections/CourseStructure";
import GroupJoinEngagement from "./sections/GroupJoinEngagementData";
import CourseExclusiveFeatures from "./sections/CourseExclusive";
import TestimonialSlider from "./ui/TestimonialSlider";
import LearningOutcomes from "./sections/CourseOutcome";
import UniversalAccordion from "./ui/Accordion";
import { Testimonial, LearningOutcome, CourseFeature, GroupJoinEngagementData, ExclusiveFeature, CarouselItem } from '@/utils/types';
import CTASection from "./ui/CTASection";





export default function IELTSCoursePage() {
  const { language } = useLanguage();
  const { data, isLoading, error } = useGetCourseDataQuery({ courseSlug: 'ielts-course', language });
  const heroSectionRef = useRef<HTMLElement>(null);
  const floatingSectionRef = useRef<HTMLDivElement>(null);
  const [showSidebarCTA, setShowSidebarCTA] = useState(false);

  const faqSection = data?.sections.find((section) => section.type === 'faq');
  const instructors = data ? getInstructors(data.sections) : [];
  const apiTestimonials = data ? getTestimonials(data.sections) : [];
  const apiFeatures = data ? getFeatures(data.sections) : [];
  const apiGroupJoinEngagement = data ? getGroupJoinEngagement(data.sections) : [];
  const apiFeatureExplanations = data ? getFeatureExplanations(data.sections) : [];
  const apiPointers = data ? getPointers(data.sections) : [];
  const apiAboutInfo = data ? getAboutInfo(data.sections) : [];

  // Extract preview_gallery media data for carousel
  const previewGalleryMedia = data?.media?.filter(media => media.name === 'preview_gallery') || [];
  const carouselItems: CarouselItem[] = previewGalleryMedia.map((media, index) => ({
    type: media.resource_type,
    src: media.resource_value,
    thumbnail: media.thumbnail_url || media.resource_value,
    alt: `Course Preview ${index + 1}`
  }));

  // Extract section names for component titles
  const featuresSectionName = data ? getSectionName(data.sections, 'features') : 'কোর্সটি যেভাবে সাজানো হয়েছে';
  const pointersSectionName = data ? getSectionName(data.sections, 'pointers') : 'What you will learn by doing the course';
  const aboutSectionName = data ? getSectionName(data.sections, 'about') : 'About Course';
  const testimonialsSectionName = data ? getSectionName(data.sections, 'testimonials') : 'Students opinion';
  const featureExplanationsSectionName = data ? getSectionName(data.sections, 'feature_explanations') : 'কোর্স এক্সক্লুসিভ ফিচার';
  const faqSectionName = data ? getSectionName(data.sections, 'faq') : 'Frequently Asked Questions';

  const accordionData = (faqSection?.values as FAQ[])?.map((item) => ({
    value: item.id,
    trigger: item.question,
    content: <div dangerouslySetInnerHTML={{ __html: item.answer }} />,
  })) || [];

  // Transform API about info to accordion format
  const aboutAccordionData = apiAboutInfo.map((item) => ({
    value: item.id,
    trigger: item.title,
    content: <div dangerouslySetInnerHTML={{ __html: item.description }} />,
  }));

  // Transform API testimonials to component format
  const testimonials: Testimonial[] = apiTestimonials.map((testimonial) => ({
    id: testimonial.id,
    name: testimonial.name,
    avatar: testimonial.profile_image || '/avatar.webp',
    result: testimonial.description || 'Student',
    videoUrl: testimonial.video_url,
    thumbnail: testimonial.thumb,
  }));

  // Transform API features to component format
  const courseFeatures: CourseFeature[] = apiFeatures.map((feature) => ({
    id: feature.id,
    title: feature.title,
    description: feature.subtitle,
    iconUrl: feature.icon,
    iconAlt: feature.title,
  }));

  // Transform API group join engagement to component format
  const groupJoinEngagementData = apiGroupJoinEngagement;

  // Transform API feature explanations to component format
  const exclusiveFeatures: ExclusiveFeature[] = apiFeatureExplanations.map((featureExplanation) => ({
    id: featureExplanation.id,
    title: featureExplanation.title,
    points: featureExplanation.checklist.map((item, index) => ({
      id: `${featureExplanation.id}-${index}`,
      text: item,
    })),
    imageUrl: featureExplanation.video_thumbnail || featureExplanation.file_url,
    imageAlt: featureExplanation.title,
    imageWidth: 250,
    imageHeight: 200,
  }));

  // Transform API pointers to LearningOutcome format
  const dynamicOutcomes: LearningOutcome[] = apiPointers.map((pointer) => ({
    id: pointer.id,
    text: pointer.text,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If floating section is NOT intersecting (i.e., scrolled out of view), show CTA
        setShowSidebarCTA(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "-50px 0px -50px 0px", // Trigger when floating section is mostly out of view
        threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for better detection
      }
    );

    if (floatingSectionRef.current) {
      observer.observe(floatingSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (floatingSectionRef.current) {
        observer.unobserve(floatingSectionRef.current);
      }
    };
  }, [data]); // Add data dependency to re-run when data loads



  
  // Extract course details from API checklist data
  const courseDetails = data?.checklist?.map((item: Checklist) => item.text) || [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message="Failed to load course data" />;
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
          className="bg-black"
        />
        <HeroSection
         ref={heroSectionRef}
          title={data?.title || ''}
          description={data?.description || ''}
          courseDetails={courseDetails}
          carouselItems={carouselItems}
          floatingSectionRef={floatingSectionRef as React.RefObject<HTMLDivElement>}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content and Sidebar Container */}
          <div className="container flex flex-col gap-4 lg:flex-row lg:gap-12">
            {/* Main Content Column */}
            <section className="order-2 flex-1 lg:order-1 lg:max-w-[calc(100%_-_448px)] space-y-8">
              {/* Mobile/Tablet CTA Section - Shows before instructor on smaller screens */}
              <div className="lg:hidden bg-white shadow-lg rounded-lg border border-gray-200">
                <CTASection
                  courseDetails={courseDetails}
                />
              </div>
              
              {instructors.length > 0 && (
                <InstructorProfile
                  name={instructors[0].name}
                  profileUrl={instructors[0].has_instructor_page ? `/skills/instructors/${instructors[0].slug}/` : '#'}
                  qualifications={[
                    instructors[0].description
                  ]}
                  ieltsScore="8.5"
                  image={instructors[0].image}
                />
              )}
              <CourseFeatures title={featuresSectionName} features={courseFeatures} />
              {groupJoinEngagementData.length > 0 && (
                <GroupJoinEngagement data={groupJoinEngagementData[0]}  />
              )}
              <LearningOutcomes
                title={pointersSectionName}
                outcomes={dynamicOutcomes}
                checkColor="text-blue-500"
                textColor="text-gray-600"
                className="my-8"
              />
              {aboutAccordionData.length > 0 && (
                <div className="mb-8 about-course">
                  <h2 className="text-2xl font-bold mb-8">
                    {aboutSectionName}
                  </h2>
                  <UniversalAccordion
                    type="single"
                    items={aboutAccordionData}
                    collapsible
                    className="px-6 relative"
                  />
                </div>
              )}
              <CourseExclusiveFeatures title={featureExplanationsSectionName} features={exclusiveFeatures} />
              {testimonials.length > 0 && (
                <TestimonialSlider
                  testimonials={testimonials}
                  title={testimonialsSectionName}
                  showDots={true}
                  showArrows={true}
                  className="my-8"
                />
              )}
              {/* FAQ Section */}
              {faqSection && (
                <div className="mb-8 faq-section">
                  <h2 className="text-2xl font-bold mb-8">
                    {faqSectionName}
                  </h2>
                  <UniversalAccordion
                    type="single"
                    items={accordionData}
                    collapsible
                    className="px-6 relative"
                  />
                </div>
              )}
            </section>

            {/* Sidebar Column */}
            <section className="hidden lg:block w-full lg:max-w-[400px] order-1 lg:order-2 sticky top-8 space-y-6">
              {/* CTA Section - Shows when hero CTA is out of view */}
              {showSidebarCTA && (
                <div className="bg-white shadow-lg rounded-lg border border-gray-200 sticky top-[112px]">
                  <CTASection
                    courseDetails={courseDetails}
                  />
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
