"use client";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
  useId,
} from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const ASCII_CHARSETS = {
  standard: " .,:;i1tfLCG08@",
  blocks: " ░▒▓█",
  binary: " 01",
  dots: " ·•●",
  minimal: " .:░▒",
  dense: " .'`^\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
  arrows: " ←↑→↓↔↕↖↗↘↙",
  stars: " ·✦✧★",
  hash: " -=#",
  pipes: " |/─\\│",
  braille: " ⠁⠃⠇⠏⠟⠿⡿⣿",
  circles: " ○◔◑◕●",
  squares: " ▢▣▤▥▦▧▨▩",
  hearts: " ♡♥",
  math: " +-×÷=≠≈∞",
} as const;

type CharsetPreset = keyof typeof ASCII_CHARSETS;

const isCharsetPreset = (value: string): value is CharsetPreset => {
  return value in ASCII_CHARSETS;
};

const resolveCharset = (charset: string): string => {
  if (isCharsetPreset(charset)) {
    return ASCII_CHARSETS[charset];
  }
  return charset;
};

const resolveCssColor = (
  color: string,
  element: HTMLElement | null
): string => {
  if (!color) return color;

  if (color.startsWith("var(")) {
    if (!element) return "#ffffff";

    const tempDiv = document.createElement("div");
    tempDiv.style.color = color;
    element.appendChild(tempDiv);
    const computedColor = getComputedStyle(tempDiv).color;
    element.removeChild(tempDiv);
    return computedColor || "#ffffff";
  }

  return color;
};

const isCrossOriginSrc = (src: string): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const url = new URL(src, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
};

type AsciiArtProps = {
  src: string;
  /** Explicit CSS pixel width — preferred for reliable canvas sizing. */
  width?: number;
  /** Explicit CSS pixel height — preferred for reliable canvas sizing. */
  height?: number;
  /** Number of ASCII columns (character resolution). Higher = more detail. */
  resolution?: number;
  /** Charset preset name ("standard", "blocks", "binary", etc.) or custom character string */
  charset?: CharsetPreset | string;
  /** Text color for the ASCII art (ignored if colored=true) */
  color?: string;
  /** Background color */
  backgroundColor?: string;
  /**
   * Invert luminance when picking characters (dark figure → dense glyphs).
   * Needed for dark nobg portraits: normal mapping turns faces into spaces.
   */
  invertLuminance?: boolean;
  /** Convert to inverted colors (dark bg, light text) via charset reversal */
  inverted?: boolean;
  /** Enable colored ASCII (uses image colors) */
  colored?: boolean;
  /** Enable animation on load */
  animated?: boolean;
  /** Animation style */
  animationStyle?: "fade" | "typewriter" | "matrix" | "none";
  /** Duration for fade animation in seconds */
  animationDuration?: number;
  /** Font family for ASCII characters */
  fontFamily?: string;
  /** Container className - use this to control size (e.g., w-full, h-64) */
  className?: string;
  /** Only animate when in view */
  animateOnView?: boolean;
  /** How the image should fit within the ASCII grid */
  objectFit?: "cover" | "contain" | "fill";
};
const MATRIX_CHARSET = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";

type AsciiPixel = {
  char: string;
  r: number;
  g: number;
  b: number;
};

export const AsciiArt: React.FC<AsciiArtProps> = ({
  src,
  width: widthProp,
  height: heightProp,
  resolution = 80,
  charset = "standard",
  color = "#ffffff",
  backgroundColor = "transparent",
  invertLuminance = false,
  inverted = false,
  colored = false,
  animated = true,
  animationStyle = "fade",
  animationDuration = 1,
  fontFamily = "monospace",
  className,
  animateOnView = true,
  objectFit = "cover",
}) => {
  const uniqueId = useId();
  const [asciiData, setAsciiData] = useState<AsciiPixel[][]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const prePaintedRef = useRef(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const shouldStartAnimation = animated && animateOnView ? isInView : animated;
  const shouldShowStatic = !animated || animationStyle === "none";

  const resolvedCharset = resolveCharset(charset);
  const effectiveCharset = inverted
    ? resolvedCharset.split("").reverse().join("")
    : resolvedCharset;

  const defaultColor = inverted ? "#ffffff" : "#000000";
  const textColor = color || defaultColor;

  useEffect(() => {
    let isCancelled = false;

    const img = new Image();
    // Only set CORS for true cross-origin URLs. Same-origin `_next/static`
    // and `/public` paths stay untainted without it; forcing anonymous can
    // fail getImageData when ACAO headers are missing.
    if (isCrossOriginSrc(src)) {
      img.crossOrigin = "anonymous";
    }
    img.decoding = "async";
    img.src = src;

    img.onload = () => {
      if (isCancelled) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        setError("Canvas context not available");
        return;
      }

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      if (imgWidth === 0 || imgHeight === 0) {
        setError("Image has zero dimensions");
        return;
      }

      const imgAspect = imgWidth / imgHeight;
      // Monospace glyphs are ~taller than wide; compensate so the grid
      // matches the target frame aspect instead of a hard-coded square.
      const charAspectRatio = 0.55;
      const targetW = widthProp ?? containerRef.current?.clientWidth ?? imgWidth;
      const targetH =
        heightProp ?? containerRef.current?.clientHeight ?? imgHeight;
      const frameAspect = targetW / Math.max(1, targetH);

      const cols = Math.max(8, resolution);
      const rows = Math.max(
        8,
        Math.round((cols / frameAspect) * charAspectRatio)
      );

      canvas.width = cols;
      canvas.height = rows;

      // Clear to transparent — preserve source alpha so nobg PNGs stay cut out.
      ctx.clearRect(0, 0, cols, rows);

      let sx = 0,
        sy = 0,
        sw = imgWidth,
        sh = imgHeight;

      if (objectFit === "cover") {
        if (imgAspect > frameAspect) {
          sw = imgHeight * frameAspect;
          sx = (imgWidth - sw) / 2;
        } else {
          sh = imgWidth / frameAspect;
          sy = (imgHeight - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      } else if (objectFit === "contain") {
        let dw: number, dh: number, dx: number, dy: number;
        if (imgAspect > frameAspect) {
          dw = cols;
          dh = (cols / imgAspect) * charAspectRatio;
          dx = 0;
          dy = (rows - dh) / 2;
        } else {
          dh = rows;
          dw = (rows * imgAspect) / charAspectRatio;
          dx = (cols - dw) / 2;
          dy = 0;
        }
        ctx.drawImage(img, dx, dy, dw, dh);
      } else {
        ctx.drawImage(img, 0, 0, cols, rows);
      }

      let imageData: ImageData;
      try {
        imageData = ctx.getImageData(0, 0, cols, rows);
      } catch {
        setError("Unable to read image data (CORS issue)");
        return;
      }

      const data = imageData.data;
      const result: AsciiPixel[][] = [];
      const charsetLen = Math.max(1, effectiveCharset.length - 1);

      for (let y = 0; y < rows; y++) {
        const row: AsciiPixel[] = [];
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          // Transparent / near-transparent → no glyph (keeps nobg cutout).
          if (a < 16) {
            row.push({ char: " ", r, g, b });
            continue;
          }

          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          // Weight by alpha so soft edges don't punch full-strength glyphs.
          const weighted = brightness * (a / 255);
          // Dark portraits on dark cards: invert so the figure is dense glyphs
          // instead of mostly spaces (the usual cause of "blank" ASCII faces).
          const value = invertLuminance ? 1 - weighted : weighted;
          const charIndex = Math.min(
            charsetLen,
            Math.max(0, Math.floor(value * charsetLen))
          );
          const char = effectiveCharset[charIndex] || " ";

          row.push({ char, r, g, b });
        }
        result.push(row);
      }

      setAsciiData(result);
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      if (isCancelled) return;
      setError("Failed to load image");
    };

    return () => {
      isCancelled = true;
    };
  }, [
    src,
    resolution,
    effectiveCharset,
    objectFit,
    widthProp,
    heightProp,
    invertLuminance,
  ]);

  const getDrawSize = useCallback(() => {
    const container = containerRef.current;
    const fromContainerW = container?.clientWidth ?? 0;
    const fromContainerH = container?.clientHeight ?? 0;
    const w = fromContainerW > 0 ? fromContainerW : (widthProp ?? 0);
    const h = fromContainerH > 0 ? fromContainerH : (heightProp ?? 0);
    return { w, h };
  }, [widthProp, heightProp]);

  const drawCanvas = useCallback(
    (progress: number = 1, matrixProgress?: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container || asciiData.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w: containerWidth, h: containerHeight } = getDrawSize();
      if (containerWidth === 0 || containerHeight === 0) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const resolvedBgColor = resolveCssColor(backgroundColor, container);
      const resolvedTextColor = resolveCssColor(textColor, container);

      if (resolvedBgColor !== "transparent") {
        ctx.fillStyle = resolvedBgColor;
        ctx.fillRect(0, 0, containerWidth, containerHeight);
      } else {
        ctx.clearRect(0, 0, containerWidth, containerHeight);
      }

      const rows = asciiData.length;
      const cols = asciiData[0]?.length || 0;
      if (cols === 0) return;

      const charWidth = containerWidth / cols;
      const charHeight = containerHeight / rows;
      const fontSize = Math.min(charWidth * 1.8, charHeight * 1.2);

      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      const totalChars = rows * cols;
      const revealedChars = Math.floor(progress * totalChars);

      let charIndex = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const pixel = asciiData[y][x];
          const cx = x * charWidth + charWidth / 2;
          const cy = y * charHeight;

          if (pixel.char === " ") {
            charIndex++;
            continue;
          }

          if (animationStyle === "typewriter" && charIndex >= revealedChars) {
            charIndex++;
            continue;
          }

          let displayChar = pixel.char;
          let displayColor = colored
            ? `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`
            : resolvedTextColor;

          if (animationStyle === "matrix" && matrixProgress !== undefined) {
            const charProgress = (x * 0.02 + y * 0.01) / 2;
            if (matrixProgress < charProgress) {
              charIndex++;
              continue;
            } else if (matrixProgress < charProgress + 0.15) {
              displayChar =
                MATRIX_CHARSET[
                  Math.floor(Math.random() * MATRIX_CHARSET.length)
                ];
              displayColor = "#00ff00";
              ctx.shadowColor = "#00ff00";
              ctx.shadowBlur = 5;
            } else {
              ctx.shadowBlur = 0;
            }
          }

          ctx.fillStyle = displayColor;
          ctx.globalAlpha = animationStyle === "fade" ? progress : 1;
          ctx.fillText(displayChar, cx, cy);

          charIndex++;
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    },
    [
      asciiData,
      backgroundColor,
      colored,
      textColor,
      fontFamily,
      animationStyle,
      getDrawSize,
    ]
  );

  useEffect(() => {
    if (!isLoaded || asciiData.length === 0) return;

    const draw = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) {
        requestAnimationFrame(draw);
        return;
      }

      // Paint fully when idle so in-view / opacity gates never leave a blank canvas.
      if (shouldShowStatic || hasAnimated) {
        drawCanvas(1);
        return;
      }

      // Pre-paint while waiting for in-view. When in-view finally fires, do not
      // re-fade from 0 (that flashed a blank frame over an already-visible portrait).
      if (!shouldStartAnimation) {
        drawCanvas(1);
        prePaintedRef.current = true;
        return;
      }

      if (prePaintedRef.current && animationStyle === "fade") {
        drawCanvas(1);
        setHasAnimated(true);
        return;
      }

      const startTime = performance.now();
      const duration =
        animationStyle === "fade"
          ? animationDuration * 1000
          : animationStyle === "typewriter"
            ? asciiData.length * asciiData[0]?.length * 2
            : animationStyle === "matrix"
              ? 3000
              : 1000;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        if (animationStyle === "matrix") {
          drawCanvas(1, progress);
        } else {
          drawCanvas(progress);
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    isLoaded,
    shouldStartAnimation,
    shouldShowStatic,
    hasAnimated,
    animationStyle,
    animationDuration,
    drawCanvas,
    asciiData,
  ]);

  useIsomorphicLayoutEffect(() => {
    if (!isLoaded || asciiData.length === 0) return;
    drawCanvas(1);
  }, [isLoaded, asciiData, drawCanvas]);

  useEffect(() => {
    if (!isLoaded || asciiData.length === 0) return;

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      drawCanvas(1);
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [isLoaded, asciiData, drawCanvas]);

  const sizeStyle: React.CSSProperties = {
    backgroundColor,
    ...(widthProp ? { width: widthProp } : null),
    ...(heightProp ? { height: heightProp } : null),
  };

  if (error) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "flex items-center justify-center text-red-500 text-sm font-mono",
          className
        )}
        style={sizeStyle}
      >
        Error: {error}
      </div>
    );
  }

  // Keep containerRef mounted from the first paint so useInView can observe it.
  // (Previously a ref-less loading div meant fade opacity could stay at 0 forever.)
  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={sizeStyle}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm font-mono animate-pulse">
          Loading...
        </div>
      )}
      {isLoaded && (
        <canvas
          key={uniqueId}
          id={`ascii-canvas-${uniqueId}`}
          ref={canvasRef}
          className="block w-full h-full"
          aria-label="ASCII art rendering of image"
          role="img"
        />
      )}
    </div>
  );
};

export const AsciiArtStatic: React.FC<
  Omit<AsciiArtProps, "animated" | "animationStyle">
> = (props) => {
  return <AsciiArt {...props} animated={false} animationStyle="none" />;
};
