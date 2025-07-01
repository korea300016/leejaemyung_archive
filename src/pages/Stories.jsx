import React from 'react';
import Card from '../components/Card';

export default function Stories() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">📖 이야기 모음</h2>
        <p className="text-gray-600 mb-6">
          이재명 대통령의 철학, 생각, 그리고 국민과 함께하는 이야기들을 담은 글들을 읽어보세요.
        </p>
        
        {/* 유튜브 최근 영상 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">📺 최근 영상</h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🎥</div>
              <p className="text-gray-600">유튜브 최근 영상이 여기에 표시됩니다</p>
              <p className="text-sm text-gray-500 mt-2">관리자가 유튜브 임베드 코드를 추가하세요</p>
            </div>
          </div>
        </div>

        {/* 공식 채널 및 소셜 미디어 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🌐 공식 채널</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="https://www.president.go.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">🏛️ 대통령실 홈페이지</h4>
              <p className="text-gray-600">공식 대통령실 웹사이트</p>
            </a>
            
            <a 
              href="https://facebook.com/jaemyunglee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📘 페이스북</h4>
              <p className="text-gray-600">이재명의 페이스북</p>
            </a>
            
            <a 
              href="https://twitter.com/jaemyung_lee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">🐦 트위터</h4>
              <p className="text-gray-600">이재명의 트위터</p>
            </a>
            
            <a 
              href="https://instagram.com/2_jaemyung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📷 인스타그램</h4>
              <p className="text-gray-600">이재명의 인스타그램</p>
            </a>
            
            <a 
              href="https://blog.naver.com/jaemyunglee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📝 네이버 블로그</h4>
              <p className="text-gray-600">이재명의 블로그</p>
            </a>
            
            <a 
              href="https://story.kakao.com/ch/jaemyung_lee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">💬 카카오채널</h4>
              <p className="text-gray-600">이재명의 카카오채널</p>
            </a>
          </div>
        </div>

        {/* 관리자 안내 */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">⚠️ 관리자 안내</h3>
          <p className="text-gray-700">
            유튜브 영상을 추가하려면 유튜브 임베드 코드를 위의 영상 섹션에 삽입하세요.
            새로운 소셜 미디어 계정이 추가되면 링크를 업데이트하세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 