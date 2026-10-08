import Image from "next/image";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            Olá, sou o 
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Diogo Santos
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-zinc-300 sm:text-3xl">
            Software Developer
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Sou um estudante / developer interessado em desenvolvimento de
            software, tecnologia e na criação de soluções que resolvam
            problemas reais.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/skills"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Ver competências
            </a>

            <a
              href="/experience"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Ver experiência
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                01
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Sobre mim
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">
              <p>
                Sou uma pessoa apaixonada por tecnologia e desenvolvimento de
                software. Gosto de perceber como as coisas funcionam e de
                transformar ideias em aplicações concretas.
              </p>

              <p>
                O meu percurso académico permitiu-me construir uma base sólida
                em programação, engenharia de software, bases de dados e outras
                áreas relacionadas com o desenvolvimento de sistemas.
              </p>

              <p>
                Atualmente procuro continuar a evoluir através de projetos
                reais, explorando novas tecnologias e aprofundando os meus
                conhecimentos de desenvolvimento de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              02
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Tecnologias
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Queres saber mais sobre o meu percurso?
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Explora as minhas competências, formação académica e experiência
              profissional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/skills"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                Ver competências
              </a>

              <a
                href="/contact"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
