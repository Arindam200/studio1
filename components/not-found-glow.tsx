"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient orange glow for the 404 page.
 * Two soft radial blobs anchored to opposite corners (top-left + bottom-right)
 * so the center stays clean. They drift on their own (RAF orbit) and lean
 * toward the cursor with an eased follow. Respects reduced-motion.
 */
export function NotFoundGlow() {
  const primaryRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    let frame = 0;
    const start = performance.now();

    const onMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 2; // -1 .. 1
      target.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const render = (now: number) => {
      const t = (now - start) / 1000;

      // ease the cursor influence so it glides instead of snapping
      eased.x += (target.x - eased.x) * 0.045;
      eased.y += (target.y - eased.y) * 0.045;

      if (primaryRef.current) {
        const x = Math.sin(t * 0.42) * 70 + eased.x * 90;
        const y = Math.cos(t * 0.34) * 55 + eased.y * 90;
        primaryRef.current.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;
      }
      if (accentRef.current) {
        const x = Math.cos(t * 0.3) * 90 - eased.x * 70;
        const y = Math.sin(t * 0.5) * 70 - eased.y * 70;
        accentRef.current.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;
      }

      frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[-12rem] z-0 overflow-visible"
    >
      <div
        ref={primaryRef}
        className="nf-glow-primary absolute left-[8%] top-[6%] size-[40rem] rounded-full opacity-90 blur-[120px] will-change-transform dark:opacity-70 dark:blur-[130px]"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      />
      <div
        ref={accentRef}
        className="nf-glow-accent absolute left-[92%] top-[100%] size-[34rem] rounded-full opacity-80 blur-[100px] will-change-transform dark:opacity-60 dark:blur-[110px]"
        style={{ transform: "translate3d(-50%, -50%, 0)" }}
      />
    </div>
  );
}
