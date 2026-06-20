import React, { useState } from "react";
import type { Question } from "../data/questions";

interface TestViewProps {
  questions: Question[];
  onAnswer: (type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P') => void;
  onPrev: () => void;
  currentIndex: number;
}

export const TestView: React.FC<TestViewProps> = ({
  questions,
  onAnswer,
  onPrev,
  currentIndex
}) => {
  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleOptionClick = (idx: number, type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P') => {
    setSelectedIdx(idx);
    
    // 시각적 피드백 제공을 위해 300ms 딜레이 후 다음 문항으로 이동
    setTimeout(() => {
      onAnswer(type);
      setSelectedIdx(null); // 다음 문항을 위해 선택 상태 초기화
    }, 300);
  };

  return (
    <div className="w-full max-w-[480px] bg-background min-h-screen flex flex-col relative pb-32 px-margin-mobile pt-stack-md mx-auto">
      {/* Progress Section */}
      <div className="w-full mb-stack-lg">
        <div className="flex justify-between items-end mb-stack-sm">
          <span className="font-label-bold text-label-bold text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded-full border border-on-surface">
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile text-secondary font-black">
            {progressPercent}%
          </span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-6 w-full bg-surface-variant border-2 border-on-surface rounded-full relative overflow-hidden shadow-inner">
          <div 
            className="h-full bg-secondary-container rounded-r-full transition-all duration-500 ease-out flex items-center justify-end pr-1"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="mug-animation mr-[-8px]">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                coffee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Illustration Area */}
      <div className="w-full h-44 mb-stack-md flex items-center justify-center">
        <div className="w-36 h-36 rounded-xl border-on-surface relative flex items-center justify-center">
          <img
            alt="K-Worker Character"
            className="w-28 h-28 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd6aiel65rYwd9ouawRE4kE2KfPuGpWA3sE6SLIvWkB3WqUOj44fc_3BB3zGOLSXwiQv33sBp5IzOVWaWLN6MI-YiZnlJBiiZ1nmryP9Cn3i-R6cwuYQKBGCErjTVN4ZDLCG3N1E7mraqij6ijO8g1tqwzFrNWaLLMilWivyZKcCsjf6SvUCR8PTHxj5ixR8TDJhSAWhWXlWEy1Hk7uaVwtPg4mj9ETufmBZdrEb44kvpvb_J43EkIxg2ErSTu8BB6gUa_jBUitrHU"
          />
          <div className="absolute -top-3 -right-3 bg-error-container border-2 border-on-surface px-2 py-1 rounded-lg font-label-bold text-label-bold shadow-brutal-sm text-xs">
            {currentIndex < 4 ? "월요병" : currentIndex < 8 ? "수요병" : "퇴근대기"}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className={`w-full bg-surface-container-lowest border-2 rounded-xl p-6 shadow-brutal mb-stack-lg relative overflow-hidden transition-colors duration-300 ${selectedIdx !== null ? 'border-tertiary' : 'border-on-surface'}`}>
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-center mb-base font-black">
          Q{currentIndex + 1}.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface text-center leading-relaxed font-bold">
          {currentQuestion.question}
        </p>
      </div>

      {/* Answer Options */}
      <div className="w-full space-y-stack-sm mb-stack-lg">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx, option.type)}
              className={`w-full border-2 border-on-surface rounded-xl p-5 text-left flex items-center justify-between shadow-brutal active-press transition-all hover:bg-secondary-fixed ${isSelected ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-lowest text-on-surface'}`}
            >
              <span className="font-body-md text-body-md font-bold leading-normal">
                {option.text}
              </span>
              <span className={`material-symbols-outlined transition-opacity ${isSelected ? 'opacity-100 text-on-secondary-container' : 'opacity-0'}`}>
                check_circle
              </span>
            </button>
          );
        })}
      </div>

      {/* Back Button / Navigation */}
      <div className="w-full flex justify-center mt-4">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border-2 border-on-surface font-label-bold text-label-bold transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed bg-surface-container-high' : 'bg-white shadow-brutal-sm active-press hover:bg-surface-variant'}`}
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          이전 질문
        </button>
      </div>
    </div>
  );
};

export default TestView;
