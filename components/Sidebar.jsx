import React from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { navItems, socials } from "../lib/data";

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
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
};

export const Sidebar = ({ activeView, onSelect }) => {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="show"
      className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col justify-between border-r border-bg-elev/40 bg-bg-hard px-5 py-6 md:flex"
    >
      {/* Identity */}
      <div className="flex flex-col gap-8">
        <motion.div variants={childVariants} className="flex items-center gap-3">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 10 }}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-normal ring-1 ring-bg-elev/60 cursor-pointer"
          >
            <Hexagon className="h-5 w-5 text-accent-blue" strokeWidth={1.75} />
          </motion.div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-fg">
              Your Name
            </div>
            <div className="text-xs text-fg-muted">Portfolio</div>
          </div>
        </motion.div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <motion.button
                key={item.id}
                variants={childVariants}
                onClick={() => onSelect(item.id)}
                className={[
                  "group relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors outline-none",
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
                      isActive ? "text-accent-blue" : ""
                    ].join(" ")} 
                    strokeWidth={1.75} 
                  />
                  <span>{item.label}</span>
                </span>
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Connect + Footer */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <motion.div variants={childVariants} className="px-3 text-[11px] uppercase tracking-[0.18em] text-fg-muted">
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

        <motion.div variants={childVariants} className="border-t border-bg-elev/40 pt-4 text-[11px] text-fg-muted">
          Made with <span className="text-gruv-red">♥</span> · ©{" "}
          {new Date().getFullYear()}
        </motion.div>
      </div>
    </motion.aside>
  );
};
