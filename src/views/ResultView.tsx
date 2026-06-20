import React, { useState, useEffect } from "react";
import type { MBTIResult } from "../data/mbtiResults";

interface ResultViewProps {
  result: MBTIResult;
  onRestart: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onRestart }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [rotation, setRotation] = useState(-2);

  // 공유 링크 복사 기능
  const handleShare = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setToastMessage("📋 테스트 링크가 복사되었습니다! 동료들에게 공유해보세요.");
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    }).catch(() => {
      setToastMessage("복사에 실패했습니다. 주소창의 링크를 복사해주세요.");
    });
  };

  // 패럴랙스 스타일 일러스트 회전 효과 모사
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setRotation(-2 + scrolled * 0.015);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-[480px] mx-auto bg-background min-h-screen relative flex flex-col pb-32 px-margin-mobile pt-stack-md">
      
      {/* Result Title Section */}
      <section className="flex flex-col items-center text-center space-y-stack-sm mb-stack-lg">
        <div className="inline-block px-4 py-1 bg-tertiary-container text-on-tertiary-container rounded-full border-2 border-on-surface font-label-bold text-label-bold neo-brutal-shadow-sm mb-2 rotate-[-1deg]">
          나의 생존 유형은?
        </div>
        <h2 className="font-display text-4xl font-black text-on-surface leading-tight">
          {result.title}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[320px] font-bold mt-1">
          "{result.subTitle}"
        </p>
      </section>

      {/* Character / Illustration Area */}
      <div className="relative w-full aspect-square mb-stack-lg flex items-center justify-center">
        <div className="absolute inset-0 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
        {/* Neo-brutal Card for Image */}
        <div 
          className="z-10 bg-white border-2 border-on-surface rounded-xl p-4 neo-brutal-shadow transition-transform duration-100 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            alt={result.title}
            className="w-full h-auto rounded-lg max-w-[260px] object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd6aiel65rYwd9ouawRE4kE2KfPuGpWA3sE6SLIvWkB3WqUOj44fc_3BB3zGOLSXwiQv33sBp5IzOVWaWLN6MI-YiZnlJBiiZ1nmryP9Cn3i-R6cwuYQKBGCErjTVN4ZDLCG3N1E7mraqij6ijO8g1tqwzFrNWaLLMilWivyZKcCsjf6SvUCR8PTHxj5ixR8TDJhSAWhWXlWEy1Hk7uaVwtPg4mj9ETufmBZdrEb44kvpvb_J43EkIxg2ErSTu8BB6gUa_jBUitrHU"
          />
        </div>
        {/* Decorative Chips */}
        <div className="absolute -top-4 -right-2 z-20 bg-primary-container text-on-primary-container border-2 border-on-surface font-label-bold text-label-bold px-3 py-1 rounded-lg neo-brutal-shadow-sm rotate-6">
          Lv.99 {result.mbti}
        </div>
      </div>

      {/* Trait Chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-stack-lg">
        {result.strengths.slice(0, 2).map((str, idx) => (
          <div key={idx} className="flex items-center gap-1 bg-surface-container-highest border-2 border-on-surface px-3 py-1 rounded-full text-on-surface font-label-bold text-label-bold text-xs">
            <span className="material-symbols-outlined text-[16px]">bolt</span> {str}
          </div>
        ))}
        {result.weaknesses.slice(0, 1).map((weak, idx) => (
          <div key={idx} className="flex items-center gap-1 bg-error-container border-2 border-on-surface px-3 py-1 rounded-full text-on-surface font-label-bold text-label-bold text-xs">
            <span className="material-symbols-outlined text-[16px]">warning</span> {weak}
          </div>
        ))}
      </div>

      {/* Description Details Card */}
      <div className="w-full bg-white border-2 border-on-surface rounded-xl p-6 shadow-brutal mb-stack-lg text-left">
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3 font-black">성향 정밀 분석</h3>
        <div className="space-y-3">
          {result.description.map((desc, idx) => (
            <p key={idx} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              • {desc}
            </p>
          ))}
        </div>
      </div>

      {/* Colleagues / Leaders Match Section */}
      <div className="grid grid-cols-2 gap-4 mb-stack-lg">
        {/* Good Colleague */}
        <div className="bg-white border-2 border-on-surface rounded-xl p-4 shadow-brutal-sm text-left flex flex-col justify-between">
          <span className="font-label-bold text-xs text-outline mb-2 block">🤝 환상의 짝꿍 동료</span>
          <div>
            <span className="font-display text-xs font-black bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded border border-on-surface">
              {result.goodColleague.mbti}
            </span>
            <h4 className="font-body-md text-body-md font-extrabold text-on-surface mt-2 leading-tight">
              {result.goodColleague.title}
            </h4>
          </div>
        </div>

        {/* Good Leader */}
        <div className="bg-white border-2 border-on-surface rounded-xl p-4 shadow-brutal-sm text-left flex flex-col justify-between">
          <span className="font-label-bold text-xs text-outline mb-2 block">🛡️ 나를 구해줄 리더</span>
          <div>
            <span className="font-display text-xs font-black bg-primary-container text-on-primary-container px-2 py-0.5 rounded border border-on-surface">
              {result.goodLeader.mbti}
            </span>
            <h4 className="font-body-md text-body-md font-extrabold text-on-surface mt-2 leading-tight">
              {result.goodLeader.title}
            </h4>
          </div>
        </div>
      </div>

      {/* Product Suggestion Section */}
      <section className="space-y-stack-md mb-stack-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-black">
            당신을 위한 임직원 추천템
          </h3>
          <span className="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
        </div>

        {/* Product Card */}
        <div className="bg-surface-container-lowest border-2 border-on-surface rounded-xl overflow-hidden neo-brutal-shadow transition-transform hover:scale-[1.01]">
          <div className="h-48 w-full relative bg-secondary-fixed/10">
            <img
              alt={result.welfareProduct.name}
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-qOneAm6UJkn96B61CWsHNSVsJZI8SNB0alv1bDGDhk7vHlTDPod86jz5F3CgCTBjlB3_wxML5x8j2ufn5wpyvhAlqJH_FEGGZ-AhVZGwGWPCJU_fil_9MtkfAWt-oPSNAxoAJLRs1hlpWkFsQwtTt3Rc9BE_CU0Hw7-y-z-gujJ3o2brccKFRVlsekWLJHq-5OyK51TjVV2176fjLsITEszUfPTy4Tdxfav-O_1NKpzncGy9o1Fa0t68QeagShJqaHKXXgyPZLfH"
            />
            <div className="absolute top-3 left-3 bg-error text-on-error border-2 border-on-surface font-label-bold text-label-bold px-2 py-0.5 rounded text-xs neo-brutal-shadow-sm animate-pulse">
              {result.welfareProduct.discount}
            </div>
          </div>
          <div className="p-5 space-y-3 text-left">
            <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight font-black">
              {result.welfareProduct.name}
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {result.welfareProduct.reason}
            </p>
            <a
              href="https://welfare-mall.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-container text-on-primary-container border-2 border-on-surface py-4 rounded-xl font-display text-lg font-extrabold neo-brutal-shadow neo-brutal-shadow-active flex items-center justify-center gap-2 mt-4 cursor-pointer hover:bg-opacity-95 transition-all text-center"
            >
              임직원 특가 구매하러 가기
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Share / Restart Buttons */}
      <div className="flex gap-4 w-full">
        <button
          onClick={handleShare}
          className="flex-1 bg-white border-2 border-on-surface py-4 rounded-xl font-label-bold text-label-bold text-on-surface shadow-brutal-sm active-press hover:bg-surface-variant flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">share</span>
          결과 공유하기
        </button>
        <button
          onClick={onRestart}
          className="flex-1 bg-white border-2 border-on-surface py-4 rounded-xl font-label-bold text-label-bold text-on-surface shadow-brutal-sm active-press hover:bg-surface-variant flex items-center justify-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">restart_alt</span>
          테스트 다시하기
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-on-surface text-surface border-2 border-on-surface shadow-brutal px-5 py-3 rounded-xl z-50 text-sm font-bold whitespace-nowrap animate-bounce">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ResultView;
