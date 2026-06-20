import React, { useEffect, useState, useRef } from "react";

interface IntroViewProps {
  onStart: () => void;
}

export const IntroView: React.FC<IntroViewProps> = ({ onStart }) => {
  const [participantCount, setParticipantCount] = useState(124512);
  const cardRef = useRef<HTMLDivElement>(null);

  // 참여자 수가 서서히 올라가는 애니메이션 연출
  useEffect(() => {
    const interval = setInterval(() => {
      setParticipantCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 3D 틸팅 마이크로 인터랙션
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (x - centerX) / 15;
    const moveY = (y - centerY) / 15;

    cardRef.current.style.transform = `rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="w-full max-w-[480px] mx-auto min-h-[calc(100vh-144px)] bg-pattern flex flex-col items-center px-margin-mobile pt-stack-lg pb-32">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center text-center space-y-stack-md">
        {/* Badge */}
        <div className="bg-tertiary-fixed neo-border px-4 py-1 rounded-full neo-shadow-sm rotate-[-2deg]">
          <span className="font-label-bold text-label-bold text-on-tertiary-fixed">2026 New Edition</span>
        </div>

        {/* Titles */}
        <div className="space-y-2">
          <h2 className="font-display text-[32px] leading-tight font-black text-on-surface">
            나의 직장인<br />생존 유형은?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant px-4">
            임직원 여러분의 생존력을<br />테스트해보세요!
          </p>
        </div>

        {/* Hero Image Frame */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full aspect-square max-w-[320px] bg-surface-container-lowest neo-border rounded-xl neo-shadow overflow-hidden group transition-transform duration-100 ease-out"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(0deg) rotateY(0deg)" }}
        >
          <img
            alt="K-Worker Character"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd6aiel65rYwd9ouawRE4kE2KfPuGpWA3sE6SLIvWkB3WqUOj44fc_3BB3zGOLSXwiQv33sBp5IzOVWaWLN6MI-YiZnlJBiiZ1nmryP9Cn3i-R6cwuYQKBGCErjTVN4ZDLCG3N1E7mraqij6ijO8g1tqwzFrNWaLLMilWivyZKcCsjf6SvUCR8PTHxj5ixR8TDJhSAWhWXlWEy1Hk7uaVwtPg4mj9ETufmBZdrEb44kvpvb_J43EkIxg2ErSTu8BB6gUa_jBUitrHU"
          />
          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 bg-primary-container neo-border p-2 rounded-lg neo-shadow-sm -rotate-6">
            <span className="material-symbols-outlined text-on-primary-container">work</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-secondary-container neo-border p-2 rounded-lg neo-shadow-sm rotate-6">
            <span className="material-symbols-outlined text-white">bolt</span>
          </div>
        </div>

        {/* Stats/Social Proof */}
        <div className="flex gap-gutter w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex-shrink-0 bg-white neo-border p-3 rounded-lg neo-shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">person</span>
            <span className="font-label-bold text-label-bold">
              {participantCount.toLocaleString()}명 참여
            </span>
          </div>
          <div className="flex-shrink-0 bg-white neo-border p-3 rounded-lg neo-shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">share</span>
            <span className="font-label-bold text-label-bold">실시간 랭킹 1위</span>
          </div>
        </div>
      </div>

      {/* CTA Action */}
      <div className="w-full mt-stack-lg">
        <button
          onClick={onStart}
          className="w-full bg-primary-container text-on-primary-container font-display text-[20px] font-black py-5 rounded-xl neo-border neo-shadow transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-3 cursor-pointer"
        >
          테스트 시작하기
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center mt-4 font-label-bold text-label-bold text-outline">소요 시간: 약 3분</p>
      </div>

      {/* Featured Types (Bento Style Glimpse) */}
      <div className="w-full mt-stack-lg grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low neo-border p-4 rounded-xl space-y-2 flex flex-col items-center">
          <span className="material-symbols-outlined text-tertiary">energy_savings_leaf</span>
          <p className="font-label-bold text-label-bold">워라밸 수호자</p>
        </div>
        <div className="bg-surface-container-high neo-border p-4 rounded-xl space-y-2 flex flex-col items-center">
          <span className="material-symbols-outlined text-primary">fire_truck</span>
          <p className="font-label-bold text-label-bold">불타는 열정파</p>
        </div>
      </div>
    </div>
  );
};

export default IntroView;
