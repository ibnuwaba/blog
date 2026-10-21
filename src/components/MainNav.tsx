import { NavLink } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-violet-100 text-violet-700"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
  }`;

export default function MainNav() {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-2">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/posts" className={linkClass}>
        Articles
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
    </nav>
  );
}