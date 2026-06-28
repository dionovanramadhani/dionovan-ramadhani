import React from "react";

export const WindowChrome = () => {
  return (
    <div className="flex items-center justify-between border-b border-bg-elev/50 bg-bg-hard/70 px-4 py-2.5 backdrop-blur">
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded-full bg-gruv-red/90" />
        <span className="h-3 w-3 rounded-full bg-accent-yellow/90" />
        <span className="h-3 w-3 rounded-full bg-accent-green/90" />
      </div>
      <div className="text-xs text-fg-muted">
        <span className="text-fg-dim">~/portfolio</span>
        <span className="mx-1">—</span>
        <span>zsh</span>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-fg-muted">
        <span className="inline-flex h-2 w-2 animate-pulse-glow rounded-full bg-accent-green" />
        online
      </div>
    </div>
  );
};
