"use client";

import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit inquiry');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'left', padding: '2rem' }}>
      <h3 className="h3" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Inquire about VeloTime</h3>
      
      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--brand-primary)' }}>
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p style={{ fontWeight: 600 }}>Thank you for your inquiry!</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>We'll get back to you shortly.</p>
          <button onClick={() => setStatus('idle')} className="btn btn-secondary mt-6" style={{ width: '100%' }}>Send Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Name</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }}
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Email</label>
            <input 
              type="email" 
              required 
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none' }}
              placeholder="jane@agency.com"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message</label>
            <textarea 
              required 
              rows={4}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
              placeholder="I'm interested in deploying VeloTime for my team of 15..."
            />
          </div>
          
          {status === 'error' && (
            <div style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: 500, marginTop: '0.5rem' }}>
              Error: {errorMessage || 'Something went wrong. Please try again.'}
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn btn-primary" 
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
          </button>
        </form>
      )}
    </div>
  );
}
