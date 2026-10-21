
import { Link, useLocation } from "react-router";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="mx-auto max-w-2xl py-12 text-center">
      <title>404 — Page Not Found | DevJournal</title>

      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 shadow-sm sm:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
          Page not found
        </p>

        <h1 className="mt-4 text-7xl font-black tracking-tight text-slate-950">
          404
        </h1>

        <p className="mt-5 text-xl font-semibold text-slate-800">
          This page doesn't exist.
        </p>

        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
          We couldn't find a page at{" "}
          <code className="break-all rounded bg-slate-100 px-2 py-1 text-sm">
            {pathname}
          </code>
          . Try returning to the homepage or browsing the articles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Back home
          </Link>

          <Link
            to="/posts"
            className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Browse articles
          </Link>
        </div>
      </div>
    </section>
  );
}
