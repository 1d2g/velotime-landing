import { cookiesHtml } from '../../content/cookies';

export const metadata = {
  title: "Cookie Policy | VeloTime",
  description: "VeloTime Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <section className="grid-cell p-8 sm:p-14 border-2 border-slate-300 dark:border-zinc-700">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-8 tracking-tight">Cookie Policy</h1>
        <div 
          className="prose prose-slate max-w-none text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: cookiesHtml }} 
        />
      </section>
    </main>
  );
}
