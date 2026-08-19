import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Product-minded",
    description:
      "I look beyond individual tickets and consider how each technical decision affects the product and its users.",
  },
  {
    number: "02",
    title: "Clear communication",
    description:
      "I communicate progress, tradeoffs and potential problems early, without unnecessary technical complexity.",
  },
  {
    number: "03",
    title: "Built to last",
    description:
      "I focus on readable code, maintainable architecture and solutions that can grow with the product.",
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Electron",
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090a] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="border-b border-white/10 pb-14">
          <h2 className="max-w-4xl font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
            A developer focused on{" "}
            <span className="text-zinc-500">the product behind the code.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111113]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[90px] transition-all duration-700 group-hover:scale-125 group-hover:bg-blue-500/[0.1]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-sans text-[10rem] font-semibold tracking-[-0.08em] text-white/[0.06] transition-all duration-700 group-hover:scale-105 group-hover:text-white/[0.09] sm:text-[13rem]">
                  D
                </span>
              </div>

              {/* Donji podaci */}
              <div className="absolute inset-x-6 bottom-6">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <p className="text-lg font-medium tracking-[-0.02em] text-zinc-100">
                    David
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full-stack developer
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <span className="text-xs text-zinc-400">
                      SaaS & web applications
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-700">
              Full-stack · Product development
            </p>
          </div>

          <div>
            <div className="max-w-3xl">
              <p className="text-xl sans leading-8 tracking-[-0.02em] text-zinc-300 sm:text-2xl sm:leading-9">
                I build reliable full-stack applications for startups and
                businesses that need software to solve real operational
                problems.
              </p>

              <div className="mt-8 roboto space-y-6 text-base leading-7 text-zinc-500 sm:text-lg">
                <p>
                  My work covers the full product stack — from responsive
                  interfaces and application logic to databases, integrations
                  and deployment.
                </p>

                <p>
                  I enjoy turning complex requirements into focused,
                  maintainable products. I also help clients evaluate technical
                  decisions, identify potential risks and choose practical
                  solutions for their goals.
                </p>
              </div>
            </div>

            {/* Principi rada */}
            <div className="mt-14 border-t border-white/10">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="group flex roboto gap-4 border-b border-white/10 py-8 transition-all duration-300 hover:pl-2 sm:grid-cols-[60px_1fr] sm:gap-6"
                >
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-zinc-200 transition-colors duration-300 group-hover:text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Tehnologije */}
            <div className="mt-12">
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-blue-400/[0.06] hover:text-blue-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 roboto flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.1)]"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center px-5 text-sm font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
              >
                View selected work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
