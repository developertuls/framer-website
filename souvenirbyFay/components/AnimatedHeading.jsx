
"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading({ children, direction = "left" }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
