import { notFound } from 'next/navigation';
import { personas, getPersona } from '../../../content/personas';
import Link from 'next/link';

// Dynamically generate SEO Metadata for each page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const persona = getPersona(resolvedParams.persona);
  
  if (!persona) {
    return { title: 'Not Found' };
  }

  const title = `VeloTime for ${persona.name} | The Frictionless Timesheet`;
  const description = persona.painPoint;

  return {
    title,
    description,
    keywords: [`timesheets for ${persona.name}`, `time tracking for ${persona.name}`, 'velotime'],
    openGraph: {
      title,
      description,
      url: `https://velotime.dg.tools/for/${persona.slug}`,
      siteName: "VeloTime",
      images: [{ url: "https://velotime.dg.tools/og-image.jpg" }],
    },
  };
}

// Pre-render these paths at build time for optimal performance
export function generateStaticParams() {
  return personas.map((p) => ({
    persona: p.slug,
  }));
}

export default async function PersonaPage({ params }) {
  const resolvedParams = await params;
  const persona = getPersona(resolvedParams.persona);

  if (!persona) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
      
      {/* Hero Header Cell Block */}
      <section className="grid-cell p-8 sm:p-14 text-center border-2 border-slate-300 dark:border-zinc-700">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 bg-primary-500"></span>
          BUILT FOR {persona.name.toUpperCase()}
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-[1.12]">
          Time tracking designed for <br className="hidden sm:block" /> {persona.name}.
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {persona.painPoint}
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

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 -space-y-px md:space-y-0 md:-space-x-px">
        <div className="grid-cell p-6 sm:p-8">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">Why {persona.name} struggle with traditional tools</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2.5 border-b border-slate-100 dark:border-zinc-800 pb-2.5">
              <span className="text-slate-400 font-bold shrink-0">✕</span>
              <span>Constantly fighting against {persona.weakness}.</span>
            </li>
            <li className="flex items-start gap-2.5 border-b border-slate-100 dark:border-zinc-800 pb-2.5">
              <span className="text-slate-400 font-bold shrink-0">✕</span>
              <span>Tools designed for micromanagement, not high performance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-slate-400 font-bold shrink-0">✕</span>
              <span>Clunky navigation taking away from productive hours.</span>
            </li>
          </ul>
        </div>

        <div className="grid-cell-highlight p-6 sm:p-8 bg-slate-50 dark:bg-zinc-950 border-2 border-primary-200 relative z-10">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">The VeloTime Solution</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2.5 border-b border-slate-200 dark:border-zinc-800 pb-2.5">
              <span className="text-primary-500 font-bold shrink-0">✓</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{persona.focus}</span>
            </li>
            <li className="flex items-start gap-2.5 border-b border-slate-200 dark:border-zinc-800 pb-2.5">
              <span className="text-primary-500 font-bold shrink-0">✓</span>
              <span>Frictionless 10-second weekly logging matrix.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-primary-500 font-bold shrink-0">✓</span>
              <span>Keyboard-first approach designed for speed and trust.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= RELATED LINKS ================= */}
      <section className="pt-8 border-t-2 border-slate-300 dark:border-zinc-700">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-xs">Explore other solutions</h3>
        <div className="flex flex-wrap gap-2">
          {personas.filter(p => p.slug !== persona.slug).map(p => (
            <Link key={p.slug} href={`/for/${p.slug}`} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-400 text-xs font-medium border border-slate-200 dark:border-zinc-700 transition-colors">
              {p.name}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
