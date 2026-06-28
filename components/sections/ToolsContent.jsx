import React from "react";
import { motion } from "framer-motion";
import { TOOLS, TONE_BG } from "../../lib/data";
import { cardVariants, gridVariants } from "./ProjectsContent";

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

export const ToolsContent = () => {
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
