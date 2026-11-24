# Studio Chahar — Bilingual Team Portfolio

A bilingual (**Farsi RTL / English LTR**) team portfolio web application built with React, TypeScript (Strict Mode), Tailwind CSS v4, Motion (Framer Motion), React Router v6, and `i18next`.

## Core Features

- **Random Cohesive Theme on Refresh**: Automatically selects one of 5 accessible palettes (`Obsidian Cyan`, `Gallery Paper`, `Soft Iris`, `Deep Forest`, `Royal Gold`) via `:root` CSS variables, paired with a manual Dark/Light polarity toggle persisted in `localStorage`.
- **Full Bilingual RTL/LTR Parity**: Instant switching between Farsi (`fa`, `dir="rtl"`, `Vazirmatn`) and English (`en`, `dir="ltr"`, `Plus Jakarta Sans` + `Fraunces`), using CSS logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`).
- **URL-Synced Project Archive**: Filter projects by keyword (`?q=`), creator (`?member=`), and discipline (`?tag=`) using `useSearchParams` with instant shareable URLs and a one-click Clear Filters reset.
- **Interactive Team & PDF Resumes**: 3D tilt team cards linking to structured resumes with an isolated `#resume-document` export via `html2pdf.js`.
- **Global Command Palette (`Ctrl+K` / `Cmd+K`)**: Keyboard-driven modal searching across pages, team members, projects, and journal articles.

## Local Development

```bash
npm install
npm run dev
```

## Testing & Verification

```bash
npx --yes tsx --test src/utils/themes.test.ts src/utils/filters.test.ts
npm run lint
npm run build
```
