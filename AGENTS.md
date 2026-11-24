# Repository Engineering Guide (`AGENTS.md`)

## Architecture Conventions

- **Pure Logic Separation**: Keep theme resolution (`src/utils/themes.ts`) and URL-synced filtering/search (`src/utils/filters.ts`) decoupled from React components and tested via `node:test` (`npx --yes tsx --test`).
- **CSS Variable Tokenization**: All surface, text, border, and accent colors must reference CSS custom properties (`--bg-primary`, `--card-bg`, `--text-primary`, `--text-secondary`, `--accent`, `--border`) managed by `ThemeContext`.
- **Bidirectional RTL/LTR Layout**: Use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`) rather than physical `left`/`right` utilities. Flip directional icons when `i18n.language === 'fa'`.
- **Motion & Accessibility**: Animate exclusively via GPU-composited properties (`transform`, `opacity`) using `motion/react` and respect `useReducedMotion()`. Maintain semantic `<button>`, `<Link>`, `<label>`, and keyboard focus management in overlays.

## Verification Checklist

1. `npx --yes tsx --test src/utils/themes.test.ts src/utils/filters.test.ts`
2. `npm run lint` (`tsc --noEmit` in strict mode)
3. `npm run build`
