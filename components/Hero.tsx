import { Particles } from "./ui/particles";

const Hero = () => {
  return (
    <article className="relative isolate min-h-screen overflow-hidden bg-[#080808]">
      <Particles className="absolute inset-0 z-0" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_45%,rgba(8,8,8,0.25),rgba(8,8,8,0.88)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.65)]" />
            Available for freelance work
          </div>

          <h1 className="text-balance roboto text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-zinc-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            I build fast and reliable{" "}
            <span className="text-zinc-500">web products.</span>
          </h1>

          <p className="mt-7 sans max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl">
            Full-stack developer creating responsive SaaS applications with
            Next.js, TypeScript and PostgreSQL — from idea to production.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex roboto h-12 items-center justify-center rounded-xl bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              View case studies
            </a>

            <a
              href="#contact"
              className="inline-flex roboto h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-zinc-100 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              Tell me about your project
            </a>
          </div>

          <div className="mt-12 sans flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-600">
            <span>Next.js</span>
            <span className="text-zinc-800">•</span>
            <span>TypeScript</span>
            <span className="text-zinc-800">•</span>
            <span>React</span>
            <span className="text-zinc-800">•</span>
            <span>PostgreSQL</span>
            <span className="text-zinc-800">•</span>
            <span>Prisma</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
