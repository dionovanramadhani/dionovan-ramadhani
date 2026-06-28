import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/use-typewriter";
import { ROLES } from "../../lib/data";

export const HomeContent = () => {
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
