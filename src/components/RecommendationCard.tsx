import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Quote, Download, ExternalLink, CheckCircle2, Building2, FileText, Check } from 'lucide-react';
import { RECOMMENDATION_DATA } from '../data/portfolioData';
import { Tooltip } from './Tooltip';
import { downloadLorPdf } from '../utils/generateLorPdf';
import { Button } from '@aryan_sehgal/forma-ui/button';
import { Badge } from '@aryan_sehgal/forma-ui/badge';

interface RecommendationCardProps {
  onOpenModal: () => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ onOpenModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    downloadLorPdf();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section
      id="recommendation"
      aria-labelledby="endorsement-heading"
      className="py-16 md:py-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle accent backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 dark:bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Endorsement context */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                <span>Executive Letter of Recommendation</span>
              </div>

              <h2
                id="endorsement-heading"
                className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight"
              >
                Endorsement from Sprinklr Leadership
              </h2>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                {RECOMMENDATION_DATA.executiveSummary}
              </p>

              {/* Quote pill */}
              <div className="relative pl-5 border-l-2 border-amber-500 space-y-2 py-1">
                <p className="text-sm italic text-stone-800 dark:text-stone-200 leading-relaxed">
                  &ldquo;Aryan was one of the two core members working on this initiative and was responsible for building a substantial portion of the product from the ground up... His ability to take a product from an early stage to a functioning solution demonstrated both strong execution skills and a broader understanding of how technology can be applied to solve meaningful business problems.&rdquo;
                </p>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  — Mayank Hinger, Vice President of Engineering, Sprinklr
                </div>
              </div>

              {/* Action buttons: direct download via jsPDF */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Tooltip content="Instantly generate and download verified recommendation letter as PDF">
                  <button
                    type="button"
                    id="recommendation-download-pdf-btn"
                    onClick={handleDownload}
                    aria-label="Download official Letter of Recommendation as PDF"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    {downloaded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                        <span>Downloaded PDF!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" aria-hidden="true" />
                        <span>Download LoR (PDF)</span>
                      </>
                    )}
                  </button>
                </Tooltip>

                <Tooltip content="Read the full unabridged letter in interactive reader">
                  <button
                    type="button"
                    id="recommendation-read-online-btn"
                    onClick={onOpenModal}
                    aria-label="Read full recommendation letter on screen"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    <span>Read Online</span>
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Right Column: Verification & Author Details */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-800/60 p-6 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-700/60">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" />
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      Sprinklr India (P) Ltd
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    DocuSign Verified
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-stone-400 uppercase text-[10px] tracking-wider block font-mono">
                      Recommender
                    </span>
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
                      {RECOMMENDATION_DATA.author}
                    </span>
                    <span className="text-stone-500 dark:text-stone-400 block">
                      {RECOMMENDATION_DATA.title}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 uppercase text-[10px] tracking-wider block font-mono">
                      Relationship
                    </span>
                    <span className="text-stone-700 dark:text-stone-300">
                      {RECOMMENDATION_DATA.relationship}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 uppercase text-[10px] tracking-wider block font-mono">
                      DocuSign Envelope ID
                    </span>
                    <span className="font-mono text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 px-2 py-0.5 rounded text-[11px] select-all block break-all">
                      {RECOMMENDATION_DATA.docusignId}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-700/60 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span>Contact: {RECOMMENDATION_DATA.email}</span>
                  <span className="font-mono">{RECOMMENDATION_DATA.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
