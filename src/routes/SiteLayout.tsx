
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import ScrollToTop from "../components/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />

      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="text-xl font-black tracking-tight text-violet-700">
            DevJournal<span className="text-slate-900">.</span>
          </a>
          <MainNav />
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:py-14">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} DevJournal. Built with React,
          TypeScript and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

