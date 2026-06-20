export interface MatchType {
  mbti: string;
  title: string;
}

export interface MBTIResult {
  mbti: string;
  title: string;
  subTitle: string;
  description: string[];
  image: 'panda' | 'cat' | 'dog' | 'tiger' | 'rabbit' | 'fox' | 'lion' | 'monkey' | 'bear' | 'sloth';
  strengths: string[];
  weaknesses: string[];
  goodColleague: MatchType;
  goodLeader: MatchType;
  welfareProduct: {
    name: string;
    reason: string;
    discount: string;
  };
}

export const mbtiResults: Record<string, MBTIResult> = {
  INTJ: {
    mbti: "INTJ",
    title: "고독한 천재 전략가",
    subTitle: "독고다이 고효율 업무 머신",
    image: "panda",
    description: [
      "복잡한 문제를 체계적으로 해결하는 것을 좋아하며, 직장 내 비효율을 가장 참지 못합니다.",
      "감정에 휘둘리기보다는 데이터와 팩트 기반으로 의사결정을 내립니다.",
      "팀원들과의 사담보다는 명확한 태스크 중심의 협업을 선호합니다."
    ],
    strengths: ["탁월한 논리력과 통찰력", "철저한 계획 수립 및 실행", "어려운 문제의 근본 원인 해결"],
    weaknesses: ["차가워 보인다는 피드백을 자주 들음", "사소한 사담이나 친목 도모를 시간 낭비로 여김"],
    goodColleague: { mbti: "ENFP", title: "아이디어 폭발기" },
    goodLeader: { mbti: "ENTJ", title: "폭주하는 기관차 리더" },
    welfareProduct: {
      name: "초밀착 스마트 노이즈 캔슬링 헤드폰",
      reason: "사무실 소음을 차단하고 완벽한 나만의 집중 공간을 선호하는 당신을 위해!",
      discount: "45% 할인"
    }
  },
  INTP: {
    mbti: "INTP",
    title: "조용한 팩트 폭격기",
    subTitle: "아이디어 뱅크 속 뇌섹 직장인",
    image: "cat",
    description: [
      "직장 내 숨겨진 브레인으로, 남들이 보지 못하는 새로운 각도에서 문제를 바라봅니다.",
      "관습적인 방식이나 무의미한 회의를 극도로 싫어합니다.",
      "평소에는 조용하지만 결정적인 순간에 날카로운 피드백으로 판을 뒤집습니다."
    ],
    strengths: ["창의적이고 혁신적인 발상", "팩트 기반의 정확한 분석", "유연하고 수평적인 사고"],
    weaknesses: ["행동보다 생각과 기획이 너무 길어짐", "반복적인 루틴 업무에 쉽게 실증을 느낌"],
    goodColleague: { mbti: "INFJ", title: "심연을 읽는 카운슬러" },
    goodLeader: { mbti: "ESTJ", title: "불도저 커리어맨" },
    welfareProduct: {
      name: "무소음 인체공학 기계식 키보드",
      reason: "아이디어 폭발을 타건으로 풀어내지만 주위 동료에게는 조용히 소통하는 당신을 위해!",
      discount: "30% 할인"
    }
  },
  ENTJ: {
    mbti: "ENTJ",
    title: "폭주하는 기관차 리더",
    subTitle: "목표를 향해 거침없이 돌진하는 야망가",
    image: "tiger",
    description: [
      "팀을 이끌고 결단을 내리는 데 타고난 재능이 있으며, 일의 완성도와 스피드를 모두 챙깁니다.",
      "답답하게 진행되는 일을 직접 도맡아서 빠르게 처리해 버리는 해결사입니다.",
      "높은 기준을 가지고 자신과 팀원을 끊임없이 채찍질하여 성과를 만들어 냅니다."
    ],
    strengths: ["강력한 카리스마와 추진력", "장기적인 비전 설계 능력", "냉철하고 빠른 결단력"],
    weaknesses: ["팀원들의 지친 멘탈을 놓칠 때가 있음", "다소 독단적으로 보일 수 있음"],
    goodColleague: { mbti: "INFP", title: "내적 댄스 장인" },
    goodLeader: { mbti: "INTJ", title: "고독한 천재 전략가" },
    welfareProduct: {
      name: "밀크씨슬 프리미엄 피로회복 간 영양제 세트",
      reason: "성과를 향해 24시간 달리는 불타는 야망 리더의 체력을 지키기 위해!",
      discount: "50% 특가"
    }
  },
  ENTP: {
    mbti: "ENTP",
    title: "월급 루팡 꿈나무",
    subTitle: "창의적인 반항아이자 회의장 브레이커",
    image: "fox",
    description: [
      "번뜩이는 아이디어와 화려한 말빨로 회의의 흐름을 주도하는 아이디어 뱅크입니다.",
      "틀에 박힌 업무 매뉴얼보다 본인만의 지름길을 개척하는 것을 좋아합니다.",
      "재미있는 프로젝트를 시작하는 데 도가 텄지만, 마무리는 동료의 몫이 되기 일쑤입니다."
    ],
    strengths: ["뛰어난 위기 대처 및 임기응변", "토론을 통한 새로운 돌파구 탐색", "다양한 시도와 도전정신"],
    weaknesses: ["마무리 디테일이 다소 부족함", "반복되고 지루한 문서 작업 기피"],
    goodColleague: { mbti: "ISFJ", title: "오피스 마더 테레사" },
    goodLeader: { mbti: "INFJ", title: "심연을 읽는 카운슬러" },
    welfareProduct: {
      name: "초고속 무선 충전 대형 장패드",
      reason: "수많은 브라우저 탭과 빠른 멀티태스킹을 즐기는 당신의 유쾌한 책상을 완성해줄 아이템!",
      discount: "35% 할인"
    }
  },
  INFJ: {
    mbti: "INFJ",
    title: "심연을 읽는 카운슬러",
    subTitle: "조용히 세상을 바꾸는 따뜻한 완벽주의자",
    image: "rabbit",
    description: [
      "사람들의 감정을 섬세하게 읽어내며, 회사 내 갈등이 일어나는 것을 미연에 방지합니다.",
      "업무의 본질적 의미와 가치를 중요하게 생각하며, 진정성 있는 관계를 지향합니다.",
      "겉으로는 온화해 보이지만 속으로는 자신만의 엄격한 기준을 세워둔 외유내강형입니다."
    ],
    strengths: ["타인의 감정에 대한 뛰어난 통찰", "경청과 협력을 이끄는 부드러운 힘", "높은 직관과 통찰력"],
    weaknesses: ["거절을 잘 못해서 독박 업무를 쓰기 쉬움", "속마음을 털어놓지 않아 혼자 스트레스 받음"],
    goodColleague: { mbti: "ENFP", title: "아이디어 폭발기" },
    goodLeader: { mbti: "INTP", title: "조용한 팩트 폭격기" },
    welfareProduct: {
      name: "유기농 라벤더 아로마 디퓨저 & 필로우 미스트",
      reason: "남들의 멘탈까지 케어하느라 지친 당신에게 깊은 휴식과 숙면을 선호하기 때문에!",
      discount: "40% 할인"
    }
  },
  INFP: {
    mbti: "INFP",
    title: "내적 댄스 장인",
    subTitle: "유리멘탈 속 우주를 품은 프로 공상가",
    image: "rabbit",
    description: [
      "감수성이 풍부하고 독창적인 감각을 지녔으며, 자신의 일에 큰 애정을 가지고 몰입합니다.",
      "부장님의 작은 쓴소리 하나에도 온종일 상상의 나래를 펴며 이불킥을 하기도 합니다.",
      "돈보다는 가치 있는 일, 그리고 조용히 기여할 수 있는 환경을 꿈꿉니다."
    ],
    strengths: ["풍부한 상상력과 크리에이티브", "인간적인 따뜻함과 깊은 공감", "평화로운 팀 분위기 조성"],
    weaknesses: ["비판적인 피드백에 쉽게 멘탈이 흔들림", "현실적인 세부 지표 관리를 어려워함"],
    goodColleague: { mbti: "ENTJ", title: "폭주하는 기관차 리더" },
    goodLeader: { mbti: "ENFJ", title: "오피스 핵인싸 보안관" },
    welfareProduct: {
      name: "최고급 메모리폼 허리 지지 쿠션",
      reason: "오랫동안 생각에 잠기며 자리에 앉아 일하는 공상가 당신의 허리 건강을 위해!",
      discount: "25% 할인"
    }
  },
  ENFJ: {
    mbti: "ENFJ",
    title: "오피스 핵인싸 보안관",
    subTitle: "부서의 온도를 3도 올리는 긍정의 아이콘",
    image: "lion",
    description: [
      "팀원들의 사기를 진작시키고 모두가 조화롭게 일할 수 있도록 돕는 따뜻한 리더십을 발휘합니다.",
      "칭찬과 격려를 아끼지 않으며, 동료들의 잠재력을 끌어내는 데 탁월합니다.",
      "가끔 과도한 책임감 때문에 본인 몸이 부서져라 일하며 팀을 이끌어갑니다."
    ],
    strengths: ["뛰어난 소통 능력과 갈등 해결력", "팀워크 결속을 이끄는 리더십", "타인에 대한 헌신과 격려"],
    weaknesses: ["타인의 비판에 필요 이상으로 큰 상처를 받음", "과도한 동조로 인해 객관성 상실 염려"],
    goodColleague: { mbti: "INFP", title: "내적 댄스 장인" },
    goodLeader: { mbti: "ISTJ", title: "걸어다니는 엑셀 파일" },
    welfareProduct: {
      name: "휴대용 에스프레소 커피 머신 & 머그잔 세트",
      reason: "팀원들과 따뜻한 커피 한 잔 나누며 응원의 한마디를 건네는 인싸 보안관에게 딱!",
      discount: "30% 할인"
    }
  },
  ENFP: {
    mbti: "ENFP",
    title: "아이디어 폭발기",
    subTitle: "월요일 아침도 축제로 만드는 오피스 활력소",
    image: "dog",
    description: [
      "회사 내에서 리액션이 가장 좋고, 새로운 아이디어가 마구 샘솟는 인간 스파클링입니다.",
      "단순 반복 업무보다는 트렌디하고 다채로운 크리에이티브 기획에 빛을 발합니다.",
      "호기심이 왕성해 사내 동호회나 행사에 빠지지 않고 등장하는 열정파입니다."
    ],
    strengths: ["분위기를 밝게 만드는 사교성", "열정적이고 독창적인 아이디어", "새로운 도전에 대한 유연성"],
    weaknesses: ["집중력이 쉽게 흩어지며 마무리가 다소 미흡", "계획성 있는 예산/일정 관리 취약"],
    goodColleague: { mbti: "INTJ", title: "고독한 천재 전략가" },
    goodLeader: { mbti: "INFJ", title: "심연을 읽는 카운슬러" },
    welfareProduct: {
      name: "프리미엄 멀티 비타민 & 발포정 패키지",
      reason: "지치지 않는 텐션과 지치면 급격히 다운되는 에너지를 채워줄 활력 에셋!",
      discount: "45% 할인"
    }
  },
  ISTJ: {
    mbti: "ISTJ",
    title: "걸어다니는 엑셀 파일",
    subTitle: "정확성과 꼼꼼함의 살아있는 전설",
    image: "panda",
    description: [
      "자신에게 맡겨진 일은 한 치의 오차도 없이 완성하며, 매뉴얼과 절차를 완벽하게 고수합니다.",
      "보고서 오타나 숫자 틀린 것을 기가 막히게 잡아내며, 기한 엄수를 목숨처럼 여깁니다.",
      "번잡스럽고 계획에 어긋나는 상황을 싫어하며, 차분하게 결과를 입증합니다."
    ],
    strengths: ["비교 불가의 꼼꼼함과 성실함", "확실한 일정 및 예산 통제", "체계적이고 정돈된 워크플로우"],
    weaknesses: ["갑작스러운 변화에 스트레스를 크게 받음", "조금은 경직된 의사소통 스타일"],
    goodColleague: { mbti: "ESFJ", title: "부서 내 평화주의자" },
    goodLeader: { mbti: "ENFJ", title: "오피스 핵인싸 보안관" },
    welfareProduct: {
      name: "듀얼 스크린 LED 모니터 스탠드 조명",
      reason: "밤새 엑셀 셀 하나하나 완벽하게 점검하는 당신의 소중한 눈을 완벽하게 보호해줄 아이템!",
      discount: "35% 할인"
    }
  },
  ISFJ: {
    mbti: "ISFJ",
    title: "오피스 마더 테레사",
    subTitle: "묵묵히 뒤를 받치는 최고의 서포터",
    image: "bear",
    description: [
      "남들이 알아주지 않아도 서류 정리, 비품 정리 등 팀의 온갖 궂은일을 꼼꼼하게 처리해 둡니다.",
      "책임감이 매우 강하고 다른 사람의 부탁을 거절하는 것을 몹시 어려워합니다.",
      "조용한 배려와 디테일한 어시스트로 프로젝트의 최종 완성도를 올려주는 소중한 존재입니다."
    ],
    strengths: ["매우 강한 헌신성과 성실성", "세심한 디테일 및 백업", "팀원들을 편안하게 해주는 수용력"],
    weaknesses: ["무리한 요구를 거절하지 못하고 끙끙 앓음", "본인의 성과를 주도적으로 어필하는 것 부끄러워함"],
    goodColleague: { mbti: "ENTP", title: "월급 루팡 꿈나무" },
    goodLeader: { mbti: "ESTJ", title: "불도저 커리어맨" },
    welfareProduct: {
      name: "무선 목/어깨 지압 온열 마사지기",
      reason: "남들 뒤치다꺼리하느라 어깨가 잔뜩 뭉친 마더 테레사의 긴장을 사르르 녹여줄 마사지기!",
      discount: "50% 특가"
    }
  },
  ESTJ: {
    mbti: "ESTJ",
    title: "불도저 커리어맨",
    subTitle: "오피스 질서와 체계의 엄격한 가디언",
    image: "tiger",
    description: [
      "현실적이고 실용적이며, 프로젝트 일정 조율과 성과 측정을 칼같이 처리하는 마스터입니다.",
      "공과 사가 확실하며, 어영부영 시간만 낭비하는 꼴을 절대 가만두고 보지 못합니다.",
      "결과와 룰을 중요시하여 부서 내 기강을 바로잡고 강력한 효율을 구현해 냅니다."
    ],
    strengths: ["탁월한 조직 운영 및 실행력", "현실적인 문제 해결과 예산 최적화", "확실한 마감 약속 이행"],
    weaknesses: ["과정이 아닌 결과만 중시하여 차갑게 느껴짐", "규정과 매뉴얼에 과도하게 얽매임"],
    goodColleague: { mbti: "ISFP", title: "넵.. 알겠습니다 봇" },
    goodLeader: { mbti: "INTP", title: "조용한 팩트 폭격기" },
    welfareProduct: {
      name: "시간 분할 뽀모도로 타이머 & 데스크 시계",
      reason: "초 단위로 시간을 분할하여 최고 효율의 성과를 거두는 스마트한 워커를 위해!",
      discount: "20% 할인"
    }
  },
  ESFJ: {
    mbti: "ESFJ",
    title: "부서 내 평화주의자",
    subTitle: "리액션 200% 오피스의 마당발 소통왕",
    image: "bear",
    description: [
      "동료들의 생일, 경조사를 1순위로 챙기며 사내 분위기를 가족처럼 화기애애하게 만듭니다.",
      "리액션이 풍부해 회의 시간이나 프레젠테이션 때 큰 힘이 되는 활력 넘치는 소통가입니다.",
      "동료와의 연대감을 가장 중요하게 여기며, 팀 프로젝트의 윤활유 역할을 톡톡히 해냅니다."
    ],
    strengths: ["매우 강력한 사교성과 인간관계 친화력", "경청 및 부드러운 피드백", "성실한 협업 능력"],
    weaknesses: ["팀 내 갈등 상황이 발생하면 크게 불안해함", "남의 시선과 평판에 과도하게 신경을 씀"],
    goodColleague: { mbti: "ISTJ", title: "걸어다니는 엑셀 파일" },
    goodLeader: { mbti: "ISFP", title: "넵.. 알겠습니다 봇" },
    welfareProduct: {
      name: "웰빙 수제 쿠키 & 프리미엄 티 선물세트",
      reason: "탕비실에서 동료들과 따뜻한 디저트를 나누며 이야기보따리를 풀기 좋아하는 당신을 위한 세트!",
      discount: "30% 할인"
    }
  },
  ISTP: {
    mbti: "ISTP",
    title: "칼퇴근의 수호요정",
    subTitle: "최소 노력으로 최대 효율을 내는 실무 천재",
    image: "cat",
    description: [
      "평소에는 만사가 귀찮아 보이지만, 급박한 이슈가 터지면 가장 침착하게 수습하는 해결사입니다.",
      "쓸데없는 카톡이나 메신저 사담을 거의 하지 않고, 오직 본인 업무에만 집중해 6시 정각에 사라집니다.",
      "불필요한 감정 소모를 배제한 쿨하고 담백한 동료의 정석입니다."
    ],
    strengths: ["강한 위기 분석과 현실적 문제 해결", "도구 및 프로그램 활용 실무 탁월", "감정 낭비 없는 쿨한 태도"],
    weaknesses: ["팀 프로젝트에 참여하는 의지가 약해 보임", "속마음을 알 수 없어 친해지기 다소 어려움"],
    goodColleague: { mbti: "ESTP", title: "영업왕의 후예" },
    goodLeader: { mbti: "ESFP", title: "탕비실 토크쇼 MC" },
    welfareProduct: {
      name: "무선 노이즈 캔슬링 오픈형 이어러너",
      reason: "회사 일은 퇴근과 동시에 깔끔히 오프! 퇴근길 음악에 완벽히 몰입하고 싶은 요정을 위해!",
      discount: "40% 할인"
    }
  },
  ISFP: {
    mbti: "ISFP",
    title: "넵.. 알겠습니다 봇",
    subTitle: "조용한 평화를 사랑하는 프로 수긍러",
    image: "sloth",
    description: [
      "팀원들의 의견에 군말 없이 고개를 끄덕이며 묵묵히 자신의 역할을 수행하는 착한 동료입니다.",
      "갈등을 너무 싫어해서 의견 충돌이 날 것 같으면 져주거나 조용히 양보하곤 합니다.",
      "의견이 도드라지진 않지만 센스 넘치는 결과물로 동료들을 부드럽게 감동시킵니다."
    ],
    strengths: ["매우 뛰어난 예술적 감각과 센스", "모두에게 편안함을 주는 수긍 태도", "유연하고 온화한 성정"],
    weaknesses: ["자신의 의견을 설득력 있게 주장하는 것 기피", "쉽게 거절하지 못해 스트레스 누적"],
    goodColleague: { mbti: "ESTJ", title: "불도저 커리어맨" },
    goodLeader: { mbti: "ESFJ", title: "부서 내 평화주의자" },
    welfareProduct: {
      name: "휴대용 미니 가습기 & 힐링 무드등",
      reason: "스트레스 없는 나만의 쾌적하고 예쁜 데스크테리어를 연출하고 싶은 당신에게!",
      discount: "35% 할인"
    }
  },
  ESTP: {
    mbti: "ESTP",
    title: "영업왕의 후예",
    subTitle: "문제 해결과 위기 극복의 만능 스포츠맨",
    image: "monkey",
    description: [
      "직장 생활의 예측 불가능한 돌발 상황 속에서 가장 신나고 활약하는 파이터입니다.",
      "실패를 두려워하지 않고 일단 부딪히며 실전 근육을 키워나가는 타입입니다.",
      "넘치는 유머러스함과 순발력으로 클라이언트나 동료들의 마음을 순식간에 사로잡습니다."
    ],
    strengths: ["최강의 위기 수습 및 대처 능력", "도전적이고 거침없는 실행", "현실 감각과 강한 설득력"],
    weaknesses: ["규칙이나 체계적인 관리를 답답해함", "자칫 충동적인 결정으로 실수가 발생할 수 있음"],
    goodColleague: { mbti: "ISTP", title: "칼퇴근의 수호요정" },
    goodLeader: { mbti: "ENTJ", title: "폭주하는 기관차 리더" },
    welfareProduct: {
      name: "스마트 피트니스 워치 & 인바디 측정기",
      reason: "액티브한 성향으로 외근과 운동을 넘나들며 에너지를 발산하는 영업맨의 원픽!",
      discount: "45% 할인"
    }
  },
  ESFP: {
    mbti: "ESFP",
    title: "탕비실 토크쇼 MC",
    subTitle: "사내 모든 소식통을 쥐고 있는 마당발",
    image: "dog",
    description: [
      "탕비실에서 마주치면 시간 가는 줄 모르고 수다를 떨게 만드는 극강의 친화력 소유자입니다.",
      "주변 동료들의 기분과 고민을 재빠르게 알아채며, 밝은 에너지로 분위기를 띄웁니다.",
      "딱딱한 분위기의 미팅보다는 캐주얼한 만남에서 훨씬 강력한 성과를 이끌어냅니다."
    ],
    strengths: ["최강의 에너지와 사교적 분위기 메이커", "탁월한 공감 능력과 친화력", "현실적인 문제 해결력"],
    weaknesses: ["지루하고 혼자 고립되어 집중해야 하는 태스크 기피", "장기적인 계획 수립이나 재무 관리 소홀"],
    goodColleague: { mbti: "ISTP", title: "칼퇴근의 수호요정" },
    goodLeader: { mbti: "ESFJ", title: "부서 내 평화주의자" },
    welfareProduct: {
      name: "고음질 휴대용 블루투스 방수 스피커",
      reason: "동료들과의 캠핑, 워크샵, 번개 모임 등에서 분위기를 리드할 핵인싸의 필수품!",
      discount: "30% 할인"
    }
  }
};
