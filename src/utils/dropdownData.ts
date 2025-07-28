import React from 'react';
import { NavDropdownData } from '@/utils/types';

// Icon components for better maintainability
const createIcon = (color: string, path: string): React.ReactElement => {
  return React.createElement(
    'div',
    { className: `w-5 h-5 ${color} rounded-full flex items-center justify-center` },
    React.createElement(
      'svg',
      {
        className: 'w-3 h-3 text-white',
        fill: 'currentColor',
        viewBox: '0 0 20 20',
        'aria-hidden': 'true'
      },
      React.createElement('path', { d: path })
    )
  );
};

// Centralized dropdown data for all navigation items
export const navigationDropdownData: NavDropdownData = {
  // ক্লাস ৬-১২ dropdown items
  'class-6-12': [
        {
      icon: createIcon('bg-pink-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'এইচএসসি',
      link: '/class/12'
    },
    {
      icon: createIcon('bg-red-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'দশম শ্রেণি',
      link: '/class/10'
    },
        {
      icon: createIcon('bg-orange-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'নবম শ্রেণি',
      link: '/class/9'
    },
        {
      icon: createIcon('bg-purple-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'অষ্টম শ্রেণি',
      link: '/class/8'
    },
        {
      icon: createIcon('bg-green-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'সপ্তম শ্রেণি',
      link: '/class/7'
    },
        {
      icon: createIcon('bg-blue-500', 'M12 14l9-5-9-5-9 5 9 5z'),
      text: 'ষষ্ঠ শ্রেণি',
      link: '/class/6'
    },

  ],

  // স্কিলস dropdown items
  'skills': [
       {
      icon: createIcon('bg-blue-500', 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'),
      text: 'সকল কোর্সসমূহ',
      link: '/courses/all'
    },
    {
      icon: createIcon('bg-green-500', 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'),
      text: 'ভাষা শিক্ষা',
      link: '/courses/language'
    },
    {
      icon: createIcon('bg-orange-500', 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z'),
      text: 'ফ্রিল্যান্সিং',
      link: '/courses/freelancing'
    },
    {
      icon: createIcon('bg-yellow-500', 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'),
      text: 'বান্ডেল',
      link: '/courses/bundle'
    },
    {
      icon: createIcon('bg-purple-500', 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'),
      text: 'ফিক্সড এন্ড আর্নিট',
      link: '/courses/fixed-earn'
    },
    {
      icon: createIcon('bg-blue-600', 'M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'),
      text: 'ডিজাইন এন্ড ক্রিয়েটিভ',
      link: '/courses/design'
    },
    {
      icon: createIcon('bg-indigo-500', 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z'),
      text: 'ক্যারিয়ার রেডিনেস',
      link: '/courses/career'
    },
    {
      icon: createIcon('bg-green-600', 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'),
      text: 'কিডস কোর্সসমূহ',
      link: '/courses/kids'
    },
    {
      icon: createIcon('bg-red-500', 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'),
      text: 'প্রোগ্রামিং কোর্সসমূহ',
      link: '/courses/programming'
    },
    {
      icon: createIcon('bg-purple-600', 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'),
      text: 'ফ্রি কোর্সসমূহ',
      link: '/courses/free'
    }
  ],

  // ভর্তি পরীক্ষা dropdown items
  'english-center': [
  {
    text: 'সকল প্রোগ্রামসমূহ',
    link: '/programs/all',
  },
  {
    text: 'IELTS প্রোগ্রাম',
    link: '/programs/ielts',
  },
  {
    text: 'স্পোকেন ইংলিশ (জুনিয়র)',
    link: '/programs/spoken-junior',
  },
  {
    text: 'ইংলিশ ফাউন্ডেশন প্রোগ্রাম',
    link: '/programs/foundation',
  },
  {
    text: 'কিডস ইংলিশ',
    link: '/programs/kids-english',
  }
],

  // অনলাইন ব্যাচ dropdown items
  'online-batch': [
    {
      text: 'অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণী)',
      link: '/online-batch/6th-10th'
    },
    {
      text: 'এইচএসসি',
      link: '/online-batch/11th-12th'
    },
  ],

  // আরও dropdown items (existing data)
  'more': [
  {
    text: 'চাকরি প্রস্তুতি কোর্সসমূহ',
    link: '/courses/job-preparation'
  },
  {
    text: 'ব্লগ',
    link: '/blog'
  },
  {
    text: 'বুক স্টোর',
    link: '/book-store'
  },
  {
    text: 'ফ্রি নোটস ও গাইড',
    link: '/free-notes'
  },
  {
    text: 'একাডেমিক ডিজিটাল কন্টেন্ট',
    link: '/academic-content'
  },
  {
    text: 'সার্টিফিকেট ভেরিফাই করুন',
    link: '/verify-certificate'
  },
  {
    text: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি',
    link: '/career'
  },
  {
    text: 'শিক্ষক হিসাবে যোগ দিন',
    link: '/join-as-teacher'
  },
  {
    text: 'অ্যাফিলিয়েট হিসাবে যোগ দিন',
    link: '/join-as-affiliate'
  }
]

};

// Navigation items configuration
export interface NavItem {
  key: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
}

export const navigationItems: NavItem[] = [
  {
    key: 'class-6-12',
    label: 'ক্লাস ৬-১২',
    hasDropdown: true
  },
  {
    key: 'skills',
    label: 'স্কিলস', 
    hasDropdown: true
  },
  {
    key: 'admission',
    label: 'ভর্তি পরীক্ষা',
    hasDropdown: false
  },
  {
    key: 'online-batch',
    label: 'অনলাইন ব্যাচ',
    hasDropdown: true
  },
  {
    key: 'english-center',
    label: 'ইংলিশ সেন্টার',
    hasDropdown: true
  },
  {
    key: 'more',
    label: 'আরও',
    hasDropdown: true
  }
];