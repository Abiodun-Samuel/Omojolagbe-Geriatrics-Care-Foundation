import { Link } from "react-router";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { JournalCard } from "@/components/JournalCard";
import { journalPosts } from "@/content/journal";

export function JournalPreview() {
  return (
    <Section tone="sunken" size="wide" ariaLabel="Resources and journal">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Resources and journal"
          title="Family guides for hard decisions"
          intro="Practical, plain-language guides for families weighing care, especially those doing it from a distance."
        />
        <Link to="/journal" className="btn btn-ghost">
          Read the journal
        </Link>
      </div>
      <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
        {journalPosts.map((post) => (
          <RevealItem key={post.slug}>
            <JournalCard post={post} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
