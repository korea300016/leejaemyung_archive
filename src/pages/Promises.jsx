import React from 'react';
import Card from '../components/Card';

export default function Promises() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">🎯 주요 공약</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🏛️ 대통령실</h3>
            <p className="text-gray-600 mb-4">
              공식 대통령실 웹사이트에서 정책과 공약을 확인하세요.
            </p>
            <a 
              href="https://www.president.go.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              대통령실 방문
            </a>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📱 소셜 미디어</h3>
            <p className="text-gray-600 mb-4">
              공식 소셜 미디어에서 실시간 소식을 확인하세요.
            </p>
            <a 
              href="#" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              소셜 미디어 보기
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">💰 경제 정책</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 중소기업과 자영업자 지원 강화</li>
              <li>• 일자리 창출 및 경제 활성화</li>
              <li>• 디지털 경제 전환 지원</li>
              <li>• 금융 시스템 안정성 확보</li>
            </ul>
          </div>

          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🏠 사회 정책</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 주택 정책 개선 및 공급 확대</li>
              <li>• 교육 혁신 및 청년 정책 강화</li>
              <li>• 의료 복지 체계 구축</li>
              <li>• 사회 안전망 강화</li>
            </ul>
          </div>

          <div className="p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🌍 환경 정책</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 탄소 중립 목표 달성</li>
              <li>• 신재생 에너지 확대</li>
              <li>• 환경 보호 및 생태계 보전</li>
              <li>• 지속 가능한 발전 추진</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🌏 외교 정책</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 한미 동맹 강화</li>
              <li>• 동북아 평화 협력</li>
              <li>• 글로벌 협력 확대</li>
              <li>• 국제적 위상 제고</li>
            </ul>
          </div>

          <div className="p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">💻 디지털 정책</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 디지털 정부 구축</li>
              <li>• AI 및 첨단 기술 육성</li>
              <li>• 디지털 인프라 확충</li>
              <li>• 사이버 보안 강화</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}