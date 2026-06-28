import {
  Home,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  Mail,
  Twitter,
  Linkedin,
  BookOpen,
  Github,
  Instagram,
  Sparkles,
  Code2,
  Rocket,
  Cpu,
  GraduationCap,
  Heart,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export const socials = [
  { label: "X (Twitter)", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Medium", icon: BookOpen, href: "#" },
  { label: "Github", icon: Github, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

export const ROLES = ["Frontend Developer", "Backend Developer", "Blockchain Developer"];

export const PROJECTS = [
  {
    title: "AI Invoice Generator",
    description:
      "AI-powered SaaS for generating professional invoices with Gemini AI integration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=70",
    tags: ["AI", "SaaS", "Next.js", "Full-Stack"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "LMS Platform",
    description:
      "Complete Learning Management System with course management and user dashboards.",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&w=720&q=70",
    tags: ["Education", "MERN", "Full-Stack", "E-learning"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "Resume Builder",
    description:
      "AI-powered resume creation platform with professional templates and live preview.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=720&q=70",
    tags: ["AI", "SaaS", "Next.js", "Productivity"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "Task Manager",
    description:
      "Productivity application for task management with team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&w=720&q=70",
    tags: ["Productivity", "MERN", "Full-Stack", "Collaboration"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "Food Delivery App",
    description:
      "Full-stack food ordering platform with restaurant management and payments.",
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=720&q=70",
    tags: ["E-commerce", "MERN", "Full-Stack", "Payments"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "Movie Ticket Booking",
    description:
      "Complete movie booking system with seat selection, payments and admin panel.",
    image:
      "https://images.pexels.com/photos/8636589/pexels-photo-8636589.jpeg?auto=compress&cs=tinysrgb&w=720&h=450&fit=crop",
    tags: ["Booking", "MERN", "Full-Stack", "Entertainment"],
    visit: "#",
    github: "#",
    status: "active",
  },
];

export const TAG_TONE = {
  AI: "text-accent-blue ring-accent-blue/30",
  SaaS: "text-accent-yellow ring-accent-yellow/30",
  MERN: "text-accent-green ring-accent-green/30",
  "Next.js": "text-gruv-aqua ring-gruv-aqua/30",
  "Full-Stack": "text-accent-yellow ring-accent-yellow/30",
  Business: "text-gruv-purple ring-gruv-purple/30",
  Education: "text-accent-blue ring-accent-blue/30",
  "E-learning": "text-gruv-aqua ring-gruv-aqua/30",
  Productivity: "text-accent-green ring-accent-green/30",
  Collaboration: "text-gruv-purple ring-gruv-purple/30",
  "E-commerce": "text-gruv-orange ring-gruv-orange/30",
  Payments: "text-accent-yellow ring-accent-yellow/30",
  Booking: "text-accent-blue ring-accent-blue/30",
  Entertainment: "text-gruv-purple ring-gruv-purple/30",
};

export const CATEGORY_TONE = {
  current: {
    label: "Current Role",
    text: "text-accent-blue",
    bg: "bg-accent-blue",
    ring: "ring-accent-blue/40",
    soft: "bg-accent-blue/10",
  },
  ai: {
    label: "AI Startup",
    text: "text-gruv-purple",
    bg: "bg-gruv-purple",
    ring: "ring-gruv-purple/40",
    soft: "bg-gruv-purple/10",
  },
  growth: {
    label: "Growth Startup",
    text: "text-accent-green",
    bg: "bg-accent-green",
    ring: "ring-accent-green/40",
    soft: "bg-accent-green/10",
  },
  early: {
    label: "Early Career",
    text: "text-accent-yellow",
    bg: "bg-accent-yellow",
    ring: "ring-accent-yellow/40",
    soft: "bg-accent-yellow/10",
  },
};

export const TIMELINE = [
  {
    period: "2023 — Present",
    role: "Founding Engineer",
    company: "Hexagon Digital Services",
    description: "Building Copilot for Insurance Industry",
    meta: "DevOps Startup · Remote",
    category: "current",
    icon: Sparkles,
    bullets: [
      "Leading PoC/MVP for Copilot to automate insurance workflows",
      "Built Web Admin App, Client App, and Demo instance",
      "Experimenting with emerging AI models and UX paradigms",
    ],
    tags: ["React", "TypeScript", "Python", "OpenAI"],
  },
  {
    period: "2022 — 2023",
    role: "Co-Founder / CTO",
    company: "Hexagon Digital Services",
    description: "Designed and developed LLM Ops Platform",
    meta: "Pre-Seed Startup · 4 Team Members",
    category: "ai",
    icon: Code2,
    bullets: [
      "Led design and development of LLM Ops Platform",
      "Built proxy middleware with Cloudflare workers (sub-10ms)",
      "Created CLI, framed Apps, Inference & threads",
    ],
    tags: ["Swift", "Kubernetes", "Rust", "AWS", "OpenAI"],
  },
  {
    period: "2021 — 2022",
    role: "Co-Founder / CTO",
    company: "EngageBud",
    description: "Developed platform handling 100k+ users",
    meta: "Seed Funded · 6 Team Members",
    category: "growth",
    icon: Rocket,
    bullets: [
      "Developed influencer SEO & engagement platform",
      "Scaled backend to handle 100k+ users, 1M+ Discount codes",
      "Raised $100K funding from Beenext-Incubator-X",
    ],
    tags: ["React", "Rails", "PostgreSQL", "GraphQL"],
  },
  {
    period: "2020 — 2021",
    role: "Product Engineer",
    company: "ProfileBud",
    description: "LinkedIn Influencer SEO platform for 200k+ users",
    meta: "Early Stage Startup · Founding Team",
    category: "growth",
    icon: Cpu,
    bullets: [
      "Led frontend development as founding member",
      "Created responsive websites and payment portals",
      "Developed ReLang server for 200K users, 50+ req/s",
    ],
    tags: ["React", "GoLang", "Webby", "Rails"],
  },
  {
    period: "2019 — 2020",
    role: "Freelance Developer & Student",
    company: "",
    description: "Built projects while completing education",
    meta: "Independent Projects · Self-Learning",
    category: "early",
    icon: GraduationCap,
    bullets: [
      "Developed multiple web applications for local businesses",
      "Learned modern web development stack through projects",
      "Contributed to open source projects on GitHub",
    ],
    tags: ["JavaScript", "HTML/CSS", "Python", "MongoDB"],
  },
];

export const ACHIEVEMENTS = [
  {
    label: "Funding Raised",
    value: "$100K+",
    sub: "From accelerator Beenext",
    accent: "green",
  },
  {
    label: "Users Served",
    value: "33M+",
    sub: "Across all platforms",
    accent: "blue",
  },
  {
    label: "Startups Founded",
    value: "3",
    sub: "As co-founder/CTO",
    accent: "green",
  },
  {
    label: "Years Experience",
    value: "5+",
    sub: "Building at scale",
    accent: "yellow",
  },
];

export const SPECIALIZATIONS = [
  "AI/ML Integration",
  "Startup Scaling",
  "Full-Stack Development",
  "Team Leadership",
];

export const TOOLS = [
  { name: "Cursor", category: "IDE", simple: "cursor", invert: true },
  {
    name: "ChatGPT",
    category: "Productivity",
    src: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
  },
  { name: "Notion", category: "Productivity", simple: "notion", invert: true },
  { name: "PyCharm", category: "IDE", simple: "pycharm" },
  {
    name: "VS Code",
    category: "IDE",
    src: "https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=128",
  },
  {
    name: "Slack",
    category: "Communication",
    src: "https://www.google.com/s2/favicons?domain=slack.com&sz=128",
  },
  { name: "Medium", category: "Writing", simple: "medium", invert: true },
  { name: "Android Studio", category: "IDE", simple: "androidstudio" },
  {
    name: "Claude AI",
    category: "Productivity",
    src: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
  },
  { name: "Hugging Face", category: "AI Platform", simple: "huggingface" },
  { name: "Gemini", category: "Productivity", simple: "googlegemini" },
  { name: "Lovable", category: "Productivity", icon: Heart, tone: "red" },
  { name: "Windsurf", category: "IDE", simple: "windsurf", invert: true },
  { name: "Perplexity", category: "Research", simple: "perplexity" },
];

export const TONE_BG = {
  red: "bg-gruv-red/15 ring-gruv-red/30 text-gruv-red",
  orange: "bg-gruv-orange/15 ring-gruv-orange/30 text-gruv-orange",
  yellow: "bg-accent-yellow/15 ring-accent-yellow/30 text-accent-yellow",
  green: "bg-accent-green/15 ring-accent-green/30 text-accent-green",
  aqua: "bg-gruv-aqua/15 ring-gruv-aqua/30 text-gruv-aqua",
  blue: "bg-accent-blue/15 ring-accent-blue/30 text-accent-blue",
  purple: "bg-gruv-purple/15 ring-gruv-purple/30 text-gruv-purple",
  default: "bg-bg-elev/40 ring-bg-elev/60 text-fg-dim",
};

export const ABOUT_TAGS = [
  "FULL-STACK DEV",
  "AI ENGINEER",
  "LLMS",
  "TRAVEL",
  "MUSIC",
  "F1",
  "READING",
];

export const ABOUT_STACK = [
  "React",
  "LLM",
  "Rails",
  "Next.js",
  "TypeScript",
  "Postgres",
  "Redis",
];

export const ABOUT_SECTIONS = [
  {
    title: "Who I Am",
    body: "Hello! I'm Virat, a Bengaluru-based engineer passionate about building tools that simplify people's lives. I've been coding since 2018, writing about AI, LLMs, frontend, backend, Rails and databases.",
  },
  {
    title: "What I Do",
    body: "Currently a Founding Engineer at Hexagon Digital Services, building workflow automation for insurance brokers. I focus on building practical, user-facing products — less demo energy, more things people actually use daily.",
  },
  {
    title: "My Journey",
    body: "Co-founder of Hexagon Digital Services, Engagebud and Influencerbit — led product development and design across multiple startups. Recently shipped AI Invoice Generator (100+ daily users), an MEB AI TOOL, and several micro-builds, keeping the shipping momentum going.",
  },
  {
    title: "Vision",
    body: "LLMs and AI will automate the mundane and reshape how we work. I strive to stay at the forefront of this transformation.",
  },
  {
    title: "Beyond Code",
    body: "Love techno & house music, follow F1 (Max), play chess, and read regularly. Travelled recently to Bali, and a month in Thailand/Vietnam in 2025.",
  },
];
