import type { ReactNode } from "react";

type WindowProps = {
  /** Text shown in the title bar, e.g. "about.me" */
  title: string;
  /** Optional small icon rendered before the title */
  icon?: ReactNode;
  /** Window body content */
  children: ReactNode;
  /** Extra classes for the outer panel */
  className?: string;
  /** Extra classes for the body wrapper (e.g. padding overrides) */
  bodyClassName?: string;
};

/**
 * Core OS-window primitive used by every section.
 * Rounded panel + drop shadow + title bar with red/yellow/green dots.
 * The dots are decorative only (aria-hidden).
 */
export default function Window({
  title,
  icon,
  children,
  className = "",
  bodyClassName = "",
}: WindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-window)] border border-line bg-panel shadow-[var(--shadow-window)] transition-shadow duration-300 hover:shadow-[var(--shadow-window-hover)] ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-panel-bar px-4 py-2.5">
        <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-dot-red" />
          <span className="h-3 w-3 rounded-full bg-dot-yellow" />
          <span className="h-3 w-3 rounded-full bg-dot-green" />
        </span>
        <div className="flex min-w-0 items-center gap-2 font-display text-lg leading-none text-accent-deep">
          {icon && (
            <span className="shrink-0 text-base" aria-hidden="true">
              {icon}
            </span>
          )}
          <span className="truncate">{title}</span>
        </div>
      </div>

      {/* Body */}
      <div className={`p-6 sm:p-8 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
