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
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
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
          alt="人気No.1 上塩タン"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay - slightly less dark to show more food */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/50" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center px-6"
      >
        {/* Area label with red accent line */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          className="flex items-center gap-4"
          style={{ animation: "heroFadeIn 1.5s ease-out 0.2s both" }}
        >
          <div className="w-8 h-[2px] bg-aka" />
          <p className="text-washi text-sm md:text-base tracking-[0.5em] font-medium">
            大阪京橋
          </p>
          <div className="w-8 h-[2px] bg-aka" />
        </motion.div>

        {/* Main catchcopy - bold & high contrast */}
        <motion.h2
          variants={slideUp}
          custom={0.5}
          className="text-washi text-2xl md:text-4xl lg:text-5xl tracking-[0.1em] mt-6 font-bold text-center leading-snug"
          style={{ animation: "heroFadeIn 1.5s ease-out 0.5s both" }}
        >
          タンが美味いと噂の
          <br />
          <span className="text-aka-light text-3xl md:text-5xl lg:text-6xl">大衆焼肉店</span>
        </motion.h2>

        {/* Decorative red line */}
        <motion.div
          variants={lineGrow}
          custom={0.8}
          className="w-20 h-[2px] bg-aka my-6 origin-center"
          style={{ animation: "lineGrow 1.5s ease-out 0.8s both" }}
        />

        {/* Logo character - gold on dark */}
        <motion.h1
          variants={scaleIn}
          className="text-gold text-7xl md:text-9xl font-bold mb-1 tracking-widest drop-shadow-[0_0_30px_rgba(166,137,102,0.3)]"
          style={{ animation: "heroScaleIn 1.2s ease-out 1s both" }}
        >
          新
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          custom={1.3}
          className="text-washi/60 text-xs md:text-sm tracking-[0.5em] mb-6"
          style={{ animation: "heroFadeIn 1.5s ease-out 1.3s both" }}
        >
          やきにく あらた
        </motion.p>

        {/* Tagline - big & bold with red quote marks */}
        <motion.p
          variants={slideUp}
          custom={1.6}
          className="text-washi text-3xl md:text-5xl lg:text-6xl tracking-[0.05em] mt-2 font-black"
          style={{ animation: "heroFadeIn 1.5s ease-out 1.6s both" }}
        >
          <span className="text-aka">&ldquo;</span>
          肉でお腹いっぱいに
          <span className="text-aka">&rdquo;</span>
        </motion.p>

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
            className="w-px h-8 bg-gradient-to-b from-aka/60 to-transparent"
            style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
