import Image from 'next/image';

interface Instructor {
  name: string;
  designation: string;
  image: string;
}

interface InstructorSectionProps {
  instructors: Instructor[];
}

export default function InstructorSection({ instructors }: InstructorSectionProps) {
  if (!instructors || instructors.length === 0) {
    return null;
  }

  const mainInstructor = instructors[0];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Course Instructor</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={mainInstructor.image || '/placeholder-instructor.jpg'}
              alt={mainInstructor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg text-gray-900">
              {mainInstructor.name}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {mainInstructor.designation}
            </p>
          </div>
        </div>
        
        {/* Instructor Credentials */}
        <div className="border-t pt-4">
          <h5 className="font-medium text-gray-900 mb-3">Qualifications</h5>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>MSc (English), University of Oxford (UK)</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>BA, MA (English), University of Dhaka</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>IELTS Score: 8.5</span>
            </div>
          </div>
        </div>
        
        {/* Instructor Stats */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">5+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1000+</div>
              <div className="text-xs text-gray-600">Students Taught</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}