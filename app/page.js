"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { MainWindow } from "../components/MainWindow";
import { CustomCursor } from "../components/CustomCursor";
import { MobileNav } from "../components/MobileNav";

function App() {
  const [activeView, setActiveView] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const validViews = ["home", "projects", "experience", "skills", "about", "contact"];
      if (validViews.includes(hash)) {
        setActiveView(hash);
      } else {
        setActiveView("home");
      }
    };

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);
    // Initialize on load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigateTo = (viewId) => {
    window.location.hash = viewId;
  };

  return (
    <div className="min-h-screen bg-bg-hard text-fg font-mono selection:bg-accent-green/30 selection:text-fg md:cursor-none">
      <CustomCursor />
      <MobileNav activeView={activeView} onSelect={navigateTo} />
      <Sidebar activeView={activeView} onSelect={navigateTo} />
      <MainWindow activeView={activeView} onSelect={navigateTo} />
    </div>
  );
}

export default App;
