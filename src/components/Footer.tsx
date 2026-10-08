import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* INTRODUÇÃO */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-zinc-100"
            >
              Diogo
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Estudante de Engenharia de Computação Gráfica e Multimédia,
              interessado em tecnologia, desenvolvimento de software e
              criação de experiências interativas.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/"
              className="text-sm text-zinc-500 transition hover:text-zinc-200"
            >
              Sobre mim
            </Link>

            <Link
              href="/skills"
              className="text-sm text-zinc-500 transition hover:text-zinc-200"
            >
              Competências
            </Link>

            <Link
              href="/experience"
              className="text-sm text-zinc-500 transition hover:text-zinc-200"
            >
              Experiência
            </Link>

            <Link
              href="/contact"
              className="text-sm text-zinc-500 transition hover:text-zinc-200"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Diogo. Todos os direitos reservados.
          </p>

          <p className="text-xs text-zinc-600">
            Desenvolvido com Next.js e React.
          </p>
        </div>
      </div>
    </footer>
  );
}
