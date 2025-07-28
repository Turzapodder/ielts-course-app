import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types based on the actual API response
interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface CTAText {
  name: string;
  value: string;
}

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanation {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

interface FAQ {
  answer: string;
  id: string;
  question: string;
}

interface Offer {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

interface GroupJoinEngagement {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Array<
    | Instructor
    | Feature
    | Pointer
    | AboutItem
    | FeatureExplanation
    | Testimonial
    | FAQ
    | Offer
    | GroupJoinEngagement
    | any
  >;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: any[];
  cta_text: CTAText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

interface APIResponse {
  code: number;
  data: CourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

// Helper function to extract specific section data
export const extractSectionByType = (sections: Section[], type: string) => {
  return sections.find(section => section.type === type);
};

// Helper function to get section name by type
export const getSectionName = (sections: Section[], type: string): string => {
  const section = extractSectionByType(sections, type);
  return section?.name || '';
};

// Helper function to get all section names with their types
export const getAllSectionNames = (sections: Section[]): { type: string; name: string }[] => {
  return sections.map(section => ({
    type: section.type,
    name: section.name
  }));
};

// Helper function to get instructors
export const getInstructors = (sections: Section[]): Instructor[] => {
  const instructorSection = extractSectionByType(sections, 'instructors');
  return (instructorSection?.values as Instructor[]) || [];
};

// Helper function to get features
export const getFeatures = (sections: Section[]): Feature[] => {
  const featureSection = extractSectionByType(sections, 'features');
  return (featureSection?.values as Feature[]) || [];
};

// Helper function to get pointers (what you'll learn)
export const getPointers = (sections: Section[]): Pointer[] => {
  const pointerSection = extractSectionByType(sections, 'pointers');
  return (pointerSection?.values as Pointer[]) || [];
};

// Helper function to get about information
export const getAboutInfo = (sections: Section[]): AboutItem[] => {
  const aboutSection = extractSectionByType(sections, 'about');
  return (aboutSection?.values as AboutItem[]) || [];
};

// Helper function to get testimonials
export const getTestimonials = (sections: Section[]): Testimonial[] => {
  const testimonialSection = extractSectionByType(sections, 'testimonials');
  return (testimonialSection?.values as Testimonial[]) || [];
};

// Helper function to get FAQs
export const getFAQs = (sections: Section[]): FAQ[] => {
  const faqSection = extractSectionByType(sections, 'faq');
  return (faqSection?.values as FAQ[]) || [];
};

// Helper function to get feature explanations
export const getFeatureExplanations = (sections: Section[]): FeatureExplanation[] => {
  const featureExplanationSection = extractSectionByType(sections, 'feature_explanations');
  return (featureExplanationSection?.values as FeatureExplanation[]) || [];
};

// Helper function to get offers
export const getOffers = (sections: Section[]): Offer[] => {
  const offerSection = extractSectionByType(sections, 'offers');
  return (offerSection?.values as Offer[]) || [];
};

// Helper function to get group join engagement
export const getGroupJoinEngagement = (sections: Section[]): GroupJoinEngagement[] => {
  const groupJoinSection = extractSectionByType(sections, 'group_join_engagement');
  return (groupJoinSection?.values as GroupJoinEngagement[]) || [];
};

// Helper function to get main video from media
export const getMainVideo = (media: Media[]): Media | null => {
  return media.find(item => 
    item.resource_type === 'video' && 
    item.name === 'preview_gallery'
  ) || null;
};

// Helper function to get thumbnail image
export const getThumbnailImage = (media: Media[]): Media | null => {
  return media.find(item => 
    item.resource_type === 'image' && 
    (item.name === 'thumbnail' || item.name === 'sqr_img')
  ) || null;
};

// Fallback data structure matching the real API
const fallbackData: CourseData = {
  slug: 'ielts-course',
  id: 153,
  title: 'IELTS Course by Munzereen Shahid',
  description: '<p class="tenms__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ। </span></p>',
  platform: 'skills',
  type: 'regular',
  modality: 'recorded',
  old_info: {
    cat_id: 21,
    course_id: 50,
    platform: 'skills',
    skills_cat_id: 90,
    slug: 'ielts-course'
  },
  start_at: '',
  media: [],
  checklist: [],
  seo: [],
  cta_text: {
    name: 'কোর্সটি কিনুন',
    value: 'enroll'
  },
  sections: [],
  is_cohort_based_course: false,
  secondary_cta_group: [],
  delivery_method: 'pathao'
};

// Define the API service
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.10minuteschool.com/',
    timeout: 10000,
  }),
  tagTypes: ['Course'],
  endpoints: (builder) => ({
    getCourseData: builder.query<CourseData, string>({
      queryFn: async (courseSlug) => {
        try {
          // Try the discovery service endpoint first
          const response = await fetch(
            `https://api.10minuteschool.com/discovery-service/api/v1/products/${courseSlug}`,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
          
          if (response.ok) {
            const apiResponse: APIResponse = await response.json();
            if (apiResponse.code === 200 && apiResponse.data) {
              return { data: apiResponse.data };
            }
          }
          
          // If that fails, try alternative endpoint
          const altResponse = await fetch(
            `https://api.10minuteschool.com/api/v1/products/${courseSlug}`,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
          
          if (altResponse.ok) {
            const apiResponse: APIResponse = await altResponse.json();
            if (apiResponse.code === 200 && apiResponse.data) {
              return { data: apiResponse.data };
            }
          }
          
          // If both fail, return fallback data
          console.warn('API endpoints not available, using fallback data');
          return { data: fallbackData };
          
        } catch (error) {
          console.warn('API request failed, using fallback data:', error);
          return { data: fallbackData };
        }
      },
      providesTags: (result, error, courseSlug) => [
        { type: 'Course', id: courseSlug }
      ],
    }),
    
    // Additional endpoint for getting course by ID
    getCourseDataById: builder.query<CourseData, number>({
      queryFn: async (courseId) => {
        try {
          const response = await fetch(
            `https://api.10minuteschool.com/discovery-service/api/v1/products/${courseId}`,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
          
          if (response.ok) {
            const apiResponse: APIResponse = await response.json();
            if (apiResponse.code === 200 && apiResponse.data) {
              return { data: apiResponse.data };
            }
          }
          
          console.warn('API endpoint not available, using fallback data');
          return { data: fallbackData };
          
        } catch (error) {
          console.warn('API request failed, using fallback data:', error);
          return { data: fallbackData };
        }
      },
      providesTags: (result, error, courseId) => [
        { type: 'Course', id: courseId }
      ],
    }),
  }),
});

// Export hooks for usage in functional components
export const { 
  useGetCourseDataQuery, 
  useGetCourseDataByIdQuery 
} = courseApi;

// Export types for use in components
export type {
  CourseData,
  Section,
  Media,
  Checklist,
  Instructor,
  Feature,
  Pointer,
  AboutItem,
  Testimonial,
  FAQ,
  FeatureExplanation,
  Offer,
  GroupJoinEngagement,
  APIResponse
};