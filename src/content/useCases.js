export const useCases = [
  {
    slug: 'friday-compliance',
    name: 'Friday Timesheet Chasing',
    copyAngle: 'Stop the Friday afternoon Slack messages. VeloTime takes 10 seconds to fill out, meaning your team actually does it.',
    highlight: 'Frictionless entry guarantees 100% on-time submission.',
  },
  {
    slug: 'billable-utilization',
    name: 'Margin & Utilization Tracking',
    copyAngle: 'You can\'t measure profitability with missing timesheets. When entry is frictionless, you capture every billable hour.',
    highlight: 'Complete data means accurate margin dashboards.',
  },
  {
    slug: 'privacy-first-tracking',
    name: 'Surveillance Alternatives',
    copyAngle: 'Built by people who hate being micromanaged. Trust your team and they will give you perfectly accurate time logs.',
    highlight: 'Zero screenshots, keystroke logs, or creepy tracking.',
  },
  {
    slug: 'keyboard-time-entry',
    name: 'High-Velocity Data Entry',
    copyAngle: 'Log your entire week without touching your mouse. The fastest spreadsheet matrix designed for power users.',
    highlight: 'Built by developers who hate admin work.',
  },
  /*
  {
    slug: 'capacity-planning',
    name: 'Team Capacity Planning',
    copyAngle: 'Accurate timesheets give you the truth about your team\'s bandwidth, letting you take on new projects safely.',
    highlight: 'Clear workload visibility driven by reliable data.',
  },
  {
    slug: 'timesheet-automation',
    name: 'Timesheet Automation',
    copyAngle: 'Timesheets suck. Let VeloTime automate the tedious parts with recurring assignments and hotkeys.',
    highlight: 'The ultimate anti-timesheet timesheet.',
  }
  */
];

export function getUseCase(slug) {
  return useCases.find(u => u.slug === slug);
}
