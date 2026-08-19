"use client";

import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 bg-white/[0.04]"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300"
      />
    </div>
  );
};

export default ScrollProgress;
