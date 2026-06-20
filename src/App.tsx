import { useState } from "react";
import IntroView from "./views/IntroView";
import TestView from "./views/TestView";
import LoadingView from "./views/LoadingView";
import ResultView from "./views/ResultView";
import { questions } from "./data/questions";
import { mbtiResults } from "./data/mbtiResults";

type ViewType = "intro" | "test" | "loading" | "result";

function App() {
  const [view, setView] = useState<ViewType>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // 각 성향별 답변을 순서대로 기록
  const [answers, setAnswers] = useState<('E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P')[]>([]);

  // 테스트 시작
  const handleStart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setView("test");
  };

  // 답변 선택 처리
  const handleAnswer = (type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P') => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // 마지막 문제 응답 시 로딩 뷰로 전환
      setView("loading");
    }
  };

  // 이전 문항으로 복구
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setAnswers((prev) => prev.slice(0, -1));
    } else {
      setView("intro");
    }
  };

  // MBTI 성향 산출 계산
  const calculateMBTI = (): string => {
    const counts = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    };

    answers.forEach((ans) => {
      counts[ans] = (counts[ans] || 0) + 1;
    });

    const mbti = [
      counts.E >= counts.I ? "E" : "I",
      counts.S >= counts.N ? "S" : "N",
      counts.T >= counts.F ? "T" : "F",
      counts.J >= counts.P ? "J" : "P"
    ].join("");

    return mbti;
  };

  // 로딩 애니메이션 완료 후 결과로 리다이렉트
  const handleLoadingComplete = () => {
    setView("result");
  };

  // 계산된 결과 매핑 데이터 확보
  const calculatedMbti = calculateMBTI();
  const resultData = mbtiResults[calculatedMbti] || mbtiResults["INTJ"];

  const showHeaderAndNav = view !== "loading";

  return (
    <div className="bg-surface-container-low text-on-surface min-h-screen flex flex-col justify-start overflow-x-hidden">
      {showHeaderAndNav && (
        <header className="w-full top-0 sticky z-50 bg-background border-b-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(22,29,31,1)]">
          <div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-[480px] mx-auto">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">coffee</span>
              <h1 className="font-display font-black text-primary font-headline-lg-mobile text-headline-lg-mobile">
                직장인 생존 테스트
              </h1>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-on-surface shadow-brutal-sm active-press hover:bg-surface-variant transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
          </div>
        </header>
      )}

      <main className="flex-1 w-full max-w-[480px] mx-auto bg-background relative flex flex-col">
        {view === "intro" && <IntroView onStart={handleStart} />}
        
        {view === "test" && (
          <TestView
            questions={questions}
            currentIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            onPrev={handlePrev}
          />
        )}

        {view === "loading" && <LoadingView onComplete={handleLoadingComplete} />}

        {view === "result" && (
          <ResultView result={resultData} onRestart={handleStart} />
        )}
      </main>

      {showHeaderAndNav && (
        <nav className="fixed bottom-0 w-full max-w-[480px] left-1/2 -translate-x-1/2 bg-surface-container-lowest border-t-2 border-on-surface shadow-[0px_-4px_0px_0px_rgba(22,29,31,1)] rounded-t-xl z-50">
          <div className="flex justify-around items-center h-20 px-4 pb-safe w-full">
            {/* Active Tab */}
            <button 
              onClick={() => setView("intro")}
              className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-lg py-1 px-4 border-2 border-on-surface shadow-[2px_2px_0px_0px_rgba(22,29,31,1)] cursor-pointer"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                quiz
              </span>
              <span className="font-label-bold text-label-bold">테스트</span>
            </button>
            
            {/* Inactive Tabs */}
            <button 
              onClick={() => alert("사내 랭킹 집계 중입니다!")}
              className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 transition-transform cursor-pointer bg-transparent border-0"
            >
              <span className="material-symbols-outlined">leaderboard</span>
              <span className="font-label-bold text-label-bold">랭킹</span>
            </button>

            <button 
              onClick={() => alert("임직원 마이페이지 준비 중입니다!")}
              className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 transition-transform cursor-pointer bg-transparent border-0"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-bold text-label-bold">마이</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;
