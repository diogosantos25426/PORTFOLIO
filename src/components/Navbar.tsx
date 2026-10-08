"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Sobre mim",
    href: "/",
  },
  {
    name: "Competências",
    href: "/skills",
  },
  {
    name: "Experiência",
    href: "/experience",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* LOGO / NOME */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-950 transition group-hover:bg-zinc-200">
            D
          </span>

          <span className="hidden text-sm font-semibold tracking-wide text-zinc-200 sm:block">
            Diogo
          </span>
        </Link>

        {/* NAVEGAÇÃO */}
        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
