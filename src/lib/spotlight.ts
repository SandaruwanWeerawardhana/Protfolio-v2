/**
 * Spotlight glow colours for <SpotlightCard>.
 * Kept in one place so cards across sections stay on the same palette.
 */
export const spotlight = {
  sky: 'rgba(56, 189, 248, 0.16)',
  violet: 'rgba(139, 92, 246, 0.16)',
  skySoft: 'rgba(56, 189, 248, 0.14)',
  violetSoft: 'rgba(139, 92, 246, 0.14)',
} as const;

/** Alternating colours for grids of cards. */
export const spotlightCycle = [spotlight.sky, spotlight.violet];
