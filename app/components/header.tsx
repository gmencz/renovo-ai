import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header className="w-full mx-auto max-w-6xl border-b border-b-neutral-300 px-6 py-8 flex items-center gap-4 justify-between">
      <Link to="/">
        <img src="/icon.png" alt="Logo" className="w-12 h-12" />
      </Link>
      <Link
        to="/revamp"
        className="bg-orange-800 text-orange-200 px-6 py-3 rounded-xl font-bold hover:bg-orange-700 flex items-center justify-center gap-2"
      >
        <span>Sign up</span>
        <ArrowLongRightIcon className="h-6 w-6" />
      </Link>
    </header>
  );
}
