export const useCases = [
  {
    slug: 'friday-compliance',
    name: 'Friday Timesheet Chasing',
    copyAngle: 'Get 100% on-time submission. Eliminate the need to send awkward Slack messages every Friday afternoon.',
    highlight: 'Frictionless entry means your team actually does it.',
  },
  {
    slug: 'billable-utilization',
    name: 'Margin & Utilization Tracking',
    copyAngle: 'Stop losing billable hours. Instantly see which projects are over budget and which clients drive profit.',
    highlight: 'Live margin dashboards keep you profitable.',
  },
  {
    slug: 'privacy-first-tracking',
    name: 'Surveillance Alternatives',
    copyAngle: 'Time tracking without spying. How employee-trust software dramatically increases timesheet completion rates.',
    highlight: 'Zero screenshots, keystroke logs, or creepy tracking.',
  },
  {
    slug: 'keyboard-time-entry',
    name: 'High-Velocity Data Entry',
    copyAngle: 'Log hours at the speed of thought. Full keyboard hotkey matrix for power users.',
    highlight: 'Never touch your mouse to track time again.',
  },
  {
    slug: 'capacity-planning',
    name: 'Team Capacity Planning',
    copyAngle: 'Know exactly who has bandwidth for new projects before you commit to deadlines.',
    highlight: 'Clear visualization of workload distribution.',
  },
  {
    slug: 'timesheet-automation',
    name: 'Timesheet Automation',
    copyAngle: 'Automate the tedious parts of time tracking with recurring project assignments.',
    highlight: 'Less manual configuration every week.',
  }
];

export function getUseCase(slug) {
  return useCases.find(u => u.slug === slug);
}
