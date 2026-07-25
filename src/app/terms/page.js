export const metadata = {
  title: "Terms of Service | VeloTime",
  description: "VeloTime Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="section" style={{ minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Terms of Service</h1>
        <p className="subtitle">Last updated: October 2026</p>
        <div className="glass-panel" style={{ marginTop: '2rem' }}>
          <h2 className="h3" style={{ marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>By accessing or using VeloTime, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="h3" style={{ marginBottom: '1rem' }}>2. Use of Service</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>VeloTime provides time tracking and reporting tools for agencies and remote teams. You agree to use the service only for lawful purposes.</p>
        </div>
      </div>
    </div>
  );
}
