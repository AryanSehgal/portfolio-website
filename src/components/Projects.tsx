import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Github,
  ExternalLink,
  Search,
  Layers,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  PlayCircle,
  Package
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { Tooltip } from './Tooltip';
import { ProjectModal } from './ProjectModal';
import { Badge } from '@aryan_sehgal/forma-ui/badge';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'systems', label: 'Developer Tools & UI Infra' },
    { id: 'ai-vision', label: 'Applied AI & Vision' },
    { id: 'enterprise', label: 'Enterprise Systems' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'enterprise' && proj.category === 'enterprise') ||
        (selectedCategory === 'ai-vision' && proj.category === 'ai-vision') ||
        (selectedCategory === 'systems' && proj.category === 'systems');

      const matchesSearch =
        searchQuery.trim() === '' ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 border-b border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-xs font-semibold text-amber-800 dark:text-amber-300 mb-3">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Production Codebases & AI Implementations</span>
            </div>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
            >
              Featured Engineering & AI Projects
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              Explore live deployed applications, the published Forma UI design system on npm, in-browser edge AI with WebGPU, and enterprise systems at Sprinklr.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stack (e.g. ONNX, Forma, PyTorch)..."
                aria-label="Filter projects by technology or title"
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Project categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 shadow-2xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-stone-200 dark:border-stone-800 rounded-2xl">
            <p className="text-stone-500 text-sm">No projects found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`rounded-2xl border flex flex-col justify-between p-6 transition-all hover:shadow-md ${
                  project.featured
                    ? 'bg-stone-50/80 dark:bg-stone-900 border-stone-300/80 dark:border-stone-700/80'
                    : 'bg-white dark:bg-stone-900/60 border-stone-200 dark:border-stone-800/80'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                      {project.category.replace('-', ' ')}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <Sparkles className="w-3 h-3" aria-hidden="true" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-50 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100 dark:border-stone-800/60">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="text-xs font-mono">
                          <span className="font-bold text-stone-900 dark:text-stone-100 block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-stone-500 dark:text-stone-400">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights bullet */}
                  <div className="space-y-1.5 pt-1">
                    {project.keyHighlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] text-stone-400 dark:text-stone-500 self-center pl-1 font-mono">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Links: prominent live app & code links */}
                <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Live Deployed Application / Docs URL */}
                    {project.liveUrl && (
                      <Tooltip content={`Open live deployed application: ${project.title}`}>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live deployed demo for ${project.title} (opens in new tab)`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-md border border-emerald-500/20 transition-colors"
                        >
                          <PlayCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                      </Tooltip>
                    )}

                    {project.docsUrl && !project.liveUrl && (
                      <Tooltip content="Read official Sprinklr enterprise help documentation">
                        <a
                          href={project.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View official Sprinklr documentation for ${project.title}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 rounded-md border border-sky-500/20 transition-colors"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Docs</span>
                        </a>
                      </Tooltip>
                    )}

                    {project.githubUrl && (
                      <Tooltip content={`Inspect ${project.title} repository on GitHub`}>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} GitHub repository (opens in new tab)`}
                          className="p-1.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </Tooltip>
                    )}
                  </div>

                  <Tooltip content="Inspect detailed engineering challenge and architecture blueprint">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      aria-label={`View Architecture Deep Dive for ${project.title}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </Tooltip>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
