import React from "react";
import { Hexagon } from "lucide-react";
import { navItems, socials } from "../lib/data";

export const Sidebar = ({ activeView, onSelect }) => {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[260px] flex-col justify-between border-r border-bg-elev/40 bg-bg-hard px-5 py-6 md:flex">
      {/* Identity */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-bg-normal ring-1 ring-bg-elev/60">
            <Hexagon className="h-5 w-5 text-accent-blue" strokeWidth={1.75} />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-fg">
              Your Name
            </div>
            <div className="text-xs text-fg-muted">Portfolio</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={[
                  "group flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors",
                  isActive
                    ? "bg-bg-normal text-fg ring-1 ring-bg-elev/60"
                    : "text-fg-dim hover:bg-bg-normal/60 hover:text-fg",
                ].join(" ")}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Connect + Footer */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="px-3 text-[11px] uppercase tracking-[0.18em] text-fg-muted">
            Connect
          </div>
          <div className="flex flex-col">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md px-3 py-1.5 text-sm text-fg-dim transition-colors hover:text-accent-green"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-bg-elev/40 pt-4 text-[11px] text-fg-muted">
          Made with <span className="text-gruv-red">♥</span> · ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </aside>
  );
};
