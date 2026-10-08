import Link from "next/link";

const navLinks = [
  { name: "Sobre mim", href: "/" },
  { name: "Competências", href: "/skills" },
  { name: "Experiência", href: "/experience" },
  { name: "Contacto", href: "/contact" },
];

// Atualiza estes URLs com os teus perfis reais
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/diogosantos25426",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diogo-santos-77b214353",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.06c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.78 2.7 4.78 6.2v5.68h-4v-5.04c0-1.2-.02-2.75-1.65-2.75-1.66 0-1.91 1.3-1.91 2.66v5.13h-4V9.75Z" />
    ),
  },
];

const EMAIL = "sdsantosdiogo@gmail.com"; 

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* INTRODUÇÃO */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-sm font-bold text-zinc-950">
                D
              </span>
              <span className="text-lg font-semibold text-zinc-100">
                Diogo Santos
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
              Licenciado em Engenharia de Computação Gráfica e Multimédia e
              developer interessado em criar soluções que resolvam problemas
              reais.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold text-zinc-200">Navegação</h2>

            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACTO */}
          <div>
            <h2 className="text-sm font-semibold text-zinc-200">Contacto</h2>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block break-all text-sm text-zinc-500 transition hover:text-zinc-200 focus-visible:text-zinc-200 focus-visible:outline-none"
            >
              {EMAIL}
            </a>

            <ul className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} (abre num novo separador)`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Diogo Santos. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-zinc-500">
              Desenvolvido com Next.js e React.
            </p>

            <a
              href="#"
              className="text-xs text-zinc-400 transition hover:text-zinc-100 focus-visible:text-zinc-100 focus-visible:outline-none"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}