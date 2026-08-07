export const personas = [
  {
    slug: 'agencies',
    name: 'Digital & Creative Agencies',
    painPoint: 'Protect billable project margins and eliminate Friday timesheet chasing across client accounts.',
    focus: 'Client Billing & Margin Tracking',
    weakness: 'Chasing employees on Friday afternoons',
  },
  {
    slug: 'engineering-teams',
    name: 'Software & Dev Teams',
    painPoint: 'Keyboard-first, hotkey-driven workflow that feels like developer tooling (VS Code/Linear) rather than admin work.',
    focus: 'Developer Experience',
    weakness: 'Context switching and mouse-heavy navigation',
  },
  {
    slug: 'consultants',
    name: 'Consultants & Advisory',
    painPoint: 'Fast client/project switching with clean, audit-ready CSV & PDF exports for billing.',
    focus: 'Audit-ready Time Logs',
    weakness: 'Manually organizing timesheets for clients',
  },
  {
    slug: 'remote-teams',
    name: 'Async & Remote Workspaces',
    painPoint: 'Asynchronous, trust-based time tracking that respects employee autonomy across time zones.',
    focus: 'Trust & Asynchronous Tracking',
    weakness: 'Invasive surveillance software',
  },
  {
    slug: 'agency-owners',
    name: 'Agency Founders & Executives',
    painPoint: 'High-level visibility into real-time utilization rates, team capacity, and project margins.',
    focus: 'High-Level Margin Analytics',
    weakness: 'Flying blind on profitability',
  },
  {
    slug: 'freelancers',
    name: 'Freelancers & Solopreneurs',
    painPoint: 'Lightning-fast tracking to ensure every billable minute is invoiced without enterprise bloat.',
    focus: 'Speed & Simplicity',
    weakness: 'Overcomplicated enterprise tools',
  },
  {
    slug: 'startups',
    name: 'Early-Stage Startups',
    painPoint: 'Track burn rates and R&D time effectively without slowing down your engineering speed.',
    focus: 'Burn Rate Visibility',
    weakness: 'Losing track of R&D capital',
  }
];

export function getPersona(slug) {
  return personas.find(p => p.slug === slug);
}
