import React from 'react';
import { motion } from 'motion/react';
import { Wrench, CheckCircle, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

export const SkillsGrid: React.FC = () => {
  return (
    <section
      id="technical-skills"
      aria-labelledby="skills-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" aria-hidden="true" />
            <span>Technical Capabilities</span>
          </div>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Engineering & Algorithmic Toolkit
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Categorized across applied machine learning research, production frontend systems, and backend testing infrastructure.
          </p>
        </div>

        {/* 3 Columns Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: catIdx * 0.1 }}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/60 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-stone-200 dark:border-stone-800">
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                            skill.level === 'Production Expert'
                              ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-500/20'
                              : skill.level === 'Advanced Research'
                              ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                              : 'bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                <span>Validated in production or peer-grade notebooks</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
