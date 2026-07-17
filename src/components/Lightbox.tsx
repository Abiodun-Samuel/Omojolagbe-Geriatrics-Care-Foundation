import { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Media } from "@/content/media";

type LightboxProps = {
  items: Media[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

/**
 * Accessible image lightbox: native <dialog> semantics via role="dialog",
 * focus trapped inside, focus restored on close, Escape and arrow keys.
 * Replaces react-modal + react-grid-gallery from the old build.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange],
  );
  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    restoreRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Tab") {
        // Trap focus within the panel.
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      restoreRef.current?.focus();
    };
  }, [onClose, next, prev]);

  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${items.length}`}
    >
      {/* Backdrop as a real button so clicking outside closes, and it is
          keyboard reachable and announced rather than a click-only div. */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink-950/90"
      >
        <span className="sr-only">Close image viewer</span>
      </button>

      <div ref={panelRef} className="relative w-full max-w-4xl">
        <div className="flex items-center justify-between pb-3">
          <p className="text-sm text-white/70" aria-live="polite">
            {index + 1} of {items.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span className="sr-only">Close image viewer</span>
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span className="sr-only">Previous image</span>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-h-[75vh] w-full flex-1 rounded-card bg-ink-900 object-contain"
          />

          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span className="sr-only">Next image</span>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
