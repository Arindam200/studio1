"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type GlobeProps = {
  className?: string;
  /** Dot color as an `r, g, b` triple (0-255). Defaults to the brand orange. */
  color?: [number, number, number];
  /** Number of points distributed across the sphere. */
  dots?: number;
};

/**
 * Lightweight, dependency-free animated globe.
 * Renders a rotating dotted sphere on a 2D canvas: points are distributed with
 * a Fibonacci spiral and shaded by depth so the front reads brighter than the
 * back. Respects `prefers-reduced-motion`.
 */
export function Globe({
  className,
  color = [251, 100, 21],
  dots = 1600,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const [r, g, b] = color;

    // Distribute points evenly over a unit sphere (Fibonacci lattice).
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dots; i++) {
      const y = 1 - (i / (dots - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      });
    }

    const resize = () => {
      const size = canvas.clientWidth || 1;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Fixed axial tilt for a natural viewing angle.
    const tilt = 0.42;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    let phi = 0;
    let raf = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.45;
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);

      for (const p of points) {
        // Rotate around the vertical axis, then apply the tilt.
        const x1 = p.x * cosP - p.z * sinP;
        const z1 = p.x * sinP + p.z * cosP;
        const y2 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;

        const depth = (z2 + 1) / 2; // 0 (back) → 1 (front)
        const size = (0.35 + depth * 1.5) * dpr;
        const alpha = 0.12 + depth * 0.75;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.arc(cx + x1 * R, cy + y2 * R, size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) phi += 0.0032;
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [color, dots]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("h-full w-full [aspect-ratio:1] select-none", className)}
    />
  );
}
