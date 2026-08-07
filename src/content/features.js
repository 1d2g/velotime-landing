export const features = [
  {
    slug: 'weekly-matrix',
    name: 'Spreadsheet Matrix Grid',
    highlight: 'The core 10-second weekly logging interface with real-time recalculation.',
    detail: 'A lightning-fast, spreadsheet-style interface that lets your team log an entire week of hours in seconds.',
  },
  {
    slug: 'keyboard-shortcuts',
    name: 'Hotkey Engine',
    highlight: 'Complete keyboard navigation guide (Tab, Enter, Arrow navigation).',
    detail: 'Power users can navigate entirely via keyboard, making data entry completely frictionless.',
  },
  {
    slug: 'margin-reports',
    name: 'Real-Time Margin Analytics',
    highlight: 'Utilization rates, team capacity, and billable vs. non-billable breakdowns.',
    detail: 'Instantly view project profitability and employee utilization without exporting to Excel.',
  },
  {
    slug: 'client-invoicing',
    name: 'One-Click Invoicing',
    highlight: 'Turn matrix entries into clean, audit-proof client invoices.',
    detail: 'Generate PDF or CSV invoices directly from approved timesheets in a single click.',
  },
  {
    slug: 'clerk-sso',
    name: 'Enterprise SSO Security',
    highlight: 'Bank-grade security and authentication powered by Clerk.',
    detail: 'Seamlessly integrate with Google, Microsoft, and SAML providers for frictionless onboarding.',
  },
  {
    slug: 'offline-mode',
    name: 'Offline Resilience',
    highlight: 'Track time on an airplane. Syncs when you reconnect.',
    detail: 'Never lose a timesheet due to a spotty internet connection again.',
  }
];

export function getFeature(slug) {
  return features.find(f => f.slug === slug);
}
