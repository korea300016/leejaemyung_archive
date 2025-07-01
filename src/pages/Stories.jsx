import React from 'react';
import Card from '../components/Card';

export default function Stories() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">📖 이야기 모음</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🎥 YouTube 최근 영상</h3>
            <p className="text-gray-600 mb-4">
              이재명 대통령의 최신 연설과 인터뷰 영상을 확인하세요.
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
            <h3 className="text-xl font-semibold mb-4 text-primary">📱 공식 채널</h3>
            <p className="text-gray-600 mb-4">
              공식 소셜 미디어에서 대통령의 이야기를 확인하세요.
            </p>
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              소셜 미디어 보기
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🏛️ 대통령의 철학</h3>
            <p className="text-gray-700 leading-relaxed">
              "국민이 주인인 나라, 모든 국민이 존엄하게 살 수 있는 사회를 만들겠습니다. 
              공정하고 정의로운 사회, 더불어 함께하는 미래를 위해 노력하겠습니다."
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🌱 지속 가능한 미래</h3>
            <p className="text-gray-700 leading-relaxed">
              "환경과 경제의 조화를 이루는 지속 가능한 발전을 추진하겠습니다. 
              미래 세대를 위한 깨끗한 환경을 만들어가겠습니다."
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🤝 국민과 함께</h3>
            <p className="text-gray-700 leading-relaxed">
              "국민의 목소리를 듣고, 국민과 함께하는 정책을 펼치겠습니다. 
              모든 정책은 국민을 위한 것이어야 합니다."
            </p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">💻 디지털 혁신</h3>
            <p className="text-gray-700 leading-relaxed">
              "디지털 기술을 활용하여 더 나은 정부 서비스를 제공하겠습니다. 
              국민이 편리하게 이용할 수 있는 디지털 정부를 구축하겠습니다."
            </p>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">📝 관리자 안내</h4>
          <p className="text-yellow-700 text-sm">
            새로운 이야기나 영상이 있으면 업데이트해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 