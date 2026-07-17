import type { Media } from "@/content/media";
import { cn } from "@/lib/cn";

type SmartImageProps = {
  media: Media;
  /** The LCP hero image should set priority. Everything else lazy-loads. */
  priority?: boolean;
  className?: string;
  /** Applied to the <img>; wrapper keeps the aspect ratio to avoid CLS. */
  imgClassName?: string;
  sizes?: string;
  rounded?: boolean;
};

/**
 * One image component for the whole site (Phase 6): explicit width/height,
 * lazy by default, async decoding, fetchPriority high on the LCP image, and a
 * warm brand-tinted background so there is no layout shift while loading.
 */
export function SmartImage({
  media,
  priority = false,
  className,
  imgClassName,
  sizes,
  rounded = true,
}: SmartImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-paper-sunken",
        rounded && "rounded-card",
        className,
      )}
      style={{ aspectRatio: `${media.width} / ${media.height}` }}
    >
      <img
        src={media.src}
        srcSet={media.srcSet}
        sizes={sizes}
        width={media.width}
        height={media.height}
        alt={media.alt}
        loading={priority ? "eager" : "lazy"}
        // fetchPriority is a valid DOM attribute; camelCase in React 19.
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imgClassName,
        )}
        style={
          media.focalPoint ? { objectPosition: media.focalPoint } : undefined
        }
      />
    </div>
  );
}
