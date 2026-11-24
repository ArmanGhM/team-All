import type { ThemeDefinition, ThemeId, ThemePalette, ThemePolarity } from '../types/portfolio';

export const THEMES: readonly ThemeDefinition[] = [
  {
    id: 'cyberpunk-neon',
    name: { en: 'Cyberpunk Neon', fa: 'سایبرپانک نئون' },
    defaultPolarity: 'dark',
    dark: {
      bgPrimary: '#080B12',
      bgSecondary: '#111726',
      bgGradient:
        'radial-gradient(at 15% 15%, rgba(6, 182, 212, 0.16) 0px, transparent 52%), radial-gradient(at 85% 20%, rgba(217, 70, 239, 0.14) 0px, transparent 50%), radial-gradient(at 50% 92%, rgba(59, 130, 246, 0.12) 0px, transparent 55%)',
      blobOne: 'rgba(34, 211, 238, 0.18)',
      blobTwo: 'rgba(217, 70, 239, 0.14)',
      cardBg: 'rgba(17, 23, 38, 0.72)',
      headerBg: 'rgba(8, 11, 18, 0.78)',
      textPrimary: '#F3F4F6',
      textSecondary: '#A5B4C7',
      accent: '#22D3EE',
      accentForeground: '#05151C',
      accentGradient: 'linear-gradient(135deg, #22D3EE 0%, #C026D3 100%)',
      border: 'rgba(255, 255, 255, 0.14)',
    },
    light: {
      bgPrimary: '#F4F8FB',
      bgSecondary: '#E7F0F7',
      bgGradient:
        'radial-gradient(at 15% 15%, rgba(8, 145, 178, 0.14) 0px, transparent 52%), radial-gradient(at 85% 20%, rgba(192, 38, 211, 0.10) 0px, transparent 50%)',
      blobOne: 'rgba(8, 145, 178, 0.16)',
      blobTwo: 'rgba(192, 38, 211, 0.12)',
      cardBg: 'rgba(255, 255, 255, 0.78)',
      headerBg: 'rgba(244, 248, 251, 0.80)',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      accent: '#0E7490',
      accentForeground: '#FFFFFF',
      accentGradient: 'linear-gradient(135deg, #0891B2 0%, #A21CAF 100%)',
      border: 'rgba(15, 23, 42, 0.12)',
    },
  },
  {
    id: 'aurora-borealis',
    name: { en: 'Aurora Borealis', fa: 'شفق قطبی' },
    defaultPolarity: 'dark',
    dark: {
      bgPrimary: '#071312',
      bgSecondary: '#0F2220',
      bgGradient:
        'radial-gradient(at 18% 12%, rgba(20, 184, 166, 0.18) 0px, transparent 52%), radial-gradient(at 82% 24%, rgba(52, 211, 153, 0.14) 0px, transparent 52%), radial-gradient(at 50% 90%, rgba(56, 189, 248, 0.12) 0px, transparent 55%)',
      blobOne: 'rgba(20, 184, 166, 0.20)',
      blobTwo: 'rgba(56, 189, 248, 0.14)',
      cardBg: 'rgba(15, 34, 32, 0.74)',
      headerBg: 'rgba(7, 19, 18, 0.80)',
      textPrimary: '#ECFDF5',
      textSecondary: '#A4C8BF',
      accent: '#2DD4BF',
      accentForeground: '#04201C',
      accentGradient: 'linear-gradient(135deg, #2DD4BF 0%, #38BDF8 100%)',
      border: 'rgba(255, 255, 255, 0.14)',
    },
    light: {
      bgPrimary: '#F2FAF8',
      bgSecondary: '#E3F3EE',
      bgGradient:
        'radial-gradient(at 18% 12%, rgba(13, 148, 136, 0.14) 0px, transparent 52%), radial-gradient(at 82% 24%, rgba(2, 132, 199, 0.10) 0px, transparent 52%)',
      blobOne: 'rgba(13, 148, 136, 0.16)',
      blobTwo: 'rgba(2, 132, 199, 0.12)',
      cardBg: 'rgba(255, 255, 255, 0.78)',
      headerBg: 'rgba(242, 250, 248, 0.82)',
      textPrimary: '#0D211D',
      textSecondary: '#3E5F57',
      accent: '#0F766E',
      accentForeground: '#FFFFFF',
      accentGradient: 'linear-gradient(135deg, #0D9488 0%, #0284C7 100%)',
      border: 'rgba(13, 33, 29, 0.12)',
    },
  },
  {
    id: 'sunset-vibe',
    name: { en: 'Sunset Vibe', fa: 'غروب گرم' },
    defaultPolarity: 'dark',
    dark: {
      bgPrimary: '#140D10',
      bgSecondary: '#22161B',
      bgGradient:
        'radial-gradient(at 15% 18%, rgba(249, 115, 22, 0.16) 0px, transparent 52%), radial-gradient(at 85% 22%, rgba(244, 63, 94, 0.16) 0px, transparent 52%), radial-gradient(at 50% 90%, rgba(234, 179, 8, 0.10) 0px, transparent 55%)',
      blobOne: 'rgba(249, 115, 22, 0.18)',
      blobTwo: 'rgba(244, 63, 94, 0.16)',
      cardBg: 'rgba(34, 22, 27, 0.74)',
      headerBg: 'rgba(20, 13, 16, 0.80)',
      textPrimary: '#FFF7F5',
      textSecondary: '#D6B9BE',
      accent: '#FB923C',
      accentForeground: '#1F0F06',
      accentGradient: 'linear-gradient(135deg, #F97316 0%, #E11D48 100%)',
      border: 'rgba(255, 255, 255, 0.14)',
    },
    light: {
      bgPrimary: '#FFF9F6',
      bgSecondary: '#FCEEE8',
      bgGradient:
        'radial-gradient(at 15% 18%, rgba(234, 88, 12, 0.12) 0px, transparent 52%), radial-gradient(at 85% 22%, rgba(225, 29, 72, 0.10) 0px, transparent 52%)',
      blobOne: 'rgba(234, 88, 12, 0.15)',
      blobTwo: 'rgba(225, 29, 72, 0.12)',
      cardBg: 'rgba(255, 255, 255, 0.80)',
      headerBg: 'rgba(255, 249, 246, 0.82)',
      textPrimary: '#241417',
      textSecondary: '#664B50',
      accent: '#C2410C',
      accentForeground: '#FFFFFF',
      accentGradient: 'linear-gradient(135deg, #EA580C 0%, #BE123C 100%)',
      border: 'rgba(36, 20, 23, 0.12)',
    },
  },
  {
    id: 'minimal-frost',
    name: { en: 'Minimal Frost', fa: 'یخبندان مینیمال' },
    defaultPolarity: 'light',
    light: {
      bgPrimary: '#F8FAFC',
      bgSecondary: '#EEF2F8',
      bgGradient:
        'radial-gradient(at 15% 15%, rgba(59, 130, 246, 0.13) 0px, transparent 52%), radial-gradient(at 85% 22%, rgba(124, 58, 237, 0.10) 0px, transparent 50%), radial-gradient(at 50% 90%, rgba(14, 165, 233, 0.09) 0px, transparent 55%)',
      blobOne: 'rgba(59, 130, 246, 0.16)',
      blobTwo: 'rgba(124, 58, 237, 0.13)',
      cardBg: 'rgba(255, 255, 255, 0.76)',
      headerBg: 'rgba(248, 250, 252, 0.80)',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      accent: '#2563EB',
      accentForeground: '#FFFFFF',
      accentGradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
      border: 'rgba(15, 23, 42, 0.12)',
    },
    dark: {
      bgPrimary: '#0D111A',
      bgSecondary: '#161C2B',
      bgGradient:
        'radial-gradient(at 15% 15%, rgba(96, 165, 250, 0.15) 0px, transparent 52%), radial-gradient(at 85% 22%, rgba(167, 139, 250, 0.13) 0px, transparent 50%)',
      blobOne: 'rgba(96, 165, 250, 0.16)',
      blobTwo: 'rgba(167, 139, 250, 0.14)',
      cardBg: 'rgba(22, 28, 43, 0.74)',
      headerBg: 'rgba(13, 17, 26, 0.80)',
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      accent: '#60A5FA',
      accentForeground: '#071426',
      accentGradient: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
      border: 'rgba(255, 255, 255, 0.14)',
    },
  },
  {
    id: 'royal-gold',
    name: { en: 'Royal Gold', fa: 'طلای سلطنتی' },
    defaultPolarity: 'dark',
    dark: {
      bgPrimary: '#11100C',
      bgSecondary: '#1C1912',
      bgGradient:
        'radial-gradient(at 18% 15%, rgba(234, 179, 8, 0.15) 0px, transparent 52%), radial-gradient(at 85% 25%, rgba(217, 119, 6, 0.12) 0px, transparent 52%)',
      blobOne: 'rgba(234, 179, 8, 0.16)',
      blobTwo: 'rgba(217, 119, 6, 0.13)',
      cardBg: 'rgba(28, 25, 18, 0.76)',
      headerBg: 'rgba(17, 16, 12, 0.80)',
      textPrimary: '#FAF7F0',
      textSecondary: '#C4BDA9',
      accent: '#EAB308',
      accentForeground: '#191405',
      accentGradient: 'linear-gradient(135deg, #FACC15 0%, #D97706 100%)',
      border: 'rgba(234, 179, 8, 0.22)',
    },
    light: {
      bgPrimary: '#FAF8F2',
      bgSecondary: '#F2EDE0',
      bgGradient:
        'radial-gradient(at 18% 15%, rgba(202, 138, 4, 0.12) 0px, transparent 52%), radial-gradient(at 85% 25%, rgba(180, 83, 9, 0.09) 0px, transparent 52%)',
      blobOne: 'rgba(202, 138, 4, 0.15)',
      blobTwo: 'rgba(180, 83, 9, 0.11)',
      cardBg: 'rgba(255, 255, 255, 0.80)',
      headerBg: 'rgba(250, 248, 242, 0.82)',
      textPrimary: '#1C1914',
      textSecondary: '#575044',
      accent: '#A16207',
      accentForeground: '#FFFFFF',
      accentGradient: 'linear-gradient(135deg, #CA8A04 0%, #B45309 100%)',
      border: 'rgba(28, 25, 20, 0.12)',
    },
  },
] as const;

export function getThemeById(id: ThemeId): ThemeDefinition {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function pickRandomTheme(rng: () => number = Math.random): ThemeDefinition {
  const index = Math.min(THEMES.length - 1, Math.max(0, Math.floor(rng() * THEMES.length)));
  return THEMES[index];
}

export function resolveEffectivePolarity(
  theme: ThemeDefinition,
  manualOverride: ThemePolarity | null
): ThemePolarity {
  return manualOverride ?? theme.defaultPolarity;
}

export function resolveThemePalette(
  theme: ThemeDefinition,
  manualOverride: ThemePolarity | null
): { polarity: ThemePolarity; palette: ThemePalette } {
  const polarity = resolveEffectivePolarity(theme, manualOverride);
  return {
    polarity,
    palette: polarity === 'dark' ? theme.dark : theme.light,
  };
}

export function paletteToCssVars(palette: ThemePalette): Record<string, string> {
  return {
    '--bg-primary': palette.bgPrimary,
    '--bg-secondary': palette.bgSecondary,
    '--bg-gradient': palette.bgGradient,
    '--blob-1': palette.blobOne,
    '--blob-2': palette.blobTwo,
    '--card-bg': palette.cardBg,
    '--header-bg': palette.headerBg,
    '--text-primary': palette.textPrimary,
    '--text-secondary': palette.textSecondary,
    '--accent': palette.accent,
    '--accent-foreground': palette.accentForeground,
    '--accent-gradient': palette.accentGradient,
    '--border': palette.border,
  };
}
