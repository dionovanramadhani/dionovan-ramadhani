"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { MainWindow } from "../components/MainWindow";
import { CustomCursor } from "../components/CustomCursor";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="min-h-screen bg-bg-hard text-fg font-mono selection:bg-accent-green/30 selection:text-fg md:cursor-none">
      <CustomCursor />
      <Sidebar activeView={activeView} onSelect={setActiveView} />
      <MainWindow activeView={activeView} />
    </div>
  );
}

export default App;
