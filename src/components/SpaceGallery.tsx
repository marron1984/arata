"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const spaces = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop",
    alt: "カウンター席",
    title: "カウンター",
    description: "目の前で焼き上がる臨場感をお楽しみください",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&fit=crop",
    alt: "個室",
    title: "完全個室",
    description: "接待・記念日に最適な、完全個室をご用意",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80&fit=crop",
    alt: "テーブル席",
    title: "テーブル席",
    description: "ウォールナットの温もりに包まれた、落ち着いた空間",
  },
];

export default function SpaceGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="space" ref={ref} className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-gold/50 text-xs tracking-[0.5em] uppercase">
            Space
          </span>
          <h2 className="text-gold text-3xl md:text-4xl font-semibold mt-4 tracking-[0.2em]">
            空間
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="text-washi/40 text-sm mt-6 tracking-wider">
            ウォールナットと柔らかな灯りが織りなす、隠れ家のような空間
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {spaces.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                {/* Border accent */}
                <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/20 transition-all duration-700" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-gold text-lg tracking-[0.2em] font-medium mb-2">
                    {space.title}
                  </h3>
                  <p className="text-washi/50 text-xs tracking-wider leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { label: "席数", value: "全20席" },
            { label: "個室", value: "完全個室あり（最大6名様）" },
            { label: "雰囲気", value: "落ち着いた大人の隠れ家" },
          ].map((info) => (
            <div key={info.label}>
              <span className="text-gold/50 text-xs tracking-[0.3em]">
                {info.label}
              </span>
              <p className="text-washi/60 text-sm mt-2 tracking-wider">
                {info.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
