export const competitors = [
  {
    slug: 'toggl',
    name: 'Toggl',
    weakness: 'per-seat pricing that punishes growing agencies',
    focus: 'clunky interface designed for solo freelancers, not teams',
  },
  {
    slug: 'harvest',
    name: 'Harvest',
    weakness: 'outdated UI and slow navigation',
    focus: 'forcing you to click through multiple screens just to log time',
  },
  {
    slug: 'hubstaff',
    name: 'Hubstaff',
    weakness: 'invasive screen recording and spyware',
    focus: 'micromanaging employees instead of trusting them',
  },
  {
    slug: 'clockify',
    name: 'Clockify',
    weakness: 'overwhelming features you do not need',
    focus: 'complex reporting that confuses managers',
  }
];

export function getCompetitor(slug) {
  return competitors.find((c) => c.slug === slug);
}
