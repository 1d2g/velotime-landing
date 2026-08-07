export const features = [
  {
    slug: 'weekly-matrix',
    name: '10-Second Matrix Grid',
    highlight: 'The core interface built specifically because we hate filling out forms.',
    detail: 'A lightning-fast, spreadsheet-style grid that gets out of your way. Log an entire week of hours in under 10 seconds.',
  },
  {
    slug: 'keyboard-shortcuts',
    name: 'Hotkey Engine',
    highlight: 'Never touch your mouse to track time again.',
    detail: 'Built for developers and power users. Navigate the entire application using Tab, Enter, and Arrow keys.',
  },
  {
    slug: 'margin-reports',
    name: 'Real-Time Margin Analytics',
    highlight: 'Accurate timesheets lead directly to accurate profitability insights.',
    detail: 'Because VeloTime is so frictionless, your data is actually complete. Instantly view true project profitability.',
  },
  {
    slug: 'client-invoicing',
    name: 'Invoice Drafting',
    highlight: 'Turn a perfectly complete timesheet into a clean invoice draft.',
    detail: 'Draft and print clean, audit-proof PDF invoices directly from approved timesheets. Perfect for quick billing without the bloat.',
  },
  {
    slug: 'organization-tools',
    name: 'Organizational Tools',
    highlight: 'Manage teams, projects, and permissions without the enterprise bloat.',
    detail: 'Keep your team aligned with essential project tracking and organizational settings, designed for speed and simplicity.',
  },
  /*
  {
    slug: 'offline-mode',
    name: 'Offline Resilience',
    highlight: 'Track time on a train. It syncs when you reconnect.',
    detail: 'Never lose a timesheet to a spotty internet connection again. VeloTime caches your entries locally until you\'re back online.',
  }
  */
];

export function getFeature(slug) {
  return features.find(f => f.slug === slug);
}
