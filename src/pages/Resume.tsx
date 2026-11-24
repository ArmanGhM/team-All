import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Download, ExternalLink, Mail } from 'lucide-react';
import { BLOG_POSTS, getMemberBySlug, PROJECTS } from '../data/db';
import type { LanguageCode } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

export function Resume() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const member = slug ? getMemberBySlug(slug) : undefined;
  const BackArrow = lang === 'fa' ? ArrowRight : ArrowLeft;
  const ForwardArrow = lang === 'fa' ? ArrowLeft : ArrowRight;

  if (!member) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center space-y-4">
          <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
            {t('resume.notFoundTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">{t('resume.notFoundDesc')}</p>
          <Link
            to="/team"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-foreground)]"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToTeam')}</span>
          </Link>
        </section>
      </PageTransition>
    );
  }

  const memberProjects = PROJECTS.filter((p) => p.creatorSlugs.includes(member.slug));
  const memberPosts = BLOG_POSTS.filter((p) => p.authorSlug === member.slug);

  const handleDownloadPdf = async () => {
    if (!resumeRef.current || isExporting) return;
    setIsExporting(true);
    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
      await html2pdf()
        .set({
          margin: 10,
          filename: `${member.slug}-resume.pdf`,
          image: { type: 'jpeg', quality: 0.96 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(resumeRef.current)
        .save();
    } catch {
      window.print();
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-8">
        {/* Top Action Bar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <BackArrow className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.backToTeam')}</span>
          </Link>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            style={{ background: member.gradient.css }}
            className="inline-flex h-10 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95 disabled:opacity-60 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>{isExporting ? t('actions.downloadingPdf') : t('actions.downloadPdf')}</span>
          </button>
        </div>

        {/* Printable Resume Container */}
        <div
          id="resume-document"
          ref={resumeRef}
          className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md p-6 sm:p-10 space-y-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -end-24 h-64 w-64 rounded-full blur-3xl opacity-55"
            style={{ background: member.gradient.softGlow }}
          />

          {/* Header */}
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 border-b border-[var(--border)] pb-8">
            <div
              className="h-24 w-24 shrink-0 rounded-xl p-[2px]"
              style={{ background: member.gradient.css }}
            >
              <div className="h-full w-full overflow-hidden rounded-[10px] bg-[var(--bg-secondary)]">
                <MediaImage
                  src={member.avatar}
                  alt={member.name[lang]}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                {member.name[lang]}
              </h1>
              <p
                className="text-base font-semibold bg-clip-text text-transparent inline-block"
                style={{ backgroundImage: member.gradient.css }}
              >
                {member.role[lang]}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
                <span>{member.location[lang]}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)]"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{member.email}</span>
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--text-primary)]"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('resume.summary')}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-primary)] max-w-3xl">
              {member.bio[lang]}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3 border-t border-[var(--border)] pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('resume.skills')}
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]">
              {member.skills.join('  ·  ')}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-5 border-t border-[var(--border)] pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('resume.experience')}
            </h2>
            <div className="space-y-6">
              {member.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6"
                >
                  <div className="md:col-span-4">
                    <div className="font-semibold text-[var(--text-primary)]">{exp.role[lang]}</div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {exp.company[lang]} · <span className="font-mono-tabular">{exp.period[lang]}</span>
                    </div>
                  </div>
                  <p className="md:col-span-8 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {exp.summary[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 border-t border-[var(--border)] pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('resume.education')}
            </h2>
            <div className="space-y-3">
              {member.education.map((edu) => (
                <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {edu.degree[lang]}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {' '}
                      — {edu.institution[lang]}
                    </span>
                  </div>
                  <span className="font-mono-tabular text-xs text-[var(--text-secondary)]">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contributed Projects & Published Posts */}
        <div className="no-print grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
              {t('resume.authoredProjects')}
            </h2>
            <ul className="space-y-3">
              {memberProjects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/projects/${project.id}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] p-3 hover:border-[var(--accent)] transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                        {project.title[lang]}
                      </div>
                      <div className="text-xs text-[var(--text-secondary)]">
                        {project.subtitle[lang]}
                      </div>
                    </div>
                    <ForwardArrow className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-[var(--text-primary)]">
              {t('resume.authoredPosts')}
            </h2>
            <ul className="space-y-3">
              {memberPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] p-3 hover:border-[var(--accent)] transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                        {post.title[lang]}
                      </div>
                      <div className="text-xs font-mono-tabular text-[var(--text-secondary)]">
                        {post.publishedAt}
                      </div>
                    </div>
                    <ForwardArrow className="w-4 h-4 shrink-0 text-[var(--text-secondary)]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
