import type { BlogPost, LanguageCode, Project, TeamMember } from '../types/portfolio';

export interface ProjectFilterCriteria {
  q: string;
  member: string;
  tag: string;
}

export function parseProjectSearchParams(params: URLSearchParams): ProjectFilterCriteria {
  return {
    q: params.get('q')?.trim() ?? '',
    member: params.get('member')?.trim() ?? '',
    tag: params.get('tag')?.trim() ?? '',
  };
}

export function buildProjectSearchParams(criteria: ProjectFilterCriteria): URLSearchParams {
  const next = new URLSearchParams();
  const q = criteria.q.trim();
  const member = criteria.member.trim();
  const tag = criteria.tag.trim();
  if (q) next.set('q', q);
  if (member) next.set('member', member);
  if (tag) next.set('tag', tag);
  return next;
}

export function filterProjects(projects: readonly Project[], criteria: ProjectFilterCriteria): Project[] {
  const normalizedQuery = criteria.q.trim().toLowerCase();
  const normalizedMember = criteria.member.trim().toLowerCase();
  const normalizedTag = criteria.tag.trim().toLowerCase();

  return projects.filter((project) => {
    if (normalizedMember) {
      const hasMember = project.creatorSlugs.some(
        (slug) => slug.toLowerCase() === normalizedMember
      );
      if (!hasMember) return false;
    }

    if (normalizedTag) {
      const hasTag = project.tags.some((t) => t.toLowerCase() === normalizedTag);
      if (!hasTag) return false;
    }

    if (normalizedQuery) {
      const haystack = [
        project.id,
        project.title.en,
        project.title.fa,
        project.subtitle.en,
        project.subtitle.fa,
        project.summary.en,
        project.summary.fa,
        project.client.en,
        project.client.fa,
        ...project.tools,
        ...project.tags,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(normalizedQuery)) return false;
    }

    return true;
  });
}

export function getAllProjectTags(projects: readonly Project[]): string[] {
  const set = new Set<string>();
  for (const project of projects) {
    for (const tag of project.tags) {
      set.add(tag);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export interface CommandSearchItem {
  id: string;
  group: 'pages' | 'team' | 'projects' | 'blog';
  title: string;
  subtitle: string;
  path: string;
}

export function searchPortfolioEntities(
  query: string,
  lang: LanguageCode,
  members: readonly TeamMember[],
  projects: readonly Project[],
  posts: readonly BlogPost[],
  pageLabels: {
    home: string;
    team: string;
    projects: string;
    blog: string;
  }
): CommandSearchItem[] {
  const q = query.trim().toLowerCase();

  const pages: CommandSearchItem[] = [
    { id: 'page-home', group: 'pages', title: pageLabels.home, subtitle: '/', path: '/' },
    { id: 'page-team', group: 'pages', title: pageLabels.team, subtitle: '/team', path: '/team' },
    { id: 'page-projects', group: 'pages', title: pageLabels.projects, subtitle: '/projects', path: '/projects' },
    { id: 'page-blog', group: 'pages', title: pageLabels.blog, subtitle: '/blog', path: '/blog' },
  ];

  const memberItems: CommandSearchItem[] = members.map((m) => ({
    id: `member-${m.slug}`,
    group: 'team',
    title: m.name[lang],
    subtitle: m.role[lang],
    path: `/team/${m.slug}`,
  }));

  const projectItems: CommandSearchItem[] = projects.map((p) => ({
    id: `project-${p.id}`,
    group: 'projects',
    title: p.title[lang],
    subtitle: `${p.year} · ${p.tags.slice(0, 2).join(', ')}`,
    path: `/projects/${p.id}`,
  }));

  const postItems: CommandSearchItem[] = posts.map((post) => ({
    id: `post-${post.slug}`,
    group: 'blog',
    title: post.title[lang],
    subtitle: `${post.publishedAt} · ${post.readTimeMinutes}m`,
    path: `/blog/${post.slug}`,
  }));

  const all = [...pages, ...projects.length ? projectItems : [], ...memberItems, ...postItems];

  if (!q) {
    return all;
  }

  return all.filter((item) => {
    if (item.group === 'team') {
      const m = members.find((mem) => `member-${mem.slug}` === item.id);
      if (m) {
        const hay = `${m.name.en} ${m.name.fa} ${m.role.en} ${m.role.fa} ${m.skills.join(' ')}`.toLowerCase();
        return hay.includes(q);
      }
    }
    if (item.group === 'projects') {
      const p = projects.find((proj) => `project-${proj.id}` === item.id);
      if (p) {
        const hay = `${p.title.en} ${p.title.fa} ${p.subtitle.en} ${p.subtitle.fa} ${p.tags.join(' ')} ${p.tools.join(' ')}`.toLowerCase();
        return hay.includes(q);
      }
    }
    if (item.group === 'blog') {
      const b = posts.find((post) => `post-${post.slug}` === item.id);
      if (b) {
        const hay = `${b.title.en} ${b.title.fa} ${b.excerpt.en} ${b.excerpt.fa} ${b.tags.join(' ')}`.toLowerCase();
        return hay.includes(q);
      }
    }
    return `${item.title} ${item.subtitle} ${item.path}`.toLowerCase().includes(q);
  });
}
