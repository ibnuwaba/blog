
import { Link } from "react-router";
import { posts } from "../data/posts";

export default function HomePage() {
  const latest = [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <title>DevJournal — Ideas for Developers</title>

      <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            The developer's journal
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Ideas that make
            <span className="block text-violet-300">better developers.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore practical insights on React, TypeScript, modern web
            development, and the tools that help you build with confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/posts"
              className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-400"
            >
              Explore articles <span aria-hidden="true">→</span>
            </Link>

            <span className="text-sm text-slate-400">
              {posts.length} articles to explore
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              From the journal
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Latest articles
            </h2>
            <p className="mt-3 text-slate-600">
              Fresh ideas and practical knowledge for your next project.
            </p>
          </div>

          <Link
            to="/posts"
            className="font-semibold text-violet-700 transition hover:text-violet-900"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, index) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                  ARTICLE {String(index + 1).padStart(2, "0")}
                </span>
                <time
                  dateTime={post.publishedAt}
                  className="text-xs text-slate-500"
                >
                  {new Date(`${post.publishedAt}T12:00:00`).toLocaleDateString(
                    "en",
                    { month: "short", day: "numeric", year: "numeric" },
                  )}
                </time>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-950 transition group-hover:text-violet-700">
                {post.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Link
                    key={tag}
                    to={`/posts?tag=${encodeURIComponent(tag)}`}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-violet-100 hover:text-violet-700"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              <Link
                to={`/posts/${post.slug}`}
                className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-violet-700"
              >
                Read article
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-violet-100 bg-violet-50/70 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Keep learning. Keep building.
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Browse every article and discover your next development topic.
          </p>
        </div>

        <Link
          to="/posts"
          className="mt-5 inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 sm:mt-0"
        >
          Browse all posts →
        </Link>
      </section>
    </div>
  );
}
