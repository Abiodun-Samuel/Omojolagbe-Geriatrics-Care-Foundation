/**
 * Shown while a lazily loaded route chunk resolves. Deliberately quiet: a
 * brand-tinted placeholder rather than a spinner, so a fast connection never
 * sees a flash of loading UI and a slow one sees something calm and on-brand.
 */
export function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading</span>
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-brand-500 motion-reduce:animate-none"
        aria-hidden="true"
      />
    </div>
  );
}
