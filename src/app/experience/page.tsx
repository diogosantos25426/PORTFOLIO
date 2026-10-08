type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies?: string[];
};

const experiences: Experience[] = [
  {
    company: "SENSIFLOW",
    role: "Full Stack Developer — ClubIQ",
    period: "2026 — Atual",
    description:
      "Atuo como Desenvolvedor Full Stack no desenvolvimento e evolução do ClubIQ, trabalhando com um ecossistema moderno que combina Kotlin no backend com React no frontend. Tenho participado na criação de APIs escaláveis, no desenvolvimento de bibliotecas para consumo otimizado de serviços e na modernização da arquitetura Web, transformando aplicações estáticas e hardcoded em plataformas dinâmicas e integradas com a API da ClubIQ.",
    technologies: [
      "Kotlin",
      "React",
      "APIs",
      "Full Stack",
      "Arquitetura Web",
    ],
  },
  {
    company: "TugaCraft",
    role: "Plugin Developer",
    period: "2024 — 2025",
    description:
      "Desenvolvimento de plugins em Java para servidores de Minecraft, criando funcionalidades personalizadas e integrando-as no ambiente do servidor.",
    technologies: [
      "Java",
      "Minecraft",
      "Plugin Development",
    ],
  },
  {
    company: "Demola",
    role: "Gestor de Projeto",
    period: "2024",
    description:
      "Gestão de um projeto focado na criação de um Digital Twin (Gêmeo Digital) para produtos físicos. O objetivo era acompanhar o percurso de cada produto, desde a extração da matéria-prima até à chegada à prateleira, registando cada interação numa rede de forma a garantir transparência e correspondência entre o produto adquirido pelo consumidor e o que é apresentado pela marca.",
    technologies: [
      "Digital Twin",
      "Gestão de Projeto",
      "Blockchain",
      "Rastreabilidade",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Experiência
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Experiência profissional e projetos.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          O meu percurso profissional permitiu-me aplicar os conhecimentos
          adquiridos durante a formação em projetos reais, trabalhando com
          diferentes tecnologias, arquiteturas e contextos de desenvolvimento.
        </p>
      </section>

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              01 — Experiência profissional
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Onde tenho colocado os meus conhecimentos em prática.
            </h2>
          </div>

          <div className="relative">
            {/* LINHA DA TIMELINE */}
            <div className="absolute left-[11px] top-4 hidden h-[calc(100%-2rem)] w-px bg-zinc-800 md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative md:pl-16"
                >
                  {/* PONTO DA TIMELINE */}
                  <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 md:flex">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        index === 0 ? "bg-white" : "bg-zinc-600"
                      }`}
                    />
                  </div>

                  <div
                    className={`rounded-2xl border p-7 transition ${
                      index === 0
                        ? "border-zinc-700 bg-zinc-900/60"
                        : "border-zinc-800 bg-zinc-900/20 hover:border-zinc-700"
                    }`}
                  >
                    {/* CABEÇALHO */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-500">
                          {experience.company}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-zinc-100">
                          {experience.role}
                        </h3>
                      </div>

                      <span
                        className={`w-fit rounded-full px-3 py-1.5 font-mono text-xs ${
                          index === 0
                            ? "bg-white text-zinc-950"
                            : "bg-zinc-800 text-zinc-400"
                        }`}
                      >
                        {experience.period}
                      </span>
                    </div>

                    {/* DESCRIÇÃO */}
                    <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
                      {experience.description}
                    </p>

                    {/* TECNOLOGIAS */}
                    {experience.technologies &&
                      experience.technologies.length > 0 && (
                        <div className="mt-7 flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            02 — Projetos
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos que marcaram o meu percurso.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            Para além da experiência profissional, desenvolvi vários projetos
            académicos e pessoais que me permitiram explorar diferentes áreas
            de desenvolvimento e aplicar os conhecimentos adquiridos.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* PROJETO — CLUBIQ */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 transition hover:border-zinc-700 hover:bg-zinc-900/50">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  01
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  Profissional
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                ClubIQ
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Desenvolvimento Full Stack integrado com APIs e uma
                arquitetura moderna, contribuindo para a evolução de uma
                plataforma dinâmica.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Kotlin", "React", "APIs"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>

            {/* PROJETO — DIGITAL TWIN */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 transition hover:border-zinc-700 hover:bg-zinc-900/50">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  02
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  Demola
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Digital Twin
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Projeto focado na criação de um gémeo digital de produtos
                físicos, permitindo acompanhar e registar o percurso do
                produto desde a matéria-prima até ao consumidor.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Digital Twin",
                  "Gestão de Projeto",
                  "Rastreabilidade",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>

            {/* PROJETO — TUGACRAFT */}
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 transition hover:border-zinc-700 hover:bg-zinc-900/50">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-zinc-600">
                  03
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
                  Pessoal
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                TugaCraft
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Desenvolvimento de plugins em Java para servidores de
                Minecraft, criando funcionalidades personalizadas para o
                servidor.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Java", "Minecraft", "Plugins"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contacto
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Interessado em saber mais sobre o meu trabalho?
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Se quiseres conhecer melhor os projetos em que trabalhei ou
              entrar em contacto comigo, podes encontrar mais informações na
              página de contacto.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Entrar em contacto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}