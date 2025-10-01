import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/olympic-bridge.png';

export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="올림픽대교 - 대한민국 상이군경회 시설사업소" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* 메인 헤드라인 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed font-korean">
            국민들의 안전하고 쾌적한,
            <br />
            <span className="text-accent">아름다운 생활을 영위하는</span> 나라건설
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-korean mt-6">
            사람과 사랑으로 융합된 성장의 발자국을 남기는 시설사업소가 되겠습니다.
          </p>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="다음 섹션으로 스크롤"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* 네비게이션 여백 보정 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-transparent pointer-events-none"></div>
    </section>
  );
};