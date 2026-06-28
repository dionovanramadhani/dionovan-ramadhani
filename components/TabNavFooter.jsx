"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { navItems } from "../lib/data";

export const TabNavFooter = ({ activeView, onSelect }) => {
  const currentIndex = navItems.findIndex((item) => item.id === activeView);
  const prev = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const next =
    currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.2 }}
      className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-t border-bg-elev/40 px-6 py-6 md:px-12"
    >
      {/* Previous */}
      {prev ? (
        <motion.button
          whileHover={{ x: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect?.(prev.id)}
          className="group flex items-center gap-2 rounded-md border border-bg-elev/60 px-4 py-2 text-sm text-fg-dim transition-colors hover:border-accent-green/50 hover:text-fg cursor-pointer"
        >
          <ChevronLeft
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
            strokeWidth={2}
          />
          <span className="hidden sm:inline text-fg-muted text-xs mr-1">prev</span>
          <span className="font-medium">{prev.label}</span>
        </motion.button>
      ) : (
        <div />
      )}

      {/* Current position dots */}
      <div className="flex items-center gap-1.5">
        {navItems.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => onSelect?.(item.id)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={[
              "rounded-full transition-all duration-300 cursor-pointer",
              i === currentIndex
                ? "h-2 w-5 bg-accent-green"
                : "h-2 w-2 bg-bg-elev hover:bg-fg-muted",
            ].join(" ")}
            title={item.label}
          />
        ))}
      </div>

      {/* Next */}
      {next ? (
        <motion.button
          whileHover={{ x: 3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect?.(next.id)}
          className="group flex items-center gap-2 rounded-md border border-bg-elev/60 px-4 py-2 text-sm text-fg-dim transition-colors hover:border-accent-green/50 hover:text-fg cursor-pointer"
        >
          <span className="font-medium">{next.label}</span>
          <span className="hidden sm:inline text-fg-muted text-xs ml-1">next</span>
          <ChevronRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </motion.button>
      ) : (
        <div />
      )}
    </motion.div>
  );
};

export default TabNavFooter;
