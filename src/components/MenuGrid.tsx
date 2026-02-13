"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuPhotos = [
  { src: "/menu-tan.jpg", alt: "人気No.1 上塩タン", label: "人気No.1 上塩タン" },
  { src: "/menu-meat.jpg", alt: "厳選された焼肉", label: "" },
  { src: "/menu-set.jpg", alt: "満肉盛り合わせ", label: "" },
];

interface MenuItem {
  name: string;
  description: string;
  price?: string;
  badge?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "名物",
    items: [
      {
        name: "満肉盛り合わせ 2人前〜",
        description:
          "迷ったらコレ！！肉のオールスター（タン・ハラミ以外）",
        price: "¥3,580",
        badge: "おすすめ",
      },
      {
        name: "和牛しゃぶロース",
        description:
          "一枚を一口で頬張って食べることでお肉のうまみを存分に味わえます。ご飯必須！！！",
        price: "¥1,078",
        badge: "おすすめ",
      },
      {
        name: "ハラミユッケ",
        description:
          "全国から選び抜かれた美味い品物だけを使用。昔ながらの甘いタレとの相性は抜群",
        price: "¥1,408",
        badge: "おすすめ",
      },
      {
        name: "ニンニク薬味爆弾",
        description:
          "次の日のことなんて気にせず思い切って頬張って欲しい。背徳感薬味",
        price: "¥418",
      },
    ],
  },
  {
    title: "肉",
    items: [
      {
        name: "特上タン",
        description: "数量限定",
        price: "¥2,508",
        badge: "限定",
      },
      {
        name: "上塩タン",
        description: "当店人気No.1！まずはコレを食べて欲しい",
        price: "¥1,518",
        badge: "人気No.1",
      },
      {
        name: "特選ハラミ",
        description: "数量限定",
        price: "¥2,508",
        badge: "限定",
      },
      {
        name: "上ハラミ",
        description: "",
        price: "¥1,408",
      },
      {
        name: "ヘレ",
        description: "",
        price: "¥1,980",
      },
      {
        name: "上ロース",
        description: "",
        price: "¥1,980",
      },
      {
        name: "ロース",
        description: "",
        price: "¥1,518",
      },
      {
        name: "ネギカルビ",
        description: "味噌だれとネギの相性は抜群",
        price: "¥1,408",
        badge: "おすすめ",
      },
      {
        name: "上赤身",
        description: "",
        price: "¥1,298",
      },
      {
        name: "塩コウネ",
        description: "薄切りコウネとレモンの相性◯",
        price: "¥1,298",
        badge: "おすすめ",
      },
      {
        name: "黒タンツラ",
        description: "",
        price: "¥968",
      },
    ],
  },
  {
    title: "ホルモン",
    items: [
      {
        name: "味噌ホルモン盛り《うま辛》",
        description: "10食限定",
        price: "¥1,738",
        badge: "おすすめ",
      },
      {
        name: "ミノ",
        description: "",
        price: "¥968",
      },
      {
        name: "シマチョウ",
        description: "",
        price: "¥858",
      },
      {
        name: "アカセン",
        description: "",
        price: "¥858",
      },
      {
        name: "ウルテ",
        description: "",
        price: "¥638",
      },
      {
        name: "ハツ",
        description: "",
        price: "¥638",
      },
      {
        name: "コリコリ",
        description: "",
        price: "¥638",
      },
      {
        name: "旨い 鶏モモ",
        description: "",
        price: "¥748",
      },
      {
        name: "ウィンナー",
        description: "",
        price: "¥528",
      },
    ],
  },
  {
    title: "一品",
    items: [
      {
        name: "生センマイ",
        description: "鮮度抜群！自家製のチョジャン",
        price: "¥858",
      },
      {
        name: "ウルテ湯引き",
        description: "",
        price: "¥748",
      },
      {
        name: "コリコリ湯引き",
        description: "",
        price: "¥748",
      },
      {
        name: "スタミナハート",
        description: "",
        price: "¥748",
        badge: "おすすめ",
      },
      {
        name: "キムチ盛り合わせ",
        description: "3種の盛り合わせ",
        price: "¥748",
      },
      {
        name: "ナムル盛り合わせ",
        description: "※各種単品あり",
        price: "¥748",
      },
      {
        name: "サンチュ",
        description: "",
        price: "¥528",
      },
      {
        name: "チョレギサラダ",
        description: "",
        price: "¥638",
      },
    ],
  },
  {
    title: "ごはん・〆",
    items: [
      {
        name: "ごはん",
        description: "お米の美味しい焼肉屋ってなんかいいよね",
        price: "¥330〜",
      },
      {
        name: "ネギ玉ごはん（オンザライス用）",
        description: "お肉と相性抜群 食べ疲れしないご飯",
        price: "¥550",
      },
      {
        name: "牛骨出汁タマゴスープ",
        description: "",
        price: "¥550",
      },
      {
        name: "ビビンバ",
        description: "",
        price: "¥968",
      },
      {
        name: "クッパ",
        description: "",
        price: "¥968",
      },
      {
        name: "冷麺",
        description: "",
        price: "¥1,078",
      },
      {
        name: "テールラーメン",
        description: "",
        price: "¥1,298",
      },
      {
        name: "辛肉そば",
        description: "",
        price: "¥1,298",
      },
    ],
  },
];

export default function MenuGrid() {
  return (
    <section
      id="menu"
      className="relative py-32 md:py-40 bg-sumi"
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
          <span className="text-aka text-xs tracking-[0.5em] uppercase font-bold">
            Menu
          </span>
          <h2 className="text-washi text-3xl md:text-4xl font-bold mt-4 tracking-[0.15em]">
            お品書き
          </h2>
          <div className="aka-divider mx-auto mt-6" />
          <p className="text-washi/50 text-sm mt-6 tracking-wider font-medium">
            肉でおなかと心を満たしたい
          </p>
        </motion.div>

        {/* Menu photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-3 gap-3 md:gap-6 mb-20"
        >
          {menuPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              {photo.label && (
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="text-gold text-[10px] md:text-xs tracking-wider font-medium">
                    {photo.label}
                  </span>
                </div>
              )}
            </div>
          ))}
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
                delay: 0.15 * catIndex,
                ease: "easeOut",
              }}
            >
              {/* Category title */}
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-washi/10 to-transparent" />
                <h3 className="text-washi text-lg tracking-[0.3em] font-bold relative">
                  <span className="text-aka mr-2">|</span>
                  {category.title}
                  <span className="text-aka ml-2">|</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-washi/10 to-transparent" />
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <h4 className="text-washi text-base tracking-wider font-medium group-hover:text-aka-light transition-colors duration-300">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className={`text-[10px] px-2 py-0.5 tracking-wider font-bold ${
                            item.badge === "人気No.1"
                              ? "bg-aka text-washi"
                              : item.badge === "限定"
                              ? "bg-gold/20 text-gold border border-gold/40"
                              : "bg-aka/10 text-aka border border-aka/30"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.price && (
                        <span className="text-washi/70 text-sm tracking-wider whitespace-nowrap font-semibold">
                          {item.price}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-washi/40 text-xs mt-1.5 leading-relaxed tracking-wider">
                        {item.description}
                      </p>
                    )}
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
          ※ 本日のおすすめは黒板メニューからご確認ください
          <br />※ 仕入れ状況により内容が変更となる場合がございます
          <br />※ 表示価格は税込です
        </motion.p>
      </div>
    </section>
  );
}
