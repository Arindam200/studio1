"use client"

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react"
import createGlobe from "cobe"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export type PulseMarker = {
  id: string
  location: [number, number]
  delay: number
}

export type GlobePulseProps = {
  markers?: PulseMarker[]
  className?: string
  speed?: number
  /** When false, disables drag interaction (decorative use). */
  interactive?: boolean
}

/** Studio1 primary orange as RGB 0–1 for COBE. */
const MARKER_COLOR: [number, number, number] = [0.98, 0.45, 0.09]
const MARKER_HEX = "#f97316"

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
  { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
  { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
]

/** CTA markers — capitals / major hubs for Studio1's global reach. */
export const CTA_GLOBE_MARKERS: PulseMarker[] = [
  { id: "australia", location: [-33.87, 151.21], delay: 0 },
  { id: "india", location: [12.97, 77.59], delay: 0.35 },
  { id: "netherlands", location: [52.37, 4.9], delay: 0.7 },
  { id: "us", location: [40.71, -74.01], delay: 1.05 },
  { id: "israel", location: [32.09, 34.78], delay: 1.4 },
  { id: "singapore", location: [1.35, 103.82], delay: 1.75 },
  { id: "vietnam", location: [10.82, 106.63], delay: 2.1 },
]

export function GlobePulse({
  markers = defaultMarkers,
  className,
  speed = 0.003,
  interactive = true,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme !== "light"

  const endDrag = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current && interactive) {
      canvasRef.current.style.cursor = "grab"
    }
    isPausedRef.current = false
  }, [interactive])

  const handlePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLCanvasElement>) => {
      if (!interactive) return
      e.preventDefault()
      ;(e.target as HTMLCanvasElement).setPointerCapture(e.pointerId)
      pointerInteracting.current = { x: e.clientX, y: e.clientY }
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
      isPausedRef.current = true
    },
    [interactive],
  )

  const handlePointerMove = useCallback(
    (e: ReactPointerEvent<HTMLCanvasElement>) => {
      if (!interactive || pointerInteracting.current === null) return
      dragOffset.current = {
        phi: (e.clientX - pointerInteracting.current.x) / 300,
        theta: (e.clientY - pointerInteracting.current.y) / 1000,
      }
    },
    [interactive],
  )

  const handlePointerUp = useCallback(
    (e: ReactPointerEvent<HTMLCanvasElement>) => {
      if (!interactive) return
      try {
        ;(e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId)
      } catch {
        // capture may already be released
      }
      endDrag()
    },
    [endDrag, interactive],
  )

  useEffect(() => {
    if (!interactive) return
    // Fallback if pointer leaves the window while dragging
    window.addEventListener("pointerup", endDrag, { passive: true })
    window.addEventListener("pointercancel", endDrag, { passive: true })
    return () => {
      window.removeEventListener("pointerup", endDrag)
      window.removeEventListener("pointercancel", endDrag)
    }
  }, [endDrag, interactive])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId = 0
    let phi = 0
    let resizeObserver: ResizeObserver | null = null

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const spinSpeed = reduceMotion ? 0 : speed

    const init = (el: HTMLCanvasElement) => {
      const width = el.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(el, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: isDark ? 1 : 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: isDark ? 10 : 6,
        baseColor: isDark ? [0.5, 0.5, 0.5] : [0.92, 0.9, 0.88],
        markerColor: MARKER_COLOR,
        // Soft primary-tinted atmosphere — avoids muddy dark / harsh cream halos
        glowColor: isDark ? [0.18, 0.1, 0.05] : [0.99, 0.97, 0.94],
        markerElevation: 0,
        markers: markers.map((m) => ({
          location: m.location,
          size: 0.025,
          id: m.id,
        })),
        arcs: [],
        arcColor: MARKER_COLOR,
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: isDark ? 0.7 : 0.9,
      })

      const activeGlobe = globe
      const animate = () => {
        if (!isPausedRef.current) phi += spinSpeed
        activeGlobe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      requestAnimationFrame(() => {
        el.style.opacity = "1"
      })
    }

    if (canvas.offsetWidth > 0) {
      init(canvas)
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver?.disconnect()
          resizeObserver = null
          init(canvas)
        }
      })
      resizeObserver.observe(canvas)
    }

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver?.disconnect()
      globe?.destroy()
    }
  }, [markers, speed, isDark])

  const pulseDuration = "2s"

  return (
    <div className={cn("relative aspect-square select-none", className)}>
      <style>{`
        @keyframes globe-pulse-expand {
          0% { transform: scaleX(0.3) scaleY(0.3); opacity: 0.8; }
          100% { transform: scaleX(1.5) scaleY(1.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .globe-pulse-ring {
            animation: none !important;
            opacity: 0.45 !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-hidden
        style={{
          width: "100%",
          height: "100%",
          cursor: interactive ? "grab" : "default",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
          userSelect: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={
            {
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(center)",
              left: "anchor(center)",
              translate: "-50% 50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.4s, filter 0.4s",
            } as CSSProperties
          }
        >
          <span
            className="globe-pulse-ring"
            style={{
              position: "absolute",
              inset: 0,
              border: `2px solid ${MARKER_HEX}`,
              borderRadius: "50%",
              opacity: 0,
              animation: `globe-pulse-expand ${pulseDuration} ease-out infinite ${m.delay}s`,
            }}
          />
          <span
            className="globe-pulse-ring"
            style={{
              position: "absolute",
              inset: 0,
              border: `2px solid ${MARKER_HEX}`,
              borderRadius: "50%",
              opacity: 0,
              animation: `globe-pulse-expand ${pulseDuration} ease-out infinite ${m.delay + 0.5}s`,
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              background: MARKER_HEX,
              borderRadius: "50%",
              boxShadow: isDark
                ? `0 0 0 3px #111, 0 0 0 5px ${MARKER_HEX}`
                : `0 0 0 3px hsl(var(--background)), 0 0 0 5px ${MARKER_HEX}`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
