import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Home, FolderGit2, Briefcase, Code2, User } from "lucide-react";
import { navItems } from "../lib/data";

export const MobileNav = ({ activeView, onSelect }) => {
  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-30 h-14 bg-bg-hard/80 backdrop-blur-md border-b border-bg-elev/40 px-4 flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <span className="text-[13.5px] font-semibold tracking-tight text-fg font-mono">
            Dionovan Ramadhani
          </span>
        </div>

        <a
          href="mailto:dionovan7@gmail.com"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-bg-elev/40 bg-bg-hard/50 text-fg-dim transition-all hover:text-accent-green hover:bg-bg-elev/30 outline-none"
        >
          <Mail className="h-4.5 w-4.5" />
        </a>
      </header>

      {/* Floating Bottom Nav Dock */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[390px] h-[60px] bg-bg-hard/90 backdrop-blur-md border border-bg-elev/40 rounded-2xl flex items-center justify-around px-2.5 py-1 shadow-2xl z-30 md:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-colors cursor-pointer outline-none select-none"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-bg-elev/40 border border-bg-elev/50 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <Icon
                className={[
                  "h-4.5 w-4.5 z-10 transition-transform duration-200",
                  isActive ? "text-accent-green scale-110" : "text-fg-dim",
                ].join(" ")}
                strokeWidth={2}
              />
              <span
                className={[
                  "text-[9px] font-mono mt-0.5 z-10 transition-colors duration-200",
                  isActive ? "text-accent-green font-semibold" : "text-fg-muted",
                ].join(" ")}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};
export default MobileNav;
