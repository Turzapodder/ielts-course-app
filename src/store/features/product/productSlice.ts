import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Instructor {
  name: string;
  designation: string;
  image: string;
}

interface Media {
  type: string;
  url: string;
  thumbnail?: string;
}

interface Section {
  type: string;
  title: string;
  content: string;
  items?: string[];
}

interface SEO {
  title: string;
  description: string;
  keywords: string;
  og_title: string;
  og_description: string;
  og_image: string;
}

interface ProductData {
  id: string;
  title: string;
  description: string;
  price: number;
  cta_text: string;
  instructors: Instructor[];
  media: Media[];
  sections: Section[];
  checklist: string[];
  seo: SEO;
}

interface ProductState {
  data: ProductData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

// Fallback data based on the website content
const fallbackData: ProductData = {
  id: 'ielts-course',
  title: 'Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]',
  description: 'Master IELTS with expert guidance from Munzereen Shahid. 50+ video lectures, mock tests, and comprehensive preparation for all four skills.',
  price: 1000,
  cta_text: 'Enroll Now',
  instructors: [
    {
      name: 'Munzereen Shahid',
      designation: 'MSc (English), University of Oxford (UK); BA, MA (English), University of Dhaka; IELTS: 8.5',
      image: '/placeholder-instructor.jpg'
    }
  ],
  media: [
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: '/placeholder-video.jpg'
    }
  ],
  sections: [
    {
      type: 'features',
      title: 'Course Features',
      content: '50+ ভিডিও লেকচার, 38টি লেকচার শিট, রিডিং এন্ড লিসিনিং মক টেস্ট, ডাউট সল্ভিং লাইভ ক্লাস',
      items: [
        '50+ ভিডিও লেকচার',
        '38টি লেকচার শিট',
        '10 Reading ও 10 Listening Mock Tests',
        'সাপ্তাহিক জুম ক্লাসে ডাউট সল্ভিং'
      ]
    },
    {
      type: 'pointers',
      title: 'Learning Objectives',
      content: 'What you will learn from this course',
      items: [
        'IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি',
        'IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type',
        'IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি'
      ]
    },
    {
      type: 'about',
      title: 'About IELTS',
      content: 'যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও বেশি প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা রয়েছে।'
    }
  ],
  checklist: [
    'IELTS Academic ও General Training এর Overview',
    'Reading, Writing, Listening ও Speaking এর স্ট্র্যাটেজি',
    '600+ Vocabulary',
    '20টি Mock Test',
    'Live Doubt Solving Sessions'
  ],
  seo: {
    title: 'Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]',
    description: 'Master IELTS with expert guidance from Munzereen Shahid. 50+ video lectures, mock tests, and comprehensive preparation for all four skills.',
    keywords: 'IELTS, Bangladesh, Munzereen Shahid, English, Test Preparation',
    og_title: 'Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]',
    og_description: 'Master IELTS with expert guidance from Munzereen Shahid. 50+ video lectures, mock tests, and comprehensive preparation for all four skills.',
    og_image: '/og-image.jpg'
  }
};

// Async thunk for fetching product data
export const fetchProductData = createAsyncThunk(
  'product/fetchProductData',
  async () => {
    try {
      const response = await fetch(
        'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en',
        {
          headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
          },
        }
      );
      
      if (!response.ok) {
        console.warn('API not available, using fallback data');
        return fallbackData;
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('API fetch failed, using fallback data:', error);
      return fallbackData;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product data';
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;