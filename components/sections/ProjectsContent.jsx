import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Cpu } from "lucide-react";
import { PROJECTS, TAG_TONE } from "../../lib/data";
import Image from "next/image";

const MotionImage = motion.create(Image);

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 12,
    transition: { duration: 0.2 },
  },
};

export const gridVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const visitIconVariants = {
  initial: { x: 0, y: 0 },
  hover: { x: 2, y: -2, transition: { type: "spring", stiffness: 400, damping: 15 } },
};

const githubIconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const STATUS_TONE = {
  active: {
    text: "text-accent-green",
    ring: "ring-accent-green/50 border-accent-green/45",
    dot: "bg-accent-green",
  },
  launched: {
    text: "text-gruv-aqua",
    ring: "ring-gruv-aqua/50 border-gruv-aqua/45",
    dot: "bg-gruv-aqua",
  },
  beta: {
    text: "text-accent-yellow",
    ring: "ring-accent-yellow/50 border-accent-yellow/45",
    dot: "bg-accent-yellow",
  },
  mainnet: {
    text: "text-accent-green",
    ring: "ring-accent-green/50 border-accent-green/45",
    dot: "bg-accent-green",
  },
  testnet: {
    text: "text-gruv-purple",
    ring: "ring-gruv-purple/50 border-gruv-purple/45",
    dot: "bg-gruv-purple",
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="show"
      exit="exit"
      data-project-title={project.title}
      style={{ willChange: "transform, opacity" }}
      className="group flex transform-gpu flex-col overflow-hidden rounded-xl border border-bg-elev/60 bg-bg-normal shadow-lg shadow-black/20 transition-all duration-300 hover:border-accent-green/40 hover:shadow-accent-green/5"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-hard">
        {project.platform === "smart contract" || !project.image ? (
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="relative h-full w-full bg-[#1d2021] p-4 font-mono text-[10px] text-fg-dim flex flex-col justify-between select-none will-change-transform"
          >
            {/* Mac window buttons */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-bg-elev/30">
              <span className="h-2 w-2 rounded-full bg-gruv-red/80" />
              <span className="h-2 w-2 rounded-full bg-accent-yellow/80" />
              <span className="h-2 w-2 rounded-full bg-accent-green/80" />
              <span className="ml-2 text-[9px] text-fg-muted font-mono">contract.sol</span>
            </div>
            {/* Mock Solidity Code */}
            <div className="flex-1 space-y-1 pt-3 text-left opacity-90 font-mono text-[9px] leading-relaxed">
              <div>
                <span className="text-accent-blue font-semibold">pragma</span>{" "}
                <span className="text-accent-yellow">solidity</span> ^0.8.20;
              </div>
              <div className="mt-1">
                <span className="text-accent-blue font-semibold">contract</span>{" "}
                <span className="text-accent-green font-semibold">{project.title.replace(/\s+/g, "")}</span> {"{"}
              </div>
              <div className="pl-4 text-fg-muted">// Deployed Smart Contract</div>
              <div className="pl-4">
                <span className="text-accent-blue font-semibold">address</span> public owner;
              </div>
              <div className="pl-4">
                <span className="text-accent-blue font-semibold">mapping</span>(address =&gt; uint) balances;
              </div>
              <div>{"}"}</div>
            </div>
            <Cpu className="absolute bottom-3 right-3 h-14 w-14 text-accent-green/10 pointer-events-none" />
            {/* Subtle status tag at top right */}
            {project.status && (
              <div className={[
                "absolute right-3 top-3 flex items-center gap-1.5 text-[8px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border bg-bg-hard/95 shadow-md shadow-black/30 backdrop-blur-sm transition-colors duration-200",
                STATUS_TONE[project.status]?.text || "text-fg-dim",
                STATUS_TONE[project.status]?.ring || "border-bg-elev/80",
              ].join(" ")}>
                <span className={["h-1.5 w-1.5 rounded-full animate-pulse", STATUS_TONE[project.status]?.dot || "bg-fg-dim"].join(" ")} />
                {project.status}
              </div>
            )}
          </motion.div>
        ) : (
          <>
            <MotionImage
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.04 },
              }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              src={project.image}
              alt={project.title}
              width={720}
              height={450}
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover will-change-transform"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-hard/70 via-transparent to-transparent" />
            {project.status && (
              <span className={[
                "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-bg-hard/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 shadow-md shadow-black/40 backdrop-blur-sm transition-all duration-200",
                STATUS_TONE[project.status]?.text || "text-fg-dim",
                STATUS_TONE[project.status]?.ring || "ring-bg-elev/80",
              ].join(" ")}>
                <span className={["h-1.5 w-1.5 rounded-full animate-pulse-glow", STATUS_TONE[project.status]?.dot || "bg-fg-dim"].join(" ")} />
                {project.status}
              </span>
            )}
          </>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-accent-green">
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
          {project.visit && (
            <motion.a
              href={project.visit}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-fg px-3 py-1.5 text-xs font-medium text-bg-hard transition-colors hover:bg-accent-green"
            >
              <motion.span variants={visitIconVariants}>
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </motion.span>
              <span>Visit</span>
            </motion.a>
          )}
          {project.github && project.github !== "#" && project.github !== "" && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-bg-elev/80 px-3 py-1.5 text-xs font-medium text-fg-dim transition-colors hover:border-accent-green/60 hover:text-fg"
            >
              <motion.span variants={githubIconVariants}>
                <Github className="h-3.5 w-3.5" strokeWidth={2} />
              </motion.span>
              <span>GitHub</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const PLATFORMS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "smart contract", label: "Contracts" },
  { id: "game", label: "Games" },
];

export const ProjectsContent = () => {
  const [activePlatform, setActivePlatform] = useState("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activePlatform === "all") return true;
    return p.platform === activePlatform;
  });

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
        {/* Header & Filter Tabs */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
              Projects
            </h1>
          </div>

          {/* Platform Filter Tabs */}
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="grid grid-cols-4 w-full gap-1 rounded-lg bg-bg-hard/50 p-1 border border-bg-elev/30 sm:flex sm:w-auto sm:flex-wrap [&::-webkit-scrollbar]:hidden"
          >
            {PLATFORMS.map((tab) => {
              const isActive = activePlatform === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePlatform(tab.id)}
                  className={[
                    "relative w-full py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors duration-200 cursor-pointer select-none flex-shrink-0 flex items-center justify-center sm:w-auto sm:px-3.5",
                    isActive ? "text-bg-hard font-bold" : "text-fg-dim hover:text-fg",
                  ].join(" ")}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-platform-pill"
                      className="absolute inset-0 bg-accent-green rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default ProjectsContent;
