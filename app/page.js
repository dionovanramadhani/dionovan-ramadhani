"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  BookOpen,
  Hexagon,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Code2,
  Rocket,
  Cpu,
  GraduationCap,
  Trophy,
  Users,
  DollarSign,
  Calendar,
  Flame,
  Wind,
  Heart,
  Search,
  Terminal,
  Play,
  Phone,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Typewriter \u2014 cycles through an array of roles with type \u2192 hold \u2192 erase     */
/* -------------------------------------------------------------------------- */

const useTypewriter = (
  words,
  { typeSpeed = 75, eraseSpeed = 40, holdTime = 1400, gapTime = 350 } = {},
) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | erasing | gap

  useEffect(() => {
    const current = words[index % words.length];
    let timer;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("erasing"), holdTime);
    } else if (phase === "erasing") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), eraseSpeed);
      } else {
        timer = setTimeout(() => setPhase("gap"), 0);
      }
    } else if (phase === "gap") {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, gapTime);
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, words, typeSpeed, eraseSpeed, holdTime, gapTime]);

  return text;
};

/* -------------------------------------------------------------------------- */
/*  Sidebar — fixed left rail with identity, nav, socials                     */
/* -------------------------------------------------------------------------- */

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

const socials = [
  { label: "X (Twitter)", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Medium", icon: BookOpen, href: "#" },
  { label: "Github", icon: Github, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

const Sidebar = ({ activeView, onSelect }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col justify-between border-r border-bg-elev/40 bg-bg-hard px-5 py-6 md:flex">
      {/* Identity */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-normal ring-1 ring-bg-elev/60">
            <Hexagon className="h-5 w-5 text-accent-blue" strokeWidth={1.75} />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-fg">
              Your Name
            </div>
            <div className="text-xs text-fg-muted">Portfolio</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={[
                  "group flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors",
                  isActive
                    ? "bg-bg-normal text-fg ring-1 ring-bg-elev/60"
                    : "text-fg-dim hover:bg-bg-normal/60 hover:text-fg",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Connect + Footer */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="px-3 text-[11px] uppercase tracking-[0.18em] text-fg-muted">
            Connect
          </div>
          <div className="flex flex-col">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md px-3 py-1.5 text-sm text-fg-dim transition-colors hover:text-accent-green"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-bg-elev/40 pt-4 text-[11px] text-fg-muted">
          Made with <span className="text-gruv-red">♥</span> · ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
};

/* -------------------------------------------------------------------------- */
/*  Main Content Window — rounded, embedded, scrollable                        */
/* -------------------------------------------------------------------------- */

const WindowChrome = () => {
  return (
    <div className="flex items-center justify-between border-b border-bg-elev/50 bg-bg-hard/70 px-4 py-2.5 backdrop-blur">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-gruv-red/90" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow/90" />
        <span className="h-3 w-3 rounded-full bg-accent-green/90" />
      </div>
      <div className="text-xs text-fg-muted">
        <span className="text-fg-dim">~/portfolio</span>
        <span className="mx-1">—</span>
        <span>zsh</span>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-fg-muted">
        <span className="inline-flex h-2 w-2 animate-pulse-glow rounded-full bg-accent-green" />
        online
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Home page \u2014 the content that lives inside the embedded main window         */
/* -------------------------------------------------------------------------- */

const ROLES = ["Frontend Developer", "Backend Developer", "Blockchain Developer"];

const HomeContent = () => {
  const typed = useTypewriter(ROLES);

  return (
    <div className="relative isolate">
      {/* Soft Gruvbox green/aqua glow in the top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.35), rgba(142,192,124,0.18) 55%, rgba(29,32,33,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-24 -z-10 h-[300px] w-[300px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(142,192,124,0.30), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex min-h-full max-w-5xl flex-col items-start gap-8 px-6 py-14 md:px-12 md:py-20">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2 text-xs text-fg-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-green" />
          <span>available for work</span>
        </motion.div>

        {/* Intro */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-6xl"
        >
          <span className="text-fg-dim">Hi, I&apos;m</span>{" "}
          <span className="text-accent-green">Dionovan Ramadhani</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full items-baseline gap-3 whitespace-nowrap"
        >
          <span className="text-xl text-fg-dim md:text-2xl">a</span>

          <span className="relative inline-block whitespace-nowrap">
            {/* Reserve width so layout doesn't jump as text length changes */}
            <span
              aria-hidden
              className="invisible whitespace-pre text-2xl font-semibold tracking-tight md:text-4xl"
            >
              {ROLES.reduce((a, b) => (a.length >= b.length ? a : b))}
              {"\u00A0"}
            </span>

            <span className="absolute inset-y-0 left-0 flex items-baseline whitespace-nowrap">
              <span className="text-2xl font-semibold tracking-tight text-accent-yellow md:text-4xl">
                {typed}
              </span>
              <span
                aria-hidden
                className="ml-1 inline-block h-7 w-[3px] translate-y-[3px] animate-caret bg-accent-green md:h-9"
              />
            </span>
          </span>
        </motion.div>

        {/* Subtle prompt line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl text-sm leading-relaxed text-fg-dim md:text-base"
        >
          <span className="text-fg-muted">{">"}</span> I design and ship end-to-end
          products — from pixel-perfect interfaces to scalable services and on-chain
          logic. Currently exploring the intersection of{" "}
          <span className="text-accent-blue">AI</span>,{" "}
          <span className="text-accent-yellow">DX</span> and{" "}
          <span className="text-accent-green">web3</span>.
        </motion.p>
      </div>
    </div>
  );
};

const MainWindow = ({ activeView }) => {
  const renderContent = () => {
    switch (activeView) {
      case "projects":
        return <ProjectsContent />;
      case "experience":
        return <ExperienceContent />;
      case "tools":
        return <ToolsContent />;
      case "about":
        return <AboutContent />;
      case "contact":
        return <ContactContent />;
      case "home":
        return <HomeContent />;
      default:
        return <ComingSoon view={activeView} />;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="md:ml-[260px] min-h-screen p-4 md:p-6"
    >
      <div className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-hidden rounded-2xl border border-bg-elev/60 bg-bg-normal shadow-2xl shadow-black/40">
        <WindowChrome />

        {/* Scrollable area */}
        <div className="scrollbar-thin h-[calc(100%-2.75rem)] overflow-y-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: "linear" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Preload project thumbnails so the Projects tab opens instantly */}
          <div
            aria-hidden
            className="pointer-events-none fixed -z-50 h-0 w-0 overflow-hidden opacity-0"
          >
            {PROJECTS.map((p) => (
              <img key={p.image} src={p.image} alt="" width={1} height={1} />
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

const PROJECTS = [
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

const TAG_TONE = {
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

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0,
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -3, transition: { duration: 0.18, ease: "easeOut" } }}
      style={{ willChange: "transform, opacity" }}
      className="group flex transform-gpu flex-col overflow-hidden rounded-xl border border-bg-elev/60 bg-bg-normal shadow-lg shadow-black/20 transition-colors hover:border-accent-green/40"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-hard">
        <img
          src={project.image}
          alt={project.title}
          width={720}
          height={450}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-hard/70 via-transparent to-transparent" />
        {project.status === "active" && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent-green/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent-green ring-1 ring-accent-green/40">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            active
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed text-fg-dim">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className={[
                "inline-flex items-center rounded-md bg-bg-hard/70 px-2 py-0.5 text-[10px] font-medium ring-1",
                TAG_TONE[t] || "text-fg-dim ring-bg-elev/60",
              ].join(" ")}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2 pt-2">
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-fg px-3 py-1.5 text-xs font-medium text-bg-hard transition-colors hover:bg-accent-green"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            Visit
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-bg-elev/80 px-3 py-1.5 text-xs font-medium text-fg-dim transition-colors hover:border-accent-green/60 hover:text-fg"
          >
            <Github className="h-3.5 w-3.5" strokeWidth={2} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsContent = () => {
  return (
    <div className="relative isolate">
      {/* Soft top-left ambient glow (consistent with Home) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.25), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:px-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Projects
          </h1>
          <p className="text-sm text-fg-dim">
            <span className="text-fg-muted">{"~/"}</span>playground —{" "}
            <span className="text-accent-yellow">small MVPs</span> to{" "}
            <span className="text-accent-green">production apps</span>.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Experience \u2014 vertical timeline                                            */
/* -------------------------------------------------------------------------- */

const CATEGORY_TONE = {
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

const TIMELINE = [
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

const ACHIEVEMENTS = [
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

const SPECIALIZATIONS = [
  "AI/ML Integration",
  "Startup Scaling",
  "Full-Stack Development",
  "Team Leadership",
];

const TimelineNode = ({ tone, Icon }) => {
  return (
    <div className="relative flex w-10 justify-center md:w-12">
      {/* Continuous vertical line (covered by the node where they overlap) */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-bg-elev" />
      {/* The node */}
      <div
        className={[
          "relative z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full ring-2 md:h-10 md:w-10",
          "bg-bg-hard",
          tone.ring,
        ].join(" ")}
      >
        <Icon
          className={["h-4 w-4 md:h-[18px] md:w-[18px]", tone.text].join(" ")}
          strokeWidth={1.75}
        />
        <span
          className={[
            "absolute -z-10 h-full w-full rounded-full blur-md opacity-50",
            tone.soft,
          ].join(" ")}
        />
      </div>
    </div>
  );
};

const TimelineItem = ({ item }) => {
  const tone = CATEGORY_TONE[item.category];
  const Icon = item.icon;

  const itemRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".overflow-y-auto");
    if (!container) return;

    const handleScroll = () => {
      if (!itemRef.current) return;
      const containerRect = container.getBoundingClientRect();
      const itemRect = itemRef.current.getBoundingClientRect();

      const isAtBottom =
        container.scrollHeight - container.scrollTop <= container.clientHeight + 12;
      if (isAtBottom) {
        setProgress(1);
        return;
      }

      const triggerY = containerRect.top + 350;
      const lineStart = itemRect.top;
      const lineEnd = itemRect.bottom;

      if (triggerY < lineStart) {
        setProgress(0);
      } else if (triggerY > lineEnd) {
        setProgress(1);
      } else {
        const p = (triggerY - lineStart) / (lineEnd - lineStart);
        setProgress(p);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div ref={itemRef} variants={cardVariants} className="pb-48 md:pb-72">
      <div className="bg-bg-normal pt-4 md:pt-6">
        <div className="relative grid grid-cols-[7rem_auto_1fr] gap-x-5 md:grid-cols-[10rem_auto_1fr] md:gap-x-8">
          {/* Left — period */}
          <div className="sticky top-4 self-start pt-2 text-right">
            <div className="text-xs text-fg-muted md:text-sm">{item.period}</div>
          </div>

          {/* Center — node + line */}
          <div className="relative flex w-10 justify-center md:w-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -bottom-56 md:-bottom-80 w-px bg-bg-elev overflow-hidden">
              <div
                className={[
                  "w-full origin-top transition-transform duration-75",
                  tone.bg,
                ].join(" ")}
                style={{ transform: `scaleY(${progress})`, height: "100%" }}
              />
            </div>
            <div
              className={[
                "sticky top-4 z-10 mt-0 flex h-9 w-9 items-center justify-center rounded-full ring-2 md:h-10 md:w-10",
                "bg-bg-hard",
                tone.ring,
              ].join(" ")}
            >
              <Icon
                className={["h-4 w-4 md:h-[18px] md:w-[18px]", tone.text].join(" ")}
                strokeWidth={1.75}
              />
              <span
                className={[
                  "absolute -z-10 h-full w-full rounded-full blur-md opacity-50",
                  tone.soft,
                ].join(" ")}
              />
            </div>
          </div>

          {/* Right — card */}
          <div>
            <div className="rounded-xl border border-bg-elev/60 bg-bg-normal/70 p-5 transition-colors hover:border-accent-green/30">
              <div className="mb-3 flex items-start gap-3">
                <div
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1",
                    tone.soft,
                    tone.ring,
                  ].join(" ")}
                >
                  <Icon className={["h-4 w-4", tone.text].join(" ")} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold tracking-tight text-fg md:text-base">
                    {item.role}
                    {item.company && (
                      <>
                        <span className="text-fg-muted"> · </span>
                        <span className={tone.text}>{item.company}</span>
                      </>
                    )}
                  </h3>
                  <p className="text-xs text-fg-dim md:text-sm">{item.description}</p>
                  <p className="mt-0.5 text-[11px] text-fg-muted">{item.meta}</p>
                </div>
              </div>

              <ul className="mb-4 space-y-1.5 pl-1">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-xs leading-relaxed text-fg-dim md:text-[13px]"
                  >
                    <span
                      className={[
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        tone.bg,
                      ].join(" ")}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-bg-hard/70 px-2 py-0.5 text-[10px] font-medium text-fg-dim ring-1 ring-bg-elev/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const KeyAchievements = () => {
  const accentMap = {
    green: "text-accent-green",
    blue: "text-accent-blue",
    yellow: "text-accent-yellow",
    purple: "text-gruv-purple",
  };

  const itemRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".overflow-y-auto");
    if (!container) return;

    const handleScroll = () => {
      if (!itemRef.current) return;
      const containerRect = container.getBoundingClientRect();
      const itemRect = itemRef.current.getBoundingClientRect();

      const isAtBottom =
        container.scrollHeight - container.scrollTop <= container.clientHeight + 12;
      if (isAtBottom) {
        setProgress(1);
        return;
      }

      const triggerY = containerRect.top + 350;
      const lineStart = itemRect.top - 24;
      const lineEnd = itemRect.top + 24;

      if (triggerY < lineStart) {
        setProgress(0);
      } else if (triggerY > lineEnd) {
        setProgress(1);
      } else {
        const p = (triggerY - lineStart) / (lineEnd - lineStart);
        setProgress(p);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div ref={itemRef} variants={cardVariants} className="pb-48 md:pb-72">
      <div className="bg-bg-normal pt-4 md:pt-6">
        <div className="relative grid grid-cols-[7rem_auto_1fr] gap-x-5 md:grid-cols-[10rem_auto_1fr] md:gap-x-8">
          {/* Left */}
          <div className="sticky top-2 self-start pt-2 text-right">
            <div className="text-xs text-fg-muted md:text-sm">Key Achievements</div>
          </div>

          {/* Node */}
          <div className="relative flex w-10 justify-center md:w-12">
            <div className="absolute left-1/2 -top-4 md:-top-6 -translate-x-1/2 h-[38px] md:h-[48px] w-px bg-bg-elev overflow-hidden">
              <div
                className="w-full origin-top transition-transform duration-75 bg-accent-green"
                style={{ transform: `scaleY(${progress})`, height: "100%" }}
              />
            </div>
            <div className="sticky top-2 z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-bg-hard ring-2 ring-accent-green/40 md:h-10 md:w-10">
              <Trophy
                className="h-4 w-4 text-accent-green md:h-[18px] md:w-[18px]"
                strokeWidth={1.75}
              />
              <span className="absolute -z-10 h-full w-full rounded-full bg-accent-green/10 blur-md opacity-50" />
            </div>
          </div>

          {/* Card */}
          <div>
            <div className="rounded-xl border border-bg-elev/60 bg-bg-normal/70 p-5">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-green/10 ring-1 ring-accent-green/40">
                  <Flame className="h-4 w-4 text-accent-green" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-fg md:text-base">
                    Milestones & Recognition
                  </h3>
                  <p className="text-xs text-fg-dim">
                    Significant achievements across the journey
                  </p>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3">
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.label}
                    className="rounded-lg border border-bg-elev/50 bg-bg-hard/60 p-4"
                  >
                    <div
                      className={[
                        "text-[11px] uppercase tracking-wider",
                        accentMap[a.accent],
                      ].join(" ")}
                    >
                      {a.label}
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight text-fg">
                      {a.value}
                    </div>
                    <div className="mt-0.5 text-[11px] text-fg-muted">{a.sub}</div>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-accent-green">
                  Specializations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SPECIALIZATIONS.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-md bg-accent-green/10 px-2.5 py-1 text-[11px] font-medium text-accent-green ring-1 ring-accent-green/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceContent = () => {
  return (
    <div className="relative isolate">
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:px-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-blue/40 bg-accent-blue/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-accent-blue">
            <Calendar className="h-3 w-3" strokeWidth={2.25} />
            Career Timeline
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Changelog from my journey
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-fg-dim md:text-base">
            I&apos;ve been working at Hexagon Digital Services for the past 2.5 years.
            Here&apos;s a timeline of my journey across multiple startups and projects.
          </p>

          {/* Legend */}
          <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-fg-dim md:text-xs">
            {Object.entries(CATEGORY_TONE).map(([key, tone]) => (
              <span key={key} className="inline-flex items-center gap-1.5">
                <span className={["h-1.5 w-1.5 rounded-full", tone.bg].join(" ")} />
                {tone.label}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="relative mt-2"
        >
          {TIMELINE.map((item) => (
            <TimelineItem key={item.period} item={item} />
          ))}
          {/* Final node: Key Achievements */}
          <KeyAchievements />
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Tools \u2014 "Shovels" grid                                                    */
/* -------------------------------------------------------------------------- */

const TOOLS = [
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

const TONE_BG = {
  red: "bg-gruv-red/15 ring-gruv-red/30 text-gruv-red",
  orange: "bg-gruv-orange/15 ring-gruv-orange/30 text-gruv-orange",
  yellow: "bg-accent-yellow/15 ring-accent-yellow/30 text-accent-yellow",
  green: "bg-accent-green/15 ring-accent-green/30 text-accent-green",
  aqua: "bg-gruv-aqua/15 ring-gruv-aqua/30 text-gruv-aqua",
  blue: "bg-accent-blue/15 ring-accent-blue/30 text-accent-blue",
  purple: "bg-gruv-purple/15 ring-gruv-purple/30 text-gruv-purple",
  default: "bg-bg-elev/40 ring-bg-elev/60 text-fg-dim",
};

const ToolLogo = ({ tool }) => {
  if (tool.icon) {
    const Icon = tool.icon;
    const toneClass = TONE_BG[tool.tone || "default"];
    return (
      <div
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1",
          toneClass,
        ].join(" ")}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
    );
  }

  if (tool.simple) {
    return (
      <div
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bg-elev/40 ring-1 ring-bg-elev/60",
          tool.invert ? "p-2.5" : "p-2",
        ].join(" ")}
      >
        <img
          src={`https://cdn.simpleicons.org/${tool.simple}`}
          alt={`${tool.name} logo`}
          width={28}
          height={28}
          className={[
            "h-full w-full object-contain",
            tool.invert ? "brightness-0 invert opacity-90" : "",
          ].join(" ")}
          loading="lazy"
        />
      </div>
    );
  }

  // Generic image URL (favicon, brand logo URL, etc.)
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-bg-elev/40 ring-1 ring-bg-elev/60">
      <img
        src={tool.src || tool.logo}
        alt={`${tool.name} logo`}
        width={44}
        height={44}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

const ToolCard = ({ tool }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.18, ease: "easeOut" },
      }}
      className="group flex items-center gap-4 rounded-xl border border-bg-elev/40 bg-bg-hard/60 p-4 transition-colors hover:border-accent-green/40 hover:bg-bg-hard"
    >
      <ToolLogo tool={tool} />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold tracking-tight text-fg">
          {tool.name}
        </div>
        <div className="truncate text-[11px] text-fg-muted">{tool.category}</div>
      </div>
    </motion.div>
  );
};

const ToolsContent = () => {
  return (
    <div className="relative isolate">
      {/* Soft glow for consistency with other tabs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:px-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Shovels
          </h1>
          <p className="text-sm text-fg-muted md:text-base">
            Tools I frequently use to make life easier
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TOOLS.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

const ABOUT_TAGS = [
  "FULL-STACK DEV",
  "AI ENGINEER",
  "LLMS",
  "TRAVEL",
  "MUSIC",
  "F1",
  "READING",
];

const ABOUT_STACK = [
  "React",
  "LLM",
  "Rails",
  "Next.js",
  "TypeScript",
  "Postgres",
  "Redis",
];

const ABOUT_SECTIONS = [
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

const SectionHeader = ({ title }) => {
  return (
    <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-fg md:text-2xl">
      <span>{title}</span>
      <span
        aria-hidden
        className="inline-block h-5 w-[3px] translate-y-[1px] animate-caret bg-accent-green md:h-6"
      />
    </h2>
  );
};

const AboutContent = () => {
  return (
    <div className="relative isolate">
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-14 md:px-10 md:py-16">
        {/* Hero name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-6xl font-semibold leading-none tracking-tight text-fg md:text-7xl"
        >
          Virat
        </motion.h1>

        {/* Bullet-separated tags */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="-mt-4 text-[11px] tracking-[0.18em] text-fg-muted md:text-xs"
        >
          {ABOUT_TAGS.map((t, i) => (
            <span key={t}>
              {t}
              {i < ABOUT_TAGS.length - 1 && (
                <span className="mx-2 text-fg-muted/60">•</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="-mt-4 flex flex-wrap gap-2"
        >
          {ABOUT_STACK.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-bg-elev/70 bg-bg-hard px-3 py-1 text-[12px] text-fg-dim transition-colors hover:border-accent-green/40 hover:text-fg"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* Content sections */}
        <div className="mt-2 flex flex-col gap-10">
          {ABOUT_SECTIONS.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 + i * 0.05 }}
              className="flex flex-col gap-3"
            >
              <SectionHeader title={s.title} />
              <p className="text-[13.5px] leading-relaxed text-fg-dim md:text-sm">
                {s.body}
              </p>
            </motion.section>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg-hard transition-colors hover:bg-accent-green"
          >
            Get in Touch
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-bg-elev/80 px-4 py-2 text-sm font-medium text-fg-dim transition-colors hover:border-accent-green/60 hover:text-fg"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            E-Mail
          </a>
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Contact \u2014 Get in Touch                                                    */
/* -------------------------------------------------------------------------- */

const QuickCard = ({ Icon, label, value, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-xl border border-bg-elev/60 bg-bg-hard/70 px-4 py-3 transition-colors hover:border-accent-green/40"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-elev/60 ring-1 ring-bg-elev/60 group-hover:ring-accent-green/30">
        <Icon
          className="h-4 w-4 text-fg-dim group-hover:text-accent-green"
          strokeWidth={2}
        />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-fg-muted">{label}</div>
        <div className="truncate text-sm text-fg">{value}</div>
      </div>
    </a>
  );
};

const FieldInput = ({ id, label, type = "text", ...rest }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        className="w-full rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/30"
        {...rest}
      />
    </div>
  );
};

const ContactContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet \u2014 just a UX-friendly noop. Hook up to /api later.
    const form = e.currentTarget;
    form.reset();
  };

  // Subtle SVG mesh-grid pattern (encoded inline for performance)
  const gridBg =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><path d='M48 0H0v48' fill='none' stroke='%23ebdbb2' stroke-opacity='0.06' stroke-width='1'/></svg>\")";

  return (
    <div className="relative isolate">
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-14 md:px-10 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-5xl font-semibold leading-none tracking-tight text-fg md:text-6xl">
            Get in Touch
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-fg-muted md:text-base">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Quick contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <QuickCard
            Icon={Mail}
            label="Email"
            value="hello@viratk.ai"
            href="mailto:hello@viratk.ai"
          />
          <QuickCard
            Icon={Twitter}
            label="Twitter"
            value="@viratk"
            href="https://twitter.com/viratk"
          />
        </motion.div>

        {/* Form container with subtle grid mesh background */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="relative overflow-hidden rounded-2xl border border-bg-elev/60 bg-bg-normal/60 p-5 md:p-7"
        >
          {/* Mesh background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ backgroundImage: gridBg }}
          />
          {/* Soft inner vignette to fade grid at edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(29,32,33,0) 0%, rgba(29,32,33,0.6) 100%)",
            }}
          />

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FieldInput id="name" label="Name" required />
              <FieldInput id="email" label="Email" type="email" required />
            </div>
            <FieldInput id="subject" label="Subject" required />
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="w-full resize-none rounded-lg border border-bg-elev/60 bg-bg-hard/60 px-4 py-3 text-sm text-fg placeholder:text-fg-muted/80 outline-none transition focus:border-accent-green/60 focus:ring-2 focus:ring-accent-green/30"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg-hard transition-colors hover:bg-accent-green"
              >
                <span>Send Message</span>
                <Play
                  className="h-3.5 w-3.5 fill-current transition-transform group-hover:translate-x-0.5"
                  strokeWidth={0}
                />
              </button>
            </div>
          </div>
        </motion.form>

        {/* Footer helper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="text-center text-xs text-fg-muted"
        >
          Prefer to schedule a call? <span className="text-fg-dim">9005-123-456</span>
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Placeholder for tabs not yet implemented                                   */
/* -------------------------------------------------------------------------- */

const ComingSoon = ({ view }) => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-3 px-6 py-16 md:px-10">
      <div className="flex items-center gap-2 text-xs text-fg-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
        <span>building</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl capitalize">
        {view}
      </h2>
      <p className="text-sm text-fg-dim">
        <span className="text-fg-muted">{">"}</span> this section is being shipped soon.
        Check back in a bit.
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  App                                                                       */
/* -------------------------------------------------------------------------- */

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="min-h-screen bg-bg-hard text-fg font-mono selection:bg-accent-green/30 selection:text-fg">
      <Sidebar activeView={activeView} onSelect={setActiveView} />
      <MainWindow activeView={activeView} />
    </div>
  );
}

export default App;
