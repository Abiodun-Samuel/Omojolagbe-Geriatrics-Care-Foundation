import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import type { LegalDoc } from "@/content/legal";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/jsonld";

/** Shared renderer for the three legal documents. */
export function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  return (
    <>
      <Seo
        title={`${doc.title} | Omojolagbe Geriatric Care`}
        description={doc.intro}
        path={path}
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: doc.title, path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        intro={doc.intro}
        crumbs={[{ label: doc.title }]}
      />

      <Section size="prose">
        <p className="text-sm text-ink-500">Last updated {doc.updated}</p>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10 first:mt-8">
            <h2 className="type-h3">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-ink-700">
                {p}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-12 rounded-card bg-paper-sunken p-6">
          <h2 className="text-[1.1rem] font-semibold text-ink-900">
            Questions about this?
          </h2>
          <p className="mt-2 text-ink-600">
            Write to us at{" "}
            <a
              href={`mailto:${site.emails.foundation}`}
              className="font-semibold text-brand-800 hover:underline"
            >
              {site.emails.foundation}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${site.phones[0]}`}
              className="font-semibold text-brand-800 hover:underline"
            >
              {site.phones[0]}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
