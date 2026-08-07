export const personas = [
  {
    slug: 'agencies',
    name: 'Digital & Creative Agencies',
    painPoint: 'Stop bleeding billable hours because your creatives hate using your clunky time tracker.',
    focus: 'Protect project margins effortlessly',
    weakness: 'Awkward Friday afternoon timesheet chasing',
  },
  {
    slug: 'engineering-teams',
    name: 'Software & Dev Teams',
    painPoint: 'We built VeloTime because we hated tracking our own time. Log hours without leaving your keyboard.',
    focus: 'Zero-bloat developer experience',
    weakness: 'Constant context switching and mouse-heavy navigation',
  },
  {
    slug: 'consultants',
    name: 'Consultants & Advisory',
    painPoint: 'Fast client switching so you can bill accurately without spending 30 minutes organizing spreadsheets.',
    focus: 'Audit-ready logs for accurate billing',
    weakness: 'Losing track of micro-tasks across multiple clients',
  },
  {
    slug: 'remote-teams',
    name: 'Async & Remote Workspaces',
    painPoint: 'Trust your team, don\'t spy on them. Get 100% timesheet compliance by making it completely frictionless.',
    focus: 'High compliance through autonomy',
    weakness: 'Creepy surveillance tools that ruin morale',
  },
  {
    slug: 'agency-owners',
    name: 'Agency Founders & Executives',
    painPoint: 'You can\'t fix profitability if your timesheet data is incomplete. Frictionless entry equals perfect data.',
    focus: 'Perfect margin and utilization analytics',
    weakness: 'Flying blind on actual project costs',
  },
  {
    slug: 'freelancers',
    name: 'Freelancers & Solopreneurs',
    painPoint: 'A lightweight, 10-second grid that gets out of your way so you can get back to billable work.',
    focus: 'Lightning-fast, zero-bloat tracking',
    weakness: 'Overcomplicated enterprise tools built for managers',
  },
  {
    slug: 'startups',
    name: 'Early-Stage Startups',
    painPoint: 'Track R&D time for tax credits without slowing down your engineering velocity.',
    focus: 'Accurate burn rate visibility',
    weakness: 'Adding bureaucratic friction to a fast-moving team',
  }
];

export function getPersona(slug) {
  return personas.find(p => p.slug === slug);
}
