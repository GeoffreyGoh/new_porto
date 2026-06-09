"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";

export default function Taskbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-panel-bar/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-2 sm:px-6"
      >
        {/* Start-style logo button */}
        <a
          href="#about"
          className="flex shrink-0 items-center gap-2 rounded-md bg-accent px-3 py-1.5 font-display text-lg leading-none text-white shadow-sm transition-colors hover:bg-accent-deep"
        >
          <span aria-hidden="true">🪟</span>
          <span>GG</span>
          <span className="sr-only">Geoffrey Gohtama — go to top</span>
        </a>

        {/* Desktop links */}
        <ul className="ml-2 hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-accent/15 text-accent-deep"
                    : "text-ink hover:bg-accent/10 hover:text-accent-deep"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: persistent Download CV */}
        <div className="ml-auto flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep"
          >
            <FiDownload aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md border border-line bg-white/70 p-2 text-accent-deep transition-colors hover:bg-accent/10 md:hidden"
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto flex w-full max-w-5xl flex-col gap-1 border-t border-line px-4 py-3 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-accent/15 text-accent-deep"
                    : "text-ink hover:bg-accent/10 hover:text-accent-deep"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
