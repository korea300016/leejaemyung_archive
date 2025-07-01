import React from 'react';
import Card from '../components/Card';

export default function Gallery() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">사진/영상 갤러리</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📺 YouTube 채널</h3>
            <p className="text-gray-600 mb-4">
              이재명 대통령의 공식 YouTube 채널에서 최신 영상을 확인하세요.
            </p>
            <a 
              href="https://www.youtube.com/@user-ji8qk9xs8k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              YouTube 채널 보기
            </a>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📸 사진 갤러리</h3>
            <p className="text-gray-600 mb-4">
              대통령의 일상과 공식 활동 사진을 Google Photos에서 확인하세요.
            </p>
            <a 
              href="https://photos.google.com/share/AF1QipM..." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              사진 갤러리 보기
            </a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">📝 관리자 안내</h4>
          <p className="text-yellow-700 text-sm">
            YouTube 채널 링크와 Google Photos 링크를 실제 URL로 업데이트해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 