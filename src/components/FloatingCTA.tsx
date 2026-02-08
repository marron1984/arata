"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <a
        href="https://tabelog.com/osaka/A2701/A270107/27151551/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-ink border border-gold/50 shadow-2xl shadow-ink/50 hover:bg-walnut-dark hover:border-gold/80 transition-all duration-500"
      >
        {/* Lacquer-ware feel: dark bg with gold text */}
        <span className="text-gold text-sm md:text-base tracking-[0.2em] font-medium">
          予約する
        </span>
        <span className="text-gold/50 text-[10px] tracking-wider">
          Tabelog
        </span>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </a>
    </motion.div>
  );
}
