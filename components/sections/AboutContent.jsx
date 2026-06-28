import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ABOUT_TAGS, ABOUT_STACK, ABOUT_SECTIONS } from "../../lib/data";

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

export const AboutContent = () => {
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
