'use client';

import { useState, useEffect } from 'react';

export default function ThemeCycler() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('blue');

  useEffect(() => {
    setMounted(true);
    setTheme(localStorage.getItem('velotime_theme') || 'light');
    setColorTheme(localStorage.getItem('velotime_colorTheme') || 'blue');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', colorTheme);
    localStorage.setItem('velotime_colorTheme', colorTheme);
  }, [colorTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('velotime_theme', theme);
  }, [theme, mounted]);

  const cycleColorTheme = () => {
    const themes = ['blue', 'rose', 'violet', 'amber'];
    const currentIndex = themes.indexOf(colorTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setColorTheme(themes[nextIndex]);
  };

  const toggleDarkMode = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return <div className="w-16 h-8" />;

  return (
    <div className="flex items-center gap-2 mr-2">
      <button
        onClick={cycleColorTheme}
        className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-zinc-700 shadow-sm transition-transform hover:scale-110 flex items-center justify-center relative overflow-hidden group bg-primary-500"
        title="Cycle Color Theme"
        aria-label="Cycle Color Theme"
      >
        <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </button>
      <button
        onClick={toggleDarkMode}
        className="p-1.5 rounded text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
        aria-label="Toggle Theme"
        title="Toggle Light/Dark Theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        ) : (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
        )}
      </button>
    </div>
  );
}
