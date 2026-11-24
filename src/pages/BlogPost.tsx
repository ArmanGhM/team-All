import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getMemberBySlug, getPostBySlug } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const BackArrow = lang === 'fa' ? ArrowRight : ArrowLeft;
  const ForwardArrow = lang === 'fa' ? ArrowLeft : ArrowRight;

  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center space-y-4">
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
            {t('blogPost.notFoundTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">{t('blogPost.notFoundDesc')}</p>
          <Link
            to="/blog"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)]"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToBlog')}</span>
          </Link>
        </section>
      </PageTransition>
    );
  }

  const author = getMemberBySlug(post.authorSlug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const paragraphs = post.content[lang].split('\n\n');

  return (
    <PageTransition>
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToBlog')}</span>
          </Link>
        </div>

        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span className="font-mono-tabular">{post.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span>
              {post.readTimeMinutes} {t('blog.minRead')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{post.tags.join(' / ')}</span>
          </div>

          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.18]"
            style={{ textWrap: 'balance' }}
          >
            {post.title[lang]}
          </h1>

          {author && (
            <div className="pt-2">
              <Link
                to={`/team/${author.slug}`}
                className="inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-2 pe-4 hover:border-[var(--accent)] transition-colors"
              >
                <div className="h-10 w-10 overflow-hidden rounded-lg bg-[var(--bg-secondary)]">
                  <MediaImage
                    src={author.avatar}
                    alt={author.name[lang]}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {t('blogPost.writtenBy')}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">
                    {author.name[lang]}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </header>

        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
          <MediaImage
            src={post.coverImage}
            alt={post.title[lang]}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-base sm:text-[17px] leading-[1.85] text-[var(--text-primary)]">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Related Posts */}
        <section className="border-t border-[var(--border)] pt-10 space-y-6">
          <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
            {t('blogPost.relatedHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 space-y-2 hover:border-[var(--accent)] transition-colors"
              >
                <div className="text-xs font-mono-tabular text-[var(--text-secondary)]">
                  {related.publishedAt}
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {related.title[lang]}
                </h3>
                <div className="inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-[var(--accent)]">
                  <span>{t('actions.readArticle')}</span>
                  <ForwardArrow className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </PageTransition>
  );
}
