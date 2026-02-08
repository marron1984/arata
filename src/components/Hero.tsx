"use client";

import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 1.5, delay, ease: "easeOut" as const },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, delay: 0.5, ease: "easeOut" as const },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay, ease: "easeOut" as const },
  }),
};

const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: (delay: number) => ({
    scaleY: 1,
    transition: { duration: 1.5, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="厳選された黒毛和牛"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Decorative line */}
        <motion.div
          variants={lineGrow}
          custom={0}
          className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mb-8 origin-top"
          style={{ animation: "lineGrow 1.5s ease-out forwards" }}
        />

        {/* Logo character */}
        <motion.h1
          variants={scaleIn}
          className="text-gold text-7xl md:text-9xl font-bold mb-4 tracking-widest"
          style={{ animation: "heroScaleIn 1.2s ease-out 0.5s both" }}
        >
          新
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          custom={1}
          className="text-washi/60 text-sm md:text-base tracking-[0.5em] mb-2"
          style={{ animation: "heroFadeIn 1.5s ease-out 1s both" }}
        >
          やきにく あらた
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={slideUp}
          custom={1.5}
          className="text-washi/40 text-xs tracking-[0.3em] mt-6"
          style={{ animation: "heroFadeIn 1.5s ease-out 1.5s both" }}
        >
          京橋の隠れ家で、至福のひとときを
        </motion.p>

        {/* Decorative line bottom */}
        <motion.div
          variants={lineGrow}
          custom={1.8}
          className="w-px h-16 bg-gradient-to-b from-gold/50 via-gold/20 to-transparent mt-8 origin-top"
          style={{ animation: "lineGrow 1.5s ease-out 1.8s both" }}
        />

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn}
          custom={2.5}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ animation: "heroFadeIn 1s ease-out 2.5s both" }}
        >
          <span className="text-washi/30 text-[10px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
