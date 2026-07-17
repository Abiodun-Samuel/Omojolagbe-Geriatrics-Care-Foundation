import { useMemo, useState, useId } from "react";
import { Search } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { WhatsAppButton } from "@/components/WhatsApp";
import { CtaBand } from "@/sections/CtaBand";
import { faqItems, faqGroups } from "@/content/faq";
import { faqLd, breadcrumbLd } from "@/lib/jsonld";

export function Component() {
  const [query, setQuery] = useState("");
  const searchId = useId();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqItems;
    return faqItems.filter(
      (f) =>
        f.q.toLowerCase().includes(q) ||
        f.a.toLowerCase().includes(q) ||
        f.group.toLowerCase().includes(q),
    );
  }, [query]);

  const grouped = faqGroups
    .map((g) => ({ group: g, items: results.filter((f) => f.group === g) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Omojolagbe Geriatric Care"
        description="How to start, how we vet caregivers, what care costs, and how families abroad arrange care for parents in Nigeria."
        path="/faq"
        jsonLd={[
          faqLd(faqItems),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Questions"
        title="Answers, in plain language"
        intro="The things families ask us first. If your question is not here, ask us directly."
        crumbs={[{ label: "FAQ" }]}
      />

      <Section size="content">
        <div className="mx-auto max-w-2xl">
          <label htmlFor={searchId} className="eyebrow mb-2 block">
            Search questions
          </label>
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
              aria-hidden="true"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'cost', 'vetting' or 'abroad'"
              className="field pl-11"
            />
          </div>
          <p aria-live="polite" className="mt-3 text-sm text-ink-500">
            {query.trim()
              ? `${results.length} ${results.length === 1 ? "answer" : "answers"} for "${query.trim()}"`
              : `${faqItems.length} questions`}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-12">
          {grouped.map((g) => (
            <div key={g.group}>
              <h2 className="type-h3 mb-4">{g.group}</h2>
              <Accordion items={g.items.map(({ q, a }) => ({ q, a }))} />
            </div>
          ))}

          {grouped.length === 0 && (
            <div className="rounded-card bg-paper-sunken p-8 text-center">
              <h2 className="text-[1.15rem] font-semibold text-ink-900">
                No answer matches "{query.trim()}"
              </h2>
              <p className="mx-auto mt-2 max-w-md text-ink-600">
                Try a different word, or ask us directly and a real person will
                answer.
              </p>
              <div className="mt-5 flex justify-center">
                <WhatsAppButton
                  message={`Hello Omojolagbe Care, I have a question about: ${query.trim()}`}
                  label="Ask on WhatsApp"
                />
              </div>
            </div>
          )}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
