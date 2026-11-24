# AI Usage & Attribution Log (`AI-USAGE.md`)

## Overview

This codebase was scaffolded and implemented with AI engineering assistance in a structured workflow:

1. **Architecture & Data Modeling**: Defined strict TypeScript schemas for bilingual (`en` / `fa`) team members, projects, and editorial articles in `src/types/portfolio.ts` and `src/data/db.ts`.
2. **Design Tokens & Accessibility**: Structured five dual-polarity themes (`Obsidian Cyan`, `Gallery Paper`, `Soft Iris`, `Deep Forest`, `Royal Gold`) in `src/utils/themes.ts` with WCAG AA contrast ratios and CSS custom property injection.
3. **Bilingual Localization**: Authored synchronized English and Farsi translation dictionaries (`src/locales/en.json`, `src/locales/fa.json`) and dynamic RTL/LTR switching in `src/i18n.ts`.
4. **Visual Assets**: Generated domain-specific editorial studio photography and project showcase imagery saved locally under `src/assets/images/`.
5. **Verification**: Verified pure logic with `node:test`, strict TypeScript compilation, production Vite bundling, and end-to-end headless Chromium browser journeys.
