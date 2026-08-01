import { cookiesHtml } from '../../content/cookies';

export const metadata = {
  title: "Cookie Policy | VeloTime",
  description: "VeloTime Cookie Policy.",
};

export default function CookiesPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', backgroundColor: '#f9fafb', padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="h1 mb-6 text-gray-900">Cookie Policy</h1>
        <div 
          className="prose prose-blue max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: cookiesHtml }} 
        />
      </div>
    </div>
  );
}
