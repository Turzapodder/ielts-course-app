"use client";

import { useRef, useState, useEffect } from "react";
import { FAQ, Instructor, Testimonial as APITestimonial, Checklist, Feature, GroupJoinEngagement as APIGroupJoinEngagement, FeatureExplanation, Pointer, AboutItem, useGetCourseDataQuery, getInstructors, getTestimonials, getFeatures, getGroupJoinEngagement, getFeatureExplanations, getPointers, getAboutInfo, getSectionName, getAllSectionNames } from "@/store/api/courseApi";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";

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
import { Testimonial } from '@/types/testimonial';
import { LearningOutcome } from '@/types/courseOutcome';
import { AccordionItemProps } from '@/types/accordion';
import { CourseFeature } from '@/types/courseStructure';
import { GroupJoinEngagementData } from '@/types/groupJoinEngagement';
import { ExclusiveFeature } from '@/types/courseExclusive';
import { CarouselItem } from '@/types/carousel';
import CTASection from "./ui/CTASection";





export default function IELTSCoursePage() {
  const { data, isLoading, error } = useGetCourseDataQuery('ielts-course');
  const heroSectionRef = useRef<HTMLElement>(null);
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
  const instructorSectionName = data ? getSectionName(data.sections, 'instructors') : 'কোর্স ইন্সট্রাক্টর';
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
  const groupJoinEngagementData: GroupJoinEngagementData[] = apiGroupJoinEngagement.map((item) => ({
    id: item.id,
    backgroundImageUrl: item.background.image,
    backgroundColor: `linear-gradient(135deg, ${item.background.primary_color} 0%, ${item.background.secondary_color} 100%)`,
    iconUrl: item.top_left_icon_img,
    title: item.title,
    description: item.description,
    buttonText: item.cta.text,
    thumbnailUrl: item.thumbnail,
    variant: "default",
    onButtonClick: () => {
      if (item.cta.clicked_url) {
        window.open(item.cta.clicked_url, '_blank');
      }
    },
  }));

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
        // If HeroSection is NOT intersecting (i.e., scrolled out of view), show CTA
        setShowSidebarCTA(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "-100px 0px -100px 0px", // Trigger when hero section is mostly out of view
        threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for better detection
      }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [data]); // Add data dependency to re-run when data loads


  const handleEnroll = () => {
    // Handle enrollment logic
    console.log("Enrolling in course...");
  };
  
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
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content and Sidebar Container */}
          <div className="container flex flex-col gap-4 lg:flex-row lg:gap-12">
            {/* Main Content Column */}
            <section className="order-2 flex-1 lg:order-1 lg:max-w-[calc(100%_-_448px)] space-y-8">
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
                <GroupJoinEngagement data={groupJoinEngagementData[0]} />
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
            <section className="hidden w-full lg:max-w-[400px] order-1 lg:order-2 sticky top-8 space-y-6">
              {/* Static sidebar content can go here */}
            </section>
          </div>
        </div>
        
        {/* Sticky Left CTA Section - Shows when hero CTA is out of view */}
         {showSidebarCTA && (
           <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
             <div className="bg-white shadow-2xl rounded-lg border border-gray-200 max-w-[350px]">
               <CTASection
                 courseDetails={courseDetails}
               />
             </div>
           </div>
         )}
      </main>
      <Footer />
    </div>
  );
}
