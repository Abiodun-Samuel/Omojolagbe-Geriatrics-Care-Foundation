import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/WhatsApp";
import { ContactForm } from "@/sections/ContactForm";
import { contactNarrative } from "@/content/about";
import { medicalBusinessLd, breadcrumbLd } from "@/lib/jsonld";
import { site } from "@/lib/site";

export function Component() {
  const mapQuery = encodeURIComponent(site.address.full);

  return (
    <>
      <Seo
        title="Contact Us | Omojolagbe Geriatric Care"
        description="Talk to us about care for your parent. Call, email, WhatsApp or visit us in Ibadan. Care lines answered 24/7."
        path="/contact"
        jsonLd={[
          medicalBusinessLd(),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
        ]}
      />
      {/* CT01 preserved. */}
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        intro={contactNarrative}
        crumbs={[{ label: "Contact Us" }]}
      />

      <Section size="wide">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card p-6 sm:p-8">
              {/* CT02 preserved. */}
              <h2 className="type-h3">Get In Touch</h2>
              <p className="mt-2 text-ink-600">
                Send us a message and a real person will reply.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal>
            {/* CT08 preserved. */}
            <h2 className="type-h3">Contact Info</h2>

            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                {/* CT09 preserved verbatim. */}
                <span className="text-ink-700">{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  {site.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="text-ink-700 hover:text-brand-800 hover:underline"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <a
                    href={`mailto:${site.emails.homeCare}`}
                    className="break-all text-ink-700 hover:text-brand-800 hover:underline"
                  >
                    {site.emails.homeCare}
                  </a>
                  <a
                    href={`mailto:${site.emails.foundation}`}
                    className="break-all text-ink-700 hover:text-brand-800 hover:underline"
                  >
                    {site.emails.foundation}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock
                  size={20}
                  className="mt-1 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span className="text-ink-700">{site.hours}</span>
              </li>
              <li className="flex gap-3">
                <Facebook
                  size={20}
                  className="mt-1 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-700 hover:text-brand-800 hover:underline"
                >
                  Connect with us on Facebook
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <WhatsAppButton />
            </div>

            <div className="mt-8 overflow-hidden rounded-card border border-ink-200">
              <iframe
                title="Map showing our office in Ibadan"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
