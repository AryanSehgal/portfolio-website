export type ProjectCategory = 'all' | 'enterprise' | 'ai-vision' | 'systems' | 'case-studies';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'ai-vision' | 'systems' | 'case-studies';
  description: string;
  longDescription?: string[];
  keyHighlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  featured: boolean;
  architectureDetails?: {
    modelOrStack: string;
    keyChallenge: string;
    solution: string;
    performanceImpact: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problemStatement: string;
  mathematicalFoundations: string[];
  algorithmsUsed: string[];
  metricsTable: { metric: string; score: string; benchmark: string }[];
  insights: string[];
  notebookUrl: string;
  datasetSource: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  bullets: string[];
  technologies: string[];
  verifiedImpact?: string[];
  docsLinks?: { title: string; url: string }[];
}

export interface Recommendation {
  author: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  docusignId: string;
  relationship: string;
  executiveSummary: string;
  highlightQuotes: string[];
  fullLetterParagraphs: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  metric: string;
  detail: string;
  iconName: string;
  category: 'academic' | 'competitive' | 'engineering';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Production Expert' | 'Advanced Research' | 'Proficient'; context?: string }[];
}
