import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TOOLS, TONE_BG } from "../../lib/data";
import { cardVariants, gridVariants } from "./ProjectsContent";
import { CSharpLogo, HardhatLogo, PinataLogo } from "@/lib/images";
import Image from "next/image";

const logoHoverVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 6,
    transition: { type: "spring", stiffness: 350, damping: 15 },
  },
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
        <Image
          src={
            tool.simple === "csharp"
              ? CSharpLogo
              : tool.simple === "hardhat"
                ? HardhatLogo
                : tool.simple === "ipfs"
                  ? PinataLogo
                  : `https://cdn.simpleicons.org/${tool.simple}`
          }
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
  // Map specific tool border highlights on hover based on their category
  const categoryTones = {
    Language: "hover:border-accent-yellow/45 hover:shadow-accent-yellow/5",
    Frontend: "hover:border-accent-blue/45 hover:shadow-accent-blue/5",
    Backend: "hover:border-accent-green/45 hover:shadow-accent-green/5",
    Database: "hover:border-gruv-aqua/45 hover:shadow-gruv-aqua/5",
    "Game Dev": "hover:border-gruv-orange/45 hover:shadow-gruv-orange/5",
    Web3: "hover:border-gruv-purple/45 hover:shadow-gruv-purple/5",
    Tools: "hover:border-accent-yellow/45 hover:shadow-accent-yellow/5",
    OS: "hover:border-fg-muted/30 hover:shadow-black/5",
  };
  const hoverClass =
    categoryTones[tool.category] ||
    "hover:border-accent-green/30 hover:shadow-accent-green/5";

  // 3D Tilt logic values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to rotations (tilt toward cursor)
  const rotateX = useTransform(y, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(x, [-0.5, 0.5], [20, -20]);

  // Dampen coordinates with springs for fluid motion
  const springRotateX = useSpring(rotateX, { stiffness: 250, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        initial="initial"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={[
          "group flex items-center gap-4 rounded-xl border border-bg-elev/40 bg-bg-hard/60 p-4 transition-all duration-300 hover:bg-bg-hard hover:shadow-lg",
          hoverClass,
        ].join(" ")}
      >
        <motion.div
          variants={logoHoverVariants}
          style={{ transformStyle: "preserve-3d", translateZ: 30 }}
        >
          <ToolLogo tool={tool} />
        </motion.div>
        <div
          className="min-w-0 flex-1"
          style={{ transformStyle: "preserve-3d", translateZ: 15 }}
        >
          <div className="truncate text-sm font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-fg">
            {tool.name}
          </div>
          <div className="truncate text-[11px] text-fg-muted">{tool.category}</div>
        </div>
      </motion.div>
    </div>
  );
};

export const SkillContent = () => {
  // Group tools dynamically by their category property
  const groupedTools = TOOLS.reduce((acc, tool) => {
    const cat = tool.category;
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(tool);
    return acc;
  }, {});

  // Order categories logically: languages first, frontend, backend, database, game dev, web3, tools, os
  const catOrder = [
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "Game Dev",
    "Web3",
    "Tools",
    "OS",
  ];
  const sortedCategories = Object.entries(groupedTools).sort((a, b) => {
    const idxA = catOrder.indexOf(a[0]);
    const idxB = catOrder.indexOf(b[0]);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a[0].localeCompare(b[0]);
  });

  return (
    <div className="relative isolate">
      {/* Soft glow for consistency */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,187,38,0.22), rgba(29,32,33,0) 70%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:px-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            Tech Stack & Tools
          </h1>
          <p className="text-sm text-fg-muted md:text-base">
            Technologies and tools I work with to build web apps, smart contracts, and
            games
          </p>
        </div>

        {/* Categorized Lists */}
        <div className="flex flex-col gap-10">
          {sortedCategories.map(([category, tools]) => (
            <div key={category} className="flex flex-col gap-4">
              <h2 className="text-sm font-semibold tracking-wider text-accent-green uppercase border-b border-bg-elev/40 pb-2">
                {category}
              </h2>
              <motion.div
                variants={gridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
              >
                {tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillContent;
