import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Support() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">💝 후원하기</h2>
        <p className="text-gray-600 mb-6">
          이재명 대통령을 응원하는 마음을 전해주세요. 
          여러분의 소중한 의견과 응원이 큰 힘이 됩니다.
        </p>
        
        {/* 후원 폼 링크 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">📝 후원 폼</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://forms.gle/leejaemyung-support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2 text-lg">Google Form</h4>
              <p className="text-gray-600 mb-4">Google Form을 통한 후원 메시지 전달</p>
              <Button onClick={() => window.open('https://forms.gle/leejaemyung-support', '_blank')}>
                후원 폼 작성하기
              </Button>
            </a>
            
            <a 
              href="https://naver.me/leejaemyung-support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2 text-lg">네이버 폼</h4>
              <p className="text-gray-600 mb-4">네이버 폼을 통한 후원 메시지 전달</p>
              <Button onClick={() => window.open('https://naver.me/leejaemyung-support', '_blank')}>
                후원 폼 작성하기
              </Button>
            </a>
          </div>
        </div>

        {/* 후원 유형 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🎯 후원 유형</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold mb-2">💌 응원 메시지</h4>
              <p className="text-gray-600">대통령에게 전하고 싶은 응원의 말씀을 남겨주세요</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold mb-2">💡 정책 제안</h4>
              <p className="text-gray-600">국정 운영에 대한 의견이나 정책 제안을 해주세요</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h4 className="font-semibold mb-2">🤝 자원봉사</h4>
              <p className="text-gray-600">정치 활동이나 지역 행사에 참여하고 싶은 분들</p>
            </div>
          </div>
        </div>

        {/* 소통 채널 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">📞 소통 채널</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="https://twitter.com/leejaemyung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">🐦 Twitter</h4>
              <p className="text-gray-600">공식 Twitter 계정</p>
            </a>
            
            <a 
              href="https://www.instagram.com/leejaemyung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📷 Instagram</h4>
              <p className="text-gray-600">공식 Instagram 계정</p>
            </a>
            
            <a 
              href="https://www.facebook.com/leejaemyung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📘 Facebook</h4>
              <p className="text-gray-600">공식 Facebook 페이지</p>
            </a>
            
            <a 
              href="https://www.youtube.com/@leejaemyung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors text-center"
            >
              <h4 className="font-semibold mb-2">📺 YouTube</h4>
              <p className="text-gray-600">공식 YouTube 채널</p>
            </a>
          </div>
        </div>

        {/* 관리자 안내 */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">⚠️ 관리자 안내</h3>
          <p className="text-gray-700">
            후원 폼을 설정하려면 Google Form 또는 네이버 폼을 생성하고 링크를 업데이트하세요. 
            소셜 미디어 링크도 실제 계정으로 수정해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 