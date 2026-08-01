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
    <>
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="gradient-blob" style={{ top: '10%', right: '10%', width: '40vw', height: '40vw', background: 'var(--brand-glow)' }}></div>
        
        <div className="container flex flex-col items-center text-center animate-fade-up">
          <div className="glass-panel" style={{ padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: 'var(--space-md)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', border: '1px solid var(--brand-glow)' }}>
            ✨ The Frictionless {competitor.name} Alternative
          </div>
          
          <h1 className="h1">
            Tired of {competitor.name}? <br />
            <span className="text-gradient">Switch to VeloTime.</span>
          </h1>
          
          <p className="subtitle mt-4 mb-8" style={{ margin: '1.5rem auto 2.5rem auto' }}>
            If you're frustrated by {competitor.weakness}, it's time for an upgrade. VeloTime is the frictionless timesheet tool built specifically for high-performing remote teams.
          </p>
          
          <div className="flex items-center justify-center gap-md">
            <a href="https://app.velotime.dg.tools" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Start Free Trial</a>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 className="h2">Why agencies are leaving {competitor.name}</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-md)' }}>
            
            <div className="glass-panel hover-lift" style={{ border: '1px solid #ef444430' }}>
              <h3 className="h3" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {competitor.name}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ color: 'var(--text-secondary)' }}>❌ Known for {competitor.focus}</li>
                <li style={{ color: 'var(--text-secondary)' }}>❌ Slow, mouse-heavy navigation</li>
                <li style={{ color: 'var(--text-secondary)' }}>❌ Punishes you with high per-seat fees as you scale</li>
              </ul>
            </div>

            <div className="glass-panel hover-lift" style={{ border: '1px solid var(--brand-primary)' }}>
              <div style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--brand-primary)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Our Approach</div>
              <h3 className="h3" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
                VeloTime
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ color: 'var(--text-primary)' }}>✅ Privacy-first philosophy. Trust your team.</li>
                <li style={{ color: 'var(--text-primary)' }}>✅ Lightning-fast spreadsheet matrix (keyboard only)</li>
                <li style={{ color: 'var(--text-primary)' }}>✅ Transparent, agency-friendly pricing</li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-blob" style={{ bottom: '-20%', left: '10%', width: '40vw', height: '40vw', background: 'rgba(139, 92, 246, 0.15)', animationDelay: '-2s' }}></div>
        <div className="container flex flex-col items-center text-center">
          <h2 className="h1">Ready to reclaim your time?</h2>
          <p className="subtitle" style={{ margin: '1.5rem auto 2.5rem auto' }}>Make the switch from {competitor.name} today and see why agencies love VeloTime.</p>
          <a href="https://app.velotime.dg.tools" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>Get Started Free</a>
        </div>
      </section>
    </>
  );
}
