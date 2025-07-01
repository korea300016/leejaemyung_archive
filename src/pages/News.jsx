import React from 'react';
import Card from '../components/Card';

export default function News() {
  return (
    <div className="mt-28 space-y-6">
      <Card>
        <h2 className="text-3xl font-bold mb-6 text-primary">📰 최신 뉴스</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">🔍 네이버 뉴스</h3>
            <p className="text-gray-600 mb-4">
              네이버 뉴스에서 이재명 대통령 관련 최신 기사를 확인하세요.
            </p>
            <a 
              href="https://search.naver.com/search.naver?where=news&query=이재명" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              네이버 뉴스 보기
            </a>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary">📱 실시간 소식</h3>
            <p className="text-gray-600 mb-4">
              대통령의 실시간 활동과 주요 발표 내용을 확인하세요.
            </p>
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              실시간 소식 보기
            </a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">📝 관리자 안내</h4>
          <p className="text-yellow-700 text-sm">
            새로운 뉴스 링크나 소식이 있으면 업데이트해주세요.
          </p>
        </div>
      </Card>
    </div>
  );
} 