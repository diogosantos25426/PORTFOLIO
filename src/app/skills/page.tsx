type Subject = {
  name: string;
  description?: string;
  technologies?: string[];
};

type AcademicYear = {
  year: string;
  description: string;
  subjects: Subject[];
};

type TechnicalSkill = {
  title: string;
  description: string;
  technologies: string[];
};

type KnowledgeArea = {
  number: string;
  title: string;
  description: string;
  subjects: string[];
};

const technicalSkills: TechnicalSkill[] = [
  {
    title: "Programação",
    description:
      "Experiência académica em programação através de diferentes linguagens e paradigmas, desde os fundamentos de programação e algoritmia até ao desenvolvimento de aplicações.",
    technologies: [
      "Java",
      "C#",
      "Algoritmia",
      "Programação Orientada a Objetos",
    ],
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de websites e aplicações Web, com aprofundamento de HTML e CSS e contacto com APIs e frameworks de desenvolvimento.",
    technologies: [
      "HTML",
      "CSS",
      "APIs",
      "Programação Web",
      "Laravel",
    ],
  },
  {
    title: "Bases de Dados",
    description:
      "Contacto com diferentes paradigmas de armazenamento e gestão de dados, desde bases de dados relacionais a soluções NoSQL e sistemas em memória.",
    technologies: ["SQL", "NoSQL", "Redis"],
  },
  {
    title: "Computação Gráfica e 3D",
    description:
      "Formação em computação gráfica, modelação tridimensional e animação, utilizando diferentes ferramentas de criação 3D.",
    technologies: [
      "Blender",
      "Maya",
      "Modelação 3D",
      "Animação 3D",
      "Computação Gráfica",
    ],
  },
  {
    title: "Multimédia e Design",
    description:
      "Conhecimentos de design gráfico, produção multimédia, fotografia e produção audiovisual.",
    technologies: [
      "Photoshop",
      "Design Gráfico",
      "Design Multimédia",
      "Fotografia",
      "Produção Audiovisual",
    ],
  },
  {
    title: "Aplicações Interativas e Mobile",
    description:
      "Desenvolvimento de aplicações interativas e móveis, aplicando conceitos de design de interfaces e criação de conteúdos dinâmicos.",
    technologies: ["Ionic", "C#", "Interfaces Gráficas", "UI/UX"],
  },
  {
    title: "Sistemas e Redes",
    description:
      "Conhecimentos sobre arquitetura de computadores, sistemas operativos, máquinas virtuais, redes e funcionamento da Internet.",
    technologies: [
      "Linux",
      "Máquinas Virtuais",
      "Redes",
      "Protocolos",
      "Internet",
    ],
  },
  {
    title: "Engenharia de Software",
    description:
      "Aplicação de conceitos de arquitetura de software e desenvolvimento de aplicações através de projetos estruturados.",
    technologies: ["MVC", "Laravel", "Arquitetura de Software", "APIs"],
  },
];

const academicYears: AcademicYear[] = [
  {
    year: "1.º Ano",
    description:
      "Construção das bases matemáticas, computacionais e criativas necessárias para a área de Engenharia de Computação Gráfica e Multimédia.",
    subjects: [
      {
        name: "Álgebra Linear e Geometria Analítica",
        description:
          "Estudo de conceitos fundamentais de álgebra linear e geometria analítica, com foco em vetores e matrizes, conhecimentos importantes para áreas como a computação gráfica.",
      },
      {
        name: "Propedêutica da Matemática",
        description:
          "Continuação e consolidação dos conhecimentos de matemática adquiridos no ensino secundário, criando uma base para as restantes unidades curriculares do curso.",
      },
      {
        name: "Design Gráfico",
        description:
          "Introdução aos princípios fundamentais de design gráfico e composição visual, com utilização do Adobe Photoshop. Foram desenvolvidos trabalhos maioritariamente baseados na composição e manipulação de figuras geométricas.",
        technologies: ["Adobe Photoshop"],
      },
      {
        name: "Introdução à Programação",
        description:
          "Introdução aos conceitos fundamentais de programação através da linguagem Java, incluindo conceitos básicos, funções e desenvolvimento de pequenos programas.",
        technologies: ["Java"],
      },
      {
        name: "Arquiteturas e Sistemas de Computadores",
        description:
          "Estudo dos principais componentes e conceitos relacionados com a arquitetura de computadores. Houve também contacto com Linux, máquinas virtuais e programação em ambientes virtualizados. Foram desenvolvidos relatórios técnicos utilizando LaTeX.",
        technologies: ["Linux", "Máquinas Virtuais", "LaTeX"],
      },
      {
        name: "Algoritmia e Programação",
        description:
          "Aprofundamento dos conceitos de programação e algoritmia através de Java, com desenvolvimento de algoritmos, ciclos e programas progressivamente mais aplicados a problemas do mundo real.",
        technologies: ["Java", "Algoritmia"],
      },
      {
        name: "Design Multimédia",
        description:
          "Desenvolvimento de um website desde a fase de planeamento e desenho visual no Photoshop até à implementação utilizando HTML e CSS. O projeto desenvolvido teve como tema a energia eólica.",
        technologies: ["Adobe Photoshop", "HTML", "CSS"],
      },
      {
        name: "Matemática",
        description:
          "Aprofundamento de conceitos de cálculo, incluindo primitivas, integrais e integrais duplos, desenvolvendo bases matemáticas relevantes para as áreas técnicas do curso.",
      },
      {
        name: "Sistemas Operativos",
        description:
          "Exploração do funcionamento e utilização de sistemas operativos, com especial contacto com Linux e máquinas virtuais.",
        technologies: ["Linux", "Máquinas Virtuais"],
      },
      {
        name: "Modelação 3D",
        description:
          "Introdução à modelação tridimensional através do Blender, aprendendo a criar e manipular objetos e modelos em ambientes 3D.",
        technologies: ["Blender", "Modelação 3D"],
      },
      {
        name: "Fotografia",
        description:
          "Introdução aos fundamentos da fotografia, desde a captura de imagens até ao seu tratamento e edição digital.",
        technologies: ["Fotografia", "Adobe Photoshop"],
      },
    ],
  },

  {
    year: "2.º Ano",
    description:
      "Aprofundamento da programação e desenvolvimento de software, juntamente com conhecimentos de multimédia, bases de dados, desenvolvimento Web, interação, redes e engenharia de software.",
    subjects: [
      {
        name: "Produção Audiovisual",
        description:
          "Desenvolvimento de conhecimentos de produção audiovisual através da criação e preparação de guiões. O trabalho envolveu a planificação de um filme cena a cena, incluindo a definição dos ângulos e enquadramentos das câmaras.",
        technologies: [
          "Guião",
          "Planeamento Audiovisual",
          "Cinematografia",
        ],
      },
      {
        name: "Matemática para Computação Gráfica",
        description:
          "Unidade curricular dividida entre matemática discreta, geometria euclidiana e análise matemática, fornecendo bases matemáticas aplicadas à computação gráfica.",
        technologies: [
          "Matemática Discreta",
          "Geometria Euclidiana",
          "Análise Matemática",
        ],
      },
      {
        name: "Animação 3D",
        description:
          "Desenvolvimento de animações tridimensionais utilizando Autodesk Maya, explorando os conceitos e técnicas fundamentais de animação 3D.",
        technologies: ["Autodesk Maya", "Animação 3D"],
      },
      {
        name: "Programação de Interfaces Gráficas",
        description:
          "Desenvolvimento de aplicações interativas utilizando C#, incluindo a criação de um jogo com sistemas de física, forças e interação entre objetos.",
        technologies: [
          "C#",
          "Física",
          "Interfaces Gráficas",
          "Game Development",
        ],
      },
      {
        name: "Bases de Dados",
        description:
          "Estudo e utilização de diferentes tipos de bases de dados, incluindo bases de dados relacionais SQL, sistemas NoSQL e soluções de armazenamento em memória.",
        technologies: ["SQL", "NoSQL", "Redis"],
      },
      {
        name: "Tecnologias Web",
        description:
          "Aprofundamento do desenvolvimento Web através de HTML e CSS, explorando com maior detalhe a estrutura, apresentação e construção de páginas Web.",
        technologies: ["HTML", "CSS"],
      },
      {
        name: "Interação Homem-Máquina",
        description:
          "Desenvolvimento de uma aplicação utilizando Ionic, aplicando conceitos fundamentais de design de interfaces, interação com o utilizador e utilização de dados dinâmicos.",
        technologies: ["Ionic", "UI/UX", "Dados Dinâmicos"],
      },
      {
        name: "Engenharia de Software",
        description:
          "Aplicação de conceitos de arquitetura de software, nomeadamente o padrão MVC, através do desenvolvimento de uma plataforma de administração para uma barbearia utilizando Laravel.",
        technologies: ["Laravel", "MVC", "Arquitetura de Software"],
      },
      {
        name: "Programação Web",
        description:
          "Desenvolvimento de websites e aprofundamento dos conceitos relacionados com APIs e comunicação entre diferentes componentes de aplicações Web.",
        technologies: ["Web", "APIs", "Desenvolvimento de Websites"],
      },
      {
        name: "Tecnologias de Redes e Sistemas Digitais",
        description:
          "Estudo dos fundamentos das redes de computadores e da Internet, incluindo protocolos de comunicação, cabos e tecnologias utilizadas na transmissão de dados.",
        technologies: ["Redes", "Internet", "Protocolos", "Cablagem"],
      },
      {
        name: "Empreendedorismo",
        description:
          "Introdução aos conceitos de empreendedorismo e aos diferentes aspetos envolvidos na criação e estruturação de uma empresa.",
        technologies: ["Empreendedorismo", "Gestão", "Negócios"],
      },
    ],
  },

 {
  year: "3.º Ano",
  description:
    "Aplicação e integração dos conhecimentos adquiridos através de projetos e de áreas especializadas como realidade aumentada, computação gráfica, desenvolvimento móvel, sistemas multimédia e tecnologias interativas.",
  subjects: [
    {
      name: "Realidade Virtual, Aumentada e Mista",
      description:
        "Desenvolvimento de projetos de realidade aumentada utilizando Unity, incluindo a realização de tutoriais e a criação de uma aplicação de modelação de cozinhas. Os objetos utilizados no projeto foram modelados previamente em Blender.",
      technologies: [
        "Unity",
        "Blender",
        "Realidade Aumentada",
        "Modelação 3D",
      ],
    },
    {
      name: "Projeto",
      description:
        "Desenvolvimento de uma plataforma de sondagens interativas inspirada em ferramentas como o Mentimeter. A plataforma inclui sessões para interação com os utilizadores e funcionalidades de inteligência artificial para criação automática de sondagens.",
      technologies: [
        "Desenvolvimento Web",
        "Sondagens Interativas",
        "Sessões",
        "Inteligência Artificial",
      ],
    },
    {
      name: "Projeto Final",
      description:
        "Desenvolvimento de uma extensão para o Google Chrome que permite ao utilizador controlar o navegador através de gestos, criando uma forma de interação alternativa baseada em movimentos.",
      technologies: [
        "Google Chrome Extension",
        "Reconhecimento de Gestos",
        "Interação Homem-Máquina",
      ],
    },
    {
      name: "Programação Móvel",
      description:
        "Desenvolvimento de aplicações móveis para Android utilizando o Android Studio, explorando o processo de criação e desenvolvimento de aplicações para dispositivos móveis.",
      technologies: [
        "Android Studio",
        "Android",
        "Desenvolvimento Mobile",
      ],
    },
    {
      name: "Computação Gráfica",
      description:
        "Aprofundamento dos conceitos de computação gráfica, com especial foco em vetores, física e dinâmicas tridimensionais, explorando a aplicação destes conceitos na criação de ambientes e comportamentos 3D.",
      technologies: [
        "Vetores",
        "Física",
        "Dinâmica 3D",
        "Computação Gráfica",
      ],
    },
    {
      name: "Sistemas Multimédia",
      description:
        "Desenvolvimento de conteúdos e experiências multimédia através da programação com p5.js, explorando a criação de elementos visuais e interativos utilizando JavaScript.",
      technologies: [
        "p5.js",
        "JavaScript",
        "Multimédia",
        "Programação Criativa",
      ],
    },
    {
      name: "Organização de Eventos Técnico-Científicos",
      description:
        "Participação na organização das Jornadas de Computação Gráfica, contribuindo também para a componente técnica do evento através da realização de um workshop de React Native.",
      technologies: [
        "Organização de Eventos",
        "React Native",
        "Workshop",
        "Computação Gráfica",
      ],
    },
    {
      name: "Sistemas de Informação Geográfica",
      description:
        "Introdução aos sistemas de informação geográfica e às tecnologias utilizadas na gestão e disponibilização de informação geográfica, incluindo contacto com GeoServer e dados provenientes de satélites.",
      technologies: [
        "GeoServer",
        "Sistemas de Informação Geográfica",
        "Dados de Satélite",
      ],
    },
    {
      name: "Tecnologias Interativas",
      description:
        "Desenvolvimento de projetos interativos envolvendo jogos, interação através de gestos e deteção de objetos utilizando técnicas de inteligência artificial.",
      technologies: [
        "Jogos",
        "Reconhecimento de Gestos",
        "Deteção de Objetos",
        "Inteligência Artificial",
      ],
    },
  ],
},

];

const knowledgeAreas: KnowledgeArea[] = [
  {
    number: "01",
    title: "Programação e Desenvolvimento",
    description:
      "Percurso progressivo desde os fundamentos de programação e algoritmia até ao desenvolvimento de aplicações, jogos e software.",
    subjects: [
      "Java",
      "C#",
      "Algoritmia",
      "Programação Orientada a Objetos",
      "Game Development",
    ],
  },
  {
    number: "02",
    title: "Desenvolvimento Web",
    description:
      "Experiência académica na criação de websites e aplicações Web, desde HTML e CSS até APIs e frameworks de desenvolvimento.",
    subjects: [
      "HTML",
      "CSS",
      "APIs",
      "Programação Web",
      "Laravel",
    ],
  },
  {
    number: "03",
    title: "Bases de Dados",
    description:
      "Contacto com diferentes modelos de armazenamento de dados, incluindo sistemas relacionais, NoSQL e bases de dados em memória.",
    subjects: ["SQL", "NoSQL", "Redis", "Bases de Dados"],
  },
  {
    number: "04",
    title: "Computação Gráfica e 3D",
    description:
      "Uma das áreas centrais da formação, combinando matemática, computação gráfica, modelação e animação tridimensional.",
    subjects: [
      "Blender",
      "Maya",
      "Modelação 3D",
      "Animação 3D",
      "Computação Gráfica",
    ],
  },
  {
    number: "05",
    title: "Multimédia e Design",
    description:
      "Formação na criação e edição de conteúdos visuais e multimédia, desde design gráfico e fotografia até produção audiovisual.",
    subjects: [
      "Photoshop",
      "Design Gráfico",
      "Design Multimédia",
      "Fotografia",
      "Produção Audiovisual",
    ],
  },
  {
    number: "06",
    title: "Aplicações Interativas",
    description:
      "Desenvolvimento de aplicações gráficas e interativas, incluindo interfaces, aplicações móveis e experiências baseadas em interação.",
    subjects: [
      "Ionic",
      "C#",
      "Interfaces Gráficas",
      "UI/UX",
      "Interação Homem-Máquina",
    ],
  },
  {
    number: "07",
    title: "Sistemas e Redes",
    description:
      "Conhecimentos sobre arquitetura de computadores, sistemas operativos, Linux, máquinas virtuais, redes e funcionamento da Internet.",
    subjects: [
      "Linux",
      "Máquinas Virtuais",
      "Redes",
      "Protocolos",
      "Internet",
    ],
  },
  {
    number: "08",
    title: "Engenharia de Software",
    description:
      "Aplicação de princípios de arquitetura e organização de software através do desenvolvimento de aplicações estruturadas.",
    subjects: [
      "MVC",
      "Laravel",
      "Arquitetura de Software",
      "APIs",
    ],
  },
  {
    number: "09",
    title: "Matemática",
    description:
      "Formação matemática aplicada à resolução de problemas e às áreas técnicas da computação gráfica.",
    subjects: [
      "Álgebra Linear",
      "Geometria Analítica",
      "Matemática Discreta",
      "Geometria Euclidiana",
      "Análise Matemática",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Competências
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Uma formação entre software, tecnologia e criatividade.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
         Uma formação abrangente que me permitiu desenvolver conhecimentos em programação e 
         desenvolvimento de software, enquanto explorava áreas como computação gráfica, 
         desenvolvimento Web e mobile, multimédia, realidade aumentada, inteligência artificial 
         e tecnologias interativas.

        </p>
      </section>

      {/* COMPETÊNCIAS TÉCNICAS */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            01 — Competências técnicas
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Áreas em que desenvolvi conhecimento.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {technicalSkills.map((skill) => (
              <article
                key={skill.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {skill.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO ACADÉMICA */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            02 — Formação académica
          </p>

          <div className="mt-6 max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engenharia de Computação Gráfica e Multimédia
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Uma formação multidisciplinar que combina engenharia informática
              e desenvolvimento de software com computação gráfica, design,
              multimédia e tecnologias interativas.
            </p>
          </div>

          {/* ANOS */}
          <div className="mt-16 space-y-6">
            {academicYears.map((academicYear) => (
              <details
                key={academicYear.year}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30"
              >
                <summary className="cursor-pointer list-none p-7">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {academicYear.year}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-zinc-500">
                        {academicYear.description}
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <div className="border-t border-zinc-800">
                  <div className="divide-y divide-zinc-800">
                    {academicYear.subjects.map((subject, index) => (
                      <details
                        key={subject.name}
                        className="group/subject"
                      >
                        <summary className="flex cursor-pointer list-none items-center gap-5 px-7 py-5 transition hover:bg-zinc-900/60">
                          <span className="w-8 font-mono text-xs text-zinc-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 font-medium text-zinc-300">
                            {subject.name}
                          </span>

                          {subject.description && (
                            <span className="text-zinc-600 transition group-open/subject:rotate-45">
                              +
                            </span>
                          )}
                        </summary>

                        {subject.description && (
                          <div className="border-t border-zinc-800/70 bg-zinc-950/30 px-7 py-6 pl-20">
                            <p className="max-w-3xl leading-7 text-zinc-400">
                              {subject.description}
                            </p>

                            {subject.technologies &&
                              subject.technologies.length > 0 && (
                                <div className="mt-5 flex flex-wrap gap-2">
                                  {subject.technologies.map(
                                    (technology) => (
                                      <span
                                        key={technology}
                                        className="rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                                      >
                                        {technology}
                                      </span>
                                    ),
                                  )}
                                </div>
                              )}
                          </div>
                        )}
                      </details>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE CONHECIMENTO */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            03 — Áreas de conhecimento
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Onde a formação se transforma em conhecimento.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            As disciplinas do curso atravessam várias áreas. Esta organização
            permite perceber não só o que estudei, mas também os diferentes
            domínios que fizeram parte do meu percurso académico.
          </p>

          <div className="mt-14 space-y-5">
            {knowledgeAreas.map((area) => (
              <article
                key={area.number}
                className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 md:grid-cols-[80px_1fr]"
              >
                <span className="font-mono text-sm text-zinc-600">
                  {area.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold">{area.title}</h3>

                  <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-500"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Próximo passo
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Da formação à experiência profissional.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              Para além da formação académica, desenvolvi competências através
              de projetos e experiências no mundo profissional.
            </p>

            <a
              href="/experience"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Ver experiência
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
