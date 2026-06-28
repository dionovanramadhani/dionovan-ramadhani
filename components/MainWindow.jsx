import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowChrome } from "./WindowChrome";
import { ComingSoon } from "./ComingSoon";
import { HomeContent } from "./sections/HomeContent";
import { ProjectsContent } from "./sections/ProjectsContent";
import { ExperienceContent } from "./sections/ExperienceContent";
import { ToolsContent } from "./sections/ToolsContent";
import { AboutContent } from "./sections/AboutContent";
import { ContactContent } from "./sections/ContactContent";
import { PROJECTS } from "../lib/data";

export const MainWindow = ({ activeView }) => {
  const renderContent = () => {
    switch (activeView) {
      case "projects":
        return <ProjectsContent />;
      case "experience":
        return <ExperienceContent />;
      case "tools":
        return <ToolsContent />;
      case "about":
        return <AboutContent />;
      case "contact":
        return <ContactContent />;
      case "home":
        return <HomeContent />;
      default:
        return <ComingSoon view={activeView} />;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="md:ml-[260px] min-h-screen p-4 md:p-6"
    >
      <div className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] overflow-hidden rounded-2xl border border-bg-elev/60 bg-bg-normal shadow-2xl shadow-black/40">
        <WindowChrome />

        {/* Scrollable area */}
        <div className="scrollbar-thin h-[calc(100%-2.75rem)] overflow-y-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: "linear" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

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
