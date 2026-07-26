import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VeloTime | Frictionless Timesheet Software & Privacy-First Time Tracking",
  description: "VeloTime is the premium, frictionless time tracking tool for agencies and remote teams. Ditch manual data entry with our privacy-first timesheet software.",
  keywords: ["frictionless timesheet software", "effortless timesheets", "privacy-first time tracking", "time tracking for agencies", "no-click time tracking"],
  openGraph: {
    title: "VeloTime | Premium Timesheet Software",
    description: "The fastest, frictionless time tracking tool for agencies and remote teams.",
    url: "https://velotime.dg.tools",
    siteName: "VeloTime",
    images: [
      {
        url: "https://velotime.dg.tools/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VeloTime Timesheet Grid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeloTime | Premium Timesheet Software",
    description: "The fastest, frictionless time tracking tool for agencies and remote teams.",
    images: ["https://velotime.dg.tools/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <nav className="navbar flex items-center">
          <div className="container flex items-center justify-between w-full">
            <a href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              VeloTime
            </a>
            <div className="flex items-center gap-sm">
              <a href="https://app.velotime.dg.tools" className="font-medium text-sm hover:text-blue-500 transition-colors">Sign In</a>
              <a href="https://app.velotime.dg.tools" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>Start Tracking Free</a>
            </div>
          </div>
        </nav>
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        
        <footer className="section" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)', padding: 'var(--space-lg) 0' }}>
          <div className="container flex flex-col items-center justify-center gap-sm text-center">
            <div className="flex items-center gap-md font-medium text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href="/privacy" className="hover:text-blue-500">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-500">Terms of Service</a>
              <a href="/cookies" className="hover:text-blue-500">Cookie Policy</a>
            </div>
            <p className="text-sm mt-4" style={{ color: 'var(--text-tertiary)' }}>&copy; {new Date().getFullYear()} VeloTime Software. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
