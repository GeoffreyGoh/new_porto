import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

const links = [
  {
    label: "GitHub",
    href: profile.github,
    handle: profile.githubHandle,
    Icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    handle: profile.linkedinHandle,
    Icon: FiLinkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    Icon: FiMail,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6">
      <div className="overflow-hidden rounded-[var(--radius-window)] border border-line bg-panel shadow-[var(--shadow-window)]">
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-line bg-panel-bar px-4 py-2.5">
          <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-dot-red" />
            <span className="h-3 w-3 rounded-full bg-dot-yellow" />
            <span className="h-3 w-3 rounded-full bg-dot-green" />
          </span>
          <span className="font-display text-lg leading-none text-accent-deep">
            contact.me
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <p className="font-display text-xl text-accent-deep">
            Let&apos;s build something together.
          </p>

          <ul className="grid gap-3 sm:grid-cols-3">
            {links.map(({ label, href, handle, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 rounded-lg border border-line bg-panel-bar/50 p-3 transition-colors hover:bg-accent/10"
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 text-xl text-accent"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-accent-deep">
                      {label}
                    </span>
                    <span className="block truncate text-xs text-muted">
                      {handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep"
            >
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {profile.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
