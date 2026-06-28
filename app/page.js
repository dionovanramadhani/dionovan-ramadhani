"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { MainWindow } from "../components/MainWindow";
import { CustomCursor } from "../components/CustomCursor";
import { MobileNav } from "../components/MobileNav";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="min-h-screen bg-bg-hard text-fg font-mono selection:bg-accent-green/30 selection:text-fg md:cursor-none">
      <CustomCursor />
      <MobileNav activeView={activeView} onSelect={setActiveView} />
      <Sidebar activeView={activeView} onSelect={setActiveView} />
      <MainWindow activeView={activeView} onSelect={setActiveView} />
    </div>
  );
}

export default App;
