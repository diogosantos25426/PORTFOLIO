const contactItems = [
  {
    label: "Telefone",
    value: "937 956 320",
    href: "tel:+351937956320",
    description: "Disponível para falar sobre projetos ou oportunidades.",
  },
  {
    label: "Email",
    value: "sdsantosdiogo@gmail.com",
    href: "mailto:sdsantosdiogo@gmail.com",
    description: "Melhor forma de me contactar para propostas ou dúvidas.",
  },
  {
    label: "GitHub",
    value: "github.com/diogosantos25426",
    href: "https://github.com/diogosantos25426",
    description: "Projetos, código e trabalhos em desenvolvimento.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Contacto
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Vamos conversar.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Estou disponível para colaborações, oportunidades de trabalho e
            projetos de desenvolvimento. Se quiseres discutir uma ideia ou
            simplesmente trocar uma conversa sobre tecnologia, pode entrar em
            contacto comigo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                {item.label}
              </p>

              <p className="mt-6 text-xl font-semibold text-white transition group-hover:text-zinc-200">
                {item.value}
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Aberto a novas oportunidades
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Se procurares alguém apaixonado por tecnologia, desenvolvimento e
            resolução de problemas, estou pronto para colaborar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:sdsantosdiogo@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Enviar email
            </a>

            <a
              href="https://github.com/diogosantos25426"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
