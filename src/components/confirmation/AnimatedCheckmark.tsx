"use client";

import { motion } from "framer-motion";

export default function AnimatedCheckmark() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center">
      <motion.span
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.3,
          ease: "easeOut" as const,
        }}
        className="rounded-button bg-success absolute inset-0"
      />

      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.15, 1], opacity: 1 }}
        transition={{
          opacity: { duration: 0.2, delay: 0.6 },
          scale: { duration: 0.6, times: [0, 0.7, 1], delay: 0.7, ease: "easeOut" as const },
        }}
        className="rounded-button bg-success flex h-20 w-20 items-center justify-center"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M10 21 L17 28 L30 13"
            stroke="#FFF8F0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.95, ease: "easeInOut" as const }}
          />
        </svg>
      </motion.span>
    </div>
  );
}
