import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, ShieldCheck, Package } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Site footer"
      className="bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 py-12 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                Aryan Sehgal
              </span>
              <span className="text-stone-400 dark:text-stone-500">•</span>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                Applied AI & Full-Stack Systems Engineer
              </span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 max-w-md">
              Bridging enterprise production software architecture (ex-Sprinklr) with state-of-the-art applied machine learning models.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Tooltip content="GitHub Profile (@AryanSehgal)">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            </Tooltip>

            <Tooltip content="LinkedIn Profile (/in/aryansehgal2001)">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </Tooltip>

            <Tooltip content="Inspect @aryan_sehgal/forma-ui on npm">
              <a
                href={PERSONAL_INFO.formaNpm}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Forma UI on npm registry"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                <Package className="w-4 h-4" aria-hidden="true" />
              </a>
            </Tooltip>

            <Tooltip content="LeetCode Profile (/aryansehgal)">
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                <Code2 className="w-4 h-4" aria-hidden="true" />
              </a>
            </Tooltip>

            <Tooltip content="Back to top of page">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors ml-2"
              >
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500 dark:text-stone-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>Built with strict WCAG 2.1 AAA accessibility, semantic HTML5, and full keyboard navigation.</span>
          </div>

          <div className="font-mono">
            © {new Date().getFullYear()} Aryan Sehgal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
