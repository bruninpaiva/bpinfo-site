import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xs text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-accent text-accent-fg hover:bg-accent-strong",
  outline: "border border-fg text-fg hover:bg-fg hover:text-bg",
  ghost: "text-fg-muted hover:text-fg",
  "on-contrast":
    "border border-contrast-border text-contrast-fg hover:border-contrast-fg",
  /** Uso exclusivo do universo ORBYT (azul/violeta) — nunca usar em telas BPInfo. */
  "orbyt-light": "bg-[#d9ddff] text-[#090a18] hover:bg-white",
} as const;

const sizes = {
  md: "px-6 py-3",
  sm: "px-5 py-2.5",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  type = "button",
  disabled,
  onClick,
  ...aria
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          onClick={onClick}
          {...aria}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...aria}>
      {children}
    </button>
  );
}
