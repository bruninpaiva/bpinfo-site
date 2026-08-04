import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
