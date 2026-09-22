import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Code2,
  Mail,
  ShieldCheck,
  Zap,
  ExternalLink,
  Download,
  Layers,
  Cpu,
  Package,
  MapPin
} from 'lucide-react';
import { Tooltip } from './Tooltip';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Badge } from '@aryan_sehgal/forma-ui/badge';

interface HeroProps {
  onOpenRecommendation: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecommendation, onOpenResume }) => {
  return (
    <section
      id="hero"
      aria-label="Aryan Sehgal Introduction"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-stone-200/80 dark:border-stone-800/80"
    >
      {/* Subtle Background Accent Pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Positioning Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex flex-wrap items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-xs font-medium text-amber-800 dark:text-amber-300 font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                <span>Ex-Sprinklr Senior Product Engineer • Applied AI & Full-Stack</span>
              </div>
              <Tooltip content="Forma UI is Aryan's open-source React component library published on npm">
                <a
                  href={PERSONAL_INFO.formaNpm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20 transition-colors"
                >
                  <Package className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                  <span>@aryan_sehgal/forma-ui</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </Tooltip>
            </motion.div>

            {/* Headline and Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50 leading-[1.12]">
                Building AI-Powered Products.{' '}
                <span className="block text-stone-600 dark:text-stone-400 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic mt-1">
                  From SOTA Research to Production Web.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 max-w-3xl leading-relaxed font-sans">
                I am <strong className="text-stone-900 dark:text-stone-100 font-semibold">Aryan Sehgal</strong>. At <strong className="text-stone-900 dark:text-stone-100 font-semibold">Sprinklr</strong>, I was one of two core engineers who built the enterprise Ads Creative Management platform from scratch, integrating AI creative evaluation, SSR performance, and strict WCAG accessibility.
              </p>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed">
                I specialize in <strong className="text-stone-800 dark:text-stone-200">reading cutting-edge machine learning research</strong>, empirically experimenting to identify the optimal model for a product domain, and <strong className="text-stone-800 dark:text-stone-200">integrating models into high-performance web applications</strong> using ONNX Runtime, WebGPU, Web Workers, and accessible frontend design systems.
              </p>
            </motion.div>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Tooltip content="Explore production applications and deployed AI systems">
                <a
                  href="#projects"
                  id="hero-explore-projects-btn"
                  aria-label="Navigate to Projects Section"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Tooltip>

              <Tooltip content="Read official endorsement from Mayank Hinger, Sprinklr VP of Engineering">
                <button
                  type="button"
                  id="hero-vp-recommendation-btn"
                  onClick={onOpenRecommendation}
                  aria-label="Open recommendation letter modal"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-300/80 dark:border-sky-800 font-semibold text-xs sm:text-sm hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                  <span>VP Recommendation & LoR</span>
                </button>
              </Tooltip>

              <Tooltip content="Learn how I translate research papers into production products">
                <a
                  href="#philosophy"
                  id="hero-engineering-philosophy-btn"
                  aria-label="Navigate to Engineering Philosophy Section"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-200/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 font-medium text-xs sm:text-sm hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                >
                  <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <span>Engineering Methodology</span>
                </a>
              </Tooltip>

              <Tooltip content="Inspect full resume and download official PDF">
                <button
                  type="button"
                  id="hero-view-cv-btn"
                  onClick={onOpenResume}
                  aria-label="View resume and download PDF"
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 font-medium text-xs sm:text-sm transition-colors"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  <span>Resume (PDF)</span>
                </button>
              </Tooltip>
            </motion.div>

            {/* Social & Contact Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-600 dark:text-stone-400 border-t border-stone-200 dark:border-stone-800"
            >
              <span className="font-mono uppercase tracking-wider text-[10px] text-stone-400 dark:text-stone-500">
                Verified Profiles:
              </span>

              <Tooltip content="Visit Aryan's GitHub repositories, case studies, and models">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's GitHub profile (opens in new tab)"
                  className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 font-mono"
                >
                  <Github className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>github/AryanSehgal</span>
                </a>
              </Tooltip>

              <Tooltip content="Connect with Aryan on LinkedIn">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's LinkedIn profile (opens in new tab)"
                  className="inline-flex items-center gap-1.5 hover:text-sky-700 dark:hover:text-sky-400 font-mono"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                  <span>linkedin/in/aryansehgal2001</span>
                </a>
              </Tooltip>

              <Tooltip content="Check 450+ solved algorithmic problems on LeetCode">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Aryan's LeetCode profile (opens in new tab)"
                  className="inline-flex items-center gap-1.5 hover:text-amber-700 dark:hover:text-amber-400 font-mono"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                  <span>leetcode/aryansehgal</span>
                </a>
              </Tooltip>

              <Tooltip content="Send direct inquiry to aryansehgal@aol.in">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label={`Send email to ${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-stone-900 dark:hover:text-stone-100 font-mono"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </Tooltip>
            </motion.div>
          </div>

          {/* Right Column: Key Proof & Credentials Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 shadow-sm space-y-5"
            >
              {/* Card Header: Candidate Positioning with Aryan's Photo */}
              <div className="flex items-center gap-3.5 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div className="relative shrink-0">
                  <img
                    src="/aryan-photo.jpg?v=2"
                    alt="Aryan Sehgal"
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border border-stone-200 dark:border-stone-700 shadow-xs"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://avatars.githubusercontent.com/u/59551957?v=4';
                    }}
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-stone-900 rounded-full"
                    title="Active & Available"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h2 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 truncate">
                      Aryan Sehgal
                    </h2>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                      Available
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-600 dark:text-stone-300 mt-0.5">
                    Ex-Sprinklr Senior Product Engineer
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">New Delhi, India • NSUT &apos;23 (8.69 CGPA)</span>
                  </p>
                </div>
              </div>

              {/* Core Metric Highlights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
                  <div className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-mono">
                    AIR 1912
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">
                    JEE Mains (Top 0.15% across 1.2M+ candidates)
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
                  <div className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-mono">
                    8.69 CGPA
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">
                    B.Tech CSE with AI Specialization (NSUT)
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
                  <div className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-mono">
                    16 Primitives
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">
                    Published in @aryan_sehgal/forma-ui on npm
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
                  <div className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-mono leading-tight">
                    Class X: 10 CGPA
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-1">
                    Central Board of Secondary Education (CBSE)
                  </div>
                </div>
              </div>

              {/* Forma UI Open-Source Callout */}
              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-900 dark:text-indigo-200 text-[11px] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    Built With Forma UI
                  </span>
                  <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/60 px-1.5 py-0.5 rounded">
                    npm v0.1.2
                  </span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 text-[11px] leading-relaxed">
                  This entire portfolio is crafted with Aryan’s published open-source React component library and semantic CSS tokens.
                </p>
                <div className="pt-1 flex items-center justify-between text-[10px]">
                  <a
                    href={PERSONAL_INFO.formaDocs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline flex items-center gap-1"
                  >
                    <span>Explore Live Playground</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={PERSONAL_INFO.formaNpm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 dark:text-stone-400 hover:underline"
                  >
                    npm package →
                  </a>
                </div>
              </div>

              {/* VP Endorsement Quote */}
              <div className="p-3 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sky-900 dark:text-sky-200 text-[11px] uppercase tracking-wider">
                    VP Engineering Endorsement
                  </span>
                  <span className="text-[10px] font-mono text-sky-700 dark:text-sky-400">
                    Sprinklr
                  </span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 italic text-[11px] leading-relaxed">
                  &ldquo;Aryan possesses a strong combination of intellectual curiosity, analytical ability, technical aptitude, initiative, adaptability, and integrity.&rdquo;
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[10px] text-stone-500 dark:text-stone-400">
                    — Mayank Hinger, VP Engineering
                  </span>
                  <button
                    type="button"
                    onClick={onOpenRecommendation}
                    className="text-[10px] font-semibold text-sky-700 dark:text-sky-300 hover:underline"
                  >
                    Read Letter →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
