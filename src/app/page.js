export default function Home() {
  return (
    <>
      <div className="gradient-blob" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'var(--brand-glow)' }}></div>
      <div className="gradient-blob" style={{ top: '20%', right: '-20%', width: '40vw', height: '40vw', background: 'rgba(139, 92, 246, 0.15)', animationDelay: '-5s' }}></div>
      
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container flex flex-col items-center text-center animate-fade-up">
          <div className="glass-panel" style={{ padding: '0.5rem 1rem', borderRadius: '100px', marginBottom: 'var(--space-md)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--brand-primary)', border: '1px solid var(--brand-glow)' }}>
            ✨ The Future of Time Tracking is Frictionless
          </div>
          
          <h1 className="h1">
            Frictionless Timesheet Software.<br />
            <span className="text-gradient">Zero Distractions.</span>
          </h1>
          
          <p className="subtitle mt-4 mb-8" style={{ margin: '1.5rem auto 2.5rem auto' }}>
            VeloTime is the premium, privacy-first time tracking tool built for agencies and high-performing remote teams. Log hours effortlessly without invasive monitoring.
          </p>
          
          <div className="flex items-center justify-center gap-md">
            <a href="https://app.velotime.dg.tools" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Start Free Trial</a>
            <a href="#features" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Explore Features</a>
          </div>
          
          {/* Dashboard Preview Mockup */}
          <div className="glass-panel animate-fade-up delay-200" style={{ marginTop: 'var(--space-xl)', width: '100%', maxWidth: '1000px', height: '500px', padding: '1rem', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '16px', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              
              {/* Real UI Screenshot */}
              <div className="w-full h-full flex items-center justify-center bg-zinc-950">
                <img 
                  src="/hero-screenshot.png" 
                  alt="VeloTime Interface" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 className="h2">Engineered for Focus</h2>
            <p className="subtitle mx-auto" style={{ margin: '0 auto' }}>
              We stripped away the clunky timers and replaced them with a lightning-fast, keyboard-driven matrix. Time tracking for agencies has never been this fluid.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
            
            <div className="glass-panel hover-lift">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--brand-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Lightning Fast Matrix</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Log your entire week in seconds. Navigate exclusively via keyboard shortcuts with our bespoke spreadsheet-like interface.</p>
            </div>

            <div className="glass-panel hover-lift">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--brand-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Privacy-First Philosophy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We believe in trusting employees. No invasive screen recordings, no keystroke tracking. Just honest, frictionless time logging.</p>
            </div>

            <div className="glass-panel hover-lift">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--brand-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
              </div>
              <h3 className="h3" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Agency Profitability</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Track billable hours effortlessly and generate beautiful reports. Stop losing money to untracked minutes.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-blob" style={{ bottom: '-20%', right: '10%', width: '40vw', height: '40vw', background: 'var(--brand-glow)', animationDelay: '-2s' }}></div>
        <div className="container flex flex-col items-center text-center">
          <h2 className="h1">Ready to reclaim your time?</h2>
          <p className="subtitle" style={{ margin: '1.5rem auto 2.5rem auto' }}>Join the remote teams and agencies that have switched to VeloTime's frictionless timesheet software.</p>
          <a href="https://app.velotime.dg.tools" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>Get Started Free</a>
        </div>
      </section>
    </>
  );
}
