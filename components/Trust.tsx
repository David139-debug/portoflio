import { ArrowUpRight, Quote } from "lucide-react";

const Trust = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0c0c0d] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-8 border-b border-white/10 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="max-w-xl sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
              Trusted to deliver{" "}
              <span className="text-zinc-500">with precision.</span>
            </h2>
          </div>
        </div>

        <article className="group relative mt-16 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_32px_100px_rgba(0,0,0,0.4)] lg:mt-20">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/0 blur-[100px] transition-colors duration-700 group-hover:bg-blue-400/[0.07]" />

          <div className="relative grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-500 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/[0.07] group-hover:text-blue-300">
                <Quote className="h-5 w-5" />
              </div>

              <blockquote className="mt-10 max-w-4xl roboto text-2xl leading-[1.4] tracking-[-0.03em] text-zinc-200 transition-colors duration-300 group-hover:text-zinc-100 sm:text-3xl lg:text-[2.5rem]">
                The project was completed with the exact look of the design.
                David was helpful, and his advice was valuable in guiding the
                project to a high-quality result.
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex roboto h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/10 text-xs font-medium text-blue-200">
                  C
                </div>

                <div>
                  <p className="text-sm roboto font-medium text-zinc-200">
                    Nabil
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <h3 className="mt-4 sans text-2xl font-semibold tracking-[-0.035em] text-zinc-200">
                  Figma to Electron
                </h3>

                <p className="mt-4 roboto text-sm leading-6 text-zinc-500">
                  A desktop application implemented from an existing Figma
                  design with close attention to visual accuracy and product
                  quality.
                </p>
              </div>

              <dl className="mt-12 space-y-6 border-t border-white/[0.08] pt-8 roboto">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                    Deliverable
                  </dt>

                  <dd className="mt-2 text-sm text-zinc-300">
                    Electron desktop application
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                    Focus
                  </dt>

                  <dd className="mt-2 text-sm text-zinc-300">
                    Accurate design implementation
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                    Additional value
                  </dt>

                  <dd className="mt-2 text-sm text-zinc-300">
                    Technical advice and guidance
                  </dd>
                </div>
              </dl>

              <a
                href="#contact"
                className="mt-12 roboto inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                Work with me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Trust;
