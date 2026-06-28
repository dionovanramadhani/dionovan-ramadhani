import React from "react";

export const ComingSoon = ({ view }) => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-3 px-6 py-16 md:px-10">
      <div className="flex items-center gap-2 text-xs text-fg-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-yellow" />
        <span>building</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl capitalize">
        {view}
      </h2>
      <p className="text-sm text-fg-dim">
        <span className="text-fg-muted">{">"}</span> this section is being shipped soon.
        Check back in a bit.
      </p>
    </div>
  );
};
