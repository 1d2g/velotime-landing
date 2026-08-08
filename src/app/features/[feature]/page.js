import { notFound } from 'next/navigation';
import { features, getFeature } from '../../../content/features';
import Link from 'next/link';

// Dynamically generate SEO Metadata for each page
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const feature = getFeature(resolvedParams.feature);
  
  if (!feature) {
    return { title: 'Not Found' };
  }

  const title = `VeloTime Feature: ${feature.name}`;
  const description = feature.highlight;

  return {
    title,
    description,
    keywords: [`${feature.name.toLowerCase()} timesheets`, `timesheet ${feature.name.toLowerCase()}`, 'velotime features'],
    openGraph: {
      title,
      description,
      url: `https://velotime.dg.tools/features/${feature.slug}`,
      siteName: "VeloTime",
      images: [{ url: "https://velotime.dg.tools/og-image.jpg" }],
    },
  };
}

// Pre-render these paths at build time for optimal performance
export function generateStaticParams() {
  return features.map((f) => ({
    feature: f.slug,
  }));
}

export default async function FeaturePage({ params }) {
  const resolvedParams = await params;
  const feature = getFeature(resolvedParams.feature);

  if (!feature) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-12">
      
      {/* Hero Header Cell Block */}
      <section className="grid-cell p-8 sm:p-14 text-center border-2 border-slate-300 dark:border-zinc-700">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 bg-primary-500"></span>
          PLATFORM FEATURE
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-[1.12]">
          {feature.name}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {feature.highlight}
        </p>
        
        <div className="mt-6 p-6 bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 max-w-2xl mx-auto text-left text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold block mb-2">How it works:</span>
          {feature.detail}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="https://app.velotime.dg.tools" className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-900">
            <span>Try it for free</span>
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <Link href="/#interactive-matrix" className="w-full sm:w-auto px-7 py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-zinc-700 font-medium text-xs transition-colors">
            See the matrix
          </Link>
        </div>
      </section>

      {/* ================= RELATED LINKS ================= */}
      <section className="pt-8 border-t-2 border-slate-300 dark:border-zinc-700">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-xs">Explore other features</h3>
        <div className="flex flex-wrap gap-2">
          {features.filter(f => f.slug !== feature.slug).map(f => (
            <Link key={f.slug} href={`/features/${f.slug}`} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 text-xs font-medium border border-slate-200 dark:border-zinc-700 transition-colors">
              {f.name}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
