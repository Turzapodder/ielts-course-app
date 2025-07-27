interface Section {
  type: string;
  title: string;
  content: string;
  items?: string[];
}

interface CourseDetailsProps {
  sections: Section[];
}

export default function CourseDetails({ sections }: CourseDetailsProps) {
  const aboutSection = sections?.find(section => section.type === 'about' || section.type === 'details');
  
  const targetAudience = [
    "যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।",
    "যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।",
    "IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা থেকে শুরু করবেন তা জানেন না।",
    "যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।",
    "যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।",
    "স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।"
  ];
  
  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">কোর্স সম্পর্কে বিস্তারিত</h3>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও বেশি প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা রয়েছে। 
            এই পরীক্ষায় অত্যন্ত সুনিপুণভাবে পরীক্ষার্থীর ইংরেজি বলা, পড়া, শোনা ও লেখার ক্ষমতাকে যাচাই করা হয়।
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            বিদেশি ভাষা হওয়ায় অনেকেই ইংরেজি গ্রামার নিয়ে ভয়ে থাকেন। তবে আনন্দের কথা হলো, IELTS পরীক্ষাটি ব্যাকরণভিত্তিক নয়। 
            এটি মূলত একটি ভাষাভিত্তিক নিরীক্ষা পদ্ধতি। কাঙ্ক্ষিত স্কোর অর্জনের জন্য ইংরেজি ভাষার চারটি দক্ষতা আপনার প্রয়োজন: 
            পড়তে পারা, লিখতে পারা, শুনতে পারা এবং কথা বলতে পারা।
          </p>
        </div>
        
        {aboutSection && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">{aboutSection.title}</h4>
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutSection.content }}
            />
          </div>
        )}
      </div>
      
      {/* Target Audience */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">এই কোর্সটি কাদের জন্য</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetAudience.map((audience, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{audience}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* IELTS Information */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">IELTS সম্পর্কে জানুন</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-blue-900 mb-2">Reading</h4>
            <p className="text-sm text-blue-700">60 minutes, 40 questions</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-green-900 mb-2">Listening</h4>
            <p className="text-sm text-green-700">30 minutes, 40 questions</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-purple-900 mb-2">Speaking</h4>
            <p className="text-sm text-purple-700">11-14 minutes, 3 parts</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg text-red-900 mb-2">Writing</h4>
            <p className="text-sm text-red-700">60 minutes, 2 tasks</p>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-yellow-900 mb-2">Important Note</h4>
              <p className="text-yellow-800 leading-relaxed">
                IELTS স্কোর ২ বছরের জন্য বৈধ থাকে। পরীক্ষার ফলাফল সাধারণত ১৩ দিনের মধ্যে প্রকাশিত হয়। 
                Band Score ০ থেকে ৯ পর্যন্ত হয়ে থাকে, যেখানে ৯ সর্বোচ্চ স্কোর।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}