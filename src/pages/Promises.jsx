import React from 'react';
import Card from '../components/Card';

export default function Promises() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">이재명 대통령 공약</h2>
        
        {/* 대통령실 및 소셜 링크 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🔗 대통령실 및 소셜 링크</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg flex items-center">
              <img src="/path/to/president-logo.png" alt="대통령실 로고" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="font-semibold mb-2">대통령실 홈페이지</h4>
                <a href="https://www.president.go.kr" className="text-blue-500 hover:underline">https://www.president.go.kr</a>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg flex items-center">
              <img src="/path/to/facebook-logo.png" alt="Facebook 로고" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Facebook</h4>
                <a href="https://facebook.com" className="text-blue-500 hover:underline">https://facebook.com</a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg flex items-center">
              <img src="/path/to/youtube-logo.png" alt="YouTube 로고" className="w-12 h-12 mr-4" />
              <div>
                <h4 className="font-semibold mb-2">YouTube</h4>
                <a href="https://youtube.com" className="text-blue-500 hover:underline">https://youtube.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* 경제 정책 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🏭 경제 정책</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">기본소득 확대</h4>
              <p className="text-gray-700">모든 국민이 기본적인 삶을 영위할 수 있도록 기본소득을 단계적으로 확대하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">청년 일자리 창출</h4>
              <p className="text-gray-700">청년들이 안정적으로 일할 수 있는 일자리를 대폭 창출하고, 청년 실업 문제를 해결하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">소상공인 지원</h4>
              <p className="text-gray-700">소상공인과 자영업자들이 어려움을 겪지 않도록 적극적으로 지원하겠습니다.</p>
            </div>
          </div>
        </div>

        {/* 사회 정책 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🏥 사회 정책</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">의료 서비스 개선</h4>
              <p className="text-gray-700">모든 국민이 양질의 의료 서비스를 받을 수 있도록 의료 시스템을 개선하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">교육 혁신</h4>
              <p className="text-gray-700">교육의 공정성을 높이고, 모든 학생이 균등한 교육 기회를 가질 수 있도록 하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">주택 정책</h4>
              <p className="text-gray-700">서민들이 안정적으로 주택을 구할 수 있도록 주택 공급을 확대하고 가격을 안정화하겠습니다.</p>
            </div>
          </div>
        </div>

        {/* 환경 정책 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🌱 환경 정책</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">탄소중립 추진</h4>
              <p className="text-gray-700">2050년 탄소중립 목표를 달성하기 위해 친환경 에너지 전환을 적극적으로 추진하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">재생에너지 확대</h4>
              <p className="text-gray-700">태양광, 풍력 등 재생에너지 비중을 대폭 확대하여 지속가능한 미래를 만들겠습니다.</p>
            </div>
          </div>
        </div>

        {/* 외교 정책 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">🌍 외교 정책</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">평화 외교</h4>
              <p className="text-gray-700">한반도 평화와 동북아시아 안정을 위한 외교를 적극적으로 추진하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">국제 협력 강화</h4>
              <p className="text-gray-700">글로벌 이슈에 대한 국제 협력을 강화하고, 한국의 국제적 위상을 높이겠습니다.</p>
            </div>
          </div>
        </div>

        {/* 디지털 정책 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">💻 디지털 정책</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">디지털 정부 구축</h4>
              <p className="text-gray-700">국민이 언제 어디서나 편리하게 정부 서비스를 이용할 수 있는 디지털 정부를 구축하겠습니다.</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">AI 기술 육성</h4>
              <p className="text-gray-700">인공지능 기술을 육성하여 미래 산업의 경쟁력을 강화하겠습니다.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}