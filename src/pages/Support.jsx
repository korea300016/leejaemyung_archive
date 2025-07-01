import React from 'react';
import Card from '../components/Card';

export default function Support() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">💝 후원하기</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📝 응원 메시지</h3>
            <p className="text-gray-600 mb-4">
              이재명 대통령을 응원하는 마음을 메시지로 전해주세요.
            </p>
            <a 
              href="https://forms.gle/example" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              응원 메시지 보내기
            </a>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">💰 후원하기</h3>
            <p className="text-gray-600 mb-4">
              대통령을 위한 후원금을 기부하실 수 있습니다.
            </p>
            <a 
              href="#" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              후원하기
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🎁 후원 유형</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl mb-2">💌</div>
                <h4 className="font-semibold mb-2">응원 메시지</h4>
                <p className="text-sm text-gray-600">따뜻한 응원의 말씀</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold mb-2">창작물</h4>
                <p className="text-sm text-gray-600">그림, 글, 영상 등</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl mb-2">💝</div>
                <h4 className="font-semibold mb-2">후원금</h4>
                <p className="text-sm text-gray-600">정치 자금 후원</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📞 소통 채널</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">📧 이메일</h4>
                <p className="text-gray-600">korea300016@gmail.com</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">📱 카카오톡</h4>
                <p className="text-gray-600">@이재명_공식</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📋 후원 안내</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 모든 후원은 자발적이며, 강요되지 않습니다.</li>
              <li>• 후원금은 정치 자금법에 따라 투명하게 관리됩니다.</li>
              <li>• 응원 메시지는 대통령에게 전달됩니다.</li>
              <li>• 개인정보는 안전하게 보호됩니다.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">📝 관리자 안내</h4>
          <p className="text-yellow-700 text-sm">
            Google Form 링크를 실제 URL로 업데이트하고, 후원 관련 정보를 추가해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 