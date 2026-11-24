import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getMemberBySlug, HERO_IMAGE, PROJECTS, TEAM_MEMBERS } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function Home() {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const shouldReduceMotion = useReducedMotion();
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const latestPosts = BLOG_POSTS.slice(0, 2);

  const metrics = [
    { label: t('metrics.shipped'), value: t('metrics.shippedValue') },
    { label: t('metrics.specialists'), value: t('metrics.specialistsValue') },
    { label: t('metrics.languages'), value: t('metrics.languagesValue') },
    { label: t('metrics.uptime'), value: t('metrics.uptimeValue') },
  ];

  return (
    <PageTransition>
      {/* Split-Screen Editorial Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[var(--accent)]">
                {t('hero.kicker')}
              </p>
              <h1
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                {t('hero.title')}
              </h1>
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                style={{ background: 'var(--accent-gradient)' }}
                className="inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white shadow-sm transition-transform hover:opacity-95 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                <span>{t('actions.viewProjects')}</span>
                <ArrowIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/team"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-6 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>{t('actions.meetTeam')}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
              <MediaImage
                src={HERO_IMAGE}
                alt={t('brand')}
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
                aria-hidden="true"
              />

              {/* Subtle Floating Architectural Proof Cards */}
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute bottom-5 start-5 rounded-xl border border-white/20 bg-black/55 backdrop-blur-md px-4 py-3 text-white"
              >
                <div className="text-xs text-white/75">{t('hero.floatingCardOneMeta')}</div>
                <div className="text-sm font-semibold">{t('hero.floatingCardOneTitle')}</div>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:block absolute top-5 end-5 rounded-xl border border-white/20 bg-black/55 backdrop-blur-md px-4 py-3 text-white"
              >
                <div className="text-xs text-white/75">{t('hero.floatingCardTwoMeta')}</div>
                <div className="text-sm font-semibold">{t('hero.floatingCardTwoTitle')}</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Split */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 border-y border-[var(--border)] py-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-1 px-2">
              <div className="font-mono-tabular text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 border-b border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t('home.projectsHeading')}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {t('home.projectsSubheading')}
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t('home.viewAllProjects')}</span>
            <ArrowIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
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
                      <span>{project.tags.slice(0, 2).join(' / ')}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title[lang]}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                      {project.summary[lang]}
                    </p>
                  </div>

                  <div className="text-xs font-medium text-[var(--text-secondary)]">
                    {project.tools.slice(0, 3).join(' · ')}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Team Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 border-b border-[var(--border)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t('home.teamHeading')}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {t('home.teamSubheading')}
            </p>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t('home.viewAllTeam')}</span>
            <ArrowIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.22, delay: index * 0.05 }}
            >
              <Link
                to={`/team/${member.slug}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md p-5 transition-colors hover:border-[var(--accent)]"
              >
                <div
                  className="aspect-square w-full rounded-xl p-[2px] mb-4"
                  style={{ background: member.gradient.css }}
                >
                  <div className="h-full w-full overflow-hidden rounded-[10px] bg-[var(--bg-secondary)]">
                    <MediaImage
                      src={member.avatar}
                      alt={member.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {member.name[lang]}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{member.role[lang]}</p>
                <p className="mt-2 text-xs text-[var(--text-secondary)]">
                  {member.location[lang]}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Studio Notes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {t('home.blogHeading')}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {t('home.blogSubheading')}
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t('home.viewAllBlog')}</span>
            <ArrowIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post) => {
            const author = getMemberBySlug(post.authorSlug);
            return (
              <article
                key={post.slug}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <Link to={`/blog/${post.slug}`} className="block space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="font-mono-tabular">{post.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {post.readTimeMinutes} {t('blog.minRead')}
                    </span>
                    {author && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{author.name[lang]}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title[lang]}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {post.excerpt[lang]}
                  </p>
                  <div className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-[var(--accent)]">
                    <span>{t('actions.readArticle')}</span>
                    <ArrowIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
