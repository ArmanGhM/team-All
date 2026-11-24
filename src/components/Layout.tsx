import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, Moon, Palette, Search, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { LanguageCode } from '../types/portfolio';

interface LayoutProps {
  children: React.ReactNode;
  onOpenCommandPalette: () => void;
}

export function Layout({ children, onOpenCommandPalette }: LayoutProps) {
  const { t, i18n } = useTranslation();
  const { activeTheme, isDark, toggleDarkLight, cycleRandomTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';

  const toggleLanguage = () => {
    const nextLang: LanguageCode = lang === 'en' ? 'fa' : 'en';
    void i18n.changeLanguage(nextLang);
  };

  const navItems = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/team', label: t('nav.team'), end: false },
    { to: '/projects', label: t('nav.projects'), end: false },
    { to: '/blog', label: t('nav.blog'), end: false },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Ambient Mesh Gradient Blobs */}
      <div
        aria-hidden="true"
        className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 32, -16, 0], y: [0, -24, 18, 0], scale: [1, 1.06, 0.98, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -start-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-75"
          style={{ background: 'var(--blob-1)' }}
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -28, 20, 0], y: [0, 26, -18, 0], scale: [1, 0.96, 1.05, 1] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -end-24 h-[460px] w-[460px] rounded-full blur-3xl opacity-75"
          style={{ background: 'var(--blob-2)' }}
        />
      </div>

      {/* Sticky Glassmorphism 3-Zone Header */}
      <header
        className="no-print sticky top-0 z-40 h-16 border-b border-[var(--border)] backdrop-blur-md transition-colors"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 md:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <Link
            to="/"
            className="font-display text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-md px-1"
          >
            {t('brand')}
          </Link>

          {/* Zone 2: 4 Clean Single-Line Nav Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[var(--accent)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Compact Utility Controls (Search Ctrl+K, Lang FA/EN, Theme Dark/Light) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label={t('actions.openCommandPalette')}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              <Search className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t('nav.search')}</span>
              <kbd dir="ltr" className="hidden lg:inline font-mono-tabular text-[11px] opacity-75">
                Ctrl+K
              </kbd>
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('actions.toggleLanguageAria')}
              className="inline-flex h-10 min-w-[44px] items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {t('actions.toggleLanguage')}
            </button>

            <button
              type="button"
              onClick={toggleDarkLight}
              aria-label={isDark ? t('actions.toggleThemeLight') : t('actions.toggleThemeDark')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {isDark ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-primary)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Menu className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              aria-label="Mobile navigation"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.16 }}
              className="md:hidden border-b border-[var(--border)] bg-[var(--bg-primary)] px-4 py-4 shadow-lg"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Clean Editorial Footer */}
      <footer className="no-print border-t border-[var(--border)] bg-[var(--bg-secondary)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <p className="font-display text-base font-semibold text-[var(--text-primary)]">
                {t('brand')}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{t('footer.tagline')}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={cycleRandomTheme}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                aria-label={t('actions.shuffleTheme')}
              >
                <Palette className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {t('footer.activeTheme')}: {activeTheme.name[lang]}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-secondary)]">
            {t('footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  );
}
