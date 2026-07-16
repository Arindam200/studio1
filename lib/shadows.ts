/** Landing hero background washes. */
export const landingHeroGlowBottom =
  "bottom-[-10rem] md:bottom-[-2rem] z-[-1] left-[20%] absolute glow-orb-hero translate-x-[-50%] transition-all duration-700 ease-out opacity-75 dark:opacity-75 md:size-[30rem] md:h-[20rem] md:w-[10rem] rotate-[-40deg]";

export const landingHeroGlowLeft =
  "top-[-10rem] md:top-[-18rem] z-[-1] left-[-20%] absolute glow-orb-hero translate-x-[-50%] transition-all duration-700 ease-out opacity-75 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] -rotate-[60deg]";

export const landingHeroGlowRight =
  "top-[-10rem] md:top-[-18rem] z-[-1] right-[-20%] absolute glow-orb-hero translate-x-[-50%] transition-all duration-700 ease-out opacity-75 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]";

/** Light-mode depth via globals.css utilities; dark mode keeps Tailwind shadow-xl. */
export const elevatedCardShadow = "shadow-elevated-card dark:shadow-xl";

const glowCenterX = "translate-x-[-50%]";

const sideBeamOpacity =
  "opacity-80 dark:opacity-70 dark:lg:opacity-80";

/** Standard left/right atmospheric side beams (section backgrounds). */
export const sideBeamGlowLeft = `top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRight = `top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** Hero pages — shorter beam height. */
export const sideBeamGlowLeftHero = `top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[42rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightHero = `top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[42rem] w-[10rem] rotate-[40deg]`;

/** Fixed side beams (blog layout, work page). */
export const sideBeamGlowLeftFixed = `top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] fixed glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightFixed = `top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] fixed glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** Taller top offset for careers / vision sections. */
export const sideBeamGlowLeftTall = `top-[-10rem] md:top-[-18rem] z-[-1] left-[-80%] md:left-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightTall = `top-[-10rem] md:top-[-18rem] z-[-1] right-[-80%] md:right-[-20%] absolute glow-orb-beam ${glowCenterX} ${sideBeamOpacity} h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** About page — slightly softer dark presence. */
export const sideBeamGlowLeftMuted = `top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] absolute glow-orb-beam ${glowCenterX} opacity-80 dark:opacity-60 dark:lg:opacity-75 h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightMuted = `top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] absolute glow-orb-beam ${glowCenterX} opacity-80 dark:opacity-60 dark:lg:opacity-75 h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** Case studies — restrained dark glow. */
export const sideBeamGlowLeftSubtle = `top-[-10rem] md:top-[-8rem] z-[-1] left-[-80%] md:left-[-20%] fixed glow-orb-beam ${glowCenterX} opacity-80 dark:opacity-50 dark:lg:opacity-70 h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightSubtle = `top-[-10rem] md:top-[-8rem] z-[-1] right-[-80%] md:right-[-20%] fixed glow-orb-beam ${glowCenterX} opacity-80 dark:opacity-50 dark:lg:opacity-70 h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** Vertically centered side beams (all blogs). */
export const sideBeamGlowLeftCentered = `top-[-10rem] md:top-1/2 z-[-1] left-[-80%] md:left-[-20%] absolute glow-orb-beam ${glowCenterX} opacity-75 dark:opacity-65 h-[50rem] md:h-[60rem] w-[10rem] -rotate-[60deg]`;

export const sideBeamGlowRightCentered = `top-[-10rem] md:top-1/2 z-[-1] right-[-80%] md:right-[-20%] absolute glow-orb-beam ${glowCenterX} opacity-75 dark:opacity-65 h-[50rem] md:h-[60rem] w-[10rem] rotate-[40deg]`;

/** Rotated accent orb above service heroes. */
export const heroAccentGlow =
  `top-[-15rem] left-[50%] z-[-1] opacity-75 dark:opacity-75 absolute glow-orb-accent ${glowCenterX} size-[20rem] rotate-[54deg]`;

/** Features section corner washes. */
export const featuresGlowLeft =
  `bottom-[-10rem] md:bottom-[-18rem] z-[-1] left-[-0%] absolute glow-orb-section-soft ${glowCenterX} opacity-85 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]`;

export const featuresGlowRight =
  `bottom-[-10rem] md:bottom-1/2 md:translate-y-[50%] z-[-1] right-[-0%] absolute glow-orb-section ${glowCenterX} opacity-80 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]`;

/** Landing services section background beams. */
export const servicesSectionGlowBottom =
  `bottom-[-10rem] md:bottom-[-18rem] z-[-1] left-[-0%] absolute glow-orb-section ${glowCenterX} opacity-80 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]`;

export const servicesSectionGlowTop =
  `top-[-10rem] md:top-[-18rem] z-[-1] right-[-0%] absolute glow-orb-section ${glowCenterX} opacity-80 dark:opacity-75 md:size-[30rem] md:h-[40rem] md:w-[10rem] rotate-[60deg]`;

export const servicesCenterGlow =
  `top-1/2 -translate-y-1/2 z-[-1] left-[50%] absolute glow-orb-center ${glowCenterX} opacity-80 dark:opacity-75 md:size-[25rem] w-[20rem] h-[40rem] rotate-[0deg]`;

/** Service card hover orb on landing. */
export const serviceCardHoverGlow =
  `-bottom-[18rem] -translate-y-1/2 z-[-1] left-1/2 absolute glow-orb-service-card ${glowCenterX} opacity-35 group-hover:opacity-90 dark:opacity-25 dark:group-hover:opacity-70 md:size-[15rem] size-[10rem] rotate-[0deg]`;

/** Feature card hover accent. Position classes applied in component. */
export const featureCardHoverGlow =
  "bottom-[-10rem] md:bottom-[-29rem] group-hover:opacity-85 dark:group-hover:opacity-65 opacity-0 z-[10] absolute glow-orb-feature-hover w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]";

/** Generic card hover accent (devrel services, careers). Position classes applied in component. */
export const cardHoverAccentGlow =
  "group-hover:opacity-100 opacity-0 z-[-1] absolute glow-orb-card-hover w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]";

/** Pricing section decorative orbs. */
export const pricingDecorGlow =
  "glow-orb-pricing opacity-90 dark:opacity-60";

/** Product page hero glow. Opacity animated in product-hero via motion. */
export const productHeroGlow =
  `pointer-events-none absolute left-1/2 top-[-4rem] z-[-1] h-[12rem] w-[10rem] opacity-70 ${glowCenterX} rotate-[-20deg] glow-orb-product sm:top-[-6rem] sm:h-[16rem] sm:w-[14rem] sm:opacity-85 md:top-[-8rem] md:h-[26rem] md:w-[28rem] md:opacity-100`;

/** Horizontal floor glow (careers team photos). */
export const floorGlow =
  `bottom-[-3rem] md:bottom-[-5rem] translate-y-[-50%] left-1/2 absolute glow-orb-floor ${glowCenterX} opacity-85 dark:opacity-70 w-[20rem] h-[5rem] md:h-[10rem] md:w-[40rem]`;

/** Team card hover glow. */
export const teamCardHoverGlow =
  "bottom-[-6rem] group-hover:opacity-100 opacity-0 z-[-1] left-1/2 -translate-x-1/2 absolute glow-orb-team-hover h-[90%] w-full";

export const cornerGlowRight =
  `bottom-[-10rem] md:bottom-[-18rem] rotate-[65deg] right-[-14%] opacity-70 dark:opacity-45 z-[-1] absolute glow-orb-corner ${glowCenterX} w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]`;

export const cornerGlowLeft =
  `bottom-[-10rem] md:bottom-[-17rem] rotate-[-65deg] left-[-8%] opacity-70 dark:opacity-45 z-[-1] absolute glow-orb-corner ${glowCenterX} w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]`;

/** CTA uses stronger corner presence with a deeper orange in light mode. */
export const ctaCornerGlowRight =
  `bottom-[-10rem] md:bottom-[-18rem] rotate-[65deg] right-[-14%] opacity-75 dark:opacity-80 z-[-1] absolute glow-orb-corner-strong ${glowCenterX} w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]`;

export const ctaCornerGlowLeft =
  `bottom-[-10rem] md:bottom-[-17rem] rotate-[-65deg] left-[-8%] opacity-75 dark:opacity-80 z-[-1] absolute glow-orb-corner-strong ${glowCenterX} w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]`;

export const floatingTileSurface =
  "border border-white/25 dark:border-white/15 bg-gradient-to-b from-primary via-primary to-primary1 text-white shadow-floating-tile dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_0_0_rgba(0,0,0,0.12),0_10px_28px_-6px_hsl(var(--primary)/0.35)]";

export const featureCardHoverShadow =
  "shadow-feature-card shadow-feature-card-hover dark:shadow-none dark:hover:shadow-xl";

/**
 * Blended service cards (deliverables / whats-included).
 * Light: warm primary-tinted inset at rest; hover adds slightly stronger inset + orange outer lift.
 * Dark: flush at rest; hover adds quiet primary inset + orange outer (no muddy rest depth).
 */
export const glassCardFrame =
  "overflow-hidden border border-border/20 dark:border-white/[0.04] bg-foreground/[0.02] dark:bg-white/[0.02] shadow-[inset_0_1px_2px_hsl(var(--primary)/0.07),inset_0_0_0_1px_hsl(var(--primary)/0.04)] dark:shadow-none hover:border-border/40 dark:hover:border-white/[0.1] hover:bg-background/55 dark:hover:bg-white/[0.045] hover:shadow-[inset_0_1px_3px_hsl(var(--primary)/0.11),inset_0_0_0_1px_hsl(var(--primary)/0.06),0_8px_24px_-14px_rgba(0,0,0,0.08),0_14px_36px_-14px_hsl(var(--primary)/0.28)] dark:hover:shadow-[inset_0_1px_2px_hsl(var(--primary)/0.12),0_10px_28px_-16px_rgba(0,0,0,0.4),0_14px_36px_-14px_hsl(var(--primary)/0.22)]";

/** Soft primary wash revealed on blended card hover. */
export const glassCardHoverWash =
  "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none";

/** Hairline top edge: quiet at rest, slightly clearer on hover. */
export const glassCardEdgeHighlight =
  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-40 transition-opacity duration-300 ease-out group-hover:opacity-70 dark:via-white/15 motion-reduce:transition-none";
