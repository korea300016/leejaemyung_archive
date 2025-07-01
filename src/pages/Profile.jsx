import React from 'react';
import Card from '../components/Card';

export default function Profile() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">이재명 대통령 약력</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">기본 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>출생:</strong> 1964년 12월 22일</p>
              <p><strong>출생지:</strong> 경상남도 진주시</p>
              <p><strong>학력:</strong> 경북대학교 법학과 졸업</p>
            </div>
            <div>
              <p><strong>직업:</strong> 정치인, 변호사</p>
              <p><strong>정당:</strong> 더불어민주당</p>
              <p><strong>현직:</strong> 대한민국 제20대 대통령</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">주요 경력</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">2022년 - 현재</h4>
              <p>대한민국 제20대 대통령</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">2018년 - 2022년</h4>
              <p>경기도지사 (재선)</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">2010년 - 2018년</h4>
              <p>성남시장 (3선)</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">2002년 - 2010년</h4>
              <p>변호사 활동</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">주요 성과</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>성남시 분당구 택지개발사업 추진</li>
            <li>경기도 기본소득 정책 도입</li>
            <li>코로나19 대응 정책 수립</li>
            <li>경기도 청년정책 확대</li>
            <li>지방분권 강화 추진</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">정치 철학</h3>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              "국민이 주인인 나라, 모든 국민이 존엄하게 살 수 있는 사회를 만들겠습니다. 
              공정하고 정의로운 사회, 더불어 함께하는 미래를 위해 노력하겠습니다."
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
} 