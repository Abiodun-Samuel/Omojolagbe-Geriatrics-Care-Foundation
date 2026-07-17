import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JournalCard } from "@/components/JournalCard";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { CtaBand } from "@/sections/CtaBand";
import { getJournalPost, journalPosts } from "@/content/journal";
import { breadcrumbLd } from "@/lib/jsonld";
import { NotFoundBody } from "@/components/NotFoundBody";
import { site } from "@/lib/site";

const dateFmt = new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function Component() {
  const { slug } = useParams();
  const post = slug ? getJournalPost(slug) : undefined;

  if (!post) {
    return <NotFoundBody />;
  }

  const more = journalPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
  };

  return (
    <>
      <Seo
        title={`${post.title} | Omojolagbe Geriatric Care`}
        description={post.excerpt}
        path={`/journal/${post.slug}`}
        jsonLd={[
          articleLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: post.title, path: `/journal/${post.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        crumbs={[{ label: "Journal", to: "/journal" }, { label: post.title }]}
      >
        <p className="flex flex-wrap items-center gap-3 text-sm text-white/60">
          <time dateTime={post.date}>{dateFmt.format(new Date(post.date))}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingMinutes} min read</span>
        </p>
      </PageHero>

      <Section size="prose">
        <article>
          {post.placeholder && (
            <PlaceholderTag className="mb-6" label="Sample article" />
          )}
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="type-h3 mb-3 mt-10 first:mt-0">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="my-5 space-y-2">
                  {block.items.map((it) => (
                    <li key={it} className="flex gap-3 text-ink-700">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brand-500"
                        aria-hidden="true"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="my-5 text-ink-700">
                {block.text}
              </p>
            );
          })}
        </article>

        <Link
          to="/journal"
          className="mt-12 inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          All articles
        </Link>
      </Section>

      {more.length > 0 && (
        <Section tone="sunken" size="wide">
          <h2 className="type-h3">More from the journal</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <JournalCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
