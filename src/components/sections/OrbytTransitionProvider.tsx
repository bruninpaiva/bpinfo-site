"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type EntryMode = "normal" | "reduced";
type EntryPhase = EntryMode | "reveal";

type OrbytTransitionContextValue = {
  startOrbytTransition: () => boolean;
  isTransitioning: boolean;
};

const OrbytTransitionContext = createContext<OrbytTransitionContextValue | null>(null);

const TRANSITION_DURATION = {
  normal: 1440,
  reduced: 560,
} as const;

const REVEAL_DURATION = 200;
const STAR_COUNT = 12;
const WARP_STREAK_COUNT = 10;

export function OrbytTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [entryPhase, setEntryPhase] = useState<EntryPhase | null>(null);
  const hasStartedNavigation = useRef(false);
  const isEntering = entryPhase === "normal" || entryPhase === "reduced";

  const completeTransition = useCallback(() => {
    if (hasStartedNavigation.current) return;

    hasStartedNavigation.current = true;
    router.push("/orbyt");
  }, [router]);

  const startOrbytTransition = useCallback(() => {
    if (entryPhase || pathname.startsWith("/orbyt")) return false;

    hasStartedNavigation.current = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEntryPhase(reducedMotion ? "reduced" : "normal");
    return true;
  }, [entryPhase, pathname]);

  useEffect(() => {
    if (entryPhase !== "normal" && entryPhase !== "reduced") return;

    // `animationend` on the burst is the source of truth. This only covers a
    // browser that interrupts CSS animations without dispatching that event.
    const timeout = window.setTimeout(
      completeTransition,
      TRANSITION_DURATION[entryPhase] + 180,
    );

    return () => window.clearTimeout(timeout);
  }, [completeTransition, entryPhase]);

  useEffect(() => {
    if (!isEntering || !pathname.startsWith("/orbyt")) return;

    // The root-layout provider remains above both routes. Start fading the
    // flash only after the ORBYT route has rendered behind it.
    const frame = window.requestAnimationFrame(() => setEntryPhase("reveal"));
    return () => window.cancelAnimationFrame(frame);
  }, [isEntering, pathname]);

  useEffect(() => {
    if (entryPhase !== "reveal") return;

    const timeout = window.setTimeout(() => setEntryPhase(null), REVEAL_DURATION + 100);
    return () => window.clearTimeout(timeout);
  }, [entryPhase]);

  const value = {
    startOrbytTransition,
    isTransitioning: entryPhase !== null,
  };

  return (
    <OrbytTransitionContext.Provider value={value}>
      {children}
      {entryPhase ? (
        <div
          className={`orbyt-entry-overlay orbyt-entry-overlay--${entryPhase}`}
          aria-hidden
          onAnimationEnd={(event) => {
            if (
              entryPhase === "reveal"
              && event.currentTarget === event.target
              && event.animationName === "entry-reveal"
            ) {
              setEntryPhase(null);
            }
          }}
        >
          {entryPhase === "normal" ? (
            <>
              <div className="orbyt-entry-stars">
                {Array.from({ length: STAR_COUNT }, (_, index) => <span key={index} />)}
              </div>
              <div className="orbyt-entry-warp" aria-hidden>
                {Array.from({ length: WARP_STREAK_COUNT }, (_, index) => <span key={index} />)}
              </div>
            </>
          ) : null}
          <div className="orbyt-entry-symbol-scene">
            <span className="orbyt-entry-orbit orbyt-entry-orbit--one" />
            <span className="orbyt-entry-orbit orbyt-entry-orbit--two" />
            <Image
              src="/brand/orbyt/orbyt-symbol-master-v1.png"
              alt=""
              width={357}
              height={233}
              priority
              className="orbyt-entry-symbol"
            />
          </div>
          <div
            className="orbyt-entry-burst"
            onAnimationEnd={(event) => {
              const expectedAnimation = entryPhase === "normal"
                ? "entry-burst"
                : "entry-reduced-burst";

              if (
                isEntering
                && event.currentTarget === event.target
                && event.animationName === expectedAnimation
              ) {
                completeTransition();
              }
            }}
          />
        </div>
      ) : null}
    </OrbytTransitionContext.Provider>
  );
}

export function useOrbytTransition() {
  const context = useContext(OrbytTransitionContext);

  if (!context) {
    throw new Error("useOrbytTransition must be used within OrbytTransitionProvider.");
  }

  return context;
}
