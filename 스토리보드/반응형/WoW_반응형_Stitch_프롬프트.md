# World of Warcraft 반응형 웹사이트 — Stitch 디자인 요청서

> 이 문서를 Google Stitch에 그대로 붙여 넣어 시안을 요청합니다.
> 아래 **[STITCH PROMPT]** 부분이 실제 프롬프트이고, 나머지는 스토리보드에 정리된 기획 내용입니다.
> UI 안의 텍스트는 **한국어**로, 메뉴·섹션 제목·영문 장식 글자는 **영어**로 만들어 주세요.

---

## [STITCH PROMPT]

Design a **responsive fan-renewal website for World of Warcraft** (non-commercial student portfolio).
Create the **index (main) page** in three sizes: **Desktop 1440px, Tablet 768px, Mobile 375px**.

**Mood:** epic, cinematic, dark fantasy, premium game website (like an official AAA game launch page).
It must NOT look like a corporate/editorial website. No white backgrounds, no plain card lists.
Every section is a full-screen scene with large high-resolution artwork, glowing gold accents and dramatic lighting.

**Visual language**
- Dark background `#0E0C0A`, gold accent `#F8B700`, deep navy `#1B2A44`, ivory text `#E8E2D6`, muted text `#BFB7AA`
- Thin gold frame inside every section (1px line, inset 24px) with **gold corner brackets** on top-left and bottom-right
- Gold **diamond (rotated square)** ornaments: section indicators, dividers, icons
- Diagonal cuts with a thin gold edge line (slanted image panels)
- Gold glow (`box-shadow` / `text-shadow`) on active items, purple "void" glow on the hero title
- Headings in **Cinzel** (serif, all caps, wide letter-spacing); body in **Noto Sans KR**
- Buttons: solid gold parallelogram (slanted sides) + outlined gold secondary button

**Header (all pages)**
- Desktop: logo text "WORLD OF WARCRAFT" (Cinzel, gold, glow) on the left, 5 menu items on the right: ABOUT / EXPANSION / CHARACTERS / MEDIA / GALLERY. Active item has a thin gold box.
- Transparent over the hero, becomes solid `#0E0C0A` on scroll.
- Tablet/Mobile: logo + hamburger icon (≡). Full-screen overlay menu with large Cinzel menu items and gold diamond bullets.
- Fixed vertical **section indicator** on the left (6 gold diamonds, active one filled + glowing). Hide on mobile.

**Index page sections (top → bottom)**

1. **HERO — full-screen background video**
   - Looping muted cinematic video (Midnight expansion: void army charging), dark radial vignette.
   - Center: small label "THE WORLDSOUL SAGA" (gold, letter-spacing 14px) → huge title "MIDNIGHT" (Cinzel ~120px, white with purple glow) → Korean subtitle "한 밤 이 찾 아 온 다" (spaced letters).
   - Round gold-outlined PLAY button (▶ PLAY) with soft gold halo — opens cinematic popup.
   - Bottom: 3 video switch tabs "01 MIDNIGHT · 02 THE WAR WITHIN · 03 FOREVER" (active is gold).
   - "SCROLL" text with a thin gold vertical line.

2. **01 · ABOUT — "AZEROTH"**
   - Full-bleed artwork (city of Silvermoon), darkened.
   - Centered giant outline text "AZEROTH" (Cinzel ~200px, gold stroke only, transparent fill).
   - Headline "전설이 살아 숨 쉬는 세계", body: "두 진영의 영웅들이 세계를 위협하는 적에 맞서 싸워 온 판타지 세계. 끝없이 펼쳐진 대륙과 하늘을 직접 탐험하세요."
   - Gold ornament divider (line – diamond – line).
   - 4 stats separated by thin gold vertical lines: 2004 첫 출시 / 11 확장팩 / 24 플레이 종족 / 13 직업.

3. **02 · EXPANSION — full-screen switcher**
   - The selected expansion's artwork fills the whole section (left side darkened for text).
   - Left text block: label "02 · EXPANSION", big faded year "2026" behind, title "MIDNIGHT", Korean "한밤", description "공허의 그림자가 쿠엘탈라스를 덮칩니다. 빛과 공허의 경계에서 영원노래 숲을 지켜내세요.", buttons "자세히 보기" (gold) + "▶ 트레일러" (outline).
   - Bottom row: 4 thumbnail tabs with year + name: 한밤 2026 / 내부 전쟁 2024 / 용군단 2022 / 어둠땅 2020. Active tab: full color, gold border, glow, lifted up. Inactive: grayscale + dark.

4. **03 · CHARACTERS — character select screen**
   - Background: deep purple-to-black radial gradient.
   - Left half: large character artwork fading into the background (mask gradient).
   - Right: label, faction toggle (얼라이언스 / 호드), name "HARANIR" (Cinzel large), Korean "하라니르", description "깊은 숲 하란다르에서 살아온 고대 종족. 뿌리와 대지의 힘을 다루며 공허에 맞서 아제로스를 지킵니다.", class chips (전사 · 사냥꾼 · 주술사 · 드루이드).
   - Row of 5–6 **diamond-shaped portrait icons**; active one glows gold.

5. **04 · MEDIA — cinema**
   - Very dark navy/black background, centered title "CINEMATIC".
   - Large 16:9 video player with gold 1px border and purple ambient glow, round gold play button, caption "한밤 시네마틱 트레일러".
   - Film strip of 5 thumbnails below (active = gold border).

6. **SOUNDTRACK — "MUSIC OF AZEROTH"**
   - Background: blurred orange autumn forest art (Eversong), heavily darkened at both sides.
   - Left: square album cover with a black vinyl record sliding out to the right (vinyl rotates while playing).
   - Right: title "MUSIC OF AZEROTH", numbered track list (01 한밤 메인 테마 03:42 / 02 A Place to Call Home 04:05 / 03 내부 전쟁 메인 테마 04:18 / 04 용군단 메인 테마 03:55), playing track in gold with ❚❚ icon, gold progress bar with glow.

7. **05 · GALLERY — slanted accordion**
   - 5 tall slanted (parallelogram) image panels side by side. The hovered/active panel expands wide in full color; others are narrow, darkened, with vertical Cinzel labels (SILVERMOON / EVERSONG / HARANDAR / ZUL'AMAN / VOIDSTORM).
   - Click opens a fullscreen lightbox.

8. **Footer**
   - Black, thin gold top line. Gold logo text, SNS icons in gold-outlined circles, "개인정보처리방침 · 이용약관", "© 2026 포트폴리오용 비상업 리뉴얼 · 이미지 출처 Blizzard Entertainment".

**Responsive rules**
- Desktop 1440: layouts as described, sections ~100vh.
- Tablet 768: header → hamburger; EXPANSION thumbnails become a 2×2 grid or a swipe slider; CHARACTERS stacks (art on top, text below, icons in one row); MEDIA film strip scrolls horizontally; SOUNDTRACK stacks (album on top); GALLERY becomes a 2-column grid of normal (non-slanted) images.
- Mobile 375: one column everywhere, hero title ~48px, stats 2×2, EXPANSION as a Swiper slider with dots, CHARACTERS icons scroll horizontally, GALLERY 2 columns. Keep the gold frame and corner brackets (inset 12px).

**Interaction notes (for the developer)**
- Scroll reveal animations (fade-up, zoom-in) on every section.
- Hero video switch tabs, expansion tab switching, character icon switching = class toggle.
- Sliders = Swiper. No frameworks; plain HTML/CSS/jQuery only.

---

## 1. 프로젝트 개요 (스토리보드 표지)

- 제목: **WORLD OF WARCRAFT** — 월드 오브 워크래프트 반응형 웹사이트 제작
- 라벨: `HTML5 RESPONSIVE WEB PROJECT`
- 제작기간: 약 1개월
- 제작스킬: HTML5, CSS3, JavaScript, jQuery, Media Query, Swiper, AOS / Figma, Adobe Photoshop
- URL: https://ouoaoi.mycafe24.com/media/ (예정)
- 목표: 전기수 반응형 작업(스페이스X, 케이팝 데몬 헌터스, 일광전구)보다 **더 화려하고 완성도 높게**

## 2. 디자인 콘셉트

- 키워드: 웅장함 · 시네마틱 · 다크 판타지 · 금빛 장식
- 국순당(밝고 정갈한 기업형)과 반대로, **게임 공식 런칭 페이지** 같은 몰입형 디자인
- 모든 섹션 = 화면 한 장 크기의 장면(풀스크린 원화 + 오버레이 텍스트)
- 반복 장식: 금색 꺾쇠 프레임, 마름모, 사선 + 금색 선, 금빛 발광

## 3. 디자인 폰트

| 용도 | 폰트 | 굵기 |
|---|---|---|
| 영문 제목 · 메뉴 · 숫자 장식 | **Cinzel** (Google Fonts) | Regular 400 · Bold 700 |
| 한글 본문 · 영어 · 숫자 | **Noto Sans KR** (Google Fonts) | Regular 400 · Bold 700 |

## 4. 디자인 컬러

| 이름 | 코드 | 용도 |
|---|---|---|
| MAIN | `#0E0C0A` | 배경 |
| POINT | `#F8B700` | 강조 · 버튼 · 장식 |
| SUB | `#1B2A44` | 섹션 배경 |
| FONT | `#E8E2D6` | 본문 글자 |
| FONT 2 | `#BFB7AA` | 설명 · 날짜 |

## 5. 사이트맵 (메뉴 5개)

- **INDEX** (WORLD OF WARCRAFT)
  - **ABOUT** — 게임 소개 (회사소개 역할)
  - **EXPANSION** — 확장팩
  - **CHARACTERS** — 종족 · 직업
  - **MEDIA** — 시네마틱 · 사운드트랙 (멀티미디어: 영상/사운드)
  - **GALLERY** — 갤러리 (포토갤러리)

## 6. 반응형 기준 (Media Query)

- 와이드/일반 PC: 1440px 기준 (최대 콘텐츠 폭 1280px)
- 태블릿: 768px ~ 1024px
- 모바일: 375px (최소 320px까지 깨지지 않게)

## 7. 서브페이지 요청 (메인 다음 단계)

Stitch에 메인 다음으로 요청할 서브페이지입니다. 메인과 같은 스타일을 유지합니다.

- **ABOUT**: 세계관 소개, 얼라이언스/호드 진영 비교, 연대표(2004 ~ 2026)
- **EXPANSION**: 확장팩 4개 상세(원화, 소개, 주요 지역, 트레일러 버튼)
- **CHARACTERS**: 종족 그리드(진영 탭 필터) + 직업 목록, 클릭 시 상세 팝업
- **MEDIA**: 시네마틱 영상 목록(유튜브 팝업) + 사운드트랙 플레이어
- **GALLERY**: 원화 masonry 그리드 + 라이트박스

## 8. 사용할 공식 자료 (출처: Blizzard Entertainment)

**히어로 영상**

- 한밤 시네마틱 배경 (2419×1080, 7초): https://blz-contentstack-assets.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte9cfd96e5bcf37a9/69b09104eb1d690008436dec/MidnightCinematic_masthead3.webm
- 세계혼 서사시 배경 (2560×1440, 4초): https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltb82446f4e6349ab9/6acdd63f2c0580d02d2747de/WOW_2026_12.1.5_Masthead_crossfade.mp4
- 포에버 하이잘 풍경 (1920×1080, 16초): https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt9e4944aa1727b4d3/6a97ea4cf8f1247522bcb8c2/Hyjal02.mp4

**원화 (2600px)**

- 공식 한밤 페이지: https://worldofwarcraft.blizzard.com/ko-kr/midnight
  - 키아트(공허 군단), 실버문, 영원노래 숲, 하란다르, 줄아만, 공허폭풍, 던전, 악마사냥꾼, 하라니르 등
- 종족 페이지: https://worldofwarcraft.blizzard.com/ko-kr/game/races
- 미디어 갤러리(시네마틱 50개, 음악 17개): https://worldofwarcraft.blizzard.com/ko-kr/media

## 9. 페이퍼 프로토타입 구성 (선생님 조건)

PC · 태블릿 · 모바일 각각 아래 순서로 스케치합니다.

1. 헤더
2. 메인 풀영상 (HERO)
3. 본문 콘텐츠 5개: ABOUT / EXPANSION / CHARACTERS / MEDIA(+SOUNDTRACK) / GALLERY
4. 푸터

## 10. 제작 조건

- 수업 범위 안에서 구현: HTML5, CSS3, jQuery, Swiper, AOS, Media Query
- React · Vue · Tailwind 등 프레임워크 사용 안 함
- W3C 마크업 · CSS 검사, 웹 접근성(K-WAH) 통과 목표: 이미지 alt, label, 제목 구조 지키기
- 포트폴리오용 비상업 사이트이며, 이미지 · 영상 출처(Blizzard Entertainment)를 사이트에 표기
