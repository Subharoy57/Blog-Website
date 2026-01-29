"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="border-b border-yellow-300 bg-yellow-400">
      <nav
        aria-label="Main navigation"
        className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-center"
      >
        <ul className="flex gap-8 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition ${
                    active
                      ? "text-slate-900 font-semibold border-b-2 border-slate-900 pb-1"
                      : "text-slate-800 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}


