import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { RecommendationCard } from './components/RecommendationCard';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CaseStudies } from './components/CaseStudies';
import { Achievements } from './components/Achievements';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecommendationModal } from './components/RecommendationModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-f-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-f-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecommendation={() => setIsRecommendationOpen(true)}
      />

      {/* Main Accessible Landmark */}
      <main id="main-content" tabIndex={-1} className="grow focus:outline-hidden">
        {/* 1. Hero: Applied AI & Full-Stack Profile */}
        <Hero
          onOpenRecommendation={() => setIsRecommendationOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Engineering Philosophy: Research-to-Production Pipeline */}
        <EngineeringPhilosophy />

        {/* 3. Executive Endorsement & Recommendation by Sprinklr VP Mayank Hinger */}
        <RecommendationCard onOpenModal={() => setIsRecommendationOpen(true)} />

        {/* 4. Professional Experience: Sprinklr Core 2-Person Team & Earlier Roles */}
        <Experience onOpenRecommendation={() => setIsRecommendationOpen(true)} />

        {/* 5. Production & AI Projects Gallery with GitHub Readmes and Live Demos */}
        <Projects />

        {/* 6. Machine Learning Case Studies & Notebook Benchmarks */}
        <CaseStudies />

        {/* 7. Verified Ranks & Achievements (JEE AIR 1912, NSUT 8.69, Forma UI NPM) */}
        <Achievements />

        {/* 9. Categorized Technical Toolkit & Design System */}
        <SkillsGrid />

        {/* 10. Contact & Opportunities Inquiry Portal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official DocuSign Letter of Recommendation Modal & PDF Exporter */}
      <RecommendationModal
        isOpen={isRecommendationOpen}
        onClose={() => setIsRecommendationOpen(false)}
      />

      {/* Full Academic Curriculum Vitae & Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
