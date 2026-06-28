"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProjectTitle, setHoveredProjectTitle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth responsive follow
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 55 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 55 });
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 28 });

  useEffect(() => {
    // Check if the device has a mouse/trackpad pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);
    const handlePointerChange = (e) => setIsPointer(e.matches);
    mediaQuery.addEventListener("change", handlePointerChange);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (target) {
        // Detect anchors, buttons, and elements with pointer class/cursor
        const isInteractive =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".cursor-pointer") ||
          window.getComputedStyle(target).cursor === "pointer";

        setIsHovering(isInteractive);

        // Detect project card hover for tooltip cursor
        const projectCard = target.closest("[data-project-title]");
        const isLinkOrButton =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button");

        if (projectCard && !isLinkOrButton) {
          setHoveredProjectTitle(projectCard.getAttribute("data-project-title"));
        } else {
          setHoveredProjectTitle(null);
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isPointer || !isVisible) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (pointer: fine) {
              *, *::before, *::after {
                cursor: none !important;
              }
            }
          `,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className={[
          "pointer-events-none fixed left-0 top-0 z-[9999] -ml-[14px] -mt-[14px] h-7 w-7 rounded-full border will-change-transform",
          isHovering ? "border-dashed" : "border-solid"
        ].join(" ")}
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: hoveredProjectTitle ? 0 : (isHovering ? 1.5 : 1),
          opacity: hoveredProjectTitle ? 0 : 1,
          borderColor: isHovering ? "#fabd2f" : "#b8bb26",
          backgroundColor: isHovering ? "rgba(250, 189, 47, 0.08)" : "rgba(29, 32, 33, 0)",
          rotate: isHovering ? 90 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      {/* Inner Dot / Caret */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[8px] -mt-[8px] h-4 w-4 flex items-center justify-center will-change-transform"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: hoveredProjectTitle ? 0 : (isHovering ? 1.2 : 0.4),
          opacity: hoveredProjectTitle ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {isHovering ? (
          <span className="text-[11px] font-bold text-accent-yellow leading-none font-mono">
            &gt;
          </span>
        ) : (
          <div className="h-full w-full rounded-full bg-accent-green" />
        )}
      </motion.div>

      {/* Dynamic Project Tooltip Cursor */}
      <AnimatePresence>
        {hoveredProjectTitle && (
          <motion.div
            key={hoveredProjectTitle}
            initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent-green px-4 py-1.5 text-[11px] font-bold text-bg-hard shadow-2xl whitespace-nowrap will-change-transform font-mono"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            {hoveredProjectTitle}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
