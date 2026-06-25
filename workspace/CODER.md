<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## Key Architecture Notes (Lust Playhouse)
- `tailwind.config.js` — luxury color tokens: obsidian/crimson/magenta/gold/blush + glow/float/shimmer keyframes. Legacy `cinzel` + `plus_jakarta_sans` font keys remapped to Playfair/Inter so old class names don't break.
- `tailwind.css` — all utility classes defined here: `.glass-card`, `.glass-card-gold`, `.glass-card-crimson`, `.border-glow-gold/crimson/magenta`, `.text-gold-gradient`, `.text-crimson-gradient`, `.text-luxury-gradient`, `.logo-text`, `.btn-luxury-primary`, `.btn-luxury-secondary`, `.divider-luxury`, `.noise-overlay`, `.luxury-badge`, `.ornament-line`
- `index.html` — Google Fonts loaded via `<link>`: Playfair Display (700/800/900/italic) + Inter (300–700)
- Components live in `src/sections/` (MainContent, PricingSection, HowItWorksSection, FaqSection, CommunitySection, OnlineMembers, Footer) and `src/components/` (Background, CryptoModal)
- App is in `dark` mode via class — body bg is `#08080d` (obsidian-900)
- Design language: deep black + rich crimson (#a8002a) + magenta (#e0007f) + gold (#c89600) — NO purple/rose-pink from old MonkeyGod palette
</coder>
