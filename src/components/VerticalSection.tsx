"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VerticalSection() {
  return (
    <section
      id="concept"
      className="relative py-32 md:py-40 overflow-hidden grain-overlay"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-walnut-dark/20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Vertical text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-center md:items-start gap-12"
          >
            {/* Vertical Japanese text */}
            <div className="vertical-rl h-[400px] md:h-[500px] text-washi/90 text-lg md:text-xl leading-loose tracking-widest">
              <p className="mb-8">
                一頭一頭、目利きが選んだ
                <br />
                黒毛和牛の真髄を
              </p>
              <p>
                ウォールナットの
                <br />
                温もりに包まれた空間で
                <br />
                大切な方と
                <br />
                特別なひとときを
              </p>
            </div>

            {/* Decorative element */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
              <span className="text-gold/60 text-xs tracking-[0.3em] writing-mode-vertical">
                想い
              </span>
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Image + description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80&fit=crop"
                alt="厳選された和牛"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

              {/* Overlay border accent */}
              <div className="absolute inset-4 border border-gold/10" />
            </div>

            {/* Text below image */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="gold-divider mb-6" />
              <p className="text-washi/60 text-sm leading-relaxed tracking-wider">
                全国の牧場から厳選した黒毛和牛を、
                最も美味しい状態でご提供いたします。
                肉の個性を見極め、部位ごとに最適な厚さ、
                温度でお召し上がりいただけるよう、
                一切の妥協なく仕立てます。
              </p>
              <p className="text-washi/40 text-xs mt-4 tracking-wider">
                素材の力を信じ、余計なものは加えない。
                それが「新」の流儀です。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
