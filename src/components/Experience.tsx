import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, Calendar, MapPin, ExternalLink, Sparkles, CheckCircle2, FileCheck2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

interface ExperienceProps {
  onOpenRecommendation?: () => void;
}

export const Experience: React.FC<ExperienceProps> = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>('sprinklr');

  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" aria-hidden="true" />
            <span>Professional Career History</span>
          </div>
          <h2
            id="experience-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Engineering Experience & Track Record
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Enterprise software delivery at Sprinklr as Senior Product Engineer, followed by independent applied AI engineering and data science internships.
          </p>
        </div>

        {/* Experience Layout: Left selector tabs, Right rich detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company / Role Navigation Cards */}
          <div className="lg:col-span-4 space-y-3" role="tablist" aria-label="Work experience selector">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  type="button"
                  role="tab"
                  id={`tab-${exp.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-stone-900 border-sky-500/80 dark:border-sky-500 shadow-xs'
                      : 'bg-stone-100/60 dark:bg-stone-900/40 border-stone-200 dark:border-stone-800/80 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                      {exp.company}
                    </span>
                    {exp.isCurrent ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                        Current
                      </span>
                    ) : exp.id === 'sprinklr' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300">
                        Senior PE
                      </span>
                    ) : exp.id === 'oyo-rooms' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">
                        Internship
                      </span>
                    ) : null}
                  </div>
                  <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1">
                    {exp.role}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-2">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div
            className="lg:col-span-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-xs"
            role="tabpanel"
            id={`panel-${selectedExp.id}`}
            aria-labelledby={`tab-${selectedExp.id}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 dark:border-stone-800 gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50">
                  {selectedExp.role}
                </h3>
                <div className="text-sm font-semibold text-stone-600 dark:text-stone-300 flex items-center gap-2 mt-1">
                  <span>{selectedExp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-stone-500 font-normal">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {selectedExp.location}
                  </span>
                </div>
              </div>
              <div className="text-xs font-mono text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg shrink-0">
                {selectedExp.period}
              </div>
            </div>

            {/* Role Summary */}
            <p className="mt-5 text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              {selectedExp.summary}
            </p>

            {/* Sprinklr Verified Quantitative Impact Chips */}
            {selectedExp.verifiedImpact && (
              <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-3">
                  Verified Performance & Quality Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedExp.verifiedImpact.map((impact, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-800 text-xs font-medium text-stone-800 dark:text-stone-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>{impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities Bullets */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                Key Technical Contributions:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                {selectedExp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Product Documentation Links for Sprinklr */}
            {selectedExp.docsLinks && (
              <div className="mt-6 pt-5 border-t border-stone-100 dark:border-stone-800">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-2">
                  Official Sprinklr Product Documentation:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.docsLinks.map((link) => (
                    <Tooltip key={link.url} content="Open official Sprinklr help documentation in new tab">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.title} (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200 transition-colors"
                      >
                        <span>{link.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                      </a>
                    </Tooltip>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies used chips */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-stone-400 mr-2">Stack:</span>
              {selectedExp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
