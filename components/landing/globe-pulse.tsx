"use client"

import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react"
import createGlobe from "cobe"
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

/** Studio1 primary orange as RGB 0 to 1 for COBE. */
const MARKER_COLOR: [number, number, number] = [0.98, 0.45, 0.09]
const MARKER_HEX = "#f97316"

/**
 * COBE theme configs.
 * `baseColor` is the globe surface color (not land-only).
 * Light must stay near-white; dark stays charcoal/gray.
 */
const GLOBE_THEME = {
  dark: {
    dark: 1,
    baseColor: [0.45, 0.45, 0.45] as [number, number, number],
    glowColor: [0.14, 0.09, 0.05] as [number, number, number],
    mapBrightness: 10,
    diffuse: 1.4,
    opacity: 0.75,
  },
  light: {
    dark: 0,
    baseColor: [1, 1, 1] as [number, number, number],
    glowColor: [1, 1, 1] as [number, number, number],
    mapBrightness: 6,
    diffuse: 1.2,
    opacity: 1,
  },
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
  { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
  { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
]

/** CTA markers: capitals / major hubs for Studio1's global reach. */
export const CTA_GLOBE_MARKERS: PulseMarker[] = [
  { id: "india", location: [12.97, 77.59], delay: 0 },
  { id: "brazil", location: [-23.55, -46.63], delay: 0.35 },
  { id: "us", location: [40.71, -74.01], delay: 0.7 },
  { id: "france", location: [48.86, 2.35], delay: 1.05 },
  { id: "netherlands", location: [52.37, 4.9], delay: 1.4 },
  { id: "singapore", location: [1.35, 103.82], delay: 1.75 },
  { id: "australia", location: [-33.87, 151.21], delay: 2.1 },
  { id: "vietnam", location: [21.03, 105.85], delay: 2.45 },
]

function readIsDark() {
  return document.documentElement.classList.contains("dark")
}

export function GlobePulse({
  markers = defaultMarkers,
  className,
  speed = 0.003,
  interactive = true,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const phiRef = useRef(0)

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
    window.addEventListener("pointerup", endDrag, { passive: true })
    window.addEventListener("pointercancel", endDrag, { passive: true })
    return () => {
      window.removeEventListener("pointerup", endDrag)
      window.removeEventListener("pointercancel", endDrag)
    }
  }, [endDrag, interactive])

  // Keep a stable canvas + globe. Theme changes update colors in place
  // (no remount) so View Transitions / COBE destroy can't race removeChild.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animationId = 0
    let resizeObserver: ResizeObserver | null = null
    let disposed = false

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const spinSpeed = reduceMotion ? 0 : speed

    const themeColorsFor = (dark: boolean) =>
      dark ? GLOBE_THEME.dark : GLOBE_THEME.light

    const applyTheme = (dark: boolean) => {
      const theme = themeColorsFor(dark)
      globeRef.current?.update({
        dark: theme.dark,
        baseColor: theme.baseColor,
        glowColor: theme.glowColor,
        mapBrightness: theme.mapBrightness,
        diffuse: theme.diffuse,
        opacity: theme.opacity,
        markerColor: MARKER_COLOR,
        arcColor: MARKER_COLOR,
      })
    }

    const init = (el: HTMLCanvasElement) => {
      if (disposed || globeRef.current || el.offsetWidth === 0) return

      const dark = readIsDark()
      const theme = themeColorsFor(dark)

      const width = el.offsetWidth
      globeRef.current = createGlobe(el, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: theme.dark,
        diffuse: theme.diffuse,
        mapSamples: 16000,
        mapBrightness: theme.mapBrightness,
        baseColor: theme.baseColor,
        markerColor: MARKER_COLOR,
        glowColor: theme.glowColor,
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
        opacity: theme.opacity,
      })

      const animate = () => {
        if (disposed || !globeRef.current) return
        if (!isPausedRef.current) phiRef.current += spinSpeed
        globeRef.current.update({
          phi: phiRef.current + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      requestAnimationFrame(() => {
        if (!disposed) el.style.opacity = "1"
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

    const onThemeClassChange = () => {
      applyTheme(readIsDark())
    }

    const observer = new MutationObserver(onThemeClassChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      disposed = true
      cancelAnimationFrame(animationId)
      resizeObserver?.disconnect()
      observer.disconnect()
      const globe = globeRef.current
      globeRef.current = null
      // Defer destroy so it doesn't race View Transition DOM clones
      requestAnimationFrame(() => {
        try {
          globe?.destroy()
        } catch {
          // COBE may already be detached during theme view transitions
        }
      })
    }
  }, [markers, speed])

  const pulseDuration = "2s"

  return (
    <div
      className={cn(
        "relative aspect-square select-none",
        // Stronger outer depth in light mode so the white globe doesn't flatten into the card
        "[filter:drop-shadow(0_22px_48px_rgba(15,15,15,0.28))_drop-shadow(0_8px_18px_rgba(15,15,15,0.16))]",
        "dark:[filter:drop-shadow(0_16px_36px_rgba(0,0,0,0.45))]",
        className,
      )}
    >
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
            className={cn(
              "size-2.5 rounded-full bg-primary",
              "shadow-[0_0_0_3px_hsl(var(--background)),0_0_0_5px_hsl(var(--primary))]",
            )}
          />
        </div>
      ))}
    </div>
  )
}
