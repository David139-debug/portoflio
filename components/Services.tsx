import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "MVP & SaaS Development",
    description:
      "I turn product ideas into focused, production-ready applications that can be tested with real users and extended as the business grows.",
    deliverables: [
      "Product architecture",
      "Authentication",
      "Payments",
      "Admin dashboard",
    ],
    accent: "group-hover:border-blue-400/60",
    glow: "group-hover:bg-blue-400/[0.07]",
    numberColor: "group-hover:text-blue-300",
  },
  {
    number: "02",
    title: "Full-stack Web Applications",
    description:
      "End-to-end development of responsive web applications, from polished interfaces and backend logic to databases and third-party integrations.",
    deliverables: [
      "Next.js frontend",
      "API development",
      "PostgreSQL",
      "External integrations",
    ],
    accent: "group-hover:border-violet-400/60",
    glow: "group-hover:bg-violet-400/[0.07]",
    numberColor: "group-hover:text-violet-300",
  },
  {
    number: "03",
    title: "Product Improvements",
    description:
      "I help improve existing applications through new functionality, performance optimization, architecture cleanup and interface refinement.",
    deliverables: [
      "New features",
      "Performance",
      "Refactoring",
      "UI improvements",
    ],
    accent: "group-hover:border-cyan-400/60",
    glow: "group-hover:bg-cyan-400/[0.07]",
    numberColor: "group-hover:text-cyan-300",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#09090a] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(59,130,246,0.05),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-16">
        <div className="lg:sticky lg:top-32 lg:self-start flex flex-col justify-center">
          <h2 className="max-w-lg sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
            From idea to a{" "}
            <span className="text-zinc-500">reliable product.</span>
          </h2>

          <p className="mt-7 roboto max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
            I work with startups and businesses that need more than code — a
            dependable technical partner who understands the product behind it.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden border-b border-white/10 py-10 sm:py-12"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-transparent transition-colors duration-500 ${service.glow}`}
              />

              <div
                className={`absolute inset-y-0 left-0 w-px border-l border-transparent transition-colors duration-500 ${service.accent}`}
              />

              <div className="relative grid gap-6 transition-transform duration-500 ease-out group-hover:translate-x-2 sm:grid-cols-[70px_1fr] sm:gap-8">
                {/* Broj */}
                <span
                  className={`font-mono text-xs text-zinc-700 transition-colors duration-300 ${service.numberColor}`}
                ></span>

                <div>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="max-w-lg sans text-2xl font-semibold tracking-[-0.035em] text-zinc-200 transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {service.title}
                    </h3>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-600 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:text-zinc-200">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl roboto text-base leading-7 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border roboto border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-600 transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-500"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
