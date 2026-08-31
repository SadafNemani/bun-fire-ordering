// components/motion/PageTransition.tsx
"use client";

import { motion, type Variants } from "framer-motion";

const wipeVariants: Variants = {
  initial: { x: "-100%" },
  animate: {
    x: ["-100%", "0%", "0%", "100%"],
    transition: {
      duration: 0.9,
      times: [0, 0.4, 0.6, 1],
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const contentVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.5, ease: "easeOut" as const },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Curved paint-wipe panels */}
      <motion.div
        variants={wipeVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none fixed inset-0 z-200"
      >
        <svg
          className="h-full w-[140%]"
          viewBox="0 0 1400 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,0 C200,180 30,380 130,550 C220,700 60,850 150,1000 L1300,1000 C1200,750 1400,550 1250,400 C1150,280 1300,150 1200,0 Z"
            fill="#FF5A1F"
          />
        </svg>
      </motion.div>

      <motion.div
        variants={wipeVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.06 }}
        className="pointer-events-none fixed inset-0 z-199"
      >
        <svg
          className="h-full w-[140%]"
          viewBox="0 0 1400 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120,0 C210,200 50,400 140,560 C230,710 70,860 160,1000 L1320,1000 C1230,780 1380,570 1270,410 C1180,290 1320,160 1220,0 Z"
            fill="#FFC857"
          />
        </svg>
      </motion.div>

      <motion.div variants={contentVariants} initial="initial" animate="animate">
        {children}
      </motion.div>
    </div>
  );
}
