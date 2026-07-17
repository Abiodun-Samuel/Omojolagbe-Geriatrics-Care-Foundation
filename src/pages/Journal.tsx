import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { JournalCard } from "@/components/JournalCard";
import { CtaBand } from "@/sections/CtaBand";
import { journalPosts } from "@/content/journal";
import { breadcrumbLd } from "@/lib/jsonld";

export function Component() {
  const posts = [...journalPosts].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <>
      <Seo
        title="Journal and Family Guides | Omojolagbe Geriatric Care"
        description="Practical, plain-language guides for Nigerian families weighing care for a parent, including families arranging care from abroad."
        path="/journal"
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Resources and journal"
        title="Family guides for hard decisions"
        intro="No jargon and no selling. Just what we have learned helping families care for their parents."
        crumbs={[{ label: "Journal" }]}
      />

      <Section size="wide">
        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <JournalCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBand />
    </>
  );
}
