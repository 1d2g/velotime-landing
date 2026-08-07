import { notFound } from 'next/navigation';
import { competitors, getCompetitor } from '../../../content/competitors';
import Link from 'next/link';

// Dynamically generate SEO Metadata for each page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const competitor = getCompetitor(resolvedParams.competitor);
  
  if (!competitor) {
    return { title: 'Not Found' };
  }

  const title = `VeloTime vs ${competitor.name} | The Frictionless Alternative`;
  const description = `Looking for an alternative to ${competitor.name}? Stop dealing with ${competitor.weakness} and switch to VeloTime for frictionless time tracking.`;

  return {
    title,
    description,
    keywords: [`${competitor.name} alternative`, `better than ${competitor.name}`, 'timesheet software for agencies'],
    openGraph: {
      title,
      description,
      url: `https://velotime.dg.tools/compare/${competitor.slug}`,
      siteName: "VeloTime",
      images: [{ url: "https://velotime.dg.tools/og-image.jpg" }],
    },
  };
}

// Pre-render these paths at build time for optimal performance
export function generateStaticParams() {
  return competitors.map((c) => ({
    competitor: c.slug,
  }));
}

export default async function ComparePage({ params }) {
  const resolvedParams = await params;
  const competitor = getCompetitor(resolvedParams.competitor);

  if (!competitor) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
      
      {/* Hero Header Cell Block */}
      <section className="grid-cell p-8 sm:p-14 text-center border-2 border-slate-300 dark:border-zinc-700">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 bg-primary-500"></span>
          THE FRICTIONLESS ALTERNATIVE
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-[1.12]">
          Tired of {competitor.name}?<br />Switch to VeloTime.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 dark:text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          If you're frustrated by {competitor.weakness}, it's time for an upgrade. VeloTime is the frictionless timesheet tool built specifically for high-performing remote teams.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="https://app.velotime.dg.tools" className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-900">
            <span>Start 14-day free trial</span>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <Link href="/#interactive-matrix" className="w-full sm:w-auto px-7 py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-zinc-700 font-medium text-xs transition-colors">
            See how it works
          </Link>
        </div>
      </section>

      {/* Comparison Split Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 -space-y-px md:space-y-0 md:-space-x-px">
        <div className="grid-cell p-6 sm:p-8">
          <div className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-3 bg-slate-100 dark:bg-zinc-800 inline-block px-2.5 py-1 border border-slate-200">
            {competitor.name.toUpperCase()}
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">Why agencies leave</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 dark:text-slate-600">
            <li className="flex items-start gap-2.5 border-b border-slate-100 pb-2.5">
              <span className="text-slate-400 dark:text-slate-600 font-bold shrink-0">✕</span>
              <span>Known for {competitor.focus}.</span>
            </li>
            <li className="flex items-start gap-2.5 border-b border-slate-100 pb-2.5">
              <span className="text-slate-400 dark:text-slate-600 font-bold shrink-0">✕</span>
              <span>Slow, mouse-heavy navigation that annoys engineers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-400 dark:text-slate-600 font-bold shrink-0">✕</span>
              <span>Often results in Friday afternoon "chasing" for compliance.</span>
            </li>
          </ul>
        </div>

        <div className="grid-cell-highlight p-6 sm:p-8">
          <div className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-3 bg-primary-100 inline-block px-2.5 py-1 border border-primary-200">
            VELOTIME
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">The Better Way</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5 border-b border-primary-200/60 pb-2.5">
              <span className="text-emerald-600 font-bold shrink-0">✓</span>
              <span>Lightning-fast spreadsheet matrix (keyboard driven).</span>
            </li>
            <li className="flex items-start gap-2.5 border-b border-primary-200/60 pb-2.5">
              <span className="text-emerald-600 font-bold shrink-0">✓</span>
              <span>Privacy-first philosophy. Trust your team, zero surveillance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold shrink-0">✓</span>
              <span>Achieve near 100% compliance without nagging.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= RELATED LINKS ================= */}
      <section className="pt-8 border-t-2 border-slate-300 dark:border-zinc-700">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-xs">Explore other alternatives</h3>
        <div className="flex flex-wrap gap-2">
          {competitors.filter(c => c.slug !== competitor.slug).map(c => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 text-xs font-medium border border-slate-200 dark:border-zinc-700 transition-colors">
              VeloTime vs {c.name}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
