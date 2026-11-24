import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { getMemberBySlug, getProjectById } from '../data/db';
import type { LanguageCode, TeamMember } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const BackArrow = lang === 'fa' ? ArrowRight : ArrowLeft;

  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center space-y-4">
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
            {t('projectDetail.notFoundTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">
            {t('projectDetail.notFoundDesc')}
          </p>
          <Link
            to="/projects"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)]"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToProjects')}</span>
          </Link>
        </section>
      </PageTransition>
    );
  }

  const creators = project.creatorSlugs
    .map((slug) => getMemberBySlug(slug))
    .filter((m): m is TeamMember => Boolean(m));

  return (
    <PageTransition>
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToProjects')}</span>
          </Link>
        </div>

        <header className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-medium text-[var(--accent)]">
              {project.subtitle[lang]}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.title[lang]}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-3xl">
              {project.summary[lang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            >
              <span>{t('actions.livePreview')}</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>{t('actions.sourceCode')}</span>
            </a>
          </div>
        </header>

        {/* Metadata Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-[var(--border)] py-6">
          <div>
            <div className="text-xs text-[var(--text-secondary)]">{t('projectDetail.client')}</div>
            <div className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              {project.client[lang]}
            </div>
          </div>
          <div>
            <div className="text-xs text-[var(--text-secondary)]">{t('projectDetail.year')}</div>
            <div className="mt-1 font-mono-tabular text-sm font-semibold text-[var(--text-primary)]">
              {project.year}
            </div>
          </div>
          <div>
            <div className="text-xs text-[var(--text-secondary)]">
              {t('projectDetail.disciplines')}
            </div>
            <div className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              {project.tags.join(' · ')}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
          <MediaImage
            src={project.coverImage}
            alt={project.title[lang]}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 sm:p-8 space-y-3">
            <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
              {t('projectDetail.problem')}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {project.problem[lang]}
            </p>
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 sm:p-8 space-y-3">
            <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
              {t('projectDetail.solution')}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {project.solution[lang]}
            </p>
          </section>
        </div>

        {/* Tools & Creators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border)] pt-8">
          <section className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('projectDetail.tools')}
            </h2>
            <p className="text-base font-medium text-[var(--text-primary)] leading-relaxed">
              {project.tools.join('  ·  ')}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('projectDetail.creators')}
            </h2>
            <div className="flex flex-wrap gap-4">
              {creators.map((creator) => (
                <Link
                  key={creator.slug}
                  to={`/team/${creator.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] pe-4 p-2 hover:border-[var(--accent)] transition-colors"
                >
                  <div className="h-10 w-10 overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
                    <MediaImage
                      src={creator.avatar}
                      alt={creator.name[lang]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                      {creator.name[lang]}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {creator.role[lang]}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </PageTransition>
  );
}
