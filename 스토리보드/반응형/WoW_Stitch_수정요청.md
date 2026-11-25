# Stitch 수정 요청 (v2)

> 아래 [EDIT PROMPT]를 Stitch 같은 프로젝트에 그대로 붙여 넣으세요.
> 첫 결과물이 너무 보라색 · 마법 왕국 느낌이고, 한글 글씨가 Cinzel처럼 이상하게 나와서 고치는 요청입니다.

---

## [EDIT PROMPT]

Redesign the World of Warcraft index page with these corrections. Keep the same section order and layout ideas, but change the mood, colors and typography.

**1. Mood: epic WAR, not a magic kingdom**
- The feeling should be a brutal, heroic fantasy war: armies clashing, steel, fire, smoke, embers, ruined battlefields — like a AAA game launch trailer.
- Remove the fairy-tale / magical castle / sparkle look. No purple sky, no purple glow, no glittering magic effects, no cute or soft fantasy.
- Less decoration: keep only ONE thin gold frame style and use it sparingly (hero and gallery only). Remove the gold frames, corner brackets and diamond icons from every other section.

**2. Colors (strict)**
- Background: near-black warm `#0E0C0A` and dark charcoal `#16130F`
- Accent: gold `#F8B700` (buttons, active states, thin lines only)
- Secondary accent: ember orange `#E0561B` used very small (fire glow, hover)
- Text: `#E8E2D6` (main), `#BFB7AA` (sub)
- Do NOT use purple, violet, magenta or neon blue anywhere. Image overlays are black gradients only.

**3. Typography (strict)**
- English headlines and menu: **Cinzel Bold**, uppercase, letter-spacing max 4px.
- ALL Korean text: **Noto Sans KR** (Bold for titles, Regular for body). Never render Korean in Cinzel or any serif font.
- Do NOT space out Korean letters. Write the hero subtitle normally: "한밤이 찾아온다".
- Body text min 16px on desktop, line-height 1.8. Higher contrast — no tiny grey text on dark images.

**4. Images**
- Do NOT generate AI artwork. Use dark grey placeholders with a label (e.g. "OFFICIAL ART — Midnight key art 2600×1260"), because official Blizzard art will be inserted later.
- Hero is a full-screen background VIDEO placeholder labelled "HERO VIDEO — Midnight cinematic loop".

**5. Section fixes**
- HERO: big "MIDNIGHT" (Cinzel, white, subtle warm gold glow — not purple), subtitle "한밤이 찾아온다" (Noto Sans KR Bold 28px), gold round PLAY button, 3 video tabs at the bottom. Darker vignette so text is readable.
- ABOUT: full-bleed placeholder image with strong black overlay; big outline text "AZEROTH" in gold stroke; 4 stats in one row with thin gold dividers (no box around them).
- EXPANSION: selected expansion art fills the whole section; text block on the left; 4 thumbnail tabs at the bottom (active: gold border + lifted; inactive: grayscale).
- CHARACTERS: large character art on the left fading into black (no purple background, no purple glow); info on the right; portrait icons as simple squares with gold border on active.
- MEDIA: dark cinema screen, 16:9 player with thin gold border, film strip below. Remove purple ambient light; use a faint warm orange glow instead.
- SOUNDTRACK: keep album + vinyl idea, darker and simpler; remove the extra badge/emblem next to the album.
- GALLERY "GALLERY": slanted accordion panels; inactive panels darkened (not grayscale pink), active panel full color with Korean caption in Noto Sans KR.
- FOOTER: simple, black, thin gold top line.

**6. Overall**
- Fewer effects, more contrast, larger type, more empty space.
- It should look like an official game site (e.g. Diablo IV / World of Warcraft official launch pages), clean and powerful.
