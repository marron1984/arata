"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=80&fit=crop"
          alt="炭火で焼き上げる厳選和牛"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mb-8 origin-top"
        />

        {/* Logo character */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-gold text-7xl md:text-9xl font-bold mb-4 tracking-widest"
        >
          新
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-washi/60 text-sm md:text-base tracking-[0.5em] mb-2"
        >
          やきにく あらた
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-washi/40 text-xs tracking-[0.3em] mt-6"
        >
          京橋の隠れ家で、至福のひとときを
        </motion.p>

        {/* Decorative line bottom */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          className="w-px h-16 bg-gradient-to-b from-gold/50 via-gold/20 to-transparent mt-8 origin-top"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-washi/30 text-[10px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
