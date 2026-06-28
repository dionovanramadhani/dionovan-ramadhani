import {
  Home,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  Code2,
  Rocket,
  Cpu,
  GraduationCap,
  Trophy,
  Flame,
  Heart,
  Instagram,
} from "lucide-react";
import {
  BNILogo,
  CubeLogo,
  EmveepLogo,
  LenteraLogo,
  MythologicLogo,
  TechpolitanLogo,
  WGSLogo,
  Logo,
  MetalabLogo,
  CCILogo,
  HimatrediaLogo,
} from "./images";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skill", icon: Code2 },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export const socials = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/dionovan_r" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dionovan-ramadhani/",
  },
  { label: "Github", icon: Github, href: "https://github.com/dionovanramadhani" },
];

export const ROLES = [
  "Full-Stack Web Developer",
  "Blockchain Developer",
  "Ex-Game Developer",
];

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
  web: {
    label: "Web Development",
    text: "text-accent-green",
    bg: "bg-accent-green",
    ring: "ring-accent-green/40",
    soft: "bg-accent-green/10",
  },
  game: {
    label: "Game Development",
    text: "text-gruv-purple",
    bg: "bg-gruv-purple",
    ring: "ring-gruv-purple/40",
    soft: "bg-gruv-purple/10",
  },
  org: {
    label: "Organizations",
    text: "text-accent-yellow",
    bg: "bg-accent-yellow",
    ring: "ring-accent-yellow/40",
    soft: "bg-accent-yellow/10",
  },
};

export const TIMELINE = [
  {
    period: "Aug 2024 — Present",
    role: "Fullstack Developer",
    company: "Emveep",
    description: "Decentralized Web3 platform and Telegram Mini Apps",
    meta: "Full-Time · Remote",
    category: "current",
    icon: EmveepLogo,
    bullets: [
      "Engineered end-to-end Web3 platform architectures, translating UI/UX designs into highly responsive cross-device web components.",
      "Deployed secure NFT and Token Vesting smart contracts (Solidity/Ethers.js) on BSC, integrating Pinata IPFS for metadata storage and automated token distribution.",
      "Developed a Telegram Mini App utilizing the Telegram SDK, incorporating TON Telegram Wallet for secure crypto payments and transaction logging.",
      "Architected scalable database schemas for platform economics and built dedicated Web CMS admin dashboards to streamline content management.",
    ],
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "Solidity",
      "Ethers.js",
      "IPFS",
      "Telegram SDK",
      "TON Wallet",
    ],
  },
  {
    period: "Jun 2024 — Aug 2024",
    role: "Full-Stack Developer Trainee",
    company: "Walden Global Service",
    description: "Intensive bootcamp and mechanical keyboard e-commerce platform",
    meta: "Trainee · Bandung",
    category: "web",
    icon: WGSLogo,
    bullets: [
      "Completed an intensive 3-month full-stack bootcamp, mastering React.js, Node.js, and PostgreSQL.",
      "Implemented administrative dashboard features for end-to-end product management.",
      "Engineered responsive front-ends (React.js, Tailwind CSS) integrated with robust Node.js back-ends.",
      "Developed a full-stack e-commerce platform for mechanical keyboards with seamless user checkout flows.",
    ],
    tags: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Express.js"],
  },
  {
    period: "Nov 2023 — Mar 2024",
    role: "Game Programmer",
    company: "Lentera Nusantara",
    description: "Gameplay mechanics and physics for mobile pinball game 'Tuyul Mantul'",
    meta: "Full-Time · Bandung",
    category: "game",
    icon: LenteraLogo,
    bullets: [
      "Engineered core gameplay mechanics and physics for a mobile pinball game ('Tuyul Mantul') using Unity and C#.",
      "Built API-driven back-end systems to securely manage game data flow and player progression.",
      "Integrated the Google Play API for seamless user authentication and data synchronization.",
      "Optimized dynamic in-game data states throughout development to ensure high performance.",
    ],
    tags: ["Unity", "C#", "Google Play API", "Mobile Game Development"],
  },
  {
    period: "Mar 2023 — Aug 2023",
    role: "Part Time Unity Developer",
    company: "Techpolitan Indonesia Persada",
    description: "Mobile metaverse platform for Android devices",
    meta: "Part-Time · Remote",
    category: "game",
    icon: TechpolitanLogo,
    bullets: [
      "Developed a mobile metaverse platform for Android devices using the Unity Engine.",
      "Architected the multiplayer system for the Techpolitan Metaverse using Photon PUN.",
      "Programmed a cooking simulation minigame encompassing core mechanics, dynamic scoring, and game loop.",
      "Integrated user data and minigame states into the main platform via robust API connections.",
    ],
    tags: ["Unity", "C#", "Photon PUN", "Multiplayer", "API Integration"],
  },
  {
    period: "Feb 2023 — Jun 2023",
    role: "Metaverse Developer Intern",
    company: "BNI (Persero) Tbk",
    description: "VR and desktop-based metaverse projects",
    meta: "Internship · Jakarta",
    category: "game",
    icon: BNILogo,
    bullets: [
      "Developed VR and desktop-based metaverse projects using the Unity Engine and C#.",
      "Built the core multiplayer infrastructure for the BNI Metaverse platform utilizing Photon PUN.",
      "Programmed seamless VR interaction mechanics for the BNI project.",
    ],
    tags: ["Unity", "C#", "VR Development", "Photon PUN"],
  },
  {
    period: "Mar 2022 — Feb 2023",
    role: "Game Programmer Intern",
    company: "Mythologic Studio",
    description: "Minigames and life-simulation RPG game",
    meta: "Internship · Bandung",
    category: "game",
    icon: MythologicLogo,
    bullets: [
      "Developed two minigames and collaborated on a life-simulation RPG using Unity Engine.",
      "Built a mini-racing game with optimized touch controls, leaderboards, and scoring.",
      "Programmed core mechanics and game flow for a hidden-object minigame.",
      "Developed key RPG features including enemy AI, fishing systems, and day/night cycles.",
    ],
    tags: ["Unity", "C#", "Game Design", "RPG Mechanics"],
  },
  {
    period: "Feb 2022 — Apr 2022",
    role: "Unity Programmer Intern",
    company: "Cube Studio",
    description: "Survival-horror game prototype and project leadership training",
    meta: "Internship · Bandung",
    category: "game",
    icon: CubeLogo,
    bullets: [
      "Completed specialized internship training in Unity Programming.",
      "Developed a survival-horror game prototype from the ground up utilizing the Unity Engine.",
      "Managed and mentored incoming programming trainees in the capacity of Project Manager.",
    ],
    tags: ["Unity", "C#", "Project Management", "Game Physics"],
  },
  {
    period: "Jun 2021 — Apr 2022",
    role: "Head of Research and Business Division",
    company: "Multimedia Research Laboratory",
    description: "Research and innovation of multimedia solutions",
    meta: "Organization · Bandung",
    category: "org",
    icon: MetalabLogo,
    bullets: [
      "Led the research and innovation of multimedia solutions targeting global market demands.",
    ],
    tags: ["Leadership", "Multimedia Research", "Innovation"],
  },
  {
    period: "Feb 2021 — Jan 2022",
    role: "Vice Chairman",
    company: "Central Computer Improvement Telkom University",
    description: "Strategic planning and organizational development",
    meta: "Organization · Bandung",
    category: "org",
    icon: CCILogo,
    bullets: [
      "Co-led the strategic planning of CCI's core vision, driving organizational development across all services.",
    ],
    tags: ["Strategy", "Management", "Operations"],
  },
  {
    period: "Feb 2020 — Jan 2021",
    role: "Staff of Education and Competition Handling",
    company: "Himpunan Mahasiswa Teknologi Rekayasa Multimedia",
    description: "Academic activities and competition preparation",
    meta: "Organization · Bandung",
    category: "org",
    icon: HimatrediaLogo,
    bullets: [
      "Managed academic activities and competition preparations within the student association.",
    ],
    tags: ["Event Management", "Competition Handling", "Education"],
  },
];

export const ACHIEVEMENTS = [
  {
    label: "Telkom University GPA",
    value: "3.98",
    sub: "Diploma in Multimedia Engineering Technology",
    accent: "blue",
  },
  {
    label: "Organizations",
    value: "3",
    sub: "Organization roles",
    accent: "purple",
  },
  {
    label: "Web & Web3 Experience",
    value: "2+ Years",
    sub: "Fullstack Web & Blockchain",
    accent: "yellow",
  },
  {
    label: "Game Dev Experience",
    value: "2+ Years",
    sub: "Unity Engine & C#",
    accent: "orange",
  },
  {
    label: "Best Games for Impact",
    value: "Winner",
    sub: "ICE Institute 2022",
    accent: "green",
    link: "https://drive.google.com/file/d/1YdnIGm8UHk_3v9kqhcWGnyCcg3g1JhLb/view?usp=sharing",
  },
  {
    label: "Game Dev Certification",
    value: "Microcredential Game Developer Program",
    sub: "ICE Institute 2022",
    accent: "green",
    link: "https://drive.google.com/file/d/1F26M0ALSJtehK_nJNhsDviM9Bc1IgGnN/view?usp=sharing",
  },
];

export const SPECIALIZATIONS = [
  "Full-Stack Web Development",
  "Blockchain & Web3",
  "Game Development",
];

export const TOOLS = [
  // Programming Languages
  { name: "JavaScript", category: "Language", simple: "javascript" },
  { name: "TypeScript", category: "Language", simple: "typescript" },
  { name: "Solidity", category: "Language", simple: "solidity" },
  { name: "C#", category: "Language", simple: "csharp" },
  { name: "C++", category: "Language", simple: "cplusplus" },

  // Frontend
  { name: "React.js", category: "Frontend", simple: "react" },
  { name: "Next.js", category: "Frontend", simple: "nextdotjs", invert: true },
  { name: "Tailwind CSS", category: "Frontend", simple: "tailwindcss" },

  // Backend & DB
  { name: "Node.js", category: "Backend", simple: "nodedotjs" },
  { name: "Express.js", category: "Backend", simple: "express", invert: true },
  { name: "PostgreSQL", category: "Database", simple: "postgresql" },
  { name: "MongoDB", category: "Database", simple: "mongodb" },

  // Tools & Environment
  { name: "Unity", category: "Game Dev", simple: "unity" },
  { name: "Ethers.js", category: "Web3", simple: "ethers" },
  { name: "Hardhat", category: "Web3", simple: "hardhat" },
  { name: "IPFS (Pinata)", category: "Web3", simple: "ipfs" },
  { name: "Git", category: "Tools", simple: "git" },
  { name: "Linux", category: "OS", simple: "linux" },
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

export const ABOUT_TAGS = ["FULL-STACK DEV", "BLOCKCHAIN DEV", "GAME DEV"];

export const ABOUT_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Solidity",
  "Node.js",
  "PostgreSQL",
  "Unity",
];

export const ABOUT_SECTIONS = [
  {
    title: "Who I Am",
    body: "I'm Dionovan Ramadhani, a South Jakarta-based Full-Stack Web & Blockchain Developer. I specialize in building end-to-end web architectures, combining smart contract integration with robust backends and highly responsive, modern frontends.",
  },
  {
    title: "What I Do",
    body: "Currently a Fullstack Developer at Emveep, where I engineer architectures bridging web apps, backends, and blockchain layers (decentralized Web3 platforms and Telegram Mini Apps). I focus on creating high-performance user experiences that integrate secure blockchain workflows and automated state management.",
  },
  {
    title: "My Journey",
    body: "I graduated from Universitas Telkom with a Diploma in Multimedia Engineering Technology, earning a GPA of 3.98/4.00. I have a strong analytical foundation from a previous background in game development, where I built mobile multiplayer systems, VR interactions, and gameplay physics using Unity and C#.",
  },
  {
    title: "Vision",
    body: "I believe that robust, well-architected fullstack applications are the backbone of modern digital experiences. I strive to design and build highly performant, secure, and scalable web solutions that seamlessly integrate intelligent AI capabilities and complex backend infrastructures with beautiful, intuitive, and responsive user interfaces.",
  },
  {
    title: "Technical Skills",
    body: "I am highly proficient in a diverse technical stack spanning web development, blockchain protocols, and game programming. My core expertise includes JavaScript, TypeScript, Solidity, C#, C++, React, Next.js, Node.js, PostgreSQL, MongoDB, Unity, Ethers.js, and Hardhat.",
  },
];
