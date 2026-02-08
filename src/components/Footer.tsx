"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-20 bg-ink border-t border-walnut/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          {/* Logo */}
          <span className="text-gold text-4xl font-bold tracking-widest">
            新
          </span>
          <p className="text-washi/40 text-xs tracking-[0.4em] mt-3">
            やきにく あらた
          </p>

          <div className="gold-divider mx-auto my-8" />

          {/* Info */}
          <div className="space-y-2 text-washi/30 text-xs tracking-wider">
            <p>大阪府大阪市都島区東野田町1-20-16</p>
            <p>TEL: 06-6809-7829</p>
            <p>営業時間: 17:00〜23:00（L.O 22:30）</p>
            <p>定休日: 水曜日</p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <a
              href="https://tabelog.com/osaka/A2701/A270107/27151551/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-washi/30 text-xs tracking-wider hover:text-gold transition-colors duration-500"
            >
              食べログ
            </a>
            <span className="text-washi/10">|</span>
            <a
              href="https://www.hotpepper.jp/strJ003941692/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-washi/30 text-xs tracking-wider hover:text-gold transition-colors duration-500"
            >
              ホットペッパー
            </a>
            <span className="text-washi/10">|</span>
            <a
              href="https://r.gnavi.co.jp/k7u2t7410000/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-washi/30 text-xs tracking-wider hover:text-gold transition-colors duration-500"
            >
              ぐるなび
            </a>
          </div>

          {/* Copyright */}
          <p className="text-washi/15 text-[10px] tracking-wider mt-12">
            &copy; {new Date().getFullYear()} やきにく 新. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
