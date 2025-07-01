import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, image: '/image/0001.jpg' },
    { id: 2, image: '/image/0002.jpg' },
    { id: 3, image: '/image/0003.jpeg' },
    { id: 4, image: '/image/0004.jpeg' },
    { id: 5, image: '/image/0005.jpeg' }
  ];

  // 자동 슬라이드 기능
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mt-28 space-y-6">
      {/* 메인 슬라이드 */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`슬라이드 ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* 네비게이션 버튼 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* 인디케이터 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 최근 소식 */}
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-primary">최근 소식</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">📰 최신 뉴스</h3>
            <p className="text-gray-600 mb-2">이재명 대통령의 최신 활동과 소식을 확인하세요</p>
            <a 
              href="/news" 
              className="text-blue-600 hover:underline"
            >
              뉴스 보기 →
            </a>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">📸 사진/영상</h3>
            <p className="text-gray-600 mb-2">대통령의 일상과 공식 활동 사진을 확인하세요</p>
            <a 
              href="/gallery" 
              className="text-blue-600 hover:underline"
            >
              갤러리 보기 →
            </a>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">💝 후원하기</h3>
            <p className="text-gray-600 mb-2">이재명 대통령을 응원하는 마음을 전해주세요</p>
            <a 
              href="/support" 
              className="text-blue-600 hover:underline"
            >
              후원하기 →
            </a>
          </div>
        </div>
      </Card>

      {/* 빠른 링크 */}
      <Card>
        <h2 className="text-2xl font-bold mb-4 text-primary">바로가기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="/stories" 
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">📖 이야기 모음</h3>
            <p className="text-gray-600">대통령의 이야기와 철학을 담은 글들을 읽어보세요</p>
          </a>
          
          <a 
            href="/promises" 
            className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <h3 className="font-semibold mb-2">🎯 주요 공약</h3>
            <p className="text-gray-600">국민을 위한 핵심 공약들을 확인하세요</p>
          </a>
        </div>
      </Card>
    </div>
  );
} 