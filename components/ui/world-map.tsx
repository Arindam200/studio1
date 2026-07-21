"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export type WorldMapDot = {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
};

type WorldMapProps = {
  dots?: WorldMapDot[];
  lineColor?: string;
  showLabels?: boolean;
  animationDuration?: number;
  loop?: boolean;
  className?: string;
};

type Point = { x: number; y: number };

function createCurvedPath(start: Point, end: Point) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 12;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

function pointKey(lat: number, lng: number) {
  return `${lat.toFixed(2)},${lng.toFixed(2)}`;
}

export function WorldMap({
  dots = [],
  lineColor = "#f97316",
  showLabels = true,
  animationDuration = 2,
  loop = true,
  className,
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    [],
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: isDark ? 0.22 : 0.25,
        // Primary-tinted land dots; higher contrast in light mode for readable continents
        color: isDark
          ? "hsla(24, 40%, 76%, 0.34)"
          : "hsla(24, 52%, 14%, 0.74)",
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map, isDark],
  );

  const { mapWidth, mapHeight } = useMemo(() => {
    const match = svgMap.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    return {
      mapWidth: match ? Number(match[1]) : 198,
      mapHeight: match ? Number(match[2]) : 100,
    };
  }, [svgMap]);

  const projectPoint = (lat: number, lng: number): Point => {
    const pin = map.getPin({ lat, lng });
    if (!pin) {
      return { x: mapWidth / 2, y: mapHeight / 2 };
    }
    return { x: pin.x, y: pin.y };
  };

  const uniquePoints = useMemo(() => {
    const seen = new Map<
      string,
      { lat: number; lng: number; label?: string }
    >();

    for (const dot of dots) {
      const startKey = pointKey(dot.start.lat, dot.start.lng);
      const endKey = pointKey(dot.end.lat, dot.end.lng);
      if (!seen.has(startKey)) seen.set(startKey, dot.start);
      if (!seen.has(endKey)) seen.set(endKey, dot.end);
    }

    return Array.from(seen.values());
  }, [dots]);

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2;
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div
      className={cn(
        "relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-primary/[0.05] font-secondary dark:bg-transparent md:aspect-[2.5/1] lg:aspect-[2/1]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2)_0%,transparent_62%)] dark:bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.14)_0%,transparent_70%)]"
      />
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="pointer-events-none h-full w-full select-none object-fill [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_74%)] dark:opacity-80 dark:[mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_82%)]"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
        priority
        unoptimized
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        className="pointer-events-auto absolute inset-0 h-full w-full select-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.35" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          const path = createCurvedPath(startPoint, endPoint);
          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime =
            (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;

          return (
            <g key={`path-group-${i}`}>
              <path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth={isDark ? "0.2" : "0.3"}
                strokeOpacity={isDark ? 0.14 : 0.28}
              />
              <motion.path
                d={path}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth={isDark ? "0.35" : "0.42"}
                initial={{ pathLength: 0 }}
                animate={
                  loop
                    ? { pathLength: [0, 0, 1, 1, 0] }
                    : { pathLength: 1 }
                }
                transition={
                  loop
                    ? {
                        duration: fullCycleDuration,
                        times: [0, startTime, endTime, resetTime, 1],
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0,
                      }
                    : {
                        duration: animationDuration,
                        delay: i * staggerDelay,
                        ease: "easeInOut",
                      }
                }
              />

              {loop ? (
                <motion.circle
                  r={isDark ? "1" : "1.15"}
                  fill={lineColor}
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: [null, "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${path}')`,
                  }}
                />
              ) : null}
            </g>
          );
        })}

        {uniquePoints.map((point, i) => {
          const projected = projectPoint(point.lat, point.lng);
          const label = point.label || `Location ${i + 1}`;

          return (
            <g key={`point-${pointKey(point.lat, point.lng)}`}>
              <motion.g
                onHoverStart={() => setHoveredLocation(label)}
                onHoverEnd={() => setHoveredLocation(null)}
                className="cursor-pointer"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={isDark ? "0.9" : "1.05"}
                  fill={lineColor}
                  filter="url(#glow)"
                />
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={isDark ? "0.9" : "1.05"}
                  fill={lineColor}
                  opacity={isDark ? "0.5" : "0.65"}
                >
                  <animate
                    attributeName="r"
                    from={isDark ? "0.9" : "1.05"}
                    to={isDark ? "3.2" : "3.6"}
                    dur="2s"
                    begin={`${(i % 4) * 0.25}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from={isDark ? "0.55" : "0.65"}
                    to="0"
                    dur="2s"
                    begin={`${(i % 4) * 0.25}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </motion.g>

              {showLabels && point.label ? (
                <motion.g
                  initial={{ opacity: 0, y: 1 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i + 0.2, duration: 0.4 }}
                  className="pointer-events-none"
                >
                  <rect
                    x={projected.x - point.label.length * 0.55 - 1.2}
                    y={projected.y - 5.4}
                    width={point.label.length * 1.1 + 2.4}
                    height="3.8"
                    rx="0.6"
                    ry="0.6"
                    className="fill-background stroke-border/70"
                    strokeWidth="0.15"
                  />
                  <text
                    x={projected.x}
                    y={projected.y - 3.35}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground"
                    style={{ fontSize: "2.1px", fontWeight: 500 }}
                  >
                    {point.label}
                  </text>
                </motion.g>
              ) : null}
            </g>
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredLocation ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 rounded-lg border border-border/60 bg-background/90 px-3 py-2 text-sm font-medium text-foreground backdrop-blur-sm sm:hidden"
          >
            {hoveredLocation}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
