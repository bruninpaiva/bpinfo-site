"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useOrbytTransition } from "@/components/sections/OrbytTransitionProvider";

type OrbytTransitionLinkProps = {
  children?: ReactNode;
  className?: string;
  onTransitionStart?: () => void;
};

export function OrbytTransitionLink({
  children = "Entrar no universo ORBYT",
  className,
  onTransitionStart,
}: OrbytTransitionLinkProps) {
  const { isTransitioning, startOrbytTransition } = useOrbytTransition();

  return (
    <Link
      href="/orbyt"
      aria-disabled={isTransitioning || undefined}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) return;

        event.preventDefault();
        if (startOrbytTransition()) onTransitionStart?.();
      }}
      className={cn(
        "inline-flex items-center justify-center bg-[#e5e8ff] px-6 py-3 text-sm font-semibold tracking-wide text-[#080814] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b1acff]",
        isTransitioning && "pointer-events-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}
