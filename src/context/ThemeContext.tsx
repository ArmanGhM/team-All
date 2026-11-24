import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ThemeDefinition, ThemePolarity } from '../types/portfolio';
import {
  paletteToCssVars,
  pickRandomTheme,
  resolveThemePalette,
  THEMES,
} from '../utils/themes';

export const THEME_MODE_STORAGE_KEY = 'studio_chahar_theme_mode_override';

interface ThemeContextValue {
  activeTheme: ThemeDefinition;
  polarity: ThemePolarity;
  isDark: boolean;
  hasManualOverride: boolean;
  toggleDarkLight: () => void;
  cycleRandomTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredPolarity(): ThemePolarity | null {
  if (typeof window === 'undefined') return null;
  const saved = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Pick a random theme on every fresh page load/refresh
  const [activeTheme, setActiveTheme] = useState<ThemeDefinition>(() => pickRandomTheme());
  const [manualOverride, setManualOverride] = useState<ThemePolarity | null>(() =>
    readStoredPolarity()
  );

  const { polarity, palette } = useMemo(
    () => resolveThemePalette(activeTheme, manualOverride),
    [activeTheme, manualOverride]
  );

  useEffect(() => {
    const root = document.documentElement;
    const vars = paletteToCssVars(palette);
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }

    if (polarity === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.dataset.themeId = activeTheme.id;
    root.dataset.themeMode = polarity;
  }, [activeTheme.id, palette, polarity]);

  const toggleDarkLight = useCallback(() => {
    const nextPolarity: ThemePolarity = polarity === 'dark' ? 'light' : 'dark';
    setManualOverride(nextPolarity);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_MODE_STORAGE_KEY, nextPolarity);
    }
  }, [polarity]);

  const cycleRandomTheme = useCallback(() => {
    const candidates = THEMES.filter((t) => t.id !== activeTheme.id);
    const next = candidates[Math.floor(Math.random() * candidates.length)] ?? THEMES[0];
    setActiveTheme(next);
  }, [activeTheme.id]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      activeTheme,
      polarity,
      isDark: polarity === 'dark',
      hasManualOverride: manualOverride !== null,
      toggleDarkLight,
      cycleRandomTheme,
    }),
    [activeTheme, polarity, manualOverride, toggleDarkLight, cycleRandomTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
