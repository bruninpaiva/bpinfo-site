import { cn } from "@/lib/cn";

export function Divider({ tone = "default", className }: { tone?: "default" | "contrast"; className?: string }) {
  return (
    <hr
      className={cn(
        "h-px border-0",
        tone === "contrast" ? "bg-contrast-border" : "bg-border",
        className,
      )}
    />
  );
}
