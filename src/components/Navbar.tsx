import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Sparkles, Download, Github, Linkedin, Code } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
  onOpenRecommendation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenRecommendation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-stone-900 px-4 py-2 text-sm font-semibold text-stone-100 shadow-md ring-2 ring-amber-500 dark:bg-stone-100 dark:text-stone-900"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          {/* Logo / Monogram & Name */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              aria-label="Aryan Sehgal - Home"
              className="flex items-center gap-2.5 group focus:outline-hidden"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-stone-200 dark:border-stone-700 shadow-2xs shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/aryan-photo.jpg?v=2"
                  alt="Aryan Sehgal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/59551957?v=4';
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 tracking-tight whitespace-nowrap">
                  Aryan Sehgal
                </span>
                <span className="hidden sm:inline-block text-[11px] text-stone-400 dark:text-stone-600 font-mono">
                  •
                </span>
                <span className="hidden sm:inline-block text-xs text-stone-500 dark:text-stone-400 font-medium whitespace-nowrap">
                  Applied AI & Full-Stack
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Toggles */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* LOR Recommendation quick trigger */}
            <Tooltip content="Read official Letter of Recommendation from Sprinklr VP Mayank Hinger">
              <button
                type="button"
                onClick={onOpenRecommendation}
                aria-label="View Letter of Recommendation from Sprinklr VP"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 rounded-lg border border-sky-500/30 transition-colors whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                <span>VP Endorsement</span>
              </button>
            </Tooltip>

            {/* Resume Modal Button */}
            <Tooltip content="Inspect full resume and download PDF">
              <button
                type="button"
                onClick={onOpenResume}
                aria-label="Open Resume and Download PDF"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-200/80 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 rounded-lg transition-colors shadow-2xs whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Resume</span>
              </button>
            </Tooltip>

            {/* Dark Mode Toggle */}
            <Tooltip content={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={darkMode}
                className="p-2 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800/60 rounded-lg transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" aria-hidden="true" />
                )}
              </button>
            </Tooltip>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Tooltip content={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                  className="p-2 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 px-4 pt-2 pb-6 space-y-2 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecommendation();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-500/10 rounded-md border border-sky-500/30"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              VP Recommendation
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-900 dark:text-stone-100 bg-stone-200 dark:bg-stone-800 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              View Resume
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span>{PERSONAL_INFO.email}</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-stone-900 dark:hover:text-stone-100"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-stone-900 dark:hover:text-stone-100"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
