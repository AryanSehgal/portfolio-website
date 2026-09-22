import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Mail, Phone, Building, CheckCircle2, Download, ExternalLink, Quote, Printer } from 'lucide-react';
import { RECOMMENDATION_DATA } from '../data/portfolioData';
import { Tooltip } from './Tooltip';
import { downloadLorPdf } from '../utils/generateLorPdf';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecommendationModal: React.FC<RecommendationModalProps> = ({ isOpen, onClose }) => {
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

  const handleDownload = () => {
    downloadLorPdf();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/70 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lor-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl text-stone-900 dark:text-stone-100"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xs px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 id="lor-modal-title" className="text-base sm:text-lg font-bold">
                  Official Letter of Recommendation
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-2">
                  <span>{RECOMMENDATION_DATA.author} • {RECOMMENDATION_DATA.title}</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    DocuSign Verified
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Tooltip content="Download official Letter of Recommendation as PDF">
                <button
                  type="button"
                  onClick={handleDownload}
                  aria-label="Download official letter of recommendation as PDF"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download PDF</span>
                </button>
              </Tooltip>

              <Tooltip content="Close document viewer (Esc)">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Letter of Recommendation modal"
                  className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Letter Body - Styled as an authentic executive letter */}
          <div className="p-6 sm:p-10 space-y-8 font-sans">
            {/* Sprinklr Header Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 text-xs">
              <div className="space-y-1">
                <div className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span className="text-sky-600 dark:text-sky-400">sprinklr</span>
                </div>
                <div className="text-stone-500 dark:text-stone-400 font-medium">
                  Sprinklr India Private Limited
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  DLF Downtown, DLF Phase 3, Gurugram, Haryana & Yamlur, Bangalore
                </div>
              </div>
              <div className="space-y-1 sm:text-right font-mono text-[11px] text-stone-500 dark:text-stone-400">
                <div>DocuSign Envelope ID:</div>
                <div className="font-semibold text-stone-800 dark:text-stone-200 text-xs">
                  {RECOMMENDATION_DATA.docusignId}
                </div>
                <div>Status: Certified & Signed</div>
              </div>
            </div>

            {/* Recommender Info Callout */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 text-sm block">
                  {RECOMMENDATION_DATA.author}
                </span>
                <span className="text-stone-600 dark:text-stone-400">
                  {RECOMMENDATION_DATA.title}, Sprinklr
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-stone-600 dark:text-stone-300">
                <a
                  href={`mailto:${RECOMMENDATION_DATA.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                  <span>{RECOMMENDATION_DATA.email}</span>
                </a>
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                  <span>{RECOMMENDATION_DATA.phone}</span>
                </span>
              </div>
            </div>

            {/* Document Salutation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-mono mb-2">
                Executive Endorsement
              </h4>
              <h2 className="text-2xl font-serif italic text-stone-900 dark:text-stone-50">
                Letter of Recommendation for Aryan Sehgal
              </h2>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-5 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border-l-4 border-amber-500 text-stone-800 dark:text-stone-200 space-y-2">
              <Quote className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <p className="text-sm italic leading-relaxed">
                &ldquo;Aryan distinguished himself through his ability to take ownership of complex and relatively open-ended problems and turn them into practical, well-structured product solutions... A particularly significant example was his contribution to Sprinklr’s Ads Creative Management solution. Aryan was one of the two core members working on this initiative and was responsible for building a substantial portion of the product from the ground up.&rdquo;
              </p>
            </div>

            {/* Full Letter Content */}
            <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              {RECOMMENDATION_DATA.fullLetterParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'font-semibold text-stone-900 dark:text-stone-100' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Sign-off & Verification Seal */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  Electronically Signed via DocuSign:
                </div>
                <div className="font-serif italic text-xl font-bold text-stone-900 dark:text-stone-100">
                  Mayank Hinger
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  Vice President of Engineering, Sprinklr
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <div>
                  <span className="font-semibold block">Academic Reference Ready</span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400">
                    Contactable for Irish university verification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
