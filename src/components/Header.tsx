"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "想い", href: "#concept" },
  { label: "お品書き", href: "#menu" },
  { label: "空間", href: "#space" },
  { label: "ご案内", href: "#access" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-walnut/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <span className="text-gold text-2xl md:text-3xl font-bold tracking-widest">
                新
              </span>
              <span className="hidden md:block text-washi/70 text-xs tracking-[0.3em]">
                やきにく あらた
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-washi/70 text-sm tracking-[0.2em] hover:text-gold transition-colors duration-500"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://tabelog.com/osaka/A2701/A270107/27151551/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2 bg-gold/10 border border-gold/30 text-gold text-sm tracking-[0.15em] hover:bg-gold/20 transition-all duration-500"
              >
                ご予約
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="メニュー"
            >
              <span
                className={`block w-6 h-px bg-washi transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-washi transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-washi transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-washi text-2xl tracking-[0.3em] hover:text-gold transition-colors duration-500"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://tabelog.com/osaka/A2701/A270107/27151551/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 px-10 py-3 bg-gold/10 border border-gold/30 text-gold text-lg tracking-[0.2em] hover:bg-gold/20 transition-all duration-500"
              >
                ご予約
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
