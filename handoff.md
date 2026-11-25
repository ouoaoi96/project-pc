# 국순당 웹사이트 클론 프로젝트 — 이어서 작업하기

> 새 대화창에 이 파일을 첨부하고 시작하세요.
> (2026-10-02 갱신 — 서브3 3페이지 완성)

---

## 0. 나에 대해

- 웹디자인 아카데미 수강생, **코딩 완전 초보**
- 이 프로젝트는 **포트폴리오용** (상업용 아님)
- 국순당 웹사이트를 **HTML5 + CSS3** 로 클론 코딩 중 (옛날 XHTML → HTML5)
- **PC 전용, 반응형 없음**
- 작업 폴더: `C:\YDM\기업형 프로젝트\www`
- 선생님 예제 폴더: `C:\YDM\new_sample`
  (집 컴퓨터와 학원 컴퓨터를 오갑니다. 폴더 연결 후 실제 경로를 확인하세요)

---

## 1. 나를 가르치는 방식 (★ 반드시 지켜주세요)

1. **답을 바로 알려주지 마세요.** 힌트를 주고 내가 직접 하게 해주세요.
   내가 "모르겠어" / "알려줘" 라고 하면 그때 답을 주세요.
2. **초등학생에게 설명하듯** 쉽게. 나는 CSS 속성도 잘 모르고 우선순위(급수)도 헷갈립니다.
3. **짧게. 한 번에 하나씩만.** 여러 개 한꺼번에 주면 못 따라갑니다.
   (다만 CSS 한 줄짜리처럼 짧은 건 **3개씩** 묶어줘도 됩니다)
4. **내가 안 시키면 내 파일을 직접 고치지 마세요.** "너가 해줘" 라고 할 때만.
   - 뭐가 잘못됐는지 **먼저 물어보세요.** 멋대로 전면 수정하면 안 됩니다.
5. **내 말을 지어내지 마세요.** 내가 안 한 말을 내가 한 것처럼 쓰지 마세요.
6. 확인할 땐 **확대해서 꼼꼼히** 보세요. 대충 보고 잘못 말한 적 많습니다.
7. **존댓말만** 사용하세요. 반말 금지.
8. **HTML은 퀴즈/문제 형식으로** 가르쳐주세요. 답을 주지 마세요.
9. **CSS도 퀴즈로** 내주세요. 코드를 통째로 주지 마세요.
10. **선택지를 낼 때 정답을 흘리지 마세요.**
11. 방법이 여러 개일 때는 **선택지를 다 제시하고 고르게** 해주세요.
12. 시안(디자인) 제안할 때 **같은 레이아웃 패턴을 반복하지 마세요.**
13. **Figma는 나 대신 만들 수 없습니다.** 좌표표를 통째로 던지지 말고,
    **한 단계씩** "이거 하세요 → 됐으면 알려주세요" 방식으로 진행하세요.
14. **나는 Figma를 잘 못합니다.** 패널 위치, 단축키까지 알려주세요.
15. 시안 검사는 내가 Export 해서 저장한 뒤에만 가능합니다.
    파일 mtime을 확인해서 **저장 안 됐으면 그렇다고 말해주세요.**
16. **마크업도 내가 직접 칩니다.** 완성된 HTML 블록을 통째로 주지 마세요.
    어떤 태그를 어떤 계층으로 쓸지 **구조만** 알려주고, 내가 짜서 보여주면 틀린 곳을 지적해주세요.
17. **피그마 굵기는 숫자 말고 이름으로.** `Weight 300` 이 아니라 `Light`.
    `Light / Regular / Medium / SemiBold / Bold / ExtraBold / Black`
18. **행간은 `행간(Line height)`, 자간은 `자간(Letter spacing)`** 으로 한글·영어 같이 적어주세요.
    (표 안에 쓸 때도 똑같이. 계속 빠뜨려서 여러 번 지적했습니다)
19. 내가 "아니야" 라고 하면 **우기지 말고 다시 확인**하세요.

### ★ 이번에 추가된 것

20. **위치·크기·굵기·색·행간·자간을 한 번에 다 주세요.**
    글자 하나 물어봤는데 크기만 주고 굵기는 다음에 주는 식으로 하지 마세요.
21. **행간·자간은 % 단위로.** `1.8` 이 아니라 `180%`. 피그마가 % 로 받습니다.
22. **이미 만든 것은 수정 요구하지 마세요.** 새로 만들 것 안에서 해결하세요.
23. **선택지를 줄 때는 번호를 붙여주세요.** 내가 숫자로만 답할 수 있게.

### ★ 2026-10-02 추가된 것

24. **고칠 곳은 반드시 몇 번 줄인지 같이 말해주세요.**
25. **한 대상(선택자)에 쓸 것은 한 번에 다 주세요.** 속성 하나씩 따로 주지 마세요.
26. **피그마 표는 `글자 설정 → W → X·Y` 순서로.** 위치를 먼저 넣고 글자 크기를 바꾸면 위치가 틀어집니다.
27. **알려주기 전에 수업 노트·선생님 예제에 있는 문법인지 먼저 확인하세요.** (`C:\YDM\new_sample` 연결해서 grep)
28. **클래스 이름은 AI가 골라줘도 됩니다.** (뜻도 같이 알려주기)
29. **피그마 레이어 이름 바꾸기는 시키지 마세요.** 안 합니다.
30. 내가 "모르겠어"라고 하면 **정답 + 쉬운 설명**을 바로 주세요. 같은 힌트를 반복하지 마세요.
31. **선생님이 마크업 구조를 그려주신 시안(`○○ 선생님.jpg`)이 있으면 그게 기준**입니다. 내 생각대로 바꾸지 마세요.
   (예: 백세주 STORY의 `span`은 선생님 지시대로 **`h3` 안에** 넣습니다)

---

## 2. 코딩 규칙 (선생님 지시)

- **색·크기는 하드코딩 금지.** `:root` 변수 사용 → `var(--color-main)`
- 셀렉터 앞에 `#content` 같은 **부모를 붙여서 급수(우선순위) 맞추기**
- **`flex: 1` 금지.** `width` 로 직접 정하기
- `gap` 보다 `justify-content: space-between` 선호
- CSS는 **한 규칙당 한 줄** 압축 스타일
- **여백이 두 방향 이상이면 묶어 쓰기** → `margin: 80px 0 0 300px`
- 자식 선택자 `>` 보다 **클래스 이름 지정** 위주.
  (단, 중첩된 `ul` 안쪽까지 딸려오는 걸 막을 때는 `>` 써도 됩니다)
- `<section>` 을 쓰면 **반드시 `h2`~`h6` 헤딩을 하나 갖게** 하기
- 화면에 안 보이는 제목은 `class="hidden"` (off-screen 방식)

### ★ 급수(우선순위) 주의
`#content .word .han` 은 클래스 3개, `#content .word > .wrap > p` 는 클래스 2개 + 태그 1개.
**태그도 급수에 들어가서** 뒤쪽이 이깁니다. 클래스를 하나 더 붙여야 합니다.

### ★ 같은 값을 두 파일에 쓰지 말 것
공통 파일과 개별 파일에 같은 선택자로 같은 속성을 쓰면, **나중에 불러온 쪽이 이깁니다.**
공통값은 `_common.css` 에만 한 번 쓰고, 개별 파일에는 그 페이지에서만 다른 것만 남기세요.

### ★ margin collapse (여백 상쇄)
부모 박스 안 **첫 자식의 `margin-top`** 은 부모를 뚫고 밖으로 나갑니다.
섹션 위 여백은 `margin-top` 말고 부모의 **`padding-top`** 으로 주세요.

---

## 3. ★ 수업에서 배운 문법 안에서만 짜기

`html5 문법 설명.txt` (내 수업 노트)에 있는 것만 쓰세요. **노트에 없는 문법은 쓰기 전에 물어보세요.**

**써도 되는 것**
```
flex (gap, justify-content, align-items, flex-grow, order, align-self, flex-wrap, align-content)
grid (grid-template-columns/rows, repeat(), grid-area, gap)
float + 부모에 overflow:hidden
position (relative / absolute)
transform (translate, scale, rotate, skew), transform-origin
transition, animation + @keyframes
filter, backdrop-filter
border-radius, box-shadow, text-shadow, border-image
background 멀티, background-size(cover/contain), background-origin
column-count / column-width / column-gap / column-rule
box-sizing, resize, overflow, text-overflow(ellipsis)
:root 변수 + var()
선택자 : nth-child, nth-of-type, first-child, last-child, first-of-type, last-of-type, odd/even
속성 선택자 : [class^=], [class$=], [class*=]
자식 선택자 >
::before / ::after + content
z-index (음수 포함)
IR 기법 (text-indent: -999px + overflow:hidden)
.hidden (스킵네비/스크린리더용)
@font-face, 구글 웹폰트 @import
HTML5 : header footer nav main section article aside figure figcaption mark time
        ruby meter progress details summary iframe video audio
form : email url range date time color required placeholder pattern list+datalist
jQuery 1.x : load, getScript, ajax, filter, includes, slideUp/slideDown, toggle(fn,fn)
```

**쓰지 말 것**
```
flex: 1        (선생님 금지)
calc()         (노트에 없음)
vw / vh        (안 배움)
그 외 노트에 없는 것 → 먼저 물어보기
```

**예외로 이미 쓰고 있는 것**
```
object-fit: cover   (히어로 사진)
object-fit: none    (원본 크기 유지 + 가운데 자르기)
border-radius: 8px  (sub2_3 등에서 이미 사용 중)
```

**노트·예제에서 확인하고 쓴 것 (2026-10-02)**
```
background: none          (선생님 QandA 예제)
border: 0                 (노트 549번 줄 · 검색 예제) ← border: none 말고 이걸로
tag.class  (a.on, button.on)   (선생님 member_check.css)
input:focus{outline-color}     (선생님 login.css)
outline: none             (예제엔 없음 — 검색창 아래선 디자인 때문에 내가 선택)
vertical-align: top       (노트 549번 줄, img 아래 틈 없애기)
li:first-child::before{display:none}   (노트 242번 줄)
$(document).on('click', ...)   (선생님 search_all_popup 예제 — JS가 만든 요소 클릭)
hasClass / addClass / removeClass   (선생님 faq.js)
$({val:0}).animate({val:N},{step,complete})   (선생님 카운트변환 예제)
```

**변수에 없는 크기는 rem으로** (하드코딩 예외)
```
1.5rem (24px)   1.25rem (20px)   0.94rem (≈15px)   0.81rem (≈13px)   0.75rem (12px)
```
**반투명 색은 변수로 못 만들어서 rgba 그대로** → `rgba(0,0,0,.7)` (팝업 배경)
**흰색 변수 없음** → 흰 글자는 `var(--color-sub1)` (#FAFAFA)

---

## 4. 폴더 구조 (2026-10-02 현재)

```
기업형 프로젝트/
├── handoff.md                    ← 이 파일
├── www/
│   ├── index.html                ✔ 완료
│   ├── favicon.ico
│   ├── css/   common.css  main.css
│   ├── js/    jquery-1.12.4.min.js  jquery-migrate-1.4.1.min.js
│   │          jquery.easing.1.3.js  fullnav.js  select.js  move.js  mainpopup.js
│   ├── images/
│   ├── common/                   ← ★ 헤더·푸터 공통 파일 (신규)
│   │   ├── main_header.html  main_footer.html
│   │   └── sub_header.html   sub_footer.html
│   ├── sub1/  css/ images/ js/   sub1_1 ✔ sub1_2 ✔ sub1_3 ✔ sub1_3_2 ✔
│   ├── sub2/  css/ images/       sub2_1 ✔ sub2_2 ✔ sub2_3 ✔
│   ├── sub3/  css/ images/ js/   sub3_1 ✔ sub3_2 ✔ sub3_3 ✔
│   │   ├── product.json          ✔ 17개 제품
│   │   ├── css/  sub3_common  sub3_1  sub3_2  sub3_3
│   │   └── js/   product.js(검색·필터·개수·MORE팝업)  acc.js(아코디언)  count.js(숫자 올라가기)
│   ├── sub4/  css/ images/       sub4_1 ✔ sub4_2 ✔
│   ├── sub5/                     sub5_1 ✘ sub5_2 ✘  (빈 파일)
│   ├── sub6/  css/ images/ js/   sub6_1 ✘ sub6_2 ✘ sub6_3 ✔
│   ├── login/   login.html ✔     css/login.css ✔
│   ├── member/  join.html ◐      member_check.html ✔
│   ├── 시안/    메인·서브1·서브2·서브3·서브4·서브6 + 사진/
│   │   └── 서브3/  백세주.jpg  법고창신.jpg  제품소개.jpg   ← ★ 내가 피그마로 만든 기준 시안
│   │               백세주 선생님.jpg  법고창신 선생님.jpg  ← 선생님 마크업 구조 표시
│   │               sub3_*_시안*.jpg  ← AI가 만든 참고용 (기준 아님!)
│   └── 스토리보드/ slide01~17.jpg (1280×720)
└── new_sample/                   ← 선생님 예제 (별도 폴더, 연결해서 쓰세요)
```

**규칙** — 아트보드 2000px, 컨테이너 1400px 고정 (좌우 여백 각 300)

---

## 5. common.css 의 :root 변수

```css
--color-main   : #FF8C00;   /* 주황 */
--color-point1 : #E67300;
--color-point2 : #2E2521;   /* 옹기색 */
--color-point3 : #C9A45C;   /* 금색 */
--color-sub1   : #FAFAFA;
--color-sub2   : #F0F0F0;
--color-font1  : #333;
--color-font2  : #666;
--color-font3  : #999;

--font-60-size : 3.75rem;   /* 60px */
--font-50-size : 3.13rem;   /* 50px */
--font-40-size : 2.5rem;    /* 40px */
--font-32-size : 2rem;      /* 32px */
--font-18-size : 1.13rem;   /* 18px */
--font-16-size : 1rem;      /* 16px */
--font-14-size : 0.88rem;   /* 14px */
```

`html{font-size: 16px}` / 폰트 Noto Sans KR
그래프 두 번째 계열 색은 `#6E655C` (색약 대비 검증 완료, 변수 아님)
백세주마을 BI 갈색은 **`#3E2D18`** ← 내가 맞습니다. 다르게 알려주지 마세요.

**★ body 에 `letter-spacing: -0.02em` 이 걸려 있습니다.**
Figma에서 모든 글자에 자간(Letter spacing) **-2%** 를 넣어야 실제와 같아집니다.

### 글자 크기 규칙

- **서브 페이지 `h2`** → `var(--font-50-size)` (50px), 굵기 Light(300), `span` 만 ExtraBold(800)
- **`h2` 밑 설명문** → `1.3rem` (공통 파일의 `.title_area p`)
- **섹션 `h3` 밑 한 줄 슬로건** → `18px`
- **`.eng` (영문 소제목)** → `0.75rem`, Bold(700), 자간(Letter spacing) 20%, 금색

---

## 6. GNB 메뉴 구조 (depth 번호는 GNB 순서)

```
1depth 회사소개      → sub1_1 국순당소개 / sub1_2 국순당역사 / sub1_3 오시는길
2depth 우리술이야기   → sub2_1 우리술 알아보기 / sub2_2 우리술 복원사업 / sub2_3 국순당술의 특징
3depth 제품소개      → sub3_1 백세주 / sub3_2 법고창신 / sub3_3 제품 검색
4depth 백세주마을     → sub4_1 백세주마을 소개 / sub4_2 백세주마을 BI
5depth 홍보센터      → sub5_1 공지사항 / sub5_2 이벤트
6depth 채용안내      → sub6_1 인재개발 / sub6_2 채용절차 / sub6_3 FAQ
```

ESG 페이지는 뺐습니다. 서브메뉴 3개짜리는 `.sub_nav ul li{width: 33.333%}`,
2개짜리(백세주마을)는 `width: 50%`.

**★ 이름 통일 안 됨** — 피그마는 「인재채용」, HTML은 「채용안내」. 하나로 정해야 합니다.

---

## 7. 헤더·푸터 공통화 (★ 이번에 새로 함)

`www/common/` 에 4개 파일로 분리하고, 각 페이지에서는 껍데기만 둡니다.

```html
<header id="headerArea"></header>
...
<footer id="footerArea"></footer>
```

`</body>` 바로 위 스크립트 (서브 페이지 기준):

```html
<script src="../js/jquery-1.12.4.min.js"></script>
<script src="../js/jquery-migrate-1.4.1.min.js"></script>
<script>
    $('#headerArea').load('../common/sub_header.html',function(){
         $.getScript('../js/fullnav.js');
    });
    $('#footerArea').load('../common/sub_footer.html',function(){
        $.getScript('../js/select.js');
    });
</script>
```

- 메인(index.html)은 `./common/main_header.html`, `./common/main_footer.html`
- **`$.getScript` 를 콜백 안에 넣어야 합니다.** 로드가 끝나기 전에 스크립트가 돌면 요소를 못 찾습니다.
- 적용 완료: index, sub1_1~1_3_2, sub2_1~2_3, sub4_1, sub4_2, sub6_3 (전부)

---

## 8. 완료된 것

| 페이지 | 시안 | 마크업 | CSS | 비고 |
|---|---|---|---|---|
| index.html | ✔ | ✔ | ✔ | 팝업 디자인 교체 남음 |
| sub1_1 국순당소개 | ✔ | ✔ | ✔ | |
| sub1_2 국순당역사 | ✔ | ✔ | ✔ | 연혁 사진 9장 미제작 |
| sub1_3 오시는길 | ✔ | ✔ | ✔ | 카카오맵 |
| sub1_3_2 | — | ✔ | ✔ | |
| sub2_1 우리술 알아보기 | ✔ | ✔ | ✔ | |
| sub2_2 우리술 복원사업 | ✔ | ✔ | ✔ | |
| sub2_3 국순당술의 특징 | ✔ | ✔ | ✔ | 막대그래프·농가섹션 수정 남음 |
| sub3_1 백세주 | ✔ | ✔ | ✔ | |
| sub3_2 법고창신 | ✔ | ✔ | ✔ | 아코디언 JS · 숫자 카운트 JS |
| sub3_3 제품 검색 | ✔ | ✔ | ✔ | 검색 · 카테고리 필터 · 개수 · MORE 팝업 · 돋보기 아이콘 |
| sub4_1 백세주마을 소개 | ✔ | ✔ | ✔ | |
| sub4_2 백세주마을 BI | ✔ | ✔ | ✔ | |
| sub5_1 / sub5_2 | ✘ | ✘ | ✘ | 빈 파일 |
| sub6_1 / sub6_2 | ✘ | ✘ | ✘ | 빈 파일 |
| sub6_3 FAQ | ✔ | ✔ | ✔ | EmailJS 봇 보호 해제 남음 |
| login.html | — | ✔ | ✔ | 국순당 색 적용 완료 |
| join.html | — | ✔ | ◐ | **색 변경 + 오타 수정 남음** |
| member_check.html | — | ✔ | ✔ | |

---

## 9. ★ 서브3 (제품소개) — 완성 기록

### sub3_3 제품 검색
- 기준 시안은 **`제품소개.jpg`** (`sub3_3_시안.jpg` 아님! 선물세트 버튼 있는 건 틀린 시안)
- 검색창 800px · 아래선 2px 옹기색 · 입력칸 `outline: none` · 버튼 = 구글 아이콘 `search` + `.hidden`
- 카테고리 버튼: 알약 42px, `border-radius: 21px`, 선택 `button.on`
- 카드: `ul` flex + `flex-wrap: wrap` + **`gap: 40px`** (space-between 쓰면 마지막 줄 2장이 양끝으로 벌어짐)
- `product.js`
  - 개수: `dataPrint` 안에서 `$('.count').html('총 <span>'+arr.length+'</span>개')`
  - 카테고리: 버튼 class(`bsj/mgl/bg/yd`) = json `Cate` → `btn.hasClass(element.Cate)`로 filter
  - MORE 팝업: 선생님 `jQuery_ajax_search_all_popup` 방식, `search_on`으로 검색/전체 목록 구분
  - `newArray`, `search_on`은 **함수 밖에** `var`로 선언 (안에 var 쓰면 팝업이 못 봄)
- 남은 것: 막걸리 버튼 누른 뒤 검색하면 `on`이 막걸리에 남아 있음 (고칠지 미정)

### sub3_1 백세주
- 선생님 구조: `section.info`(img + `div.info_txt`(span.since, h3, p, ul.spec>li×3>span)) / `section.herb`(h3, p, ul>li×12) / `section.story`(h3>span.eng, ul>li×3, 주황은 span)
- 용량·원료 표: li `padding-left:150px` + span `position:absolute` (flex로 하면 원료 줄에서 제목칸이 줄어듦)
- 재료 사이 금색 점: `li::before{content:'·'}` + `li:first-child::before{display:none}`

### sub3_2 법고창신
- h2: 「법고창신, / **천년 전 술을 다시 빚다**」
- 옹기색 띠 `section.record`: 「문헌에서 찾아낸 우리술」 + `<li><strong>600</strong>여<span>…</span></li>` (여·종은 태그 없이 li 글자)
- 아코디언 `section.restore > div.acc > ul > li.hide × 5`
  - `li > div.tit > a(span.num, strong, span.sub, span.material-symbols-outlined)` + `div.con(div.pic(img, span), dl(dt+span출처, dd, dd))`
  - 처음엔 **5개 모두 닫힘** (`expand_more`)
  - `.con`은 **flex 대신 float** (slideDown이 display:block으로 바꿔서 flex가 풀림)
  - `acc.js` = 내 `sub6/js/faq.js` 이름만 바꾼 것
- `count.js`: 선생님 카운트 예제(오타 `fuction` 고침) → 스크롤해서 띠 보이면 0→600/24/2008, `count_done`으로 한 번만
- 송절주 보조설명은 「소나무 마디로 빚은 술」 (무형문화재 제2호 뺌)

## 10. ★ 앞으로 할 일 (우선순위 순)

```
[ ] 1. 메인 히어로 슬라이드 사진 3장 중 뒤 2장이 같은 사진 → GPT로 1장 새로 만들기 (프롬프트 짜기부터)
[ ] 2. 메인 제품소개 아래 「술 이름 흐르는 띠」 (@keyframes + animation infinite)
[ ] 3. 메인 바로가기 링크 연결 (홍보센터 · 채용안내 등 → 실제 서브페이지 주소)
[ ] 4. 메인 「복원한 술법 · 오늘의 술」 카드형 슬라이드 (01 / 03 표시 + 좌우 화살표 동작)
[ ] 5. join.css 국순당 색으로 변경
[ ] 6. join.html  required>> 꺾쇠 오타 4군데 (hp2, hp3, mail1, mail2)
[ ] 7. sub2_3 막대그래프 다시 만들기
[ ] 8. sub2_3 농가 섹션 img → background-image
[ ] 9. sub1_2 연혁 사진 9장 만들기
[ ] 10. 메인 팝업 디자인 교체 (B안 확정)
[ ] 11. sub5_1 sub5_2 sub6_1 sub6_2 (시안부터) — sub5_1은 마크업 시작함
[ ] 12. EmailJS Bot protection 해제
[ ] 13. 「인재채용 / 채용안내」 이름 통일
[ ] 14. www/images 안 쓰는 이미지 정리 (section.png 1.8MB 등)
[ ] 15. .sub_nav ul li a 색 통일 (CSS #666 vs 시안 #999)
[ ] 16. sub3_1 · sub3_3 히어로 img alt 「백세주마을 소개」 → 바르게 고치기
```

## 11. ★ 미뤄둔 자잘한 수정 (안 끝났음)

### index.html (메인)
- [ ] 채용안내 박스 Y를 홍보센터 박스와 같게 (60px 위로 올라가 있음)
- [ ] TOP 버튼 주황 원 80×80 / X 1750
- [ ] 섹션 왼쪽 296 → 300 (4px 오차)
- [ ] 복원 4단계 카드를 sub2_2로 옮길지 — **검토만 하고 안 정했음**

### sub2_3 시안 (피그마)
- [ ] 탭1 캡션에서 큰따옴표 빼기 → `왼쪽 설갱미 · 오른쪽 일반미`
- [ ] **탭2 옹기 사진 교체** — 제미나이 원본이라 오른쪽 위에 워터마크 별표가 보임.
      `sub2/images/sool_mash.jpg` 로 바꿀 것 (Fill 썸네일 클릭 → Choose image)
- [ ] 탭2 카드 안 내용 글자 `Regular` 로

### sub2_2 시안 (피그마)
- [ ] **푸터 붙이기** — Y 2909, 2000 × 352. sub2_1·sub2_3엔 있는데 이것만 없음
- [ ] **프레임 높이 4728 → 3261** (sub2_1에서 복제해서 아직 4728)

### CSS
- [ ] `sub2_1.css` 의 `.merit li` — `gap: 30px` → **`20px`**
      (335×4 + 20×3 = 1400. 30이면 1430이라 카드가 눌림)

### ★ 안 건드릴 것 (결론 난 것)
- 메인 히어로 설명글 16px vs 서브 히어로 17px — **그냥 두기로 했습니다.**
  제목 크기가 다르니(48 vs 40) 설명도 다른 게 맞습니다
- sub2_3 시안 두 장을 한 아트보드로 합치기 — **불필요.**
  선생님 말씀은 시안이 아니라 **HTML을 한 파일로 짜라**는 뜻이었습니다
- `border-radius: 8px` — 지우지 마세요. `sub2_3.css` 등에서 이미 쓰고 있습니다

### ★ 이미 고친 것 (되돌리지 마세요)

| 파일 | 내용 |
|---|---|
| `sub1_common.css` · `sub2_common.css` | `.title_area p` 에 `font-size: 1.3rem; color: var(--color-font2)` 추가 |
| `sub1_1.css` | 위와 중복되던 `font-size: 1.25rem` 과 `color` 삭제 |
| `sub2_1.css` | `.era p` `.enjoy p` 16px → 18px |
| `main.css` | `.intro p` `.origin p` `.restoration .rest_txt p` 에 18px 추가 |
| `main.css` | 배경 경로 `section_01.png` → `section.png` |
| `sub1_common.css` | `.visual strong span{font-weight: 700;}` 추가 (800 아니라 **700**) |
| `login.css` | `#064f9e` → `var(--color-point2)`, focus는 `var(--color-main)`, 배경 `var(--color-sub1)` |
| `join.html` | CSS 경로 `../common/css/common.css` → `../css/common.css` |
| `images/logo_black.png` | 480×234 → **129×63** 으로 축소 |

---

## 12. 법고창신 다섯 술 (원본 bglinfo.asp에서 확인 — 다시 조사하지 마세요)

| 술 | 용량 · 도수 | 문헌 |
|---|---|---|
| 송절주 | 550·700ml · 16.5도 | 규합총서 · 1809년 |
| 자주 | 550·700ml · 17도 | 주찬 · 1800년대 초 (원본엔 「주창」 오타) |
| 이화주 | 400·700ml · 12.5도 | 수운잡방 · 1500년대 초 |
| 청감주 | 550·600ml · 11.5도 | 수운잡방 · 1500년대 초 |
| 사시통음주 | 550·600ml · 18도 (제품 사진 속 표) | 술 만드는 법 · 1800년대 말 |

순서는 원본대로 송절주 → 자주 → 이화주 → 청감주 → 사시통음주.
「600여 가지」(문헌 속 술), 「24종」(복원), 「2008」(첫 복원 창포주)이 맞는 숫자입니다.

## 13. ★ 자주 쓰는 CSS 패턴 (이미 여러 번 쓴 것)

### 2000px 전체폭 섹션 (3개 세트)
```css
width: 2000px; position: relative; left: 50%; transform: translateX(-50%);
```

### 1400px 가운데
```css
width: 1400px; margin: 0 auto;
```

### 번호를 배경처럼 깔기 (sub4_1 promise)
```css
dl{position: relative; padding-top: 86px;}
dl::before{content: '01'; position: absolute; left: 0; top: 0; font-size: 7.5rem;
           font-weight: 700; color: var(--color-sub2); line-height: 1; z-index: -1;}
li:nth-child(2) dl::before{content: '02';}
```

### 사진 원본 크기 유지 + 가운데 자르기
```css
object-fit: none; display: block;
```

---

## 14. ★ 이미지 파일 규칙

`sub2/images/` 기준. **`시안/` 폴더의 `Gemini_Generated_Image_...` 원본은 쓰지 마세요. 워터마크가 박혀 있습니다.**

| 파일 | 크기 | 쓰는 곳 |
|---|---|---|
| `onggi3.jpg` | 2000×800 | 서브2 히어로 (3개 페이지 공통) |
| `sool_seolgaeng.jpg` | 460×460 | 원형 탭 1 (벼 이삭) |
| `sool_saengssal.jpg` | 460×460 | 원형 탭 2 (생쌀·누룩) |
| `sool_rice_compare.jpg` | 1330×800 | 탭1 설갱미·일반미 쌀알 비교 |
| `sool_radar.svg` | 665×420 | 탭1 주질 향상 오각형 |
| `sool_mash.jpg` | 1330×800 | 탭2 옹기 술덧 |
| `sool_field.jpg` | 2000×420 | 농가와의 약속재배 배경 |
| `sool_cup.jpg` | 2000×620 | sub2_2 복원의 의미 배경 |
| `sool_step01~03.jpg` | 1024×861 | sub2_1 우리술 즐기기 |
| `sub3/images/*.jpg` | 320×340 | 제품 사진 17장 (병 높이 280) |
| `sub3/images/hero.jpg` | 2000×500 | sub3 히어로 |
| `sub4/images/bi_*.png` | — | 백세주마을 BI |

**2배 크기인 이유** — 레티나 화면에서 선명하게 보이려면 표시 크기의 2배 이미지를 넣고 CSS로 줄여야 합니다.

---

## 15. ★ 정리된 사실 (다시 조사하지 마세요)

### 설갱미
- **국순당이 개발한 품종이 아닙니다.** 농촌진흥청이 1991년 육성, 2001년 품종 등록
- 국순당은 2002년부터 공동연구, 2007년 제품 개발 성공, 2008년부터 백세주 담금용 사용
- "개발했습니다"가 아니라 **"술로 완성했습니다"**
- 제8회 대한민국 우수품종 대통령상 (2012)

### 약속재배
강원도 횡성, **620t / 96농가 (2018)**

### 주질 향상 오각형
원본 사이트에 **수치가 없습니다.** 설명 문장에 맞춰 모양을 그린 것입니다.

### 복원 24종 목록
창포주 2008.05 / 자주 2008.08 / 이화주 2008.08 / 신도주 2008.10 / 송절주 2009.02 /
소곡주 2009.03 / 동정춘 2009.04 / 약산춘 2009.05 / 미림주 2009.08 / 상심주 2009.10 /
쌀 머루주 2009.12 / 진맥소주 2010.05 / 부의주 2011.03 / 백하주 2011.04 / 석탄향 2011.06 /
한산춘 2011.07 / 송화천로주 2011.09 / 청감주 2011.11 / 사시통음주 2012.05 /
신선고본주 2012.11 / 유하주 2013.01 / 삼합주 2013.03 / 불술 2014.05 / 옥수수술 2014.05

백세주 1992.09 는 복원사업 이전 건이라 24종에 포함하지 않습니다.
**"3년에 한 종씩"은 틀린 표현입니다.** 6년에 24종, 3년은 한 종당 연구 기간입니다.

### sub2_3 표 수치 (탭1 — 5행 4열)

| 항목 | 비고 | 설갱미 | 일반미 |
|---|---|---|---|
| 필수 아미노산 | 많을수록 좋음 | 32.05 | 29.78 |
| leucine | 많을수록 좋음 | 8.51 | 7.17 |
| isoleucine | 많을수록 좋음 | 4.01 | 3.59 |
| 단백질 | 낮을수록 잡미가 적음 | 6.2% | 6.8~7.0% |

### sub2_3 막대그래프 수치 (탭2) ← 할 일 7번에 필요

증자·무증자 막걸리의 아미노산 (mg / 100ml, 17종 중 값이 큰 5종)

| 항목 | 생쌀발효 막걸리 | 일반 막걸리 |
|---|---|---|
| 알기닌 | 26.59 | 17.02 |
| 타이로신 | 19.98 | 8.71 |
| 히스티딘 | 19.94 | 4.64 |
| 루이신 | 18.59 | 9.90 |
| 이소루이신 | 17.96 | 7.06 |

출처 — 한국산업미생물학회지 1990년 제18권 제5호 506쪽.
17종 중 16종이 생쌀발효 막걸리에서 높고, 프롤린만 일반 막걸리가 높습니다 (15.27 / 7.89).

### sub2_3 에서 뺀 것
**우수성 입증**(기능성 특허, 논문 6편)은 **빼기로 했습니다.** 내용이 너무 많아서요.

### 카카오맵 (오시는길)
- API 키 : `e11f93f5841539f8af4c5d26a911f3fd`
- 네임스페이스는 `kakao.maps` (옛 `daum.maps` 아님)
- **로컬(127.0.0.1)에서는 도메인 미등록으로 안 뜰 수 있음.** 실서버에선 정상. 코드 문제 아님
- 본사 `37.4893, 128.2578` / 서울사무소 `37.51556808748516, 127.06554338748157`

---

## 16. 참고 URL (원본 국순당 사이트)

```
회사소개   개요    https://www.ksdb.co.kr/company/ksdstory.asp
          위치    https://www.ksdb.co.kr/company/locationmap.asp
우리술     알기    https://www.ksdb.co.kr/soolstory/knowinghistory.asp
          즐기기  https://www.ksdb.co.kr/soolstory/knowingenjoy.asp
          복원    https://www.ksdb.co.kr/soolstory/restoration.asp
          특징    https://www.ksdb.co.kr/soolstory/excellence.asp
제품       백세주  https://www.ksdb.co.kr/ourbrands/bsj.asp
          법고창신 https://www.ksdb.co.kr/ourbrands/bg.asp
```

**★ 원본 사이트 사진은 못 씁니다.** 화질이 너무 낮고(최대 686×536) 소제목이 전부 글자 이미지(.gif)입니다.
→ 사진은 **Gemini / ChatGPT로 생성**합니다.

**★ 웹 요약본을 그대로 믿지 마세요.** 원본 페이지와 숫자가 다른 적이 여러 번 있었습니다.

### AI 사진 프롬프트 요령
- 김·증기 없게 (생쌀발효법은 "찌지 않는다"가 핵심인데 김이 나면 글과 반대됨)
- **글자가 올라갈 쪽을 비워두라고 쓸 것** → `large empty dark space on the left`
- 오른쪽 아래를 비워두기 (워터마크 잘라내기용)
- `No text, no watermark, no hands, no logos` 를 항상 넣되 **눈으로 확인**
- 여러 장은 거리(위에서 / 접사 / 멀리서)를 다르게, **한 장씩 따로** 요청
- 색감 통일하려면 `warm muted earthy tones` 를 전부 넣기

---

## 17. ★ AI가 했던 실수 (반복하지 마세요)

### 옛날부터 반복된 것
1. **잘못된 기준 시안을 보고 검사함.** 기준 시안이 뭔지 먼저 물어보세요.
2. **뭐가 틀렸는지 안 물어보고 파일을 전면 수정함.**
3. **답을 주고 나서 그걸 퀴즈로 냄.** 이미 준 건 묻지 마세요.
4. **선택지 문장에 정답을 흘림.**

### 이번에 새로 한 것
5. **내 파일을 덮어써서 날림.** `sub4_2.html` 의 섹션 클래스명이 사라졌습니다.
   → 커밋할 때 **반드시 `expectedMtimeMs` 를 확인**하세요. 내가 그 사이에 고쳤을 수 있습니다.
6. **시안 글자만 읽고 실제 픽셀을 안 쟀음.** 색 `#3E2D18` 을 다르게 알려줬습니다.
   → 색은 **확대해서 픽셀을 직접 재세요.**
7. **제품 목록을 지어냄.** 지금 안 파는 술을 섞었습니다. → 9번 목록이 정답입니다.
8. **용량·도수를 지어냄.** 13개 중 대부분 틀렸습니다. → 원본 페이지를 직접 확인하세요.
9. **글자 크기를 잘못 읽음.** 서브 제목은 50px 인데 40px 이라고 했습니다.
   → `_common.css` 를 먼저 열어보세요.
10. **세 페이지 시안 레이아웃이 다 비슷했음.** 12번 규칙입니다.
11. **이미 완성된 페이지를 고치라고 했음.** 22번 규칙입니다.
12. **행간·자간 영어 병기를 계속 빠뜨림.** 18번 규칙입니다.
13. **PPT 시안을 페이지 전체 캡처로 잘못 만듦.** 내가 원한 건 **슬라이드 목업**이었습니다.
14. **선생님 예제 폴더를 잘못 안내함.** `jQuery_ajax_search` 가 맞습니다.

### 2026-10-02에 한 것
15. **또 틀린 시안을 보고 쟀음** (`sub3_3_시안.jpg`로 재서 선물세트·높이 44px 틀림). 기준은 `제품소개.jpg`.
16. **노트·예제 확인 안 하고 문법을 알려줌** (`border: none`, `outline`, `border-color`). 27번 규칙.
17. **flex 쓴 상자에 slideDown** → 열면 레이아웃 깨짐. 처음부터 float로 했어야 함.
18. **선생님 지시(h3 안에 span)를 내 생각으로 바꾸라고 함.** 31번 규칙.
19. **한 대상 속성을 하나씩 나눠 줌** → 25번 규칙.

### 환경 제약
- 웹 검색이 막혀 있을 때가 있습니다(403). 그럴 땐 **브라우저 도구**로 원본 사이트를 보세요.
- Font Awesome / Material Symbols CDN 이 막혀서 아이콘이 안 뜰 수 있습니다.
- **내 `Downloads` / `Pictures` 폴더 접근은 거부했습니다. 다시 요청하지 마세요.**
- 선생님 예제 폴더는 `C:\YDM\new_sample` — 연결해 달라고 하면 연결해 줍니다.
- 수업 노트 `html5 문법 설명.txt`는 대화에 첨부해 줄 수 있습니다.
- EmailJS 키(`CZpYvRfponAdlLO_W` / `service_rky5dan` / `template_zxqy4kt`)는
  선생님 예제 값 그대로입니다.

---
