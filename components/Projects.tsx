import { ArrowUpRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import img from "@/public/hypermax-dashboard.png";

type Project = {
  number: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  href: string;
  accent: string;
  image?: StaticImageData;
  imageAlt?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "HyperMax Trading Platform",
    description:
      "A multi-account cryptocurrency trading platform for monitoring markets, managing risk and executing advanced orders from a single interface.",
    result:
      "Centralized trading controls, real-time market visibility and streamlined multi-account management.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "#",
    image: img,
    imageAlt:
      "HyperMax cryptocurrency trading dashboard with market chart and order controls",
    accent: "from-blue-500/25 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Project Management Platform",
    description:
      "A collaborative workspace for planning projects, assigning tasks and tracking progress across distributed teams.",
    result: "One centralized workflow for projects, tasks and communication.",
    tags: ["React", "Next.js", "Prisma", "PostgreSQL"],
    href: "#",
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Subscription Management App",
    description:
      "A complete subscription platform with authentication, billing, role-based access and an administrative dashboard.",
    result:
      "A production-ready foundation for launching a subscription product.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "#",
    accent: "from-cyan-500/25 via-blue-500/10 to-transparent",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0c0c0d] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Zaglavlje sekcije */}
        <div className="grid gap-8 border-b border-white/10 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
              Products built around{" "}
              <span className="text-zinc-500">real problems.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400 sm:text-lg md:justify-self-end">
            A selection of full-stack applications focused on usability,
            maintainable architecture and measurable business value.
          </p>
        </div>

        {/* Projekti */}
        <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-12">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className={`relative flex min-h-[340px] items-center overflow-hidden bg-gradient-to-br ${project.accent} p-6 sm:min-h-[430px] sm:p-10`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-3xl transition-colors duration-700 group-hover:bg-blue-400/[0.08]" />

                  <div className="relative aspect-[19/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] shadow-2xl shadow-black/40 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.025] group-hover:border-blue-400/20 group-hover:shadow-[0_24px_70px_rgba(59,130,246,0.1)]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-700">
                          Project preview coming soon
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs text-zinc-600">
                      / {project.number}
                    </span>

                    <a
                      href={project.href}
                      aria-label={`View ${project.title} case study`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/[0.06] group-hover:text-blue-300 hover:!border-blue-400/50 hover:!bg-blue-400/10 hover:!text-blue-200"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <h3 className="mt-12 font-sans text-3xl font-semibold tracking-[-0.035em] text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 font-sans text-base leading-7 text-zinc-400 sm:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 border-l border-blue-400/40 pl-4 transition-colors duration-500 group-hover:border-blue-400/80">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 group-hover:text-blue-400/70">
                      Outcome
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {project.result}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-base leading-7 text-zinc-400">
            Have a similar product in mind? Let&apos;s discuss what you need and
            find the right way to build it.
          </p>

          <a
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.1)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
