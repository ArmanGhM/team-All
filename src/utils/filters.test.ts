import test from 'node:test';
import assert from 'node:assert/strict';
import { BLOG_POSTS, PROJECTS, TEAM_MEMBERS } from '../data/db';
import {
  buildProjectSearchParams,
  filterProjects,
  getAllProjectTags,
  parseProjectSearchParams,
  searchPortfolioEntities,
} from './filters';

test('filterProjects finds Gang of Forty in both English and Farsi queries', () => {
  const enMatch = filterProjects(PROJECTS, { q: 'Forty', member: '', tag: '' });
  assert.equal(enMatch.length, 1);
  assert.equal(enMatch[0].id, 'gang-of-forty');

  const faMatch = filterProjects(PROJECTS, { q: 'گروه چهل', member: '', tag: '' });
  assert.equal(faMatch.length, 1);
  assert.equal(faMatch[0].id, 'gang-of-forty');
});

test('filterProjects filters by member slug and tag combined', () => {
  const byMember = filterProjects(PROJECTS, { q: '', member: 'niloofar-azizi', tag: '' });
  assert.equal(byMember.length, 2);
  assert.ok(byMember.every((p) => p.creatorSlugs.includes('niloofar-azizi')));

  const combined = filterProjects(PROJECTS, {
    q: '',
    member: 'niloofar-azizi',
    tag: 'Typography',
  });
  assert.equal(combined.length, 1);
  assert.equal(combined[0].id, 'persepolis-type');
});

test('parseProjectSearchParams and buildProjectSearchParams round-trip cleanly', () => {
  const built = buildProjectSearchParams({
    q: '  Atlas ',
    member: 'aryan-rahimi',
    tag: '',
  });
  assert.equal(built.toString(), 'q=Atlas&member=aryan-rahimi');

  const parsed = parseProjectSearchParams(built);
  assert.deepEqual(parsed, { q: 'Atlas', member: 'aryan-rahimi', tag: '' });
});

test('getAllProjectTags returns sorted unique disciplines', () => {
  const tags = getAllProjectTags(PROJECTS);
  assert.ok(tags.includes('E-Commerce'));
  assert.ok(tags.includes('Bilingual'));
  assert.equal(new Set(tags).size, tags.length);
});

test('searchPortfolioEntities indexes pages, projects, team, and blog posts', () => {
  const all = searchPortfolioEntities('', 'en', TEAM_MEMBERS, PROJECTS, BLOG_POSTS, {
    home: 'Home',
    team: 'Team',
    projects: 'Projects',
    blog: 'Blog',
  });
  assert.equal(all.length, 4 + PROJECTS.length + TEAM_MEMBERS.length + BLOG_POSTS.length);

  const filtered = searchPortfolioEntities('Kashan', 'en', TEAM_MEMBERS, PROJECTS, BLOG_POSTS, {
    home: 'Home',
    team: 'Team',
    projects: 'Projects',
    blog: 'Blog',
  });
  assert.ok(filtered.some((item) => item.path === '/projects/kashan-acoustics'));
});
