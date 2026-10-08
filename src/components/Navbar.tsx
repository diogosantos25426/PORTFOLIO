"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Sobre mim", href: "/" },
  { name: "Competências", href: "/skills" },
  { name: "Experiência", href: "/experience" },
];

const cta = { name: "Contacto", href: "/contact" };

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "px-4 pt-4" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between border backdrop-blur-xl transition-all duration-300 md:pl-4 ${
          scrolled || menuOpen
            ? "rounded-full border-zinc-700 bg-zinc-950/90 pl-3 pr-3 shadow-lg shadow-black/40"
            : "border-transparent bg-transparent pl-6 pr-6"
        }`}
      >
        {/* LOGO / NOME */}
        <Link
          href="/"
          aria-label="Diogo Santos, página inicial"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-950 transition group-hover:bg-zinc-200">
            D
          </span>

          <span className="text-sm font-semibold tracking-wide text-zinc-100">
            Diogo Santos
          </span>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                  active
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href={cta.href}
            aria-current={isActive(cta.href) ? "page" : undefined}
            className="ml-3 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {cta.name}
          </Link>
        </nav>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      <nav
        id="mobile-menu"
        aria-label="Principal (móvel)"
        hidden={!menuOpen}
        className="mx-auto mt-2 max-w-6xl rounded-3xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-lg shadow-black/40 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                    active
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <li className="pt-1">
            <Link
              href={cta.href}
              aria-current={isActive(cta.href) ? "page" : undefined}
              className="block rounded-full bg-white px-4 py-3 text-center text-base font-medium text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {cta.name}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}