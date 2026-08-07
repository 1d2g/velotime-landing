import { privacyPolicyHtml } from '../../content/privacy';

export const metadata = {
  title: "Privacy Policy | VeloTime",
  description: "VeloTime Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <section className="grid-cell p-8 sm:p-14 border-2 border-slate-300">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <div 
          className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} 
        />
      </section>
    </main>
  );
}
