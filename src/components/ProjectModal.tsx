import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  PlayCircle,
  AlertCircle,
  Sparkles,
  Zap,
  BookOpen
} from 'lucide-react';
import { Project } from '../types';
import { Tooltip } from './Tooltip';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/75 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl text-stone-900 dark:text-stone-100 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="shrink-0 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs px-6 py-4.5">
            <div className="space-y-1 min-w-0 pr-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">
                  Architecture Deep Dive
                </span>
                <span className="text-stone-300 dark:text-stone-700">•</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                  {project.category.replace('-', ' ')}
                </span>
              </div>
              <h3 id="project-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight truncate">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-medium truncate">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Tooltip content="Close deep dive modal (Esc)">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Project Architecture modal"
                  className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-7">
            {/* Overview description */}
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold block">
                  Core Metrics & Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                  {project.metrics.map((metric, i) => {
                    const val = metric.value.trim();
                    const isCodeLike =
                      val.startsWith('@') ||
                      val.includes('.onnx') ||
                      val.includes('URL.') ||
                      val.includes('--f-*') ||
                      val.includes('flan-t5');

                    const isPureNumber =
                      /^[0-9\-+.<>% ]+([a-zA-Z]+)?$/.test(val) ||
                      val.includes('Primitives') ||
                      val.includes('Artboards') ||
                      val.includes('States');

                    return (
                      <div
                        key={i}
                        className="min-w-0 p-3.5 sm:p-4 rounded-xl bg-stone-50/90 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-800 flex flex-col justify-between transition-colors hover:border-amber-500/30"
                      >
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold mb-2 block truncate">
                          {metric.label}
                        </span>

                        <div className="min-w-0">
                          {isCodeLike ? (
                            <div
                              className="font-mono font-semibold text-xs sm:text-[13px] text-amber-700 dark:text-amber-400 break-all sm:break-normal leading-tight bg-amber-500/8 dark:bg-amber-400/8 px-2.5 py-1.5 rounded-lg border border-amber-500/15"
                              title={metric.value}
                            >
                              {metric.value}
                            </div>
                          ) : isPureNumber ? (
                            <div
                              className="font-mono font-extrabold text-base sm:text-lg lg:text-xl text-stone-900 dark:text-stone-100 tracking-tight"
                              title={metric.value}
                            >
                              {metric.value}
                            </div>
                          ) : (
                            <div
                              className="font-sans font-semibold text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-snug break-words"
                              title={metric.value}
                            >
                              {metric.value}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Architecture Details breakdown */}
            {project.architectureDetails && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900 dark:text-stone-100">
                    System Architecture & Engineering Breakdown
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Core Stack / Pipeline */}
                  <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                      <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                        Core Tech Stack / Pipeline
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-stone-800 dark:text-stone-200 leading-relaxed">
                      {project.architectureDetails.modelOrStack}
                    </p>
                  </div>

                  {/* Primary Challenge */}
                  <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                        Primary Engineering Challenge
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {project.architectureDetails.keyChallenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                        Architectural Solution & Formulation
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {project.architectureDetails.solution}
                    </p>
                  </div>

                  {/* Performance Impact */}
                  <div className="p-4 rounded-xl bg-stone-50/70 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold">
                        Verified Production & Performance Impact
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {project.architectureDetails.performanceImpact}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>Technical Highlights & Architecture Features</span>
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {project.keyHighlights.map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-stone-50/60 dark:bg-stone-800/30 border border-stone-100 dark:border-stone-800/80 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block font-semibold">
                Technologies & Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono border border-stone-200/50 dark:border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="shrink-0 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs px-6 py-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <Tooltip content="Launch live deployed web app in new tab">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live web app for ${project.title} (opens in new tab)`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <PlayCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </Tooltip>
              )}

              {project.githubUrl && (
                <Tooltip content="Open public GitHub repository in new tab">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs sm:text-sm font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>View GitHub Repo</span>
                  </a>
                </Tooltip>
              )}

              {project.docsUrl && (
                <Tooltip content="Open documentation / NPM package in new tab">
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View documentation for ${project.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-300/80 dark:border-sky-800 text-xs sm:text-sm font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>Documentation</span>
                  </a>
                </Tooltip>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

