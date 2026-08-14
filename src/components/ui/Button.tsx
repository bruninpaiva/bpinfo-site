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
  "orbyt-light": "rounded-[0.7rem] border border-[#eef0ff]/85 bg-[linear-gradient(135deg,#ffffff,#d9dcff_56%,#bcc9ff)] text-[#090a18] shadow-[0_12px_32px_rgba(105,87,255,0.34),0_0_0_1px_rgba(180,196,255,0.2)_inset transition-all hover:-translate-y-0.5 hover:border-white hover:bg-[linear-gradient(135deg,#ffffff,#e6eaff)] hover:shadow-[0_16px_38px_rgba(94,121,255,0.42)]",
  "orbyt-outline": "rounded-[0.7rem] border border-[#9eaaff]/70 bg-[linear-gradient(135deg,rgba(43,49,116,.82),rgba(29,26,83,.7))] text-[#f0f2ff] shadow-[0_10px_28px_rgba(39,46,133,0.3),0_0_0_1px_rgba(165,177,255,0.12)_inset backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#c2caff]/90 hover:bg-[linear-gradient(135deg,rgba(67,77,163,.92),rgba(62,43,139,.84))] hover:text-white hover:shadow-[0_15px_34px_rgba(85,106,255,0.38)]",
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
