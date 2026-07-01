import React from "react";
import { motion } from "framer-motion";
import { navItems, ROLES, socials } from "../lib/data";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Download } from "lucide-react";

const sidebarVariants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { y: 10, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

export const Sidebar = ({ activeView, onSelect }) => {
  const type = useTypewriter(ROLES);

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col justify-between border-r border-bg-elev/40 bg-bg-hard px-5 py-6 md:flex"
    >
      {/* Identity */}
      <div className="flex flex-col gap-8">
        <motion.div variants={childVariants} className="leading-tight">
          <div className="text-[15px] font-semibold tracking-tight text-fg">
            Dionovan Ramadhani
          </div>
          <div className="text-xs text-fg-muted">Full-Stack Developer</div>
        </motion.div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <motion.a
                key={item.id}
                variants={childVariants}
                href={`#${item.id}`}
                className={[
                  "group relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors outline-none cursor-pointer",
                  isActive ? "text-fg" : "text-fg-dim hover:text-fg",
                ].join(" ")}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-md bg-bg-normal ring-1 ring-bg-elev/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  <Icon
                    className={[
                      "h-4 w-4 transition-transform duration-200 group-hover:scale-110",
                      isActive ? "text-accent-blue" : "",
                    ].join(" ")}
                    strokeWidth={1.75}
                  />
                  <span>{item.label}</span>
                </span>
              </motion.a>
            );
          })}
        </nav>
      </div>

      {/* Connect + Footer */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <motion.div
            variants={childVariants}
            className="px-3 text-[11px] uppercase tracking-[0.18em] text-fg-muted"
          >
            Connect
          </motion.div>
          <div className="flex flex-col">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  variants={childVariants}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-md px-3 py-1.5 text-sm text-fg-dim transition-colors hover:text-accent-green"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                  <span>{s.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.a
          variants={childVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/cv/dionovan-ramadhani-resume.pdf"
          download="Dionovan Ramadhani - Resume.pdf"
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-xs font-semibold text-bg-hard transition-colors hover:bg-accent-green cursor-pointer font-mono"
        >
          <Download className="h-3.5 w-3.5" strokeWidth={2.25} />
          <span>Download CV</span>
        </motion.a>

        <motion.div
          variants={childVariants}
          className="border-t border-bg-elev/40 pt-4 text-[11px] text-fg-muted"
        >
          <div className="text-[11px] font-semibold text-fg-dim tracking-wide">
            © {new Date().getFullYear()} Dionovan Ramadhani
          </div>
          <div className="text-[10px] text-fg-muted/50 tracking-widest uppercase">
            All rights reserved
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};
