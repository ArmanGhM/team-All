import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getMemberBySlug } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function Blog() {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const shouldReduceMotion = useReducedMotion();
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        <div className="max-w-2xl space-y-3">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {t('blog.pageTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">{t('blog.pageSubtitle')}</p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post, index) => {
            const author = getMemberBySlug(post.authorSlug);
            return (
              <motion.article
                key={post.slug}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: index * 0.05 }}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-colors hover:border-[var(--accent)]"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 items-stretch"
                >
                  <div className="md:col-span-4 aspect-[4/3] md:aspect-auto overflow-hidden bg-[var(--bg-secondary)]">
                    <MediaImage
                      src={post.coverImage}
                      alt={post.title[lang]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
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
                        <span aria-hidden="true">·</span>
                        <span>{post.tags.join(' / ')}</span>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {post.title[lang]}
                      </h2>

                      <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                        {post.excerpt[lang]}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                      <span>{t('actions.readArticle')}</span>
                      <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
