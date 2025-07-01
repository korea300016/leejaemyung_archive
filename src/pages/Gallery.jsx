import React from 'react';
import Card from '../components/Card';

export default function Gallery() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">📸 사진/영상 갤러리</h2>
        <p className="text-gray-600 mb-6">
          이재명 대통령의 공식 활동과 일상의 순간들을 사진과 영상으로 확인하세요.
        </p>
        
        {/* YouTube 채널 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🎥 YouTube 채널</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://www.youtube.com/@user-ji8qk2xs8k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">📺 공식 YouTube 채널</h4>
              <p className="text-gray-600">이재명 대통령의 공식 YouTube 채널에서 최신 영상을 확인하세요</p>
            </a>
            
            <a 
              href="https://www.youtube.com/results?search_query=이재명+대통령" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">🔍 이재명 관련 영상 검색</h4>
              <p className="text-gray-600">YouTube에서 이재명 대통령 관련 영상을 검색합니다</p>
            </a>
          </div>
        </div>

        {/* Google Photos */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">📷 Google Photos 앨범</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://photos.google.com/share/AF1QipM..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">🏛️ 공식 활동 사진</h4>
              <p className="text-gray-600">대통령의 공식 활동과 행사 사진들을 확인하세요</p>
            </a>
            
            <a 
              href="https://photos.google.com/share/AF1QipM..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">👥 국민과 함께하는 순간</h4>
              <p className="text-gray-600">국민들과 함께하는 따뜻한 순간들을 담은 사진들</p>
            </a>
          </div>
        </div>

        {/* 관리자 안내 */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">⚠️ 관리자 안내</h3>
          <p className="text-gray-700">
            새로운 사진이나 영상을 추가하려면 Google Photos에 업로드 후 공유 링크를 생성하거나, 
            YouTube 영상 링크를 업데이트하세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 