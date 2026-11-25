# WoW 포에버 인덱스 · 와우 특색 효과 목록

> 목표: 반응형은 **누구보다 화려하고 제일 잘 만들기**. 와우를 해 본 사람이 "이런 것까지 신경 썼네" 할 만한 숨은 재미를 넣는다. 복잡하지 않게, 배운 기술(CSS · jQuery · Swiper · AOS)로만 만든다.

| # | 효과 | 위치 | 동작 | 기술 | 이미지 (design_img) |
|---|---|---|---|---|---|
| 1 | 귀환석 TOP 버튼 | 오른쪽 아래 고정 | 클릭 → 시전바 "귀환석" 1.5초 차오름 → 맨 위로 이동 | CSS animation + jQuery animate scrollTop | ui/ui_hearthstone_top.png, ui/ui_castbar.png |
| 2 | 경험치 바 = 스크롤 진행바 | 화면 맨 아래 고정 | 스크롤 % 만큼 보라색 칸 바가 참. 푸터 도달 시 "LEVEL 60" 금빛 연출 | jQuery scroll + % 계산 | ui/ui_xpbar.png, ui/ui_levelup.png |
| 3 | 진영 전환 (다크/라이트 모드 대신) | 헤더 오른쪽 | 얼라이언스(파랑·금) ↔ 호드(빨강·검정) 테마 전환 | jQuery toggleClass + CSS 변수 | ui/ui_faction_switch.png |
| 4 | 업적 달성 팝업 | 화면 아래 가운데 | 영상 탭 3개 모두 클릭 / 갤러리 끝까지 보면 "업적 달성 — 아제로스 탐험가" 띠링 | jQuery fadeIn/fadeOut + 조건 체크 | ui/ui_achievement.png |
| 5 | 아이템 등급 갤러리 | GALLERY | hover → 테두리가 아이템 등급 색(희귀 파랑 · 영웅 보라 · 전설 주황)으로 빛나고 아이템 툴팁 표시 | CSS hover + box-shadow | ui/ui_item_tooltip.png |
| 6 | 건틀릿 커서 | 전체 | 기본 커서 = 금색 장갑, 버튼 위 = 칼 | CSS cursor | (커서 PNG 준비 필요) |
| 7 | SNS = 행동 단축바 | FOOTER | 스킬 단축칸 모양 + 단축키 숫자 1·2·3, 클릭 시 쿨타임 시계방향 회전 | CSS conic-gradient animation | ui/ui_sns_actionbar.png |
| 8 | 퀘스트 느낌표 | 섹션 제목 옆 | 노란 ! → 클릭 시 양피지 퀘스트 창, 섹션을 보면 ? 로 바뀜 | jQuery + AOS | ui/ui_quest_mark.png |
| 9 | 숨은 멀록 | 푸터 구석 | 클릭 → "음르르륵!" 말풍선 | jQuery click | ui/ui_murloc.png |
| + | 캐릭터 2.5D | CHARACTERS | 큰 캐릭터: 카드 고정, 캐릭터만 마우스 따라 움직임(누끼 PNG). 종족 카드: 카드 전체 3D 기울기 | CSS perspective + jQuery mousemove | skyborne_cutout.png |

## 참고
- 아이콘 원본: Wowhead 아이콘(56px) — `design_img/icons/`
- 출처 표기: 푸터 `IMAGES © BLIZZARD ENTERTAINMENT`
- 데모: `2.5D_캐릭터_데모.html`(카드 전체 기울기), `캐릭터_패럴랙스_데모.html`(캐릭터만 움직임)
