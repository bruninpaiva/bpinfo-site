import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/config/site";

const orbytHost = siteConfig.orbytUrl.replace(/^https?:\/\//, "");

/**
 * Moldura de janela de sistema, usada para compor os mockups em HTML/CSS
 * do produto (Hero e abas de demonstração). Deliberadamente discreta —
 * sem gradientes, sombras fortes ou elementos decorativos.
 */
export function WindowFrame({
  children,
  label = orbytHost,
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-border-strong bg-bg-elevated shadow-token-md",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full border border-border-strong" />
          <span className="h-2 w-2 rounded-full border border-border-strong" />
          <span className="h-2 w-2 rounded-full border border-border-strong" />
        </div>
        <div className="flex-1 rounded-xs bg-surface px-3 py-1 text-center text-[11px] text-fg-subtle">
          {label}
        </div>
      </div>
      <div className="bg-bg-elevated">{children}</div>
    </div>
  );
}
