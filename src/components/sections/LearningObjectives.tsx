import { LearningObjectivesProps } from '@/utils/types';

export default function LearningObjectives({ sections }: LearningObjectivesProps) {
  const objectivesSection = sections?.find(section => section.type === 'pointers' || section.type === 'objectives');
  
  const defaultObjectives = [
    "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
    "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
    "IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
    "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
    "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
    "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা"
  ];
  
  const objectives = objectivesSection?.items || defaultObjectives;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">কোর্সটি করে যা শিখবেন</h3>
      
      <div className="space-y-4">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">{objective}</p>
            </div>
          </div>
        ))}
      </div>
      
      
      {objectivesSection && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-lg text-gray-900 mb-4">{objectivesSection.title}</h4>
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: objectivesSection.content }}
          />
        </div>
      )}
    </div>
  );
}