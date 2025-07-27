import Image from 'next/image';

interface Instructor {
  name: string;
  designation: string;
  image: string;
}

interface HeroSectionProps {
  title: string;
  description: string;
  instructor?: Instructor;
}

export default function HeroSection({ title, description, instructor }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              IELTS Preparation Course
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            
            <div 
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
            {instructor && (
              <div className="flex items-center space-x-4 pt-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={instructor.image || '/placeholder-instructor.jpg'}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{instructor.name}</p>
                  <p className="text-white/80">{instructor.designation}</p>
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">50+ Video Lectures</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Mock Tests Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Live Doubt Solving</span>
              </div>
            </div>
          </div>
          
          {/* Stats/Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">11,000+</div>
              <div className="text-sm text-white/80">Global Institutions Accept IELTS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">8.5</div>
              <div className="text-sm text-white/80">Instructor&apos;s IELTS Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">600+</div>
              <div className="text-sm text-white/80">Vocabulary Words</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">20</div>
              <div className="text-sm text-white/80">Mock Tests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}