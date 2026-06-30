import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/use-typewriter";
import { ROLES } from "../../lib/data";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Logo } from "../../lib/images";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

export const HomeContent = ({ onSelect }) => {
  const typed = useTypewriter(ROLES);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative isolate"
    >
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
          variants={childVariants}
          className="flex items-center gap-2 text-xs text-fg-muted"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-green" />
          <span>available for work</span>
        </motion.div>

        <motion.div variants={childVariants} className="flex items-start gap-4 md:gap-6">
          <div className="relative h-12 w-12 md:h-28 md:w-28 shrink-0">
            <Image
              src={Logo}
              alt="Dionovan Logo"
              width={64}
              height={64}
              className="h-full w-full object-contain rounded-sm sm:rounded-xl"
              priority
            />
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-6xl">
            <span className="text-fg-dim">Hi, I&apos;m</span>{" "}
            <span className="text-accent-green">Dionovan Ramadhani</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          variants={childVariants}
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
          variants={childVariants}
          className="w-full text-sm leading-relaxed text-fg-dim md:text-base"
        >
          <span className="text-fg-muted">{">"}</span> I am a{" "}
          <span className="text-accent-blue">Full-Stack & Blockchain Developer</span>{" "}
          specializing in high-performance decentralized applications. Combining a
          background in <span className="text-accent-green">game programming</span>, I
          bridge <span className="text-accent-yellow">modern frontends</span> with{" "}
          <span className="text-accent-blue">scalable backends</span> and secure{" "}
          <span className="text-accent-green">smart contracts</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="group flex items-center gap-2 rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-bg-hard transition-colors hover:bg-accent-green cursor-pointer"
          >
            View My Work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2.25}
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="flex items-center gap-2 rounded-md border border-bg-elev/80 px-5 py-2.5 text-sm font-medium text-fg-dim transition-colors hover:border-accent-green/60 hover:text-fg cursor-pointer"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default HomeContent;
