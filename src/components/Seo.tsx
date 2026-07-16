import { site } from "@/lib/site";

type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/services". Canonical is built from site.url. */
  path: string;
  /** Optional absolute or root-relative OG image. Falls back to site default. */
  image?: string;
  /** Optional JSON-LD objects to inject for this route. */
  jsonLd?: Array<Record<string, unknown>>;
  noIndex?: boolean;
};

/**
 * React 19 native document metadata: these tags are hoisted to <head>.
 * No helmet library (see docs/DECISIONS.md D6). One <title> per page.
 */
export function Seo({
  title,
  description,
  path,
  image,
  jsonLd,
  noIndex,
}: SeoProps) {
  const canonical = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${site.url}${image}`
    : `${site.url}${site.ogImage}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd?.map((obj, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          // JSON-LD must be a raw string in a script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
