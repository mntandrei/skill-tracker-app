import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-4 pt-6">
      <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 rounded-2xl bg-rose-600 px-6 py-4 shadow-lg">
        <Link
          href="/"
          className="text-2xl font-bold text-white transition-transform duration-300 hover:scale-105">
          SkillTree
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-xl px-4 py-2 font-medium text-white transition-colors hover:bg-white/20">
            Home
          </Link>
          <Link
            href="/skills"
            className="rounded-xl px-4 py-2 font-medium text-white transition-colors hover:bg-white/20">
            Skills
          </Link>
          <Link
            href="/settings"
            className="rounded-xl px-4 py-2 font-medium text-white transition-colors hover:bg-white/20">
            Settings
          </Link>
        </div>
      </nav>
    </header>
  );
}