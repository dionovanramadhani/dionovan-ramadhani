"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { MainWindow } from "../components/MainWindow";

function App() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="min-h-screen bg-bg-hard text-fg font-mono selection:bg-accent-green/30 selection:text-fg">
      <Sidebar activeView={activeView} onSelect={setActiveView} />
      <MainWindow activeView={activeView} />
    </div>
  );
}

export default App;
