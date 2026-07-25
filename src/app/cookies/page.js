export const metadata = {
  title: "Cookie Policy | VeloTime",
  description: "VeloTime Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <div className="section" style={{ minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Cookie Policy</h1>
        <p className="subtitle">Last updated: October 2026</p>
        <div className="glass-panel" style={{ marginTop: '2rem' }}>
          <h2 className="h3" style={{ marginBottom: '1rem' }}>1. What Are Cookies</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Cookies are small text files that are placed on your computer by websites that you visit.</p>
          
          <h2 className="h3" style={{ marginBottom: '1rem' }}>2. How We Use Cookies</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>We use essential cookies to maintain your login session securely. We also use minimal analytics cookies (via PostHog) to understand how our app is used and improve the user experience.</p>
        </div>
      </div>
    </div>
  );
}
