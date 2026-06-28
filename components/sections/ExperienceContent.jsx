import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, Trophy, Flame } from "lucide-react";
import { CATEGORY_TONE, TIMELINE, ACHIEVEMENTS, SPECIALIZATIONS } from "../../lib/data";
import { cardVariants, gridVariants } from "./ProjectsContent";

const experienceCardHoverVariants = {
  initial: { x: 0, y: 0, scale: 1 },
  hover: {
    x: 4,
    y: -2,
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

const iconHoverVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.15, rotate: 8, transition: { type: "spring", stiffness: 400, damping: 15 } }
};

const bulletHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.3, transition: { type: "spring", stiffness: 300, damping: 10 } }
};

const TimelineItem = ({ item, containerRef }) => {
  const tone = CATEGORY_TONE[item.category];
  const Icon = item.icon;
  const itemRef = useRef(null);

  // Declarative scroll tracking for the vertical line
  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    // "start 220px" -> starts filling when the top of the item is 220px from container top
    // "end 220px" -> fully filled when the bottom of the item is 220px from container top
    offset: ["start 220px", "end 220px"],
  });

  const hoverBorders = {
    current: "hover:border-accent-blue/40 hover:shadow-accent-blue/5 hover:bg-bg-normal",
    ai: "hover:border-gruv-purple/40 hover:shadow-gruv-purple/5 hover:bg-bg-normal",
    growth: "hover:border-accent-green/40 hover:shadow-accent-green/5 hover:bg-bg-normal",
    early: "hover:border-accent-yellow/40 hover:shadow-accent-yellow/5 hover:bg-bg-normal",
  };
  const hoverClass = hoverBorders[item.category] || "hover:border-accent-green/30 hover:shadow-accent-green/5 hover:bg-bg-normal";

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="pb-48 md:pb-72"
    >
      <div className="bg-bg-normal pt-4 md:pt-6">
        <div className="relative grid grid-cols-[7rem_auto_1fr] gap-x-5 md:grid-cols-[10rem_auto_1fr] md:gap-x-8">
          {/* Left — period */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="sticky top-4 self-start pt-2 text-right"
          >
            <div className="text-xs text-fg-muted md:text-sm">{item.period}</div>
          </motion.div>

          {/* Center — node + line */}
          <div className="relative flex w-10 justify-center md:w-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -bottom-56 md:-bottom-80 w-px bg-bg-elev overflow-hidden">
              <motion.div
                className={["w-full origin-top h-full", tone.bg].join(" ")}
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
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
              <motion.span
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className={[
                  "absolute -z-10 h-full w-full rounded-full blur-md",
                  tone.soft,
                ].join(" ")}
              />
            </motion.div>
          </div>

          {/* Right — card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
            className="w-full"
          >
            <motion.div
              whileHover="hover"
              variants={experienceCardHoverVariants}
              className={[
                "rounded-xl border border-bg-elev/60 bg-bg-normal/70 p-5 shadow-lg shadow-black/15 transition-all duration-300 hover:shadow-xl",
                hoverClass
              ].join(" ")}
            >
              <div className="mb-3 flex items-start gap-3">
                <motion.div
                  variants={iconHoverVariants}
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1",
                    tone.soft,
                    tone.ring,
                  ].join(" ")}
                >
                  <Icon className={["h-4 w-4", tone.text].join(" ")} strokeWidth={2} />
                </motion.div>
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
                    <motion.span
                      variants={bulletHoverVariants}
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const KeyAchievements = ({ containerRef }) => {
  const accentMap = {
    green: "text-accent-green",
    blue: "text-accent-blue",
    yellow: "text-accent-yellow",
    purple: "text-gruv-purple",
  };

  const itemRef = useRef(null);

  // Scroll tracking for KeyAchievements top connector line
  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start 300px", "start 220px"],
  });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="pb-48 md:pb-72"
    >
      <div className="bg-bg-normal pt-4 md:pt-6">
        <div className="relative grid grid-cols-[7rem_auto_1fr] gap-x-5 md:grid-cols-[10rem_auto_1fr] md:gap-x-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            className="sticky top-2 self-start pt-2 text-right"
          >
            <div className="text-xs text-fg-muted md:text-sm">Key Achievements</div>
          </motion.div>

          {/* Node */}
          <div className="relative flex w-10 justify-center md:w-12">
            <div className="absolute left-1/2 -top-4 md:-top-6 -translate-x-1/2 h-[38px] md:h-[48px] w-px bg-bg-elev overflow-hidden">
              <motion.div
                className="w-full origin-top h-full bg-accent-green"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="sticky top-2 z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-bg-hard ring-2 ring-accent-green/40 md:h-10 md:w-10"
            >
              <Trophy
                className="h-4 w-4 text-accent-green md:h-[18px] md:w-[18px]"
                strokeWidth={1.75}
              />
              <motion.span
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="absolute -z-10 h-full w-full rounded-full bg-accent-green/10 blur-md"
              />
            </motion.div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
            className="w-full"
          >
            <div className="rounded-xl border border-bg-elev/60 bg-bg-normal/70 p-5 transition-all duration-300 hover:border-accent-green/30 hover:shadow-lg hover:shadow-black/10">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-green/10 ring-1 ring-accent-green/40">
                  <Flame className="h-4 w-4 text-accent-green" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-fg md:text-base transition-colors duration-200 hover:text-accent-green">
                    Milestones & Recognition
                  </h3>
                  <p className="text-xs text-fg-dim">
                    Significant achievements across the journey
                  </p>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-3">
                {ACHIEVEMENTS.map((a) => (
                  <motion.div
                    key={a.label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="rounded-lg border border-bg-elev/50 bg-bg-hard/60 p-4 transition-colors hover:border-accent-green/20"
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
                  </motion.div>
                ))}
              </div>

              <div>
                <div className="mb-2 text-[11px] uppercase tracking-wider text-accent-green">
                  Specializations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SPECIALIZATIONS.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center rounded-md bg-accent-green/10 px-2.5 py-1 text-[11px] font-medium text-accent-green ring-1 ring-accent-green/30 cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const ExperienceContent = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Resolve container node once mounted
    containerRef.current = document.querySelector(".overflow-y-auto");
    setMounted(true);
  }, []);

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
        <div className="relative mt-2">
          {mounted &&
            TIMELINE.map((item) => (
              <TimelineItem key={item.period} item={item} containerRef={containerRef} />
            ))}
          {/* Final node: Key Achievements */}
          {mounted && <KeyAchievements containerRef={containerRef} />}
        </div>
      </div>
    </div>
  );
};
export default ExperienceContent;
