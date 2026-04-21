// Shared data for vibe coding education pages
window.VIBE_DATA = {
  meta: {
    title: "Vibe Coding",
    subtitle: "AI 연구자를 위한 실전 가이드",
    issue: "ISSUE 01 · 2026",
    org: "Research Lab / Internal",
  },
  steps: [
    {
      id: "00",
      num: "00",
      kicker: "Context",
      title: "LLM의 최근 트렌드",
      titleEn: "Recent Trends in LLMs",
      summary: "'챗봇'이던 LLM이 agent·collaborator가 된 2년. 수렴한 벤치마크, 쏟아지는 새 숫자, 그리고 심상치 않았던 11월의 12일.",
      readTime: "9 min",
      tag: "Landscape",
      sections: [
        {
          heading: "여러분은 요즘 LLM이 어디까지 왔는지 알고 계신가요?",
          body: "질문을 드리는 이유는 — 이 장을 여는 많은 연구자들이 머릿속에 가지고 있는 LLM의 이미지가, 대체로 2년 전에 멈춰 있기 때문입니다. 그때의 LLM은 '말 잘하는 챗봇'이었습니다. 지난 2년 동안 그 실체는 두어 번쯤 완전히 바뀌었고, 바뀌는 속도도 한 번 더 빨라졌습니다. 이 장은 그 2년의 이야기이고, 동시에 오늘부터의 이야기입니다.",
        },
        {
          heading: "요즘 커뮤니티는 이렇게 말합니다",
          body: "2026년의 LLM을 '챗봇'이라고 부르는 사람은 거의 없습니다. 대신 학계와 실무 커뮤니티에서 반복해서 도는 문장들은 이렇습니다.",
          bullets: [
            "“LLM은 이제 agent다” — tool calling과 자율 실행 루프가 chat UI 밖, CLI·IDE 안에서 돌아간다",
            "“LLM은 이제 collaborator다” — 단발 응답이 아니라, 수십 분짜리 과제를 스스로 쪼개서 끝낸다",
          ],
        },
        {
          heading: "벤치마크도 세대교체 중입니다",
          body: "지난 시대의 지표는 대부분 포화됐습니다. 이제 연구자와 엔지니어가 실제로 쳐다보는 숫자는 전혀 다른 종류입니다.",
          compare: {
            before: {
              label: "수렴해버린 벤치마크",
              lines: [
                "• MMLU — 90%+ 대에서 모두 평탄화",
                "• HumanEval — 사실상 포화",
                "• GSM8K — 소형 모델도 해결",
                "• BBH — 상위권 격차 소멸",
                "• ARC-Challenge — 더 이상 변별력 없음",
                "",
                "# '누가 더 잘 대답하는가'는",
                "# 거의 구분되지 않는다",
              ],
            },
            after: {
              label: "지금 쓰는 벤치마크",
              lines: [
                "▸ SWE-bench Verified — 실제 GitHub 이슈 수리",
                "▸ τ-bench — 멀티턴 툴 호출·에이전트",
                "▸ HLE — 박사급 종합 시험 (Humanity's",
                "  Last Exam)",
                "▸ Aider Polyglot — 멀티파일·다국어 편집",
                "▸ Terminal-Bench — 터미널 자율 작업",
                "▸ METR Long-Horizon — 장시간 자율성",
                "▸ ARC-AGI-2 — 일반화·추상 추론",
                "▸ GPQA Diamond — 박사 수준 과학 QA",
                "",
                "# 전부 '실제로 일을 끝내는가'",
                "# 를 측정한다",
              ],
            },
          },
        },
        {
          heading: "그리고, 속도가 너무 빠릅니다",
          body: "아래는 두 벤치마크의 궤적입니다 — SWE-bench Verified(실제 GitHub 이슈 500개를 패치로 풀게 하는 코딩 벤치)와 HLE(Humanity's Last Exam, 박사급 종합 시험). 세로축은 점수(%), 가로축은 출시 시점. 세모(△)는 Anthropic, 원(○)은 OpenAI, 다이아(◇)는 Google 모델입니다.",
          chart: {
            kicker: "▸ FIG. 01 · CHART",
            title: "두 벤치마크, 같은 상승곡선",
            subtitle: "SWE-bench Verified (코딩) · HLE (박사급 종합) — 출시 시점 기준 공개 스코어 (%)",
            yMax: 100,
            series: [
              {
                name: "SWE-bench Verified",
                color: "var(--accent-ink)",
                points: [
                  { date: "2023-03-14", y: 2,  label: "GPT-4",          provider: "openai",    labelDY: -14 },
                  { date: "2024-03-04", y: 11, label: "Claude 3 Opus",   provider: "anthropic", labelDY: 18 },
                  { date: "2024-06-20", y: 33, label: "3.5 Sonnet",      provider: "anthropic", labelDY: 18 },
                  { date: "2024-10-22", y: 49, label: "3.5 Sonnet v2",   provider: "anthropic", labelDY: 18 },
                  { date: "2025-02-24", y: 63, label: "Claude 3.7",      provider: "anthropic", labelDY: -14 },
                  { date: "2025-08-07", y: 74, label: "GPT-5",           provider: "openai",    labelDY: -14, labelDX: -4, labelAnchor: "end" },
                  { date: "2025-09-29", y: 77, label: "Sonnet 4.5",      provider: "anthropic", labelDY: -14 },
                  { date: "2025-11-18", y: 76, label: "Gemini 3 Pro",    provider: "google",    labelDY: 22 },
                  { date: "2025-11-24", y: 80, label: "Opus 4.5",        provider: "anthropic", labelDY: -14, labelDX: 10 }
                ]
              },
              {
                name: "HLE (Humanity's Last Exam)",
                color: "var(--ink-3)",
                points: [
                  { date: "2025-02-24", y: 9,  label: "Claude 3.7",    provider: "anthropic", labelDY: 18 },
                  { date: "2025-08-07", y: 25, label: "GPT-5",         provider: "openai",    labelDY: -12, labelDX: -4, labelAnchor: "end" },
                  { date: "2025-09-29", y: 19, label: "Sonnet 4.5",    provider: "anthropic", labelDY: 18 },
                  { date: "2025-11-18", y: 37, label: "Gemini 3 Pro",  provider: "google",    labelDY: -14 },
                  { date: "2025-11-24", y: 30, label: "Opus 4.5",      provider: "anthropic", labelDY: 20, labelDX: 10 }
                ]
              }
            ],
            caption: "2년 전 한 자릿수였던 SWE-bench은 이제 80% 선. 같은 기간 MMLU가 몇 점 오르내리는 사이에, 실제 코드 작업 해결률은 40배가 뛰었습니다. 그럼에도 HLE처럼 더 어려운 종합 시험에선 아직 절반도 못 미칩니다 — 포화까지는 한참 남았습니다."
          },
        },
        {
          heading: "필자가 기억하는 '똑똑한 구글' 시절",
          body: "저는 GPT-4o가 막 풀렸을 무렵 LLM을 처음 진지하게 쓰기 시작했습니다. 그때의 사용법은 지금 돌아보면 귀엽다고 할 만큼 단순했습니다. 브라우저 탭을 하나 더 띄워두는 것. 코드 조각을 복사해서 물어보고, 에러 스택트레이스를 통째로 긁어다 붙이고, 돌아온 답을 다시 복사해서 에디터로 옮기는 — 딱 거기까지였습니다.",
          dialog: {
            kicker: "▸ SCENE · CHATGPT TAB, CIRCA 2024",
            note: "— REPLAY",
            turns: [
              {
                role: "나",
                text: "numpy로 2개 배열 아다마르 곱 뒤에 배치 차원으로 합치려는데 ValueError가 납니다.\n\nValueError: operands could not be broadcast together with shapes (32,128) (128,32)"
              },
              {
                role: "GPT-4o",
                text: "transpose 방향이 반대입니다. (128,32) 쪽을 .T로 돌리거나, 의도가 배치별 가중합이면 np.einsum('bi,bi->b', A, B) 한 줄이 더 안전합니다."
              },
              {
                role: "나",
                text: "ㅇㅋ 고맙다 → (복붙 → 실행 → 됐다)"
              }
            ],
          },
          note: "이게 그때는 충분히 혁신이었습니다. Stack Overflow를 15분 뒤져야 풀리던 문제가 2분 만에 해결됐으니까요. 하지만 여전히 'AI가 물건을 만들지는 않는다'는 전제가 깔려 있었습니다 — 운전대는 내가 잡고 있었고, AI는 조수석에서 책을 읽어주는 동승자였습니다.",
        },
        {
          heading: "심상치 않다고 느낀 2025년 11월의 12일",
          body: "변곡점은 조용하지 않게 왔습니다. 2025년 11월 12일부터 24일까지, 딱 12일 사이에 OpenAI·Google·Anthropic의 세 주력 모델이 연달아 떨어졌고, 각자의 출시 노트에는 이상할 정도로 비슷한 단어들이 반복됐습니다 — long-horizon agent, autonomous task completion, multi-file reasoning, 30-minute unattended work. 개별 모델의 점프라기보다, 업계 전체가 같은 방향으로 정렬된 2주였습니다.",
          timeline: {
            kicker: "▸ NOV 12 → NOV 24, 2025",
            note: "3 MODELS · 12 DAYS · SAME DIRECTION",
            items: [
              {
                when: "NOV 12",
                model: "GPT-5.1",
                note: "thinking 모드가 기본으로 내재화. Instant / Thinking 두 축으로 응답 속도·스타일을 세팅하고, 툴 호출 안정성과 장시간 자율 작업이 확 올라옴."
              },
              {
                when: "NOV 18",
                model: "Gemini 3 Pro",
                note: "멀티모달·긴 컨텍스트·추론이 동시에 한 단계. 노트북 한 권 분량을 한 컨텍스트에서 돌려버림. 출시와 동시에 Search·Workspace·AI Studio에 바로 투입."
              },
              {
                when: "NOV 24",
                model: "Claude Opus 4.5",
                note: "에이전트 루프 신뢰성에 초점. 30분 넘는 자율 코딩 과제를 끊지 않고 끝내기 시작. 그러면서 전세대 대비 가격은 2/3 인하."
              }
            ],
          },
          note: "어느 하나가 단독으로 떨어졌다면 '또 새 모델이네' 정도로 넘어갔을 겁니다. 세 개가 2주에 걸쳐 쏟아지고, 전부 같은 말을 하고 있었다는 게 체감상 심상치 않았습니다.",
        },
        {
          heading: "그렇게 코딩 에이전트의 시대가 시작됐습니다",
          body: "코딩 에이전트는 사실 그 전부터 있었습니다. 다만 '신기한 장난감'이었던 것이 '실제 연구 생산성을 바꾸는 도구'로 바뀐 순간이 바로 이때입니다. 품질은 일부 구간에서 시니어 엔지니어의 속도와 정확도를 따라잡거나 넘어섰고, 툴·워크플로우의 다양성은 한 해 만에 폭발했습니다. 다음 장부터는 그 도구들 중 연구자의 일과에 가장 잘 녹아드는 하나 — Claude Code — 를 중심으로, '바이브 코딩'이라는 단어가 실제로 무엇을 가리키는지 이야기합니다.",
        },
      ],
      links: [
        { label: "Karpathy — Vibe coding 원전 트윗", url: "https://x.com/karpathy/status/1886192184808149383" },
        { label: "SWE-bench — 실제 코드 벤치마크", url: "https://www.swebench.com" },
        { label: "METR — Long-horizon agent 평가", url: "https://metr.org" },
        { label: "Simon Willison's Weblog", url: "https://simonwillison.net" },
      ],
    },
    {
      id: "01",
      num: "01",
      kicker: "Concept",
      title: "바이브 코딩이란",
      titleEn: "What is Vibe Coding",
      summary: "코드를 '쓰는' 것이 아니라 '지시하는' 것. Karpathy가 던진 단어, 이제는 Claude Code라는 구체적 도구로 현실화된 방법론.",
      readTime: "14 min",
      tag: "Foundation",
      sections: [
        {
          heading: "정의 — Karpathy의 한마디",
          body: "Vibe coding은 개발자가 코드를 한 줄 한 줄 타이핑하는 대신, AI에게 의도를 자연어로 전달하고 생성된 코드를 빠르게 검증·수정하는 방식의 개발 관행이다. 2025년 2월, Andrej Karpathy가 'There's a new kind of coding I call vibe coding, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists'라고 쓰면서 이 용어가 정착했다. 'Vibe'는 프로그래머의 직관과 취향을 의미한다.",
        },
        {
          heading: "기존 방식 vs 바이브 코딩",
          body: "두 방식은 배타적이지 않다. 연구 코드(throwaway, prototype)에서는 vibe가 압도적으로 빠르고, production에서는 hybrid가 현실적이다.",
          compare: {
            before: {
              label: "Traditional · 수 시간",
              lines: [
                "1. 문법 검색...",
                "2. 코드 작성...",
                "3. 에러 디버깅...",
                "4. Stack Overflow 뒤지기...",
                "",
                "# 결과: 40 lines, 2시간 소요",
              ],
            },
            after: {
              label: "Vibe · 30초",
              lines: [
                "❯ CSV 파일 읽어서 bar chart로",
                "  시각화해줘",
                "↳ Read data.csv",
                "↳ Write plot.py",
                "↳ Bash: python plot.py",
                "✓ chart.png 생성 완료",
              ],
            },
          },
        },
        {
          heading: "왜 AI 연구원에게 중요한가",
          body: "연구 생산성의 병목이 '아이디어 → 코드' 구간에서 '실험 설계 → 해석' 구간으로 이동 중이다. 코드는 더 이상 시간의 bottleneck이 아니다.",
          bullets: [
            "실험 도구 자동화 — 데이터 처리, plotting, logging 파이프라인 전체 위임",
            "데모·시각화 직접 제작 — figure polish, 인터랙티브 데모를 반나절에",
            "반복 작업 스크립트화 — sweep, ablation, hyperparam search를 자연어로",
            "Legacy 코드 온보딩 — 5만 라인 파이프라인을 이틀만에 이해",
          ],
        },
        {
          heading: "도구 비교 — 무엇을 써야 하나",
          body: "비슷한 도구가 여럿이지만 결이 다르다. 연구자에게는 터미널 기반 에이전트(Claude Code)가 압도적으로 유리하다 — 실험 서버에 SSH로 접속해도, Jupyter 옆에 띄워도, 스크립트에 엮어도 동일하게 작동하기 때문.",
          patterns: [
            { name: "Cursor", body: "VS Code fork 기반의 IDE. GUI 친화적이고 코드 에디터 내장. 로컬 개발에 강하지만 원격 서버 작업은 번거로움." },
            { name: "Windsurf", body: "IDE 형태, AI Flow 기반 자동 완성. Cursor와 유사한 포지션." },
            { name: "Claude Code ★", body: "터미널에서 돌아가는 CLI 에이전트. 파일/Git/터미널/웹을 직접 다루는 에이전틱 루프. 원격 서버, tmux, 스크립팅에 자연스럽게 녹아듦 — 연구자의 워크플로우와 가장 잘 맞음." },
            { name: "GitHub Copilot", body: "IDE 플러그인, 자동완성 중심. 에이전트 기능은 상대적으로 약함." },
          ],
        },
        {
          heading: "Claude Code란",
          body: "Claude Code는 터미널에서 돌아가는 AI 코딩 에이전트다. 단순히 텍스트를 생성하는 챗봇이 아니라, 사용자의 자연어 프롬프트를 받아 → 의도를 분석하고 → 적절한 도구(Read/Edit/Bash/Grep/WebFetch 등)를 선택해 → 실제로 실행한 뒤 → 결과를 검증하는 자율 루프를 돈다. 목표를 달성할 때까지 반복한다.",
          code: `# 에이전트 동작 루프
프롬프트 ──▶ 분석 ──▶ 도구 선택 ──▶ 실행 ──▶ 검증
 사용자      의도     Read/Edit      파일      결과
 요청        파악     Bash/Grep      수정      확인
                                              │
                                              └─▶ 반복`,
        },
        {
          heading: "모델과 플랫폼",
          body: "Claude Code는 모델과 실행 환경을 선택할 수 있다. 연구 실무에서는 대부분 Sonnet이 sweet spot이고, 복잡한 아키텍처 설계나 긴 추론이 필요할 때만 Opus로 스위치한다.",
          patterns: [
            { name: "Sonnet 4.5 (기본)", body: "빠르고 효율적. 일반 코딩 작업, 파일 편집, 디버깅의 99%를 커버. 대부분의 세션에서 이걸로 충분." },
            { name: "Opus 4", body: "깊은 추론이 필요한 아키텍처 설계, 큰 리팩토링, 복잡한 논문 구현에 사용. 느리고 비싸지만 어려운 문제에 강함." },
            { name: "Haiku 4.5", body: "가장 가볍고 빠름. 간단한 변환 작업이나 프리뷰·데모 용도." },
            { name: "플랫폼", body: "CLI (claude 명령어), VS Code Extension, JetBrains Plugin, Web (claude.ai/code) — 어디서 쓰든 동일한 하네스 공유 가능." },
          ],
        },
        {
          heading: "5분 설치 가이드",
          code: `# 1. 설치 (Node.js 18+ 필요)
$ npm install -g @anthropic-ai/claude-code

# 2. 프로젝트로 이동해서 실행
$ cd ~/my-research-project
$ claude

╭──────────────────────────────────╮
│  Claude Code v2.x                │
│  Reading CLAUDE.md...            │
╰──────────────────────────────────╯

❯ 이 프로젝트 구조 설명해줘

↳ Read: package.json, pyproject.toml
↳ Glob: src/**/*.py

이 프로젝트는 PyTorch 기반 학습 파이프라인입니다...

# 3. 인증
#   · API Key  : ANTHROPIC_API_KEY 환경변수 (사용량 과금)
#   · Claude Max: 브라우저 인증 ($100/mo 월정액)`,
        },
        {
          heading: "Permission 모드 — 어디까지 맡길 것인가",
          body: "에이전트가 자율적으로 움직이는 만큼, '무엇을 자동 승인하고 무엇을 확인할지' 고르는 게 중요하다. 처음에는 default로 시작해서 신뢰가 쌓이면 auto로 올려가는 게 정석.",
          patterns: [
            { name: "default", body: "읽기만 자동 승인. 파일 편집·Bash 실행은 매번 확인. 처음 시작할 때 / 낯선 코드베이스." },
            { name: "acceptEdits", body: "읽기 + 편집 자동. 가장 많이 쓰는 모드. 코드 작성·리팩토링 세션." },
            { name: "plan", body: "읽기만 가능 (편집 금지). 큰 작업 전에 탐색·계획 수립 용도." },
            { name: "auto (YOLO)", body: "전부 자동 승인. 긴 자율 작업, 백그라운드 실행. Hooks로 안전장치 필수." },
          ],
        },
        {
          heading: "Slash Commands — 세션 제어",
          body: "대화 중 바로 쓸 수 있는 내장 명령어들. 긴 세션을 관리하는 필수 도구.",
          bullets: [
            "/help — 도움말과 사용 가능한 명령 목록",
            "/clear — 대화 초기화 (컨텍스트 전체 리셋)",
            "/compact — 컨텍스트 압축 (대화 요약만 남기고 토큰 절약)",
            "/cost — 현재 세션의 토큰 비용 확인",
            "/model — 모델 전환 (Sonnet ↔ Opus ↔ Haiku)",
            "/config — 설정 보기, Permission 모드 변경",
          ],
        },
        {
          heading: "IDE 도구와 뭐가 다른가",
          body: "한 줄 요약: IDE 도구는 '코드를 더 빨리 타이핑하게' 돕고, Claude Code는 '코드를 안 치게' 한다.",
          compare: {
            before: {
              label: "IDE 도구 (Cursor, Copilot)",
              lines: [
                "• 에디터 안에서 자동완성",
                "• 사용자가 코드를 계속 봄",
                "• 한 파일 단위 작업",
                "• 사람이 운전대 / AI가 조수",
              ],
            },
            after: {
              label: "Claude Code (에이전트)",
              lines: [
                "• 에이전트가 직접 파일 R/W/실행",
                "• 사용자는 '의도'만 전달",
                "• 멀티파일 / 멀티스텝 자율 실행",
                "• AI가 운전대 / 사람이 검수",
              ],
            },
          },
        },
        {
          heading: "바이브 코딩의 3원칙",
          bullets: [
            "의도를 명시하라 — '무엇'과 '왜'를 함께 전달. 에이전트는 목표가 선명할수록 잘 움직인다.",
            "짧은 루프 — Generate → Run → Observe → Refine. 커밋 단위를 작게.",
            "Context is king — 관련 파일, 에러 로그, 스키마, 샘플 출력을 먼저 붙여넣어라.",
            "검증은 사람의 몫 — 숫자·인용·API 시그니처는 반드시 직접 확인.",
            "버려도 되는 코드에 과잉 설계하지 않기 — 연구 prototype은 prototype답게.",
          ],
        },
      ],
      links: [
        { label: "Karpathy — Vibe coding 원전 트윗", url: "https://x.com/karpathy/status/1886192184808149383" },
        { label: "Anthropic — Claude Code 공식 문서", url: "https://docs.anthropic.com/claude-code" },
        { label: "Claude Code Tips (커뮤니티)", url: "https://claudelog.com" },
      ],
    },
    {
      id: "02",
      num: "02",
      kicker: "Practice",
      title: "하네스 엔지니어링",
      titleEn: "Harness Engineering",
      summary: "코드를 쓰는 게 아니라, AI가 코드를 잘 쓰도록 환경을 설계하는 것. CLAUDE.md · Memory · Skills · MCP · Hooks · Agents의 조합술.",
      readTime: "18 min",
      tag: "Tooling",
      sections: [
        {
          heading: "Harness란 무엇인가",
          body: "Harness는 Claude Code를 둘러싼 모든 설정의 총체다. CLAUDE.md, Skills, MCP, Hooks, Agents, Plugins — 이것들을 조합하여 AI가 '내 프로젝트에 맞게' 동작하도록 설계하는 것이 하네스 엔지니어링이다. 모델을 바꾸는 것보다 harness를 바꾸는 것이 보통 더 큰 레버리지를 낸다.",
        },
        {
          heading: "패러다임의 전환",
          body: "프롬프트 엔지니어링은 '이번 대화에서 어떻게 지시할까'에 집중한다. 하네스 엔지니어링은 한 단계 더 나아가, 매번 좋은 프롬프트를 치지 않아도 AI가 알아서 잘 동작하도록 환경 자체를 설계한다.",
          patterns: [
            { name: "과거", body: "내가 코드를 직접 쓰는 것 — 문법, 프레임워크, 디버깅 스킬에 투자" },
            { name: "현재", body: "AI에게 잘 지시하는 것 — 프롬프트 엔지니어링, 컨텍스트 설계에 투자" },
            { name: "다음", body: "AI가 잘 작동하는 환경을 설계하는 것 — 하네스 엔지니어링, 자동화, 도구, 안전장치에 투자" },
          ],
        },
        {
          heading: "CLAUDE.md — 프로젝트 설명서",
          body: "매 세션마다 자동 로드되는 프로젝트 지침 파일. Global (~/.claude/) → User → Project (./CLAUDE.md) 순으로 중첩되며 안쪽이 바깥을 override 한다. Project가 가장 우선.",
          code: `# Project: Our Research Codebase

## Stack
- Python 3.11, PyTorch 2.3, Lightning
- Datasets via HuggingFace, logged to W&B

## Commands
- Train: python -m src.train config=base
- Test: pytest tests/ -x
- Typecheck: pyright src/

## Conventions
- Entry points in src/experiments/
- Configs in configs/ (hydra)
- Never import from notebooks/

## Gotchas
- CUDA OOM at batch>32 on A6000
- Dataset v3 has label noise in 'misc' class`,
        },
        {
          heading: "Memory — Claude가 스스로 쌓는 기억",
          body: "CLAUDE.md가 '사용자가 작성하는 규칙'이라면, Memory는 'Claude가 스스로 쌓아가는 기억'이다. 대화 중 파악한 사용자 역할, 선호도, 프로젝트 맥락을 파일로 저장하여 다음 세션에서도 기억한다.",
          compare: {
            before: {
              label: "CLAUDE.md (사용자 작성)",
              lines: [
                "• 작성자: 사용자가 직접",
                "• 공유: git으로 팀 공유",
                "• 내용: 프로젝트 규칙, 빌드 명령",
                "• 관리: 수동 편집",
              ],
            },
            after: {
              label: "Memory (Claude 자동 축적)",
              lines: [
                "• 작성자: Claude가 자동으로",
                "• 공유: 로컬 개인 메모",
                "• 내용: 사용자 선호, 피드백, 맥락",
                "• 관리: 대화 중 자동 축적",
              ],
            },
          },
          code: `# 프로젝트별 메모리 폴더
~/.claude/projects/<project>/memory/
├── MEMORY.md              # 인덱스 — 매 세션 자동 로드
├── user_role.md           # user: 데이터 사이언티스트
├── feedback_testing.md    # feedback: DB 목킹 금지
├── project_freeze.md      # project: 코드 프리즈 일정
└── reference_linear.md    # reference: Linear 프로젝트

# 메모리 파일 형식 — feedback_testing.md
---
name: DB 목킹 금지
description: 테스트에서 실제 DB 사용 필수
type: feedback
---
통합 테스트에서 DB를 목킹하지 않는다.

**Why:** 목킹 테스트가 통과했지만 프로덕션
마이그레이션에서 장애 발생한 전례

**How to apply:** 테스트 작성 시 항상 실제 DB 연결 사용`,
          patterns: [
            { name: "user", body: "사용자 프로필 — 역할, 기술 수준, 선호하는 협업 방식. 예) '나는 데이터 사이언티스트야'" },
            { name: "feedback", body: "작업 피드백 — 교정, 확인된 접근법, 행동 지침. 예) '테스트에서 DB 목킹 하지 마'" },
            { name: "project", body: "프로젝트 상황 — 진행 중인 작업, 마감일, 의사결정 배경. 예) '4/10부터 코드 프리즈'" },
            { name: "reference", body: "외부 참조 — 외부 시스템 위치, 대시보드, 문서 링크. 예) '버그는 Linear INGEST 프로젝트에'" },
          ],
        },
        {
          heading: "Memory가 동작하는 모습",
          body: "어제 한 말이 오늘 세션에 살아있다. 이 작은 연속성이 Claude를 도구가 아니라 협업자로 바꾼다.",
          code: `# Session 1 — 월요일
❯ 나는 Go 10년차인데 이 프로젝트 React 쪽은 처음이야
  ↳ Memory: user_expertise.md 저장
  ✓ 기억했습니다 — Go 전문가, React 초보

# Session 2 — 다음 날
❯ 이 컴포넌트 구조 설명해줘
  ↳ Memory: user_expertise.md 참조
  React의 useEffect는 Go의 goroutine과 비슷하게
  비동기 사이드이펙트를 처리합니다...
  ✓ 사용자 배경에 맞춘 설명 제공`,
        },
        {
          heading: "Skills — 재사용 가능한 /명령어",
          body: "Skills는 두 가지 형태가 있다. 간단한 Commands (마크다운 파일 하나 = 커맨드 하나)와 고급 Skills (폴더 + SKILL.md, 보조 파일 포함). 같은 프롬프트를 3번 이상 친다면 Skill로 굳혀라.",
          compare: {
            before: {
              label: "Commands · 가벼움",
              lines: [
                "위치: .claude/commands/*.md",
                "구조: 마크다운 파일 1개",
                "frontmatter: 선택",
                "적합: 짧은 프롬프트 템플릿",
              ],
            },
            after: {
              label: "Skills · 정교함",
              lines: [
                "위치: .claude/skills/*/SKILL.md",
                "구조: 폴더 + 보조 파일",
                "frontmatter: 필수",
                "적합: 멀티스텝 워크플로우",
              ],
            },
          },
          code: `# Commands — .claude/commands/*.md
.claude/commands/commit.md      → /commit
.claude/commands/review.md      → /review

# Skills — .claude/skills/*/SKILL.md
.claude/skills/
├── my-reviewer/
│   ├── SKILL.md
│   └── checklist.md
└── deploy/
    └── SKILL.md

# SKILL.md 예시
---
name: commit
description: 변경사항 분석 후 커밋 메시지 자동 생성
allowed-tools: Bash Grep Read
context: fork    # 별도 서브에이전트 컨텍스트에서 실행 (옵션)
---
staged changes를 분석하고 conventional commit
형식으로 커밋 메시지를 작성해주세요. $ARGUMENTS

# context: fork 의 의미
#   메인 대화의 토큰을 안 먹고 깨끗한 컨텍스트로 실행 →
#   긴 분석/리서치형 스킬에 유리. 결과만 메인으로 돌아옴.`,
        },
        {
          heading: "MCP — 외부 서비스 연결 프로토콜",
          body: "Model Context Protocol. AI가 외부 서비스(GitHub, DB, Slack, Figma, Sentry 등)에 표준화된 방식으로 연결하는 프로토콜이다. 연구자에게 가장 유용한 것은 논문 DB 조회, 실험 서버 원격 접속, 시각화 자동화.",
          bullets: [
            "Playwright — 브라우저 자동화/테스트, 웹 스크래핑",
            "PostgreSQL — DB 조회/마이그레이션, 실험 결과 테이블 조작",
            "Slack — 메시지 전송, 긴 학습 완료 알림",
            "Web Search — 최신 논문·문서 검색 결과를 컨텍스트에",
            "연구자 활용 — PubMed/arXiv 자동 검색, SSH 통한 원격 서버 조작",
          ],
        },
        {
          heading: "Hooks — 이벤트 자동화",
          body: "특정 이벤트 발생 시 자동 실행되는 명령. 안전장치와 자동화의 핵심. PreToolUse는 차단 가능(exit 2), PostToolUse는 후처리용.",
          patterns: [
            { name: "PreToolUse", body: "도구 실행 전. 위험 명령 차단 (rm -rf /, .git, .env 등), 시크릿 스캐너로 API 키 유출 방지" },
            { name: "PostToolUse", body: "도구 실행 후. 자동 포맷팅 (prettier, black), 린트, 변경 로깅" },
            { name: "Notification", body: "사용자 입력 대기 시 데스크톱 알림 — 긴 작업에서 유용" },
            { name: "SessionStart", body: "세션 시작 시 환경변수 로드, 컨텍스트 주입" },
          ],
          code: `// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "prettier --write $FILE"
      }]
    }]
  }
}`,
        },
        {
          heading: "Hooks 실전 — 두 가지 가드레일",
          body: "auto 모드를 안심하고 쓰려면 PreToolUse 훅이 필수다. 실제 운영 중인 두 사례 — 위험 명령 차단기와 시크릿 스캐너.",
          code: `# 사례 1 — dangerous-command-blocker.py
❯ node_modules 다 지워줘
  ↳ Bash: rm -rf node_modules/
  🛑 BLOCKED: Critical path protection!
     Protected resource: Node.js dependencies
     This path contains critical project files.

  Hook: PreToolUse → Bash 명령 감지
       → rm -rf /, .git, .claude, .env 등
         위험 경로 패턴 매칭으로 차단 (exit 2)

# 사례 2 — secret-scanner.py
❯ 변경사항 커밋해줘
  ↳ Bash: git add -A && git commit -m "feat: add API"
  🚨 SECRET SCANNER: Potential secrets detected!
     🟠 Anthropic API Key
        File: config.py:12
        Match: sk-ant-api03-...
  ❌ COMMIT BLOCKED: Remove secrets before committing

  Hook: PreToolUse → git commit 감지
       → AWS, Anthropic, OpenAI, Stripe, GitHub 등
         40개+ API 키 패턴을 정규식으로 스캔`,
        },
        {
          heading: "Agents — 하위 에이전트로 병렬 작업",
          body: "Claude가 스스로 하위 에이전트를 만들어 집중된 작업을 위임한다. .claude/agents/ 에 정의하면 description을 매칭해 자동 위임이 일어난다.",
          compare: {
            before: {
              label: "Subagent · 안정",
              lines: [
                "컨텍스트: 자체 윈도우, 요약 반환",
                "통신: 호출자에게만 보고",
                "조율: 메인 에이전트가 관리",
                "적합: 집중된 단일 작업",
              ],
            },
            after: {
              label: "Agent Teams · 실험적",
              lines: [
                "컨텍스트: 완전 독립 세션",
                "통신: 에이전트 간 직접 메시지",
                "조율: 공유 태스크 리스트",
                "적합: 복잡한 다각도 작업",
              ],
            },
          },
          code: `# .claude/agents/code-reviewer.md
---
name: code-reviewer
description: 코드 리뷰 전문가
tools: Read Grep Bash
model: opus
---
보안, 성능, 유지보수성을 종합적으로 검토하세요.

# 자동 위임:
# Claude가 요청 내용과 에이전트의 description을
# 매칭하여 자동으로 적합한 에이전트에게 작업 위임

# Agent Teams (실험 기능) — 활성화
$ export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
# 여러 Claude 인스턴스가 팀으로 협업,
# tmux 분할 패널에서 동시 관찰 가능`,
        },
        {
          heading: "Worktree와 Headless 실행",
          body: "에이전트를 진짜 병렬로 돌리려면 작업 공간 자체를 분리해야 한다. git worktree로 분기 작업, headless 모드로 CI/스크립트 통합. 두 패턴 모두 '사람이 한 세션을 보지 않아도' 일이 굴러가도록 만든다.",
          code: `# 1. git worktree로 병렬 분기 작업
$ git worktree add .worktrees/feat-frontend feat/frontend
$ git worktree add .worktrees/feat-backend  feat/backend

#   Agent A는 .worktrees/feat-frontend 에서
#   Agent B는 .worktrees/feat-backend 에서
#   각각 독립 워킹트리 → 충돌 없이 동시 작업 → 결과 병합

# 2. Headless / SDK — 비대화형 실행
$ claude -p "src/ 코드를 리뷰하고 마크다운으로 요약"

#   --output-format text       사람용 (기본)
#   --output-format json       프로그램용 (한 번에)
#   --output-format stream-json 스트리밍 파싱

# 3. CI 파이프라인에서 사용
- name: AI Code Review
  run: |
    claude -p "이 PR diff를 리뷰" \\
      --output-format json > review.json`,
        },
        {
          heading: "좋은 하네스의 3원칙",
          patterns: [
            { name: "반복 제거", body: "매번 같은 지시를 반복하지 않도록 CLAUDE.md와 Skills로 고정. 같은 프롬프트를 3번 이상 쳤다면 하네스로 옮길 때." },
            { name: "안전장치", body: "위험한 명령 차단, 시크릿 유출 방지. Hooks로 자동화된 가드레일. auto 모드를 쓰려면 필수." },
            { name: "팀 공유", body: "프로젝트의 .claude/ 폴더를 git에 커밋. 팀 전체가 같은 하네스를 공유 — 온보딩 비용이 급감." },
          ],
        },
        {
          heading: "실제 하네스가 동작하는 모습",
          code: `~/my-research-project
$ claude

Reading CLAUDE.md...          ← 프로젝트 규칙 로드
Loading 3 MCP servers...      ← 외부 도구 연결
Loading 2 custom agents...    ← 에이전트 준비
SessionStart hooks executed   ← 자동화 실행

❯ 실험 데이터 분석하고 결과 시각화해줘

↳ MCP: PostgreSQL 쿼리로 데이터 조회
↳ Agent: code-reviewer가 분석 코드 검증
↳ Write: plot.py 생성
↳ Bash: python plot.py
↳ Hook: PostToolUse → 코드 포맷팅 자동 실행

✓ results/ 폴더에 분석 결과 + 시각화 저장 완료

❯ /commit
↳ Skill: 변경사항 분석 → 커밋 메시지 생성
↳ Hook: PreToolUse → 시크릿 스캔 통과 ✓
✓ feat: 실험 데이터 분석 및 시각화 추가`,
        },
      ],
      links: [
        { label: "Anthropic — Claude Code docs", url: "https://docs.anthropic.com/claude-code" },
        { label: "Model Context Protocol", url: "https://modelcontextprotocol.io" },
      ],
    },
    {
      id: "03",
      num: "03",
      kicker: "Practice",
      title: "똑똑하게 연구하기",
      titleEn: "Research Smart with AI",
      summary: "논문 읽기, 코드 이해, 실험 설계, 결과 해석 — 연구 전 공정에 AI를 넣는 법.",
      readTime: "10 min",
      tag: "Workflow",
      sections: [
        {
          heading: "연구 루프에 AI 넣기",
          bullets: [
            "Lit review — Paper → tl;dr, 핵심 그림 해석, 재현 가능성 체크",
            "Hypothesis — 제안하는 방법의 weak spot을 AI에게 공격받기",
            "Implement — 논문 pseudocode → working prototype",
            "Analyze — plots 해석, ablation 결과 요약, 다음 실험 제안",
            "Write — figure caption, abstract draft, related work 표 작성",
          ],
        },
        {
          heading: "Do / Don't",
          doList: [
            "AI에게 '반대 입장'을 명시적으로 요청",
            "실험 결과 숫자는 직접 검증",
            "프롬프트를 실험 노트에 기록",
            "작은 단위로 자주 commit",
          ],
          dontList: [
            "생성된 수식을 검증 없이 논문에 붙여넣기",
            "프롬프트 없이 '알아서 해줘' 식 요청",
            "AI가 자신 있게 말해도 출처 없으면 신뢰",
            "벤치마크 숫자를 AI에게 맡기기",
          ],
        },
      ],
      links: [],
    },
    {
      id: "04",
      num: "04",
      kicker: "Patterns",
      title: "실전 프롬프트 패턴",
      titleEn: "Prompting Patterns",
      summary: "연구 실무에서 반복해서 쓰는 프롬프트 템플릿 9종.",
      readTime: "15 min",
      tag: "Reference",
      sections: [
        {
          heading: "기본 구조",
          body: "[Role] + [Context] + [Task] + [Constraints] + [Output format]. 순서는 유연하지만 다섯 요소가 모두 있을수록 결과가 안정됨.",
        },
        {
          heading: "자주 쓰는 패턴",
          patterns: [
            { name: "Paper → Code", body: "논문의 pseudocode/수식 블록을 붙여넣고 → 'PyTorch로 구현. shape 주석 포함. 단위 테스트 3개'" },
            { name: "Debug", body: "에러 전체 스택트레이스 + 관련 코드 + '가능한 원인 3가지와 각각의 확인 방법'" },
            { name: "Refactor", body: "현재 코드 + '이 함수를 ~ 원칙에 따라 분해. 동작은 유지. diff로 답할 것'" },
            { name: "Data explore", body: "dataframe.info() / head() / describe() 출력을 주고 → '이 데이터셋의 이상치, 결측, 특이점 3개씩'" },
            { name: "Plot", body: "현재 plot 스크립트 + 목표 메시지 → 'Nature 스타일로 polish. seaborn 대신 matplotlib. 컬러 CVD-safe'" },
            { name: "Red-team", body: "'이 방법의 약점을 reviewer 2 관점에서 5개. 각각 reviewer 1이라면 어떻게 반박?'" },
            { name: "Writing", body: "draft 문단 + 'NeurIPS 투고용 어조. hedging 줄이고. passive 줄이기'" },
          ],
        },
      ],
      links: [],
    },
    {
      id: "05",
      num: "05",
      kicker: "Hands-on",
      title: "Claude Playground",
      titleEn: "Try It Live",
      summary: "직접 프롬프트를 던지고 Claude의 응답을 받아보는 인터랙티브 데모.",
      readTime: "실습",
      tag: "Interactive",
      sections: [
        {
          heading: "이 섹션은 데모입니다",
          body: "아래 프롬프트 입력창에서 실제 Claude Haiku와 대화할 수 있습니다. 연구 시나리오 프리셋을 골라 바로 시작해보세요.",
        },
      ],
      links: [],
      demo: true,
    },
    {
      id: "06",
      num: "06",
      kicker: "Field Notes",
      title: "연구팀 케이스 스터디",
      titleEn: "Case Studies",
      summary: "실제 AI 연구팀이 vibe coding을 쓴 사례 3편. 속도 이득과 함정.",
      readTime: "11 min",
      tag: "Case",
      sections: [
        {
          heading: "Case A — Ablation 병렬 실행",
          body: "5가지 loss function 변형을 하루 만에 구현·학습·비교. 이전에는 1주 규모. 함정: 재현용 config 버전 관리를 수동으로 해야 했음.",
        },
        {
          heading: "Case B — Figure polish",
          body: "논문 figure 12개를 반나절에 publication quality로. Matplotlib 세밀한 조정을 자연어로 반복 수정. 최종 editing은 사람이 맡음.",
        },
        {
          heading: "Case C — Legacy code 이해",
          body: "전임자의 5만 라인 학습 파이프라인을 이틀 만에 온보딩. Claude에게 'overview → 각 모듈 요약 → 데이터 플로우 다이어그램' 순차 요청.",
        },
      ],
      links: [],
    },
    {
      id: "07",
      num: "07",
      kicker: "Extend",
      title: "Plugins — 묶어서 배포하기",
      titleEn: "Plugins & Distribution",
      summary: "Skills · Hooks · MCP · Agents를 한 패키지로 묶어 설치/공유. superpowers · octopus 같은 실제 플러그인 사례.",
      readTime: "9 min",
      tag: "Ecosystem",
      sections: [
        {
          heading: "Plugin = 확장 패키지",
          body: "지금까지 배운 Skills, Hooks, MCP, Agents — 이 네 가지를 한 폴더로 묶어 마켓플레이스를 통해 설치하고 공유할 수 있게 만든 것이 Plugin이다. 회사·팀이 자기 워크플로우를 표준화하는 단위. 한 사람이 만든 하네스를 팀 전체가 한 줄로 받아 쓰는 구조.",
          compare: {
            before: {
              label: "Plugin 없이",
              lines: [
                "팀원 A — .claude/ 폴더 따로 설정",
                "팀원 B — 비슷하지만 미묘하게 다른 설정",
                "신규 입사 — README 보고 손으로 따라하기",
                "→ 표류, 버전 드리프트",
              ],
            },
            after: {
              label: "Plugin 도입 후",
              lines: [
                "사내 마켓플레이스에 1개 plugin 등록",
                "$ /plugin install our-team@internal",
                "→ Skills+Hooks+MCP+Agents 한 번에",
                "→ 업데이트도 한 명령어로",
              ],
            },
          },
        },
        {
          heading: "설치 흐름",
          body: "마켓플레이스를 등록한 뒤 plugin 단위로 설치한다. 활성화 상태는 settings.json의 enabledPlugins 로 관리.",
          code: `# 1. 마켓플레이스 추가
$ /plugin marketplace add anthropics/official
$ /plugin marketplace add github:obra/superpowers

# 2. 플러그인 검색·설치
$ /plugin install superpowers@obra
$ /plugin install octopus@wshobson

# 3. 관리 UI
$ /plugin

# 4. settings.json 으로 활성화 고정
{
  "enabledPlugins": {
    "superpowers@obra": true,
    "octopus@wshobson": true,
    "github@official": false
  }
}`,
        },
        {
          heading: "구성 요소와의 관계",
          body: "Plugin은 새로운 개념이 아니라 '묶음 단위'다. 안에 들어가는 건 이미 배운 그 네 가지.",
          patterns: [
            { name: "Skills", body: "/명령어와 워크플로우. plugin-name:skill-name 으로 네임스페이스가 붙는다 (예: superpowers:debugging)." },
            { name: "Hooks", body: "PreToolUse · PostToolUse · SessionStart 등. plugin이 자동으로 settings.json에 훅을 등록." },
            { name: "MCP Servers", body: "외부 서비스 연결. plugin 설치 시 MCP 서버 정의도 같이 따라옴." },
            { name: "Agents", body: "서브에이전트 정의. plugin-name:agent-name 으로 호출 (예: octo:droids:octo-debugger)." },
          ],
        },
        {
          heading: "실제 플러그인 사례",
          body: "사내·커뮤니티에서 이미 운용 중인 플러그인들. 같은 '묶음'이지만 강조점이 다르다.",
          patterns: [
            { name: "superpowers (obra)", body: "Claude를 '훈련된 동료'처럼 만드는 메타 스킬셋. brainstorming · debugging · TDD 같은 작업 절차를 skill로 박아놓고, 'red flag 사고가 떠오르면 즉시 skill 호출' 같은 디시플린을 강제. 코드 품질이 아니라 '일하는 방식'을 제어하는 plugin." },
            { name: "octopus", body: "30+ 페르소나·드로이드 서브에이전트 모음 (octo:personas:backend-architect, octo:droids:octo-security-auditor 등). 작업별 전문 에이전트에 바로 위임. principles 라이브러리(보안·성능·유지보수)도 함께 제공." },
            { name: "telegram", body: "Telegram Bot API와 연결되는 MCP. 긴 학습이 끝나면 폰으로 알림 받기, 외부에서 채팅으로 명령 내리기 같은 패턴. 액세스는 /telegram:access 스킬로 관리." },
            { name: "notion", body: "Notion 워크스페이스 직접 조작. notion-search · notion-fetch · notion-update-page 등으로 회의록·PRD·DB를 컨텍스트에 가져오거나 업데이트." },
            { name: "claude-design (Anthropic Labs)", body: "디자인 캔버스로 변형(variant) 시안을 받아 그대로 코드/HTML 번들로 추출. 이 vibe-coding-edu 페이지도 design 캔버스에서 받은 핸드오프 번들을 옮긴 결과." },
          ],
        },
        {
          heading: "내 plugin 만들기 — 폴더 구조",
          body: "결국 '관습 폴더 구조 + plugin.json'. 만들고 git repo로 올리면 그게 곧 마켓플레이스 소스가 된다.",
          code: `my-team-plugin/
├── plugin.json              # 메타데이터 (name, version, description)
├── README.md
├── skills/
│   ├── deploy/
│   │   └── SKILL.md
│   └── pr-review/
│       └── SKILL.md
├── agents/
│   └── reviewer.md
├── hooks/
│   └── settings.json        # PreToolUse 훅 등
└── mcp/
    └── servers.json         # MCP 서버 정의

# plugin.json
{
  "name": "my-team-plugin",
  "version": "0.1.0",
  "description": "사내 표준 워크플로우",
  "skills": ["./skills/deploy", "./skills/pr-review"],
  "agents": ["./agents/reviewer.md"],
  "hooks": "./hooks/settings.json",
  "mcpServers": "./mcp/servers.json"
}

# 배포 — git push 한 번이면 끝
$ git push origin main
# 팀원: /plugin marketplace add github:our-org/my-team-plugin
#       /plugin install my-team-plugin@our-org`,
        },
        {
          heading: "어떨 때 plugin으로 묶어야 하나",
          bullets: [
            "팀이 같은 .claude/ 설정을 복붙하고 있을 때 — 한 plugin으로 표준화",
            "새 팀원 온보딩에 30분 넘게 환경 세팅을 시키고 있을 때",
            "특정 워크플로우(예: 논문 리뷰, 데이터 검수)가 여러 프로젝트에서 반복될 때",
            "외부에 자기 방법론을 공유하고 싶을 때 — 글 한 편보다 plugin 한 개가 강함",
            "반대로: 한 프로젝트에만 쓰는 한두 개 스킬이라면 plugin으로 묶지 말고 .claude/ 그대로 두기",
          ],
        },
      ],
      links: [
        { label: "obra/superpowers — Skill Discipline", url: "https://github.com/obra/superpowers" },
        { label: "Anthropic — Claude Code Plugins", url: "https://docs.anthropic.com/claude-code/plugins" },
      ],
    },
    {
      id: "08",
      num: "08",
      kicker: "Reference",
      title: "FAQ & Resources",
      titleEn: "FAQ & Resources",
      summary: "자주 받는 질문과 더 읽을 거리. 사내 정책, 보안, 라이선스.",
      readTime: "7 min",
      tag: "Reference",
      sections: [
        {
          heading: "FAQ",
          qa: [
            { q: "회사 코드를 AI에 붙여넣어도 되나요?", a: "Enterprise 플랜은 학습에 사용되지 않음. 그래도 비밀정보 · 고객 데이터는 금지. 사내 보안팀 가이드 준수." },
            { q: "할루시네이션은 어떻게 거르나요?", a: "숫자 · API 시그니처 · 논문 인용은 항상 원전 확인. 코드는 실행해서 검증. '확신에 찬 거짓말'은 생성형 AI의 본질적 실패 모드." },
            { q: "어떤 모델을 주로 써야 하나요?", a: "코드는 Claude Sonnet / Opus, 빠른 초안은 Haiku, 추론 무거운 건 Opus/GPT-5 Thinking. 예산에 따라 조합." },
            { q: "동료 연구원에게 어떻게 설득하나요?", a: "설득하지 말고 공유. 자신의 가장 반복적인 작업을 5분 만에 끝내는 시연 1회 = 슬라이드 50장보다 강력." },
          ],
        },
      ],
      links: [
        { label: "내부 — AI 사용 정책", url: "#" },
        { label: "Anthropic Academy", url: "https://anthropic.com/learn" },
      ],
    },
  ],
};
