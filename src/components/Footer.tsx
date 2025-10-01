import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { title: '회사소개', href: '#about' },
  { title: '관계법령', href: '#regulations' },
  { title: '사업분야', href: '#services' },
  { title: '수행실적', href: '#portfolio' },
  { title: '자료실', href: '#resources' }
];

const businessInfo = [
  { label: '법인명', value: '대한민국 상이군경회 시설사업소' },
  { label: '대표자', value: '○○○' },
  { label: '사업자등록번호', value: '000-00-00000' },
  { label: '설립일', value: '1999년 3월' }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 메인 푸터 컨텐츠 */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-korean">
              대한민국 상이군경회 시설사업소
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed font-korean">
              25년간 축적된 전문성과 신뢰를 바탕으로 공공시설과 산업시설의 
              안정과 성능을 책임지는 엔지니어링 전문기관입니다.
            </p>
            
            {/* 연락처 정보 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm font-english">TEL: 02)572-6218</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm font-english">FAX: 02)571-9274</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div className="text-sm">
                  <div className="font-korean">서울특별시 서초구 양재동 261번지 양재빌딩 2층</div>
                </div>
              </div>
            </div>
          </div>

          {/* 퀵 링크 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-korean">주요 메뉴</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1 group font-korean"
                  >
                    {link.title}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 사업자 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-korean">사업자 정보</h4>
            <div className="space-y-2">
              {businessInfo.map((info) => (
                <div key={info.label} className="text-sm">
                  <span className="text-primary-foreground/60 font-korean">{info.label}: </span>
                  <span className="text-primary-foreground font-korean">{info.value}</span>
                </div>
              ))}
            </div>

            {/* 인증 마크 (더미) */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 font-korean">인증 현황</h5>
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs font-korean">ISO</span>
                </div>
                <div className="w-12 h-12 bg-primary-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs font-korean">KS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 저작권 영역 */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <span className="font-korean">
                © {currentYear} 대한민국 상이군경회 시설사업소. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#privacy" 
                className="text-primary-foreground/80 hover:text-accent transition-colors font-korean"
              >
                개인정보처리방침
              </a>
              <a 
                href="#terms" 
                className="text-primary-foreground/80 hover:text-accent transition-colors font-korean"
              >
                이용약관
              </a>
              <a 
                href="#sitemap" 
                className="text-primary-foreground/80 hover:text-accent transition-colors font-korean"
              >
                사이트맵
              </a>
            </div>
          </div>

          {/* 면책 조항 */}
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/50 text-center font-korean">
              본 웹사이트에 게시된 모든 정보는 참고용이며, 정확한 정보는 직접 문의 바랍니다. 
              무단 복제 및 배포를 금지합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};