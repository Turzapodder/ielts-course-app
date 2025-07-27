import { Suspense } from 'react';
import IELTSCoursePage from '@/components/IELTSCoursePage';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <IELTSCoursePage />
    </Suspense>
  );
}
