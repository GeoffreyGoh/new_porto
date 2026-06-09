/* ============================================================
   SINGLE SOURCE OF TRUTH for all portfolio content.
   Edit text / numbers here — no need to touch component JSX.
   Items marked  // TODO  are placeholders for you to fill in
   (mainly project links / screenshots).
   ============================================================ */

export const profile = {
  name: "Geoffrey Gohtama",
  tagline: "CS Student | Aspiring AI/ML Engineer",
  summary:
    "Computer Science undergraduate at BINUS University (Global Class), currently on exchange at Yuan Ze University, Taiwan. Focused on machine learning and full-stack development, with a published research paper in applied ML. I build practical, data-driven solutions and enjoy turning models into things people can actually use.",
  // Stat chip shown in the hero
  statChip:
    "4 Projects · 1 Published Paper · Google Cloud Gen AI Certified",
  email: "geoffreygoh03@gmail.com",
  github: "https://github.com/GeoffreyGoh",
  githubHandle: "github.com/GeoffreyGoh",
  linkedin: "https://www.linkedin.com/in/geoffrey-gohtama",
  linkedinHandle: "linkedin.com/in/geoffrey-gohtama",
  cv: "/storage/cv/geoffrey-gohtama-cv.pdf",
  avatar: "/storage/img/avatar.jpeg",
};

/* ---------------- Navigation anchors ---------------- */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "projects", label: "Projects" },
  { id: "organization", label: "Leadership" },
  { id: "education", label: "Education" },
] as const;

/* ---------------- Skills ----------------
   `icon` values map to react-icons keys resolved in Skills.tsx */
export type SkillGroup = {
  title: string;
  skills: { name: string; icon: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C", icon: "c" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "scikit-learn", icon: "scikitlearn" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MySQL", icon: "mysql" }],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Gradio", icon: "gradio" },
    ],
  },
];

/* ---------------- Certifications ---------------- */
export type CertPath = {
  title: string;
  level?: string;
  description: string;
  badges: string[];
};

export const certifications = {
  heading: "Certifications — Google Cloud AI",
  intro:
    "Completed two Google Cloud learning paths in Generative AI — Diamond League (4,800+ pts).",
  profileUrl:
    "https://www.skills.google/public_profiles/cad49d43-a44f-4ec9-9a0b-fecaa972f213",
  paths: [
    {
      title: "Generative AI Leader",
      description:
        "Google Cloud's Gen AI Leader certification path. Covers gen AI strategy, foundation models, prompt engineering, RAG, gen AI agents, and Google Cloud's AI tooling.",
      badges: [
        "Gen AI: Beyond the Chatbot",
        "Unlock Foundational Concepts",
        "Navigate the Landscape",
        "Gen AI Apps: Transform Your Work",
        "Gen AI Agents: Transform Your Organization",
      ],
    },
    {
      title: "Introduction to Generative AI",
      level: "Beginner",
      description:
        "Foundational path introducing generative AI, how it differs from traditional ML, and core Google AI tools.",
      badges: [
        "Introduction to Generative AI",
        "Prompt Design in Agent Platform",
        "Responsible AI: Applying AI Principles",
        "Introduction to Responsible AI",
        "Introduction to Large Language Models",
      ],
    },
  ] as CertPath[],
};

/* ---------------- Projects ----------------
   Order matters (AI/ML first). Fill TODO links / drop screenshots
   into public/projects and point `image` at them. */
export type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  /** Optional screenshot. Leave undefined to show a placeholder slot. */
  image?: string;
  imageAlt?: string;
  /** Call-to-action link */
  link?: { href: string; label: string };
  /** Small badge, e.g. "Published" */
  badge?: string;
  /** Highlighted metric, e.g. "97% accuracy · 99% recall" */
  metric?: string;
};

export const projects: Project[] = [
  {
    title: "HIV/AIDS Prediction: Comparative ML Study",
    role: "Co-author (5-author team incl. faculty supervisors)",
    description:
      "A published IEEE-format comparative study of five machine learning models (Logistic Regression, Naive Bayes, Decision Tree, Random Forest, SVM) for early HIV/AIDS detection. Integrated Explainable AI (SHAP) to address the model-interpretability gap in prior clinical-ML research, plus ensemble learning to improve robustness.",
    tags: ["Python", "scikit-learn", "SHAP", "Machine Learning", "Research"],
    badge: "Published",
    link: {
      href: "/storage/papers/hiv-aids-prediction-ieee.pdf",
      label: "Read paper",
    },
    image: "/storage/projects/research-methodology.png",
    imageAlt: "Research methodology diagram from the HIV/AIDS prediction study",
  },
  {
    title: "Fake News Detection: Classical ML vs. Transformer",
    role: "Code development & report (team of 3)",
    description:
      "A comparative NLP study pitting a TF-IDF + Multinomial Naive Bayes baseline against a fine-tuned DistilBERT transformer on a ~45,000-article Kaggle dataset. Engineered preprocessing to strip publisher citations (e.g. \"Reuters\", \"BBC\") so the models learned linguistic patterns rather than metadata cues. Analyzed the accuracy-vs-cost tradeoff: under a 384-token limit and constrained hardware, the transformer's gains over the simple baseline were modest — a practical lesson in matching model complexity to available resources.",
    tags: ["Python", "scikit-learn", "HuggingFace Transformers", "DistilBERT", "Streamlit"],
    link: {
      href: "https://github.com/GeoffreyGoh/NLP-fake-news-detector-main",
      label: "View repo",
    },
    image: "/storage/img/nlp.png",
    imageAlt: "Screenshot of the Fake News Detector web app",
  },
  {
    title: "Cafforia: Coffee Education Platform",
    role: "Development Team",
    description:
      "A coffee-education website pairing written brewing guides with video tutorials across methods like pour-over, espresso, French press, and AeroPress. Clean, responsive interface with search and filtering so users can learn by reading or watching.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/storage/projects/cafforia.png",
    imageAlt: "Screenshot of the Cafforia coffee-education website",
    link: {
      href: "https://kenzitjandra.github.io/Cafforia_MulMed",
      label: "View live site",
    },
  },
  {
    title: "Social Informatics: Educational Inequality in Indonesia",
    role: "Group 5",
    description:
      "A data dashboard examining Indonesia's educational divide, using Papua as a case study (51% of villages lack educational facilities vs. 7.9% nationally). Visualizes facility distribution and access statistics, and proposes Society 5.0 solutions — low-bandwidth e-learning and IoT progress tracking — for infrastructure-limited regions.",
    tags: ["Figma", "Data Visualization", "Research"],
    image: "/storage/projects/soc.png",
    imageAlt: "Preview of the educational-inequality data dashboard",
    link: {
      href: "https://pink-twice-77398902.figma.site",
      label: "View prototype",
    },
  },
];

/* ---------------- Organization / Leadership ---------------- */
export const org = {
  title: "President — HIMTI Alam Sutera",
  timeframe: "2025 – 2026",
  description:
    "Lead the regional chapter of BINUS's IT student association, overseeing strategy, student engagement, and event programming.",
  metrics: [
    { value: "250+", label: "active members led" },
    { value: "15+", label: "events organized per year" },
  ],
  priorRoles: [
    { role: "Event Chairman", org: "HIMTI Internship 2025" },
    { role: "Technical Coordinator", org: "SESVENT 2024" },
  ],
};

/* ---------------- Education timeline ---------------- */
export type EduItem = {
  year: string;
  institution: string;
  detail: string;
  current?: boolean;
};

export const education: EduItem[] = [
  {
    year: "2023",
    institution: "SMAK PENABUR Gading Serpong",
    detail: "Graduated high school.",
  },
  {
    year: "2023 – present",
    institution: "BINUS University — Global Class",
    detail: "BSc Computer Science.",
  },
  {
    year: "2025",
    institution: "Yuan Ze University, Taiwan",
    detail: "Exchange semester for international exposure.",
    current: true,
  },
];
