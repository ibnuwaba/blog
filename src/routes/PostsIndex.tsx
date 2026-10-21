
import { Link, useSearchParams } from "react-router";
import { posts } from "../data/posts";

export default function PostsIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get("tag");

  const allTags = [...new Set(posts.flatMap((post) => post.tags))].sort();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  function toggleTag(tag: string) {
    if (selectedTag === tag) {
      setSearchParams({});
    } else {
      setSearchParams({ tag });
    }
  }

  return (
    <div className="space-y-10">
      <title>Articles | DevJournal</title>

      <section className="rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          The library
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Explore the articles<span className="text-violet-400">.</span>
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          Practical ideas, useful concepts, and insights for your journey
          as a developer.
        </p>
        <p className="mt-6 text-sm text-slate-400">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedTag ? ` tagged "${selectedTag}"` : " in the collection"}
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-950">Browse by topic</h2>
          <p className="mt-1 text-sm text-slate-500">
            Select a tag to filter articles. Select it again to clear the filter.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSearchParams({})}
            aria-pressed={!selectedTag}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              !selectedTag
                ? "border-violet-600 bg-violet-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
            }`}
          >
            All topics
          </button>

          {allTags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTag === tag}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedTag === tag
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      {filteredPosts.length > 0 ? (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/60"
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

              <h2 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-950 transition group-hover:text-violet-700">
                {post.title}
              </h2>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
                className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-violet-700"
              >
                Read article
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-slate-950">No articles found</h2>
          <p className="mt-2 text-slate-600">
            There are no articles matching this topic.
          </p>
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Show all articles
          </button>
        </section>
      )}
    </div>
  );
}
