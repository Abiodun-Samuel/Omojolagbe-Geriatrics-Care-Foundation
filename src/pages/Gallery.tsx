import { useState } from "react";
import { Images, Video } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Lightbox } from "@/components/Lightbox";
import { CtaBand } from "@/sections/CtaBand";
import { galleryPhotos, expertPortraits, galleryVideos } from "@/content/media";
import { galleryNarrative } from "@/content/about";
import { breadcrumbLd } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

type Tab = "image" | "video";

export function Component() {
  const [tab, setTab] = useState<Tab>("image");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allPhotos = [...expertPortraits, ...galleryPhotos];

  return (
    <>
      <Seo
        title="Gallery | Omojolagbe Geriatric Care"
        description="Moments, stories and the essence of our journey caring for elderly people in Ibadan and Nigeria."
        path="/gallery"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />
      {/* GL01 preserved. */}
      <PageHero
        eyebrow="Gallery"
        title="Gallery"
        intro={galleryNarrative[0]}
        crumbs={[{ label: "Gallery" }]}
      />

      <Section size="wide">
        {/* G03 preserved verbatim, including its inherited em dash
            (docs/DECISIONS.md D1). */}
        <p className="measure type-lead text-ink-600">{galleryNarrative[1]}</p>

        {/* GL02, GL03 preserved as the toggle labels. */}
        <div
          role="tablist"
          aria-label="Gallery media type"
          className="mt-8 inline-flex gap-1 rounded-pill bg-paper-sunken p-1"
        >
          {(
            [
              { id: "image", label: "Image", icon: Images },
              { id: "video", label: "Video", icon: Video },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-pill px-5 py-2 text-sm font-semibold transition-colors",
                tab === t.id
                  ? "bg-ink-900 text-white"
                  : "text-ink-700 hover:text-ink-900",
              )}
            >
              <t.icon size={16} aria-hidden="true" />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "image" && (
          <div
            role="tabpanel"
            id="panel-image"
            aria-labelledby="tab-image"
            className="mt-8"
          >
            {/* GL04 preserved. */}
            <h2 className="type-h3">Elderly Health Consultation Day</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {allPhotos.map((photo, i) => (
                <li key={photo.id}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group block w-full overflow-hidden rounded-card bg-paper-sunken"
                    style={{ aspectRatio: "1 / 1" }}
                  >
                    <span className="sr-only">
                      Open image {i + 1} of {allPhotos.length}
                    </span>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-(--dur-base) group-hover:scale-105 motion-reduce:transform-none"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "video" && (
          <div
            role="tabpanel"
            id="panel-video"
            aria-labelledby="tab-video"
            className="mt-8"
          >
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryVideos.map((src, i) => (
                <li key={src}>
                  <video
                    controls
                    preload="none"
                    playsInline
                    className="w-full rounded-card bg-ink-900"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <source src={src} type="video/mp4" />
                    <track kind="captions" />
                    Your browser cannot play this video.{" "}
                    <a href={src}>Download video {i + 1}</a>.
                  </video>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {lightboxIndex !== null && (
        <Lightbox
          items={allPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}

      <CtaBand />
    </>
  );
}
