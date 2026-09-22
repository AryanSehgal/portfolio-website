import { Project, CaseStudy, Experience, Recommendation, Achievement, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Aryan Sehgal',
  title: 'Applied AI & Full-Stack Systems Engineer',
  roleTagline: 'Ex-Sprinklr Senior Product Engineer • Author of @aryan_sehgal/forma-ui',
  location: 'New Delhi, India',
  email: 'aryansehgal@aol.in',
  secondaryEmail: 'aryansehgal@gmail.com',
  phone: '+91 9873569756',
  github: 'https://github.com/AryanSehgal',
  linkedin: 'https://www.linkedin.com/in/aryansehgal2001/',
  leetcode: 'https://leetcode.com/aryansehgal/',
  formaDocs: 'https://forma-design-system-docs.vercel.app',
  formaNpm: 'https://www.npmjs.com/package/@aryan_sehgal/forma-ui',
  bioStatement: `Former Senior Product Engineer at Sprinklr where I built the enterprise Ads Creative Management platform from the ground up in a 2-person core team. Author of @aryan_sehgal/forma-ui on npm. I specialize in taking state-of-the-art machine learning models from research literature and integrating them into high-performance, accessible, production-ready web products using ONNX Runtime, WebGPU, and modern full-stack architectures.`
};

export const RECOMMENDATION_DATA: Recommendation = {
  author: 'Mayank Hinger',
  title: 'Vice President of Engineering',
  company: 'Sprinklr India Private Limited',
  email: 'mayank.hinger@sprinklr.com',
  phone: '+91 70427 72733',
  docusignId: '89793F20-91DA-85A2-8002-38AF6C63CE91',
  relationship: 'Direct Engineering Manager & VP of Engineering',
  executiveSummary: 'Mayank directly managed Aryan on the Ads Creative Management solution at Sprinklr, endorsing his technical persistence, analytical ability to turn open-ended problems into practical product architectures, and capacity to operate in a lean 2-person core team.',
  highlightQuotes: [
    'Aryan distinguished himself through his ability to take ownership of complex and relatively open-ended problems and turn them into practical, well-structured product solutions.',
    'Aryan was one of the two core members working on this initiative and was responsible for building a substantial portion of the product from the ground up.',
    'The product also incorporated AI and machine-learning-based capabilities for creative evaluation, including AI-assisted generation of brand guidelines and creative scoring based on brand compliance and advertising performance.',
    'In my assessment, Aryan possesses a strong combination of intellectual curiosity, analytical ability, technical aptitude, initiative, adaptability, and integrity.'
  ],
  fullLetterParagraphs: [
    'To Whom It May Concern,',
    'I am pleased to recommend Aryan Sehgal, whom I had the opportunity to directly manage during his tenure at Sprinklr. As the Vice President of Engineering at Sprinklr, I worked closely with Aryan and had the opportunity to observe his technical capabilities, problem-solving approach, sense of ownership, and professional growth.',
    'Aryan distinguished himself through his ability to take ownership of complex and relatively open-ended problems and turn them into practical, well-structured product solutions. He demonstrated a strong combination of technical ability, analytical thinking, initiative, and persistence, and was particularly effective in situations that required him to operate with a high degree of independence.',
    'A particularly significant example of Aryan’s work was his contribution to Sprinklr’s Ads Creative Management solution. The product was designed to help organizations improve creative efficiency by reducing media production costs, ensuring compliance with brand and channel guidelines, and enabling more effective discovery and reuse of existing creative assets. Aryan was one of the two core members working on this initiative and was responsible for building a substantial portion of the product from the ground up.',
    'Working in such a lean team required Aryan to take ownership across multiple aspects of the product rather than focusing narrowly on an individual component. He was required to understand the underlying problem, translate requirements into product functionality, make sound technical decisions, and work through challenges independently. His ability to take a product from an early stage to a functioning solution demonstrated both strong execution skills and a broader understanding of how technology can be applied to solve meaningful business problems.',
    'The product also incorporated AI and machine-learning-based capabilities for creative evaluation, including AI-assisted generation of brand guidelines and creative scoring based on brand compliance and advertising performance. Working on these capabilities gave Aryan exposure to the practical application of intelligent systems in a real-world product environment and demonstrated his ability to engage with technically and conceptually challenging problems.',
    'One of Aryan’s strongest qualities is his willingness to learn and go beyond the immediate requirements of an assignment. He consistently sought to understand not only how a solution should be implemented, but also why a particular problem mattered and how different components contributed to the overall product. This combination of curiosity and execution allowed him to make meaningful contributions despite working in a very small team.',
    'Aryan also demonstrated a strong sense of accountability. Given the size of the team, there was little room for narrowly defined responsibilities or dependence on extensive supervision. He was able to work independently, make progress in ambiguous situations, identify problems proactively, and take responsibility for delivering outcomes. I found this level of ownership particularly impressive for someone at his stage of professional development.',
    'Beyond his technical contributions, Aryan was a thoughtful and dependable colleague. He communicated effectively, was receptive to feedback, and worked constructively through challenging situations. Over the course of our association, I observed him become increasingly confident and independent in his approach to problem-solving and decision-making.',
    'In my assessment, Aryan possesses a strong combination of intellectual curiosity, analytical ability, technical aptitude, initiative, adaptability, and integrity. His experience building a product in a highly lean environment has given him valuable exposure to both the technical and practical dimensions of solving complex problems.',
    'I believe that pursuing a master’s degree will provide Aryan with an opportunity to further develop his technical knowledge and analytical capabilities. Given his demonstrated ability to learn quickly, work independently, and take on challenging problems, I am confident that he will approach his academic pursuits with the same curiosity, discipline, and sense of ownership that he demonstrated during his time at Sprinklr.',
    'I am pleased to recommend Aryan Sehgal for further academic study and wish him every success in his future academic and professional endeavors. Should any further information be required regarding his qualifications or professional experience, I would be pleased to provide it.'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance-ai',
    role: 'Applied AI & Full-Stack Systems Engineer',
    company: 'Independent Engineering & Applied ML Development',
    location: 'Remote',
    period: 'October 2025 - Present',
    isCurrent: true,
    summary: 'Delivering full-stack client applications with AI integrations, building open-source developer tooling, and implementing machine learning case studies from research literature.',
    bullets: [
      'Published @aryan_sehgal/forma-ui to npm — a 16-component accessible React component library with Radix primitives, custom CSS tokens, live documentation, and axe-core validation.',
      'Architected Forma Visual Page Builder, a low-code canvas engine with AST serialization, multi-device viewports, and zero-runtime-overhead static website export.',
      'Developed Edge AI Note Studio: deployed browser-based speech-to-text and automatic summarization leveraging ONNX Runtime Web, Whisper, and flan-t5-small with WebGPU acceleration and zero server dependencies.',
      'Conducted 11 empirical machine learning and deep learning case studies analyzing mathematical foundations, loss formulations, and performance trade-offs across classification metrics, clustering, time-series, sequential music generation, anomaly detection, metric learning, and recommendation algorithms.'
    ],
    technologies: ['React 19', 'TypeScript', 'ONNX Runtime', 'WebGPU', 'Tailwind CSS', 'Radix Primitives', 'PyTorch', 'Python', 'Jupyter'],
    verifiedImpact: [
      'Published npm package @aryan_sehgal/forma-ui with 16 accessible UI primitives',
      'Engineered sub-5ms on-device vector and speech inference pipeline',
      'Completed 11 rigorous empirical machine learning case study repositories'
    ]
  },
  {
    id: 'sprinklr',
    role: 'Senior Product Engineer',
    company: 'Sprinklr',
    location: 'Gurgaon, India',
    period: 'July 2023 - September 2025',
    summary: 'Core engineer in a lean 2-person team responsible for architecting and shipping the enterprise Ads Creative Management platform from scratch to global Fortune 500 customers.',
    bullets: [
      'Built a substantial portion of the enterprise Ads Creative Management solution from the ground up as one of only two core engineers on the product team.',
      'Integrated AI-assisted creative evaluation mechanisms, including automated brand guideline rule generation and creative scoring based on channel compliance and expected ad conversion performance.',
      'Engineered a high-performance Digital Asset Management (DAM) module with server-side rendering (SSR), virtualized media lists, and Apollo GraphQL normalized caching, cutting initial page load times by 35% and API latency by 40%.',
      'Authored comprehensive unit, integration, and E2E test suites with Jest and React Testing Library, upholding 95% test coverage and zero critical production regressions.',
      'Instituted WCAG 2.1 AAA accessibility standards across all creative modules, ensuring seamless keyboard navigation and screen-reader compliance for global enterprise users.'
    ],
    technologies: ['React.js', 'Next.js (SSR)', 'TypeScript', 'GraphQL', 'Apollo Client', 'Jest', 'React Testing Library', 'AI Scoring Engine', 'WCAG AAA'],
    verifiedImpact: [
      '35% reduction in digital asset catalog page load time via SSR and layout optimization',
      '40% reduction in GraphQL API fetch latency using normalized client cache policies',
      '95% sustained test coverage across all shipped frontend modules',
      'Endorsed by VP of Engineering Mayank Hinger via formal Letter of Recommendation'
    ],
    docsLinks: [
      {
        title: 'Sprinklr Ads Creative Management Documentation',
        url: 'https://www.sprinklr.com/help/articles/creative-management/ads-creative-management-overview/'
      }
    ]
  },
  {
    id: 'oyo-rooms',
    role: 'Data Science Intern',
    company: 'OYO Rooms',
    location: 'Gurgaon, India',
    period: 'May 2022 - July 2022',
    summary: 'Data science internship focusing on exploratory data analysis, dynamic pricing analytics, and demand forecasting models on large-scale hospitality booking datasets.',
    bullets: [
      'Engineered predictive models and exploratory data analysis pipelines in Python to analyze booking trends, occupancy rates, and seasonal travel demand.',
      'Built feature engineering workflows with Pandas and NumPy, benchmarking statistical heuristics against regression and gradient boosting models.',
      'Developed automated data visualization dashboards to surface revenue-optimization metrics and pricing sensitivity insights for business and operations teams.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Exploratory Data Analysis', 'Statistical Modeling'],
    verifiedImpact: [
      'Developed automated exploratory data pipelines processing large-scale booking records',
      'Surfaced dynamic pricing elasticity patterns across core travel market segments',
      'Contributed statistical forecasting heuristics for seasonal occupancy optimization'
    ]
  },
  {
    id: 'coding-ninjas',
    role: 'Teaching Assistant',
    company: 'Coding Ninjas',
    location: 'New Delhi, India',
    period: 'August 2020 - November 2020',
    summary: 'Mentored over 300+ students in Data Structures, Algorithms, Dynamic Programming, and Graph Theory.',
    bullets: [
      'Conducted 1-on-1 code reviews and technical debug sessions on complex algorithmic challenges (graphs, trees, DP, memoization).',
      'Authored reference algorithmic solutions with asymptotic runtime and space complexity proofs.'
    ],
    technologies: ['C++', 'Data Structures', 'Algorithms', 'Time Complexity Analysis'],
    verifiedImpact: [
      'Mentored 300+ students across foundational and advanced algorithms courses',
      'Maintained 4.9/5 student rating on code debugging and complexity analysis sessions'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'forma-design-system',
    title: 'Forma UI Design System',
    subtitle: 'Accessible React Component Library Published on NPM with Live Playground',
    category: 'systems',
    featured: true,
    description: 'A reusable React component library and companion documentation playground built by Aryan Sehgal. Features 16 accessible component families, Radix primitives, custom CSS tokens, Theme Studio, and an Accessibility Lab with automated axe-core validation.',
    keyHighlights: [
      'Published on npm as @aryan_sehgal/forma-ui with React 19 support and zero runtime styling overhead',
      '16 component families: Button, Input/Field, Textarea, Checkbox, Switch, Select, Badge, Avatar, Progress, Skeleton, Card, Separator, Tabs, Dialog, Accordion, and Tooltip',
      'Semantic --f-* CSS custom property token namespace supporting scoped dark/light theming via data-f-theme',
      'Interactive Accessibility Lab featuring contrast ratio calculations, keyboard navigation exercises, and visible axe-core automated audit results',
      'Command/Ctrl+K searchable documentation, theme studio with exportable palettes, and serializable component registry'
    ],
    metrics: [
      { label: 'NPM Package', value: '@aryan_sehgal/forma-ui' },
      { label: 'Components', value: '16 Primitives' },
      { label: 'Axe-core Violations', value: '0' },
      { label: 'Theme Tokens', value: 'Semantic --f-*' }
    ],
    tags: ['React 19', 'TypeScript', 'NPM Package', 'Radix UI', 'Design System', 'Accessibility', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://forma-design-system-docs.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/forma-design-system',
    docsUrl: 'https://www.npmjs.com/package/@aryan_sehgal/forma-ui',
    architectureDetails: {
      modelOrStack: 'React 19, TypeScript, Radix Primitives, CSS Custom Properties, Next.js Docs, Axe-core',
      keyChallenge: 'Creating unstyled-yet-beautiful accessible UI components that work seamlessly across both SSR and client apps without enforcing heavy CSS-in-JS dependencies.',
      solution: 'Used headless Radix primitives for keyboard behavior and ARIA roles, layered with a semantic --f-* token system and scoped data-f-theme attributes.',
      performanceImpact: 'Zero external styling bundle weight, 100/100 Lighthouse accessibility, and instant adoption in production web applications.'
    }
  },
  {
    id: 'edge-ai-note-studio',
    title: 'Edge AI Note Studio',
    subtitle: 'Zero-Latency Private On-Device Speech Recognition & Note Studio',
    category: 'ai-vision',
    featured: true,
    description: 'A 100% on-device intelligent audio studio that transcribes speech and generates automated titles, summaries, and key notes entirely inside the browser using WebGPU, Web Workers, and ONNX Runtime Web. Zero cloud API calls, zero server telemetry.',
    keyHighlights: [
      'On-device Whisper Automatic Speech Recognition (onnx-community/whisper-tiny.en & whisper-base.en) via ONNX Runtime Web',
      'On-device text2text generation using Xenova/flan-t5-small for automatic titles, summaries, and key points',
      'Hardware-accelerated WebGPU-first execution with transparent WASM CPU fallback for universal browser support',
      'Zero-copy audio resampling pipeline to 16 kHz mono PCM transferred to background Web Workers off the main thread',
      'Interactive wavesurfer.js 7 waveform scrubber, real-time screen/tab/mic audio capture, and local IndexedDB session storage'
    ],
    metrics: [
      { label: 'Server Dependency', value: '0% (On-Device)' },
      { label: 'ASR Models', value: 'Whisper Tiny & Base' },
      { label: 'LLM Model', value: 'flan-t5-small' },
      { label: 'Execution', value: 'WebGPU / WASM' }
    ],
    tags: ['Transformers.js', 'ONNX Runtime Web', 'WebGPU', 'Whisper', 'Flan-T5', 'Web Workers', 'React 19', 'IndexedDB'],
    liveUrl: 'https://edge-ai-note-studio.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/edge-ai-note-studio',
    architectureDetails: {
      modelOrStack: 'React 19, Vite 8, @huggingface/transformers 4.3, ONNX Runtime Web (WebGPU/WASM), wavesurfer.js 7, IndexedDB',
      keyChallenge: 'Executing multi-model inference (Whisper ASR + Flan-T5 text generation) in browser tabs without freezing the 60 FPS user interface.',
      solution: 'Decoupled audio resampling, transcription, and text generation into isolated Web Workers communicating via non-blocking zero-copy ArrayBuffers.',
      performanceImpact: 'Sub-second streaming segment latency on WebGPU, infinite offline capability, and complete user audio privacy.'
    }
  },
  {
    id: 'forma-visual-page-builder',
    title: 'Forma Visual Page Builder',
    subtitle: 'Schema-Driven Low-Code Canvas Engine Powered by @aryan_sehgal/forma-ui',
    category: 'systems',
    featured: true,
    description: 'An extensible low-code page builder designed to showcase the real-world utility of Forma UI. Features multi-device canvas viewports (desktop, tablet, mobile), hierarchical layer management, configurable button actions, and instant static site ZIP export.',
    keyHighlights: [
      'Built entirely with @aryan_sehgal/forma-ui components (Button, Card, Badge, Avatar, Input, Accordion)',
      'Multi-breakpoint responsive artboard canvas (Desktop 1200px, Tablet 768px, Mobile 375px) with independent layout controls',
      'Configurable button action runtime: smooth-scroll, modal dialogs, animated toasts, email drafts, and file downloads',
      'Standalone static website ZIP export generating clean semantic index.html, styles.css, script.js, and deployment guides',
      'Immutable undo/redo history stacks and local storage persistence for uninterrupted editing'
    ],
    metrics: [
      { label: 'Component Library', value: 'Forma UI' },
      { label: 'Breakpoints', value: '3 Artboards' },
      { label: 'Export Format', value: 'Zero-Runtime ZIP' },
      { label: 'History Stack', value: '100 States' }
    ],
    tags: ['Forma UI', 'React 19', 'TypeScript', 'Vite', 'Low-Code', 'AST Engine', 'JSZip', 'Vercel'],
    liveUrl: 'https://forma-visual-page-builder.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/forma-visual-page-builder',
    architectureDetails: {
      modelOrStack: 'React 19, TypeScript, @aryan_sehgal/forma-ui, Tailwind CSS 4, JSZip, LocalStorage',
      keyChallenge: 'Bridging a visual drag-and-drop authoring tool with standard production design system tokens without proprietary runtime lock-in.',
      solution: 'Used Forma UI semantic --f-* CSS tokens to scope artboard styling, ensuring that exported static sites faithfully reproduce interactive builder preview states.',
      performanceImpact: 'Instant export of production-ready static bundles deployable to Vercel, Netlify, or GitHub Pages with zero build dependencies.'
    }
  },
  {
    id: 'style-guided-face-to-anime',
    title: 'Style-Guided Face-to-Anime Translation App',
    subtitle: 'End-to-End Image-to-Image GAN Translation Deployed with ONNX Runtime',
    category: 'ai-vision',
    featured: true,
    description: 'Production web application for stylized face-to-anime translation based on custom StyleFAT GAN research. The deep generative model is converted from TensorFlow/Keras to ONNX via tf2onnx, served with ONNX Runtime and Sharp, and deployed live on Vercel.',
    keyHighlights: [
      'Custom StyleFAT GAN architecture grounded in AniGAN, DRIT++, and EGSC-IT research papers for style disentanglement',
      'Converted from Keras HDF5 model weights to optimized ONNX computational graphs via tf2onnx',
      'Full-stack architecture: React/Vite client communicating with an Express/Node.js backend utilizing ONNX Runtime and Sharp',
      'Center-crop portrait preprocessing, tensor normalization, and client-side side-by-side comparison canvas'
    ],
    metrics: [
      { label: 'Model Artifact', value: 'StyleFAT_GAN.onnx' },
      { label: 'Tensor Shape', value: '512 x 512 x 3' },
      { label: 'Research Papers', value: 'AniGAN / DRIT++' },
      { label: 'Deployment', value: 'Vercel Serverless' }
    ],
    tags: ['ONNX Runtime', 'GANs', 'Computer Vision', 'PyTorch / Keras', 'Sharp', 'Express', 'React', 'Vercel'],
    liveUrl: 'https://style-guided-face-to-anime-translat-ten.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/style-guided-face-to-anime-translation-app',
    architectureDetails: {
      modelOrStack: 'React, Vite, Express, ONNX Runtime, Sharp, StyleFAT GAN (AniGAN/DRIT++ inspired)',
      keyChallenge: 'Bridging an academic deep learning model trained in Python/Keras into an efficient serverless web production environment.',
      solution: 'Exported graph to ONNX with pinned I/O tensor contracts, paired with Sharp for zero-copy memory image scaling and RGB normalization.',
      performanceImpact: 'End-to-end user photo upload, neural stylization, and canvas comparison rendering in under 1.5 seconds.'
    }
  },
  {
    id: 'sprinklr-creative-mgmt',
    title: 'Sprinklr Ads Creative Management App',
    subtitle: 'Enterprise Creative Production & Automated Brand Scoring Engine',
    category: 'enterprise',
    featured: true,
    description: 'Enterprise advertising creative governance suite architected in a lean 2-person core engineering team at Sprinklr. Incorporates AI-assisted brand guidelines generation and automated compliance scoring for global Fortune 500 brands.',
    keyHighlights: [
      'Architected in a 2-person core engineering team from initial wireframes to global enterprise rollout',
      'Integrated AI-assisted brand guideline generation & ad scoring models for creative compliance',
      'SSR Digital Asset Manager with 35% faster page load and 95% Jest/RTL test coverage',
      'Strict WCAG 2.1 AAA accessibility and Apollo GraphQL normalized caching with 40% latency reduction'
    ],
    metrics: [
      { label: 'Page Load', value: '-35%' },
      { label: 'API Latency', value: '-40%' },
      { label: 'Test Coverage', value: '95%' },
      { label: 'Team Size', value: '2 Core Engineers' }
    ],
    tags: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Apollo Cache', 'AI Agents', 'WCAG AAA', 'Jest'],
    docsUrl: 'https://www.sprinklr.com/help/articles/creative-management/ads-creative-management-overview/',
    architectureDetails: {
      modelOrStack: 'React 18, Next.js SSR, Apollo GraphQL, Sprinklr Hyperspace Design System, Jest/RTL',
      keyChallenge: 'Managing multi-gigabyte media asset catalogs with diverse cross-platform aspect ratios, multi-tenant brand rules, and high concurrent user demands.',
      solution: 'Implemented client-side normalized caching with Apollo, route-level chunk splitting, virtualized asset grids, and asynchronous AI scoring queues.',
      performanceImpact: 'Achieved 95% test coverage, slashed asset rendering latency by 35%, and enabled seamless multi-brand creative orchestration.'
    }
  },
  {
    id: 'colorization-bw-images',
    title: 'Colorization of Black & White Images',
    subtitle: 'Deep Convolutional Autoencoder in CIELAB Perceptual Color Space',
    category: 'ai-vision',
    featured: true,
    description: 'Computer vision system that infers chromatic distributions from monochrome images. Converts RGB to CIELAB, uses the L* luminance channel as input, and trains a convolutional autoencoder to predict a* and b* chromatic channels.',
    keyHighlights: [
      'CIELAB color space decoupling (L* lightness vs. a* green-red and b* blue-yellow channels)',
      'U-Net architecture with skip connections to preserve high-frequency edge details and prevent blurred contours',
      'Huber Loss / Smooth L1 loss formulation to avoid the desaturated sepia-mean regression trap of standard MSE',
      'Deployed live frontend interface communicating with deep learning inference backend'
    ],
    metrics: [
      { label: 'PSNR Score', value: '28.6 dB' },
      { label: 'SSIM Score', value: '0.91' },
      { label: 'Color Space', value: 'CIELAB (L*a*b*)' }
    ],
    tags: ['PyTorch', 'Autoencoder', 'U-Net', 'Image Processing', 'CIELAB', 'CNN', 'Python', 'React'],
    liveUrl: 'https://colorization-of-black-and-white-fro.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/colorization-of-black-and-white-frontend',
    architectureDetails: {
      modelOrStack: 'U-Net Deep Autoencoder, PyTorch, OpenCV, CIELAB representation, React frontend',
      keyChallenge: 'Standard MSE loss in RGB space causes models to output the dull arithmetic mean of all colors (brown/gray) when ambiguous surfaces appear.',
      solution: 'Decoupled illumination from color using CIELAB space, training exclusively on the chromatic a* and b* vectors with Smooth L1 loss.',
      performanceImpact: 'Vibrant, realistic chromatic restoration with 28.6 dB PSNR and crisp boundary preservation.'
    }
  },
  {
    id: 'ai-image-captioning-bot',
    title: 'A.I Image Captioning Web App',
    subtitle: 'Vision-Language Sequence Modeling with ResNet50 & Attention Decoder',
    category: 'ai-vision',
    featured: false,
    description: 'Multimodal vision-to-language model. Features an ImageNet pre-trained ResNet-50 convolutional backbone as visual encoder paired with an LSTM recurrent language decoder to generate natural language scene captions.',
    keyHighlights: [
      'Transfer learning from pre-trained ResNet-50 feature maps extracting dense spatial representations',
      'Teacher forcing training regime with cross-entropy token loss and beam search decoding',
      'BLEU-4 evaluation metric benchmarked against holdout test datasets',
      'Deployed React user interface connected to backend model inference service'
    ],
    metrics: [
      { label: 'BLEU-4 Score', value: '0.312' },
      { label: 'Backbone', value: 'ResNet-50' },
      { label: 'Vocabulary', value: '8,500 Tokens' }
    ],
    tags: ['TensorFlow', 'ResNet50', 'Computer Vision', 'NLP', 'Transfer Learning', 'Python', 'React'],
    liveUrl: 'https://image-caption-generator-frontend.vercel.app',
    githubUrl: 'https://github.com/AryanSehgal/image-caption-generator-frontend'
  },
  {
    id: 'framepick',
    title: 'Framepick',
    subtitle: 'Image-First React File Picker & Inspection Library with Live Playground',
    category: 'systems',
    featured: true,
    description: 'Reusable, accessible, image-first React component library (@aryansehgal/framepick) for selecting and inspecting image files. Ships with an interactive live playground demonstrating interaction states, validation rules, and integration APIs.',
    keyHighlights: [
      'Multi-image and single-image selection with native file input, drag events, thumbnail previews, dimensions, and native-dialog inspection',
      'Configurable count, byte-size, and decoded-pixel limits with MIME allowlist and magic byte file-signature checks',
      'Metadata-based duplicate detection, automatic Object URL memory management (revoked on unmount/removal), and serialized async batches',
      'Full keyboard operability, visible focus rings, ARIA live announcements, and focus restoration complying with accessibility standards'
    ],
    metrics: [
      { label: 'Package', value: '@aryansehgal/framepick' },
      { label: 'Supported Formats', value: 'JPEG, PNG, WebP, GIF, AVIF' },
      { label: 'Validation', value: 'Magic Bytes & Dimensions' },
      { label: 'Memory Safety', value: 'Auto URL.revokeObjectURL' }
    ],
    tags: ['React 19', 'TypeScript', 'Component Library', 'File API', 'Web APIs', 'Accessibility (a11y)', 'Netlify'],
    liveUrl: 'https://aryan-sehgal-framepick.netlify.app/',
    githubUrl: 'https://github.com/AryanSehgal/framepick',
    architectureDetails: {
      modelOrStack: 'React 18/19, TypeScript, Native File API, Drag and Drop API, HTML5 Dialog, Object URLs, Browser Image Decoder',
      keyChallenge: 'Creating a high-performance image selection and validation system in React without heavy third-party dependencies or memory leaks from orphaned Object URLs.',
      solution: 'Built clean internal state machines for batch ingestion, decoupled the reusable core library from the playground UI, enforced binary signature sniffing, and wrapped resource lifecycles with deterministic revocation hooks.',
      performanceImpact: 'Zero-overhead client-side image inspection, instant drag-and-drop response, and reliable memory safety on multi-megabyte image selections.'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'time-series-case-study',
    title: 'Empirical Time-Series Modeling & Forecasting',
    subtitle: 'Comparative Benchmark: ARIMA vs. SARIMAX vs. Prophet vs. Stacked LSTM',
    problemStatement: 'Evaluate forecasting accuracy, seasonality robustness, and inference latency across classical statistical formulations versus modern recurrent deep learning architectures on non-stationary, noisy financial and retail demand signals.',
    mathematicalFoundations: [
      'Augmented Dickey-Fuller (ADF) stationarity hypothesis testing (p < 0.05 rejection for unit roots)',
      'Box-Jenkins methodology: Autocorrelation (ACF) and Partial Autocorrelation (PACF) parameterization',
      'SARIMAX(p,d,q)(P,D,Q)s seasonal lag formulations with exogenous macroeconomic indicators',
      'LSTM cell state gradient highway: f_t = σ(W_f · [h_{t-1}, x_t] + b_f) solving vanishing gradients'
    ],
    algorithmsUsed: ['Auto-ARIMA', 'SARIMAX with Exogenous Regressors', 'Facebook Prophet', 'Stacked 2-Layer LSTM with Dropout'],
    metricsTable: [
      { metric: 'RMSE (Normalized)', score: '0.042', benchmark: 'Top performer: SARIMAX (exog)' },
      { metric: 'MAPE (Mean Abs % Err)', score: '4.18%', benchmark: 'Baseline: 9.60%' },
      { metric: 'Inference Latency', score: '1.2ms (Stat) vs 14ms (LSTM)', benchmark: 'Classical 10x faster' },
      { metric: 'Directional Accuracy', score: '78.4%', benchmark: 'Sign test statistically significant' }
    ],
    insights: [
      'For univariate signals with strong calendar seasonality, SARIMAX with exogenous regressors outperformed deep LSTM networks while requiring 1/50th of training compute.',
      'LSTM excels when nonlinear multi-sensor interactions and long-term sequential dependencies are present, but suffers from overfitting without recurrent dropout and rolling window validation.',
      'Stationarity transformation (first-order difference + Box-Cox variance stabilization) was the single highest determinant of model convergence across all algorithms.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/time-series-case-study',
    datasetSource: 'Kaggle Financial & Retail Store Demand Open Dataset'
  },
  {
    id: 'recommendation-systems-first-principles',
    title: 'Recommendation Systems from First Principles',
    subtitle: 'From Singular Value Decomposition (SVD) to Neural Collaborative Filtering (NCF)',
    problemStatement: 'Construct, analyze, and benchmark recommendation algorithms from raw linear algebra to deep neural networks, focusing on matrix sparsity, latent factor interpretability, cold-start mitigation, and ranking metrics beyond simple MSE.',
    mathematicalFoundations: [
      'Low-Rank Matrix Factorization: R ≈ U · V^T, minimizing min_{U,V} ∑ (r_{ui} - u_u^T v_i)^2 + λ(||u_u||^2 + ||v_i||^2)',
      'Truncated Singular Value Decomposition (SVD) with Alternating Least Squares (ALS) optimization',
      'Cosine similarity and Pearson correlation in normalized user-item rating manifolds',
      'Neural Collaborative Filtering (NCF): generalized matrix factorization (GMF) fused with multi-layer perceptron (MLP) non-linear interaction layers'
    ],
    algorithmsUsed: ['User-Based Collaborative Filtering', 'Item-Based Collaborative Filtering', 'Truncated SVD / ALS', 'Neural Collaborative Filtering (NCF)'],
    metricsTable: [
      { metric: 'RMSE on Test Split', score: '0.841', benchmark: 'Baseline heuristic: 1.052' },
      { metric: 'Hit Rate @ 10 (HR@10)', score: '0.738', benchmark: '+24% over Item-CF' },
      { metric: 'NDCG @ 10', score: '0.512', benchmark: 'Normalized Discounted Cumulative Gain' },
      { metric: 'Cold-Start Resilience', score: 'Hybrid NCF', benchmark: 'Combines implicit signals' }
    ],
    insights: [
      'Matrix Factorization through SVD significantly reduces computational complexity compared to memory-based K-NN collaborative filtering, eliminating runtime neighborhood scans.',
      'Neural Collaborative Filtering captures intricate higher-order user-item non-linearities, providing superior top-K recommendation rankings (NDCG@10) compared to dot-product formulations.',
      'Implicit feedback (clicks, dwell time, bookmarking) provides vastly denser training signals than explicit 1-5 star ratings, resulting in higher offline ranking fidelity.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/recommendation-systems-from-first-principles',
    datasetSource: 'MovieLens 100K & 1M Open Research Benchmarks'
  },
  {
    id: 'ecommerce-marketing-sales-case-study',
    title: 'E-Commerce Marketing & Customer Lifetime Intelligence',
    subtitle: 'RFM Clustering, Probabilistic CLV (BG/NBD & Gamma-Gamma), and Churn Risk Prediction',
    problemStatement: 'Design a probabilistic analytics pipeline that models transactional behavior, segments customer cohorts by commercial vitality, and predicts future monetary value and churn likelihood.',
    mathematicalFoundations: [
      'Recency, Frequency, Monetary (RFM) geometric scoring and K-Means spatial clustering with Silhouette validation',
      'Beta-Geometric/Negative Binomial Distribution (BG/NBD) modeling transaction frequency as a Poisson process with gamma heterogeneity',
      'Gamma-Gamma submodel for customer monetary transaction values conditional on active purchasing status',
      'Supervised gradient boosting (XGBoost) for binary churn risk classification with ROC-AUC optimization'
    ],
    algorithmsUsed: ['K-Means Clustering with Elbow & Silhouette analysis', 'BG/NBD Probabilistic Model', 'Gamma-Gamma Monetary Model', 'XGBoost & Random Forest Classifiers'],
    metricsTable: [
      { metric: 'ROC-AUC Churn Classifier', score: '0.894', benchmark: 'Baseline Logistic: 0.741' },
      { metric: 'CLV Monetary Error (MAE)', score: '$24.10', benchmark: 'Evaluated on 90-day forward holdout' },
      { metric: 'Silhouette Score', score: '0.58', benchmark: 'Optimal cluster count k=4' },
      { metric: 'High-Value Retention Recall', score: '91.2%', benchmark: 'Top 10% revenue cohort' }
    ],
    insights: [
      'Probabilistic models (BG/NBD) outperform heuristic linear regression for Customer Lifetime Value because they naturally account for the latent dropout process without arbitrary cutoff windows.',
      'RFM spatial segmentation identified a distinct 14% cohort ("Champions") responsible for 58% of cumulative business revenue.',
      'Feature importance analysis revealed that customer recency variance and average inter-purchase interval were 3x more predictive of churn than lifetime expenditure alone.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/e-commerce-marketing-and-sales-case-study',
    datasetSource: 'UCI Machine Learning Online Retail II Dataset'
  },
  {
    id: 'anomaly-detection-case-study',
    title: 'Anomaly Detection & Fraud Identification',
    subtitle: 'Unsupervised & Semi-Supervised Outlier Detection in High-Dimensional Manifolds',
    problemStatement: 'Detect highly rare fraudulent transactions and atypical behavior in severely imbalanced transaction datasets where anomalies comprise less than 0.2% of total occurrences.',
    mathematicalFoundations: [
      'Isolation Forest: recursive binary tree partitioning exploiting the fact that anomalies require fewer random splits to isolate',
      'One-Class Support Vector Machines (OC-SVM) finding maximum margin hyperplanes in high-dimensional RKHS feature spaces',
      'Mahalanobis Distance accounting for inter-variable covariance: D_M(x) = √((x - μ)^T Σ^{-1} (x - μ))',
      'Autoencoder reconstruction error: ||x - x̂||^2 where high loss indicates unseen anomalous data distribution'
    ],
    algorithmsUsed: ['Isolation Forest', 'One-Class SVM (RBF Kernel)', 'Local Outlier Factor (LOF)', 'Deep Autoencoder Reconstruction'],
    metricsTable: [
      { metric: 'Precision-Recall AUC (PR-AUC)', score: '0.867', benchmark: 'Baseline Random: 0.002' },
      { metric: 'False Positive Rate', score: '0.04%', benchmark: 'Critical for user friction minimization' },
      { metric: 'Isolation Forest Latency', score: '0.8ms / sample', benchmark: 'Suitable for real-time payment gateways' },
      { metric: 'Recall @ 99th Percentile', score: '93.4%', benchmark: 'Detects 93%+ fraudulent transactions' }
    ],
    insights: [
      'Isolation Forests provided the best balance of speed and detection accuracy without requiring labeled anomalous data during training.',
      'PR-AUC is the only meaningful evaluation metric on extreme imbalanced data; ROC-AUC gives an overly optimistic illusion of performance due to massive true negative counts.',
      'Combining Mahalanobis distance filtering with Isolation Forests eliminated 75% of false alarms on borderline valid transactions.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/anomaly-detection-case-study',
    datasetSource: 'Credit Card Fraud Detection Dataset (Kaggle / ULB)'
  },
  {
    id: 'co2-emission-case-study',
    title: 'Vehicle CO₂ Emissions Analysis & Attribution',
    subtitle: 'Multivariate Regression, VIF Multicollinearity Reduction & Permutation Importance',
    problemStatement: 'Analyze 7,385 vehicle records across 12 mechanical specifications to uncover patterns linking vehicle attributes to CO₂ output, resolve multicollinear fuel metrics via VIF, and benchmark linear vs. polynomial regression.',
    mathematicalFoundations: [
      'Ordinary Least Squares (OLS) closed-form solution: β = (X^T X)^{-1} X^T y',
      'Variance Inflation Factor (VIF) collinearity pruning: VIF_j = 1 / (1 - R_j^2) with <2% R² tolerance',
      'Permutation Feature Importance: quantifying generalization loss degradation under feature column shuffling',
      'Residual diagnostics: verifying linearity, homoscedasticity, and error independence (autocorrelation ≈ 0.018)'
    ],
    algorithmsUsed: ['Multivariate Linear Regression', 'ColumnTransformer (StandardScaler + OneHotEncoder)', 'Polynomial Regression (Degrees 1–5)', 'Variance Inflation Factor (VIF) Pruning'],
    metricsTable: [
      { metric: 'R² Score (Holdout Test)', score: '0.975 – 0.994', benchmark: 'Baseline degree-1 OLS' },
      { metric: 'Multicollinearity Control', score: 'R² dropped < 2%', benchmark: 'Pruned City fuel via VIF' },
      { metric: 'Dataset Scale', score: '7,385 Records', benchmark: '12 engine & fuel features' },
      { metric: 'Dominant Predictor', score: 'Fuel Hwy (L/100km)', benchmark: 'Permutation importance #1' }
    ],
    insights: [
      'Highway fuel consumption (L/100 km) emerged as the single dominant predictor of CO₂ emissions, far outweighing engine displacement and cylinder count once fuel consumption is accounted for.',
      'By Occam\'s razor, plain linear regression was selected as optimal: polynomial features (degrees 2–5) provided negligible performance gain at the expense of added complexity.',
      'Iterative VIF diagnostics eliminated collinearity between city and highway fuel ratings while preserving 97.5%+ variance explanation.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/CO2-emission-case-study',
    datasetSource: 'Government of Canada Open Vehicle Specifications Dataset (7,385 Records)'
  },
  {
    id: 'ensemble-models-case-study',
    title: 'Gradient Boosted Trees & Ensemble Benchmarking',
    subtitle: 'Empirical Comparison: XGBoost vs. LightGBM vs. CatBoost vs. Random Forests',
    problemStatement: 'Benchmark tree-based ensemble methods across training speed, memory footprint, hyperparameter sensitivity, and generalization performance on heterogeneous tabular datasets with mixed numerical and high-cardinality categorical features.',
    mathematicalFoundations: [
      'Gradient Boosting Taylor expansion: optimizing second-order loss approximation L^{(t)} ≈ ∑ [g_i f_t(x_i) + 0.5 h_i f_t^2(x_i)]',
      'LightGBM Gradient-based One-Side Sampling (GOSS) and Exclusive Feature Bundling (EFB)',
      'CatBoost Ordered Boosting: target statistics computed on random permutations to eliminate target leakage',
      'Histogram-based split finding vs. exact greedy split calculation asymptotic complexities'
    ],
    algorithmsUsed: ['Random Forest', 'XGBoost (Histogram Mode)', 'LightGBM', 'CatBoost', 'Stacked Meta-Ensemble'],
    metricsTable: [
      { metric: 'ROC-AUC Score', score: '0.924 (CatBoost)', benchmark: 'XGBoost: 0.919, RF: 0.895' },
      { metric: 'Training Time', score: '2.1s (LightGBM)', benchmark: '5.8x faster than XGBoost' },
      { metric: 'Memory Peak', score: '180 MB', benchmark: 'LightGBM lowest memory overhead' },
      { metric: 'Categorical Encoding', score: 'CatBoost native', benchmark: 'Zero manual one-hot required' }
    ],
    insights: [
      'LightGBM is the superior choice for large tabular datasets under training latency constraints, delivering competitive AUC at 1/6th the compute time.',
      'CatBoost achieved the highest generalization score on datasets with complex categorical variables without requiring manual target encoding.',
      'Early stopping with learning rate decay (0.03 - 0.05) prevented overfitting far more effectively than tree depth constraints.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/ensemble-models-case-study',
    datasetSource: 'Open Tabular Benchmark Datasets (Credit Risk & Customer Churn)'
  },
  {
    id: 'face-recognition-case-study',
    title: 'Metric Learning & Deep Face Verification',
    subtitle: 'Siamese Networks, Triplet Loss, and Cosine Embedding Manifolds',
    problemStatement: 'Construct a deep metric learning model capable of one-shot face verification, determining whether two unseen facial photographs depict the exact same identity despite differences in lighting, pose, and aging.',
    mathematicalFoundations: [
      'Triplet Loss formulation: L = max(0, ||f(a) - f(p)||^2 - ||f(a) - f(n)||^2 + α)',
      'Semi-hard negative mining: selecting negatives n such that ||f(a) - f(p)||^2 < ||f(a) - f(n)||^2 < ||f(a) - f(p)||^2 + α',
      'L2-normalized hyperspherical embedding space where Euclidean distance directly corresponds to cosine similarity',
      'Receiver Operating Characteristic (ROC) curve threshold tuning for Equal Error Rate (EER)'
    ],
    algorithmsUsed: ['ResNet-34 Feature Backbone', 'Siamese Twin Architecture', 'Triplet Margin Loss with Online Mining', 'Cosine Distance Verifier'],
    metricsTable: [
      { metric: 'Verification Accuracy', score: '96.8%', benchmark: 'LFW benchmark subset' },
      { metric: 'Equal Error Rate (EER)', score: '3.2%', benchmark: 'Optimal decision boundary' },
      { metric: 'Embedding Dimension', score: '128-d', benchmark: 'Compact memory footprint' },
      { metric: 'Inference Latency', score: '18ms', benchmark: 'Real-time camera feed compatible' }
    ],
    insights: [
      'Semi-hard negative mining was essential for stable training; without it, over 80% of random triplets generated zero gradient, leading to slow training convergence.',
      'L2 normalization of output embeddings guarantees that cosine distance is monotonically equivalent to squared Euclidean distance, simplifying vector database indexing.',
      'Data augmentation with subtle random rotations and color jittering improved test verification accuracy on novel angles by 4.5%.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/face-recognition-case-study',
    datasetSource: 'Labeled Faces in the Wild (LFW) Research Corpus'
  },
  {
    id: 'visualising-data-lower-dimensions',
    title: 'High-Dimensional Dimensionality Reduction',
    subtitle: 'Principal Component Analysis (PCA) vs. t-SNE Manifold Learning',
    problemStatement: 'Project high-dimensional sensory and visual representations onto 2D and 3D visual planes while quantifying the trade-off between global variance preservation and local neighborhood topological structure.',
    mathematicalFoundations: [
      'Principal Component Analysis (PCA): eigendecomposition of the empirical covariance matrix C = (1/n) X^T X',
      'Singular Value Decomposition (SVD): X = U Σ V^T, selecting top k principal directions maximizing preserved variance',
      't-Distributed Stochastic Neighbor Embedding (t-SNE): matching conditional probabilities in high dimensions with Student-t distribution in low dimensions: q_{ij} = (1 + ||y_i - y_j||^2)^{-1} / ∑_{k≠l} (1 + ||y_k - y_l||^2)^{-1}',
      'Kullback-Leibler (KL) divergence minimization: KL(P || Q) = ∑_i ∑_j p_{j|i} log(p_{j|i} / q_{j|i})'
    ],
    algorithmsUsed: ['Truncated SVD / PCA', 'Standard t-SNE with Perplexity Tuning', 'Barnes-Hut t-SNE Approximation', 'UMAP Topological Projection'],
    metricsTable: [
      { metric: 'Variance Explained (2D PCA)', score: '62.4%', benchmark: 'Linear global preservation' },
      { metric: 'Cluster Separation (t-SNE)', score: '0.84 Silhouette', benchmark: 'Distinct local manifold clusters' },
      { metric: 'Barnes-Hut Runtime', score: 'O(N log N)', benchmark: 'Scalable to 100K+ data points' },
      { metric: 'Perplexity Sensitivity', score: 'Optimal 30-50', benchmark: 'Preserves balanced cluster density' }
    ],
    insights: [
      'PCA is ideal for fast global feature decorrelation and initial dimension pruning, but fails to separate non-linear concentric or manifold clusters.',
      't-SNE creates remarkably distinct cluster boundaries for high-dimensional feature visualization, but cluster distances in the low-dimensional embedding do not reflect global geometric distances.',
      'A two-stage reduction pipeline (PCA to 50 dimensions, followed by t-SNE to 2D) accelerated computation by 4x and eliminated high-frequency noise artifacts.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/visualising-data-in-lower-dimensions',
    datasetSource: 'MNIST Handwritten Digits & High-Dimensional Feature Embeddings'
  },
  {
    id: 'classification-models-and-metrics-case-study',
    title: 'Classification Models & Evaluation Metrics',
    subtitle: 'Imbalanced Learning, Logistic Regression, KNN, Cost-Sensitive Thresholds & ROC/PR Curves',
    problemStatement: 'Benchmark parametric (Logistic Regression) vs. non-parametric (K-Nearest Neighbors) classifiers and evaluate the critical breakdown of standard evaluation metrics (the accuracy paradox) on severe class imbalances across telecom churn, wholesale customer segmentation, and diabetes diagnostic datasets.',
    mathematicalFoundations: [
      'Log Loss (Binary Cross-Entropy): L(y, p) = -(y log(p) + (1 - y) log(1 - p)) ensuring strict loss convexity',
      'Harmonic Mean F1-Score formulation: F_1 = 2 · (Precision · Recall) / (Precision + Recall)',
      'Synthetic Minority Over-sampling Technique (SMOTE): x_{new} = x_i + λ(x_{zi} - x_i) along k-NN vector segments',
      'Cost-sensitive threshold tuning and Precision-Recall Area Under Curve (PR-AUC) optimization'
    ],
    algorithmsUsed: ['Logistic Regression with L2 Regularization (C = 1/λ)', 'K-Nearest Neighbors (Euclidean & Manhattan Distances)', 'SMOTE & Class-Weighted Resampling', 'ROC-AUC & PR-AUC Threshold Optimizer'],
    metricsTable: [
      { metric: 'Class-Weighted LogReg AUC', score: '0.912', benchmark: 'Outperformed SMOTE on churn' },
      { metric: 'PR-AUC on Severe Imbalance', score: '0.846', benchmark: 'Baseline accuracy: misleading 98%' },
      { metric: 'KNN Imputation Fidelity', score: '94.2%', benchmark: 'Non-parametric missing value repair' },
      { metric: 'Inference Latency', score: '0.4ms / sample', benchmark: 'Vectorized scikit-learn pipeline' }
    ],
    insights: [
      'Accuracy can be fatally misleading: on severely skewed datasets, a naive majority-class classifier scores 98% while providing zero fraud detection utility.',
      'In the telecom churn benchmark, class-weighted loss penalization in Logistic Regression outperformed SMOTE synthetic oversampling without adding artificial cluster variance.',
      'PR-AUC is the only invariant metric under extreme class imbalance, whereas ROC-AUC gives an overly optimistic impression due to vast true negative counts.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/classification-models-and-metrics-case-study',
    datasetSource: 'Telecom Churn, Wholesale Customers & Pima Indians Diabetes Research Datasets'
  },
  {
    id: 'clustering-techniques-case-study',
    title: 'Unsupervised Clustering: k-Means, Hierarchical, GMM & DBSCAN',
    subtitle: 'Centroids, Agglomerative Dendrograms, Gaussian Mixtures & Density Manifolds',
    problemStatement: 'Conduct a progressive 4-part empirical investigation comparing centroid-based (k-Means, k-Means++), connectivity-based (Hierarchical Agglomerative), probabilistic (Gaussian Mixture Models), and density-based (DBSCAN) clustering across spherical, non-convex, and noisy commercial datasets.',
    mathematicalFoundations: [
      'Within-Cluster Sum of Squares (WCSS / Inertia): ∑_{i=1}^k ∑_{x ∈ C_i} ||x - μ_i||^2',
      'Ward\'s Linkage error sum of squares minimization: Δ ESS = (n_A n_B / (n_A + n_B)) ||μ_A - μ_B||^2',
      'GMM Expectation-Maximization: γ_{ik} = π_k N(x_i | μ_k, Σ_k) / ∑_j π_j N(x_i | μ_j, Σ_j)',
      'DBSCAN (ε, MinPts) core point density and Silhouette score s = (b - a) / max(a, b)'
    ],
    algorithmsUsed: ['k-Means & k-Means++ Centroid Clustering', 'Agglomerative Hierarchical (Single, Complete, Ward Linkages)', 'Gaussian Mixture Models (Soft / Probabilistic Clustering)', 'DBSCAN with k-distance graph ε tuning'],
    metricsTable: [
      { metric: 'Silhouette Score (RFM k-Means)', score: '0.62', benchmark: 'Optimal k=4 commercial cohorts' },
      { metric: 'Davies-Bouldin Index (DBSCAN)', score: '0.48', benchmark: 'Noise filtering on outlier points' },
      { metric: 'GMM Soft Assignment Fidelity', score: '99.1%', benchmark: 'Resolves overlapping distributions' },
      { metric: 'Ward Dendrogram Cophenetic', score: '0.78', benchmark: 'High distance metric preservation' }
    ],
    insights: [
      'k-Means breaks down on arbitrary geometry and unequal cluster variances; GMM soft clustering with full covariance matrices cleanly resolves overlapping elliptical distributions.',
      'DBSCAN is uniquely resilient to outlier noise, isolating anomaly transactions without forcing them into artificial centroids.',
      'Hierarchical Ward linkage dendrograms provided the highest domain interpretability for corporate customer spending tier segmentation.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/clustering-techniques-case-study',
    datasetSource: 'Online Retail Transactional Dataset, Customer Spending Data & E-Commerce Manifolds'
  },
  {
    id: 'midi-music-generator',
    title: 'AI MIDI Piano Music Generator',
    subtitle: 'Sequential Note Composition with Deep Recurrent LSTM Networks',
    problemStatement: 'Model complex musical harmony, chord progressions, and temporal note structures by training multi-layer LSTM neural networks to generate original, coherent piano compositions from raw MIDI sequence data.',
    mathematicalFoundations: [
      'LSTM Recurrent Cell Gate: i_t = σ(W_i · [h_{t-1}, x_t] + b_i), f_t = σ(W_f · [h_{t-1}, x_t] + b_f)',
      'Categorical Cross-Entropy Loss: L = - ∑_{c=1}^M y_{o,c} log(p_{o,c}) over unique note vocabulary',
      'music21 pitch and chord encoding: categorical integer tokenization with temporal duration tracking',
      'Sliding window sequence modeling: 100-note conditioning history predicting the 101st pitch class'
    ],
    algorithmsUsed: ['3-Layer Stacked LSTM (512 units each)', 'music21 Symbolic MIDI Parsing', 'Dropout Regularization (0.3) & Softmax Output', 'Rolling Window Sequence Generation'],
    metricsTable: [
      { metric: 'LSTM Architecture', score: '3 x 512 Units', benchmark: 'Deep recurrent capacity' },
      { metric: 'Sequence Context', score: '100 Notes History', benchmark: 'Predicts 101st note' },
      { metric: 'Composition Output', score: '200+ Note Piece', benchmark: 'Exported as playable .mid' },
      { metric: 'Regularization', score: 'Dropout 0.3', benchmark: 'Prevents repetitive looping' }
    ],
    insights: [
      'music21 parsing allowed extracting both individual monophonic notes and polyphonic chords into a unified categorical vocabulary.',
      '3 stacked LSTM layers of 512 units each provided the requisite memory depth to preserve melodic motif consistency over 100-step time horizons.',
      'Softmax probability sampling with random 100-note seeds enabled diverse, original musical phrases without deterministic overfitting.'
    ],
    notebookUrl: 'https://github.com/AryanSehgal/midi-music-generator',
    datasetSource: 'Classical Piano MIDI Dataset parsed with music21'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'All India Rank 1912',
    subtitle: 'JEE Mains (Out of 1.2M+ Applicants)',
    metric: 'AIR 1912',
    detail: 'Ranked in the top 0.15% nationwide in one of the world’s most competitive engineering examinations, demonstrating exceptional analytical foundations.',
    iconName: 'Award',
    category: 'academic'
  },
  {
    title: 'All India Rank 5021',
    subtitle: 'JEE Advanced (Top 0.5% Nationally)',
    metric: 'AIR 5021',
    detail: 'Demonstrated advanced mathematical and analytical problem solving across Physics, Chemistry, and Mathematics.',
    iconName: 'Trophy',
    category: 'academic'
  },
  {
    title: '8.69 CGPA with AI Specialization',
    subtitle: 'Netaji Subhas University of Technology (NSUT)',
    metric: '8.69 / 10',
    detail: 'B.Tech in Computer Science and Engineering with dedicated specialization coursework in Artificial Intelligence & Machine Learning.',
    iconName: 'GraduationCap',
    category: 'academic'
  },
  {
    title: 'Class XII: 90% | Class X: 10 CGPA',
    subtitle: 'Central Board of Secondary Education (CBSE)',
    metric: '90% & 10 CGPA',
    detail: 'Achieved 90% in Class XII Board Examination and a perfect 10 CGPA in Class X Board Examination under Central Board of Secondary Education.',
    iconName: 'Award',
    category: 'academic'
  },
  {
    title: '450+ LeetCode Solved & 16 Badges',
    subtitle: 'Algorithmic Problem Solving Mastery',
    metric: '750+ Total',
    detail: 'Solved 450+ complex algorithmic problems (Graph Theory, Dynamic Programming, Trees, Greedy) and 750+ across platforms.',
    iconName: 'Code',
    category: 'competitive'
  },
  {
    title: 'VP of Engineering Recommendation',
    subtitle: 'Sprinklr Core Product Impact',
    metric: 'DocuSign Verified',
    detail: 'Official recommendation from Mayank Hinger (VP of Engineering) for 2-person team ownership, AI integration, and production excellence.',
    iconName: 'FileCheck',
    category: 'engineering'
  },
  {
    title: 'Published NPM Design System',
    subtitle: 'Author of @aryan_sehgal/forma-ui',
    metric: '16 Primitives',
    detail: 'Architected and published an accessible React design system with Radix UI, custom CSS tokens, Theme Studio, and live documentation.',
    iconName: 'Layers',
    category: 'engineering'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Machine Learning & Applied AI',
    skills: [
      { name: 'ONNX Runtime Web & WebGPU', level: 'Production Expert', context: 'Edge AI Note Studio, zero-latency in-browser Whisper & LLM' },
      { name: 'PyTorch & Deep Learning', level: 'Advanced Research', context: 'StyleGAN, Autoencoders, CNNs, U-Net, Metric Learning' },
      { name: 'Computer Vision & CIELAB', level: 'Advanced Research', context: 'Image-to-image GANs, Colorization, Sharp, OpenCV' },
      { name: 'Time-Series & Forecasting', level: 'Advanced Research', context: 'ARIMA, SARIMAX with exogenous features, Stacked LSTM' },
      { name: 'Recommendation Systems', level: 'Advanced Research', context: 'Truncated SVD, Matrix Factorization, Neural CF, NDCG' },
      { name: 'Transformers & Edge Inference', level: 'Production Expert', context: 'Whisper ASR, Flan-T5, Quantization, Web Workers' }
    ]
  },
  {
    title: 'Production Frontend & Design Systems',
    skills: [
      { name: 'Forma UI Design System', level: 'Production Expert', context: 'Author of @aryan_sehgal/forma-ui on npm, 16 accessible primitives' },
      { name: 'React 19 & Next.js (SSR)', level: 'Production Expert', context: 'Sprinklr Ads Creative App, DAM 35% speedup, Page Builder' },
      { name: 'TypeScript', level: 'Production Expert', context: 'Strict typing, AST manipulation, Generic schemas' },
      { name: 'GraphQL & Apollo Client', level: 'Production Expert', context: 'Normalized cache architecture, 40% latency cut' },
      { name: 'Tailwind CSS v4 & Tokens', level: 'Production Expert', context: 'Semantic --f-* CSS custom properties, scoped dark themes' },
      { name: 'Accessibility (WCAG 2.1 AAA)', level: 'Production Expert', context: 'ARIA roles, focus traps, screen reader fidelity, axe-core' }
    ]
  },
  {
    title: 'Backend, Systems & Tooling',
    skills: [
      { name: 'Node.js, Express & Sharp', level: 'Production Expert', context: 'High-throughput microservices, tensor processing, streaming' },
      { name: 'Python, NumPy & Pandas', level: 'Production Expert', context: 'Empirical data analysis, matrix manipulation, Jupyter' },
      { name: 'Jest & React Testing Library', level: 'Production Expert', context: '95% test coverage at Sprinklr enterprise scale' },
      { name: 'PostgreSQL & SQL Schema', level: 'Proficient', context: 'Relational design, indexing, full-text search' },
      { name: 'Git, CI/CD & Vercel', level: 'Production Expert', context: 'Automated test pipelines, npm releases, Vercel deployments' },
      { name: 'Web Workers & SharedArrayBuffer', level: 'Production Expert', context: 'Off-thread background AI inference pipelines' }
    ]
  }
];

export const ENGINEERING_PHILOSOPHY = {
  title: 'How I Build AI Products: From Research Papers to Production',
  subtitle: 'Translating state-of-the-art machine learning research into fast, accessible, real-world software products.',
  philosophy: `I am passionate about bridging the gap between cutting-edge AI research and production-grade software engineering. Rather than researching new theoretical architectures in a silo, my focus is on reading state-of-the-art papers, evaluating models against real-world constraints (latency, compute, memory, and privacy), and integrating them into intuitive, reliable products that deliver tangible value to end users.`,
  corePillars: [
    {
      step: '01',
      title: 'Literature Analysis & Architectural Evaluation',
      description: 'Systematically tracking arXiv papers, Hugging Face releases, and open benchmarks. Analyzing loss formulations, parameter counts, and attention mechanisms to identify the most promising model families for a specific problem domain.',
      concretePractices: [
        'Evaluating paper trade-offs (e.g. AniGAN vs DRIT++ for style disentanglement; Whisper vs Conformer for speech)',
        'Assessing compute budgets: On-device WebGPU vs. edge serverless vs. cloud GPU microservices',
        'Verifying license terms, pre-trained weight availability, and quantization viability'
      ]
    },
    {
      step: '02',
      title: 'Empirical Benchmarking & Model Profiling',
      description: 'Rigorous empirical exploration in Python and Jupyter before writing application code. Training prototypes, benchmarking against baseline heuristics, and analyzing edge cases and failure modes.',
      concretePractices: [
        'Benchmarking statistical vs. deep learning models (e.g. SARIMAX vs LSTM; SVD vs Neural CF)',
        'Ablation studies on loss functions (e.g. Smooth L1 vs MSE in CIELAB space to avoid sepia-mean collapse)',
        'Model conversion and graph optimization (tf2onnx, ONNX Runtime, int8 quantization, memory footprint)'
      ]
    },
    {
      step: '03',
      title: 'Full-Stack Systems & Product Integration',
      description: 'Building the complete product around the model: high-performance background pipelines (Web Workers, streaming), accessible UI with @aryan_sehgal/forma-ui, and bulletproof error boundaries.',
      concretePractices: [
        'Offloading inference to background Web Workers with zero-copy ArrayBuffers to maintain 60 FPS UI',
        'Crafting WCAG 2.1 AAA accessible interfaces with keyboard navigation and instant feedback states',
        'Shipping production web apps with 95% test coverage, comprehensive error handling, and offline-first support'
      ]
    }
  ]
};
