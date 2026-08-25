"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Quote } from "lucide-react";

const Trust = () => {
  const topicContainer = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.7,
      },
    },
  };

  const topicLine = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 0.7,
      transition: {
        duration: 3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0c0c0d] py-24 text-zinc-100 sm:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-8 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <motion.h2
              variants={topicContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="max-w-xl font-sans text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-zinc-100 sm:text-5xl lg:text-6xl"
            >
              <span className="block overflow-hidden">
                <motion.span variants={topicLine} className="block">
                  Trusted to deliver
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  variants={topicLine}
                  className="block text-zinc-500"
                >
                  with precision.
                </motion.span>
              </span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="relative h-px bg-white/[0.09]"
        >
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
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="group relative mt-16 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_32px_100px_rgba(0,0,0,0.4)] lg:mt-20"
        >
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/0 blur-[100px] transition-colors duration-700 group-hover:bg-blue-400/[0.07]" />

          <div className="relative grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 2 } }}
                viewport={{ once: true }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-zinc-500 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/[0.07] group-hover:text-blue-300"
              >
                <Quote className="h-5 w-5" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 2.4 } }}
                viewport={{ once: true }}
                className="mt-10 max-w-4xl roboto text-2xl leading-[1.4] tracking-[-0.03em] text-zinc-200 transition-colors duration-300 group-hover:text-zinc-100 sm:text-3xl lg:text-[2.5rem]"
              >
                The project was completed with the exact look of the design.
                David was helpful, and his advice was valuable in guiding the
                project to a high-quality result.
              </motion.p>

              <div className="mt-10 flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 2.7 },
                  }}
                  viewport={{ once: true }}
                  className="flex roboto h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/10 text-xs font-medium text-blue-200"
                >
                  C
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 2.7 },
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm roboto font-medium text-zinc-200">
                    Nabil
                  </p>
                  <span className="text-zinc-500 roboto">Upwork Client</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
                filter: "blur(6px)",
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                filter: "blur(0px)",
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 2.5,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                willChange: "clip-path, filter, opacity, transform",
              }}
              className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"
            >
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
                href="mailto:david.contact55@gmail.com"
                className="mt-12 roboto inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                Work with me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Trust;
