"use client";

import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "極みコース",
    items: [
      {
        name: "新 おまかせコース",
        description:
          "料理長が厳選した本日の最高部位を、最適な順序でお届けする当店の看板コース",
        price: "¥12,000",
      },
      {
        name: "特選 黒毛和牛コース",
        description:
          "A5ランク黒毛和牛の希少部位を中心に、前菜からデザートまで堪能いただく特別コース",
        price: "¥15,000",
      },
      {
        name: "接待・記念日コース",
        description:
          "特別な日にふさわしい至高の品々をご用意いたします",
        price: "¥20,000",
      },
    ],
  },
  {
    title: "希少部位",
    items: [
      {
        name: "極ハラミ",
        description: "A5ランク和牛の中でも特に脂の乗りが良い、当店自慢の逸品",
      },
      {
        name: "シャトーブリアン",
        description: "ヒレの中心部のみを使用した、最も柔らかく上品な味わい",
      },
      {
        name: "焼きしゃぶロース",
        description: "薄切りロースを軽く炙り、黄身しょうゆでお召し上がりください",
      },
      {
        name: "ザブトン",
        description: "肩ロースの芯、きめ細かなサシが美しい希少な部位",
      },
    ],
  },
  {
    title: "逸品",
    items: [
      {
        name: "極ハラミ刺",
        description: "新鮮なハラミをポン酢と柚子胡椒で味わう、当店の名物",
      },
      {
        name: "和牛ユッケ",
        description: "厳選された赤身を特製ダレと卵黄で",
      },
      {
        name: "炙りにぎり",
        description: "口の中でとろける和牛の握り寿司",
      },
      {
        name: "ホルモンミックス",
        description: "丁寧に下処理した新鮮なホルモンの盛り合わせ",
      },
    ],
  },
];

export default function MenuGrid() {
  return (
    <section
      id="menu"
      className="relative py-32 md:py-40 bg-walnut-dark/30"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="text-gold/50 text-xs tracking-[0.5em] uppercase">
            Menu
          </span>
          <h2 className="text-gold text-3xl md:text-4xl font-semibold mt-4 tracking-[0.2em]">
            お品書き
          </h2>
          <div className="gold-divider mx-auto mt-6" />
          <p className="text-washi/40 text-sm mt-6 tracking-wider">
            素材の力を最大限に引き出す、妥協なき品々
          </p>
        </motion.div>

        {/* Menu categories */}
        <div className="space-y-20">
          {menuData.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                delay: 0.2 * catIndex,
                ease: "easeOut",
              }}
            >
              {/* Category title */}
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                <h3 className="text-gold/80 text-lg tracking-[0.3em] font-medium">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-washi text-base tracking-wider group-hover:text-gold transition-colors duration-500">
                        {item.name}
                      </h4>
                      {item.price && (
                        <span className="text-gold/60 text-sm tracking-wider whitespace-nowrap">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-washi/40 text-xs mt-2 leading-relaxed tracking-wider">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-washi/30 text-xs mt-20 tracking-wider"
        >
          ※ 仕入れ状況により内容が変更となる場合がございます
          <br />※ 表示価格は税込です
        </motion.p>
      </div>
    </section>
  );
}
