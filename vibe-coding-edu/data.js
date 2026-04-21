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
      summary: "2025-26, 모델은 무엇이 달라졌고 우리는 무엇을 해야 하는가.",
      readTime: "8 min",
      tag: "Landscape",
      sections: [
        {
          heading: "무엇이 바뀌었나",
          body: "Reasoning 모델의 등장, Long-context (1M+ tokens), Tool-use와 Agent의 성숙. 2024년까지의 'LLM == 챗봇' 관점은 이미 오래된 프레임.",
          bullets: [
            "Reasoning/Thinking 모델 — GPT-5, Claude Sonnet 4.5, Gemini 2.5 (chain-of-thought 내재화)",
            "Agentic loop — Tool calling + 자율 실행, Claude Code / Cursor Agent / Codex 급부상",
            "Context window — 200K → 1M+ tokens, 대규모 코드베이스 통째 이해 가능",
            "Multimodal — 코드, 이미지, PDF, 음성을 한 컨텍스트에서 추론",
          ],
        },
        {
          heading: "연구자에게 의미하는 것",
          body: "연구 생산성의 병목이 '아이디어 → 코드' 구간에서 '실험 설계 → 해석' 구간으로 이동 중. 코드는 더 이상 시간의 bottleneck이 아님.",
          bullets: [
            "프로토타입 시간 단축: 2주 → 2시간 규모의 압축",
            "데이터 처리 파이프라인 자동화 — pandas, numpy, plotting 전체 AI 위임 가능",
            "Ablation 실험 속도 수십배 — 변수 변경을 자연어로",
          ],
        },
      ],
      links: [
        { label: "Anthropic — Building with Claude", url: "https://docs.anthropic.com" },
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
          patterns: [
            { name: "user", body: "사용자 프로필 — 역할, 기술 수준, 선호하는 협업 방식. 예) '나는 데이터 사이언티스트야'" },
            { name: "feedback", body: "작업 피드백 — 교정, 확인된 접근법, 행동 지침. 예) '테스트에서 DB 목킹 하지 마'" },
            { name: "project", body: "프로젝트 상황 — 진행 중인 작업, 마감일, 의사결정 배경. 예) '4/10부터 코드 프리즈'" },
            { name: "reference", body: "외부 참조 — 외부 시스템 위치, 대시보드, 문서 링크. 예) '버그는 Linear INGEST 프로젝트에'" },
          ],
        },
        {
          heading: "Skills — 재사용 가능한 /명령어",
          body: "Skills는 두 가지 형태가 있다. 간단한 Commands (마크다운 파일 하나 = 커맨드 하나)와 고급 Skills (폴더 + SKILL.md, 보조 파일 포함).",
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
---
staged changes를 분석하고 conventional commit
형식으로 커밋 메시지를 작성해주세요.`,
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
          heading: "Agents — 하위 에이전트로 병렬 작업",
          body: "Claude가 스스로 하위 에이전트를 만들어 집중된 작업을 위임한다. .claude/agents/ 에 정의하면 description을 매칭해 자동 위임이 일어난다.",
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
# 매칭하여 자동으로 적합한 에이전트에게 작업 위임`,
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
