import React from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { ABOUT_TAGS, ABOUT_STACK, ABOUT_SECTIONS } from "../../lib/data";

const SectionHeader = ({ title }) => {
  return (
    <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-fg md:text-2xl">
      <span>{title}</span>
      <motion.span
        animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="inline-block h-5 w-[3px] translate-y-[1px] bg-accent-green md:h-6 origin-left"
      />
    </h2>
  );
};

export const AboutContent = ({ onClickGetInTouch }) => {
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

      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-14 md:px-10 md:py-16">
        {/* Hero name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="text-6xl font-semibold leading-none tracking-tight text-fg md:text-7xl"
        >
          Dionovan Ramadhani
        </motion.h1>

        {/* Bullet-separated tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
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
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.04, delayChildren: 0.2 },
            },
          }}
          className="-mt-4 flex flex-wrap gap-2"
        >
          {ABOUT_STACK.map((s) => (
            <motion.span
              key={s}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.06,
                rotate: 1,
                borderColor: "rgba(142,192,124,0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex items-center rounded-full border border-bg-elev/70 bg-bg-hard px-3 py-1 text-[12px] text-fg-dim cursor-default transition-all duration-200 hover:text-fg"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Content sections */}
        <div className="mt-2 flex flex-col gap-10">
          {ABOUT_SECTIONS.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: i * 0.04,
              }}
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
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg-hard transition-colors hover:bg-accent-green cursor-pointer"
            onClick={onClickGetInTouch}
          >
            Get in Touch
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:dionovan7@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-bg-elev/80 px-4 py-2 text-sm font-medium text-fg-dim transition-colors hover:border-accent-green/60 hover:text-fg"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            E-Mail
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutContent;
