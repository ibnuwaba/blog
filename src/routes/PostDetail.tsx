
import { Link, useParams } from "react-router";
import { findPost } from "../data/posts";
import NotFound from "./NotFound";

export default function PostDetail() {
  const { slug } = useParams();
  const post = findPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <title>{`${post.title} | DevJournal`}</title>

      <Link
        to="/posts"
        className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition hover:text-violet-900"
      >
        <span aria-hidden="true">←</span> All articles
      </Link>

      <header className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          DevJournal / Article
        </p>

        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <time dateTime={post.publishedAt}>
            {new Date(`${post.publishedAt}T12:00:00`).toLocaleDateString(
              "en",
              { month: "long", day: "numeric", year: "numeric" },
            )}
          </time>
          <span aria-hidden="true">·</span>
          <span>DevJournal editorial</span>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-1 sm:px-4">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-7">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div className="py-8">
          <p className="whitespace-pre-line text-lg leading-9 text-slate-700 sm:text-xl sm:leading-10">
            {post.body}
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-700">
            Keep exploring
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Your next idea is one article away.
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Browse more topics and continue learning about modern web development.
          </p>
          <Link
            to="/posts"
            className="mt-5 inline-flex rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Explore all articles →
          </Link>
        </div>
      </article>
    </div>
  );
}
