import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import { Search, X } from 'lucide-react';
import { PROJECTS, TEAM_MEMBERS } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import {
  buildProjectSearchParams,
  filterProjects,
  getAllProjectTags,
  parseProjectSearchParams,
} from '../utils/filters';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function Projects() {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const shouldReduceMotion = useReducedMotion();
  const [searchParams, setSearchParams] = useSearchParams();

  const criteria = useMemo(() => parseProjectSearchParams(searchParams), [searchParams]);
  const allTags = useMemo(() => getAllProjectTags(PROJECTS), []);
  const filteredProjects = useMemo(() => filterProjects(PROJECTS, criteria), [criteria]);

  const hasActiveFilters = Boolean(criteria.q || criteria.member || criteria.tag);

  const updateFilter = (patch: Partial<typeof criteria>) => {
    const next = { ...criteria, ...patch };
    setSearchParams(buildProjectSearchParams(next), { replace: true });
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <div className="max-w-2xl space-y-3">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {t('projects.pageTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">{t('projects.pageSubtitle')}</p>
        </div>

        {/* URL-Synced Search & Filter Toolbar */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5 space-y-1.5">
              <label
                htmlFor="projects-search-input"
                className="block text-xs font-medium text-[var(--text-secondary)]"
              >
                {t('projects.searchLabel')}
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 start-3 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]"
                  aria-hidden="true"
                />
                <input
                  id="projects-search-input"
                  type="search"
                  value={criteria.q}
                  onChange={(e) => updateFilter({ q: e.target.value })}
                  placeholder={t('projects.searchPlaceholder')}
                  className="h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] ps-9 pe-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-1.5">
              <label
                htmlFor="projects-member-select"
                className="block text-xs font-medium text-[var(--text-secondary)]"
              >
                {t('projects.memberLabel')}
              </label>
              <select
                id="projects-member-select"
                value={criteria.member}
                onChange={(e) => updateFilter({ member: e.target.value })}
                className="h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-3.5 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="">{t('projects.allMembers')}</option>
                {TEAM_MEMBERS.map((member) => (
                  <option key={member.slug} value={member.slug}>
                    {member.name[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label
                htmlFor="projects-tag-select"
                className="block text-xs font-medium text-[var(--text-secondary)]"
              >
                {t('projects.tagLabel')}
              </label>
              <select
                id="projects-tag-select"
                value={criteria.tag}
                onChange={(e) => updateFilter({ tag: e.target.value })}
                className="h-10 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-3 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="">{t('projects.allTags')}</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex items-center justify-end">
              <button
                type="button"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-4 text-xs font-semibold text-[var(--text-primary)] transition-opacity hover:border-[var(--accent)] disabled:opacity-40 whitespace-nowrap shrink-0"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t('actions.clearFilters')}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[var(--border)] pt-3 text-xs text-[var(--text-secondary)] font-mono-tabular">
            <span>
              {t('projects.resultsCount', {
                count: filteredProjects.length,
                total: PROJECTS.length,
              })}
            </span>
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-12 text-center space-y-4">
            <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
              {t('projects.emptyTitle')}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              {t('projects.emptyDesc')}
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)]"
            >
              {t('actions.clearFilters')}
            </button>
          </div>
        ) : (
          <div
            data-testid="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <Link to={`/projects/${project.id}`} className="flex flex-col flex-1">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--bg-secondary)]">
                    <MediaImage
                      src={project.coverImage}
                      alt={project.title[lang]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <span className="font-mono-tabular">{project.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.tags.join(' / ')}</span>
                      </div>
                      <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title[lang]}
                      </h2>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                        {project.summary[lang]}
                      </p>
                    </div>
                    <div className="border-t border-[var(--border)] pt-3 text-xs text-[var(--text-secondary)]">
                      {project.tools.slice(0, 4).join(' · ')}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
