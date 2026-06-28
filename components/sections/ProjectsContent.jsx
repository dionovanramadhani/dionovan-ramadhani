import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, TAG_TONE } from "../../lib/data";

export const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export const gridVariants = {
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

export const ProjectsContent = () => {
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
