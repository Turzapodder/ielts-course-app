interface Media {
  type: string;
  url: string;
  thumbnail?: string;
}

interface VideoTrailerProps {
  media: Media[];
}

export default function VideoTrailer({ media }: VideoTrailerProps) {
  const videoMedia = media?.find(item => item.type === 'video' || item.url?.includes('youtube'));
  
  if (!videoMedia) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Preview</h3>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 9H4v2h1V9zm0 4H4v2h1v-2z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-500">Course preview video will be available soon</p>
          </div>
        </div>
      </div>
    );
  }

  // Extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(videoMedia.url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoMedia.url;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Preview</h3>
      
      <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          title="Course Preview Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
          <div className="text-sm text-gray-600">Video Lectures</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 mb-1">20</div>
          <div className="text-sm text-gray-600">Mock Tests</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 mb-1">600+</div>
          <div className="text-sm text-gray-600">Vocabulary</div>
        </div>
      </div>
    </div>
  );
}