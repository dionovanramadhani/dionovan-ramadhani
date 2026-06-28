import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowChrome } from "./WindowChrome";
import { ComingSoon } from "./ComingSoon";
import { HomeContent } from "./sections/HomeContent";
import { ProjectsContent } from "./sections/ProjectsContent";
import { ExperienceContent } from "./sections/ExperienceContent";
import { SkillContent } from "./sections/SkillContent";
import { AboutContent } from "./sections/AboutContent";
import { ContactContent } from "./sections/ContactContent";
import { PROJECTS } from "../lib/data";
import { TabNavFooter } from "./TabNavFooter";

export const MainWindow = ({ activeView, onSelect }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset scroll position to top when activeView changes
    const scrollContainer = containerRef.current?.querySelector(".overflow-y-auto");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case "projects":
        return <ProjectsContent />;
      case "experience":
        return <ExperienceContent />;
      case "skills":
        return <SkillContent />;
      case "about":
        return (
          <AboutContent
            onClickGetInTouch={() => {
              onSelect("contact");
            }}
          />
        );
      case "contact":
        return <ContactContent />;
      case "home":
        return <HomeContent onSelect={onSelect} />;
      default:
        return <ComingSoon view={activeView} />;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className="md:ml-[260px] min-h-screen p-4 md:p-6 pt-16 md:pt-6"
    >
      <div
        ref={containerRef}
        className="relative h-[calc(100vh-5rem)] md:h-[calc(100vh-3rem)] overflow-hidden rounded-2xl border border-bg-elev/60 bg-bg-normal shadow-2xl shadow-black/40"
      >
        <WindowChrome />

        {/* Scrollable content area */}
        <div className="scrollbar-thin relative z-10 h-[calc(100%-2.75rem)] overflow-y-auto pb-16 md:pb-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -12, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next tab navigation footer */}
          {activeView !== "home" && (
            <TabNavFooter activeView={activeView} onSelect={onSelect} />
          )}
          {/* Preload project thumbnails so the Projects tab opens instantly */}
          <div
            aria-hidden
            className="pointer-events-none fixed -z-50 h-0 w-0 overflow-hidden opacity-0"
          >
            {PROJECTS.map((p) => (
              <img key={p.image} src={p.image} alt="" width={1} height={1} />
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};
export default MainWindow;
