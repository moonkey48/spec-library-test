‘나와 동승자의 여행 취향이 만나는 길’이라는 컨셉을 가진 서비스에 대한 Spec library를 제작했습니다.

### Core value
- 취향의 조화, 함께하는 이동의 온전한 즐거움 : 논리적 질서로 구현한 관계의 조화를 통해, 사용자에게 취향의 조율을 넘어선 ‘함께하는 이동의 온전한 즐거움’을 제공하는 것을 본질적 가치로 삼는다.

### Context & Target
- Core Persona : 'Collaborative Explorers' (자신의 취향이 확고하면서도 동승자와의 유대감을 중시하는 2030 여행자 그룹)

- Service Concept : "Sync & Sense" (데이터 동기화와 감각적 적시성)

- Usage Context : 여행 전(모바일 기반의 세밀한 계획), 이동 중(차량 인포테인먼트 기반의 실시간 추천 및 가변적 대응)

- Tech Environment : 멀티 디바이스 동기화(N-Screen), 실시간 위치 정보(GPS) 및 외부 환경 데이터(V2X/날씨/교통), 거대언어모델(LLM) 기반의 개인화 추천 엔진

 ### Logical Architecture
- Key-path Scenario (The Logical Flow):
(1) Onboarding: 사용자 데이터를 해체하여 고유의 '여행 페르소나' 생성
(2) Grouping: 여행 모임 생성 및 동승자 초대 (데이터 결합 준비)
(3) Deconstruction: 각 개인의 취향 데이터(장소, 무드, 음식 등)를 분석 가능한 단위로 해체.
(4) Coordination: AI 페르소나 간의 가중치 기반 조율 (상충하는 니즈의 논리적 합의)
(5) Generation & Edit: 최적의 코스 제안 및 사용자의 주체적 개입(편집) 허용
(6) Journey Start: 설계된 경로로의 이동 시작
(7) Real-time Sync: 이동 중 실시간 상황 데이터(급격한 날씨 변화 등)와 여행자 상태 결합
(8) JIT(Just-In-Time) Rec: 감각적 요구가 발생하는 적시에 최적의 장소/경험 추천
(9) Feedback Loop: 대화형 인터페이스를 통한 정성적 후기 수집 및 차기 Spec 고도화.

- Data Taxonomy & Taxonomy Mapping(데이터 분류 및 기능 매핑) : AI가 사용자의 취향을 오해 없이 해체하고 조율하기 위한 데이터 체계
    - 정적 프로파일(Static Data): * 식별값: 선호 장소 카테고리(자연vs도심), 이동 페이스(여유vs밀도), 음식 기호(비건, 알러지 등), 운전 성향
        - 매핑: 초기 '여행 페르소나' 생성 및 기본 코스 엔진의 필터값으로 활용
    - 동적 컨텍스트(Dynamic Data): * 식별값: 실시간 피로도(주행 시간 연동), 현재 무드(대화 톤 분석), 실시간 외부 변수(날씨, 돌발 정체, 목적지 폐점 시간)
        - 매핑: 이동 중 '적시 경험 추천(JIT Rec)'의 트리거 및 코스 수정(Recalculation)의 변수로 활용

- Adaptive Interaction Policy (적응형 인터랙션 및 중재 정책) : AI가 사용자 사이에서 갈등을 해결하고 소통하는 '논리적 규칙'
    - AI Confidence Logic (확신도 기반 노출):
        - High Confidence (80% 이상): 단일 최적 경로를 강조하여 제안하고 즉시 길 안내 연결(Quick Action)
        - Low Confidence (80% 미만): 사용자 간 취향 충돌이 감지될 경우, '중재안(Alternative)' 2~3개를 제시하여 사용자 투표/선택 유도
    - Conflict Resolution Rule (취향 충돌 조율 원칙):
        - 가중치 시스템: 이전 방문지에서 사용자 A의 의견이 반영되었다면, 다음 목적지는 사용자 B의 선호도를 우선순위에 배치하는 '상호 호혜적(Reciprocal) 가중치' 적용
        - 교집합 탐색: 상충하는 두 취향의 공통분모(예: '조용한 곳' + '활동적인 곳' = '한적한 숲속 액티비티')를 우선 탐색하는 알고리즘 작동

- Information Hierarchy Matrix (환경별 정보 우선순위 매트릭스) : 모빌리티 환경의 특수성을 고려하여, 상황에 따라 '무엇을 먼저 보여줄 것인가'를 규정
| 상황 (Context)        | 제1 우선순위 (Primary)        | 제2 우선순위 (Secondary)          | 제3 우선순위 (Tertiary)          |
|----------------------|------------------------------|----------------------------------|----------------------------------|
| 정차/계획 중          | 상세 코스 편집 도구            | 장소별 상세 리뷰/사진              | 동승자별 실시간 만족도            |
| 주행 중 (이동)        | 안전 경로 및 잔여 시간          | 즉시 경험 추천 (Pop-up)           | 차량 내 무드 제어 (음악 등)       |
| 목적지 도착 직전      | 주차 정보 및 입구 안내          | 다음 행선지 예고                   | 도착지 관련 숏폼 가이드           |



### Systemic Token
- Color System : 단순한 색상 선택이 아니라, 상황에 따라 색상이 어떻게 기능해야 하는지 정의합니다.
    - Primary (Brand Identity): Sync Teal (#1275FF)
        - 의미: 신뢰와 기술적 연결을 상징하는 메인 컬러. 모든 확정된 정보(경로 확정, 예약 완료 등)에 사용.
    - Secondary : Gradation (#DBFF99, C0FF4C, 36FCDE)
        - 의미: '발견'과 '적시 추천'을 상징. AI의 능동적 추천 컴포넌트에 사용.
    - Background: Solid White (#FFFFFF) / Deep Gray (#1A1C1E) (다크모드 대응)
    - Surface: Glass Layer (White 80% + Blur 20px) - 차량용 대시보드 위에서 시인성을 확보하기 위한 유리 질감 처리.
    - Semantic (Function): Alert Red (#E62117), Success Green (#28A745) - 상태 변화를 즉각적으로 알리는 기능색.
- Typography System: 가독성과 정서적 연결의 분리 : 모빌리티 환경에서 가장 중요한 '시인성'과 AI의 '인격'을 폰트로 구분합니다.
    - UI Foundation (Sans-serif): Pretendard Variable
        - H1 (Title): 28pt / Bold / Line-height 1.4 (주요 목적지, 큰 제목)
        - Body: 16pt / Medium / Line-height 1.6 (일반 정보, 경로 상세)
        - Caption: 12pt / Regular / Line-height 1.4 (부가 데이터, 시간 정보)
    - AI Persona (Sans-Serif): Line seed
        - Usage: AI가 사용자의 취향을 분석해 들려주는 '이야기'나 '추천 사유'에만 한정적으로 사용 (18pt / Italic / Regular). 기술이 아닌 '메이트'의 느낌을 전달하기 위함.
- Spacing & Radius: 정교한 사용성 규칙
    - Corner Radius:
        - Main Container: 24px (카드, 팝업 등 주요 정보 묶음)
        - Inner Component: 12px (버튼, 입력창 등 내부 요소)
        - Rationale: 차량 이동 중 발생하는 진동 환경에서 모서리의 날카로움을 제거하여 시각적 피로도를 낮추고 터치 정확도를 향상함.
    - Variable Spacing Logic (상황별 여백 규칙):
        - [Case 1] 개인화 분석 모드: 여백 16px (좁은 간격). 사용자 개개인의 취향 데이터를 촘촘하게 배치하여 많은 정보를 한눈에 비교 분석해야 할 때 사용.
        - [Case 2] 동승자 합의 모드: 여백 32px (넓은 간격). 여러 페르소나가 충돌하는 영역에서 정보 간의 간섭을 줄이고, 각 페르소나의 독립성을 강조할 때 사용.
        - [Case 3] 주행 중 모드 (Moving Mode): 여백 40px 이상 (확장 간격). 차량 이동 중에는 시인성과 오터치 방지를 위해 버튼 간 간격을 강제적으로 확장하는 동적 여백 시스템 적용.
- Interaction Rule: 유기적 흐름의 수치
    - Duration: 300ms (인간의 인지 반응에 가장 최적화된 속도)
    - Easing: Cubic-bezier(0.4, 0, 0.2, 1) (자연스러운 가속과 감속이 느껴지는 표준 이징)
    - Feedback: 터치 시 Subtle Scale Down (0.98x) - 물리적 버튼을 누르는 듯한 미세한 반응으로 조작 확신성 부여.

### Instrcution & Prompt
- AI Voice & Tone: 비서처럼 딱딱하지 않고, 취향이 확고한 '센스 있는 여행 메이트'의 어조.
- UI Component Guide:
    - Decision Card: AI의 제안 사유(논리적 근거)를 반드시 텍스트로 병기.
    - Edit Tool: 사용자가 코스를 직접 수정할 때 AI가 즉시 대안(Recalculation)을 제시하는 상호작용 UI.
- Origin Spec Prompt (AI 전송용 가이드라인):
- “사용자 A(정적인 휴식형)와 B(활동적인 탐험형)의 취향 데이터를 6:4 비율로 매칭하라. 현재 외부 기온이 30도 이상이므로, 이동 동선을 최소화하되 '시원한 무드'를 지닌 실내 공간 위주로 시나리오를 재구성하라. 제안 시에는 '두 분의 취향이 교차하는 지점을 찾았어요'라는 문구로 시작하라."