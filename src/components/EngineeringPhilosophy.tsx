import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Cpu, Layers, CheckCircle2, ArrowRight, ExternalLink, Zap } from 'lucide-react';
import { ENGINEERING_PHILOSOPHY } from '../data/portfolioData';
import { Tooltip } from './Tooltip';
import { Badge } from '@aryan_sehgal/forma-ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@aryan_sehgal/forma-ui/card';

export const EngineeringPhilosophy: React.FC = () => {
  const icons = [BookOpen, Cpu, Layers];

  return (
    <section id="philosophy" className="py-20 bg-stone-100/70 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="warning" className="font-mono text-xs uppercase tracking-wider bg-stone-50 dark:bg-stone-900 border-amber-600/30 text-amber-700 dark:text-amber-400">
              <Zap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mr-1 inline" />
              Applied AI Engineering
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-4">
            {ENGINEERING_PHILOSOPHY.title}
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
            {ENGINEERING_PHILOSOPHY.philosophy}
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ENGINEERING_PHILOSOPHY.corePillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={pillar.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 shadow-sm hover:border-amber-500/40 transition-colors flex flex-col justify-between">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                        PHASE {pillar.step}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80">
                      <p className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2 uppercase tracking-wider font-mono">
                        Key Engineering Practices:
                      </p>
                      <ul className="space-y-2">
                        {pillar.concretePractices.map((practice, pIdx) => (
                          <li key={pIdx} className="text-xs text-stone-600 dark:text-stone-300 flex items-start gap-2 leading-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Real-World Proof Points */}
        <div className="bg-gradient-to-r from-amber-50/70 via-stone-50 to-amber-50/40 dark:from-stone-900/90 dark:via-stone-900 dark:to-stone-900/80 rounded-xl p-6 sm:p-8 border border-amber-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>Applied In Production: Real Products, Zero Cloud Leakage</span>
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                See this philosophy in action in <strong className="text-stone-900 dark:text-stone-100">Edge AI Note Studio</strong> (in-browser Whisper + Flan-T5 with WebGPU),{' '}
                <strong className="text-stone-900 dark:text-stone-100">StyleFAT Anime GAN</strong> (converted from research weights to ONNX), and the{' '}
                <strong className="text-stone-900 dark:text-stone-100">Sprinklr Ads Creative Platform</strong> (built from scratch in a 2-person core team).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Tooltip content="Explore the full projects gallery with live deployments">
                <a
                  href="#projects"
                  id="philosophy-view-projects-btn"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Tooltip>
              <Tooltip content="Inspect open-source machine learning case study notebooks on GitHub">
                <a
                  href="#case-studies"
                  id="philosophy-view-case-studies-btn"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-500/50 transition-colors"
                >
                  <span>Explore Case Studies</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
