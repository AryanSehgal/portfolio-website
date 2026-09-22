import React from 'react';
import { motion } from 'motion/react';
import { Award, Trophy, GraduationCap, Code, Star, FileCheck, CheckCircle2, Package } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-600" aria-hidden="true" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-500" aria-hidden="true" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-500" aria-hidden="true" />;
      case 'Star':
        return <Star className="w-5 h-5 text-amber-400" aria-hidden="true" />;
      case 'Package':
        return <Package className="w-5 h-5 text-indigo-500" aria-hidden="true" />;
      case 'FileCheck':
      default:
        return <FileCheck className="w-5 h-5 text-indigo-500" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="achievements-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-xs font-semibold text-amber-800 dark:text-amber-300 mb-3">
            <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Honors & Verified Distinctions</span>
          </div>
          <h2
            id="achievements-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Academic Rigor & Competitive Problem Solving
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            National entrance percentiles, university academic honors with AI specialization, and competitive algorithmic problem solving.
          </p>
        </div>

        {/* 6 Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 flex flex-col justify-between shadow-2xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20">
                    {item.metric}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center gap-1.5 text-[11px] font-mono text-stone-400 dark:text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                <span className="uppercase tracking-wider">Verified Record</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
