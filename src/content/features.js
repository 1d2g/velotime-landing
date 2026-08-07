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
    name: 'One-Click Invoicing',
    highlight: 'Turn a perfectly complete timesheet into cash.',
    detail: 'Generate clean, audit-proof PDF or CSV invoices directly from approved timesheets without opening Excel.',
  },
  {
    slug: 'enterprise-security',
    name: 'Enterprise Organization Tools',
    highlight: 'We have all the same enterprise organizational features as the big guys.',
    detail: 'Role-based permissions, manager approvals, and bank-grade SSO security powered by Clerk.',
  },
  {
    slug: 'offline-mode',
    name: 'Offline Resilience',
    highlight: 'Track time on a train. It syncs when you reconnect.',
    detail: 'Never lose a timesheet to a spotty internet connection again. VeloTime caches your entries locally until you\'re back online.',
  }
];

export function getFeature(slug) {
  return features.find(f => f.slug === slug);
}
