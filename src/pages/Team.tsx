import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS, TEAM_MEMBERS } from '../data/db';
import type { LanguageCode, TeamMember } from '../types/portfolio';
import { MediaImage } from '../components/MediaImage';
import { PageTransition } from '../components/PageTransition';

function TiltMemberCard({
  member,
  index,
  lang,
}: {
  member: TeamMember;
  index: number;
  lang: LanguageCode;
}) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const ArrowIcon = lang === 'fa' ? ArrowLeft : ArrowRight;

  const memberProjectsCount = PROJECTS.filter((p) =>
    p.creatorSlugs.includes(member.slug)
  ).length;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((-y * 8).toFixed(2)),
      rotateY: Number((x * 8).toFixed(2)),
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ perspective: 900 }}
    >
      <motion.article
        animate={shouldReduceMotion ? undefined : tilt}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative overflow-hidden h-full rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-md p-6 flex flex-col justify-between gap-6 transition-colors hover:border-[var(--accent)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full blur-2xl opacity-60"
          style={{ background: member.gradient.softGlow }}
        />

        <div className="relative space-y-5">
          <div className="flex items-start gap-4">
            <div
              className="h-24 w-24 shrink-0 rounded-xl p-[2px]"
              style={{ background: member.gradient.css }}
            >
              <div className="h-full w-full overflow-hidden rounded-[10px] bg-[var(--bg-secondary)]">
                <MediaImage
                  src={member.avatar}
                  alt={member.name[lang]}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-0 space-y-1">
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">
                {member.name[lang]}
              </h2>
              <p
                className="text-sm font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: member.gradient.css }}
              >
                {member.role[lang]}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">{member.location[lang]}</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{member.bio[lang]}</p>

          <div className="text-xs text-[var(--text-secondary)]">
            {member.skills.slice(0, 5).join(' · ')}
          </div>
        </div>

        <div className="relative flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-mono-tabular">
            <span>
              {member.yearsExperience} {t('team.yearsExp')}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {memberProjectsCount} {t('team.projectsCount')}
            </span>
          </div>

          <Link
            to={`/team/${member.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap shrink-0"
          >
            <span>{t('actions.viewResume')}</span>
            <ArrowIcon className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function Team() {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl space-y-3 mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            {t('team.pageTitle')}
          </h1>
          <p className="text-base text-[var(--text-secondary)]">{t('team.pageSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <TiltMemberCard key={member.slug} member={member} index={index} lang={lang} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
