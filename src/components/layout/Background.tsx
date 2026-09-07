/**
 * Fixed ambient background: a faint grid plus slow colour blooms.
 * Rendered once for the whole page so sections stay cheap to paint.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-line bg-grid mask-fade-edges opacity-60" />

      <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px] animate-blob" />
      <div className="absolute right-[-10%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-secondary-500/15 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-15%] left-[-5%] h-[30rem] w-[30rem] rounded-full bg-primary-700/15 blur-[130px] animate-blob animation-delay-4000" />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default Background;
