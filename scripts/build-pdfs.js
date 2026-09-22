import fs from 'fs';
import path from 'path';
import { jsPDF } from 'jspdf';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// -------------------------------------------------------------
// 1. GENERATE OFFICIAL SPRINKLR LETTER OF RECOMMENDATION PDF
// -------------------------------------------------------------
function generateLorPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const leftMargin = 22;
  const rightMargin = 22;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  const docusignId = '89793F20-91DA-85A2-8002-38AF6C63CE91';

  function drawHeader(pageNum) {
    // Top Docusign ID
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(50, 50, 50);
    doc.text(`Docusign Envelope ID: ${docusignId}`, leftMargin, 12);

    // Sprinklr logo & brand text
    // Colorful icon petals representation
    const iconX = leftMargin;
    const iconY = 18;

    // Draw Sprinklr logo mark
    doc.setFillColor(249, 115, 22); // Orange petal
    doc.circle(iconX + 3, iconY + 2.5, 1.8, 'F');
    doc.setFillColor(59, 130, 246); // Blue petal
    doc.circle(iconX + 6.5, iconY + 1.2, 1.8, 'F');
    doc.setFillColor(16, 185, 129); // Green petal
    doc.circle(iconX + 9, iconY + 3.8, 1.8, 'F');
    doc.setFillColor(236, 72, 153); // Pink petal
    doc.circle(iconX + 4.5, iconY + 5.5, 1.8, 'F');

    // Sprinklr text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(24, 38, 70); // Deep Sprinklr navy
    doc.text('sprinklr', iconX + 13, iconY + 5.5);

    // Right header company info
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(40, 40, 40);
    const rightAlignX = pageWidth - rightMargin;
    doc.text('Sprinklr India (P) Ltd', rightAlignX, 15, { align: 'right' });
    doc.text('Tel: +1707 - 276 - 6362', rightAlignX, 19, { align: 'right' });
    doc.text('Email: info@sprinklr.com, Twitter: @sprinklr,', rightAlignX, 23, { align: 'right' });
    doc.text('Website: www.sprinklr.com', rightAlignX, 27, { align: 'right' });
  }

  function drawFooter() {
    const footerY = 270;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(70, 70, 70);

    // Bangalore Office
    doc.text('Sprinklr India Private Limited', leftMargin, footerY);
    doc.text('Divyasree Technopolis, 3rd Flr, East Wing,', leftMargin, footerY + 3.5);
    doc.text('Building No.3 Block B, 770 Town Centre, Off', leftMargin, footerY + 7);
    doc.text('HAL Airport Road, Yamlur, Bangalore - 560037', leftMargin, footerY + 10.5);

    // Gurugram Office
    const col2X = pageWidth / 2 + 10;
    doc.text('Sprinklr India Private Limited', col2X, footerY);
    doc.text('DLF Downtown, Block B, 6th Floor', col2X, footerY + 3.5);
    doc.text('DLF City Phase 3 Rd, Sector 25 A', col2X, footerY + 7);
    doc.text('Gurugram, Haryana - 122002', col2X, footerY + 10.5);

    // Bottom Docusign Envelope ID
    doc.setFontSize(7);
    doc.setTextColor(90, 90, 90);
    doc.text(`Docusign Envelope ID: ${docusignId}`, leftMargin, 287);
  }

  // --- PAGE 1 ---
  drawHeader(1);

  let curY = 44;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(20, 20, 20);
  doc.text('LETTER OF RECOMMENDATION', pageWidth / 2, curY, { align: 'center' });

  curY += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('To Whom It May Concern,', leftMargin, curY);

  curY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);

  const p1 =
    'I am pleased to recommend Aryan Sehgal, whom I had the opportunity to directly manage during his tenure at Sprinklr. As the Vice President of Engineering at Sprinklr, I worked closely with Aryan and had the opportunity to observe his technical capabilities, problem-solving approach, sense of ownership, and professional growth.';
  const p1Lines = doc.splitTextToSize(p1, contentWidth);
  doc.text(p1Lines, leftMargin, curY);
  curY += p1Lines.length * 4.2 + 3.5;

  const p2 =
    'Aryan distinguished himself through his ability to take ownership of complex and relatively open-ended problems and turn them into practical, well-structured product solutions. He demonstrated a strong combination of technical ability, analytical thinking, initiative, and persistence, and was particularly effective in situations that required him to operate with a high degree of independence.';
  const p2Lines = doc.splitTextToSize(p2, contentWidth);
  doc.text(p2Lines, leftMargin, curY);
  curY += p2Lines.length * 4.2 + 3.5;

  const p3 =
    "A particularly significant example of Aryan's work was his contribution to Sprinklr's Ads Creative Management solution. The product was designed to help organizations improve creative efficiency by reducing media production costs, ensuring compliance with brand and channel guidelines, and enabling more effective discovery and reuse of existing creative assets. Aryan was one of the two core members working on this initiative and was responsible for building a substantial portion of the product from the ground up.";
  const p3Lines = doc.splitTextToSize(p3, contentWidth);
  doc.text(p3Lines, leftMargin, curY);
  curY += p3Lines.length * 4.2 + 3.5;

  const p4 =
    'Working in such a lean team required Aryan to take ownership across multiple aspects of the product rather than focusing narrowly on an individual component. He was required to understand the underlying problem, translate requirements into product functionality, make sound technical decisions, and work through challenges independently. His ability to take a product from an early stage to a functioning solution demonstrated both strong execution skills and a broader understanding of how technology can be applied to solve meaningful business problems.';
  const p4Lines = doc.splitTextToSize(p4, contentWidth);
  doc.text(p4Lines, leftMargin, curY);
  curY += p4Lines.length * 4.2 + 3.5;

  const p5 =
    'The product also incorporated AI and machine-learning-based capabilities for creative evaluation, including AI-assisted generation of brand guidelines and creative scoring based on brand compliance and advertising performance. Working on these capabilities gave Aryan exposure to the practical application of intelligent systems in a real-world product environment and demonstrated his ability to engage with technically and conceptually challenging problems.';
  const p5Lines = doc.splitTextToSize(p5, contentWidth);
  doc.text(p5Lines, leftMargin, curY);
  curY += p5Lines.length * 4.2 + 3.5;

  const p6 =
    "One of Aryan's strongest qualities is his willingness to learn and go beyond the immediate requirements of an assignment. He consistently sought to understand not only how a solution should be implemented, but also why a particular problem mattered and how different components contributed to the overall product. This combination of curiosity and execution allowed him to make meaningful contributions despite working in a very small team.";
  const p6Lines = doc.splitTextToSize(p6, contentWidth);
  doc.text(p6Lines, leftMargin, curY);
  curY += p6Lines.length * 4.2 + 3.5;

  const p7 =
    'Aryan also demonstrated a strong sense of accountability. Given the size of the team, there was little room for narrowly defined responsibilities or dependence on extensive supervision. He was able to work independently, make progress in ambiguous situations, identify problems proactively, and take responsibility for delivering outcomes. I found this level of ownership particularly impressive for someone at his stage of professional development.';
  const p7Lines = doc.splitTextToSize(p7, contentWidth);
  doc.text(p7Lines, leftMargin, curY);
  curY += p7Lines.length * 4.2 + 3.5;

  const p8 =
    'Beyond his technical contributions, Aryan was a thoughtful and dependable colleague. He communicated effectively, was receptive to feedback, and worked constructively through challenging situations. Over the course of our association, I observed him become increasingly confident and independent in his approach to problem-solving and decision-making.';
  const p8Lines = doc.splitTextToSize(p8, contentWidth);
  doc.text(p8Lines, leftMargin, curY);

  drawFooter();

  // --- PAGE 2 ---
  doc.addPage();
  drawHeader(2);

  let p2Y = 42;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 30, 30);

  const p9 =
    'In my assessment, Aryan possesses a strong combination of intellectual curiosity, analytical ability, technical aptitude, initiative, adaptability, and integrity. His experience building a product in a highly lean environment has given him valuable exposure to both the technical and practical dimensions of solving complex problems.';
  const p9Lines = doc.splitTextToSize(p9, contentWidth);
  doc.text(p9Lines, leftMargin, p2Y);
  p2Y += p9Lines.length * 4.2 + 4.5;

  const p10 =
    "I believe that pursuing a master's degree will provide Aryan with an opportunity to further develop his technical knowledge and analytical capabilities. Given his demonstrated ability to learn quickly, work independently, and take on challenging problems, I am confident that he will approach his academic pursuits with the same curiosity, discipline, and sense of ownership that he demonstrated during his time at Sprinklr.";
  const p10Lines = doc.splitTextToSize(p10, contentWidth);
  doc.text(p10Lines, leftMargin, p2Y);
  p2Y += p10Lines.length * 4.2 + 4.5;

  const p11 =
    'I am pleased to recommend Aryan Sehgal for further academic study and wish him every success in his future academic and professional endeavors. Should any further information be required regarding his qualifications or professional experience, I would be pleased to provide it.';
  const p11Lines = doc.splitTextToSize(p11, contentWidth);
  doc.text(p11Lines, leftMargin, p2Y);
  p2Y += p11Lines.length * 4.2 + 8;

  doc.setFont('helvetica', 'bold');
  doc.text('Sincerely,', leftMargin, p2Y);
  p2Y += 5;

  // DocuSign Signature Box
  const boxWidth = 52;
  const boxHeight = 18;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.3);
  doc.rect(leftMargin, p2Y, boxWidth, boxHeight);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.text('DocuSigned by:', leftMargin + 2, p2Y + 3.5);

  // Handwritten cursive signature rendering for Mayank
  doc.setFont('times', 'italic');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text('Mayank', leftMargin + 8, p2Y + 11.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6);
  doc.setTextColor(80, 80, 80);
  doc.text('4DB6711F21304E5...', leftMargin + 2, p2Y + 16.5);

  p2Y += boxHeight + 4;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Mayank Hinger', leftMargin, p2Y);
  p2Y += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text('Vice President of Engineering', leftMargin, p2Y);
  p2Y += 4;
  doc.text('Email: mayank.hinger@sprinklr.com', leftMargin, p2Y);
  p2Y += 4;
  doc.text('Contact: +91 70427 72733', leftMargin, p2Y);

  drawFooter();

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(path.join(publicDir, 'Sprinklr_LoR.pdf'), buffer);
  // Also create alias for convenience
  fs.writeFileSync(path.join(publicDir, 'Aryan_Sehgal_LoR.pdf'), buffer);
  console.log('Created Sprinklr_LoR.pdf');
}

// -------------------------------------------------------------
// 2. GENERATE OFFICIAL ARYAN SEHGAL RESUME PDF (3 PAGES)
// -------------------------------------------------------------
function generateResumePdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const leftMargin = 16;
  const rightMargin = 16;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  function sectionHeader(title, y) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    doc.text(title, leftMargin, y);
    doc.setDrawColor(40, 40, 40);
    doc.setLineWidth(0.4);
    doc.line(leftMargin, y + 1.2, pageWidth - rightMargin, y + 1.2);
    return y + 5.5;
  }

  // --- RESUME PAGE 1 ---
  let curY = 16;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text('ARYAN SEHGAL', pageWidth / 2, curY, { align: 'center' });
  curY += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  doc.text('SOFTWARE ENGINEER — FRONTEND & APPLIED AI/ML', pageWidth / 2, curY, { align: 'center' });
  curY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(50, 50, 50);
  const contactText =
    'aryansehgal.online  |  aryansehgal@aol.in  |  +91 9873569756  |  github.com/AryanSehgal  |  linkedin.com/in/aryansehgal2001';
  doc.text(contactText, pageWidth / 2, curY, { align: 'center' });
  curY += 6;

  // PROFESSIONAL PROFILE
  curY = sectionHeader('PROFESSIONAL PROFILE', curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(30, 30, 30);
  const profileText =
    'Software engineer with 2+ years of experience building high-performance, accessible web products, and a B.Tech in Computer Science & Engineering (Artificial Intelligence). At Sprinklr, worked as one of two core engineers building the Ads Creative Management application end-to-end — a lean-team environment that, alongside primary frontend ownership, gave direct exposure to backend services and AI-agent API integrations behind the product\'s AI-assisted brand-guideline generation and creative-scoring features. Since leaving Sprinklr, has pursued self-directed, in-depth AI/ML study — workshops, primary research papers, and reproducible public projects spanning generative modelling, on-device NLP, and classical machine learning — including training a custom GAN from published research through to a deployed inference service. Seeking an MSc in Artificial Intelligence to build rigorous theoretical and research foundations alongside this applied engineering experience.';
  const profileLines = doc.splitTextToSize(profileText, contentWidth);
  doc.text(profileLines, leftMargin, curY);
  curY += profileLines.length * 3.7 + 4;

  // EDUCATION
  curY = sectionHeader('EDUCATION', curY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(20, 20, 20);
  doc.text('Netaji Subhas University of Technology', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('Jul 2019 – May 2023', pageWidth - rightMargin, curY, { align: 'right' });
  curY += 3.8;

  doc.text('B.Tech, Computer Science & Engineering (Artificial Intelligence)  |  CGPA: 8.69 / 10', leftMargin, curY);
  curY += 4.5;

  doc.text('Class XII, Central Board of Secondary Education (CBSE) — Presidium, New Delhi  |  90%  |  2019', leftMargin, curY);
  curY += 3.8;
  doc.text('Class X (CBSE) — DAV Centenary Public School, New Delhi  |  CGPA: 10/10  |  2017', leftMargin, curY);
  curY += 5;

  // PROFESSIONAL EXPERIENCE
  curY = sectionHeader('PROFESSIONAL EXPERIENCE', curY);

  // Job 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Independent Software Engineer & ML Developer', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('|  Freelance Projects & Continuing Study', leftMargin + 67, curY);
  doc.text('Sep 2025 – Present', pageWidth - rightMargin, curY, { align: 'right' });
  curY += 3.8;

  const job1Bullets = [
    'Design, build, and deploy end-to-end web and AI applications; maintain a public GitHub portfolio of product prototypes and reproducible Jupyter case studies.',
    'Deepen machine-learning foundations through workshops, tutorials, and primary research papers; apply the learning to generative modelling, on-device inference, and classical ML techniques across the projects below.',
  ];
  job1Bullets.forEach((bullet) => {
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.2;
  });
  curY += 1.5;

  // Job 2 (Sprinklr)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Senior Product Engineer', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('|  Sprinklr', leftMargin + 37, curY);
  doc.text('Jul 2023 – Sep 2025', pageWidth - rightMargin, curY, { align: 'right' });
  curY += 3.8;

  const job2Bullets = [
    "One of two core engineers building Sprinklr's Ads Creative Management application from an early stage; owned frontend architecture end-to-end while also engaging with backend services and the AI-agent API integrations behind AI-assisted brand-guideline generation and creative-scoring capabilities.",
    'Revamped the Digital Asset Manager with server-side rendering, lazy loading, and code splitting, cutting page-load time by 35%; raised frontend test coverage to 95% with Jest and React Testing Library.',
    'Modernized a legacy React codebase from class-based to functional components and migrated client data management from Redux/REST to GraphQL with Apollo Client, reducing API response times by 40%.',
    'Improved the mobile responsiveness and accessibility (WCAG) of the in-house Spaceweb Editor while reducing its bundle size by 25%; built a reusable Progress Steps component for the internal Hyperspace design system.',
  ];
  job2Bullets.forEach((bullet) => {
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.2;
  });
  curY += 1.5;

  // Job 3 (OYO)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Data Science Intern', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('|  OYO Rooms', leftMargin + 30, curY);
  doc.text('May 2022 – Jul 2022', pageWidth - rightMargin, curY, { align: 'right' });
  curY += 3.8;
  doc.text('•', leftMargin + 2, curY);
  const oyoLines = doc.splitTextToSize(
    'Cleaned, filtered, and preprocessed data; trained ML models for predictive analytics and built a web interface for data visualization.',
    contentWidth - 6
  );
  doc.text(oyoLines, leftMargin + 6, curY);
  curY += oyoLines.length * 3.6 + 2.5;

  // Job 4 (Coding Ninjas)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Teaching Assistant', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('|  Coding Ninjas', leftMargin + 30, curY);
  doc.text('Aug 2020 – Nov 2020', pageWidth - rightMargin, curY, { align: 'right' });
  curY += 3.8;
  doc.text('•', leftMargin + 2, curY);
  const cnLines = doc.splitTextToSize(
    'Mentored students through data structures, algorithms, and competitive-programming problem solving.',
    contentWidth - 6
  );
  doc.text(cnLines, leftMargin + 6, curY);
  curY += cnLines.length * 3.6 + 4;

  // SELECTED APPLIED AI & SOFTWARE PROJECTS (Page 1 start)
  curY = sectionHeader('SELECTED APPLIED AI & SOFTWARE PROJECTS', curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Public portfolio: github.com/AryanSehgal', leftMargin, curY);
  curY += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.text('Style-Guided Face-to-Anime Translation (StyleFAT) — Research to Production', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('| Python, TensorFlow/Keras, PyTorch, tf2onnx, ONNX Runtime, Node.js, React, TypeScript', leftMargin + 95, curY);

  // --- RESUME PAGE 2 ---
  doc.addPage();
  curY = 16;

  const styleFatBullets = [
    'Independent generative-AI research project: studied GAN and image-to-image translation literature (CycleGAN-adjacent work, DRIT++, EGSC-IT, AniGAN, StarGAN), then designed, implemented, and trained a custom GAN from scratch to translate photographic portraits into anime-style faces.',
    'Converted the trained model (HDF5) to ONNX with tf2onnx and integrated it into a full-stack web application (React/TypeScript frontend, Node.js/Express backend, ONNX Runtime CPU inference) with interactive before/after comparison. Live demo',
  ];
  styleFatBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.5;
  });
  curY += 2;

  // Project 2 (Edge AI Note Studio)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Edge AI Screen & Audio Note Studio', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('| React 19, TypeScript, Vite, Transformers.js, ONNX Runtime Web, Web Workers, IndexedDB', leftMargin + 53, curY);
  curY += 3.8;

  const edgeBullets = [
    'Built a 100% client-side note-taking studio: on-device Whisper (ONNX, WebGPU with WASM fallback) transcribes recorded or uploaded audio, and an on-device FLAN-T5 model drafts titles, summaries, and action items — zero external AI API calls, zero backend, Lighthouse Performance score of 100.',
    'Live: edge-ai-note-studio.vercel.app',
  ];
  edgeBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.5;
  });
  curY += 2;

  // Project 3 (Chroma)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Chroma — Black-and-White Image Colorization', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('| React, TypeScript, FastAPI, OpenCV (pretrained model)', leftMargin + 67, curY);
  curY += 3.8;

  const chromaBullets = [
    'Full-stack photo studio that applies a pretrained deep-learning colorization model on a dedicated backend; supports batch upload, adjustable color intensity, before/after comparison, and individual or ZIP downloads. Live demo',
  ];
  chromaBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.5;
  });
  curY += 2;

  // Project 4 (Forma UI)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Forma UI & Forma Visual Page Builder', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('| React 19, TypeScript, Radix primitives, Tailwind CSS, npm', leftMargin + 56, curY);
  curY += 3.8;

  const formaBullets = [
    'Authored and published Forma UI, a 16-component accessible React design-system package (@aryan_sehgal/forma-ui) with semantic theming tokens, an interactive documentation site, and a CI/CD pipeline that auto-publishes releases to npm. Playground',
    'Used the library to build a drag-and-drop visual landing-page builder — 10 content blocks, responsive desktop/tablet/mobile artboards, undo/redo history, and static-site export. Live demo',
  ];
  formaBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.5;
  });
  curY += 2;

  // Project 5 (Machine Learning Case Studies)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('Machine Learning Case Studies (Self-Study)', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text('| Python, pandas, scikit-learn, XGBoost, LightGBM, statsmodels, Jupyter', leftMargin + 62, curY);
  curY += 3.8;

  const mlBullets = [
    'IPL Match Analytics (2008–2024): cleaned and feature-engineered 1,095 matches across 20 features; built K-Means team-performance clustering, logistic regression, KNN, and a decision-tree toss-strategy model, then compared Random Forest, AdaBoost, XGBoost, and a Voting Ensemble for match-outcome prediction — finding that the toss itself had virtually no bearing on the result (won by only 50.6% of toss winners).',
    'E-commerce Marketing & Sales Analysis: merged five transactional and marketing data sources into a unified dataset; performed RFM-based and K-Means customer segmentation, cohort/retention analysis, and marketing-spend correlation analysis, translating findings into strategic recommendations on personalization, retention, and channel investment.',
    'Additional case studies applying the classical ML toolkit end-to-end: vehicle CO2-emissions prediction (linear/polynomial regression, VIF-based multicollinearity reduction, permutation importance; R2 ≈ 0.98); time-series forecasting (ARIMA/SARIMA/SARIMAX, exponential smoothing, Prophet); clustering (K-Means, Hierarchical, GMM, DBSCAN); anomaly detection (IQR, Elliptical Envelope, Isolation Forest, LOF); ensemble learning (Random Forest, GBDT, XGBoost, LightGBM); Naive Bayes text classification; and recommender systems (collaborative filtering & SGD-based matrix factorization).',
  ];
  mlBullets.forEach((bullet) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    const bLines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(bLines, leftMargin + 6, curY);
    curY += bLines.length * 3.6 + 1.5;
  });
  curY += 3;

  // TECHNICAL SKILLS
  curY = sectionHeader('TECHNICAL SKILLS', curY);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('Languages:', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('Python, TypeScript, JavaScript (ES6+), SQL, C++, HTML5/CSS3', leftMargin + 18, curY);
  curY += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.text('AI, ML & Data:', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('TensorFlow/Keras, PyTorch, ONNX & ONNX Runtime, Transformers.js, OpenCV, scikit-learn, XGBoost, LightGBM, statsmodels, NumPy, pandas, Jupyter', leftMargin + 22, curY);
  curY += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.text('Frontend & Product Engineering:', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('React, Next.js, Redux/Redux Toolkit, GraphQL, Apollo Client, Tailwind CSS, Radix primitives, WCAG/ARIA accessibility, responsive design', leftMargin + 48, curY);
  curY += 4.2;

  doc.setFont('helvetica', 'bold');
  doc.text('Backend, Testing & Delivery:', leftMargin, curY);
  doc.setFont('helvetica', 'normal');
  doc.text('Node.js, Express, FastAPI, REST APIs, Web Workers, IndexedDB, Jest, React Testing Library, Git, GitHub Actions, Vercel, Netlify', leftMargin + 42, curY);
  curY += 5;

  // CERTIFICATIONS
  curY = sectionHeader('CERTIFICATIONS', curY);
  const certs = [
    'Front-End System Design — Frontend Masters (Sep 2025)',
    'Build an Epic React App — Kent C. Dodds, EpicReact.dev (Jul 2023)',
    'CSS for JavaScript Developers — Josh W. Comeau (Jul 2023)',
    'Certificate of Excellence, Data Structures in C++ — Coding Ninjas',
    'Certificate of Excellence, Python Programming — Coding Ninjas',
  ];
  certs.forEach((cert) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text('•', leftMargin + 2, curY);
    doc.text(cert, leftMargin + 6, curY);
    curY += 3.8;
  });

  // --- RESUME PAGE 3 ---
  doc.addPage();
  curY = 16;
  curY = sectionHeader('ACADEMIC ACHIEVEMENTS', curY);

  const achievements = [
    'All India Rank 1,912 in JEE Main and All India Rank 5,021 in JEE Advanced.',
    'Solved 750+ problems across competitive-programming platforms; earned 16 LeetCode badges.',
  ];
  achievements.forEach((ach) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.text('•', leftMargin + 2, curY);
    doc.text(ach, leftMargin + 6, curY);
    curY += 5;
  });

  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(path.join(publicDir, 'Aryan_Sehgal_Resume.pdf'), buffer);
  console.log('Created Aryan_Sehgal_Resume.pdf');
}

generateLorPdf();
generateResumePdf();
