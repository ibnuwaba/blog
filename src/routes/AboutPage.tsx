
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <title>About | DevJournal</title>

      <section className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          About the project
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Built for curious minds<span className="text-violet-400">.</span>
        </h1>
        <p className="mt-5 max-w-2xl leading-8 text-slate-300">
          DevJournal is a developer blog exploring the ideas, tools, and
          technologies behind modern web development.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-bold text-slate-950">Our purpose</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Make technical concepts easier to explore through concise articles
            about React, TypeScript, CSS, and the broader web ecosystem.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-bold text-slate-950">Built with</h2>
          <p className="mt-3 leading-7 text-slate-600">
            React, TypeScript, React Router, Vite, and Tailwind CSS.
            The project demonstrates reusable components, nested routes,
            URL-based filtering, and responsive layouts.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-violet-100 bg-violet-50 p-7 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Ready to explore?
          </h2>
          <p className="mt-2 text-slate-600">
            Browse the articles and find your next learning topic.
          </p>
        </div>
        <Link
          to="/posts"
          className="mt-5 inline-flex shrink-0 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700 sm:mt-0"
        >
          Explore articles →
        </Link>
      </section>
    </div>
  );
}
