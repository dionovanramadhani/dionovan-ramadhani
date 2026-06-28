import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Flame } from "lucide-react";
import {
  CATEGORY_TONE,
  TIMELINE,
  ACHIEVEMENTS,
  SPECIALIZATIONS,
} from "../../lib/data";
import { cardVariants, gridVariants } from "./ProjectsContent";

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

export const ExperienceContent = () => {
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
