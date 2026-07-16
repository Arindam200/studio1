import {
  sideBeamGlowLeftFixed,
  sideBeamGlowRightFixed,
} from "@/lib/shadows";

/** Fixed left/right orange ambient beams — used on full-page layouts (blog, services). */
export function PageSideBeamGlows() {
  return (
    <>
      <div className={sideBeamGlowLeftFixed} aria-hidden />
      <div className={sideBeamGlowRightFixed} aria-hidden />
    </>
  );
}
