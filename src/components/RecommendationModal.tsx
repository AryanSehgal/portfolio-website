import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Download, Check, Loader2, CheckCircle2 } from 'lucide-react';
import { RECOMMENDATION_DATA } from '../data/portfolioData';
import { Tooltip } from './Tooltip';
import { downloadLorPdf } from '../utils/generateLorPdf';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecommendationModal: React.FC<RecommendationModalProps> = ({ isOpen, onClose }) => {
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

  const handleDownload = async () => {
    if (downloadState === 'loading') return;
    setDownloadState('loading');
    try {
      const startTime = Date.now();
      await downloadLorPdf();
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
              <Tooltip
                content={
                  downloadState === 'loading'
                    ? 'Downloading official Letter of Recommendation...'
                    : downloadState === 'downloaded'
                    ? 'LoR PDF downloaded!'
                    : 'Download official Letter of Recommendation as PDF'
                }
              >
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloadState === 'loading'}
                  aria-label={
                    downloadState === 'loading'
                      ? 'Downloading official Letter of Recommendation PDF'
                      : downloadState === 'downloaded'
                      ? 'Downloaded official Letter of Recommendation PDF'
                      : 'Download official Letter of Recommendation as PDF'
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-85 rounded-lg transition-all shadow-2xs cursor-pointer disabled:cursor-wait"
                >
                  {downloadState === 'loading' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                  ) : downloadState === 'downloaded' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
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

              <Tooltip content="Close document viewer (Esc)">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Letter of Recommendation modal"
                  className="p-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Letter Body - Exact authentic replica of the signed DocuSign letter */}
          <div className="p-6 sm:p-10 space-y-6 font-sans">
            {/* Sprinklr Header Info & DocuSign Envelope ID */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-stone-200 dark:border-stone-800 text-xs">
              <div className="space-y-1">
                <div className="text-2xl font-black tracking-tight text-[#0089D0] dark:text-sky-400">
                  sprinklr
                </div>
                <div className="text-stone-700 dark:text-stone-300 font-semibold">
                  Sprinklr India (P) Ltd
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Tel: +1707 – 276 – 6362
                </div>
                <div className="text-stone-500 dark:text-stone-400">
                  Email: info@sprinklr.com, Twitter: @sprinklr, Website: www.sprinklr.com
                </div>
              </div>
              <div className="space-y-1 sm:text-right font-mono text-[11px] text-stone-500 dark:text-stone-400">
                <div>Docusign Envelope ID:</div>
                <div className="font-semibold text-stone-800 dark:text-stone-200 text-xs select-all">
                  {RECOMMENDATION_DATA.docusignId}
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-medium">Status: Certified & Signed</div>
              </div>
            </div>

            {/* Document Title */}
            <div className="text-center py-2">
              <h2 className="text-base sm:text-lg font-bold tracking-wider text-stone-900 dark:text-stone-100 uppercase">
                LETTER OF RECOMMENDATION
              </h2>
            </div>

            {/* Salutation */}
            <div>
              <p className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                To Whom It May Concern,
              </p>
            </div>

            {/* Full Letter Content - Word-for-word exact match from signed PDF */}
            <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              <p>
                I am pleased to recommend <strong>Aryan Sehgal</strong>, whom I had the opportunity to directly manage during his tenure at Sprinklr. As the <strong>Vice President of Engineering at Sprinklr</strong>, I worked closely with Aryan and had the opportunity to observe his technical capabilities, problem-solving approach, sense of ownership, and professional growth.
              </p>

              <p>
                Aryan distinguished himself through his ability to take ownership of <strong>complex and relatively open-ended problems</strong> and turn them into practical, well-structured product solutions. He demonstrated a strong combination of technical ability, analytical thinking, initiative, and persistence, and was particularly effective in situations that required him to operate with a high degree of independence.
              </p>

              <p>
                A particularly significant example of Aryan’s work was his contribution to Sprinklr’s <strong>Ads Creative Management</strong> solution. The product was designed to help organizations improve creative efficiency by reducing media production costs, ensuring compliance with brand and channel guidelines, and enabling more effective discovery and reuse of existing creative assets. Aryan was <strong>one of the two core members</strong> working on this initiative and was responsible for building a substantial portion of the product from the ground up.
              </p>

              <p>
                Working in such a lean team required Aryan to take ownership across multiple aspects of the product rather than focusing narrowly on an individual component. He was required to understand the underlying problem, translate requirements into product functionality, make sound technical decisions, and work through challenges independently. His ability to take a product from an early stage to a functioning solution demonstrated both strong execution skills and a broader understanding of how technology can be applied to solve meaningful business problems.
              </p>

              <p>
                The product also incorporated <strong>AI and machine-learning-based capabilities</strong> for creative evaluation, including AI-assisted generation of brand guidelines and creative scoring based on brand compliance and advertising performance. Working on these capabilities gave Aryan exposure to the practical application of intelligent systems in a real-world product environment and demonstrated his ability to engage with technically and conceptually challenging problems.
              </p>

              <p>
                One of Aryan’s strongest qualities is his <strong>willingness to learn and go beyond the immediate requirements</strong> of an assignment. He consistently sought to understand not only how a solution should be implemented, but also why a particular problem mattered and how different components contributed to the overall product. This combination of curiosity and execution allowed him to make meaningful contributions despite working in a very small team.
              </p>

              <p>
                Aryan also demonstrated a <strong>strong sense of accountability</strong>. Given the size of the team, there was little room for narrowly defined responsibilities or dependence on extensive supervision. He was able to work independently, make progress in ambiguous situations, identify problems proactively, and take responsibility for delivering outcomes. I found this level of ownership particularly impressive for someone at his stage of professional development.
              </p>

              <p>
                Beyond his technical contributions, Aryan was a <strong>thoughtful and dependable colleague</strong>. He communicated effectively, was receptive to feedback, and worked constructively through challenging situations. Over the course of our association, I observed him become increasingly confident and independent in his approach to problem-solving and decision-making.
              </p>

              <p>
                In my assessment, Aryan possesses a strong combination of <strong>intellectual curiosity, analytical ability, technical aptitude, initiative, adaptability, and integrity</strong>. His experience building a product in a highly lean environment has given him valuable exposure to both the technical and practical dimensions of solving complex problems.
              </p>

              <p>
                I believe that pursuing a master’s degree will provide Aryan with an opportunity to further develop his technical knowledge and analytical capabilities. Given his demonstrated ability to learn quickly, work independently, and take on challenging problems, I am confident that he will approach his academic pursuits with the same curiosity, discipline, and sense of ownership that he demonstrated during his time at Sprinklr.
              </p>

              <p>
                I am pleased to recommend Aryan Sehgal for further academic study and wish him every success in his future academic and professional endeavors. Should any further information be required regarding his qualifications or professional experience, I would be pleased to provide it.
              </p>
            </div>

            {/* Sign-off & DocuSign Signature Stamp */}
            <div className="pt-6 border-t border-stone-200 dark:border-stone-800 space-y-4">
              <p className="text-sm text-stone-800 dark:text-stone-200 font-medium">Sincerely,</p>

              {/* DocuSign electronic signature representation */}
              <div className="inline-block p-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/60 text-xs">
                <div className="text-[10px] text-stone-500 dark:text-stone-400 font-mono mb-1">
                  DocuSigned by:
                </div>
                <div className="font-serif italic text-2xl font-bold text-sky-950 dark:text-sky-100 tracking-wider">
                  Mayank
                </div>
                <div className="text-[9px] text-stone-400 dark:text-stone-500 font-mono tracking-tighter mt-0.5">
                  —4DB6711F21304E5...
                </div>
              </div>

              <div className="space-y-0.5 text-xs text-stone-800 dark:text-stone-200">
                <div className="font-bold text-sm text-stone-900 dark:text-stone-100">Mayank Hinger</div>
                <div className="text-stone-600 dark:text-stone-400 font-medium">Vice President of Engineering</div>
                <div>
                  Email: <a href="mailto:mayank.hinger@sprinklr.com" className="text-sky-600 dark:text-sky-400 hover:underline">mayank.hinger@sprinklr.com</a>
                </div>
                <div className="font-mono text-stone-600 dark:text-stone-400">
                  Contact: +91 70427 72733
                </div>
              </div>
            </div>

            {/* Registered Offices Footer (Matching both pages of the official Sprinklr letterhead) */}
            <div className="pt-8 mt-6 border-t border-stone-200 dark:border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-stone-500 dark:text-stone-400">
              <div>
                <div className="font-semibold text-stone-700 dark:text-stone-300">Sprinklr India Private Limited</div>
                <div>Divyasree Technopolis, 3rd Flr, East Wing,</div>
                <div>Building No.3 Block B, 770 Town Centre, Off</div>
                <div>HAL Airport Road, Yamlur, Bangalore – 560037</div>
              </div>
              <div className="sm:text-right">
                <div className="font-semibold text-stone-700 dark:text-stone-300">Sprinklr India Private Limited</div>
                <div>DLF Downtown, Block B, 6th Floor</div>
                <div>DLF City Phase 3 Rd, Sector 25 A</div>
                <div>Gurugram, Haryana - 122002</div>
              </div>
              <div className="col-span-1 sm:col-span-2 pt-2 border-t border-stone-100 dark:border-stone-800/60 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>Docusign Envelope ID: 89793F20-91DA-85A2-8002-38AF6C63CE91</span>
                <span>DocuSign Verified Electronic Record</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

