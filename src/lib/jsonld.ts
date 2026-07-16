import { site } from "@/lib/site";
import type { FaqItem } from "@/content/faq";

/** JSON-LD builders (Phase 8). Nigerian areaServed and geo included. */

export function medicalBusinessLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.legalName,
    alternateName: site.serviceName,
    description:
      "Compassionate home care and elderly support services in Nigeria: vetted caregivers and licensed nurses.",
    url: site.url,
    telephone: site.phones[0],
    email: site.emails.homeCare,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Ibadan" },
      { "@type": "Country", name: "Nigeria" },
    ],
    sameAs: [site.social.facebook],
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "MedicalBusiness", name: site.legalName },
    areaServed: { "@type": "Country", name: "Nigeria" },
  };
}

export function faqLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}
