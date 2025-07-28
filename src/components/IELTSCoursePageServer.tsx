import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from './ui/LoadingSpinner';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ConditionalBanner from './ui/ConditionalBanner';

// Dynamic import for the main client component
const IELTSCoursePageClient = dynamic(() => import('@/components/IELTSCoursePageClient'), {
  loading: () => <LoadingSpinner />
});

// Server component for static content
export default function IELTSCoursePageServer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Static server-rendered components */}
      <Header />
      
      <main>
        {/* Conditional Banner - Server rendered */}
        <ConditionalBanner
          desktopImage="/dasktop_banner.jpg"
          mobileImage="/mobile_banner.jpg"
          alt="IELTS Course Banner"
          className="bg-black"
        />
        
        {/* Client component with all dynamic functionality */}
        <Suspense fallback={<LoadingSpinner />}>
          <IELTSCoursePageClient />
        </Suspense>
      </main>
      
      {/* Static server-rendered footer */}
      <Footer />
    </div>
  );
}