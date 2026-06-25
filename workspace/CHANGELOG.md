<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-06-24 — Change Lust Playhouse logo colors to hot pink #fe019a
- Updated `.logo-text` gradient and glow so both top hero and footer logos render in hot pink styling
- File: tailwind.css

## 2026-06-24 — Remove emoji square wrappers from How It Works cards
- Removed bordered icon container around step emojis so icons render without the small surrounding square
- File: src/sections/HowItWorksSection/index.tsx

## 2026-06-24 — Replace pricing card rose pink with hot pink #fe019a
- Updated pricing tier borders, shadows, price text, buttons, featured ring, top accent line, badge styling, and feature check gradients to use `#fe019a`-based palette
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Force full hot pink border around all How It Works cards
- Increased card border to `border-2 border-[#fe019a]` so each full card outline is clearly visible
- Matched icon-box border to `#fe019a` for consistent accents while keeping no-glow hover behavior
- File: src/sections/HowItWorksSection/index.tsx

## 2026-06-24 — Remove 01/02/03 circles from How It Works cards
- Deleted the absolute positioned step number badge block from each card
- Kept existing transparent cards and fixed pink `#fe019a` borders unchanged
- File: src/sections/HowItWorksSection/index.tsx

## 2026-06-24 — How It Works cards fixed pink border, no hover glow
- Removed hover glow/shadow and movement from all How It Works cards
- Applied consistent hot pink `#fe019a` border in normal and hover states
- File: src/sections/HowItWorksSection/index.tsx

## 2026-06-24 — How It Works cards use hot pink hover + transparent fill
- Unified all 3 step cards to hot pink hover border/glow (removed per-card gold/magenta/crimson hover colors)
- Set card backgrounds and icon boxes to transparent so the page background shows through
- File: src/sections/HowItWorksSection/index.tsx

## 2026-06-24 — Match FAQ heading typography to community heading
- Updated "Questions &amp; Answers" to use the same font family, size scale, weight, and tracking as "Join The Community"
- File: src/sections/FaqSection/index.tsx

## 2026-06-24 — FAQ header cleanup
- Removed the FAQ pill badge above Questions &amp; Answers
- Removed the gold divider line below the FAQ heading and matched heading block style with other sections
- File: src/sections/FaqSection/index.tsx

## 2026-06-24 — Reduce section title size and tighten spacing
- Made headings smaller for Choose Your Tier, How It Works, and Join The Community
- Reduced vertical section padding and header bottom margins for tighter spacing between sections
- Files: src/sections/PricingSection/index.tsx, src/sections/HowItWorksSection/index.tsx, src/sections/CommunitySection/index.tsx

## 2026-06-24 — Preserve glowing pricing borders
- Added persistent pink glow shadows to Basic/Premium/Exclusive card containers while keeping transparent obsidian fills
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Center video preview carousel
- Removed manual horizontal track offset that pushed preview off-center
- Updated carousel track wrapper to center content with `justify-center`
- File: src/sections/MainContent/components/CarouselTrack.tsx

## 2026-06-24 — Pricing cards tinted to match background
- Changed pricing card fill from light white tint to transparent obsidian tint matching site background
- Updated all tiers to `bg-[#08080d]/55` while preserving pink borders, checks, and prices
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Pricing cards made more see-through
- Increased transparency on all pricing cards to better match monkey.fun glass look
- Added ultra-light `bg-white/[0.02]` and reduced border opacity for Basic/Premium/Exclusive cards
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Pricing text contrast + weight update
- Made tier labels ("Basic", "Premium", "Exclusive") white and bolder
- Made active feature text beside checkmarks white; kept pink checkmarks and pink prices unchanged
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Equal-height pricing cards
- Removed `md:-mt-4 md:pb-9 md:pt-10` offset from featured Exclusive card
- Changed grid `items-end` → `items-stretch` so all three cards share the same height
- File: src/sections/PricingSection/index.tsx

## 2026-06-24 — Make tagline text bold
- Changed `font-light` to `font-bold` on the tagline paragraph in MainContent
- File: src/sections/MainContent/index.tsx

## 2026-06-24 — Move tagline below carousel, above pricing
- Removed tagline from hero section, placed it in its own centered block between carousel and pricing
- File: src/sections/MainContent/index.tsx

## 2026-06-24 — Hero size/spacing/color tweaks
- Reduced logo font size (~4.5rem desktop), removed min-h-[72vh] and decorative divider between hero and carousel
- Tightened vertical gap between hero and video preview section
- Tagline text changed to `text-white` (was blush-200/70)
- "PRIVATE MEMBERS CLUB" subtitle changed to `text-white font-bold` (was white/40)
- File: src/sections/MainContent/index.tsx

## 2026-06-24 — Match hero logo to footer style
- Hero logo lockup now mirrors footer: `logo-text` div + `Private Members Club` subtitle below in same white/40 tracking style
- Removed ornament-line decoration from hero logo area
- File: src/sections/MainContent/index.tsx

## 2026-06-24 — Remove hero CTA buttons + OnlineMembers pill
- Removed "Unlock Access" + "Preview Content" CTA buttons from hero section
- Removed OnlineMembers pill from hero section
- File: src/sections/MainContent/index.tsx

## 2026-06-24 — Pricing card Exclusive fixes
- Removed `animate-neon-pulse` (yellow glow) from Exclusive CTA button
- Changed "★ HIGHEST TIER" badge from gold `luxury-badge` to inline pink style matching card palette

## 2026-06-24 — Pricing cards unified pink scheme
- All 3 pricing cards (Basic/Premium/Exclusive) now share pink color tokens: `#ec4899` → `#be185d` gradients, `#f472b6` borders/accents
- Removed per-card crimson/magenta/gold divergence; featured card ring/glow also updated to pink
- Only `src/sections/PricingSection/index.tsx` modified

## 2026-06-24 — Remove Preview badge + Sample Content heading
- Removed `<span class="luxury-badge">Preview</span>` and `<h2>Sample Content</h2>` from the #preview section in MainContent/index.tsx
- Carousel now renders without a header block above it

## 2026-06-24 — Steps 2–6: Full Luxury Redesign (all sections)
- Background.tsx: cinematic radial crimson bloom + grain + diagonal linen texture, no more single-div approach
- App.tsx: clean shell div, removed body-as-root anti-pattern
- MainContent: full-width hero with logo-text, tagline, dual CTA buttons, OnlineMembers pill, vertical gold rules
- PricingSection: 3-column glassmorphism cards (crimson/magenta/gold), featured Exclusive card elevated with ring+shadow-glow-gold, inline rendering replaces prop-driven PricingCard
- HowItWorksSection: 3-step horizontal grid with connector line, icon boxes, numbered step badges
- FaqSection now has live useState accordion (was max-h-0 dead code before)
- CommunitySection, CommunityLink, OnlineMembers, Footer, CryptoModal: all updated to gold/crimson palette

## 2026-06-24 — Step 1: Global Foundations (Luxury Redesign)
- Rewrote `tailwind.config.js`: new color tokens (obsidian, crimson, magenta, gold, blush), Playfair Display + Inter fonts, glow/float/shimmer/grain keyframes, glass/glow box-shadows, gradient backgroundImage tokens
- Rewrote `tailwind.css`: full luxury CSS vars, glass-card / glass-card-gold / glass-card-crimson utilities, btn-luxury-primary/secondary, logo-text gradient, text-gold-gradient, divider-luxury, noise-overlay, luxury-badge, ornament-line, scrollbar styling
- Updated `index.html`: title → "Lust Playhouse — Private Members Club", added Google Fonts preconnect + Playfair Display + Inter stylesheet link
- Legacy font class names (cinzel, plus_jakarta_sans) remapped to new serif/sans so old component classes still resolve

## 2026-06-24 — Rebrand to Lust Playhouse + Rose-Pink Theme
- Renamed all "MONKEYGOD" text to "Lust Playhouse" across MainContent, Footer
- Replaced entire purple gradient palette (`rgb(168,85,247)` / `rgb(124,58,237)`) with rose-pink (`rgb(251,113,133)` / `rgb(225,29,72)`) in PricingCard, HowItWorksStep, OnlineMembers, CryptoModal
- Updated Background radial gradient glow to rose tones
- Updated CSS vars in tailwind.css dark theme to rose hue (340)
- Updated FaqItem/FaqSection accent links from violet/purple to rose-400
</changelog>
