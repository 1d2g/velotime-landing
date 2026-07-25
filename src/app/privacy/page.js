export const metadata = {
  title: "Privacy Policy | VeloTime",
  description: "VeloTime Privacy Policy. We believe in privacy-first time tracking.",
};

export default function PrivacyPage() {
  return (
    <div className="section" style={{ minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Privacy Policy</h1>
        <p className="subtitle">Last updated: October 2026</p>
        <div className="glass-panel" style={{ marginTop: '2rem' }}>
          <h2 className="h3" style={{ marginBottom: '1rem' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>We collect the minimum amount of information necessary to provide our time tracking service. This includes your name, email, and the timesheet data you explicitly input.</p>
          
          <h2 className="h3" style={{ marginBottom: '1rem' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Your timesheet data is strictly used to provide reports to you and your organization. We do not sell your data to third parties.</p>
          
          <h2 className="h3" style={{ marginBottom: '1rem' }}>3. Privacy-First Philosophy</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Unlike other time tracking software, VeloTime does NOT record your screen, log your keystrokes, or monitor your web activity.</p>
        </div>
      </div>
    </div>
  );
}
