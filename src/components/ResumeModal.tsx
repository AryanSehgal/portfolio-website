import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Copy, Check, Loader2, ExternalLink, GraduationCap, Briefcase, Award, Code, Package } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, ACHIEVEMENTS, PROJECTS } from '../data/portfolioData';
import { Tooltip } from './Tooltip';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'downloaded'>('idle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (downloadState === 'loading') return;
    setDownloadState('loading');
    try {
      const startTime = Date.now();
      await downloadResumePdf();
      const elapsed = Date.now() - startTime;
      if (elapsed < 600) {
        await new Promise((resolve) => setTimeout(resolve, 600 - elapsed));
      }
      setDownloadState('downloaded');
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    } catch {
      setDownloadState('idle');
    }
  };

  const handleCopyText = () => {
    const text = `
ARYAN SEHGAL - CURRICULUM VITAE
Email: ${PERSONAL_INFO.email} | Mobile: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github} | LeetCode: ${PERSONAL_INFO.leetcode}
NPM: ${PERSONAL_INFO.formaNpm}

PROFILE: Applied AI & Full-Stack Systems Engineer (ex-Sprinklr Senior Product Engineer)

EDUCATION:
Netaji Subhas University of Technology (NSUT), New Delhi (2019 - 2023)
B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence | CGPA: 8.69 / 10.0
Class XII (Central Board of Secondary Education): 90%
Class X (Central Board of Secondary Education): Perfect 10 CGPA

WORK EXPERIENCE:
1. Independent Engineering & Applied ML Development (October 2025 - Present)
   - Published @aryan_sehgal/forma-ui on npm — 16 accessible React primitives with Radix UI and custom CSS tokens.
   - Architected Forma Visual Page Builder (AST canvas engine, multi-device viewports, zero-runtime export).
   - Built Edge AI Note Studio (client-side Whisper ASR and Flan-T5 summarization via ONNX Runtime Web & WebGPU).
   - Authored 11 empirical machine learning and deep learning case studies analyzing classification metrics, clustering, SVD, SARIMAX, and recurrent LSTM networks.

2. Sprinklr - Senior Product Engineer (July 2023 - September 2025)
   - 2-person core engineering team that built Sprinklr Ads Creative Management platform from scratch.
   - Built AI-assisted brand guidelines generation and automated compliance scoring.
   - Revamped Digital Asset Manager to SSR, reducing page load by 35%.
   - Elevated test coverage to 95% using React Testing Library and Jest.
   - Modernized legacy codebase: GraphQL & Apollo Client, cutting API latency by 40%.
   - Enforced strict WCAG 2.1 AAA accessibility standards across multi-tenant creative authoring workflows.

3. OYO Rooms - Data Science Intern (May 2022 - July 2022)
   - Engineered exploratory data analysis pipelines and predictive models in Python for hospitality booking patterns and occupancy rates.
   - Built feature engineering workflows with Pandas and NumPy, benchmarking statistical heuristics against regression models.
   - Developed automated data dashboards to surface revenue-optimization metrics and pricing sensitivity insights.

4. Coding Ninjas - Teaching Assistant (August 2020 - November 2020)
   - Mentored 300+ students in Data Structures, Algorithms, Dynamic Programming, and Graph Theory (maintained 4.9/5 student rating).

FEATURED PROJECTS:
- Forma UI Design System & Component Library (@aryan_sehgal/forma-ui on npm)
- Edge AI Note Studio (Client-Side WebGPU & ONNX Runtime Web)
- Framepick (Image-First React File Picker & Inspection Library with Live Playground)
- Forma Visual Page Builder (AST Canvas Engine)
- Empirical Machine Learning Research Case Studies (11 Repositories)

ACHIEVEMENTS:
- All India Rank 1912 in JEE Mains (Top 0.15% nationally out of 1.2M applicants)
- All India Rank 5021 in JEE Advanced (Top 0.5% nationally)
- CBSE Academic Excellence: 90% in Class XII & Perfect 10 CGPA in Class X (Central Board of Secondary Education)
- 450+ LeetCode problems solved, 16 Badges earned (750+ total competitive problems)
- Author of published NPM design system (@aryan_sehgal/forma-ui)
- Official Letter of Recommendation from Sprinklr VP of Engineering (DocuSign Verified)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-xs print:p-0 print:bg-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl text-stone-900 dark:text-stone-100 print:max-h-none print:shadow-none print:border-none print:text-black"
        >
          {/* Action Toolbar */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs px-6 py-4 print:hidden">
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold">
                Professional Resume & Dossier
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Verified Engineering & Academic Track Record
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Tooltip content={copied ? 'Copied to clipboard!' : 'Copy plain text summary'}>
                <button
                  type="button"
                  onClick={handleCopyText}
                  aria-label="Copy resume plain text"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
              </Tooltip>

              <Tooltip
                content={
                  downloadState === 'loading'
                    ? 'Downloading official Resume PDF...'
                    : downloadState === 'downloaded'
                    ? 'Resume PDF downloaded!'
                    : 'Download official Resume PDF'
                }
              >
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={downloadState === 'loading'}
                  aria-label={
                    downloadState === 'loading'
                      ? 'Downloading resume PDF...'
                      : downloadState === 'downloaded'
                      ? 'Resume PDF downloaded'
                      : 'Download resume PDF'
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 disabled:opacity-85 transition-all shadow-2xs cursor-pointer disabled:cursor-wait"
                >
                  {downloadState === 'loading' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                  ) : downloadState === 'downloaded' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  )}
                  <span>
                    {downloadState === 'loading'
                      ? 'Downloading...'
                      : downloadState === 'downloaded'
                      ? 'Downloaded PDF'
                      : 'Download PDF'}
                  </span>
                </button>
              </Tooltip>

              <Tooltip content="Close resume modal (Esc)">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume modal"
                  className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Formatted Resume Sheet */}
          <div className="p-8 sm:p-12 space-y-8 font-sans print:p-0">
            {/* Header */}
            <div className="border-b border-stone-200 dark:border-stone-800 pb-6 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                ARYAN SEHGAL
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300">
                Applied AI & Full-Stack Systems Engineer • Ex-Sprinklr Senior Product Engineer
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500 dark:text-stone-400 font-mono">
                <span>Email: {PERSONAL_INFO.email}</span>
                <span>Phone: {PERSONAL_INFO.phone}</span>
                <span>LinkedIn: /in/aryansehgal2001</span>
                <span>GitHub: /AryanSehgal</span>
                <span>LeetCode: /aryansehgal</span>
                <span>NPM: @aryan_sehgal/forma-ui</span>
              </div>
              <div className="pt-2 text-xs font-medium text-amber-700 dark:text-amber-400">
                Specialization in bringing SOTA Machine Learning models to high-performance, accessible web products.
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase font-mono tracking-widest text-stone-400 dark:text-stone-500 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Netaji Subhas University of Technology (NSUT), New Delhi
                    </div>
                    <div className="text-xs text-stone-600 dark:text-stone-300">
                      B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence
                    </div>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400 text-right">
                    <span className="font-bold text-stone-800 dark:text-stone-200">CGPA: 8.69 / 10.0</span>
                    <div className="text-[11px]">July 2019 - May 2023</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300 pt-1 border-t border-stone-100 dark:border-stone-800">
                  <div>Class XII (Central Board of Secondary Education): <strong className="text-stone-800 dark:text-stone-100">90%</strong></div>
                  <div>Class X (Central Board of Secondary Education): <strong className="text-stone-800 dark:text-stone-100">Perfect 10 CGPA</strong></div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase font-mono tracking-widest text-stone-400 dark:text-stone-500 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Work Experience</span>
              </h2>

              {/* Independent Engineering */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Independent Engineering & Applied ML Development
                  </span>
                  <span className="text-xs font-mono text-stone-500">October 2025 - Present</span>
                </div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                  Applied AI & Full-Stack Systems Engineer
                </div>
                <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-300 space-y-1">
                  <li>Published @aryan_sehgal/forma-ui to npm — 16 accessible React components with Radix primitives, custom CSS tokens, Theme Studio, and automated axe-core validation.</li>
                  <li>Architected Forma Visual Page Builder: a low-code canvas engine with multi-breakpoint viewports and zero-runtime static site ZIP export.</li>
                  <li>Built Edge AI Note Studio with browser-based Whisper speech recognition and Flan-T5 text summarization via ONNX Runtime Web and WebGPU.</li>
                  <li>Authored 11 empirical machine learning and deep learning case study repositories analyzing mathematical formulations across classification metrics, clustering, time-series, music generation, and recommendation algorithms.</li>
                </ul>
              </div>

              {/* Sprinklr */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    Sprinklr
                  </span>
                  <span className="text-xs font-mono text-stone-500">July 2023 - September 2025</span>
                </div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                  Senior Product Engineer (Core 2-Person Engineering Team)
                </div>
                <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-300 space-y-1">
                  <li>Built a substantial portion of Sprinklr Ads Creative Management platform from scratch as one of two core engineers on the team.</li>
                  <li>Integrated AI and ML capabilities for creative evaluation, including automated brand guideline rule generation and ad performance scoring.</li>
                  <li>Revamped Digital Asset Manager to support Server-Side Rendering (SSR), reducing page load times by 35% via route-based chunk splitting.</li>
                  <li>Achieved 95% test coverage using React Testing Library (RTL) and Jest across the product codebases.</li>
                  <li>Migrated legacy components to functional React with hooks; transitioned REST to Apollo GraphQL caching, cutting API latency by 40%.</li>
                  <li>Enforced strict WCAG 2.1 AAA accessibility standards across creative authoring workflows.</li>
                </ul>
              </div>

              {/* OYO Rooms */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">OYO Rooms</span>
                  <span className="text-xs font-mono text-stone-500">May 2022 - July 2022</span>
                </div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400">Data Science Intern</div>
                <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-300 space-y-1">
                  <li>Engineered exploratory data analysis pipelines and predictive models in Python for hospitality booking patterns and occupancy rates.</li>
                  <li>Built feature engineering workflows with Pandas and NumPy, benchmarking statistical heuristics against regression and gradient boosting models.</li>
                  <li>Developed automated data dashboards to surface revenue-optimization metrics and pricing sensitivity insights.</li>
                </ul>
              </div>

              {/* Coding Ninjas */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100">Coding Ninjas</span>
                  <span className="text-xs font-mono text-stone-500">August 2020 - November 2020</span>
                </div>
                <div className="text-xs font-semibold text-stone-600 dark:text-stone-400">Teaching Assistant</div>
                <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-300">
                  <li>Mentored 300+ students in Data Structures, Algorithms, Dynamic Programming, and Graph Theory (maintained 4.9/5 student rating).</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase font-mono tracking-widest text-stone-400 dark:text-stone-500 font-bold flex items-center gap-2">
                <Code className="w-4 h-4" aria-hidden="true" />
                <span>Featured Engineering Projects</span>
              </h2>
              <div className="space-y-2.5">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Forma UI Design System & Component Library
                    </span>
                    <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">@aryan_sehgal/forma-ui (NPM)</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    Published accessible React component library featuring 16 component primitives, Radix UI foundations, custom CSS tokens (<code className="font-mono text-[11px]">--f-*</code>), Theme Studio, and automated axe-core accessibility validation suite.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Edge AI Note Studio (Whisper & Flan-T5)
                    </span>
                    <span className="text-xs font-mono text-stone-500">Client-Side WebGPU Inference</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    In-browser privacy-first voice recorder and note studio leveraging ONNX Runtime Web and WebGPU. Executes local Whisper ASR and Flan-T5 text summarization with sub-5ms latency and zero server-side telemetry.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Framepick
                    </span>
                    <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold">@aryansehgal/framepick (Netlify & GitHub)</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    Accessible, image-first React file picker and inspection component library with interactive live playground. Features magic byte signature validation, dimension decoding limits, duplicate detection, and automated Object URL lifecycle memory safety.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Forma Visual Page Builder
                    </span>
                    <span className="text-xs font-mono text-stone-500">AST Canvas Engine</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    Interactive canvas engine with real-time DOM tree manipulation, responsive multi-breakpoint visual editor, and instant clean static site ZIP export with zero runtime styling overhead.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      Empirical Machine Learning Research Case Studies
                    </span>
                    <span className="text-xs font-mono text-stone-500">11 Empirical Repositories</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300">
                    Conducted 11 empirical research case studies implementing mathematical formulations from literature: clustering manifolds, classification metrics, SVD collaborative filtering, SARIMAX time-series, deep LSTM music composition, and high-dimensional PCA/t-SNE projections.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs uppercase font-mono tracking-widest text-stone-400 dark:text-stone-500 font-bold flex items-center gap-2">
                <Code className="w-4 h-4" aria-hidden="true" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-300">
                <div><strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python, C++, SQL, HTML5, CSS3</div>
                <div><strong>Machine Learning:</strong> PyTorch, ONNX Runtime Web, WebGPU, Whisper, Flan-T5, U-Net, CIELAB, ARIMA, SVD</div>
                <div><strong>Frontend & Design Systems:</strong> React 19, Next.js (SSR), @aryan_sehgal/forma-ui, Radix UI, GraphQL, Apollo Client, Tailwind CSS v4</div>
                <div><strong>Testing & Reliability:</strong> Jest, React Testing Library (RTL), WCAG 2.1 AAA, Axe-Core, Lighthouse 100</div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-2 pt-2 border-t border-stone-200 dark:border-stone-800">
              <h2 className="text-xs uppercase font-mono tracking-widest text-stone-400 dark:text-stone-500 font-bold flex items-center gap-2">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span>Achievements & Honors</span>
              </h2>
              <ul className="list-disc list-inside text-xs text-stone-600 dark:text-stone-300 space-y-1">
                <li><strong>All India Rank 1912</strong> in JEE Mains (out of 1.2M+ applicants, top 0.15% nationally).</li>
                <li><strong>All India Rank 5021</strong> in JEE Advanced (top 0.5% nationally).</li>
                <li><strong>450+ LeetCode Questions Solved & 16 Badges</strong> (750+ total algorithmic problems solved across platforms).</li>
                <li><strong>Author of Published NPM Design System:</strong> @aryan_sehgal/forma-ui with 16 accessible UI primitives.</li>
                <li><strong>Letter of Recommendation from Mayank Hinger</strong>, VP of Engineering at Sprinklr (DocuSign Verified).</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
