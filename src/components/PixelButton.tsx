import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

type PixelButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  /** Open in a new tab (adds rel noopener) */
  external?: boolean;
  /** Hint browser to download the linked resource */
  download?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-deep active:translate-y-px",
  ghost:
    "border border-accent/40 bg-white/70 text-accent-deep hover:bg-accent/10 active:translate-y-px",
};

/**
 * Shared XP-style button rendered as an anchor (works for in-page
 * anchors, downloads, and external links).
 */
export default function PixelButton({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  download = false,
  className = "",
  ...rest
}: PixelButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      download={download || undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {icon && (
        <span className="text-base" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}
