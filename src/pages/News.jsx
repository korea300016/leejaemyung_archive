import React from 'react';
import Card from '../components/Card';

export default function News() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">📰 최신 뉴스</h2>
        <p className="text-gray-600 mb-6">
          이재명 대통령의 최신 활동과 소식을 확인하세요.
        </p>
        
        {/* 네이버 뉴스 링크 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">네이버 뉴스</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://search.naver.com/search.naver?where=news&query=이재명" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">🔍 이재명 관련 뉴스 검색</h4>
              <p className="text-gray-600">네이버에서 이재명 대통령 관련 최신 뉴스를 검색합니다</p>
            </a>
            
            <a 
              href="https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <h4 className="font-semibold mb-2">📰 정치 뉴스</h4>
              <p className="text-gray-600">네이버 정치 뉴스 섹션에서 최신 정치 소식을 확인합니다</p>
            </a>
          </div>
        </div>

        {/* 관리자 안내 */}
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">⚠️ 관리자 안내</h3>
          <p className="text-gray-700">
            이 페이지의 링크는 수동으로 업데이트됩니다. 
            새로운 뉴스 소스나 링크가 필요하시면 관리자에게 문의해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 