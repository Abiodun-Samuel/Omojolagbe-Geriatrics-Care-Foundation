import { Link } from "react-router";
import type { JournalPost } from "@/content/journal";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";

const dateFmt = new Intl.DateTimeFormat("en-NG", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function JournalCard({ post }: { post: JournalPost }) {
  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-3 text-sm text-ink-500">
        <span className="chip">{post.category}</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-4 text-[1.2rem] font-semibold text-ink-900">
        <Link
          to={`/journal/${post.slug}`}
          className="hover:text-brand-800"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink-600">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <time
          dateTime={post.date}
          className="text-sm text-ink-500"
        >
          {dateFmt.format(new Date(post.date))}
        </time>
        {post.placeholder && <PlaceholderTag label="Sample article" />}
      </div>
    </article>
  );
}
