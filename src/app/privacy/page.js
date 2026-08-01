import { privacyPolicyHtml } from '../../content/privacy';

export const metadata = {
  title: "Privacy Policy | VeloTime",
  description: "VeloTime Privacy Policy. We believe in privacy-first time tracking.",
};

export default function PrivacyPage() {
  return (
    <div className="section" style={{ minHeight: '80vh', backgroundColor: '#f9fafb', padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <h1 className="h1 mb-6 text-gray-900">Privacy Policy</h1>
        <div 
          className="prose prose-blue max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} 
        />
      </div>
    </div>
  );
}
