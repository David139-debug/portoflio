"use client";

import { motion, useReducedMotion } from "motion/react";
import { Particles } from "./ui/particles";

const Hero = () => {
  const reveal = {
    hidden: {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
    },
  };

  const buttonContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.82,
      },
    },
  };

  const buttonItem = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <article className="relative isolate min-h-screen overflow-hidden bg-[#080808]">
      <Particles className="absolute inset-0 z-0" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_30%_45%,rgba(8,8,8,0.25),rgba(8,8,8,0.88)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{
                  scale: [1, 2.2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full bg-emerald-400"
              />

              <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.65)]" />
            </span>
            Available for freelance work
          </motion.div>

          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-zinc-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  ease: [1, 1, 0.36, 1],
                }}
                className="block"
              >
                I build fast and
              </motion.span>
            </span>

            <span className="block overflow-hidden">
              <motion.span
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 3,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                reliable <span className="text-zinc-500">web products.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 sans max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Full-stack developer creating responsive SaaS applications with
            Next.js, TypeScript and PostgreSQL — from idea to production.
          </motion.p>

          <motion.div
            variants={buttonContainer}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              variants={buttonItem}
              whileHover={{
                y: -2,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#projects"
              className="inline-flex roboto h-12 items-center justify-center rounded-xl bg-zinc-100 px-6 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-white"
            >
              View my work
            </motion.a>

            <motion.a
              variants={buttonItem}
              whileHover={{
                y: -2,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="mailto:tvojmail@gmail.com"
              className="inline-flex roboto h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08]"
            >
              Tell me about your project
            </motion.a>
          </motion.div>

          <div className="mt-12 sans flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-600">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
            >
              Next.js
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-400"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="cursor-default font-bold sans rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
            >
              TypeScript
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-400"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="cursor-default font-bold sans rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
            >
              React
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-400"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="cursor-default font-bold sans rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
            >
              PostgreSQL
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-400"
            >
              •
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="cursor-default font-bold sans rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/[0.07] hover:text-blue-200"
            >
              Prisma
            </motion.span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
