"use client";

import { useState } from 'react';
import Link from 'next/link';
import { personas } from '../content/personas';
import { useCases } from '../content/useCases';

export default function Home() {
  const [matrix, setMatrix] = useState([
    [4.0, 6.5, 8.0, 5.0, 2.5],
    [3.5, 1.5, 0.0, 3.0, 4.0],
    [1.0, 0.0, 0.5, 0.0, 1.5],
  ]);

  const handleMatrixChange = (row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value === '' ? 0 : parseFloat(value);
    setMatrix(newMatrix);
  };

  const getRowTotal = (row) => matrix[row].reduce((a, b) => a + (b || 0), 0);
  const getGrandTotal = () => matrix.reduce((sum, row) => sum + row.reduce((a, b) => a + (b || 0), 0), 0);

  // Inquiry Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleInquiry = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');
    
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Team Size: ${formData.teamSize || '1-10'}` // We use message field to store team size since backend expects message
        })
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit inquiry');
      }
      
      setFormStatus('success');
      setFormData({ name: '', email: '', teamSize: '1 - 10 employees' });
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
      
      {/* ================= HERO SECTION ================= */}
      <section id="hero-section" className="space-y-6">
        
        {/* Hero Header Cell Block */}
        <div className="grid-cell p-8 sm:p-14 text-center border-2 border-slate-300 dark:border-zinc-700">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-primary-500"></span>
            COMPLIANCE WITHOUT THE CHASE
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-[1.12]">
            Timesheets your team won't hate filling out.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 dark:text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            VeloTime swaps clunky stopwatches and multi-step forms for a spreadsheet-fast matrix. Zero friction for your team, zero Friday chasing for you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://app.velotime.dg.tools" className="w-full sm:w-auto px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-900">
              <span>Start 14-day free trial</span>
              <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#interactive-matrix" className="w-full sm:w-auto px-7 py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-zinc-700 font-medium text-xs transition-colors">
              Test 10-second sandbox
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 -space-y-px sm:space-y-0 sm:-space-x-px text-xs text-slate-700 dark:text-slate-300">
            <div className="grid-cell p-4 flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950/50">
              <span className="font-extrabold text-emerald-600 text-xl tabular-nums">98.4%</span>
              <span className="font-medium text-slate-600 dark:text-slate-400 dark:text-slate-600 mt-1">Friday On-Time Completion</span>
            </div>
            <div className="grid-cell p-4 flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950/50">
              <span className="font-extrabold text-slate-900 dark:text-slate-100 text-xl tabular-nums">&lt; 10s</span>
              <span className="font-medium text-slate-600 dark:text-slate-400 dark:text-slate-600 mt-1">Avg Log Speed per Week</span>
            </div>
            <div className="grid-cell p-4 flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950/50">
              <span className="font-extrabold text-slate-900 dark:text-slate-100 text-xl tabular-nums">0</span>
              <span className="font-medium text-slate-600 dark:text-slate-400 dark:text-slate-600 mt-1">Slack Reminders Needed</span>
            </div>
          </div>

        </div>

        {/* ================= CLEANED-UP DEMO MATRIX SANDBOX ================= */}
        <div id="interactive-matrix" className="grid-cell p-5 sm:p-7 text-left border-2 border-slate-300 dark:border-zinc-700">
          
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-primary-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-wider uppercase font-sans">INTERACTIVE WEEKLY MATRIX</span>
              <span className="text-[10px] font-mono font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 border border-primary-200 hidden sm:inline-block">TRY EDITING HOURS</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-500 font-mono hidden sm:inline-block">Hotkeys: <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 border border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-slate-200">Tab</code> to advance</span>
          </div>

          <div className="overflow-x-auto border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-300 dark:border-zinc-700 text-slate-600 dark:text-slate-400 dark:text-slate-600 uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold">
                  <th className="p-3 border-r border-slate-300 dark:border-zinc-700 w-5/12">Project / Task</th>
                  <th className="p-3 text-center border-r border-slate-300 dark:border-zinc-700 w-14">Mon</th>
                  <th className="p-3 text-center border-r border-slate-300 dark:border-zinc-700 w-14">Tue</th>
                  <th className="p-3 text-center border-r border-slate-300 dark:border-zinc-700 w-14">Wed</th>
                  <th className="p-3 text-center border-r border-slate-300 dark:border-zinc-700 w-14">Thu</th>
                  <th className="p-3 text-center border-r border-slate-300 dark:border-zinc-700 w-14">Fri</th>
                  <th className="p-3 text-right pr-4 bg-slate-200/50 text-slate-900 dark:text-slate-100 font-extrabold w-20">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50 dark:bg-zinc-950/80 transition-colors">
                  <td className="p-3 border-r border-slate-200">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-xs">Acme Corp &bull; Web Application</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 font-mono">React Matrix Components</div>
                  </td>
                  {[0, 1, 2, 3, 4].map((col) => (
                    <td key={col} className="p-0 border-r border-slate-200">
                      <input 
                        type="number" step="0.5" min="0" 
                        value={matrix[0][col] === 0 ? '' : matrix[0][col]} 
                        onChange={(e) => handleMatrixChange(0, col, e.target.value)}
                        className="cell-input w-full h-11 text-center bg-transparent text-slate-800 dark:text-slate-200 text-xs" 
                      />
                    </td>
                  ))}
                  <td className="p-3 text-right pr-4 font-bold text-primary-600 tabular-nums bg-primary-50/30">{getRowTotal(0).toFixed(1)}h</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50 dark:bg-zinc-950/80 transition-colors">
                  <td className="p-3 border-r border-slate-200">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-xs">Stripe &bull; API Integration</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 font-mono">Webhook Endpoint Audit</div>
                  </td>
                  {[0, 1, 2, 3, 4].map((col) => (
                    <td key={col} className="p-0 border-r border-slate-200">
                      <input 
                        type="number" step="0.5" min="0" 
                        value={matrix[1][col] === 0 ? '' : matrix[1][col]} 
                        onChange={(e) => handleMatrixChange(1, col, e.target.value)}
                        className="cell-input w-full h-11 text-center bg-transparent text-slate-800 dark:text-slate-200 text-xs" 
                      />
                    </td>
                  ))}
                  <td className="p-3 text-right pr-4 font-bold text-primary-600 tabular-nums bg-primary-50/40">{getRowTotal(1).toFixed(1)}h</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50 dark:bg-zinc-950/80 transition-colors">
                  <td className="p-3 border-r border-slate-200">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-xs">Internal &bull; Sprint Planning</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-500 font-mono">Architecture & Roadmap</div>
                  </td>
                  {[0, 1, 2, 3, 4].map((col) => (
                    <td key={col} className="p-0 border-r border-slate-200">
                      <input 
                        type="number" step="0.5" min="0" 
                        value={matrix[2][col] === 0 ? '' : matrix[2][col]} 
                        onChange={(e) => handleMatrixChange(2, col, e.target.value)}
                        className="cell-input w-full h-11 text-center bg-transparent text-slate-800 dark:text-slate-200 text-xs" 
                      />
                    </td>
                  ))}
                  <td className="p-3 text-right pr-4 font-bold text-primary-600 tabular-nums bg-primary-50/40">{getRowTotal(2).toFixed(1)}h</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-3 pt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 dark:text-slate-600 font-sans border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-medium">Total Billable Hours Logged</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Weekly Total:</span>
              <span className="font-extrabold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-zinc-800 px-3.5 py-1 border border-slate-300 dark:border-zinc-700 tabular-nums text-sm">{getGrandTotal().toFixed(1)} hrs</span>
            </div>
          </div>

        </div>

      </section>

      {/* ================= THE FRIDAY PROBLEM ================= */}
      <section id="why-adoption" className="space-y-4 pt-2">
        
        <div className="grid-cell p-6 text-center border-2 border-slate-300 dark:border-zinc-700">
          <span className="text-xs font-bold text-primary-600 tracking-wider uppercase">THE FRIDAY FRUSTRATION</span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Why timesheets usually fail.</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-sm max-w-xl mx-auto">
            Most time tracking tools rely on live stopwatches and complex forms that employees resist using.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 -space-y-px md:space-y-0 md:-space-x-px">
          <div className="grid-cell p-6 sm:p-8">
            <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3 bg-red-50 inline-block px-2.5 py-1 border border-red-200">
              TRADITIONAL TOOLS
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">The Friday Chasing Cycle</h3>
            <ul className="mt-4 space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 dark:text-slate-600">
              <li className="flex items-start gap-2.5 border-b border-slate-100 pb-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Employees forget to hit "Start Timer" and guess their hours at week's end.</span>
              </li>
              <li className="flex items-start gap-2.5 border-b border-slate-100 pb-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Managers send awkward Slack messages every Friday afternoon asking for updates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Client invoicing is delayed because timesheets remain unsubmitted over the weekend.</span>
              </li>
            </ul>
          </div>

          <div className="grid-cell-highlight p-6 sm:p-8">
            <div className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-3 bg-primary-100 inline-block px-2.5 py-1 border border-primary-200">
              THE VELOTIME WAY
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">Zero-Friction Grid Adoption</h3>
            <ul className="mt-4 space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5 border-b border-primary-200/60 pb-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>A single grid where the entire week is entered in under 10 seconds.</span>
              </li>
              <li className="flex items-start gap-2.5 border-b border-primary-200/60 pb-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Keyboard-driven navigation—tab through cells just like a spreadsheet.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>100% compliance without nagging, surveillance, or awkward Friday reminders.</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* ================= FEATURES GRID ================= */}
      <section id="features" className="space-y-4 pt-2">
        
        <div className="grid-cell p-6 text-center border-2 border-slate-300 dark:border-zinc-700">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Built to get completed.</h2>
          <p className="mt-1.5 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-sm max-w-xl mx-auto">
            Features designed specifically to eliminate friction for employees and administrative overhead for managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 -space-y-px md:space-y-0 md:-space-x-px">
          <div className="grid-cell p-6 sm:p-8">
            <div className="w-10 h-10 bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-600 mb-4 font-extrabold text-sm">
              10s
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">10-second weekly log</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed">
              No dropdowns or form popups. Fill out your entire week's matrix in the time it takes your coffee to brew.
            </p>
          </div>

          <div className="grid-cell p-6 sm:p-8">
            <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 font-extrabold text-sm">
              0%
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">Respects developer trust</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed">
              Zero screen capturing, keylogging, or automated spying. Keep senior engineers happy with honest data entry.
            </p>
          </div>

          <div className="grid-cell p-6 sm:p-8">
            <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 flex items-center justify-center text-slate-800 dark:text-slate-200 mb-4 font-extrabold text-sm">
              $=
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">Instant margin reports</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-xs sm:text-sm leading-relaxed">
              Once timesheets are saved, project margins and billable hours update automatically for immediate invoicing.
            </p>
          </div>
        </div>

      </section>

      {/* ================= COMPETITOR COMPARISON GRID ================= */}
      <section id="compare" className="grid-cell p-6 sm:p-8 border-2 border-slate-300 dark:border-zinc-700">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Stop chasing timesheets</h2>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">See why managers switch to VeloTime for better compliance.</p>
          </div>
          <span className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider hidden sm:inline-block">BENCHMARK MATRIX</span>
        </div>

        <div className="overflow-x-auto border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold">
                <th className="p-3 border-r border-slate-300 dark:border-zinc-700">Metric</th>
                <th className="p-3 bg-primary-50 text-slate-900 dark:text-slate-100 font-bold border-x border-primary-200">VeloTime</th>
                <th className="p-3 text-slate-500 dark:text-slate-500 font-medium border-r border-slate-300 dark:border-zinc-700">
                  <a href="/compare/toggl" className="hover:text-slate-900 dark:text-slate-100 underline">Toggl Track</a>
                </th>
                <th className="p-3 text-slate-500 dark:text-slate-500 font-medium border-r border-slate-300 dark:border-zinc-700">
                  <a href="/compare/harvest" className="hover:text-slate-900 dark:text-slate-100 underline">Harvest</a>
                </th>
                <th className="p-3 text-slate-500 dark:text-slate-500 font-medium border-r border-slate-300 dark:border-zinc-700">
                  <a href="/compare/hubstaff" className="hover:text-slate-900 dark:text-slate-100 underline">Hubstaff</a>
                </th>
                <th className="p-3 text-slate-500 dark:text-slate-500 font-medium">
                  <a href="/compare/clockify" className="hover:text-slate-900 dark:text-slate-100 underline">Clockify</a>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100 border-r border-slate-200 bg-slate-50 dark:bg-zinc-950">Friday Nag Factor</td>
                <td className="p-3 bg-primary-50/40 text-emerald-700 font-bold border-x border-primary-200">Zero Reminders Needed</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">High (Forgotten Timers)</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">High (Chasing Entries)</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">High (App Dislikes)</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600">High (Forgotten Timers)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100 border-r border-slate-200 bg-slate-50 dark:bg-zinc-950">Data Entry Method</td>
                <td className="p-3 bg-primary-50/40 text-primary-700 font-bold border-x border-primary-200">Bulk Matrix Grid (&lt; 10s)</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">Manual Stopwatch</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">Single Form Popups</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">Desktop Background App</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600">Manual Stopwatch</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-slate-100 border-r border-slate-200 bg-slate-50 dark:bg-zinc-950">Surveillance Policy</td>
                <td className="p-3 bg-primary-50/40 text-emerald-700 font-bold border-x border-primary-200">100% Privacy First</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">Privacy First</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600 border-r border-slate-200">Privacy First</td>
                <td className="p-3 text-red-600 font-bold text-[11px] border-r border-slate-200">⚠️ Screen Capture</td>
                <td className="p-3 text-slate-600 dark:text-slate-400 dark:text-slate-600">Privacy First</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= EXPLORE SOLUTIONS (SEO INTERNAL LINKS) ================= */}
      <section className="py-12 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Built for how you work</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">Explore how VeloTime solves time tracking for different teams and workflows.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid-cell p-6 border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider text-xs">By Industry & Role</h3>
            <div className="flex flex-wrap gap-2">
              {personas.map(p => (
                <Link key={p.slug} href={`/for/${p.slug}`} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 text-xs font-medium border border-slate-200 dark:border-zinc-700 transition-colors">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid-cell p-6 border-2 border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider text-xs">By Problem Solved</h3>
            <div className="flex flex-wrap gap-2">
              {useCases.map(u => (
                <Link key={u.slug} href={`/use-case/${u.slug}`} className="px-3 py-1.5 bg-slate-100 dark:bg-zinc-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 text-xs font-medium border border-slate-200 dark:border-zinc-700 transition-colors">
                  {u.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENTERPRISE FORM ================= */}
      <section className="grid-cell p-6 sm:p-8 max-w-xl mx-auto border-2 border-slate-300 dark:border-zinc-700">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Get your team to 100% compliance.</h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400 dark:text-slate-600 text-xs">Start your 14-day trial or talk to us about team workspace onboarding.</p>

          <form onSubmit={handleInquiry} className="mt-6 text-left space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">NAME</label>
              <input 
                type="text" required 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe" 
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary-600 text-xs font-sans" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">WORK EMAIL</label>
              <input 
                type="email" required 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com" 
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary-600 text-xs font-sans" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">TEAM SIZE</label>
              <select 
                value={formData.teamSize || '1-10'}
                onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-zinc-950 border border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary-600 text-xs font-sans"
              >
                <option value="1-10">1 - 10 employees</option>
                <option value="11-50">11 - 50 employees</option>
                <option value="50+">50+ employees</option>
              </select>
            </div>
            
            {formStatus === 'error' && (
              <div className="text-red-600 text-xs font-bold mt-2">
                Error: {errorMessage || 'Failed to submit inquiry.'}
              </div>
            )}

            <button 
              type="submit" 
              disabled={formStatus === 'loading'}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-500 text-white font-bold transition-colors text-xs mt-2 border border-slate-900"
            >
              {formStatus === 'loading' ? 'Submitting...' : 'Start Free Trial →'}
            </button>
            
            {formStatus === 'success' && (
              <div className="text-center text-xs text-emerald-600 mt-2 font-bold">
                ✓ Inquiry received. We'll reach out shortly.
              </div>
            )}
          </form>
        </div>
      </section>

    </main>
  );
}
