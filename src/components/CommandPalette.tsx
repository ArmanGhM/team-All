import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowLeft, FileText, FolderKanban, Globe, Search, User, X } from 'lucide-react';
import { BLOG_POSTS, PROJECTS, TEAM_MEMBERS } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import { type CommandSearchItem, searchPortfolioEntities } from '../utils/filters';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () =>
      searchPortfolioEntities(query, lang, TEAM_MEMBERS, PROJECTS, BLOG_POSTS, {
        home: t('nav.home'),
        team: t('nav.team'),
        projects: t('nav.projects'),
        blog: t('nav.blog'),
      }),
    [query, lang, t]
  );

  const grouped = useMemo(() => {
    const groups: Record<CommandSearchItem['group'], CommandSearchItem[]> = {
      pages: [],
      projects: [],
      team: [],
      blog: [],
    };
    for (const item of results) {
      groups[item.group].push(item);
    }
    return groups;
  }, [results]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (item: CommandSearchItem) => {
    onClose();
    navigate(item.path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[activeIndex];
      if (target) handleSelect(target);
    }
  };

  const GroupIcon = ({ group }: { group: CommandSearchItem['group'] }) => {
    switch (group) {
      case 'pages':
        return <Globe className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />;
      case 'projects':
        return <FolderKanban className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />;
      case 'team':
        return <User className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />;
      case 'blog':
        return <FileText className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />;
    }
  };

  const DirectionArrow = lang === 'fa' ? ArrowLeft : ArrowRight;
  const groupOrder: CommandSearchItem['group'][] = ['pages', 'projects', 'team', 'blog'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
          onKeyDown={handleKeyDown}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t('actions.openCommandPalette')}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3.5">
              <Search className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />
              <label htmlFor="command-palette-input" className="sr-only">
                {t('commandPalette.placeholder')}
              </label>
              <input
                id="command-palette-input"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('commandPalette.placeholder')}
                className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label={t('commandPalette.hintClose')}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[56vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="py-10 text-center text-sm text-[var(--text-secondary)]">
                  {t('commandPalette.empty')}
                </p>
              ) : (
                <div className="space-y-3">
                  {groupOrder.map((groupKey) => {
                    const items = grouped[groupKey];
                    if (items.length === 0) return null;

                    return (
                      <div key={groupKey}>
                        <div className="px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
                          {t(`commandPalette.groups.${groupKey}`)}
                        </div>
                        <ul role="listbox" className="space-y-0.5">
                          {items.map((item) => {
                            const flatIndex = results.findIndex((r) => r.id === item.id);
                            const isActive = flatIndex === activeIndex;
                            return (
                              <li key={item.id}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={isActive}
                                  onMouseEnter={() => setActiveIndex(flatIndex)}
                                  onClick={() => handleSelect(item)}
                                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors ${
                                    isActive
                                      ? 'bg-[var(--bg-secondary)] text-[var(--text-primary)]'
                                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                                  }`}
                                >
                                  <div className="flex min-w-0 items-center gap-3">
                                    <GroupIcon group={item.group} />
                                    <div className="min-w-0">
                                      <div className="truncate font-medium">{item.title}</div>
                                      <div className="truncate text-xs text-[var(--text-secondary)]">
                                        {item.subtitle}
                                      </div>
                                    </div>
                                  </div>
                                  <DirectionArrow
                                    className={`w-4 h-4 shrink-0 transition-opacity ${
                                      isActive ? 'opacity-100 text-[var(--accent)]' : 'opacity-0'
                                    }`}
                                    aria-hidden="true"
                                  />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2.5 text-xs text-[var(--text-secondary)]">
              <div className="flex items-center gap-4">
                <span>↑↓ {t('commandPalette.hintNavigate')}</span>
                <span>↵ {t('commandPalette.hintOpen')}</span>
              </div>
              <span>ESC {t('commandPalette.hintClose')}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
