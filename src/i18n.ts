import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fa from './locales/fa.json';
import type { LanguageCode } from './types/portfolio';

export const LANGUAGE_STORAGE_KEY = 'studio_chahar_lang';

export function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === 'fa' ? 'fa' : 'en';
}

export function applyDocumentDirection(lang: LanguageCode): void {
  if (typeof document === 'undefined') return;
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
}

const initialLanguage = getInitialLanguage();
applyDocumentDirection(initialLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  const normalized: LanguageCode = lng === 'fa' ? 'fa' : 'en';
  applyDocumentDirection(normalized);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
  }
});

export default i18n;
