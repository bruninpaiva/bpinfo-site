import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "contrast";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.18em]",
            tone === "contrast" ? "text-contrast-muted" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-3xl leading-[1.15] md:text-4xl",
          tone === "contrast" ? "text-contrast-fg" : "text-fg",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            tone === "contrast" ? "text-contrast-muted" : "text-fg-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
