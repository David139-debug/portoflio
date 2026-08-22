"use client";

import { ArrowUpRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import hyperMax from "@/public/hypermax-dashboard.png";
import barber from "@/public/barber.png";
import { motion } from "motion/react";

type Project = {
  number: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  href: string;
  accent: string;
  image: StaticImageData;
  imageAlt?: string;
};

const projects: Project[] = [
  {
    number: "1",
    title: "HyperMax Trading Platform",
    description:
      "A multi-account cryptocurrency trading platform for monitoring markets, managing risk and executing advanced orders from a single interface.",
    result:
      "Centralized trading controls, real-time market visibility and streamlined multi-account management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Electron"],
    href: "https://hype-liquid-sniper.vercel.app/",
    image: hyperMax,
    imageAlt:
      "HyperMax cryptocurrency trading dashboard with market chart and order controls",
    accent: "from-blue-500/25 via-indigo-500/10 to-transparent",
  },
  {
    number: "2",
    title: "Barbershop Website",
    description:
      "A modern and responsive barbershop website designed to present services, showcase the brand and make it easy for customers to find key information and book an appointment.",
    result: "One centralized workflow for projects, tasks and communication.",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion"],
    href: "https://barberportfolio-eta.vercel.app/",
    image: barber,
    imageAlt: "Barber shop portfolio picture",
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
  },
];

const titleReveal = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0c0c0d] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={titleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl">
              Products built around{" "}
              <span className="text-zinc-500">real problems.</span>
            </h2>
          </div>
        </motion.div>

        <div className="relative mt-14 h-px bg-white/[0.09]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 origin-left bg-gradient-to-r from-white/10 via-blue-400/90 to-white/10"
          />

          <motion.div
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: "1200%",
              opacity: [0, 1, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-blue-300/80 to-transparent"
          />
        </div>

        <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-12">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111113] shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_28px_90px_rgba(0,0,0,0.4)]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className={`relative flex min-h-[340px] items-center overflow-hidden bg-gradient-to-br ${project.accent} p-6 sm:min-h-[430px] sm:p-10`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/0 blur-3xl transition-colors duration-700 group-hover:bg-blue-400/[0.08]" />

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 1.3,
                      },
                    }}
                    viewport={{ once: true }}
                    className="relative aspect-[19/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] shadow-2xl shadow-black/40 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.025] group-hover:border-blue-400/20 group-hover:shadow-[0_24px_70px_rgba(59,130,246,0.1)]"
                  >
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
                  </motion.div>
                </div>

                <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-6">
                    <a
                      href={project.href}
                      aria-label={`View ${project.title} case study`}
                      target="_blank"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/[0.06] group-hover:text-blue-300 hover:!border-blue-400/50 hover:!bg-blue-400/10 hover:!text-blue-200"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <motion.h3
                    initial={{ x: 10, opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="mt-12 font-sans text-3xl font-semibold tracking-[-0.035em] text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-4xl"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 2,
                      },
                    }}
                    viewport={{ once: true }}
                    className="mt-5 font-sans text-base leading-7 text-zinc-400 sm:text-lg"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 2.2,
                      },
                    }}
                    viewport={{ once: true }}
                    className="mt-8 border-l border-blue-400/40 pl-4 transition-colors duration-500 group-hover:border-blue-400/80"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600 transition-colors duration-300 group-hover:text-blue-400/70">
                      Outcome
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      {project.result}
                    </p>
                  </motion.div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: {
                            delay: 2.8,
                          },
                        }}
                        viewport={{ once: true }}
                        className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="relative mt-14 h-px bg-white/[0.09]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 origin-left bg-gradient-to-r from-white/10 via-blue-400/90 to-white/10"
          />

          <motion.div
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: "1200%",
              opacity: [0, 1, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-blue-300/80 to-transparent"
          />
        </div>
        <div className="mt-16 flex items-center justify-center flex-col gap-6 pt-10 sm:flex-row sm:items-center">
          <motion.a
            href="mailto:david.contact55@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 1,
              },
            }}
            viewport={{ once: true }}
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.1)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
