import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, LineChart, Cpu, BarChart3, Database, ExternalLink, GitBranch, Terminal, CheckCircle2, TrendingUp, MousePointerClick } from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

export const CaseStudies: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find((s) => s.id === activeStudyId) || CASE_STUDIES[0];

  const getStudyIcon = (id: string) => {
    switch (id) {
      case 'time-series-case-study':
        return <LineChart className="w-4 h-4 text-sky-500 shrink-0" aria-hidden="true" />;
      case 'recommendation-systems-first-principles':
        return <Cpu className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />;
      case 'ecommerce-marketing-sales-case-study':
        return <BarChart3 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />;
      case 'anomaly-detection-case-study':
        return <Database className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />;
      case 'co2-emission-case-study':
        return <LineChart className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />;
      case 'ensemble-models-case-study':
        return <Cpu className="w-4 h-4 text-indigo-500 shrink-0" aria-hidden="true" />;
      case 'face-recognition-case-study':
        return <Cpu className="w-4 h-4 text-violet-500 shrink-0" aria-hidden="true" />;
      case 'visualising-data-lower-dimensions':
        return <BarChart3 className="w-4 h-4 text-teal-500 shrink-0" aria-hidden="true" />;
      case 'classification-models-and-metrics-case-study':
        return <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />;
      case 'clustering-techniques-case-study':
        return <Database className="w-4 h-4 text-cyan-500 shrink-0" aria-hidden="true" />;
      case 'midi-music-generator':
        return <Cpu className="w-4 h-4 text-fuchsia-500 shrink-0" aria-hidden="true" />;
      case 'predicting-sales-from-campaign-data':
        return <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />;
      case 'ad-click-prediction-case-study':
        return <MousePointerClick className="w-4 h-4 text-sky-500 shrink-0" aria-hidden="true" />;
      default:
        return <BarChart3 className="w-4 h-4 text-sky-500 shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-stone-100/40 dark:bg-stone-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-sky-400/10 border border-sky-500/20 text-xs font-semibold text-sky-800 dark:text-sky-300 mb-3">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Mathematical Rigor & Empirical Research</span>
          </div>
          <h2
            id="case-studies-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
          >
            Machine Learning Case Studies & Notebooks
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            Formulations derived from first principles, implemented in Jupyter notebooks, and benchmarked on standard open research datasets.
          </p>
        </div>

        {/* Tab Navigation for Case Studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8" role="tablist" aria-label="Machine Learning Case Studies">
          {CASE_STUDIES.map((study) => {
            const isActive = study.id === activeStudyId;
            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                id={`cs-tab-${study.id}`}
                aria-selected={isActive}
                aria-controls={`cs-panel-${study.id}`}
                onClick={() => setActiveStudyId(study.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-white dark:bg-stone-900 border-sky-500 shadow-xs'
                    : 'bg-white/60 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:bg-white dark:hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {getStudyIcon(study.id)}
                  <span className="text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                    {study.title}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2">
                  {study.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Study Content Card */}
        <div
          role="tabpanel"
          id={`cs-panel-${activeStudy.id}`}
          aria-labelledby={`cs-tab-${activeStudy.id}`}
          className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-8 shadow-xs space-y-8"
        >
          {/* Header & GitHub Notebook Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 dark:border-stone-800 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                Jupyter Notebook Deep Dive
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                {activeStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Dataset: {activeStudy.datasetSource}
              </p>
            </div>

            <Tooltip content="Inspect complete Jupyter Notebook with executable code and visualizations">
              <a
                href={activeStudy.notebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${activeStudy.title} Jupyter Notebook on GitHub (opens in new tab)`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 text-xs font-semibold shrink-0 transition-colors shadow-2xs"
              >
                <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Open Notebook Repo</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
              </a>
            </Tooltip>
          </div>

          {/* Problem Statement Box */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Scientific Objective & Research Question:
            </span>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-200/60 dark:border-stone-800">
              {activeStudy.problemStatement}
            </p>
          </div>

          {/* Mathematical Foundations Block */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Mathematical Formulations & Derivations:</span>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeStudy.mathematicalFoundations.map((math, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-900 dark:bg-stone-950 text-stone-100 font-mono text-xs border border-stone-800 space-y-1"
                >
                  <span className="text-[10px] text-amber-400 uppercase tracking-widest block font-bold">
                    Formula #{idx + 1}
                  </span>
                  <p className="text-stone-200 text-xs leading-relaxed overflow-x-auto py-1">
                    {math}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmark Evaluation Table */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Empirical Performance Benchmarks:
            </span>
            <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-stone-50 dark:bg-stone-800/60 text-stone-500 dark:text-stone-400 font-mono uppercase text-[10px] border-b border-stone-200 dark:border-stone-800">
                  <tr>
                    <th scope="col" className="p-3 font-semibold">Evaluation Metric</th>
                    <th scope="col" className="p-3 font-semibold">Empirical Score</th>
                    <th scope="col" className="p-3 font-semibold">Benchmark Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800 text-stone-700 dark:text-stone-300">
                  {activeStudy.metricsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/30">
                      <td className="p-3 font-medium text-stone-900 dark:text-stone-100">{row.metric}</td>
                      <td className="p-3 font-mono font-bold text-sky-600 dark:text-sky-400">{row.score}</td>
                      <td className="p-3 text-stone-500 dark:text-stone-400">{row.benchmark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
              Empirical Research Findings:
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              {activeStudy.insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
