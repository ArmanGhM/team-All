import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { LanguageCode } from '../types/portfolio';
import { PageTransition } from '../components/PageTransition';

export function NotFound() {
  const { t, i18n } = useTranslation();
  const lang: LanguageCode = i18n.language === 'fa' ? 'fa' : 'en';
  const shouldReduceMotion = useReducedMotion();
  const ArrowIcon = lang === 'fa' ? ArrowRight : ArrowLeft;

  return (
    <PageTransition>
      <section className="relative mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center space-y-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 h-52 w-52 rounded-full blur-3xl opacity-45"
          style={{ background: 'var(--accent-gradient)' }}
        />

        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ backgroundImage: 'var(--accent-gradient)' }}
          className="relative font-display text-7xl sm:text-8xl font-bold tracking-tight bg-clip-text text-transparent inline-block"
        >
          {t('notFound.code')}
        </motion.div>

        <div className="relative space-y-3">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            {t('notFound.title')}
          </h1>
          <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto">
            {t('notFound.subtitle')}
          </p>
        </div>

        <div className="relative pt-2">
          <Link
            to="/"
            style={{ background: 'var(--accent-gradient)' }}
            className="inline-flex h-11 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-opacity"
          >
            <ArrowIcon className="w-4 h-4" aria-hidden="true" />
            <span>{t('actions.returnHome')}</span>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
