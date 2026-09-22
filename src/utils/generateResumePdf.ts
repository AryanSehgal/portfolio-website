import { jsPDF } from 'jspdf';
import { PERSONAL_INFO } from '../data/portfolioData';

export function downloadResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = 16;

  const checkPageBreak = (neededHeight: number) => {
    if (cursorY + neededHeight > pageHeight - 16) {
      doc.addPage();
      cursorY = 16;
    }
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(12);
    cursorY += 2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59); // slate-800
    doc.text(title.toUpperCase(), margin, cursorY);
    cursorY += 2;
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(margin, cursorY, pageWidth - margin, cursorY);
    cursorY += 5;
  };

  // 1. Header Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, cursorY);
  cursorY += 5.5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(180, 83, 9); // amber-700
  doc.text(PERSONAL_INFO.title, margin, cursorY);
  cursorY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactText = `${PERSONAL_INFO.location}  |  ${PERSONAL_INFO.email}  |  ${PERSONAL_INFO.phone}`;
  doc.text(contactText, margin, cursorY);
  cursorY += 4;

  const linksText = `GitHub: github.com/AryanSehgal  |  LinkedIn: linkedin.com/in/aryansehgal2001  |  NPM: @aryan_sehgal/forma-ui`;
  doc.text(linksText, margin, cursorY);
  cursorY += 6;

  // 2. Executive Summary
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Applied AI & Full-Stack Systems Engineer (former Product Engineer at Sprinklr) with proven track record of architecting scalable enterprise platforms from the ground up in a 2-person core team. Published author of @aryan_sehgal/forma-ui on npm. Specialize in analyzing state-of-the-art machine learning literature, benchmarking models, and deploying production web systems using ONNX Runtime Web, WebGPU, React 19, and modern cloud architectures.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, cursorY);
  cursorY += summaryLines.length * 4 + 3;

  // 3. Education
  drawSectionHeader('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Netaji Subhas University of Technology (NSUT), New Delhi', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2019 – 2023', pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence Specialization)', margin, cursorY);
  cursorY += 4;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Cumulative Grade Point Average (CGPA): 8.69 / 10.00', margin, cursorY);
  cursorY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Class XII (Central Board of Secondary Education): 90%  |  Class X (Central Board of Secondary Education): Perfect 10 CGPA', margin, cursorY);
  cursorY += 6;

  // 4. Professional Experience
  drawSectionHeader('Professional Experience');

  // Role 1: Independent Engineering & Applied ML Development
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Independent Engineering & Applied ML Development', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('October 2025 – Present', pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(71, 85, 105);
  doc.text('Applied AI & Full-Stack Systems Engineer', margin, cursorY);
  cursorY += 4.5;

  const role1Bullets = [
    'Published @aryan_sehgal/forma-ui on npm: authored 16 accessible React primitives, automated axe-core accessibility testing suite, and zero-runtime CSS token architecture.',
    'Engineered Forma Visual Page Builder: low-code canvas with AST-driven code generation, exportable to clean HTML, React, and Tailwind CSS.',
    'Built Edge AI Note Studio: implemented client-side transformer model inference via ONNX Runtime Web and WebGPU (Whisper, Flan-T5, quantized semantic embeddings).',
    'Authored 8 empirical machine learning case studies analyzing SVD matrix factorization, hybrid recommendation algorithms, and ARIMA time-series forecasting.',
  ];

  role1Bullets.forEach((bullet) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('•', margin + 1, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(lines, margin + 5, cursorY);
    cursorY += lines.length * 3.8 + 1.2;
  });
  cursorY += 2;

  // Role 2: Sprinklr Senior Product Engineer
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Sprinklr — Senior Product Engineer', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('July 2023 – September 2025 | Gurugram, India', pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 4;
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(71, 85, 105);
  doc.text('Core 2-Person Engineering Team', margin, cursorY);
  cursorY += 4.5;

  const role2Bullets = [
    'One of two core engineers building Sprinklr Ads Creative Management platform from scratch, owning full architectural execution.',
    'Engineered AI-assisted creative evaluation: automated generation of brand guidelines and creative compliance scoring based on brand rules and ad performance.',
    'Revamped Digital Asset Manager to Server-Side Rendering (SSR), cutting page load latency by 35% and improving asset retrieval for enterprise customers.',
    'Elevated test coverage to 95% using React Testing Library and Jest; transitioned core data fetching to Apollo GraphQL, cutting API latency by 40%.',
    'Enforced strict WCAG 2.1 AAA accessibility standards across multi-tenant creative authoring workflows.',
    'Officially endorsed with highest honors via DocuSign Letter of Recommendation by Sprinklr VP of Engineering Mayank Hinger.',
  ];

  role2Bullets.forEach((bullet) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('•', margin + 1, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(lines, margin + 5, cursorY);
    cursorY += lines.length * 3.8 + 1.2;
  });
  cursorY += 2;

  // Role 3: OYO Rooms Data Science Intern
  checkPageBreak(18);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('OYO Rooms — Data Science Intern', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('May 2022 – July 2022 | Gurugram, India', pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 4.5;

  const role3Bullets = [
    'Engineered exploratory data analysis pipelines and predictive models in Python to analyze hospitality booking trends, occupancy rates, and seasonal travel demand.',
    'Built feature engineering workflows with Pandas and NumPy, benchmarking statistical heuristics against regression and gradient boosting models.',
    'Developed automated data visualization dashboards to surface revenue-optimization metrics and pricing sensitivity insights for business and operations teams.',
  ];

  role3Bullets.forEach((bullet) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('•', margin + 1, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(lines, margin + 5, cursorY);
    cursorY += lines.length * 3.8 + 1.2;
  });
  cursorY += 2;

  // Role 4: Coding Ninjas Teaching Assistant
  checkPageBreak(16);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Coding Ninjas — Teaching Assistant (Data Structures & Algorithms)', margin, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text('August 2020 – November 2020', pageWidth - margin, cursorY, { align: 'right' });
  cursorY += 4.5;

  const role4Bullets = [
    'Mentored 300+ students in advanced algorithms, dynamic programming, graph traversal, and tree formulations with a 4.9/5 instructor rating.',
  ];

  role4Bullets.forEach((bullet) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('•', margin + 1, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(bullet, contentWidth - 6);
    doc.text(lines, margin + 5, cursorY);
    cursorY += lines.length * 3.8 + 1.2;
  });
  cursorY += 3;

  // 5. Featured Projects
  drawSectionHeader('Key Engineering Projects');
  const projectItems = [
    {
      title: 'Forma UI Design System & Component Library (@aryan_sehgal/forma-ui on npm)',
      desc: 'Published accessible React component library featuring 16 component primitives, Radix UI foundations, custom CSS tokens (--f-*), Theme Studio, and automated axe-core accessibility validation suite.',
    },
    {
      title: 'Edge AI Note Studio (Client-Side WebGPU & ONNX Runtime Web)',
      desc: 'In-browser privacy-first voice recorder and note studio leveraging ONNX Runtime Web and WebGPU. Executes local Whisper ASR and Flan-T5 text summarization with sub-5ms latency and zero server-side telemetry.',
    },
    {
      title: 'Forma Visual Page Builder (AST Canvas Engine)',
      desc: 'Interactive canvas engine with real-time DOM tree manipulation, responsive multi-breakpoint visual editor, and instant clean static site ZIP export with zero runtime styling overhead.',
    },
    {
      title: 'Empirical Machine Learning Research Case Studies (8 Repositories)',
      desc: 'Conducted 8 empirical research case studies implementing mathematical formulations from literature: SVD collaborative filtering, SARIMAX time-series, Siamese metric learning, and high-dimensional PCA/t-SNE manifold projections.',
    },
  ];

  projectItems.forEach((p) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(p.title, margin, cursorY);
    cursorY += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(p.desc, contentWidth);
    doc.text(lines, margin, cursorY);
    cursorY += lines.length * 3.6 + 2;
  });
  cursorY += 2;

  // 6. Honors & Achievements
  drawSectionHeader('Honors & Competitive Achievements');
  const achievements = [
    'JEE Mains 2019: All India Rank 1912 (Top 0.15% nationally among 1,200,000+ candidates).',
    'JEE Advanced 2019: All India Rank 5021 (Top 0.5% nationally among top qualified applicants).',
    'CBSE Academic Excellence: 90% in Class XII and Perfect 10 CGPA in Class X (Central Board of Secondary Education).',
    'LeetCode Competitive Problem Solving: 450+ solved algorithmic problems, 16 badges, top tier proficiency.',
    'Open Source Contribution: Published npm package @aryan_sehgal/forma-ui with complete token system & tests.',
    'Official Executive Endorsement: DocuSign-verified letter of recommendation by Sprinklr VP Mayank Hinger.',
  ];

  achievements.forEach((ach) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('•', margin + 1, cursorY);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const lines = doc.splitTextToSize(ach, contentWidth - 6);
    doc.text(lines, margin + 5, cursorY);
    cursorY += lines.length * 3.8 + 1.2;
  });
  cursorY += 3;

  // 7. Technical Skills
  drawSectionHeader('Technical Skills & Toolkit');
  const skills = [
    { label: 'Programming Languages', val: 'TypeScript, JavaScript (ES6+), Python, C++, SQL, HTML5, CSS3' },
    { label: 'Applied AI & ML', val: 'PyTorch, ONNX Runtime Web, WebGPU, Whisper, Transformers, SVD, ARIMA, Embeddings' },
    { label: 'Frontend & Systems', val: 'React 19, Next.js (SSR), Radix UI, Apollo GraphQL, Tailwind CSS, Webpack, Vite, Express' },
    { label: 'Quality & DevSecOps', val: 'Jest, React Testing Library, WCAG 2.1 AAA, Axe-Core, Git, Docker, CI/CD pipelines' },
  ];

  skills.forEach((sk) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${sk.label}: `, margin, cursorY);
    const labelWidth = doc.getTextWidth(`${sk.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const valLines = doc.splitTextToSize(sk.val, contentWidth - labelWidth);
    doc.text(valLines, margin + labelWidth, cursorY);
    cursorY += valLines.length * 4 + 1;
  });

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Aryan Sehgal — Applied AI & Full-Stack Systems Engineer  |  Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  doc.save('Aryan_Sehgal_Resume.pdf');
}
