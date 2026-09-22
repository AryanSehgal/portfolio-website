import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Cpu, Layers, CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl text-stone-900 dark:text-stone-100"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs px-6 py-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                Architecture Deep Dive
              </span>
              <h3 id="project-modal-title" className="text-lg sm:text-xl font-bold">
                {project.title}
              </h3>
            </div>
            <Tooltip content="Close deep dive modal (Esc)">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close Project Architecture modal"
                className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </Tooltip>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-800"
                  >
                    <div className="text-base sm:text-lg font-bold font-mono text-stone-900 dark:text-stone-100">
                      {metric.value}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture breakdown if present */}
            {project.architectureDetails && (
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-800 space-y-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                      Core Technology Stack / Pipeline
                    </span>
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      {project.architectureDetails.modelOrStack}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                      Primary Engineering / Algorithmic Challenge
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                      {project.architectureDetails.keyChallenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                      Architectural Solution & Formulation
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                      {project.architectureDetails.solution}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                      Verified System / Production Impact
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-0.5 leading-relaxed">
                      {project.architectureDetails.performanceImpact}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                Technical Highlights:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {project.keyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* External Links */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <Tooltip content="Launch live deployed web app in new tab">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live web app for ${project.title} (opens in new tab)`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <PlayCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Launch Live Demo</span>
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>View GitHub Repo</span>
                  </a>
                </Tooltip>
              )}

              {project.docsUrl && (
                <Tooltip content="Open documentation in new tab">
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View documentation for ${project.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-300/80 dark:border-sky-800 text-xs font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Official Docs</span>
                  </a>
                </Tooltip>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
