import React, { useEffect, useState } from "react";

interface LoadingViewProps {
  onComplete: () => void;
}

const LOADING_MESSAGES = [
  "당신의 주간 보고서 속 영혼 함량 측정 중...",
  "사무실 탈출 욕구 게이지 분석 중...",
  "탕비실 간식 취향 및 카페인 농도 분석 중...",
  "부장님 잔소리 필터 수치 계산 중...",
  "가장 완벽한 당신만의 직장인 부캐 조립 중..."
];

export const LoadingView: React.FC<LoadingViewProps> = ({ onComplete }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // 800ms마다 로딩 멘트 전환
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 850);

    // 3.5초 후 결과 로딩 완료 처리
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-screen bg-pattern flex flex-col items-center justify-center px-margin-mobile relative">
      {/* Loading Card */}
      <div className="w-full bg-surface-container-lowest border-2 border-on-surface rounded-xl p-8 shadow-brutal flex flex-col items-center gap-10 text-center">
        {/* Neo-brutalism Spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute w-20 h-20 border-4 border-on-surface bg-primary-container rounded-lg shadow-brutal-sm animate-spin-slow"></div>
          <div className="absolute w-12 h-12 border-2 border-on-surface bg-secondary-container rounded-full animate-bounce"></div>
          <span className="material-symbols-outlined text-white z-10 text-xl font-bold animate-pulse">
            coffee
          </span>
        </div>

        {/* Loading Message */}
        <div className="min-h-[64px] flex items-center justify-center">
          <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-black animate-pulse leading-snug">
            {LOADING_MESSAGES[messageIndex]}
          </p>
        </div>

        {/* Helper Subtext */}
        <div className="font-label-bold text-label-bold text-outline text-xs mt-2">
          잠시만 기다려 주세요. 뇌과학과 사내 메신저 데이터를 종합하여 분석 중입니다.
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingView;
