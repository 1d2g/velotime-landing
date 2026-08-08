import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { competitors } from '../content/competitors';
import { personas } from '../content/personas';
import { useCases } from '../content/useCases';
import { features } from '../content/features';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL('https://velotime.dg.tools'),
  alternates: {
    canonical: '/',
  },
  title: "VeloTime | Timesheets Your Team Won't Hate Filling Out",
  description: "VeloTime swaps clunky stopwatches and multi-step forms for a spreadsheet-fast matrix. Zero friction for your team, zero Friday chasing for you.",
  openGraph: {
    title: "VeloTime | Timesheets Your Team Won't Hate Filling Out",
    description: "VeloTime swaps clunky stopwatches and multi-step forms for a spreadsheet-fast matrix.",
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
    title: "VeloTime | Timesheets Your Team Won't Hate Filling Out",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased bg-gray-200 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 pb-20">
        {/* HEADER */}
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-900/90 backdrop-blur-md border-b-2 border-slate-300 dark:border-zinc-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* LOGO */}
            <a href="/" className="flex items-center gap-3 group">
              <svg className="w-8 h-8 transition-transform duration-200 group-hover:scale-105 shrink-0" viewBox="0 0 200 200" fill="none">
                <rect width="200" height="200" fill="#0F172A"/>
                <path d="M 60 48 L 140 48 L 155 63 L 155 72 H 45 V 63 Z" fill="#F43F5E"/>
                <path d="M 90 72 H 110 V 94 H 90 Z" fill="#F43F5E"/>
                <path d="M 45 94 H 68 L 100 132 L 132 94 H 155 L 110 148 C 105 153 95 153 90 148 Z" fill="#FFFFFF"/>
              </svg>
              <span className="font-extrabold text-base tracking-[0.18em] uppercase font-sans select-none hidden sm:inline-block">
                <span className="text-slate-900 dark:text-slate-100">VELO</span><span className="text-primary-600">TIME</span>
              </span>
            </a>

            {/* NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700">
              <a href="/#interactive-matrix" className="px-4 py-2 hover:bg-white dark:bg-zinc-900 hover:text-slate-900 dark:text-slate-100 border-r border-slate-300 dark:border-zinc-700 transition-colors">10-Sec Matrix</a>
              <a href="/#why-adoption" className="px-4 py-2 hover:bg-white dark:bg-zinc-900 hover:text-slate-900 dark:text-slate-100 border-r border-slate-300 dark:border-zinc-700 transition-colors">Why Adoption</a>
              <a href="/#features" className="px-4 py-2 hover:bg-white dark:bg-zinc-900 hover:text-slate-900 dark:text-slate-100 border-r border-slate-300 dark:border-zinc-700 transition-colors">Features</a>
              <a href="/#compare" className="px-4 py-2 hover:bg-white dark:bg-zinc-900 hover:text-slate-900 dark:text-slate-100 transition-colors">Comparisons</a>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <a href="https://app.velotime.dg.tools" className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-slate-100 transition-colors">
                Sign In
              </a>
              <a href="https://app.velotime.dg.tools" className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-900">
                Start Free Trial
              </a>
            </div>

          </div>
        </header>

        {/* MAIN CONTENT (Handled by pages) */}
        {children}

        {/* FAT FOOTER */}
        <footer className="mt-16 py-12 bg-white dark:bg-zinc-900 border-t-2 border-slate-300 dark:border-zinc-700 text-slate-600 dark:text-slate-400 text-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-slate-200 dark:border-zinc-800 pb-12">
              
              {/* Column 1: Compare */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Compare</h4>
                <ul className="space-y-2.5">
                  {competitors.map(c => (
                    <li key={c.slug}>
                      <a href={`/compare/${c.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">VeloTime vs {c.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Solutions For */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Solutions For</h4>
                <ul className="space-y-2.5">
                  {personas.map(p => (
                    <li key={p.slug}>
                      <a href={`/for/${p.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{p.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Use Cases */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Use Cases</h4>
                <ul className="space-y-2.5">
                  {useCases.map(u => (
                    <li key={u.slug}>
                      <a href={`/use-case/${u.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{u.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Features */}
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">Features</h4>
                <ul className="space-y-2.5">
                  {features.map(f => (
                    <li key={f.slug}>
                      <a href={`/features/${f.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{f.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 200 200" fill="none">
                  <rect width="200" height="200" fill="#0F172A"/>
                  <path d="M 60 48 L 140 48 L 155 63 L 155 72 H 45 V 63 Z" fill="#F43F5E"/>
                  <path d="M 90 72 H 110 V 94 H 90 Z" fill="#F43F5E"/>
                  <path d="M 45 94 H 68 L 100 132 L 132 94 H 155 L 110 148 C 105 153 95 153 90 148 Z" fill="#FFFFFF"/>
                </svg>
                <span className="font-bold text-xs tracking-[0.18em] uppercase font-sans">
                  <span className="text-slate-900 dark:text-slate-100">VELO</span><span className="text-primary-600">TIME</span>
                </span>
              </div>

              <div className="flex items-center gap-5 text-slate-600 dark:text-slate-400 font-medium">
                <a href="/privacy" className="hover:text-slate-900 dark:text-slate-100 transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-slate-900 dark:text-slate-100 transition-colors">Terms</a>
                <a href="/cookies" className="hover:text-slate-900 dark:text-slate-100 transition-colors">Cookies</a>
              </div>

              <div className="text-slate-500 font-sans">
                &copy; {new Date().getFullYear()} VeloTime Software
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
