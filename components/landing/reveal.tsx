"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function useInView(options?: IntersectionObserverInit) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (inView) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...(options ?? {}) }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [inView, options]);

  const setRef = React.useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  return { ref: setRef, inView };
}

export function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "reveal motion-reduce:transition-none motion-reduce:transform-none",
        "transition-[opacity,transform] duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}
